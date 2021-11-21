import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SvgXml } from 'react-native-svg';


function Profile({ width, height, color }) {
  const xml = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="19.957" height="15.205" viewBox="0 0 19.957 15.205" preserveAspectRatio="none">
  <defs>
    <clipPath id="clip-path">
      <path id="Path_18274" data-name="Path 18274" d="M995.752,409.851v.95H991v-.95Zm-1.9,2.851v.95H991v-.95Zm.95-5.7v.95H991.95V407Zm7.6,4.752v-.95h1.9v.95Zm8.078-.95a.475.475,0,0,1,.475.475v.475h-.475c-.812,0-1.425.46-1.425.95s.613.95,1.425.95h.475v.475a.475.475,0,0,1-.475.475,1.948,1.948,0,1,1,0-3.8Z" transform="translate(-991 -407)" fill=${color}/>
    </clipPath>
    <clipPath id="clip-path-2">
      <rect id="Rectangle_5135" data-name="Rectangle 5135" width="479.018" height="341.761" fill=${color}/>
    </clipPath>
    <clipPath id="clip-path-3">
      <path id="Path_18275" data-name="Path 18275" d="M999.276,409.255a1.425,1.425,0,1,0-1.426-1.425A1.425,1.425,0,0,0,999.276,409.255Zm10.453,0a1.425,1.425,0,1,0-1.425-1.425A1.425,1.425,0,0,0,1009.73,409.255Zm-6.177-2.851V395.95h-7.6V395h10.592a2.376,2.376,0,0,1,2.206,1.493l1.3,3.258h1.579a2.376,2.376,0,0,1,2.376,2.376v5.227h-1.948a2.376,2.376,0,1,1-4.657,0h-5.8a2.376,2.376,0,1,1-4.657,0H995v-.95h2.376a2.376,2.376,0,0,1,3.8,0Zm.95,0h3.326a2.376,2.376,0,0,1,3.8,0h1.425v-4.276a1.425,1.425,0,0,0-1.425-1.425h-6.177v-.95h3.575l-1.162-2.905a1.426,1.426,0,0,0-1.324-.9H1004.5Z" transform="translate(-995 -395)" fill=${color}/>
    </clipPath>
  </defs>
  <g id="Group_7309" data-name="Group 7309" transform="translate(-991 -395)">
    <g id="Group_7312" data-name="Group 7312" transform="translate(991 397.851)">
      <g id="Group_7311" data-name="Group 7311" transform="translate(0)" clip-path="url(#clip-path)">
        <g id="Group_7310" data-name="Group 7310" transform="translate(-25.027 -30.253)">
          <g id="Group_7309-2" data-name="Group 7309" transform="translate(0 0)" clip-path="url(#clip-path-2)">
            <rect id="Rectangle_5134" data-name="Rectangle 5134" width="23.951" height="12.897" transform="translate(23.03 27.636)" fill=${color}/>
          </g>
        </g>
      </g>
    </g>
    <g id="Group_7316" data-name="Group 7316" transform="translate(991.95 395)">
      <g id="Group_7315" data-name="Group 7315" clip-path="url(#clip-path-3)">
        <g id="Group_7314" data-name="Group 7314" transform="translate(-25.977 -27.402)">
          <g id="Group_7313" data-name="Group 7313" transform="translate(0 0)" clip-path="url(#clip-path-2)">
            <rect id="Rectangle_5136" data-name="Rectangle 5136" width="23.03" height="20.266" transform="translate(23.951 24.872)" fill=${color}/>
          </g>
        </g>
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


export default Profile;