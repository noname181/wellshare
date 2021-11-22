import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SvgXml } from 'react-native-svg';


function Hospital_notice({ width, height,color }) {
  const xml = `<svg xmlns="http://www.w3.org/2000/svg" width="13.516" height="16.473" viewBox="0 0 13.516 16.473">
  <g id="Group_6686" data-name="Group 6686" transform="translate(15616 -20074)">
    <g id="Group_6687" data-name="Group 6687" transform="translate(-15616 20074)">
      <rect id="Rectangle_5220" data-name="Rectangle 5220" width="6.508" height="3.004" rx="1" transform="translate(3.427)" fill="none" stroke=${color}/>
      <path id="Path_18441" data-name="Path 18441" d="M20.249,4H18.982V5.259a1.264,1.264,0,0,1-1.267,1.259H11.8a1.264,1.264,0,0,1-1.267-1.259V4H9.267A1.264,1.264,0,0,0,8,5.259V18.264a1.264,1.264,0,0,0,1.267,1.259H20.249a1.264,1.264,0,0,0,1.267-1.259V5.259A1.264,1.264,0,0,0,20.249,4ZM18.559,15.738h-7.6a.415.415,0,1,1,0-.83h7.6a.415.415,0,1,1,0,.83Zm0-2.508h-7.6a.42.42,0,1,1,0-.839h7.6a.42.42,0,1,1,0,.839Zm0-2.517h-7.6a.42.42,0,1,1,0-.839h7.6a.42.42,0,1,1,0,.839Z" transform="translate(-8 -3.05)" fill="none" stroke=${color}/>
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


export default Hospital_notice;