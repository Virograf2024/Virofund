"use client";
import React, { useState } from "react";
import Image from "next/image";

interface ButtonProps {
  text: string;
  hasImage?: boolean;
  imageSrc?: string;
  isDisabled?: boolean;
}

function Button({ text, hasImage, imageSrc, isDisabled }: ButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <button
      type="button"
      disabled={isDisabled}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`link-btn cta-button primary flex items-center gap-1 ${
        isDisabled && "disabled"
      }`}
    >
      {hasImage && imageSrc && (
        <Image src={imageSrc} alt="Icon" width={40} height={20} />
      )}
      {text}
      {/* {isDisabled && isHovered && (
        <p className="tool-tip">product unavailable</p>
      )} */}
    </button>
  );
}

export default Button;
