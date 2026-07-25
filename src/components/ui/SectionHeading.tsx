import Badge from "./Badge";

interface Props {
  badge: string;
  title: string;
  description: string;
  color?: "green" | "blue" | "amber";
}

export default function SectionHeading({
  badge,
  title,
  description,
  color = "green",
}: Props) {
  return (
    <div className="text-center">
      <Badge color={color}>{badge}</Badge>

      <h2 className="mt-6 text-5xl font-bold text-slate-900">
        {title}
      </h2>

      <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-600">
        {description}
      </p>
    </div>
  );
}