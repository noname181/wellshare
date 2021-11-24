import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SvgXml } from 'react-native-svg';


function Hospital_profileIcon4({ width, height, color }) {
  const xml = `
  <svg xmlns="http://www.w3.org/2000/svg" width="14.193" height="10.589" viewBox="0 0 14.193 10.589">
  <g id="Group_7554" data-name="Group 7554" transform="translate(-28.807 -389.047)">
    <g id="Design" transform="translate(28.807 391)">
      <rect id="Rectangle_5310" data-name="Rectangle 5310" width="13.404" height="0.544" transform="translate(0 0)" fill="#fff"/>
    </g>
    <path id="Path_18423" data-name="Path 18423" d="M14,4.494Z" transform="translate(29 387)" fill="#00aed8" stroke="#7d7d7d" stroke-width="1"/>
    <g id="Group_7538" data-name="Group 7538" transform="translate(9.455 366.715)">
      <g id="Group_7534" data-name="Group 7534" transform="translate(19.458 22.332)">
        <path id="Path_18601" data-name="Path 18601" d="M32.254,32.921H19.9a.441.441,0,0,1-.441-.441V22.772a.441.441,0,0,1,.441-.44H32.254a.441.441,0,0,1,.441.44V32.48A.441.441,0,0,1,32.254,32.921Zm-11.913-.883H31.813V23.214H20.341Z" transform="translate(-19.458 -22.332)" fill="#7d7d7d"/>
      </g>
      <g id="Group_7535" data-name="Group 7535" transform="translate(27.602 29.174)">
        <path id="Path_18602" data-name="Path 18602" d="M30.221,32.319a.438.438,0,0,1-.31-.128l-2.887-2.858a.441.441,0,1,1,.621-.626l2.886,2.858a.44.44,0,0,1-.31.755Z" transform="translate(-26.894 -28.579)" fill="#7d7d7d"/>
      </g>
      <g id="Group_7536" data-name="Group 7536" transform="translate(20.781 29.174)">
        <path id="Path_18603" data-name="Path 18603" d="M21.107,32.319a.441.441,0,0,1-.31-.755l2.887-2.858a.441.441,0,1,1,.62.626l-2.886,2.858A.44.44,0,0,1,21.107,32.319Z" transform="translate(-20.666 -28.579)" fill="#7d7d7d"/>
      </g>
      <g id="Group_7537" data-name="Group 7537" transform="translate(19.458 22.332)">
        <path id="Path_18604" data-name="Path 18604" d="M26.077,29.579a.443.443,0,0,1-.24-.07l-6.176-3.983a.44.44,0,0,1-.2-.37V22.772a.441.441,0,0,1,.441-.44H32.254a.441.441,0,0,1,.441.44v2.383a.44.44,0,0,1-.2.37l-6.177,3.983A.437.437,0,0,1,26.077,29.579Zm-5.736-4.665,5.736,3.7,5.736-3.7v-1.7H20.341Z" transform="translate(-19.458 -22.332)" fill="#7c257a"/>
      </g>
    </g>
  </g>
</svg>


`;
  return (
    <SvgXml xml={xml} width={width} height={height} />
  );
}

const styles = StyleSheet.create({
  container: {}
});


export default Hospital_profileIcon4;