import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SvgXml } from 'react-native-svg';


function Deliveryman_list({ width, height, color }) {
  const xml = `<svg xmlns="http://www.w3.org/2000/svg" width="16.084" height="16.084" viewBox="0 0 16.084 16.084">
  <g id="Group_7317" data-name="Group 7317" transform="translate(-748.5 -340)">
    <path id="Path_18277" data-name="Path 18277" d="M756.542,340.5a7.542,7.542,0,1,0,7.542,7.542A7.542,7.542,0,0,0,756.542,340.5Z" fill="#fff" stroke=${color} stroke-width="1"/>
    <path id="Path_18278" data-name="Path 18278" d="M759.718,345.859v5.028a.359.359,0,0,1-.718,0v-5.028a.359.359,0,0,1,.718,0Z" transform="translate(-2.817 -1.409)" fill="#fff" stroke=${color} stroke-miterlimit="10" stroke-width="0.5"/>
    <circle id="Ellipse_625" data-name="Ellipse 625" cx="0.359" cy="0.359" r="0.359" transform="translate(756.183 350.915)" fill="#fff" stroke=${color} stroke-miterlimit="10" stroke-width="0.5"/>
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


export default Deliveryman_list;