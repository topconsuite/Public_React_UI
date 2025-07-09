import React from "react";

interface FlagProps {
  width?: number;
  height?: number;
}

export const BrazilFlag: React.FC<FlagProps> = ({ width = 20, height = 15 }) => (
  <svg width={width} height={height} viewBox="0 0 20 15" xmlns="http://www.w3.org/2000/svg">
    <rect width="20" height="15" fill="#009739" />
    <polygon points="10,2 18,7.5 10,13 2,7.5" fill="#FEDD00" />
    <circle cx="10" cy="7.5" r="3" fill="#012169" />
    <path d="M7.5,6.5 Q10,5.5 12.5,6.5 Q10,8.5 7.5,6.5" fill="#FEDD00" />
  </svg>
);

export const USAFlag: React.FC<FlagProps> = ({ width = 20, height = 15 }) => (
  <svg width={width} height={height} viewBox="0 0 20 15" xmlns="http://www.w3.org/2000/svg">
    <rect width="20" height="15" fill="#B22234" />
    <rect y="1" width="20" height="1" fill="#FFFFFF" />
    <rect y="3" width="20" height="1" fill="#FFFFFF" />
    <rect y="5" width="20" height="1" fill="#FFFFFF" />
    <rect y="7" width="20" height="1" fill="#FFFFFF" />
    <rect y="9" width="20" height="1" fill="#FFFFFF" />
    <rect y="11" width="20" height="1" fill="#FFFFFF" />
    <rect y="13" width="20" height="1" fill="#FFFFFF" />
    <rect width="8" height="8" fill="#3C3B6E" />
    <g fill="#FFFFFF">
      <circle cx="1.5" cy="1.5" r="0.3" />
      <circle cx="3.5" cy="1.5" r="0.3" />
      <circle cx="5.5" cy="1.5" r="0.3" />
      <circle cx="2.5" cy="2.5" r="0.3" />
      <circle cx="4.5" cy="2.5" r="0.3" />
      <circle cx="6.5" cy="2.5" r="0.3" />
      <circle cx="1.5" cy="3.5" r="0.3" />
      <circle cx="3.5" cy="3.5" r="0.3" />
      <circle cx="5.5" cy="3.5" r="0.3" />
      <circle cx="2.5" cy="4.5" r="0.3" />
      <circle cx="4.5" cy="4.5" r="0.3" />
      <circle cx="6.5" cy="4.5" r="0.3" />
      <circle cx="1.5" cy="5.5" r="0.3" />
      <circle cx="3.5" cy="5.5" r="0.3" />
      <circle cx="5.5" cy="5.5" r="0.3" />
      <circle cx="2.5" cy="6.5" r="0.3" />
      <circle cx="4.5" cy="6.5" r="0.3" />
      <circle cx="6.5" cy="6.5" r="0.3" />
    </g>
  </svg>
);

export const SpainFlag: React.FC<FlagProps> = ({ width = 20, height = 15 }) => (
  <svg width={width} height={height} viewBox="0 0 20 15" xmlns="http://www.w3.org/2000/svg">
    <rect width="20" height="15" fill="#C60B1E" />
    <rect y="3.75" width="20" height="7.5" fill="#FFC400" />
    <rect y="11.25" width="20" height="3.75" fill="#C60B1E" />
    <g transform="translate(4, 6)">
      <rect width="3" height="3" fill="#FFFFFF" stroke="#C60B1E" strokeWidth="0.2" />
      <rect x="0.5" y="0.5" width="2" height="2" fill="#FFC400" />
      <rect x="1" y="1" width="1" height="1" fill="#C60B1E" />
    </g>
  </svg>
);

export const getFlagComponent = (countryCode: string): React.FC<FlagProps> => {
  switch (countryCode) {
    case "BR":
      return BrazilFlag;
    case "US":
      return USAFlag;
    case "ES":
      return SpainFlag;
    default:
      return BrazilFlag;
  }
};
