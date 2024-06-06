import React from 'react';
import * as styles from './services.module.css';

const VectorSVG = () => {
  return (
<svg width="70" height="70" viewBox="0 0 70 70" xmlns="http://www.w3.org/2000/svg" >
<g filter="url(#filter0_b_488_367)">
<circle cx="35" cy="35" r="35" fill="black" fill-opacity="0.01"/>
<circle cx="35" cy="35" r="34.5" stroke="white" stroke-opacity="0.25"/>
</g>
<g clip-path="url(#clip0_488_367)">
<path d="M35.931 34.1724H47V35.8276H35.931V47H34.069V35.8276H23V34.1724H34.069V23H35.931V34.1724Z" className={styles.cross}/>
</g>
<defs>
<filter id="filter0_b_488_367" x="-25" y="-25" width="120" height="120" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feGaussianBlur in="BackgroundImageFix" stdDeviation="12.5"/>
<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_488_367"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_488_367" result="shape"/>
</filter>
<clipPath id="clip0_488_367">
<circle cx="35" cy="35" r="35" fill="white"/>
</clipPath>
</defs>
</svg>
  );
}

export default VectorSVG;