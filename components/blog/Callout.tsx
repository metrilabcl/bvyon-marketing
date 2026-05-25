import { Info, AlertTriangle, Lightbulb } from "lucide-react";

interface Props {
  type?: "info" | "warning" | "tip";
  children: React.ReactNode;
}

const styles = {
  info: "bg-blue-50 border-blue-400 text-blue-900",
  warning: "bg-amber-50 border-amber-400 text-amber-900",
  tip: "bg-green-50 border-green-400 text-green-900",
};

const icons = {
  info: Info,
  warning: AlertTriangle,
  tip: Lightbulb,
};

export default function Callout({ type = "info", children }: Props) {
  const Icon = icons[type];
  return (
    <aside className={`my-6 border-l-4 rounded-r-xl px-5 py-4 flex gap-3 items-start ${styles[type]}`}>
      <Icon className="w-5 h-5 mt-0.5 shrink-0" aria-hidden="true" />
      <div>{children}</div>
    </aside>
  );
}
