import React, { useEffect, useState } from "react";

interface Breakpoints {
  minWidthSmall?: number;
  maxWidthSmall?: number;
  minWidthMedium?: number;
  maxWidthMedium?: number;
  minWidthLarge?: number;
  maxWidthLarge?: number;
}

interface Heights {
  heightSmallStart?: number;
  heightSmallEnd?: number;
  heightMediumStart?: number;
  heightMediumEnd?: number;
  heightLargeStart?: number;
  heightLargeEnd?: number;
}

interface ResponsiveHeightWrapperProps {
  breakpoints?: Breakpoints; // Made optional
  heights?: Heights; // Made optional
  children: React.ReactNode;
}

const ResponsiveHeightWrapper: React.FC<ResponsiveHeightWrapperProps> = ({
  breakpoints = {}, // Default empty object
  heights = {}, // Default empty object
  children,
}) => {
  const [height, setHeight] = useState<number | string>("auto");

  useEffect(() => {
    const handleResize = () => {
      const viewportWidth = window.innerWidth;

      // Destructuring with default values for optional properties
      const {
        minWidthSmall = 0,
        maxWidthSmall = 0,
        minWidthMedium = 768,
        maxWidthMedium = 1024,
        minWidthLarge = 1024,
        maxWidthLarge = 1440,
      } = breakpoints;

      const {
        heightSmallStart = 0,
        heightSmallEnd = 0,
        heightMediumStart = 0,
        heightMediumEnd = 0,
        heightLargeStart = 0,
        heightLargeEnd = 0,
      } = heights;

      // Responsive height calculation with safe default values
      if (viewportWidth < minWidthSmall) {
        setHeight(heightSmallStart);
      } else if (
        viewportWidth >= minWidthSmall &&
        viewportWidth < maxWidthSmall
      ) {
        setHeight(
          heightSmallStart +
            ((viewportWidth - minWidthSmall) /
              (maxWidthSmall - minWidthSmall)) *
              (heightSmallEnd - heightSmallStart)
        );
      } else if (
        viewportWidth >= minWidthMedium &&
        viewportWidth < maxWidthMedium
      ) {
        setHeight(
          heightMediumStart +
            ((viewportWidth - minWidthMedium) /
              (maxWidthMedium - minWidthMedium)) *
              (heightMediumEnd - heightMediumStart)
        );
      } else if (
        viewportWidth >= minWidthLarge &&
        viewportWidth < maxWidthLarge
      ) {
        setHeight(
          heightLargeStart +
            ((viewportWidth - minWidthLarge) /
              (maxWidthLarge - minWidthLarge)) *
              (heightLargeEnd - heightLargeStart)
        );
      } else if (viewportWidth >= maxWidthLarge) {
        setHeight(heightLargeEnd);
      }
    };

    handleResize(); // Set initial height
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoints, heights]);

  return (
    <div
      style={{ height: typeof height === "string" ? height : `${height}px` }}
    >
      {children}
    </div>
  );
};

export default ResponsiveHeightWrapper;
