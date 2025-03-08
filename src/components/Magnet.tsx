import React, {
  useState,
  useEffect,
  useRef,
  ReactNode,
  HTMLAttributes,
} from "react";

interface MagnetProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  padding?: number;
  disabled?: boolean;
  magnetStrength?: number;
}

const Magnet: React.FC<MagnetProps> = ({
  children,
  padding = 50,
  disabled = false,
  magnetStrength = 10,
  ...props
}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const magnetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (disabled) {
      setPosition({ x: 0, y: 0 });
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (!magnetRef.current) return;

      const { left, top, width, height } =
        magnetRef.current.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;

      const distX = centerX - e.clientX;
      const distY = centerY - e.clientY;

      if (
        Math.abs(distX) < width / 2 + padding &&
        Math.abs(distY) < height / 2 + padding
      ) {
        const offsetX = -distX / magnetStrength;
        const offsetY = -distY / magnetStrength;
        setPosition({ x: offsetX, y: offsetY });
      } else {
        setPosition({ x: 0, y: 0 });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [padding, disabled, magnetStrength]);

  return (
    <div ref={magnetRef} className="inline-block relative" {...props}>
      <div
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
          transition: "transform 0.2s ease-out",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Magnet;
