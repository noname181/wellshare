import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SvgXml } from 'react-native-svg';


function Hospital_profileIcon5({ width, height, color }) {
  const xml = `
  <svg xmlns="http://www.w3.org/2000/svg" width="14.436" height="14.515" viewBox="0 0 14.436 14.515">
  <g id="Group_7555" data-name="Group 7555" transform="translate(-28.161 -428.885)">
    <g id="_20" data-name="20" transform="translate(-963.662 -142.064)">
      <path id="Path_18588" data-name="Path 18588" d="M995.883,607.159h-1.644l-1.819,4.425h13.242l-1.819-4.425H1002.2" transform="translate(0 -28.665)" fill="#fff" stroke="#7d7d7d" stroke-linecap="square" stroke-miterlimit="10" stroke-width="0.8"/>
      <g id="Group_7501" data-name="Group 7501" transform="translate(995.752 571.349)">
        <path id="Path_18589" data-name="Path 18589" d="M1015.7,574.638a3.277,3.277,0,0,1-.329,1.436c-.533,1.1-2.96,4.492-2.96,4.492s-2.369-3.356-2.918-4.408a3.29,3.29,0,1,1,6.207-1.52Z" transform="translate(-1009.119 -571.349)" fill="#fff" stroke="#7c257a" stroke-linecap="square" stroke-miterlimit="10" stroke-width="0.8"/>
        <circle id="Ellipse_673" data-name="Ellipse 673" cx="1.34" cy="1.34" r="1.34" transform="translate(1.949 1.949)" fill="#fff" stroke="#7c257a" stroke-linecap="square" stroke-miterlimit="10" stroke-width="0.8"/>
      </g>
      <line id="Line_974" data-name="Line 974" x2="13.242" transform="translate(992.42 585.064)" fill="none" stroke="#7d7d7d" stroke-linecap="square" stroke-miterlimit="10" stroke-width="0.8"/>
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


export default Hospital_profileIcon5;