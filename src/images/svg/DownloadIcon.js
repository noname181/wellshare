import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SvgXml } from 'react-native-svg';


function DownloadIcon({ width, height }) {
    return (
        <SvgXml xml={xml} width={width} height={height} />
    );
}

const styles = StyleSheet.create({
    container: {}
});

const xml = `<svg xmlns="http://www.w3.org/2000/svg" width="12.056" height="12.434" viewBox="0 0 12.056 12.434">
<path id="_2" data-name="2" d="M158.48,197.506v1.442h12.056v-1.442Zm10.948-4.968-4.9,4.134-4.792-4.14.943-1.09,3.188,2.755v-7.682h1.442v7.613l3.194-2.692Z" transform="translate(-158.48 -186.515)" fill="#8b3f8a"/>
</svg>
`;
export default DownloadIcon;

