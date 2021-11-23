import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SvgXml } from 'react-native-svg';


function Hospital_list({ width, height, color }) {
    const xml = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="15" viewBox="0 0 18 15">
    <g id="Group_6691" data-name="Group 6691" transform="translate(-68.193 149.229)">
      <rect id="Rectangle_5229" data-name="Rectangle 5229" width="18" height="15" rx="1" transform="translate(68.193 -149.229)" fill=${color}/>
      <path id="Path_18442" data-name="Path 18442" d="M88.2-149.229v6.618l-3.309-1.654-3.309,1.654v-6.618" transform="translate(-7.738)" fill="#fff"/>
      <rect id="Rectangle_5230" data-name="Rectangle 5230" width="4.95" height="1.414" rx="0.707" transform="translate(75.866 -138.913) rotate(-180)" fill="#fff"/>
      <rect id="Rectangle_5231" data-name="Rectangle 5231" width="4.95" height="1.414" rx="0.707" transform="translate(75.866 -136.783) rotate(-180)" fill="#fff"/>
    </g>
  </svg>
    `;
    return (
        <SvgXml xml={xml} width={width} height={height} />
    );
}





export default Hospital_list;