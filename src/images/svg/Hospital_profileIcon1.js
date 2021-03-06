import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SvgXml } from 'react-native-svg';


function Hospital_profileIcon1({ width, height, color }) {
  const xml = `
  <svg xmlns="http://www.w3.org/2000/svg" width="11.553" height="13.542" viewBox="0 0 11.553 13.542">
  <g id="Group_7556" data-name="Group 7556" transform="translate(-29.814 -511.558)">
    <g id="Group_7552" data-name="Group 7552" transform="translate(21.914 508.658)">
      <path id="Path_18614" data-name="Path 18614" d="M19,3H8.355A.337.337,0,0,0,8,3.318V16.024a.337.337,0,0,0,.355.318H19a.337.337,0,0,0,.355-.318V3.318A.337.337,0,0,0,19,3ZM12.257,15.706V12.53H15.1v3.177Zm6.386,0H15.805V12.212a.337.337,0,0,0-.355-.318H11.9a.337.337,0,0,0-.355.318v3.494H8.71V3.635h9.934Z" transform="translate(0 0)" fill="#7d7d7d" stroke="#7d7d7d" stroke-width="0.2"/>
      <path id="Path_18615" data-name="Path 18615" d="M14.355,9.71h2.129a.355.355,0,0,0,0-.71H14.355a.355.355,0,1,0,0,.71Z" transform="translate(-3.871 -3.871)" fill="#7c257a" stroke="#7c257a" stroke-width="0.2"/>
      <path id="Path_18616" data-name="Path 18616" d="M26.355,9.71h2.129a.355.355,0,0,0,0-.71H26.355a.355.355,0,0,0,0,.71Z" transform="translate(-11.614 -3.871)" fill="#7c257a" stroke="#7c257a" stroke-width="0.2"/>
      <path id="Path_18617" data-name="Path 18617" d="M14.355,15.71h2.129a.355.355,0,0,0,0-.71H14.355a.355.355,0,0,0,0,.71Z" transform="translate(-3.871 -8.21)" fill="#7c257a" stroke="#7c257a" stroke-width="0.2"/>
      <path id="Path_18618" data-name="Path 18618" d="M26.355,15.71h2.129a.355.355,0,0,0,0-.71H26.355a.355.355,0,1,0,0,.71Z" transform="translate(-11.614 -8.21)" fill="#7c257a" stroke="#7c257a" stroke-width="0.2"/>
      <path id="Path_18619" data-name="Path 18619" d="M14.355,21.71h2.129a.355.355,0,0,0,0-.71H14.355a.355.355,0,1,0,0,.71Z" transform="translate(-3.871 -12.316)" fill="#7c257a" stroke="#7c257a" stroke-width="0.2"/>
      <path id="Path_18620" data-name="Path 18620" d="M26.355,21.71h2.129a.355.355,0,0,0,0-.71H26.355a.355.355,0,1,0,0,.71Z" transform="translate(-11.614 -12.316)" fill="#7c257a" stroke="#7c257a" stroke-width="0.2"/>
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


export default Hospital_profileIcon1;