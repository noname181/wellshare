import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SvgXml } from 'react-native-svg';


function Notice({ width, height }) {
    return (
        <SvgXml xml={xml} width={width} height={height} />
    );
}

const styles = StyleSheet.create({
    container: {}
});

const xml = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13.321" height="14.801" viewBox="0 0 13.321 14.801">
  <defs>
    <clipPath id="clip-path">
      <path id="Path_18272" data-name="Path 18272" d="M1462.731,490.746h-.381l.011-.74h.37a2.589,2.589,0,0,1,2.59,2.589v8.877a2.589,2.589,0,0,1-2.59,2.589h-8.141a2.589,2.589,0,0,1-2.59-2.589v-8.877a2.59,2.59,0,0,1,2.59-2.589l.37-.006v.746h-.37a1.85,1.85,0,0,0-1.85,1.849v8.877a1.85,1.85,0,0,0,1.85,1.849h8.141a1.85,1.85,0,0,0,1.85-1.849v-8.877A1.85,1.85,0,0,0,1462.731,490.746Z" transform="translate(-1452 -490)" fill="#b2b2b2"/>
    </clipPath>
    <clipPath id="clip-path-2">
      <rect id="Rectangle_5125" data-name="Rectangle 5125" width="372.134" height="266.414" transform="translate(0 0)" fill="#b2b2b2"/>
    </clipPath>
    <clipPath id="clip-path-3">
      <path id="Path_18273" data-name="Path 18273" d="M1474.66,486h.74v2.96h-.74Zm-2.96,0h.74v2.96h-.74Zm-2.96,0h.74v2.96h-.74Zm-.74,11.841v-.74h5.92v.74Zm0-5.92v-.74h7.4v.74Zm0,2.96v-.74h7.4v.74Z" transform="translate(-1468 -486)" fill="#b2b2b2"/>
    </clipPath>
    <clipPath id="clip-path-5">
      <rect id="Rectangle_5130" data-name="Rectangle 5130" width="1.057" fill="#b2b2b2"/>
    </clipPath>
  </defs>
  <g id="Group_7308" data-name="Group 7308" transform="translate(-258 -580)">
    <g id="Group_7307" data-name="Group 7307" transform="translate(258 580)">
      <g id="Group_7294" data-name="Group 7294" transform="translate(0 0.74)">
        <g id="Group_7293" data-name="Group 7293" clip-path="url(#clip-path)">
          <g id="Group_7292" data-name="Group 7292" transform="translate(-268.212 -90.602)">
            <g id="Group_7291" data-name="Group 7291" transform="translate(0 0)" clip-path="url(#clip-path-2)">
              <rect id="Rectangle_5124" data-name="Rectangle 5124" width="16.915" height="17.972" transform="translate(266.414 88.805)" fill="#b2b2b2"/>
            </g>
          </g>
        </g>
      </g>
      <g id="Group_7298" data-name="Group 7298" transform="translate(2.96 0)">
        <g id="Group_7297" data-name="Group 7297" clip-path="url(#clip-path-3)">
          <g id="Group_7296" data-name="Group 7296" transform="translate(-271.172 -89.861)">
            <g id="Group_7295" data-name="Group 7295" transform="translate(0 0)" clip-path="url(#clip-path-2)">
              <rect id="Rectangle_5126" data-name="Rectangle 5126" width="10.572" height="15.858" transform="translate(269.586 87.747)" fill="#b2b2b2"/>
            </g>
          </g>
        </g>
      </g>
      <g id="Group_7302" data-name="Group 7302" transform="translate(4.547 1.058)">
        <g id="Group_7301" data-name="Group 7301" transform="translate(0 0)" clip-path="url(#clip-path-5)">
          <g id="Group_7300" data-name="Group 7300" transform="translate(-272.758 -90.919)">
            <g id="Group_7299" data-name="Group 7299" transform="translate(0 0)" clip-path="url(#clip-path-2)">
              <rect id="Rectangle_5128" data-name="Rectangle 5128" width="5.286" height="4.229" transform="translate(270.643 88.805)" fill="#b2b2b2"/>
            </g>
          </g>
        </g>
      </g>
      <g id="Group_7306" data-name="Group 7306" transform="translate(7.718 1.058)">
        <g id="Group_7305" data-name="Group 7305" transform="translate(0 0)" clip-path="url(#clip-path-5)">
          <g id="Group_7304" data-name="Group 7304" transform="translate(-275.929 -90.919)">
            <g id="Group_7303" data-name="Group 7303" transform="translate(0 0)" clip-path="url(#clip-path-2)">
              <rect id="Rectangle_5131" data-name="Rectangle 5131" width="5.286" height="4.229" transform="translate(273.814 88.805)" fill="#b2b2b2"/>
            </g>
          </g>
        </g>
      </g>
    </g>
  </g>
</svg>`;
export default Notice;