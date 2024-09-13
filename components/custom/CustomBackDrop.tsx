import React from "react";

interface CustomBackDropProps {
  onClose?: () => void; // Make onClose optional
  top?: string; // Prop for top position, optional
  zIndex?: string; // Prop for z-index, optional
}

const CustomBackDrop: React.FC<CustomBackDropProps> = ({
  onClose,
  top = "top-0", // Default value for top
  zIndex = "z-layer-4", // Default value for z-index
}) => {
  return (
    <div
      className={`fixed inset-0 h-screen w-screen ${top} left-0 ${zIndex} bg-white/5 backdrop-blur-lg transition-opacity duration-300 cursor-crosshair`}
      onClick={onClose} // onClick calls onClose if it exists
    />
  );
};

export default CustomBackDrop;
