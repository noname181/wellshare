import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SvgXml } from 'react-native-svg';


function Hospital_profileIcon3({ width, height, color }) {
  const xml = `
  <svg xmlns="http://www.w3.org/2000/svg" width="14.8" height="14.317" viewBox="0 0 14.8 14.317">
  <g id="_8" data-name="8" transform="translate(-718.302 -258.503)">
    <path id="Path_18580" data-name="Path 18580" d="M729.568,280.966H732.7V274.3h-14v6.668h3.135" transform="translate(0 -12.175)" fill="#fff" stroke="#7d7d7d" stroke-linecap="square" stroke-miterlimit="10" stroke-width="0.8"/>
    <rect id="Rectangle_5308" data-name="Rectangle 5308" width="7.731" height="4.952" transform="translate(721.837 267.468)" fill="#fff" stroke="#7c257a" stroke-linecap="square" stroke-miterlimit="10" stroke-width="0.8"/>
    <path id="Path_18581" data-name="Path 18581" d="M736.763,269.635h.45v.974H726.455v-.974h.45" transform="translate(-6.132 -8.487)" fill="#fff" stroke="#7d7d7d" stroke-linecap="square" stroke-miterlimit="10" stroke-width="0.8"/>
    <path id="Path_18582" data-name="Path 18582" d="M733.69,262.122V258.9h7.731v2.245" transform="translate(-11.853 0)" fill="#fff" stroke="#7d7d7d" stroke-linecap="square" stroke-miterlimit="10" stroke-width="0.8"/>
    <line id="Line_969" data-name="Line 969" x2="0.22" transform="translate(720.323 263.61)" fill="none" stroke="#7d7d7d" stroke-linecap="square" stroke-miterlimit="10" stroke-width="0.8"/>
    <path id="Path_18600" data-name="Path 18600" d="M0,0H5.214" transform="translate(723.094 268.791)" fill="#fff" stroke="#7c257a" stroke-linecap="square" stroke-width="0.8"/>
    <line id="Line_972" data-name="Line 972" x2="2.607" transform="translate(723.094 270.096)" fill="none" stroke="#7c257a" stroke-linecap="square" stroke-miterlimit="10" stroke-width="0.8"/>
    <line id="Line_973" data-name="Line 973" x2="8.788" transform="translate(721.308 267.468)" fill="none" stroke="#7d7d7d" stroke-linecap="square" stroke-miterlimit="10" stroke-width="0.8"/>
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


export default Hospital_profileIcon3;