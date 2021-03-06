import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SvgXml } from 'react-native-svg';


function Hospital_profileIcon9({ width, height, color }) {
  const xml = `
  <svg xmlns="http://www.w3.org/2000/svg" width="13.001" height="10.78" viewBox="0 0 13.001 10.78">
  <g id="Group_8131" data-name="Group 8131" transform="translate(-29.6 -656.6)">
    <path id="Path_18597" data-name="Path 18597" d="M862.754,437.952l-.068.374a1.849,1.849,0,0,1-1.816,1.547h-.338a.924.924,0,0,0-.88.643l-.923,2.888a.993.993,0,0,0,.946,1.295h9.481a.993.993,0,0,0,.946-1.3l-.922-2.888a.925.925,0,0,0-.882-.644h-.338a1.85,1.85,0,0,1-1.816-1.547l-.068-.375" transform="translate(-828.314 222.281)" fill="#fff" stroke="#7b7b7b" stroke-linecap="square" stroke-miterlimit="10" stroke-width="0.8"/>
    <path id="Path_18598" data-name="Path 18598" d="M900.047,438.4Z" transform="translate(-861.828 221.914)" fill="#fff" stroke="#7b7b7b" stroke-linecap="square" stroke-miterlimit="10" stroke-width="0.8"/>
    <path id="Path_18599" data-name="Path 18599" d="M865.159,423.133c.4.094.442.191.442.191l.205,1.132a.591.591,0,0,0,.584.506H868.3a.552.552,0,0,0,.548-.481l.1-.736a.665.665,0,0,0,0-.192c-.318-1.964-3.266-2.623-6.092-2.624-2.749,0-5.838.635-6.1,2.634a.671.671,0,0,0,0,.171l.1.748a.553.553,0,0,0,.548.482H859.3a.591.591,0,0,0,.585-.506l.205-1.131s.171-.363,2.755-.363a14.187,14.187,0,0,1,1.946.1c.147.021.268.044.366.067" transform="translate(-826.746 236.073)" fill="#fff" stroke="#7b257a" stroke-linecap="square" stroke-miterlimit="10" stroke-width="0.8"/>
    <circle id="Ellipse_674" data-name="Ellipse 674" cx="1.301" cy="1.301" r="1.301" transform="translate(34.799 662.464)" fill="#fff" stroke="#7b7b7b" stroke-linecap="square" stroke-miterlimit="10" stroke-width="0.8"/>
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


export default Hospital_profileIcon9;