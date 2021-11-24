import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SvgXml } from 'react-native-svg';


function Hospital_profileIcon11({ width, height, color }) {
  const xml = `
  <svg xmlns="http://www.w3.org/2000/svg" width="14.549" height="13.491" viewBox="0 0 14.549 13.491">
  <g id="Group_7557" data-name="Group 7557" transform="translate(-29.451 -741.401)">
    <g id="Group_7553" data-name="Group 7553" transform="translate(18.824 732.568)">
      <rect id="Rectangle_5316" data-name="Rectangle 5316" width="9.794" height="12.391" rx="1" transform="translate(11.176 9.383)" fill="#fff" stroke="#7d7d7d" stroke-miterlimit="10" stroke-width="1.1"/>
      <rect id="Rectangle_5317" data-name="Rectangle 5317" width="11.955" height="7.684" rx="3.842" transform="translate(13.221 11.746)" fill="#fff"/>
      <path id="Path_18621" data-name="Path 18621" d="M26.833,19.236l-2.111-2.111a.352.352,0,1,0-.5.5l1.511,1.511h-7.6a.352.352,0,0,0,0,.7h7.6l-1.511,1.511a.352.352,0,1,0,.5.5l2.111-2.111A.352.352,0,0,0,26.833,19.236Z" transform="translate(-2.881 -3.907)" fill="#7a247a" stroke="#7a2479" stroke-width="0.1"/>
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


export default Hospital_profileIcon11;