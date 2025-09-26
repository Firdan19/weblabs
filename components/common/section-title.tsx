type Props = {
  title: string;
  subtitle?: string;
  center?: boolean;
};

export default function SectionTitle({ title, subtitle, center = true }: Props) {
  return (
    <div className={`mx-auto max-w-3xl ${center ? "text-center" : ""}`}>
      <h2
        className="text-3xl sm:text-4xl font-semibold text-[#0A1A3F]"
        style={{ fontFamily: "var(--font-playfair)" }}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-[#0A1A3F]/80">{subtitle}</p>
      )}
    </div>
  );
}
