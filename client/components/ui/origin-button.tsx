import * as React from "react";
import { cn } from "@/lib/utils";

function getCoverDiameter(width: number, height: number, x: number, y: number) {
  return Math.ceil(
    2 *
      Math.max(
        Math.hypot(x, y),
        Math.hypot(width - x, y),
        Math.hypot(x, height - y),
        Math.hypot(width - x, height - y)
      )
  );
}

type OriginButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: React.ReactNode;
  fillColor?: string;
};

const OriginButton = React.forwardRef<HTMLButtonElement, OriginButtonProps>(
  ({ children, className, fillColor = "#8B0AB4", onClick, ...props }, ref) => {
    const buttonRef = React.useRef<HTMLButtonElement>(null);
    const [active, setActive] = React.useState(false);
    const [origin, setOrigin] = React.useState({ x: 0, y: 0 });
    const [coverSize, setCoverSize] = React.useState(0);

    const measure = React.useCallback((x: number, y: number) => {
      const node = buttonRef.current;
      if (!node) return;
      const rect = node.getBoundingClientRect();
      setCoverSize(getCoverDiameter(rect.width, rect.height, x, y));
      setOrigin({ x, y });
    }, []);

    const handlePointerEnter = (e: React.PointerEvent<HTMLButtonElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      measure(e.clientX - rect.left, e.clientY - rect.top);
      setActive(true);
    };

    const handlePointerLeave = () => setActive(false);

    const handlePointerMove = (e: React.PointerEvent<HTMLButtonElement>) => {
      if (!active) return;
      const rect = e.currentTarget.getBoundingClientRect();
      measure(e.clientX - rect.left, e.clientY - rect.top);
    };

    const setRefs = React.useCallback(
      (node: HTMLButtonElement | null) => {
        (buttonRef as React.MutableRefObject<HTMLButtonElement | null>).current = node;
        if (typeof ref === "function") ref(node);
        else if (ref) ref.current = node;
      },
      [ref]
    );

    return (
      <button
        ref={setRefs}
        className={cn(
          "relative inline-flex cursor-pointer select-none items-center justify-center overflow-hidden",
          "transition-colors duration-300",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
          "disabled:pointer-events-none disabled:opacity-50",
          className
        )}
        onClick={onClick}
        onPointerEnter={handlePointerEnter}
        onPointerLeave={handlePointerLeave}
        onPointerMove={handlePointerMove}
        {...props}
      >
        {/* Radial fill that expands from cursor position */}
        <span
          aria-hidden
          className="pointer-events-none absolute rounded-full"
          style={{
            width: coverSize,
            height: coverSize,
            left: origin.x,
            top: origin.y,
            backgroundColor: fillColor,
            transform: `translate(-50%, -50%) scale(${active && coverSize > 0 ? 1 : 0})`,
            transition: active
              ? "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)"
              : "transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        />
        <span className="relative z-10 inline-flex items-center justify-center gap-2">
          {children}
        </span>
      </button>
    );
  }
);

OriginButton.displayName = "OriginButton";

export { OriginButton };
export type { OriginButtonProps };
