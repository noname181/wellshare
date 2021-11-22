import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SvgXml } from 'react-native-svg';


function Hospital_complain({ width, height,color }) {
  const xml = `<svg xmlns="http://www.w3.org/2000/svg" width="19" height="16.441" viewBox="0 0 19 16.441">
<g id="Group_6703" data-name="Group 6703" transform="translate(109 -74)">
  <g id="Group_6683" data-name="Group 6683" transform="translate(-109 74)">
    <path id="Path_18437" data-name="Path 18437" d="M-90,85.509V75.644A1.663,1.663,0,0,0-91.676,74h-15.647A1.663,1.663,0,0,0-109,75.644v9.865a1.663,1.663,0,0,0,1.676,1.644h1.676v2.74a.548.548,0,0,0,.309.491.568.568,0,0,0,.585-.052l4.321-3.179h8.755A1.663,1.663,0,0,0-90,85.509Zm-13.412-4.384h-1.118v-1.1h1.118Zm4.471,0h-1.118v-1.1h1.118Zm4.471,0h-1.118v-1.1h1.118Z" transform="translate(109 -74)" fill="none" stroke=${color}/>
    <rect id="Rectangle_5219" data-name="Rectangle 5219" width="12.611" height="6.389" transform="translate(3.693 3.656)" fill="none" stroke=${color}/>
  </g>
  <g id="Group_6684" data-name="Group 6684" transform="translate(-104.654 79.691)">
    <path id="Path_18438" data-name="Path 18438" d="M-100.5,85.805a1.174,1.174,0,0,1,1.191-1.25,1.158,1.158,0,0,1,1.171,1.25,1.162,1.162,0,0,1-1.191,1.251A1.169,1.169,0,0,1-100.5,85.805Z" transform="translate(100.502 -84.555)" fill="none" stroke=${color}/>
    <path id="Path_18439" data-name="Path 18439" d="M-93.694,85.805a1.174,1.174,0,0,1,1.191-1.25,1.158,1.158,0,0,1,1.171,1.25,1.162,1.162,0,0,1-1.191,1.251A1.169,1.169,0,0,1-93.694,85.805Z" transform="translate(97.802 -84.555)" fill="none" stroke=${color}/>
    <path id="Path_18440" data-name="Path 18440" d="M-86.885,85.805a1.173,1.173,0,0,1,1.191-1.25,1.158,1.158,0,0,1,1.171,1.25,1.162,1.162,0,0,1-1.191,1.251A1.169,1.169,0,0,1-86.885,85.805Z" transform="translate(95.101 -84.555)" fill="none" stroke=${color}/>
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


export default Hospital_complain;