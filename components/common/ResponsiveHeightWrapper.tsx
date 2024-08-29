// components/ResponsiveHeightWrapper.tsx

import React, { useEffect, useState } from "react";

interface Breakpoints {
  minWidthSmall: number;
  maxWidthSmall: number;
  minWidthMedium: number;
  maxWidthMedium: number;
  minWidthLarge: number;
  maxWidthLarge: number;
}

interface Heights {
  heightSmallStart: number;
  heightSmallEnd: number;
  heightMediumStart: number;
  heightMediumEnd: number;
  heightLargeStart: number;
  heightLargeEnd: number;
}

interface ResponsiveHeightWrapperProps {
  breakpoints: Breakpoints;
  heights: Heights;
  children: React.ReactNode;
}

const ResponsiveHeightWrapper: React.FC<ResponsiveHeightWrapperProps> = ({
  breakpoints,
  heights,
  children,
}) => {
  const [height, setHeight] = useState<number | string>("auto");

  useEffect(() => {
    const handleResize = () => {
      const viewportWidth = window.innerWidth;
      const {
        minWidthSmall,
        maxWidthSmall,
        minWidthMedium,
        maxWidthMedium,
        minWidthLarge,
        maxWidthLarge,
      } = breakpoints;

      const {
        heightSmallStart,
        heightSmallEnd,
        heightMediumStart,
        heightMediumEnd,
        heightLargeStart,
        heightLargeEnd,
      } = heights;

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
