/**
 * /api/contact  — 联系表单邮件发送路由
 *
 * 当前状态：演示模式（无 SMTP 配置时跳过发送，直接返回成功）
 *
 * ══════════════════════════════════════════════════════
 * 方案 A：Gmail SMTP（已预置，推荐快速上线）
 * ──────────────────────────────────────────────────────
 * 1. Gmail 账户 → 设置 → 安全性 → 两步验证（开启）
 * 2. 创建"应用专用密码"（16 位）
 * 3. 在 Vercel 后台 → Settings → Environment Variables 添加：
 *    GMAIL_USER        = lizhengyebob@gmail.com
 *    GMAIL_APP_PASSWORD = xxxx-xxxx-xxxx-xxxx
 * 4. Redeploy → 表单提交自动发邮件到 lizhengyebob@gmail.com
 *
 * ══════════════════════════════════════════════════════
 * 方案 B：Resend（推荐生产环境，免费额度 3000 封/月）
 * ──────────────────────────────────────────────────────
 * 1. 注册 resend.com，创建 API Key
 * 2. npm install resend
 * 3. 将下方 nodemailer 代码替换为：
 *
 *    import { Resend } from 'resend';
 *    const resend = new Resend(process.env.RESEND_API_KEY);
 *    await resend.emails.send({
 *      from: 'GS GEO <noreply@geo.goushaoai.com>',
 *      to: 'lizhengyebob@gmail.com',
 *      subject: `【GS GEO 询盘】${data.company} · ${data.name}`,
 *      html: buildHtml(data),
 *    });
 *
 * 4. Vercel 环境变量：RESEND_API_KEY = re_xxxxxxxxx
 * ══════════════════════════════════════════════════════
 */

import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

const TO_EMAIL     = "lizhengyebob@gmail.com";
const FROM_EMAIL   = process.env.GMAIL_USER ?? "";
const APP_PASSWORD = process.env.GMAIL_APP_PASSWORD ?? "";

function buildHtml(data: Record<string, string>) {
  return `
<!DOCTYPE html>
<html lang="zh-CN">
<head><meta charset="UTF-8"><title>GS GEO 新询盘</title></head>
<body style="margin:0;padding:0;background:#04080f;font-family:system-ui,sans-serif;color:#f0ece0;">
  <div style="max-width:560px;margin:0 auto;padding:32px 24px;">

    <div style="border-bottom:1px solid rgba(212,168,83,0.3);padding-bottom:20px;margin-bottom:28px;">
      <div style="display:flex;align-items:center;gap:10px;">
        <span style="font-size:22px;font-weight:900;color:#fff;">GS</span>
        <span style="font-size:22px;font-weight:900;color:#d4a853;">GEO</span>
      </div>
      <p style="color:#94a3b8;margin:6px 0 0;font-size:13px;">AI 搜索可见度优化专家 · geo.goushaoai.com</p>
    </div>

    <h1 style="font-size:20px;font-weight:700;color:#fff;margin:0 0 4px;">
      🎯 新询盘 · ${data.company ?? "未填写"}
    </h1>
    <p style="color:#64748b;font-size:13px;margin:0 0 28px;">
      来自官网联系表单 · ${new Date().toLocaleString("zh-CN", { timeZone: "Asia/Shanghai" })}
    </p>

    ${[
      ["姓名",     data.name      ?? "—"],
      ["公司",     data.company   ?? "—"],
      ["联系方式", data.contact   ?? data.email ?? "—"],
      ["官网域名", data.website   ?? "—"],
      ["行业",     data.industry  || "未填写"],
      ["检测平台", data.platforms || "未选择"],
    ].map(([label, value]) => `
    <div style="display:flex;gap:16px;padding:12px 0;border-bottom:1px solid rgba(255,255,255,0.05);">
      <span style="color:#64748b;font-size:13px;width:70px;flex-shrink:0;">${label}</span>
      <span style="color:#e2e8f0;font-size:13px;word-break:break-all;">${value}</span>
    </div>`).join("")}

    ${(data.pain || data.message) ? `
    <div style="margin-top:20px;padding:16px;background:rgba(212,168,83,0.06);border:1px solid rgba(212,168,83,0.15);border-radius:10px;">
      <p style="color:#94a3b8;font-size:12px;margin:0 0 8px;text-transform:uppercase;letter-spacing:.05em;">当前困扰</p>
      <p style="color:#e2e8f0;font-size:14px;line-height:1.7;margin:0;">${(data.pain || data.message || "").replace(/\n/g, "<br>")}</p>
    </div>` : ""}

    <div style="margin-top:28px;text-align:center;">
      <a href="mailto:${data.email}"
        style="display:inline-block;padding:12px 28px;background:linear-gradient(135deg,#1e3a8a,#1e40af);color:#fff;font-weight:600;font-size:14px;border-radius:10px;text-decoration:none;">
        回复此询盘
      </a>
    </div>

    <p style="color:#334155;font-size:12px;margin-top:32px;text-align:center;">
      © ${new Date().getFullYear()} GS GEO · geo.goushaoai.com · lizhengyebob@gmail.com
    </p>
  </div>
</body>
</html>`;
}

export async function POST(request: Request) {
  try {
    const data: Record<string, string> = await request.json();

    if (!data.name || !data.company || !data.website || (!data.contact && !data.email)) {
      return NextResponse.json({ message: "请填写必填项" }, { status: 400 });
    }

    /* 演示模式：SMTP 未配置时跳过发送，直接返回成功 */
    if (!FROM_EMAIL || !APP_PASSWORD) {
      console.log("[contact] SMTP not configured — demo mode, skipping send");
      console.log("[contact] Received:", { name: data.name, company: data.company, email: data.email });
      return NextResponse.json({ ok: true });
    }

    /* Gmail SMTP 发送 */
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: FROM_EMAIL, pass: APP_PASSWORD },
    });

    await transporter.sendMail({
      from:    `"GS GEO 官网" <${FROM_EMAIL}>`,
      to:      TO_EMAIL,
      replyTo: data.email || data.contact,
      subject: `【GS GEO 询盘】${data.company} · ${data.name}`,
      html:    buildHtml(data),
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] send error:", err);
    return NextResponse.json(
      { message: "提交失败，请直接发邮件至 lizhengyebob@gmail.com" },
      { status: 500 }
    );
  }
}
