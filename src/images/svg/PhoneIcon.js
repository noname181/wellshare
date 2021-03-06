import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SvgXml } from 'react-native-svg';


function PhoneIcon({ width, height }) {
    return (
        <SvgXml xml={xml} width={width} height={height} />
    );
}

const styles = StyleSheet.create({
    container: {}
});

const xml = `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
<g id="Group_8134" data-name="Group 8134" transform="translate(-306 -281)">
  <circle id="Ellipse_485" data-name="Ellipse 485" cx="15" cy="15" r="15" transform="translate(306 281)" fill="#465cdb"/>
  <path id="Path_17165" data-name="Path 17165" d="M14.187,14.4l-2.242-4.326c-.005,0-1.257.618-1.314.644C9.205,11.411,6.3,5.741,7.7,4.993L9.023,4.34,6.8,0,5.458.661C.873,3.052,8.153,17.2,12.844,15.06,12.921,15.025,14.182,14.4,14.187,14.4Z" transform="translate(312.5 288.732)" fill="#fff"/>
</g>
</svg>
`;
export default PhoneIcon;

