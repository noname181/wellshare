import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SvgXml } from 'react-native-svg';


function Hospital_profileIcon8({ width, height, color }) {
  const xml = `
  <svg xmlns="http://www.w3.org/2000/svg" width="13" height="19.266" viewBox="0 0 13 19.266">
  <g id="Group_7944" data-name="Group 7944" transform="translate(-835.459 -236.133)">
    <path id="Path_19118" data-name="Path 19118" d="M880.668,246.9a.394.394,0,0,0,.664-.26,2.338,2.338,0,0,0-2.629-2.491.394.394,0,0,0,.094.782,1.6,1.6,0,0,1,1.749,1.658A.392.392,0,0,0,880.668,246.9Z" transform="translate(-34.453 -6.424)" fill="#7b257a"/>
    <path id="Path_19119" data-name="Path 19119" d="M878.906,236.926a3.122,3.122,0,0,1,3.325,3.151.394.394,0,1,0,.787,0,3.909,3.909,0,0,0-4.158-3.941.394.394,0,1,0,.046.786Z" transform="translate(-34.56 0)" fill="#7b257a"/>
    <g id="Group_7944-2" data-name="Group 7944" transform="translate(835.459 239.355)">
      <path id="Path_19120" data-name="Path 19120" d="M842.94,252.5h-5.512a1.971,1.971,0,0,0-1.969,1.969v12.107a1.971,1.971,0,0,0,1.969,1.969h5.512a1.971,1.971,0,0,0,1.969-1.969V254.469A1.971,1.971,0,0,0,842.94,252.5Zm-6.693,3.937h7.874v8.17h-7.874Zm1.181-3.15h5.512a1.182,1.182,0,0,1,1.181,1.181v1.181h-7.874v-1.181A1.182,1.182,0,0,1,837.428,253.287Zm5.512,14.469h-5.512a1.182,1.182,0,0,1-1.181-1.181v-1.181h7.874v1.181A1.182,1.182,0,0,1,842.94,267.757Z" transform="translate(-835.459 -252.5)" fill="#7d7d7d"/>
      <path id="Path_19121" data-name="Path 19121" d="M856.64,322h-.787a.394.394,0,0,0,0,.787h.787a.394.394,0,0,0,0-.787Z" transform="translate(-851.522 -308.318)" fill="#7d7d7d"/>
      <path id="Path_19122" data-name="Path 19122" d="M851.853,261.287h2.362a.394.394,0,0,0,0-.787h-2.362a.394.394,0,0,0,0,.787Z" transform="translate(-848.309 -258.925)" fill="#7d7d7d"/>
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


export default Hospital_profileIcon8;