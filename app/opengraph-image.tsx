import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "GS GEO — AI 搜索可见度优化专家";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          background: "linear-gradient(135deg, #04080f 0%, #0a1628 50%, #04080f 100%)",
          padding: "80px",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Grid pattern overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(212,168,83,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(212,168,83,0.05) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        {/* Gold glow orb */}
        <div
          style={{
            position: "absolute",
            top: -100,
            right: -100,
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: "rgba(212,168,83,0.08)",
            filter: "blur(80px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -80,
            left: -80,
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "rgba(30,58,138,0.12)",
            filter: "blur(80px)",
          }}
        />

        {/* Logo row */}
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 48, position: "relative" }}>
          {/* GS badge */}
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 16,
              border: "2px solid rgba(212,168,83,0.5)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "rgba(212,168,83,0.1)",
            }}
          >
            <span style={{ fontSize: 24, fontWeight: 900, color: "#d4a853", letterSpacing: -1 }}>GS</span>
          </div>
          <div style={{ display: "flex", alignItems: "baseline", gap: 4 }}>
            <span style={{ fontSize: 42, fontWeight: 900, color: "#ffffff", letterSpacing: -1 }}>GS</span>
            <span style={{ fontSize: 42, fontWeight: 900, color: "#d4a853", letterSpacing: -1 }}>GEO</span>
          </div>
        </div>

        {/* Main headline */}
        <div
          style={{
            fontSize: 62,
            fontWeight: 900,
            color: "#ffffff",
            lineHeight: 1.1,
            letterSpacing: -2,
            marginBottom: 24,
            position: "relative",
            maxWidth: 800,
          }}
        >
          让 AI 主动推荐
          <br />
          <span style={{ color: "#d4a853" }}>你的品牌</span>
        </div>

        {/* Sub */}
        <div
          style={{
            fontSize: 26,
            color: "#94a3b8",
            marginBottom: 48,
            position: "relative",
            maxWidth: 700,
            lineHeight: 1.5,
          }}
        >
          GEO · AEO · LLMO · AI Visibility 全栈优化服务
        </div>

        {/* Platform tags */}
        <div style={{ display: "flex", gap: 12, position: "relative", flexWrap: "wrap" }}>
          {["ChatGPT", "Claude", "Perplexity", "豆包", "DeepSeek", "Gemini"].map((p) => (
            <div
              key={p}
              style={{
                padding: "8px 20px",
                borderRadius: 100,
                border: "1px solid rgba(212,168,83,0.3)",
                background: "rgba(212,168,83,0.08)",
                color: "#d4a853",
                fontSize: 18,
                fontWeight: 600,
              }}
            >
              {p}
            </div>
          ))}
        </div>

        {/* Domain */}
        <div
          style={{
            position: "absolute",
            bottom: 48,
            right: 80,
            fontSize: 18,
            color: "#334155",
          }}
        >
          geo.goushaoai.com
        </div>
      </div>
    ),
    { ...size }
  );
}
