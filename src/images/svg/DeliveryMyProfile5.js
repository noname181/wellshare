import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SvgXml } from 'react-native-svg';


function DeliveryMyProfile5({ width, height }) {
    return (
        <SvgXml xml={xml} width={width} height={height} />
    );
}

const styles = StyleSheet.create({
    container: {}
});

const xml = `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="8.857" viewBox="0 0 12 8.857">
<g id="Group_7442" data-name="Group 7442" transform="translate(201.62 -245.163)">
  <path id="Path_18307" data-name="Path 18307" d="M-191.2,245.663h-8.835a1.083,1.083,0,0,0-1.083,1.082v5.692a1.084,1.084,0,0,0,1.083,1.083h8.835a1.084,1.084,0,0,0,1.083-1.083v-5.692A1.083,1.083,0,0,0-191.2,245.663Z" fill="none" stroke="#848484" stroke-miterlimit="10" stroke-width="1"/>
  <path id="Path_18308" data-name="Path 18308" d="M-200,247l5.107,3.929,5.107-3.929" transform="translate(-0.68 -0.812)" fill="none" stroke="#7c257a" stroke-miterlimit="10" stroke-width="1"/>
</g>
</svg>
`;
export default DeliveryMyProfile5;

