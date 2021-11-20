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

const xml = `<svg xmlns="http://www.w3.org/2000/svg" width="15.248" height="14" viewBox="0 0 15.248 14">
  <g id="Group_6737" data-name="Group 6737" transform="translate(-1.448 -13.586)">
    <path id="Path_18448" data-name="Path 18448" d="M15.435,14.384H14.144c0,.016.009.03.009.047v.376a1.268,1.268,0,0,1-1.261,1.267h-.376a1.268,1.268,0,0,1-1.261-1.267v-.376c0-.016.009-.03.01-.047H6.9c0,.016.01.03.01.047v.376a1.268,1.268,0,0,1-1.261,1.267H5.278a1.268,1.268,0,0,1-1.261-1.267v-.376c0-.016.009-.03.009-.047H2.709a1.268,1.268,0,0,0-1.261,1.267V26.181a1.268,1.268,0,0,0,1.261,1.267H15.435A1.268,1.268,0,0,0,16.7,26.181V15.651A1.268,1.268,0,0,0,15.435,14.384Z" transform="translate(0 0.138)" fill="silver"/>
    <g id="Group_6728" data-name="Group 6728" transform="translate(4.378 18.985)">
      <rect id="Rectangle_5251" data-name="Rectangle 5251" width="2.396" height="2.396" rx="0.5" transform="translate(0 0)" fill="#fff"/>
      <rect id="Rectangle_5252" data-name="Rectangle 5252" width="2.396" height="2.396" rx="0.5" transform="translate(3.525 0)" fill="#fff"/>
      <path id="Path_18449" data-name="Path 18449" d="M.586,0H1.809A.586.586,0,0,1,2.4.586V1.809a.586.586,0,0,1-.586.586H.586A.586.586,0,0,1,0,1.809V.586A.586.586,0,0,1,.586,0Z" transform="translate(6.994 0)" fill="#fff"/>
    </g>
    <rect id="Rectangle_5254" data-name="Rectangle 5254" width="2.396" height="2.396" rx="0.5" transform="translate(4.062 22.713)" fill="#fff"/>
    <rect id="Rectangle_5255" data-name="Rectangle 5255" width="2.396" height="2.396" rx="0.5" transform="translate(7.905 22.713)" fill="#fff"/>
    <rect id="Rectangle_5256" data-name="Rectangle 5256" width="2.396" height="2.396" rx="0.5" transform="translate(11.687 22.713)" fill="#fff"/>
    <rect id="Rectangle_5257" data-name="Rectangle 5257" width="1.678" height="2.059" rx="0.715" transform="translate(4.593 13.586)" fill="silver"/>
    <rect id="Rectangle_5258" data-name="Rectangle 5258" width="1.678" height="2.059" rx="0.715" transform="translate(11.884 13.586)" fill="silver"/>
  </g>
</svg>

`;
export default Profile;