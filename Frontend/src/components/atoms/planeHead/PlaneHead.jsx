import React from "react";
import { SvgIcon } from "@mui/material";


const PlaneHead =({componentStyles})=>{


  return(
    <SvgIcon sx={componentStyles}>
      <svg width="467" height="384" viewBox="0 0 467 384" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d_524_2)">
          <path d="M204.021 7.48949C221.047 -1.02364 241.047 -1.21591 258.233 6.96827L268.058 11.6467C278.302 16.525 287.815 22.8103 296.321 30.3205V30.3205C318.981 50.3287 338.536 73.5984 354.344 99.3646L374.572 132.333C387.506 153.415 398.858 175.428 408.535 198.19L420.505 226.347C432.145 253.728 441.318 282.093 447.915 311.105L462.5 375.25H4L11.5388 333.593C19.4773 289.728 33.2462 247.122 52.4795 206.906L73 164L113.319 97.7623C128.366 73.042 146.794 50.5459 168.068 30.9265V30.9265C176.646 23.015 186.297 16.3515 196.735 11.1325L204.021 7.48949Z" fill="white"/>
        </g>
        <defs>
          <filter id="filter0_d_524_2" x="0" y="0.9646" width="466.5" height="382.285" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="4"/>
            <feGaussianBlur stdDeviation="2"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_524_2"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_524_2" result="shape"/>
          </filter>
        </defs>
      </svg>
    </SvgIcon>
  );
}

export { PlaneHead };