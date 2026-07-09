import * as React from "react";
import { cn } from "@/lib/utils";
import { OriginButton } from "./origin-button";
import { AnimatedButton } from "./animated-button";

type DropdownMenuProps = {
  trigger: React.ReactNode;
  items: Array<{
    label: string;
    onClick: () => void;
  }>;
  className?: string;
  fillColor?: string;
};

const DropdownMenu = React.forwardRef<HTMLDivElement, DropdownMenuProps>(
  ({ trigger, items, className, fillColor = "#8B0AB4" }, ref) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const timeoutRef = React.useRef<NodeJS.Timeout>();

    const handleMouseEnter = () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      setIsOpen(true);
    };

    const handleMouseLeave = () => {
      timeoutRef.current = setTimeout(() => {
        setIsOpen(false);
      }, 150);
    };

    const handleItemClick = (callback: () => void) => {
      callback();
      setIsOpen(false);
    };

    React.useEffect(() => {
      return () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
      };
    }, []);

    return (
      <div
        ref={ref}
        className={cn("relative", className)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {trigger}

        {/* Dropdown menu */}
        <div
          className={cn(
            "absolute top-full left-0 mt-2 min-w-[180px] bg-white border border-[#ECECEC] rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-out",
            isOpen
              ? "opacity-100 visible translate-y-0"
              : "opacity-0 invisible -translate-y-2"
          )}
        >
          {items.map((item, index) => (
            <OriginButton
              key={index}
              onClick={() => handleItemClick(item.onClick)}
              fillColor={fillColor}
              className="w-full text-left px-4 py-3 font-kanit text-[13px] text-[#121212] hover:text-white border-b border-[#ECECEC] last:border-b-0 rounded-none justify-start"
            >
              {item.label}
            </OriginButton>
          ))}
        </div>
      </div>
    );
  }
);

DropdownMenu.displayName = "DropdownMenu";

export { DropdownMenu };
export type { DropdownMenuProps };
