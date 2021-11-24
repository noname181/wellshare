import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SvgXml } from 'react-native-svg';


function DeleteIcon({ width, height }) {
    return (
        <SvgXml xml={xml} width={width} height={height} />
    );
}

const styles = StyleSheet.create({
    container: {}
});

const xml = `<svg xmlns="http://www.w3.org/2000/svg" width="12.938" height="15.438" viewBox="0 0 12.938 15.438">
<g id="Group_7987" data-name="Group 7987" transform="translate(-790.657 -751.522)">
  <path id="Path_19128" data-name="Path 19128" d="M803.126,764.636h-12a.468.468,0,0,0-.468.468v2.216a.468.468,0,0,0,.468.468h.43V775.7a.476.476,0,0,0,0,.049,2.02,2.02,0,0,0,1.957,1.872h7.221a2.02,2.02,0,0,0,1.957-1.872.455.455,0,0,0,0-.048v-7.909h.43a.468.468,0,0,0,.468-.468V765.1A.468.468,0,0,0,803.126,764.636Zm-11.533.936h11.065v1.28H791.593Zm10.166,10.1a1.085,1.085,0,0,1-1.023,1.01h-7.221a1.086,1.086,0,0,1-1.024-1.01v-7.883h9.268Z" transform="translate(0 -10.658)" fill="#ee3737"/>
  <path id="Path_19129" data-name="Path 19129" d="M812.361,752.458h3.287v1h.936V751.99a.468.468,0,0,0-.468-.468h-4.223a.468.468,0,0,0-.468.468v1.467h.936Z" transform="translate(-16.879)" fill="#ee3737"/>
  <path id="Path_19130" data-name="Path 19130" d="M810.153,795.289a.468.468,0,0,0,.468-.468v-4.449a.468.468,0,1,0-.936,0v4.449A.468.468,0,0,0,810.153,795.289Z" transform="translate(-15.465 -31.194)" fill="#ee3737"/>
  <path id="Path_19131" data-name="Path 19131" d="M823.168,795.289a.468.468,0,0,0,.468-.468v-4.449a.468.468,0,1,0-.936,0v4.449A.468.468,0,0,0,823.168,795.289Z" transform="translate(-26.042 -31.194)" fill="#ee3737"/>
  <path id="Path_19132" data-name="Path 19132" d="M836.182,795.289a.468.468,0,0,0,.468-.468v-4.449a.468.468,0,1,0-.936,0v4.449A.468.468,0,0,0,836.182,795.289Z" transform="translate(-36.619 -31.194)" fill="#ee3737"/>
</g>
</svg>
`;
export default DeleteIcon;

