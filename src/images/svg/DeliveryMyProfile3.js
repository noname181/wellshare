import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SvgXml } from 'react-native-svg';


function DeliveryMyProfile3({ width, height }) {
    return (
        <SvgXml xml={xml} width={width} height={height} />
    );
}

const styles = StyleSheet.create({
    container: {}
});

const xml = `<svg xmlns="http://www.w3.org/2000/svg" width="12.562" height="15.825" viewBox="0 0 12.562 15.825">
<g id="Group_7461" data-name="Group 7461" transform="translate(-120.952 -1671.22)">
  <path id="Path_18320" data-name="Path 18320" d="M123.271,1735.241h7.923a2.225,2.225,0,0,1,2.219,2.219v5.127a2.225,2.225,0,0,1-2.219,2.219h-7.923a2.225,2.225,0,0,1-2.219-2.219v-5.127a2.225,2.225,0,0,1,2.219-2.219Zm7.923.71h-7.923a1.515,1.515,0,0,0-1.509,1.509v5.127a1.515,1.515,0,0,0,1.509,1.509h7.923a1.515,1.515,0,0,0,1.509-1.509v-5.127a1.515,1.515,0,0,0-1.509-1.509Z" transform="translate(0 -57.862)" fill="#757575" stroke="#707070" stroke-width="0.2"/>
  <path id="Path_18321" data-name="Path 18321" d="M147.856,1671.32h3.263a2.225,2.225,0,0,1,2.219,2.219v4.55h-7.7v-4.55a2.225,2.225,0,0,1,2.219-2.219Zm3.263.71h-3.263a1.515,1.515,0,0,0-1.509,1.509v3.84h6.281v-3.84a1.515,1.515,0,0,0-1.509-1.509Z" transform="translate(-22.255)" fill="#757575" stroke="#707070" stroke-width="0.2"/>
  <rect id="Rectangle_5200" data-name="Rectangle 5200" width="0.71" height="3.263" transform="translate(126.878 1680.997)" fill="#7c257a" stroke="#707070" stroke-width="0.2"/>
</g>
</svg>
`;
export default DeliveryMyProfile3;

