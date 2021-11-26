import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SvgXml } from 'react-native-svg';


function Deliveryman_complain({ width, height, color }) {
  const xml = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="14.5" height="14.5" viewBox="0 0 14.5 14.5">
  <defs>
    <clipPath id="clip-path">
      <path id="Path_18291" data-name="Path 18291" d="M1233.324,150.272l.9.9a.929.929,0,0,1,0,1.313l-2.141,2.141-.506-.506,2.141-2.141a.212.212,0,0,0,0-.3l-.9-.9a.212.212,0,0,0-.3,0l-7.508,7.508-.4,1.6,1.6-.4,4.726-4.726.506.506-4.866,4.866-2.955.739.739-2.955,7.648-7.648A.928.928,0,0,1,1233.324,150.272Zm-8.974,6.978-.725.725h-2.537a.362.362,0,0,0-.363.362v5.075a.362.362,0,0,0,.363.362h12.325a.363.363,0,0,0,.363-.362v-5.437h-4.35l.725-.725h4.35v6.163a1.087,1.087,0,0,1-1.088,1.087h-12.325a1.087,1.087,0,0,1-1.088-1.087v-5.075a1.088,1.088,0,0,1,1.088-1.087Z" transform="translate(-1220 -150)" fill=${color}/>
    </clipPath>
    <clipPath id="clip-path-2">
      <rect id="Rectangle_5169" data-name="Rectangle 5169" width="365.059" height="260.274" fill=${color}/>
    </clipPath>
    <clipPath id="clip-path-3">
      <path id="Path_18292" data-name="Path 18292" d="M1232,204.9v-.725h10.875v.725Zm5.075-2.175.725-.725h5.075v.725Z" transform="translate(-1232 -202)" fill=${color}/>
    </clipPath>
  </defs>
  <g id="Group_7394" data-name="Group 7394" transform="translate(-1220 -150)">
    <g id="Group_7389" data-name="Group 7389" transform="translate(1220 150)">
      <g id="Group_7388" data-name="Group 7388" clip-path="url(#clip-path)">
        <g id="Group_7387" data-name="Group 7387" transform="translate(-157.741 -122.812)">
          <g id="Group_7386" data-name="Group 7386" transform="translate(0 0)" clip-path="url(#clip-path-2)">
            <rect id="Rectangle_5168" data-name="Rectangle 5168" width="19.154" height="19.154" transform="translate(155.488 120.56)" fill=${color}/>
          </g>
        </g>
      </g>
    </g>
    <g id="Group_7393" data-name="Group 7393" transform="translate(1222.175 159.425)">
      <g id="Group_7392" data-name="Group 7392" transform="translate(0 0)" clip-path="url(#clip-path-3)">
        <g id="Group_7391" data-name="Group 7391" transform="translate(-159.916 -132.237)">
          <g id="Group_7390" data-name="Group 7390" transform="translate(0 0)" clip-path="url(#clip-path-2)">
            <rect id="Rectangle_5170" data-name="Rectangle 5170" width="13.521" height="5.634" transform="translate(158.868 130.7)" fill=${color}/>
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


export default Deliveryman_complain;