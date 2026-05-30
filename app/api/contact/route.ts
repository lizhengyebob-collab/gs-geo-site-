import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

const TO_EMAIL = "lizhengyebob@gmail.com";
const FROM_EMAIL = process.env.GMAIL_USER ?? "";
const APP_PASSWORD = process.env.GMAIL_APP_PASSWORD ?? "";

function buildHtml(data: Record<string, string>) {
  return `
<!DOCTYPE html>
<html lang="zh-CN">
<head><meta charset="UTF-8"><title>GS GEO 新询盘</title></head>
<body style="margin:0;padding:0;background:#04080f;font-family:system-ui,sans-serif;color:#f0ece0;">
  <div style="max-width:560px;margin:0 auto;padding:32px 24px;">

    <!-- Header -->
    <div style="border-bottom:1px solid rgba(212,168,83,0.3);padding-bottom:20px;margin-bottom:28px;">
      <div style="display:flex;align-items:center;gap:10px;">
        <span style="font-size:22px;font-weight:900;color:#fff;">GS</span>
        <span style="font-size:22px;font-weight:900;color:#d4a853;">GEO</span>
      </div>
      <p style="color:#94a3b8;margin:6px 0 0;font-size:13px;">AI 搜索可见度优化专家</p>
    </div>

    <!-- Title -->
    <h1 style="font-size:20px;font-weight:700;color:#fff;margin:0 0 4px;">
      🎯 新询盘 · ${data.company ?? "未填写"}
    </h1>
    <p style="color:#64748b;font-size:13px;margin:0 0 28px;">
      来自官网联系表单 · ${new Date().toLocaleString("zh-CN", { timeZone: "Asia/Shanghai" })}
    </p>

    <!-- Fields -->
    ${[
      ["姓名",     data.name     ?? "—"],
      ["公司",     data.company  ?? "—"],
      ["邮箱",     data.email    ?? "—"],
      ["官网域名", data.website  ?? "—"],
      ["行业",     data.industry || "未填写"],
    ].map(([label, value]) => `
    <div style="display:flex;gap:16px;padding:12px 0;border-bottom:1px solid rgba(255,255,255,0.05);">
      <span style="color:#64748b;font-size:13px;width:70px;flex-shrink:0;">${label}</span>
      <span style="color:#e2e8f0;font-size:13px;word-break:break-all;">${value}</span>
    </div>`).join("")}

    <!-- Message -->
    ${data.message ? `
    <div style="margin-top:20px;padding:16px;background:rgba(212,168,83,0.06);border:1px solid rgba(212,168,83,0.15);border-radius:10px;">
      <p style="color:#94a3b8;font-size:12px;margin:0 0 8px;text-transform:uppercase;letter-spacing:.05em;">需求描述</p>
      <p style="color:#e2e8f0;font-size:14px;line-height:1.7;margin:0;">${data.message.replace(/\n/g, "<br>")}</p>
    </div>` : ""}

    <!-- CTA -->
    <div style="margin-top:28px;text-align:center;">
      <a href="mailto:${data.email}"
        style="display:inline-block;padding:12px 28px;background:linear-gradient(135deg,#1e3a8a,#1e40af);color:#fff;font-weight:600;font-size:14px;border-radius:10px;text-decoration:none;">
        回复此询盘
      </a>
    </div>

    <!-- Footer -->
    <p style="color:#334155;font-size:12px;margin-top:32px;text-align:center;">
      © ${new Date().getFullYear()} GS GEO · lizhengyebob@gmail.com · 19040525048
    </p>
  </div>
</body>
</html>`;
}

export async function POST(request: Request) {
  try {
    const data: Record<string, string> = await request.json();

    if (!data.name || !data.email || !data.company || !data.website) {
      return NextResponse.json({ message: "请填写必填项" }, { status: 400 });
    }

    /* ── If env vars are missing, skip SMTP and return success (dev mode) ── */
    if (!FROM_EMAIL || !APP_PASSWORD) {
      console.log("[contact] SMTP not configured — skipping email send");
      console.log("[contact] Form data:", data);
      return NextResponse.json({ ok: true });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: FROM_EMAIL, pass: APP_PASSWORD },
    });

    await transporter.sendMail({
      from:    `"GS GEO 官网" <${FROM_EMAIL}>`,
      to:      TO_EMAIL,
      replyTo: data.email,
      subject: `【GS GEO 询盘】${data.company} · ${data.name}`,
      html:    buildHtml(data),
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] send error:", err);
    return NextResponse.json(
      { message: "邮件发送失败，请直接联系 lizhengyebob@gmail.com" },
      { status: 500 }
    );
  }
}
