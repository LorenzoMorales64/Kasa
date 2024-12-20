import React from "react";

interface BannerProps {
  imageSrc: string;
  altText: string;
  className?: string; // Optionnel : pour personnaliser la classe CSS si nécessaire
}

const Banner: React.FC<BannerProps> = ({ imageSrc, altText, className }) => {
  return (
    <div className={`banner ${className || ""}`.trim()}>
      <img src={imageSrc} alt={altText} />
    </div>
  );
};

export default Banner;