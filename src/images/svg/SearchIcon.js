import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SvgXml } from 'react-native-svg';


function Profile({ width, height }) {
    return (
        <SvgXml xml={xml} width={width} height={height} />
    );
}

const styles = StyleSheet.create({
    container: {}
});

const xml = `<svg xmlns="http://www.w3.org/2000/svg" width="19.429" height="19.43" viewBox="0 0 19.429 19.43">
  <g id="Group_7564" data-name="Group 7564" transform="translate(-319.499 -164.001)">
    <path id="Path_17938" data-name="Path 17938" d="M29.948,50.083a6.377,6.377,0,1,0-.474.474l4.991,4.991.474-.474Zm-4.736,1.44a5.7,5.7,0,1,1,5.7-5.7A5.705,5.705,0,0,1,25.212,51.523Z" transform="translate(301.16 125.053)" fill="#d72946" stroke="#fff" stroke-width="1" fill-rule="evenodd"/>
    <rect id="Rectangle_4805" data-name="Rectangle 4805" width="2" height="6" transform="translate(337.514 177.773) rotate(45)" fill="#7c257a"/>
  </g>
</svg>
`;
export default Profile;