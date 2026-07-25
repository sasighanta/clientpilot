interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger";
}

export default function Button({
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const base =
    "cursor-pointer rounded-xl px-6 py-3 font-semibold transition-all duration-300 focus:outline-none focus:ring-2";

  const variants = {
    primary:
      "bg-emerald-600 text-white hover:bg-emerald-700 focus:ring-emerald-500",

    secondary:
      "border border-slate-300 bg-white text-slate-700 hover:bg-slate-100 focus:ring-slate-300",

    danger:
      "bg-red-500 text-white hover:bg-red-600 focus:ring-red-400",
  };

  return (
    <button
      {...props}
      className={`${base} ${variants[variant]} ${className}`}
    />
  );
}