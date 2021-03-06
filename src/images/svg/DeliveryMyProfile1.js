import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SvgXml } from 'react-native-svg';


function DeliveryMyProfile1({ width, height }) {
    return (
        <SvgXml xml={xml} width={width} height={height} />
    );
}

const styles = StyleSheet.create({
    container: {}
});

const xml = `<svg xmlns="http://www.w3.org/2000/svg" width="12.562" height="12.562" viewBox="0 0 12.562 12.562">
  <g id="Group_7465" data-name="Group 7465" transform="translate(-666.501 -1370.7)">
    <path id="Path_18322" data-name="Path 18322" d="M672.782,1370.8a6.181,6.181,0,1,1-4.371,1.81,6.162,6.162,0,0,1,4.371-1.81Zm3.911,2.271a5.53,5.53,0,1,0,1.62,3.911A5.512,5.512,0,0,0,676.693,1373.071Z" fill="#818181" stroke="#818181" stroke-width="0.2"/>
    <g id="Group_7463" data-name="Group 7463" transform="translate(672.457 1372.101)">
      <path id="Path_18323" data-name="Path 18323" d="M734.359,1385.784a.325.325,0,1,1-.325.325A.325.325,0,0,1,734.359,1385.784Z" transform="translate(-734.034 -1385.784)" fill="#818181" stroke="#818181" stroke-width="0.2" fill-rule="evenodd"/>
      <path id="Path_18324" data-name="Path 18324" d="M734.359,1490.68a.325.325,0,1,1-.325.325A.325.325,0,0,1,734.359,1490.68Z" transform="translate(-734.034 -1481.571)" fill="#818181" stroke="#818181" stroke-width="0.2" fill-rule="evenodd"/>
    </g>
    <g id="Group_7464" data-name="Group 7464" transform="translate(667.902 1376.656)">
      <circle id="Ellipse_627" data-name="Ellipse 627" cx="0.325" cy="0.325" r="0.325" transform="translate(9.109 0)" fill="#818181" stroke="#818181" stroke-width="0.2"/>
      <circle id="Ellipse_628" data-name="Ellipse 628" cx="0.325" cy="0.325" r="0.325" transform="translate(0 0)" fill="#818181" stroke="#818181" stroke-width="0.2"/>
    </g>
    <path id="Path_18325" data-name="Path 18325" d="M734.685,1401.1a.325.325,0,0,0-.651,0v3.253a.325.325,0,0,0,.325.325h2.928a.325.325,0,0,0,0-.651h-2.6Z" transform="translate(-61.577 -27.367)" fill="#7c257a" stroke="#7c257a" stroke-width="0.2"/>
  </g>
</svg>`;
export default DeliveryMyProfile1;

