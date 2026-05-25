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
  info: "ℹ️",
  warning: "⚠️",
  tip: "💡",
};

export default function Callout({ type = "info", children }: Props) {
  return (
    <aside className={`my-6 border-l-4 rounded-r-xl px-5 py-4 ${styles[type]}`}>
      <span className="mr-2">{icons[type]}</span>
      {children}
    </aside>
  );
}
