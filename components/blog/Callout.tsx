import { Info, AlertTriangle, Lightbulb } from "lucide-react";

interface Props {
  type?: "info" | "warning" | "tip";
  children: React.ReactNode;
}

const palette = {
  info: { border: "#4f7cff", bg: "rgba(79,124,255,.1)", icon: "#7fa0ff" },
  warning: { border: "#FF6B2B", bg: "rgba(255,107,43,.1)", icon: "#ff9255" },
  tip: { border: "#34d399", bg: "rgba(52,211,153,.1)", icon: "#5ee0ad" },
};

const icons = {
  info: Info,
  warning: AlertTriangle,
  tip: Lightbulb,
};

export default function Callout({ type = "info", children }: Props) {
  const Icon = icons[type];
  const c = palette[type];
  return (
    <aside
      className="not-prose"
      style={{
        margin: "24px 0",
        borderLeft: `4px solid ${c.border}`,
        borderRadius: "0 12px 12px 0",
        padding: "16px 20px",
        display: "flex",
        gap: 12,
        alignItems: "flex-start",
        background: c.bg,
        color: "#e6e9f2",
      }}
    >
      <Icon className="w-5 h-5 mt-0.5 shrink-0" style={{ color: c.icon }} aria-hidden="true" />
      <div style={{ lineHeight: 1.6, fontSize: 15 }}>{children}</div>
    </aside>
  );
}
