import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SvgXml } from 'react-native-svg';


function List({ width, height, color }) {
  const xml = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" preserveAspectRatio="none">
  <g id="Group_7926" data-name="Group 7926" transform="translate(-93.5 -704.5)">
    <g id="Group_7926-2" data-name="Group 7926" transform="translate(94 705)">
      <rect id="Rectangle_5611" data-name="Rectangle 5611" width="15" height="15" rx="1.979" transform="translate(0 0)" fill="none" stroke=${color} stroke-miterlimit="10" stroke-width="1"/>
      <path id="Path_19117" data-name="Path 19117" d="M50.549,11v3.722a1.028,1.028,0,0,0,1.028,1.028h3.4A1.027,1.027,0,0,0,56,14.722V11Z" transform="translate(-45.676 -11)" fill="none" stroke=${color} stroke-miterlimit="10" stroke-width="1"/>
      <line id="Line_993" data-name="Line 993" x2="6.348" transform="translate(4.426 8.953)" fill="none" stroke=${color} stroke-miterlimit="10" stroke-width="1"/>
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


export default List;