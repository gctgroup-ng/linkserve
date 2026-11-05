import { cn } from "@/lib/utils";

/** Simple wordmark with a connected-nodes mark. Placeholder until brand assets are supplied. */
export function Logo({
  className,
  invert = false,
}: {
  className?: string;
  invert?: boolean;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <svg
        width="30"
        height="30"
        viewBox="0 0 32 32"
        fill="none"
        aria-hidden="true"
      >
        <rect width="32" height="32" rx="9" fill={invert ? "#ffffff" : "#35105C"} />
        <path
          d="M9 9v10a4 4 0 0 0 4 4h10"
          stroke={invert ? "#35105C" : "#ffffff"}
          strokeWidth="2.4"
          strokeLinecap="round"
        />
        <circle cx="9" cy="9" r="2.4" fill="#9B6DFF" />
        <circle cx="23" cy="23" r="2.4" fill="#9B6DFF" />
      </svg>
      <span
        className={cn(
          "text-lg font-bold tracking-tight",
          invert ? "text-white" : "text-primary",
        )}
      >
        Linkserve
      </span>
    </span>
  );
}
