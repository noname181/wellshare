import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SvgXml } from 'react-native-svg';


function Admin_map({ width, height, color }) {
  const xml = `
  <svg xmlns="http://www.w3.org/2000/svg" width="10.015" height="14.822" viewBox="0 0 10.015 14.822">
  <g id="Group_7950" data-name="Group 7950" transform="translate(-35.908 -428.885)">
    <g id="_20" data-name="20" transform="translate(36.505 429.285)">
      <path id="Path_18588" data-name="Path 18588" d="M994.727,607.159h-1.095l-1.212,2.948h8.821l-1.212-2.948h-1.095" transform="translate(-992.42 -596.085)" fill="#fff" stroke=${color} stroke-linecap="square" stroke-miterlimit="10" stroke-width="0.8"/>
      <g id="Group_7501" data-name="Group 7501" transform="translate(0)">
        <path id="Path_18589" data-name="Path 18589" d="M1017.94,575.76a4.394,4.394,0,0,1-.441,1.926c-.715,1.471-3.969,6.023-3.969,6.023s-3.177-4.5-3.913-5.911a4.411,4.411,0,1,1,8.324-2.038Z" transform="translate(-1009.119 -571.349)" fill="#fff" stroke=${color} stroke-linecap="square" stroke-miterlimit="10" stroke-width="0.8"/>
        <circle id="Ellipse_673" data-name="Ellipse 673" cx="1.797" cy="1.797" r="1.797" transform="translate(2.613 2.613)" fill="#fff" stroke=${color} stroke-linecap="square" stroke-miterlimit="10" stroke-width="0.8"/>
      </g>
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


export default Admin_map;