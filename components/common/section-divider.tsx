export default function SectionDivider({
  color = "#F9FAFB",
  height = 48,
}: { color?: string; height?: number }) {
  return (
    <div className="w-full overflow-hidden leading-none" style={{ height }}>
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="w-full h-full"
      >
        <path
          d="M0,0V46.29C47.79,68.49,103.59,75.29,158,63.68C230,51,284,24,339,24s109,27,168,32
             c59,5,113-16,172-21.69C738,28,796,46,852,58c72,16,142,22,219-4V0Z"
          fill={color}
        />
      </svg>
    </div>
  );
}
