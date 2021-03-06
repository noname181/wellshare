import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SvgXml } from 'react-native-svg';


function Profile({ width, height }) {
    return (
        <SvgXml xml={xml} width={width} height={height} />
    );
}

const styles = StyleSheet.create({
    container: {}
});

const xml = `<svg xmlns="http://www.w3.org/2000/svg" width="13.132" height="13.114" viewBox="0 0 13.132 13.114">
  <g id="_6" data-name="6" transform="translate(-450.905 -263.459)">
    <g id="_8" data-name="8" transform="translate(451.462 264.007)">
      <path id="Path_18576" data-name="Path 18576" d="M454.889,268.542c-.27-.432-.221-.553-.221-.553l.806-1.17a.73.73,0,0,0-.072-.953l-1.671-1.66a.683.683,0,0,0-.9-.056l-.726.562a.834.834,0,0,0-.166.169c-1.432,2,.577,5.146,3.054,7.609,2.409,2.4,5.671,4.53,7.639,3a.824.824,0,0,0,.147-.151l.567-.741a.683.683,0,0,0-.061-.9l-1.671-1.66a.73.73,0,0,0-.953-.066l-1.166.813s-.466.169-2.731-2.083a17.494,17.494,0,0,1-1.615-1.787c-.111-.147-.2-.272-.263-.378" transform="translate(-451.462 -264.007)" fill="#fff" stroke="#7d7d7d" stroke-linecap="square" stroke-miterlimit="10" stroke-width="1"/>
    </g>
    <path id="Path_18577" data-name="Path 18577" d="M483.979,277.57a3.315,3.315,0,0,0-3.272-3.313" transform="translate(-22.796 -7.989)" fill="#fff" stroke="#7c257a" stroke-linecap="square" stroke-miterlimit="10" stroke-width="1"/>
    <path id="Path_18578" data-name="Path 18578" d="M485.886,270.83a5.223,5.223,0,0,0-5.179-5.22" transform="translate(-22.796 -1.249)" fill="#fff" stroke="#7c257a" stroke-linecap="square" stroke-miterlimit="10" stroke-width="1"/>
    <path id="Path_18579" data-name="Path 18579" d="M485.365,268.556a5.649,5.649,0,0,0-4.657-2.946" transform="translate(-22.796 -1.249)" fill="#fff" stroke="#7c257a" stroke-linecap="square" stroke-miterlimit="10" stroke-width="1"/>
  </g>
</svg>


`;
export default Profile;