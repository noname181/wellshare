import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SvgXml } from 'react-native-svg';


function Hospital_profile({ width, height,color }) {
  const xml = `<svg xmlns="http://www.w3.org/2000/svg" width="16.166" height="16.678" viewBox="0 0 16.166 16.678">
<g id="Group_6701" data-name="Group 6701" transform="translate(159.471 -929)">
  <circle id="Ellipse_666" data-name="Ellipse 666" cx="3.821" cy="3.821" r="3.821" transform="translate(-155.395 929)" fill="none" stroke=${color}/>
  <g id="Group_6697" data-name="Group 6697" transform="translate(-159.471 937.697)">
    <path id="Path_18443" data-name="Path 18443" d="M-143.3,1068.842a8.084,8.084,0,0,0-8.083-7.981,8.084,8.084,0,0,0-8.083,7.981Z" transform="translate(159.471 -1060.861)" fill="none" stroke=${color}/>
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


export default Hospital_profile;