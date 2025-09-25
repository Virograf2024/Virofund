"use client";
import React from "react";
import Image from "next/image";

interface ButtonProps {
  text: string;
  hasImage?: boolean;
  imageSrc?: string;
  isDisabled?: boolean;
}

function Button({ text, hasImage, imageSrc, isDisabled }: ButtonProps) {
  return (
    <button
      type="button"
      disabled={isDisabled}
      className={`link-btn cta-button primary flex items-center gap-1 ${
        isDisabled ? "disabled" : ""
      }`}
      aria-label={isDisabled ? `${text} (unavailable)` : text}
    >
      {hasImage && imageSrc && (
        <Image 
          src={imageSrc} 
          alt="" 
          width={40} 
          height={20} 
          aria-hidden="true"
        />
      )}
      {text}
    </button>
  );
}

export default Button;
