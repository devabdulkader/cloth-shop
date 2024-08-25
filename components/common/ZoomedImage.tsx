"use client";
import React, { useState } from "react";
import Image from "next/image";

interface ZoomedImageProps {
  src: string;
}

const ZoomedImage: React.FC<ZoomedImageProps> = ({ src }) => {
  const [zoomX, setZoomX] = useState("0%");
  const [zoomY, setZoomY] = useState("0%");
  const [isZoomed, setIsZoomed] = useState(false);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const element = event.currentTarget;
    const { offsetX, offsetY } = event.nativeEvent;
    const width = element.offsetWidth;
    const height = element.offsetHeight;

    setZoomX(`${(offsetX * 100) / width}%`);
    setZoomY(`${(offsetY * 100) / height}%`);
  };

  const handleMouseEnter = () => {
    setIsZoomed(true);
  };

  const handleMouseLeave = () => {
    setIsZoomed(false);
  };

  return (
    <div
      className="relative w-full h-full mx-auto cursor-zoom-in overflow-hidden border"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Base Image */}
      <Image
        src={src}
        layout="fill"
        objectFit="cover"
        alt="Zoomed Image"
        placeholder="empty"
        quality={100}
      />

      {/* Zoom Effect */}
      {isZoomed && (
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${src})`,
            backgroundSize: "300%",
            backgroundPosition: `${zoomX} ${zoomY}`,
            width: "100%",
            height: "100%",
            pointerEvents: "none",
            transition:
              "background-size 0.2s ease, background-position 0.2s ease",
          }}
        />
      )}
    </div>
  );
};

export default ZoomedImage;
