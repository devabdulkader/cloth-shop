// import React, { useEffect, useState } from "react";

// interface Breakpoints {
//   minWidthMedium?: number;
//   maxWidthMedium?: number;
//   minWidthLarge?: number;
//   maxWidthLarge?: number;
// }

// interface Heights {
//   heightMediumStart?: number;
//   heightMediumEnd?: number;
//   heightLargeStart?: number;
//   heightLargeEnd?: number;
// }

// interface ResponsiveHeightWrapperProps {
//   breakpoints?: Breakpoints;
//   heights?: Heights;
//   children: React.ReactNode;
// }

// const ResponsiveHeightWrapper: React.FC<ResponsiveHeightWrapperProps> = ({
//   breakpoints = {},
//   heights = {},
//   children,
// }) => {
//   const [height, setHeight] = useState<number | string>("auto");

//   useEffect(() => {
//     const handleResize = () => {
//       const viewportWidth = window.innerWidth;

//       // Destructuring with default values for optional properties
//       const {
//         minWidthMedium = 768,
//         maxWidthMedium = 1024,
//         minWidthLarge = 1024,
//         maxWidthLarge = 1440,
//       } = breakpoints;

//       const {
//         heightMediumStart = 0,
//         heightMediumEnd = 0,
//         heightLargeStart = 0,
//         heightLargeEnd = 0,
//       } = heights;

//       // Responsive height calculation
//       if (viewportWidth >= minWidthMedium && viewportWidth < maxWidthMedium) {
//         setHeight(
//           heightMediumStart +
//             ((viewportWidth - minWidthMedium) /
//               (maxWidthMedium - minWidthMedium)) *
//               (heightMediumEnd - heightMediumStart)
//         );
//       } else if (
//         viewportWidth >= minWidthLarge &&
//         viewportWidth < maxWidthLarge
//       ) {
//         setHeight(
//           heightLargeStart +
//             ((viewportWidth - minWidthLarge) /
//               (maxWidthLarge - minWidthLarge)) *
//               (heightLargeEnd - heightLargeStart)
//         );
//       } else if (viewportWidth >= maxWidthLarge) {
//         setHeight(heightLargeEnd);
//       } else {
//         setHeight("auto"); // For small screens or outside of defined ranges
//       }
//     };

//     handleResize(); // Set initial height
//     window.addEventListener("resize", handleResize);

//     return () => window.removeEventListener("resize", handleResize);
//   }, [breakpoints, heights]);

//   return (
//     <div
//       style={{ height: typeof height === "string" ? height : `${height}px` }}
//     >
//       {children}
//     </div>
//   );
// };

// export default ResponsiveHeightWrapper;

import React, { useEffect, useState } from "react";

interface Breakpoints {
  minWidthMedium?: number;
  maxWidthMedium?: number;
  minWidthLarge?: number;
  maxWidthLarge?: number;
}

interface Heights {
  initialHeight?: number | string; // New prop for initial height before first breakpoint
  heightMediumStart?: number;
  heightMediumEnd?: number;
  heightLargeStart?: number;
  heightLargeEnd?: number;
}

interface ResponsiveHeightWrapperProps {
  breakpoints?: Breakpoints;
  heights?: Heights;
  children: React.ReactNode;
}

const ResponsiveHeightWrapper: React.FC<ResponsiveHeightWrapperProps> = ({
  breakpoints = {},
  heights = { initialHeight: "auto" }, // Default initial height if not provided
  children,
}) => {
  const [height, setHeight] = useState<number | string>("auto");

  useEffect(() => {
    const handleResize = () => {
      const viewportWidth = window.innerWidth;

      // Destructuring with default values for optional properties
      const {
        minWidthMedium = 768,
        maxWidthMedium = 1024,
        minWidthLarge = 1024,
        maxWidthLarge = 1440,
      } = breakpoints;

      const {
        initialHeight = "auto", // Default initial height if not provided in heights
        heightMediumStart = 0,
        heightMediumEnd = 0,
        heightLargeStart = 0,
        heightLargeEnd = 0,
      } = heights;

      // Responsive height calculation
      if (viewportWidth < minWidthMedium) {
        setHeight(initialHeight); // Use initialHeight from heights prop
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
      } else {
        setHeight("auto"); // Fallback for unexpected cases
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
