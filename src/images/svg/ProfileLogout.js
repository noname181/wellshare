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

const xml = `<svg xmlns="http://www.w3.org/2000/svg" width="13.079" height="14.24" viewBox="0 0 13.079 14.24">
  <g id="Group_7353" data-name="Group 7353" transform="translate(17373.5 -22787.051)">
    <g id="Rectangle_794" data-name="Rectangle 794" transform="translate(-17373 22787.551)">
      <rect id="Rectangle_5158" data-name="Rectangle 5158" width="7.944" height="13.24" rx="1" fill="none" stroke="#707070" stroke-width="1"/>
    </g>
    <rect id="Rectangle_5159" data-name="Rectangle 5159" width="5.847" height="5.847" transform="translate(-17368.615 22791.205)" fill="#fff"/>
    <path id="Vector" d="M1322.1,209.054h0v-2.648l2.759,2.648L1322.1,211.7Z" transform="translate(-18685.275 22585.117)" fill="#7c257a"/>
    <line id="Line_788" data-name="Line 788" x1="4.446" transform="translate(-17367.625 22794.172)" fill="none" stroke="#7c257a" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
  </g>
</svg>
`;
export default Profile;