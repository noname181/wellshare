import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SvgXml } from 'react-native-svg';


function DeliveryMyProfile4({ width, height }) {
    return (
        <SvgXml xml={xml} width={width} height={height} />
    );
}

const styles = StyleSheet.create({
    container: {}
});

const xml = `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="17.222" viewBox="0 0 12 17.222">
<g id="Group_7441" data-name="Group 7441" transform="translate(-9.5 -0.5)">
  <path id="Path_18306" data-name="Path 18306" d="M21,6.5a5.5,5.5,0,1,0-11,0c0,2.379,3.372,8.018,4.836,10.353a.783.783,0,0,0,1.328,0C17.628,14.518,21,8.879,21,6.5Z" transform="translate(0)" fill="none" stroke="#848484" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
  <circle id="Ellipse_626" data-name="Ellipse 626" cx="2.611" cy="2.611" r="2.611" transform="translate(12.89 3.89)" fill="none" stroke="#7c257a" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
</g>
</svg>

`;
export default DeliveryMyProfile4;

