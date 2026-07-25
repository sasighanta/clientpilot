interface BadgeProps {
  children: React.ReactNode;
  color?: "green" | "blue" | "amber" | "red" | "gray";
}

export default function Badge({
  children,
  color = "green",
}: BadgeProps) {
  const colors = {
    green:
      "bg-emerald-100 text-emerald-700 border border-emerald-200",

    blue:
      "bg-blue-100 text-blue-700 border border-blue-200",

    amber:
      "bg-amber-100 text-amber-700 border border-amber-200",

    red:
      "bg-red-100 text-red-700 border border-red-200",

    gray:
      "bg-slate-100 text-slate-700 border border-slate-200",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-semibold ${colors[color]}`}
    >
      {children}
    </span>
  );
}