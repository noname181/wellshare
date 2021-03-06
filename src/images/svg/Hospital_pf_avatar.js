import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SvgXml } from 'react-native-svg';


function Hospital_pf_avatar({ width, height, color }) {
  const xml = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="102" height="103" viewBox="0 0 102 103">
  <defs>
    <filter id="Ellipse_677" x="0" y="0" width="102" height="103" filterUnits="userSpaceOnUse">
      <feOffset dy="2" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="2" result="blur"/>
      <feFlood flood-opacity="0.161"/>
      <feComposite operator="in" in2="blur"/>
      <feComposite in="SourceGraphic"/>
    </filter>
    <clipPath id="clip-path">
      <circle id="Ellipse_678" data-name="Ellipse 678" cx="40" cy="40" r="40" transform="translate(-16054 23566)" fill="#fff" stroke="#707070" stroke-width="1"/>
    </clipPath>
    <linearGradient id="linear-gradient" x1="0.5" y1="0.007" x2="0.5" y2="0.767" gradientUnits="objectBoundingBox">
      <stop offset="0" stop-color="#fff"/>
      <stop offset="0.016" stop-color="#fffdfa"/>
      <stop offset="0.14" stop-color="#fff6db"/>
      <stop offset="0.261" stop-color="#fff0c5"/>
      <stop offset="0.376" stop-color="#ffedb7"/>
      <stop offset="0.478" stop-color="#ffecb3"/>
      <stop offset="0.74" stop-color="#ffcca2"/>
      <stop offset="0.989" stop-color="#ffab91"/>
    </linearGradient>
    <linearGradient id="linear-gradient-2" y1="-0.822" y2="4.974" xlink:href="#linear-gradient"/>
    <linearGradient id="linear-gradient-3" y1="-0.128" y2="4.337" xlink:href="#linear-gradient"/>
    <linearGradient id="linear-gradient-4" y1="-0.045" y2="3.214" xlink:href="#linear-gradient"/>
    <linearGradient id="linear-gradient-5" x1="0.5" y1="-0.04" x2="0.5" y2="4.354" gradientUnits="objectBoundingBox">
      <stop offset="0" stop-color="#fff"/>
      <stop offset="0.018" stop-color="#fffdfa"/>
      <stop offset="0.16" stop-color="#fff6db"/>
      <stop offset="0.299" stop-color="#fff0c5"/>
      <stop offset="0.43" stop-color="#ffedb7"/>
      <stop offset="0.548" stop-color="#ffecb3"/>
      <stop offset="0.774" stop-color="#ffcca2"/>
      <stop offset="0.989" stop-color="#ffab91"/>
    </linearGradient>
    <linearGradient id="linear-gradient-6" x1="0.5" y1="0.201" x2="0.5" y2="2.499" gradientUnits="objectBoundingBox">
      <stop offset="0" stop-color="#fff"/>
      <stop offset="0.109" stop-color="#fffcf6"/>
      <stop offset="0.287" stop-color="#fff6dd"/>
      <stop offset="0.509" stop-color="#ffecb6"/>
      <stop offset="0.529" stop-color="#ffecb3"/>
      <stop offset="0.695" stop-color="#ffcca2"/>
      <stop offset="0.852" stop-color="#ffab91"/>
    </linearGradient>
  </defs>
  <g id="Group_8132" data-name="Group 8132" transform="translate(-129 -98)">
    <g transform="matrix(1, 0, 0, 1, 129, 98)" filter="url(#Ellipse_677)">
      <ellipse id="Ellipse_677-2" data-name="Ellipse 677" cx="45" cy="45.5" rx="45" ry="45.5" transform="translate(6 4)" fill="#fff"/>
    </g>
    <g id="Mask_Group_200" data-name="Mask Group 200" transform="translate(16194 -23458)" clip-path="url(#clip-path)">
      <g id="Group_7648" data-name="Group 7648" transform="translate(-16087.194 23564.33)">
        <rect id="Rectangle_5335" data-name="Rectangle 5335" width="147.298" height="90.119" transform="translate(0)" fill="url(#linear-gradient)"/>
        <path id="Path_18623" data-name="Path 18623" d="M495.629,333.684a1.248,1.248,0,0,1,1.137.736,1.513,1.513,0,0,1,2.8-.439,2.22,2.22,0,1,1,2.218,2.259h-3.534c-.649,0-2.041-.055-2.62-.055a1.25,1.25,0,1,1,0-2.5Z" transform="translate(-443.384 -297.574)" fill="url(#linear-gradient-2)"/>
        <path id="Path_18624" data-name="Path 18624" d="M1196.1,319.093a1.249,1.249,0,0,0-1.137.736,1.513,1.513,0,0,0-2.8-.439,2.219,2.219,0,1,0-2.218,2.259h3.535c.649,0,2.041-.055,2.62-.055a1.25,1.25,0,0,0,0-2.5Z" transform="translate(-1065.21 -284.488)" fill="url(#linear-gradient-3)"/>
        <path id="Path_18625" data-name="Path 18625" d="M98.357,250.834H96.916a.842.842,0,0,0-.821-.52c0-.01,0-.029,0-.038a1.721,1.721,0,0,0-3.315-.652,1.621,1.621,0,0,0-.241.223,1.592,1.592,0,0,0-1.605-.5,2.4,2.4,0,0,0-.861-1.171,2.878,2.878,0,0,0-4.252-3.575,1.5,1.5,0,0,0-2.4,1.5,2.59,2.59,0,0,0-1.639,3.113c-.01.029-.019.059-.027.089-.047,0-.095-.007-.143-.007a1.6,1.6,0,0,0-1.243.589,1.777,1.777,0,0,0-2.767-.456,1.771,1.771,0,0,0-.957-.454s0-.006,0-.009a1.777,1.777,0,0,0-1.213-1.685,3.088,3.088,0,0,0-4.934.655,2.586,2.586,0,0,0-4.153,1.33,1.693,1.693,0,0,0-.715-.159A1.714,1.714,0,0,0,64,250.31a1.074,1.074,0,0,0-.869.524H61.212a.826.826,0,1,0,0,1.65H98.357a.826.826,0,1,0,0-1.65Z" transform="translate(-54.135 -218.913)" fill="url(#linear-gradient-4)"/>
        <path id="Path_18626" data-name="Path 18626" d="M1002.9,147.687h2.322a4.013,4.013,0,1,1,7.1-2.994,2.314,2.314,0,0,1,3.141,2.994h.763a1.327,1.327,0,0,1,2.65,0h.965a.989.989,0,0,1,.994.987.969.969,0,0,1-.969.95H1002.9a.969.969,0,0,1-.969-.969h0A.969.969,0,0,1,1002.9,147.687Z" transform="translate(-898.585 -126.579)" fill="url(#linear-gradient-5)"/>
        <g id="Group_7565" data-name="Group 7565" transform="translate(0 36.089)">
          <path id="Path_18627" data-name="Path 18627" d="M147.25,361.92l.048,31.538H0V360.966H3.4V358.8H7.427v2.063h2.888v4.229h3.507v-7.967l2.749-4h3.647v9.8h1.65V355.6h2.166v2.166h3.2v-5.116l2.576-2.784,2.684,2.737v6.453l10.521,0V355.19h5.673v2.991h1.96V355.4h1.238v2.785h1.65V362h2.888v-2.659l3.686-2.086h4.257v6.559l54.876.079v-6.123h4.332v4.849l2.372.048v-5.929H127.7V355.4h4.951v1.444h2.063v5.776h1.96v-4.435h5.364v8.149h2.269v-4.435Z" transform="translate(0 -349.868)" fill="#eac09d"/>
          <rect id="Rectangle_5336" data-name="Rectangle 5336" width="8.475" height="0.703" transform="translate(1.928 20.844) rotate(-90)" fill="#e2b896"/>
          <rect id="Rectangle_5337" data-name="Rectangle 5337" width="11.513" height="0.703" transform="translate(3.66 23.881) rotate(-90)" fill="#e2b896"/>
          <rect id="Rectangle_5338" data-name="Rectangle 5338" width="9.441" height="0.703" transform="translate(5.391 21.809) rotate(-90)" fill="#e2b896"/>
          <rect id="Rectangle_5339" data-name="Rectangle 5339" width="10.471" height="0.703" transform="translate(7.122 22.839) rotate(-90)" fill="#e2b896"/>
          <rect id="Rectangle_5340" data-name="Rectangle 5340" width="3.993" height="0.703" transform="translate(142.027 21.831) rotate(-90)" fill="#e2b896"/>
          <rect id="Rectangle_5341" data-name="Rectangle 5341" width="7.359" height="0.703" transform="translate(121.665 16.505) rotate(-90)" fill="#e2b896"/>
          <rect id="Rectangle_5342" data-name="Rectangle 5342" width="3.993" height="0.703" transform="translate(143.238 21.831) rotate(-90)" fill="#e2b896"/>
          <path id="Path_18628" data-name="Path 18628" d="M98.987,505.529l-1.538-2.546V497.7h1.538Z" transform="translate(-87.397 -482.447)" fill="#e2b896"/>
          <path id="Path_18629" data-name="Path 18629" d="M1308.02,481.219l-1.848-2.546v-5.287h1.848Z" transform="translate(-1171.441 -460.645)" fill="#e2b896"/>
          <rect id="Rectangle_5343" data-name="Rectangle 5343" width="1.538" height="2.069" transform="translate(17.272 18.458)" fill="#e2b896"/>
          <rect id="Rectangle_5344" data-name="Rectangle 5344" width="0.86" height="1.68" transform="translate(16.386 5.897)" fill="#e2b896"/>
          <rect id="Rectangle_5345" data-name="Rectangle 5345" width="0.86" height="1.68" transform="translate(127.977 7.963)" fill="#e2b896"/>
          <rect id="Rectangle_5346" data-name="Rectangle 5346" width="0.86" height="1.68" transform="translate(129.845 7.963)" fill="#e2b896"/>
          <rect id="Rectangle_5347" data-name="Rectangle 5347" width="0.86" height="1.68" transform="translate(131.713 7.963)" fill="#e2b896"/>
          <rect id="Rectangle_5348" data-name="Rectangle 5348" width="0.86" height="1.68" transform="translate(127.977 10.666)" fill="#e2b896"/>
          <rect id="Rectangle_5349" data-name="Rectangle 5349" width="0.86" height="1.68" transform="translate(129.845 10.666)" fill="#e2b896"/>
          <rect id="Rectangle_5350" data-name="Rectangle 5350" width="0.86" height="1.68" transform="translate(131.713 10.666)" fill="#e2b896"/>
          <rect id="Rectangle_5351" data-name="Rectangle 5351" width="0.86" height="1.68" transform="translate(127.977 13.42)" fill="#e2b896"/>
          <rect id="Rectangle_5352" data-name="Rectangle 5352" width="0.86" height="1.68" transform="translate(129.845 13.42)" fill="#e2b896"/>
          <rect id="Rectangle_5353" data-name="Rectangle 5353" width="0.86" height="1.68" transform="translate(129.845 16.296)" fill="#e2b896"/>
          <rect id="Rectangle_5354" data-name="Rectangle 5354" width="0.86" height="1.68" transform="translate(131.713 13.42)" fill="#e2b896"/>
          <rect id="Rectangle_5355" data-name="Rectangle 5355" width="0.86" height="1.68" transform="translate(18.174 5.897)" fill="#e2b896"/>
          <rect id="Rectangle_5356" data-name="Rectangle 5356" width="0.86" height="1.68" transform="translate(16.386 8.926)" fill="#e2b896"/>
          <rect id="Rectangle_5357" data-name="Rectangle 5357" width="0.86" height="1.68" transform="translate(16.386 11.739)" fill="#e2b896"/>
          <rect id="Rectangle_5358" data-name="Rectangle 5358" width="0.86" height="1.68" transform="translate(18.174 8.926)" fill="#e2b896"/>
          <rect id="Rectangle_5359" data-name="Rectangle 5359" width="0.784" height="5.858" transform="translate(20.02 13.098)" fill="#e2b896"/>
          <path id="Path_18630" data-name="Path 18630" d="M232.716,426.5l.007.718h3.262l0-.718Z" transform="translate(-208.712 -418.592)" fill="#e2b896"/>
          <path id="Path_18631" data-name="Path 18631" d="M267.409,352.925h-5.334v-.269l2.577-2.783,2.757,2.783Z" transform="translate(-235.042 -349.872)" fill="#e2b896"/>
          <rect id="Rectangle_5360" data-name="Rectangle 5360" width="0.643" height="6.288" transform="translate(28.102 3.928)" fill="#e2b896"/>
          <rect id="Rectangle_5361" data-name="Rectangle 5361" width="0.643" height="12.327" transform="translate(29.355 3.928)" fill="#e2b896"/>
          <rect id="Rectangle_5362" data-name="Rectangle 5362" width="0.643" height="6.288" transform="translate(30.679 3.928)" fill="#e2b896"/>
          <rect id="Rectangle_5363" data-name="Rectangle 5363" width="1.014" height="1.014" transform="translate(26.024 9.568)" fill="#e2b896"/>
          <rect id="Rectangle_5364" data-name="Rectangle 5364" width="1.014" height="1.014" transform="translate(24.028 9.568)" fill="#e2b896"/>
          <rect id="Rectangle_5365" data-name="Rectangle 5365" width="1.014" height="1.014" transform="translate(137.849 10.955)" fill="#e2b896"/>
          <rect id="Rectangle_5366" data-name="Rectangle 5366" width="1.014" height="1.014" transform="translate(139.792 10.955)" fill="#e2b896"/>
          <rect id="Rectangle_5367" data-name="Rectangle 5367" width="1.014" height="1.014" transform="translate(137.849 13)" fill="#e2b896"/>
          <rect id="Rectangle_5368" data-name="Rectangle 5368" width="1.014" height="1.014" transform="translate(139.792 13)" fill="#e2b896"/>
          <rect id="Rectangle_5369" data-name="Rectangle 5369" width="2.957" height="1.014" transform="translate(137.849 15.046)" fill="#e2b896"/>
          <rect id="Rectangle_5370" data-name="Rectangle 5370" width="1.478" height="1.014" transform="translate(145.52 13.355)" fill="#e2b896"/>
          <rect id="Rectangle_5371" data-name="Rectangle 5371" width="1.478" height="1.014" transform="translate(145.52 15.448)" fill="#e2b896"/>
          <rect id="Rectangle_5372" data-name="Rectangle 5372" width="2.957" height="1.014" transform="translate(137.849 16.962)" fill="#e2b896"/>
          <rect id="Rectangle_5373" data-name="Rectangle 5373" width="1.014" height="1.014" transform="translate(137.849 18.954)" fill="#e2b896"/>
          <rect id="Rectangle_5374" data-name="Rectangle 5374" width="1.014" height="1.014" transform="translate(137.849 20.817)" fill="#e2b896"/>
          <rect id="Rectangle_5375" data-name="Rectangle 5375" width="1.014" height="1.014" transform="translate(26.024 11.462)" fill="#e2b896"/>
          <rect id="Rectangle_5376" data-name="Rectangle 5376" width="1.014" height="1.014" transform="translate(24.028 11.462)" fill="#e2b896"/>
          <rect id="Rectangle_5377" data-name="Rectangle 5377" width="1.014" height="1.014" transform="translate(26.024 13.355)" fill="#e2b896"/>
          <rect id="Rectangle_5378" data-name="Rectangle 5378" width="1.014" height="1.014" transform="translate(24.028 13.355)" fill="#e2b896"/>
          <rect id="Rectangle_5379" data-name="Rectangle 5379" width="1.014" height="1.014" transform="translate(26.024 15.249)" fill="#e2b896"/>
          <rect id="Rectangle_5380" data-name="Rectangle 5380" width="1.014" height="1.014" transform="translate(24.028 15.249)" fill="#e2b896"/>
          <rect id="Rectangle_5381" data-name="Rectangle 5381" width="1.014" height="1.014" transform="translate(24.028 17.342)" fill="#e2b896"/>
          <rect id="Rectangle_5382" data-name="Rectangle 5382" width="13.517" height="14.617" transform="translate(13.47 20.043)" fill="#e2b896"/>
          <rect id="Rectangle_5383" data-name="Rectangle 5383" width="11.353" height="15.502" transform="translate(123.006 20.368)" fill="#e2b896"/>
          <rect id="Rectangle_5384" data-name="Rectangle 5384" width="10.6" height="9.949" transform="translate(5.847 24.711)" fill="#e2b896"/>
          <rect id="Rectangle_5385" data-name="Rectangle 5385" width="0.792" height="4.668" transform="translate(13.47 20.043)" fill="#f9cba2"/>
          <rect id="Rectangle_5386" data-name="Rectangle 5386" width="1.054" height="1.183" transform="translate(7.588 26.102)" fill="#f9cba2"/>
          <rect id="Rectangle_5387" data-name="Rectangle 5387" width="1.054" height="1.183" transform="translate(9.815 26.102)" fill="#f9cba2"/>
          <rect id="Rectangle_5388" data-name="Rectangle 5388" width="1.054" height="1.183" transform="translate(12.042 26.102)" fill="#f9cba2"/>
          <rect id="Rectangle_5389" data-name="Rectangle 5389" width="1.054" height="1.183" transform="translate(9.815 28.282)" fill="#f9cba2"/>
          <rect id="Rectangle_5390" data-name="Rectangle 5390" width="1.054" height="1.183" transform="translate(12.042 28.282)" fill="#f9cba2"/>
          <rect id="Rectangle_5391" data-name="Rectangle 5391" width="1.054" height="1.183" transform="translate(14.269 26.102)" fill="#f9cba2"/>
          <rect id="Rectangle_5392" data-name="Rectangle 5392" width="0.826" height="10.016" transform="translate(5.786 24.711)" fill="#f9cba2"/>
          <rect id="Rectangle_5393" data-name="Rectangle 5393" width="0.766" height="13.032" transform="translate(16.829 21.628)" fill="#f9cba2"/>
          <rect id="Rectangle_5394" data-name="Rectangle 5394" width="0.766" height="13.032" transform="translate(18.677 21.628)" fill="#f9cba2"/>
          <rect id="Rectangle_5395" data-name="Rectangle 5395" width="0.766" height="13.032" transform="translate(20.525 21.628)" fill="#f9cba2"/>
          <rect id="Rectangle_5396" data-name="Rectangle 5396" width="0.766" height="13.032" transform="translate(22.515 21.628)" fill="#f9cba2"/>
          <rect id="Rectangle_5397" data-name="Rectangle 5397" width="0.766" height="13.032" transform="translate(125.522 21.422)" fill="#f9cba2"/>
          <rect id="Rectangle_5398" data-name="Rectangle 5398" width="0.766" height="13.032" transform="translate(127.701 21.422)" fill="#f9cba2"/>
          <rect id="Rectangle_5399" data-name="Rectangle 5399" width="0.766" height="13.032" transform="translate(129.621 21.422)" fill="#f9cba2"/>
          <rect id="Rectangle_5400" data-name="Rectangle 5400" width="1.275" height="8.5" transform="translate(13.592 7.256)" fill="#e2b896"/>
          <path id="Path_18632" data-name="Path 18632" d="M156.24,382.567h-4.35l.671-.973h3.68Z" transform="translate(-136.222 -378.321)" fill="#e2b896"/>
          <path id="Path_18633" data-name="Path 18633" d="M37.023,410.414v.879H33v-.879a2.022,2.022,0,0,1,2.022-2.016,2,2,0,0,1,2,2.016Z" transform="translate(-29.596 -402.361)" fill="#e2b896"/>
          <rect id="Rectangle_5401" data-name="Rectangle 5401" width="1.275" height="8.5" transform="translate(125.225 6.892)" fill="#e2b896"/>
          <rect id="Rectangle_5402" data-name="Rectangle 5402" width="5.942" height="1.453" transform="translate(136.436 8.313)" fill="#e2b896"/>
          <rect id="Rectangle_5403" data-name="Rectangle 5403" width="12.557" height="11.034" transform="translate(132.243 24.841)" fill="#e2b896"/>
          <rect id="Rectangle_5404" data-name="Rectangle 5404" width="4.775" height="2.117" transform="translate(136.983 23.446)" fill="#e2b896"/>
          <rect id="Rectangle_5405" data-name="Rectangle 5405" width="0.766" height="13.032" transform="translate(131.659 21.422)" fill="#f9cba2"/>
          <rect id="Rectangle_5406" data-name="Rectangle 5406" width="2.423" height="1.014" transform="translate(134.56 26.572)" fill="#f9cba2"/>
          <rect id="Rectangle_5407" data-name="Rectangle 5407" width="2.423" height="9.297" transform="translate(142.378 26.572)" fill="#f9cba2"/>
          <rect id="Rectangle_5408" data-name="Rectangle 5408" width="2.423" height="1.014" transform="translate(134.56 28.973)" fill="#f9cba2"/>
          <rect id="Rectangle_5409" data-name="Rectangle 5409" width="2.423" height="1.014" transform="translate(134.56 31.373)" fill="#f9cba2"/>
          <rect id="Rectangle_5410" data-name="Rectangle 5410" width="1.014" height="1.014" transform="translate(138.015 26.572)" fill="#f9cba2"/>
          <rect id="Rectangle_5411" data-name="Rectangle 5411" width="1.014" height="1.014" transform="translate(140.05 26.572)" fill="#f9cba2"/>
          <rect id="Rectangle_5412" data-name="Rectangle 5412" width="1.014" height="1.014" transform="translate(138.015 28.973)" fill="#f9cba2"/>
          <rect id="Rectangle_5413" data-name="Rectangle 5413" width="1.014" height="1.014" transform="translate(140.05 28.973)" fill="#f9cba2"/>
          <rect id="Rectangle_5414" data-name="Rectangle 5414" width="1.014" height="1.014" transform="translate(138.015 31.373)" fill="#f9cba2"/>
          <rect id="Rectangle_5415" data-name="Rectangle 5415" width="1.014" height="1.014" transform="translate(140.05 31.373)" fill="#f9cba2"/>
        </g>
        <path id="Path_18634" data-name="Path 18634" d="M1213.61,621.573a1.434,1.434,0,0,1,.581.129,3.167,3.167,0,0,1,3.639-.6,1.435,1.435,0,0,1,1.863-.889,1.011,1.011,0,0,1,1.333-1.287,2.834,2.834,0,0,1,4.593.028,1.316,1.316,0,0,1,1.841-.133,2.278,2.278,0,0,1,3.114-.969,2.833,2.833,0,0,1,3.854-2.515l0,15.207-19.6-.2.037-3.681a3.157,3.157,0,0,1-1.555-2.266,1.429,1.429,0,0,1,.309-2.828Z" transform="translate(-1087.129 -551.695)" fill="#8eb259"/>
        <path id="Path_18635" data-name="Path 18635" d="M24.883,621.223a1.712,1.712,0,0,0-.7.148,3.79,3.79,0,0,0-4.354-.762,1.719,1.719,0,0,0-2.222-1.09,1.212,1.212,0,0,0-1.582-1.562,3.392,3.392,0,0,0-5.5-.023,1.575,1.575,0,0,0-2.205-.183,2.727,2.727,0,0,0-3.72-1.2,3.394,3.394,0,0,0-4.588-3.068L0,627.937H23.328v-.611a3.791,3.791,0,0,0,1.891-2.7,1.717,1.717,0,0,0-.336-3.4Z" transform="translate(0 -550.005)" fill="#8eb259"/>
        <path id="Path_18636" data-name="Path 18636" d="M43.769,687.636a1.809,1.809,0,0,0,.474-1.237,1.864,1.864,0,0,0-1.867-1.857c-.042,0-.082,0-.123.007,0-.024,0-.046,0-.07a2.155,2.155,0,0,0-3.4-1.762,1.792,1.792,0,0,0-2.258-1.673,2.109,2.109,0,0,0-3.929.669c-.056-.005-.113-.009-.171-.009a1.782,1.782,0,0,0-1.753,1.465,1.779,1.779,0,0,0-2.766,1.043c-.045,0-.09-.007-.136-.007a1.35,1.35,0,0,0-.9.345c-.048,0-.1-.007-.144-.007a1.876,1.876,0,0,0-1.883,1.855,1.828,1.828,0,0,0,.476,1.237Z" transform="translate(-22.348 -609.814)" fill="#b6c127"/>
        <path id="Path_18637" data-name="Path 18637" d="M1257.112,684.823a1.541,1.541,0,0,0-1.266-1.515,1.693,1.693,0,0,0,.051-.409,1.714,1.714,0,0,0-1.375-1.68,1.247,1.247,0,0,0-2.2-.474,1.541,1.541,0,0,0-1.891.439,1.779,1.779,0,0,0-1.287-.14,2.109,2.109,0,0,0-3.929.669c-.056-.005-.113-.009-.171-.009a1.78,1.78,0,0,1-2.785,1.135,1.782,1.782,0,0,0-1.734,1.374c-.045,0-.09-.007-.136-.007a1.35,1.35,0,0,0-.9.345c-.048,0-.1-.007-.144-.007a1.876,1.876,0,0,0-1.883,1.855,1.827,1.827,0,0,0,.476,1.237l19.132-.1Z" transform="translate(-1109.814 -609.814)" fill="#b6c127"/>
        <rect id="Rectangle_5416" data-name="Rectangle 5416" width="147.298" height="8.499" transform="translate(0 76.67)" fill="#cddc39"/>
        <rect id="Rectangle_5417" data-name="Rectangle 5417" width="147.298" height="22.402" transform="translate(0 81.723)" fill="#7884b1"/>
        <path id="Path_18638" data-name="Path 18638" d="M198.8,770.966H62.073a2.2,2.2,0,0,0-2.2,2.2H201A2.2,2.2,0,0,0,198.8,770.966Z" transform="translate(-53.7 -691.441)" fill="#e3ea54"/>
        <path id="Path_18639" data-name="Path 18639" d="M98.347,126.7l.5,0a2.671,2.671,0,0,1,2.49-3.592l.112,0a3.876,3.876,0,1,1,7.36,2.295,1.559,1.559,0,0,1,2.158,1.218l.528,0a1.988,1.988,0,1,1,3.962-.249,2.041,2.041,0,0,1-.011.224l.5,0a.876.876,0,1,1,.011,1.751l-2.25.014a1.96,1.96,0,0,1-.448,0l-3.632.023a1.428,1.428,0,0,1-.382,0l-7.61.048c-.086.009-.173.014-.261.015s-.175,0-.261-.011l-2.752.017a.876.876,0,1,1-.011-1.751Z" transform="translate(-87.422 -107.616)" fill="url(#linear-gradient-6)"/>
        <g id="Group_7566" data-name="Group 7566" transform="translate(23.685 57.391)">
          <path id="Path_18640" data-name="Path 18640" d="M239.662,567.187a5.025,5.025,0,1,1-10.049,0c0-3.866,2.25-10.8,5.025-10.8S239.662,564.4,239.662,567.187Z" transform="translate(-229.613 -556.387)" fill="#558b2f"/>
          <path id="Path_18641" data-name="Path 18641" d="M283.351,567.187c0-3.569-2.25-10.8-5.025-10.8v15.839A5.032,5.032,0,0,0,283.351,567.187Z" transform="translate(-273.301 -556.387)" fill="#7ba42f"/>
          <path id="Path_18642" data-name="Path 18642" d="M271.738,661.223l-.3,10.31h1.422l-.3-10.31Z" transform="translate(-267.121 -650.409)" fill="#776a68"/>
          <path id="Path_18643" data-name="Path 18643" d="M278.326,661.223v10.31h.711l-.3-10.31Z" transform="translate(-273.301 -650.409)" fill="#7f7675"/>
        </g>
        <g id="Group_7567" data-name="Group 7567" transform="translate(20.798 59.93)">
          <path id="Path_18644" data-name="Path 18644" d="M208.877,588.79a3.623,3.623,0,1,1-7.246,0c0-2.788,1.622-7.787,3.623-7.787S208.877,586.784,208.877,588.79Z" transform="translate(-201.631 -581.003)" fill="#558b2f"/>
          <path id="Path_18645" data-name="Path 18645" d="M240.378,588.79c0-2.573-1.622-7.787-3.623-7.787v11.42A3.628,3.628,0,0,0,240.378,588.79Z" transform="translate(-233.132 -581.003)" fill="#7ba42f"/>
          <path id="Path_18646" data-name="Path 18646" d="M232.005,656.6l-.219,7.434h1.025l-.219-7.434Z" transform="translate(-228.676 -648.798)" fill="#776a68"/>
          <path id="Path_18647" data-name="Path 18647" d="M236.755,656.6v7.434h.513l-.219-7.434Z" transform="translate(-233.132 -648.798)" fill="#7f7675"/>
        </g>
        <g id="Group_7568" data-name="Group 7568" transform="translate(16.648 60.094)">
          <path id="Path_18648" data-name="Path 18648" d="M195.483,677.368l-.578,9.659.578.048Z" transform="translate(-191.449 -667.592)" fill="#776a68"/>
          <path id="Path_18649" data-name="Path 18649" d="M200.356,677.368v9.707l.578-.048Z" transform="translate(-196.338 -667.592)" fill="#7f7675"/>
          <path id="Path_18650" data-name="Path 18650" d="M204.777,593.843a4.064,4.064,0,0,1-4.064,4.064h-.01V582.59h.01c.548,0,1.5,2.065,2.35,4.464l-1.849,1.058,2.151-.173A26.258,26.258,0,0,1,204.777,593.843Z" transform="translate(-196.65 -582.59)" fill="#74aa35"/>
          <path id="Path_18651" data-name="Path 18651" d="M165.455,582.59v15.317a4.063,4.063,0,0,1-4.054-4.064,9.4,9.4,0,0,1,.25-1.749l2.355.081-2.186-.819C162.667,587.886,164.574,582.627,165.455,582.59Z" transform="translate(-161.401 -582.59)" fill="#5f932c"/>
        </g>
        <g id="Group_7569" data-name="Group 7569" transform="translate(25.448 55.333)">
          <path id="Path_18652" data-name="Path 18652" d="M320.757,555.641a6.937,6.937,0,0,1-6.937,6.937H313.8V536.43h.016c.936,0,2.567,3.526,4.011,7.62l-3.157,1.807,3.673-.3C319.688,549.615,320.757,553.867,320.757,555.641Z" transform="translate(-306.882 -536.43)" fill="#74aa35"/>
          <path id="Path_18653" data-name="Path 18653" d="M253.626,536.43v26.149a6.937,6.937,0,0,1-6.921-6.937,16.051,16.051,0,0,1,.427-2.985l4.021.139-3.732-1.4C248.867,545.472,252.121,536.494,253.626,536.43Z" transform="translate(-246.705 -536.43)" fill="#5f932c"/>
        </g>
        <rect id="Rectangle_5418" data-name="Rectangle 5418" width="147.298" height="2.05" transform="translate(0 81.723)" fill="#687499"/>
        <rect id="Rectangle_5419" data-name="Rectangle 5419" width="7.195" height="0.928" rx="0.464" transform="translate(22.643 91.996)" fill="#fff" opacity="0.16"/>
        <rect id="Rectangle_5420" data-name="Rectangle 5420" width="2.454" height="0.928" rx="0.464" transform="translate(30.9 91.996)" fill="#fff" opacity="0.16"/>
        <path id="Path_18654" data-name="Path 18654" d="M1085.29,839.928h-24.731a.464.464,0,0,1-.464-.464h0a.464.464,0,0,1,.464-.464h24.731a.464.464,0,0,1,.464.464h0A.464.464,0,0,1,1085.29,839.928Z" transform="translate(-950.747 -752.457)" fill="#687499"/>
        <path id="Path_18655" data-name="Path 18655" d="M1321.134,839.928h-1.526a.464.464,0,0,1-.464-.464h0a.464.464,0,0,1,.464-.464h1.526a.464.464,0,0,1,.464.464h0A.464.464,0,0,1,1321.134,839.928Z" transform="translate(-1183.075 -752.457)" fill="#687499"/>
        <rect id="Rectangle_5421" data-name="Rectangle 5421" width="6.933" height="0.928" rx="0.464" transform="translate(117.506 92.46)" fill="#687499"/>
        <path id="Path_18656" data-name="Path 18656" d="M158.578,829.4h-3.651a.464.464,0,0,1-.464-.464h0a.464.464,0,0,1,.464-.464h3.651a.464.464,0,0,1,.464.464h0A.464.464,0,0,1,158.578,829.4Z" transform="translate(-138.53 -743.019)" fill="#687499"/>
        <path id="Path_18657" data-name="Path 18657" d="M1209.072,255.109h-3.177a.824.824,0,0,0,.82-.825h0a.824.824,0,0,0-.82-.825h-4.627a.824.824,0,0,0-.82.825h0a.824.824,0,0,0,.82.825h-5.6a.824.824,0,0,0-.82.825h0a.825.825,0,0,0,.82.825h13.4a.825.825,0,0,0,.82-.825h0A.825.825,0,0,0,1209.072,255.109Z" transform="translate(-1071.603 -227.315)" fill="#fff" opacity="0.7"/>
        <path id="Path_18658" data-name="Path 18658" d="M366.826,187.942H362.2a.82.82,0,0,1-.82-.82h0a.82.82,0,0,1,.82-.82h4.627a.82.82,0,0,1,.82.82h0A.82.82,0,0,1,366.826,187.942Z" transform="translate(-324.104 -167.086)" fill="#fff" opacity="0.43"/>
        <path id="Rectangle_5422" data-name="Rectangle 5422" d="M.82,0h1.39a.82.82,0,0,1,.82.82v0a.82.82,0,0,1-.82.82H.82A.82.82,0,0,1,0,.82v0A.82.82,0,0,1,.82,0Z" transform="translate(139.699 27.808)" fill="#fff" opacity="0.7"/>
        <path id="Path_18659" data-name="Path 18659" d="M958.634,209.87h-1.39a.82.82,0,0,1-.82-.82h0a.82.82,0,0,1,.82-.82h1.39a.82.82,0,0,1,.82.82h0A.82.82,0,0,1,958.634,209.87Z" transform="translate(-857.77 -186.752)" fill="#fff" opacity="0.7"/>
        <rect id="Rectangle_5423" data-name="Rectangle 5423" width="3.029" height="1.639" rx="0.82" transform="translate(32.884 19.304)" fill="#fff" opacity="0.43"/>
        <path id="Path_18660" data-name="Path 18660" d="M1299.34,346.4h-1.39a.82.82,0,0,1-.82-.82h0a.82.82,0,0,1,.82-.82h1.39a.82.82,0,0,1,.82.82h0A.82.82,0,0,1,1299.34,346.4Z" transform="translate(-1163.332 -309.194)" fill="#fff" opacity="0.43"/>
        <g id="Group_7637" data-name="Group 7637" transform="translate(23.305 14.435)">
          <g id="Group_7584" data-name="Group 7584" transform="translate(11.093 29.93)">
            <path id="Path_18661" data-name="Path 18661" d="M437.608,438.353h16.771l.035,36.515H437.608Z" transform="translate(-426.867 -437.502)" fill="#ddd"/>
            <rect id="Rectangle_5424" data-name="Rectangle 5424" width="10.066" height="36.515" transform="translate(0.675 0.851)" fill="#b5b5b5"/>
            <g id="Group_7570" data-name="Group 7570" transform="translate(13.413 3.682)">
              <rect id="Rectangle_5425" data-name="Rectangle 5425" width="12.199" height="2.798" transform="translate(12.199 2.878) rotate(180)" fill="#40b1dd"/>
              <path id="Path_18662" data-name="Path 18662" d="M579.8,466.209l.408-.408v2.878H579.8Z" transform="translate(-567.803 -465.801)" fill="#c9c9c9"/>
              <path id="Path_18663" data-name="Path 18663" d="M475.508,466.209l.408-.408h-12.4v.408Z" transform="translate(-463.514 -465.801)" fill="#b2b2b2"/>
              <path id="Path_18664" data-name="Path 18664" d="M475.509,472.229h-.316v-2.167H463.514v-.3h11.993Z" transform="translate(-463.514 -469.35)" fill="#38a5c6"/>
              <rect id="Rectangle_5426" data-name="Rectangle 5426" width="0.242" height="2.219" transform="translate(3.012 2.878) rotate(180)" fill="#38a5c6"/>
              <rect id="Rectangle_5427" data-name="Rectangle 5427" width="0.242" height="2.219" transform="translate(6.251 2.878) rotate(180)" fill="#38a5c6"/>
              <rect id="Rectangle_5428" data-name="Rectangle 5428" width="0.242" height="2.219" transform="translate(9.489 2.878) rotate(180)" fill="#38a5c6"/>
            </g>
            <g id="Group_7575" data-name="Group 7575" transform="translate(4.331 8.495)">
              <g id="Group_7572" data-name="Group 7572" transform="translate(6.361 0.092)">
                <g id="Group_7571" data-name="Group 7571">
                  <rect id="Rectangle_5429" data-name="Rectangle 5429" width="5.983" height="7.117" transform="translate(0.035 0.011)" fill="#40b1dd"/>
                  <path id="Path_18665" data-name="Path 18665" d="M492.981,513.808l.458-.458v7.123h-.458Z" transform="translate(-487.22 -513.351)" fill="#c9c9c9"/>
                  <path id="Path_18666" data-name="Path 18666" d="M442.888,513.808l.458-.458h-6.218v.458Z" transform="translate(-437.128 -513.351)" fill="#b2b2b2"/>
                  <path id="Path_18667" data-name="Path 18667" d="M443.32,524.455h-.354v-6.326h-5.357v-.34h5.71Z" transform="translate(-437.559 -517.331)" fill="#38a5c6"/>
                </g>
              </g>
              <g id="Group_7574" data-name="Group 7574">
                <g id="Group_7573" data-name="Group 7573">
                  <path id="Path_18668" data-name="Path 18668" d="M385.448,516.459v.413h-5.57v6.4h-.413v-.015l.03-6.305.017-.487Z" transform="translate(-379.053 -516.046)" fill="#338faf"/>
                  <path id="Path_18669" data-name="Path 18669" d="M377.719,515.724l-.017.487-.03,6.305v.015h-.206v-6.892l.253.084Z" transform="translate(-377.259 -515.311)" fill="#c9c9c9"/>
                  <path id="Path_18670" data-name="Path 18670" d="M375.671,512.787v6.892h-.206V512.54l.017-.082h-.015l.21.264Z" transform="translate(-375.465 -512.458)" fill="#d1d3d3"/>
                  <path id="Path_18671" data-name="Path 18671" d="M375.5,512.458l.216.216-.23-.216Z" transform="translate(-375.485 -512.458)" fill="#c9c9c9"/>
                  <path id="Path_18672" data-name="Path 18672" d="M377.671,515.851v6.681h-.206v-6.892Z" transform="translate(-377.259 -515.311)" fill="#d1d3d3"/>
                  <path id="Path_18673" data-name="Path 18673" d="M381.88,512.458v.493h0v-.39h-6.189v.224l.006-.063-.21-.264Z" transform="translate(-375.485 -512.458)" fill="#9b9b9b"/>
                  <rect id="Rectangle_5430" data-name="Rectangle 5430" height="0.413" transform="translate(6.395 0.413)" fill="#38a5c6"/>
                </g>
              </g>
              <rect id="Rectangle_5431" data-name="Rectangle 5431" width="5.57" height="6.395" transform="translate(0.825 0.825)" fill="#359cbc"/>
              <path id="Path_18674" data-name="Path 18674" d="M383.654,513.459v.309h-5.936l-.253-.084v-.225Z" transform="translate(-377.259 -513.355)" fill="#9b9b9b"/>
            </g>
            <g id="Group_7577" data-name="Group 7577" transform="translate(17.973 8.587)">
              <g id="Group_7576" data-name="Group 7576" transform="translate(0)">
                <rect id="Rectangle_5432" data-name="Rectangle 5432" width="3.21" height="2.653" transform="translate(3.21 2.744) rotate(180)" fill="#40b1dd"/>
                <path id="Path_18675" data-name="Path 18675" d="M536.613,513.808l.458-.458v2.743h-.458Z" transform="translate(-533.632 -513.351)" fill="#c9c9c9"/>
                <path id="Path_18676" data-name="Path 18676" d="M510.695,513.808l.458-.458h-3.437v.458Z" transform="translate(-507.715 -513.351)" fill="#b2b2b2"/>
                <path id="Path_18677" data-name="Path 18677" d="M510.7,520.075h-.354v-1.945h-2.626v-.34h2.979Z" transform="translate(-507.715 -517.331)" fill="#38a5c6"/>
              </g>
            </g>
            <g id="Group_7579" data-name="Group 7579" transform="translate(22.473 8.587)">
              <g id="Group_7578" data-name="Group 7578">
                <rect id="Rectangle_5433" data-name="Rectangle 5433" width="3.21" height="2.653" transform="translate(3.21 2.744) rotate(180)" fill="#40b1dd"/>
                <path id="Path_18678" data-name="Path 18678" d="M580.244,513.808l.458-.458v2.743h-.458Z" transform="translate(-577.263 -513.351)" fill="#c9c9c9"/>
                <path id="Path_18679" data-name="Path 18679" d="M554.326,513.808l.458-.458h-3.437v.458Z" transform="translate(-551.347 -513.351)" fill="#b2b2b2"/>
                <path id="Path_18680" data-name="Path 18680" d="M554.328,520.075h-.354v-1.945h-2.626v-.34h2.979Z" transform="translate(-551.347 -517.331)" fill="#38a5c6"/>
              </g>
            </g>
            <g id="Group_7581" data-name="Group 7581" transform="translate(17.973 12.967)">
              <g id="Group_7580" data-name="Group 7580" transform="translate(0)">
                <rect id="Rectangle_5434" data-name="Rectangle 5434" width="3.21" height="2.653" transform="translate(3.21 2.744) rotate(180)" fill="#40b1dd"/>
                <path id="Path_18681" data-name="Path 18681" d="M536.613,556.271l.458-.458v2.743h-.458Z" transform="translate(-533.632 -555.813)" fill="#c9c9c9"/>
                <path id="Path_18682" data-name="Path 18682" d="M510.695,556.271l.458-.458h-3.437v.458Z" transform="translate(-507.715 -555.813)" fill="#b2b2b2"/>
                <path id="Path_18683" data-name="Path 18683" d="M510.7,562.537h-.354v-1.946h-2.626v-.34h2.979Z" transform="translate(-507.715 -559.794)" fill="#38a5c6"/>
              </g>
            </g>
            <g id="Group_7583" data-name="Group 7583" transform="translate(22.473 12.967)">
              <g id="Group_7582" data-name="Group 7582">
                <rect id="Rectangle_5435" data-name="Rectangle 5435" width="3.21" height="2.653" transform="translate(3.21 2.744) rotate(180)" fill="#40b1dd"/>
                <path id="Path_18684" data-name="Path 18684" d="M580.244,556.271l.458-.458v2.743h-.458Z" transform="translate(-577.263 -555.813)" fill="#c9c9c9"/>
                <path id="Path_18685" data-name="Path 18685" d="M554.326,556.271l.458-.458h-3.437v.458Z" transform="translate(-551.347 -555.813)" fill="#b2b2b2"/>
                <path id="Path_18686" data-name="Path 18686" d="M554.328,562.537h-.354v-1.946h-2.626v-.34h2.979Z" transform="translate(-551.347 -559.794)" fill="#38a5c6"/>
              </g>
            </g>
            <rect id="Rectangle_5436" data-name="Rectangle 5436" width="16.263" height="1.152" transform="translate(11.25)" fill="#cc4266"/>
            <rect id="Rectangle_5437" data-name="Rectangle 5437" width="16.263" height="0.51" transform="translate(11.25 1.152)" fill="#bc3f66"/>
            <rect id="Rectangle_5438" data-name="Rectangle 5438" width="11.39" height="1.152" fill="#bc3c64"/>
            <rect id="Rectangle_5439" data-name="Rectangle 5439" width="11.39" height="0.51" transform="translate(0 1.152)" fill="#a5345d"/>
            <rect id="Rectangle_5440" data-name="Rectangle 5440" width="26.872" height="0.615" transform="translate(0.675 1.662)" opacity="0.12"/>
            <rect id="Rectangle_5441" data-name="Rectangle 5441" width="0.241" height="6.908" transform="translate(10.741 8.816)" fill="#b2b2b2"/>
            <path id="Path_18687" data-name="Path 18687" d="M445.412,537.551v.241h-5.47v-.241Z" transform="translate(-428.959 -526.467)" fill="#c9c9c9"/>
            <path id="Path_18688" data-name="Path 18688" d="M385.729,537.551v.241H380v-.241Z" transform="translate(-375.2 -526.467)" fill="#acadad"/>
            <path id="Path_18689" data-name="Path 18689" d="M445.412,561.284v.241h-5.47v-.241Z" transform="translate(-428.959 -547.753)" fill="#c9c9c9"/>
            <path id="Path_18690" data-name="Path 18690" d="M385.729,561.284v.241H380v-.241Z" transform="translate(-375.2 -547.753)" fill="#acadad"/>
            <rect id="Rectangle_5442" data-name="Rectangle 5442" width="0.241" height="6.908" transform="translate(10.5 8.816)" fill="#9b9b9b"/>
          </g>
          <rect id="Rectangle_5443" data-name="Rectangle 5443" width="24.316" height="49.814" transform="translate(95.346 66.739) rotate(180)" fill="#ddd"/>
          <rect id="Rectangle_5444" data-name="Rectangle 5444" width="22.446" height="49.814" transform="translate(82.685 66.739) rotate(180)" fill="#c1c1c1"/>
          <g id="Group_7589" data-name="Group 7589" transform="translate(65.539 40.488)">
            <rect id="Rectangle_5445" data-name="Rectangle 5445" width="23.865" height="25.125" transform="translate(12.376 1.684)" fill="#f5f5f5"/>
            <rect id="Rectangle_5446" data-name="Rectangle 5446" width="11.913" height="25.125" transform="translate(0.463 1.684)" fill="#e5e5e5"/>
            <g id="Group_7587" data-name="Group 7587" transform="translate(5.455 16.053)">
              <g id="Group_7585" data-name="Group 7585">
                <rect id="Rectangle_5447" data-name="Rectangle 5447" width="4.825" height="10.659" transform="translate(0.247 0.097)" fill="#55d2f9"/>
                <path id="Path_18691" data-name="Path 18691" d="M914.683,688.575l-.493-.493v10.756h.493Z" transform="translate(-914.19 -688.081)" fill="#d6d6d6"/>
                <path id="Path_18692" data-name="Path 18692" d="M914.7,688.575l-.493-.493h5.07v.493Z" transform="translate(-914.202 -688.081)" fill="#b2b2b2"/>
                <path id="Path_18693" data-name="Path 18693" d="M918.973,703.127h.382v-9.9h4.2v-.366h-4.577Z" transform="translate(-918.48 -692.371)" fill="#53bfea"/>
              </g>
              <g id="Group_7586" data-name="Group 7586" transform="translate(8.838 0.041)">
                <rect id="Rectangle_5448" data-name="Rectangle 5448" width="19.49" height="10.618" transform="translate(19.49 10.715) rotate(180)" fill="#55d2f9"/>
                <path id="Path_18694" data-name="Path 18694" d="M1186.423,688.974l.493-.493v10.715h-.493Z" transform="translate(-1167.18 -688.48)" fill="#c9c9c9"/>
                <path id="Path_18695" data-name="Path 18695" d="M1019.109,688.974l.494-.493H999.867v.493Z" transform="translate(-999.867 -688.48)" fill="#b2b2b2"/>
                <path id="Path_18696" data-name="Path 18696" d="M1019.111,703.485h-.382V693.63H999.867v-.367h19.242Z" transform="translate(-999.867 -692.77)" fill="#53bfea"/>
              </g>
            </g>
            <g id="Group_7588" data-name="Group 7588" transform="translate(13.058)">
              <path id="Path_18697" data-name="Path 18697" d="M987.9,533.672h23.471l-1.007-1.218H987.9Z" transform="translate(-987.897 -532.454)" fill="#f04866"/>
              <rect id="Rectangle_5449" data-name="Rectangle 5449" width="23.497" height="0.411" transform="translate(0 1.218)" fill="#cc4266"/>
            </g>
            <rect id="Rectangle_5450" data-name="Rectangle 5450" width="34.801" height="0.757" transform="translate(1.44 1.629)" opacity="0.12"/>
            <rect id="Rectangle_5451" data-name="Rectangle 5451" width="13.058" height="1.218" fill="#d84464"/>
            <rect id="Rectangle_5452" data-name="Rectangle 5452" width="13.058" height="0.411" transform="translate(0 1.218)" fill="#ba385a"/>
          </g>
          <rect id="Rectangle_5453" data-name="Rectangle 5453" width="7.952" height="7.973" transform="translate(45.66)" fill="#e5e5e5"/>
          <rect id="Rectangle_5454" data-name="Rectangle 5454" width="6.499" height="7.973" transform="translate(39.313)" fill="#d3d3d3"/>
          <rect id="Rectangle_5455" data-name="Rectangle 5455" width="21.177" height="62.442" transform="translate(45.74 4.855)" fill="#f5f5f5"/>
          <path id="Path_18698" data-name="Path 18698" d="M587.3,249.445H574.835V187h9.985v47.064l2.479.07Z" transform="translate(-538.845 -182.148)" fill="#e5e5e5"/>
          <g id="Group_7590" data-name="Group 7590" transform="translate(47.722 7.973)">
            <rect id="Rectangle_5456" data-name="Rectangle 5456" width="17.255" height="4.457" transform="translate(17.255 4.554) rotate(180)" fill="#55d2f9"/>
            <path id="Path_18699" data-name="Path 18699" d="M853.468,217.725l.493-.493v4.554h-.493Z" transform="translate(-836.46 -217.232)" fill="#c9c9c9"/>
            <path id="Path_18700" data-name="Path 18700" d="M705.587,217.725l.493-.493h-17.5v.493Z" transform="translate(-688.58 -217.232)" fill="#b2b2b2"/>
            <path id="Path_18701" data-name="Path 18701" d="M705.588,226.076h-.382v-3.695H688.58v-.366h17.007Z" transform="translate(-688.58 -221.521)" fill="#53bfea"/>
            <rect id="Rectangle_5457" data-name="Rectangle 5457" width="0.293" height="3.757" transform="translate(8.467 4.554) rotate(180)" fill="#53bfea"/>
            <rect id="Rectangle_5458" data-name="Rectangle 5458" width="0.293" height="3.757" transform="translate(12.946 4.554) rotate(180)" fill="#53bfea"/>
            <rect id="Rectangle_5459" data-name="Rectangle 5459" width="0.293" height="3.757" transform="translate(3.995 4.554) rotate(180)" fill="#53bfea"/>
          </g>
          <rect id="Rectangle_5460" data-name="Rectangle 5460" width="10.034" height="1.537" transform="translate(35.928 65.759)" fill="#c9c7c7"/>
          <path id="Path_18702" data-name="Path 18702" d="M264.693,629.594h-35.71v-18.72h35.675v3.144h.035Z" transform="translate(-228.669 -562.298)" fill="#f5f5f5"/>
          <g id="Group_7596" data-name="Group 7596" transform="translate(53.612 1.572)">
            <g id="Group_7591" data-name="Group 7591">
              <path id="Path_18703" data-name="Path 18703" d="M755.686,157.182h-.309v-1.694h-9.692v-.309h10Z" transform="translate(-745.684 -155.178)" fill="#f04866"/>
            </g>
            <g id="Group_7592" data-name="Group 7592" transform="translate(1.427 0.155)">
              <rect id="Rectangle_5461" data-name="Rectangle 5461" width="0.309" height="1.849" fill="#f04866"/>
            </g>
            <g id="Group_7593" data-name="Group 7593" transform="translate(3.481 0.155)">
              <rect id="Rectangle_5462" data-name="Rectangle 5462" width="0.309" height="1.849" fill="#f04866"/>
            </g>
            <g id="Group_7594" data-name="Group 7594" transform="translate(5.535 0.155)">
              <rect id="Rectangle_5463" data-name="Rectangle 5463" width="0.309" height="1.849" fill="#f04866"/>
            </g>
            <g id="Group_7595" data-name="Group 7595" transform="translate(7.589 0.155)">
              <rect id="Rectangle_5464" data-name="Rectangle 5464" width="0.309" height="1.849" fill="#f04866"/>
            </g>
          </g>
          <rect id="Rectangle_5465" data-name="Rectangle 5465" width="2.429" height="1.722" transform="translate(45.974 12.527)" fill="#c6c6c6"/>
          <rect id="Rectangle_5466" data-name="Rectangle 5466" width="19.986" height="1.722" transform="translate(48.422 12.527)" fill="#ddd"/>
          <g id="Group_7597" data-name="Group 7597" transform="translate(47.722 14.249)">
            <rect id="Rectangle_5467" data-name="Rectangle 5467" width="17.255" height="4.457" transform="translate(17.255 4.554) rotate(180)" fill="#55d2f9"/>
            <path id="Path_18704" data-name="Path 18704" d="M853.468,278.573l.493-.493v4.554h-.493Z" transform="translate(-836.46 -278.08)" fill="#c9c9c9"/>
            <path id="Path_18705" data-name="Path 18705" d="M705.587,278.573l.493-.493h-17.5v.493Z" transform="translate(-688.58 -278.08)" fill="#b2b2b2"/>
            <path id="Path_18706" data-name="Path 18706" d="M705.588,286.924h-.382V283.23H688.58v-.367h17.007Z" transform="translate(-688.58 -282.37)" fill="#53bfea"/>
            <rect id="Rectangle_5468" data-name="Rectangle 5468" width="0.293" height="3.757" transform="translate(8.467 4.554) rotate(180)" fill="#53bfea"/>
            <rect id="Rectangle_5469" data-name="Rectangle 5469" width="0.293" height="3.757" transform="translate(12.946 4.554) rotate(180)" fill="#53bfea"/>
            <rect id="Rectangle_5470" data-name="Rectangle 5470" width="0.293" height="3.757" transform="translate(3.995 4.554) rotate(180)" fill="#53bfea"/>
          </g>
          <rect id="Rectangle_5471" data-name="Rectangle 5471" width="2.429" height="1.722" transform="translate(45.974 18.804)" fill="#c6c6c6"/>
          <rect id="Rectangle_5472" data-name="Rectangle 5472" width="19.986" height="1.722" transform="translate(48.422 18.804)" fill="#ddd"/>
          <g id="Group_7598" data-name="Group 7598" transform="translate(47.722 20.526)">
            <rect id="Rectangle_5473" data-name="Rectangle 5473" width="17.255" height="4.457" transform="translate(17.255 4.554) rotate(180)" fill="#55d2f9"/>
            <path id="Path_18707" data-name="Path 18707" d="M853.468,339.422l.493-.493v4.554h-.493Z" transform="translate(-836.46 -338.929)" fill="#c9c9c9"/>
            <path id="Path_18708" data-name="Path 18708" d="M705.587,339.422l.493-.493h-17.5v.493Z" transform="translate(-688.58 -338.929)" fill="#b2b2b2"/>
            <path id="Path_18709" data-name="Path 18709" d="M705.588,347.773h-.382v-3.695H688.58v-.366h17.007Z" transform="translate(-688.58 -343.219)" fill="#53bfea"/>
            <rect id="Rectangle_5474" data-name="Rectangle 5474" width="0.293" height="3.757" transform="translate(8.467 4.554) rotate(180)" fill="#53bfea"/>
            <rect id="Rectangle_5475" data-name="Rectangle 5475" width="0.293" height="3.757" transform="translate(12.946 4.554) rotate(180)" fill="#53bfea"/>
            <rect id="Rectangle_5476" data-name="Rectangle 5476" width="0.293" height="3.757" transform="translate(3.995 4.554) rotate(180)" fill="#53bfea"/>
          </g>
          <rect id="Rectangle_5477" data-name="Rectangle 5477" width="2.429" height="1.722" transform="translate(45.974 25.08)" fill="#c6c6c6"/>
          <rect id="Rectangle_5478" data-name="Rectangle 5478" width="19.986" height="1.722" transform="translate(48.422 25.08)" fill="#ddd"/>
          <g id="Group_7599" data-name="Group 7599" transform="translate(47.722 26.802)">
            <rect id="Rectangle_5479" data-name="Rectangle 5479" width="17.255" height="4.457" transform="translate(17.255 4.554) rotate(180)" fill="#55d2f9"/>
            <path id="Path_18710" data-name="Path 18710" d="M853.468,400.271l.493-.493v4.554h-.493Z" transform="translate(-836.46 -399.777)" fill="#c9c9c9"/>
            <path id="Path_18711" data-name="Path 18711" d="M705.587,400.271l.493-.493h-17.5v.493Z" transform="translate(-688.58 -399.777)" fill="#b2b2b2"/>
            <path id="Path_18712" data-name="Path 18712" d="M705.588,408.622h-.382v-3.695H688.58v-.367h17.007Z" transform="translate(-688.58 -404.067)" fill="#53bfea"/>
            <rect id="Rectangle_5480" data-name="Rectangle 5480" width="0.293" height="3.757" transform="translate(8.467 4.554) rotate(180)" fill="#53bfea"/>
            <rect id="Rectangle_5481" data-name="Rectangle 5481" width="0.293" height="3.757" transform="translate(12.946 4.554) rotate(180)" fill="#53bfea"/>
            <rect id="Rectangle_5482" data-name="Rectangle 5482" width="0.293" height="3.757" transform="translate(3.995 4.554) rotate(180)" fill="#53bfea"/>
          </g>
          <rect id="Rectangle_5483" data-name="Rectangle 5483" width="2.429" height="1.722" transform="translate(45.974 31.357)" fill="#c6c6c6"/>
          <rect id="Rectangle_5484" data-name="Rectangle 5484" width="19.986" height="1.722" transform="translate(48.422 31.357)" fill="#ddd"/>
          <g id="Group_7600" data-name="Group 7600" transform="translate(47.722 33.079)">
            <rect id="Rectangle_5485" data-name="Rectangle 5485" width="17.255" height="4.457" transform="translate(17.255 4.554) rotate(180)" fill="#55d2f9"/>
            <path id="Path_18713" data-name="Path 18713" d="M853.468,461.119l.493-.493v4.554h-.493Z" transform="translate(-836.46 -460.626)" fill="#c9c9c9"/>
            <path id="Path_18714" data-name="Path 18714" d="M705.587,461.119l.493-.493h-17.5v.493Z" transform="translate(-688.58 -460.626)" fill="#b2b2b2"/>
            <path id="Path_18715" data-name="Path 18715" d="M705.588,469.47h-.382v-3.695H688.58v-.366h17.007Z" transform="translate(-688.58 -464.916)" fill="#53bfea"/>
            <rect id="Rectangle_5486" data-name="Rectangle 5486" width="0.293" height="3.757" transform="translate(8.467 4.554) rotate(180)" fill="#53bfea"/>
            <rect id="Rectangle_5487" data-name="Rectangle 5487" width="0.293" height="3.757" transform="translate(12.946 4.554) rotate(180)" fill="#53bfea"/>
            <rect id="Rectangle_5488" data-name="Rectangle 5488" width="0.293" height="3.757" transform="translate(3.995 4.554) rotate(180)" fill="#53bfea"/>
          </g>
          <rect id="Rectangle_5489" data-name="Rectangle 5489" width="2.429" height="1.722" transform="translate(45.974 37.633)" fill="#c6c6c6"/>
          <rect id="Rectangle_5490" data-name="Rectangle 5490" width="19.986" height="1.722" transform="translate(48.422 37.633)" fill="#ddd"/>
          <g id="Group_7601" data-name="Group 7601" transform="translate(47.722 39.355)">
            <rect id="Rectangle_5491" data-name="Rectangle 5491" width="17.255" height="4.457" transform="translate(17.255 4.554) rotate(180)" fill="#55d2f9"/>
            <path id="Path_18716" data-name="Path 18716" d="M853.468,521.968l.493-.493v4.554h-.493Z" transform="translate(-836.46 -521.475)" fill="#c9c9c9"/>
            <path id="Path_18717" data-name="Path 18717" d="M705.587,521.968l.493-.493h-17.5v.493Z" transform="translate(-688.58 -521.475)" fill="#b2b2b2"/>
            <path id="Path_18718" data-name="Path 18718" d="M705.588,530.319h-.382v-3.694H688.58v-.367h17.007Z" transform="translate(-688.58 -525.764)" fill="#53bfea"/>
            <rect id="Rectangle_5492" data-name="Rectangle 5492" width="0.293" height="3.757" transform="translate(8.467 4.554) rotate(180)" fill="#53bfea"/>
            <rect id="Rectangle_5493" data-name="Rectangle 5493" width="0.293" height="3.757" transform="translate(12.946 4.554) rotate(180)" fill="#53bfea"/>
            <rect id="Rectangle_5494" data-name="Rectangle 5494" width="0.293" height="3.757" transform="translate(3.995 4.554) rotate(180)" fill="#53bfea"/>
          </g>
          <rect id="Rectangle_5495" data-name="Rectangle 5495" width="2.429" height="1.722" transform="translate(45.974 43.91)" fill="#c6c6c6"/>
          <rect id="Rectangle_5496" data-name="Rectangle 5496" width="19.986" height="1.722" transform="translate(48.422 43.91)" fill="#ddd"/>
          <g id="Group_7602" data-name="Group 7602" transform="translate(47.722 45.632)">
            <rect id="Rectangle_5497" data-name="Rectangle 5497" width="17.255" height="4.457" transform="translate(17.255 4.554) rotate(180)" fill="#55d2f9"/>
            <path id="Path_18719" data-name="Path 18719" d="M853.468,582.817l.493-.493v4.554h-.493Z" transform="translate(-836.46 -582.323)" fill="#c9c9c9"/>
            <path id="Path_18720" data-name="Path 18720" d="M705.587,582.817l.493-.493h-17.5v.493Z" transform="translate(-688.58 -582.323)" fill="#b2b2b2"/>
            <path id="Path_18721" data-name="Path 18721" d="M705.588,591.167h-.382v-3.695H688.58v-.367h17.007Z" transform="translate(-688.58 -586.613)" fill="#53bfea"/>
            <rect id="Rectangle_5498" data-name="Rectangle 5498" width="0.293" height="3.757" transform="translate(8.467 4.554) rotate(180)" fill="#53bfea"/>
            <rect id="Rectangle_5499" data-name="Rectangle 5499" width="0.293" height="3.757" transform="translate(12.946 4.554) rotate(180)" fill="#53bfea"/>
            <rect id="Rectangle_5500" data-name="Rectangle 5500" width="0.293" height="3.757" transform="translate(3.995 4.554) rotate(180)" fill="#53bfea"/>
          </g>
          <rect id="Rectangle_5501" data-name="Rectangle 5501" width="2.429" height="1.722" transform="translate(45.974 50.186)" fill="#c6c6c6"/>
          <rect id="Rectangle_5502" data-name="Rectangle 5502" width="19.986" height="1.722" transform="translate(48.422 50.186)" fill="#ddd"/>
          <rect id="Rectangle_5503" data-name="Rectangle 5503" width="10.031" height="1.537" transform="translate(35.928 65.759)" fill="#cecece"/>
          <g id="Group_7603" data-name="Group 7603" transform="translate(23.179 60.794)">
            <rect id="Rectangle_5504" data-name="Rectangle 5504" width="4.855" height="2.622" transform="translate(0.247 0.097)" fill="#55d2f9"/>
            <path id="Path_18722" data-name="Path 18722" d="M451.141,729.814l-.493-.493v2.719h.493Z" transform="translate(-450.648 -729.32)" fill="#c9c9c9"/>
            <path id="Path_18723" data-name="Path 18723" d="M451.155,729.814l-.493-.493h5.1v.493Z" transform="translate(-450.66 -729.32)" fill="#b2b2b2"/>
            <path id="Path_18724" data-name="Path 18724" d="M455.431,736.329h.382V734.47h4.226V734.1h-4.606Z" transform="translate(-454.938 -733.61)" fill="#53bfea"/>
            <rect id="Rectangle_5505" data-name="Rectangle 5505" width="1.941" height="0.249" transform="translate(3.09 0.781) rotate(90)" fill="#53bfea"/>
          </g>
          <g id="Group_7604" data-name="Group 7604" transform="translate(9.787 60.794)">
            <rect id="Rectangle_5506" data-name="Rectangle 5506" width="4.855" height="2.622" transform="translate(0.247 0.097)" fill="#55d2f9"/>
            <path id="Path_18725" data-name="Path 18725" d="M321.31,729.814l-.493-.493v2.719h.493Z" transform="translate(-320.817 -729.32)" fill="#c9c9c9"/>
            <path id="Path_18726" data-name="Path 18726" d="M321.324,729.814l-.493-.493h5.1v.493Z" transform="translate(-320.829 -729.32)" fill="#b2b2b2"/>
            <path id="Path_18727" data-name="Path 18727" d="M325.6,736.329h.382V734.47h4.226V734.1H325.6Z" transform="translate(-325.107 -733.61)" fill="#53bfea"/>
            <rect id="Rectangle_5507" data-name="Rectangle 5507" width="1.941" height="0.249" transform="translate(3.09 0.781) rotate(90)" fill="#53bfea"/>
          </g>
          <g id="Group_7605" data-name="Group 7605" transform="translate(79.769 44.874)">
            <rect id="Rectangle_5508" data-name="Rectangle 5508" width="19.568" height="2.622" transform="translate(19.568 2.719) rotate(180)" fill="#55d2f9"/>
            <path id="Path_18728" data-name="Path 18728" d="M1186.571,575.466l.493-.493v2.719h-.493Z" transform="translate(-1167.25 -574.972)" fill="#c9c9c9"/>
            <path id="Path_18729" data-name="Path 18729" d="M1018.58,575.466l.493-.493H999.26v.493Z" transform="translate(-999.26 -574.972)" fill="#b2b2b2"/>
            <path id="Path_18730" data-name="Path 18730" d="M1018.581,581.981h-.382v-1.859H999.26v-.366h19.32Z" transform="translate(-999.26 -579.262)" fill="#53bfea"/>
            <rect id="Rectangle_5509" data-name="Rectangle 5509" width="2.026" height="0.249" transform="translate(3.389 0.693) rotate(90)" fill="#53bfea"/>
            <rect id="Rectangle_5510" data-name="Rectangle 5510" width="2.026" height="0.249" transform="translate(7.379 0.693) rotate(90)" fill="#53bfea"/>
            <rect id="Rectangle_5511" data-name="Rectangle 5511" width="2.026" height="0.249" transform="translate(11.369 0.693) rotate(90)" fill="#53bfea"/>
            <rect id="Rectangle_5512" data-name="Rectangle 5512" width="2.026" height="0.249" transform="translate(15.359 0.693) rotate(90)" fill="#53bfea"/>
          </g>
          <g id="Group_7606" data-name="Group 7606" transform="translate(79.769 49.925)">
            <rect id="Rectangle_5513" data-name="Rectangle 5513" width="19.568" height="2.622" transform="translate(19.568 2.719) rotate(180)" fill="#55d2f9"/>
            <path id="Path_18731" data-name="Path 18731" d="M1186.571,624.439l.493-.493v2.719h-.493Z" transform="translate(-1167.25 -623.945)" fill="#c9c9c9"/>
            <path id="Path_18732" data-name="Path 18732" d="M1018.58,624.439l.493-.493H999.26v.493Z" transform="translate(-999.26 -623.945)" fill="#b2b2b2"/>
            <path id="Path_18733" data-name="Path 18733" d="M1018.581,630.954h-.382v-1.859H999.26v-.366h19.32Z" transform="translate(-999.26 -628.235)" fill="#53bfea"/>
            <rect id="Rectangle_5514" data-name="Rectangle 5514" width="2.026" height="0.249" transform="translate(3.389 0.693) rotate(90)" fill="#53bfea"/>
            <rect id="Rectangle_5515" data-name="Rectangle 5515" width="2.026" height="0.249" transform="translate(7.379 0.693) rotate(90)" fill="#53bfea"/>
            <rect id="Rectangle_5516" data-name="Rectangle 5516" width="2.026" height="0.249" transform="translate(11.369 0.693) rotate(90)" fill="#53bfea"/>
            <rect id="Rectangle_5517" data-name="Rectangle 5517" width="2.026" height="0.249" transform="translate(15.359 0.693) rotate(90)" fill="#53bfea"/>
          </g>
          <g id="Group_7607" data-name="Group 7607" transform="translate(70.968 49.925)">
            <rect id="Rectangle_5518" data-name="Rectangle 5518" width="4.855" height="2.622" transform="translate(0.247 0.097)" fill="#55d2f9"/>
            <path id="Path_18734" data-name="Path 18734" d="M914.434,624.439l-.493-.493v2.719h.493Z" transform="translate(-913.941 -623.945)" fill="#c9c9c9"/>
            <path id="Path_18735" data-name="Path 18735" d="M914.448,624.439l-.493-.493h5.1v.493Z" transform="translate(-913.953 -623.945)" fill="#b2b2b2"/>
            <path id="Path_18736" data-name="Path 18736" d="M918.724,630.954h.382v-1.859h4.226v-.366h-4.607Z" transform="translate(-918.23 -628.235)" fill="#53bfea"/>
            <rect id="Rectangle_5519" data-name="Rectangle 5519" width="1.941" height="0.249" transform="translate(3.09 0.781) rotate(90)" fill="#53bfea"/>
          </g>
          <g id="Group_7608" data-name="Group 7608" transform="translate(70.968 44.874)">
            <rect id="Rectangle_5520" data-name="Rectangle 5520" width="4.855" height="2.622" transform="translate(0.247 0.097)" fill="#55d2f9"/>
            <path id="Path_18737" data-name="Path 18737" d="M914.434,575.466l-.493-.493v2.719h.493Z" transform="translate(-913.941 -574.972)" fill="#c9c9c9"/>
            <path id="Path_18738" data-name="Path 18738" d="M914.448,575.466l-.493-.493h5.1v.493Z" transform="translate(-913.953 -574.972)" fill="#b2b2b2"/>
            <path id="Path_18739" data-name="Path 18739" d="M918.724,581.981h.382v-1.859h4.226v-.366h-4.607Z" transform="translate(-918.23 -579.262)" fill="#53bfea"/>
            <rect id="Rectangle_5521" data-name="Rectangle 5521" width="1.941" height="0.249" transform="translate(3.09 0.781) rotate(90)" fill="#53bfea"/>
          </g>
          <g id="Group_7609" data-name="Group 7609" transform="translate(3.258 60.794)">
            <rect id="Rectangle_5522" data-name="Rectangle 5522" width="4.855" height="2.622" transform="translate(0.247 0.097)" fill="#55d2f9"/>
            <path id="Path_18740" data-name="Path 18740" d="M258.014,729.814l-.493-.493v2.719h.493Z" transform="translate(-257.521 -729.32)" fill="#c9c9c9"/>
            <path id="Path_18741" data-name="Path 18741" d="M258.028,729.814l-.493-.493h5.1v.493Z" transform="translate(-257.533 -729.32)" fill="#b2b2b2"/>
            <path id="Path_18742" data-name="Path 18742" d="M262.3,736.329h.382V734.47h4.226V734.1h-4.607Z" transform="translate(-261.811 -733.61)" fill="#53bfea"/>
            <rect id="Rectangle_5523" data-name="Rectangle 5523" width="1.941" height="0.249" transform="translate(3.09 0.781) rotate(90)" fill="#53bfea"/>
          </g>
          <g id="Group_7612" data-name="Group 7612" transform="translate(2.584 50.93)">
            <g id="Group_7610" data-name="Group 7610" transform="translate(0 4.626)">
              <rect id="Rectangle_5524" data-name="Rectangle 5524" width="33.145" height="2.622" transform="translate(0.247 0.097)" fill="#55d2f9"/>
              <path id="Path_18743" data-name="Path 18743" d="M251.479,679.025l-.493-.493v2.719h.493Z" transform="translate(-250.986 -678.531)" fill="#c9c9c9"/>
              <path id="Path_18744" data-name="Path 18744" d="M251.493,679.025l-.493-.493h33.39v.493Z" transform="translate(-250.998 -678.531)" fill="#b2b2b2"/>
              <path id="Path_18745" data-name="Path 18745" d="M255.769,685.54h.382v-1.859h32.516v-.367h-32.9Z" transform="translate(-255.276 -682.821)" fill="#53bfea"/>
              <rect id="Rectangle_5525" data-name="Rectangle 5525" width="1.941" height="0.249" transform="translate(11.095 0.781) rotate(90)" fill="#53bfea"/>
              <rect id="Rectangle_5526" data-name="Rectangle 5526" width="1.941" height="0.249" transform="translate(5.826 0.781) rotate(90)" fill="#53bfea"/>
              <rect id="Rectangle_5527" data-name="Rectangle 5527" width="1.941" height="0.249" transform="translate(16.115 0.781) rotate(90)" fill="#53bfea"/>
              <rect id="Rectangle_5528" data-name="Rectangle 5528" width="1.941" height="0.249" transform="translate(21.134 0.781) rotate(90)" fill="#53bfea"/>
              <rect id="Rectangle_5529" data-name="Rectangle 5529" width="1.941" height="0.249" transform="translate(26.153 0.781) rotate(90)" fill="#53bfea"/>
              <rect id="Rectangle_5530" data-name="Rectangle 5530" width="1.941" height="0.249" transform="translate(31.172 0.781) rotate(90)" fill="#53bfea"/>
            </g>
            <g id="Group_7611" data-name="Group 7611" transform="translate(0.085)">
              <rect id="Rectangle_5531" data-name="Rectangle 5531" width="33.057" height="2.622" transform="translate(0.247 0.097)" fill="#55d2f9"/>
              <path id="Path_18746" data-name="Path 18746" d="M252.3,634.181l-.493-.493v2.719h.493Z" transform="translate(-251.805 -633.688)" fill="#c9c9c9"/>
              <path id="Path_18747" data-name="Path 18747" d="M252.313,634.181l-.493-.493h33.3v.493Z" transform="translate(-251.818 -633.688)" fill="#b2b2b2"/>
              <path id="Path_18748" data-name="Path 18748" d="M256.589,640.7h.382v-1.859H289.4v-.366H256.59Z" transform="translate(-256.095 -637.977)" fill="#53bfea"/>
              <rect id="Rectangle_5532" data-name="Rectangle 5532" width="1.941" height="0.249" transform="translate(11.095 0.781) rotate(90)" fill="#53bfea"/>
              <rect id="Rectangle_5533" data-name="Rectangle 5533" width="1.941" height="0.249" transform="translate(5.774 0.781) rotate(90)" fill="#53bfea"/>
              <rect id="Rectangle_5534" data-name="Rectangle 5534" width="1.941" height="0.249" transform="translate(16.115 0.781) rotate(90)" fill="#53bfea"/>
              <rect id="Rectangle_5535" data-name="Rectangle 5535" width="1.941" height="0.249" transform="translate(21.134 0.781) rotate(90)" fill="#53bfea"/>
              <rect id="Rectangle_5536" data-name="Rectangle 5536" width="1.941" height="0.249" transform="translate(26.153 0.781) rotate(90)" fill="#53bfea"/>
              <rect id="Rectangle_5537" data-name="Rectangle 5537" width="1.941" height="0.249" transform="translate(31.172 0.781) rotate(90)" fill="#53bfea"/>
            </g>
          </g>
          <rect id="Rectangle_5538" data-name="Rectangle 5538" width="16.353" height="1.537" transform="translate(0.315 65.759)" fill="#ddd"/>
          <rect id="Rectangle_5539" data-name="Rectangle 5539" width="15.159" height="1.537" transform="translate(20.865 65.759)" fill="#ddd"/>
          <g id="Group_7613" data-name="Group 7613" transform="translate(0 46.938)">
            <path id="Path_18749" data-name="Path 18749" d="M262.15,596.2H226.186l1.007-1.218H262.15Z" transform="translate(-226.16 -594.985)" fill="#f04866"/>
            <rect id="Rectangle_5540" data-name="Rectangle 5540" width="35.989" height="0.411" transform="translate(0 1.218)" fill="#cc4266"/>
          </g>
          <rect id="Rectangle_5541" data-name="Rectangle 5541" width="21.177" height="15.305" transform="translate(48.327 51.991)" fill="#f5f5f5"/>
          <rect id="Rectangle_5542" data-name="Rectangle 5542" width="8.59" height="11.091" transform="translate(38.545 55.101)" fill="#ccc"/>
          <rect id="Rectangle_5543" data-name="Rectangle 5543" width="18.116" height="10.648" transform="translate(49.819 55.101)" fill="#cecece"/>
          <rect id="Rectangle_5544" data-name="Rectangle 5544" width="8.903" height="11.324" transform="translate(59.032 55.194)" fill="#b5b5b5"/>
          <g id="Group_7615" data-name="Group 7615" transform="translate(51.521 58.273)">
            <rect id="Rectangle_5545" data-name="Rectangle 5545" width="4.152" height="6.567" transform="translate(0.002 0.403)" fill="#9b9b9b"/>
            <g id="Group_7614" data-name="Group 7614">
              <path id="Path_18750" data-name="Path 18750" d="M729.955,704.872l-.4.4h-4.153v-.4Z" transform="translate(-725.406 -704.872)" fill="#919191"/>
              <path id="Path_18751" data-name="Path 18751" d="M765.68,705.286v6.573l.4,0v-6.964Z" transform="translate(-761.525 -704.889)" fill="#bcbcbc"/>
            </g>
          </g>
          <g id="Group_7617" data-name="Group 7617" transform="translate(43.536 58.185)">
            <rect id="Rectangle_5546" data-name="Rectangle 5546" width="3.597" height="6.567" transform="translate(0.002 0.403)" fill="#9b9b9b"/>
            <g id="Group_7616" data-name="Group 7616">
              <path id="Path_18752" data-name="Path 18752" d="M651.589,704.021l0,.4h-3.6v-.4Z" transform="translate(-647.994 -704.021)" fill="#919191"/>
            </g>
          </g>
          <rect id="Rectangle_5547" data-name="Rectangle 5547" width="6.192" height="1.094" transform="translate(40.943 65.098)" fill="#b7b6b6"/>
          <rect id="Rectangle_5548" data-name="Rectangle 5548" width="18.028" height="1.094" transform="translate(49.819 66.202)" fill="#e8eaea"/>
          <rect id="Rectangle_5549" data-name="Rectangle 5549" width="15.706" height="1.094" transform="translate(49.819 65.098)" fill="#d8d8d8"/>
          <path id="Path_18753" data-name="Path 18753" d="M708.448,773.127v-2.211h1.214v1.094h1.214v1.117Z" transform="translate(-658.676 -705.831)" fill="#c4c4c4"/>
          <rect id="Rectangle_5550" data-name="Rectangle 5550" width="22.156" height="1.318" transform="translate(45.209 3.527)" fill="#f04866"/>
          <rect id="Rectangle_5551" data-name="Rectangle 5551" width="11.022" height="1.318" transform="translate(35.592 3.527)" fill="#d84464"/>
          <rect id="Rectangle_5552" data-name="Rectangle 5552" width="1.212" height="12.186" transform="translate(66.723 55.111)" fill="#e5e5e5"/>
          <rect id="Rectangle_5553" data-name="Rectangle 5553" width="1.192" height="12.186" transform="translate(38.545 55.111)" fill="#f5f5f5"/>
          <rect id="Rectangle_5554" data-name="Rectangle 5554" width="7.399" height="1.094" transform="translate(39.737 66.202)" fill="#a8a8a8"/>
          <rect id="Rectangle_5555" data-name="Rectangle 5555" width="35.675" height="0.757" transform="translate(0.315 48.567)" opacity="0.12"/>
          <rect id="Rectangle_5556" data-name="Rectangle 5556" width="30.928" height="0.757" transform="translate(35.989 4.844)" opacity="0.12"/>
          <g id="Group_7619" data-name="Group 7619" transform="translate(74.145 19.149)">
            <rect id="Rectangle_5557" data-name="Rectangle 5557" width="20.387" height="20.989" transform="translate(0.397 0.353)" fill="#40b1dd"/>
            <g id="Group_7618" data-name="Group 7618" transform="translate(0.005)">
              <path id="Path_18754" data-name="Path 18754" d="M965.929,325.583l-.4.4H944.8v-.4Z" transform="translate(-944.795 -325.583)" fill="#ccc"/>
              <path id="Path_18755" data-name="Path 18755" d="M1145.852,326v20.944l.4,0V325.6Z" transform="translate(-1125.113 -325.6)" fill="#d6d6d6"/>
            </g>
            <rect id="Rectangle_5558" data-name="Rectangle 5558" width="0.439" height="20.916" transform="translate(20.305 0.411)" fill="#38a5c6"/>
            <rect id="Rectangle_5559" data-name="Rectangle 5559" width="0.439" height="20.717" transform="translate(0.008 0.828) rotate(-90)" fill="#38a5c6"/>
            <rect id="Rectangle_5560" data-name="Rectangle 5560" width="8.327" height="20.508" transform="translate(0.198 0.828)" fill="#3997c6"/>
            <rect id="Rectangle_5561" data-name="Rectangle 5561" width="8.499" height="0.376" transform="translate(0.008 0.014)" fill="#b2b2b2"/>
            <rect id="Rectangle_5562" data-name="Rectangle 5562" width="8.11" height="0.421" transform="translate(0.397 0.389)" fill="#3a89ba"/>
            <rect id="Rectangle_5563" data-name="Rectangle 5563" width="0.439" height="20.916" transform="translate(0.385 0.411)" fill="#3a89ba"/>
            <path id="Path_18756" data-name="Path 18756" d="M944.742,325.6l.4.4V346.95l-.4,0Z" transform="translate(-944.742 -325.6)" fill="#d6d6d6"/>
            <rect id="Rectangle_5564" data-name="Rectangle 5564" width="0.224" height="20.112" transform="translate(0.633 9.497) rotate(-90)" fill="#ccc"/>
            <rect id="Rectangle_5565" data-name="Rectangle 5565" width="20.112" height="0.224" transform="translate(0.633 14.103)" fill="#ccc"/>
            <rect id="Rectangle_5566" data-name="Rectangle 5566" width="20.151" height="0.224" transform="translate(0.633 18.655)" fill="#ccc"/>
            <rect id="Rectangle_5567" data-name="Rectangle 5567" width="20.151" height="0.224" transform="translate(0.633 4.473)" fill="#ccc"/>
            <rect id="Rectangle_5568" data-name="Rectangle 5568" width="0.224" height="7.873" transform="translate(0.385 9.497) rotate(-90)" fill="#b2b2b2"/>
            <rect id="Rectangle_5569" data-name="Rectangle 5569" width="0.224" height="7.861" transform="translate(0.397 14.351) rotate(-90)" fill="#b2b2b2"/>
            <rect id="Rectangle_5570" data-name="Rectangle 5570" width="0.224" height="7.861" transform="translate(0.397 18.903) rotate(-90)" fill="#b2b2b2"/>
            <path id="Path_18757" data-name="Path 18757" d="M956.351,369.182v.224h-7.873l.011-.224Z" transform="translate(-948.093 -364.685)" fill="#b2b2b2"/>
            <rect id="Rectangle_5571" data-name="Rectangle 5571" width="0.238" height="21.11" transform="translate(8.478 0.226)" fill="#ccc"/>
            <rect id="Rectangle_5572" data-name="Rectangle 5572" width="0.238" height="21.11" transform="translate(8.258 0.226)" fill="#b2b2b2"/>
            <path id="Path_18758" data-name="Path 18758" d="M1087.949,348.333h-.224V327.268l.224-.1Z" transform="translate(-1072.976 -327.006)" fill="#ccc"/>
          </g>
          <rect id="Rectangle_5573" data-name="Rectangle 5573" width="0.789" height="12.166" transform="translate(89.058 55.13)" fill="#f5f5f5"/>
          <rect id="Rectangle_5574" data-name="Rectangle 5574" width="0.659" height="10.715" transform="translate(88.399 56.582)" fill="#e5e5e5"/>
          <g id="Group_7621" data-name="Group 7621" transform="translate(16.316 60.327)">
            <rect id="Rectangle_5575" data-name="Rectangle 5575" width="4.016" height="6.442" transform="translate(0.533 0.527)" fill="#7f7f7f"/>
            <g id="Group_7620" data-name="Group 7620">
              <path id="Path_18759" data-name="Path 18759" d="M384.132,724.785l.4.4h4.153v-.4Z" transform="translate(-384.13 -724.785)" fill="#d1d1d1"/>
              <path id="Path_18760" data-name="Path 18760" d="M384.51,725.2v6.573l-.4,0V724.8Z" transform="translate(-384.113 -724.802)" fill="#ededed"/>
            </g>
            <rect id="Rectangle_5576" data-name="Rectangle 5576" width="0.439" height="6.545" transform="translate(0.836 6.97) rotate(180)" fill="#adadad"/>
            <rect id="Rectangle_5577" data-name="Rectangle 5577" width="0.439" height="4.152" transform="translate(0.397 0.827) rotate(-90)" fill="#adadad"/>
          </g>
          <g id="Group_7623" data-name="Group 7623" transform="translate(29.684 60.327)">
            <rect id="Rectangle_5578" data-name="Rectangle 5578" width="4.016" height="6.442" transform="translate(0.533 0.527)" fill="#7f7f7f"/>
            <g id="Group_7622" data-name="Group 7622" transform="translate(0)">
              <path id="Path_18761" data-name="Path 18761" d="M513.726,724.785l.4.4h4.153v-.4Z" transform="translate(-513.724 -724.785)" fill="#d1d1d1"/>
              <path id="Path_18762" data-name="Path 18762" d="M514.1,725.2v6.573l-.4,0V724.8Z" transform="translate(-513.708 -724.802)" fill="#ededed"/>
            </g>
            <rect id="Rectangle_5579" data-name="Rectangle 5579" width="0.439" height="6.545" transform="translate(0.836 6.97) rotate(180)" fill="#adadad"/>
            <rect id="Rectangle_5580" data-name="Rectangle 5580" width="0.439" height="4.152" transform="translate(0.397 0.827) rotate(-90)" fill="#adadad"/>
          </g>
          <rect id="Rectangle_5581" data-name="Rectangle 5581" width="8.507" height="1.626" transform="translate(74.108 15.299)" fill="#aaa"/>
          <rect id="Rectangle_5582" data-name="Rectangle 5582" width="8.507" height="1.626" transform="translate(82.582 15.299)" fill="#c4c4c4"/>
          <rect id="Rectangle_5583" data-name="Rectangle 5583" width="1.122" height="0.779" transform="translate(19.746 59.537)" fill="#c6c6c6"/>
          <rect id="Rectangle_5584" data-name="Rectangle 5584" width="4.372" height="0.779" transform="translate(15.426 59.537)" fill="#afafaf"/>
          <rect id="Rectangle_5585" data-name="Rectangle 5585" width="1.122" height="0.779" transform="translate(33.146 59.537)" fill="#c6c6c6"/>
          <rect id="Rectangle_5586" data-name="Rectangle 5586" width="4.372" height="0.779" transform="translate(28.826 59.537)" fill="#afafaf"/>
          <g id="Group_7624" data-name="Group 7624" transform="translate(52.441 52.603)">
            <path id="Path_18763" data-name="Path 18763" d="M735.581,652.388v-.746h-.907v.746h-.348v-1.845h.348v.778h.907v-.778h.345v1.845Z" transform="translate(-734.326 -650.477)" fill="#f04866"/>
            <path id="Path_18764" data-name="Path 18764" d="M754.108,651.129a.948.948,0,1,1-1.9,0,.948.948,0,1,1,1.9,0Zm-1.553.008a.605.605,0,1,0,1.21,0,.607.607,0,1,0-1.21,0Z" transform="translate(-750.367 -650.133)" fill="#f04866"/>
            <path id="Path_18765" data-name="Path 18765" d="M773.8,650.413a.529.529,0,0,0-.438-.206c-.258,0-.382.108-.382.245,0,.161.19.206.411.232.385.048.743.148.743.588,0,.411-.364.588-.775.588a.766.766,0,0,1-.8-.453l.29-.15a.526.526,0,0,0,.519.293c.219,0,.424-.076.424-.277,0-.174-.182-.245-.427-.272-.377-.045-.725-.145-.725-.559,0-.38.374-.535.714-.538a.746.746,0,0,1,.725.366Z" transform="translate(-768.608 -649.904)" fill="#f04866"/>
            <path id="Path_18766" data-name="Path 18766" d="M791.332,651.8h-.522v.543h-.348v-1.845l.87,0A.653.653,0,1,1,791.332,651.8Zm-.522-.319h.522a.327.327,0,1,0,0-.654h-.522Z" transform="translate(-784.671 -650.431)" fill="#f04866"/>
            <path id="Path_18767" data-name="Path 18767" d="M807.761,652.362v-1.845h.345v1.845Z" transform="translate(-800.186 -650.454)" fill="#f04866"/>
            <path id="Path_18768" data-name="Path 18768" d="M814.63,650.833h-.585v-.316h1.519v.316h-.585v1.529h-.348Z" transform="translate(-805.822 -650.454)" fill="#f04866"/>
            <path id="Path_18769" data-name="Path 18769" d="M830.467,652.014H829.5l-.158.348h-.377l.828-1.845h.38l.828,1.845h-.38Zm-.483-1.11-.343.786h.685Z" transform="translate(-819.205 -650.454)" fill="#f04866"/>
            <path id="Path_18770" data-name="Path 18770" d="M850.83,650.517v1.524h.949v.322h-1.3v-1.845Z" transform="translate(-838.501 -650.454)" fill="#f04866"/>
          </g>
          <path id="Path_18771" data-name="Path 18771" d="M1102.891,696.795l-5.426,0v8.94l8.905-8.94Z" transform="translate(-1007.567 -639.353)" fill="#53bfea"/>
          <path id="Path_18772" data-name="Path 18772" d="M1111.034,711.327l-8.369,8.369h.7l7.614-7.614Z" transform="translate(-1012.231 -652.388)" fill="#53bfea"/>
          <path id="Path_18773" data-name="Path 18773" d="M1004.89,696.8h-5.022l.062,5.024v3.913l8.458-8.646V696.8Z" transform="translate(-920.036 -639.356)" fill="#53bfea"/>
          <path id="Path_18774" data-name="Path 18774" d="M1012.738,714.2l-8.073,8.073h.7l7.379-7.379Z" transform="translate(-924.339 -654.961)" fill="#53bfea"/>
          <path id="Path_18775" data-name="Path 18775" d="M928.612,754.2l-3.947,3.947h.7l3.253-3.253Z" transform="translate(-852.591 -690.835)" fill="#53bfea"/>
          <path id="Path_18776" data-name="Path 18776" d="M924.776,695.491l-4.388-.158.118,6.01-.118,2.471,4.4-4.4Z" transform="translate(-848.755 -638.044)" fill="#53bfea"/>
          <path id="Path_18777" data-name="Path 18777" d="M1000.229,631.976l-1.234.031-.03,1.859h.168l1.992-1.877Z" transform="translate(-919.227 -581.223)" fill="#53bfea"/>
          <path id="Path_18778" data-name="Path 18778" d="M1111.411,631.41l-1.935,1.891h1.166l1.94-1.877Z" transform="translate(-1018.338 -580.715)" fill="#53bfea"/>
          <path id="Path_18779" data-name="Path 18779" d="M1125.989,631.41l-1.935,1.891h.632l1.94-1.877Z" transform="translate(-1031.413 -580.715)" fill="#53bfea"/>
          <path id="Path_18780" data-name="Path 18780" d="M1054.117,631.41l-1.934,1.891h1.166l1.94-1.877Z" transform="translate(-966.955 -580.715)" fill="#53bfea"/>
          <path id="Path_18781" data-name="Path 18781" d="M1068.7,631.41l-1.935,1.891h.632l1.94-1.877Z" transform="translate(-980.029 -580.715)" fill="#53bfea"/>
          <path id="Path_18782" data-name="Path 18782" d="M1102.817,582.71l-1.935,1.891h1.166l1.94-1.877Z" transform="translate(-1010.631 -537.038)" fill="#53bfea"/>
          <path id="Path_18783" data-name="Path 18783" d="M1117.4,582.71l-1.935,1.891h.632l1.94-1.877Z" transform="translate(-1023.706 -537.038)" fill="#53bfea"/>
          <path id="Path_18784" data-name="Path 18784" d="M1020.938,582.789,1019,584.679h1.166l1.94-1.877Z" transform="translate(-937.198 -537.109)" fill="#53bfea"/>
          <path id="Path_18785" data-name="Path 18785" d="M1035.516,582.789l-1.935,1.891h.632l1.94-1.877Z" transform="translate(-950.273 -537.109)" fill="#53bfea"/>
          <path id="Path_18786" data-name="Path 18786" d="M1160.147,581.795l-1.934,1.891h1.166l1.672-1.608-.177-.384Z" transform="translate(-1062.048 -536.127)" fill="#53bfea"/>
          <path id="Path_18787" data-name="Path 18787" d="M1174.017,589.541l-1.226,1.182,1.421.034Z" transform="translate(-1075.122 -543.165)" fill="#53bfea"/>
          <g id="Group_7625" data-name="Group 7625" transform="translate(47.709 46.407)">
            <path id="Path_18788" data-name="Path 18788" d="M690.269,589.838l-1.819.085.013,3.695,1.468.022,3.851-3.787Z" transform="translate(-688.45 -589.838)" fill="#53bfea"/>
            <path id="Path_18789" data-name="Path 18789" d="M709.932,589.838l-3.845,3.8h.632l3.851-3.787Z" transform="translate(-704.268 -589.838)" fill="#53bfea"/>
          </g>
          <g id="Group_7626" data-name="Group 7626" transform="translate(49.063 40.027)">
            <path id="Path_18790" data-name="Path 18790" d="M705.427,527.986l-3.845,3.883h6.507L711.94,528Z" transform="translate(-701.582 -527.986)" fill="#53bfea"/>
            <path id="Path_18791" data-name="Path 18791" d="M771.785,527.986l-3.845,3.883h.632L772.423,528Z" transform="translate(-761.095 -527.986)" fill="#53bfea"/>
          </g>
          <g id="Group_7627" data-name="Group 7627" transform="translate(47.722 27.436)">
            <path id="Path_18792" data-name="Path 18792" d="M688.58,405.924l.182,3.883h2.513l3.851-3.868Z" transform="translate(-688.58 -405.924)" fill="#53bfea"/>
            <path id="Path_18793" data-name="Path 18793" d="M725.823,405.924l-3.845,3.883h1.1l3.851-3.868Z" transform="translate(-718.533 -405.924)" fill="#53bfea"/>
          </g>
          <g id="Group_7628" data-name="Group 7628" transform="translate(49.544 21.176)">
            <path id="Path_18794" data-name="Path 18794" d="M710.09,345.236l-3.845,3.883h7.081l3.851-3.868Z" transform="translate(-706.245 -345.236)" fill="#53bfea"/>
            <path id="Path_18795" data-name="Path 18795" d="M786.012,345.236l-3.845,3.883h1.1l3.851-3.868Z" transform="translate(-774.336 -345.236)" fill="#53bfea"/>
          </g>
          <g id="Group_7629" data-name="Group 7629" transform="translate(54.113 8.607)">
            <path id="Path_18796" data-name="Path 18796" d="M754.377,223.379l-3.845,3.883h2.513l3.851-3.868Z" transform="translate(-750.532 -223.379)" fill="#53bfea"/>
            <path id="Path_18797" data-name="Path 18797" d="M786.012,223.379l-3.845,3.883h1.1l3.851-3.868Z" transform="translate(-778.904 -223.379)" fill="#53bfea"/>
          </g>
          <g id="Group_7630" data-name="Group 7630" transform="translate(47.774 14.993)">
            <path id="Path_18798" data-name="Path 18798" d="M689.08,285.363l0,3.824h2.41l3.851-3.817Z" transform="translate(-689.08 -285.356)" fill="#53bfea"/>
            <path id="Path_18799" data-name="Path 18799" d="M723.6,285.3l-3.845,3.831h1.1l3.851-3.817Z" transform="translate(-716.586 -285.295)" fill="#53bfea"/>
          </g>
          <g id="Group_7631" data-name="Group 7631" transform="translate(47.722 8.607)">
            <path id="Path_18800" data-name="Path 18800" d="M688.58,223.379l.069,3.883h2.925l3.851-3.868Z" transform="translate(-688.58 -223.379)" fill="#53bfea"/>
            <path id="Path_18801" data-name="Path 18801" d="M728.729,223.379l-3.845,3.883h1.1l3.851-3.868Z" transform="translate(-721.139 -223.379)" fill="#53bfea"/>
          </g>
          <g id="Group_7632" data-name="Group 7632" transform="translate(56.227 14.916)">
            <path id="Path_18802" data-name="Path 18802" d="M774.878,284.547l-3.845,3.883h6.661l1.849-1.867-.188-1.886Z" transform="translate(-771.033 -284.547)" fill="#53bfea"/>
            <path id="Path_18803" data-name="Path 18803" d="M843.967,311.3l-1.085,1.123h1.1l-.009-.009Z" transform="translate(-835.471 -308.543)" fill="#53bfea"/>
          </g>
          <g id="Group_7633" data-name="Group 7633" transform="translate(55.01 33.81)">
            <path id="Path_18804" data-name="Path 18804" d="M763.081,467.716l-3.845,3.8h6.828l2.811-2.747-.232-1.054Z" transform="translate(-759.235 -467.716)" fill="#53bfea"/>
            <path id="Path_18805" data-name="Path 18805" d="M831.069,482.11l-2.36,2.317h.632l1.8-1.737Z" transform="translate(-821.542 -480.625)" fill="#53bfea"/>
          </g>
          <g id="Group_7634" data-name="Group 7634" transform="translate(3.115 51.758)">
            <path id="Path_18806" data-name="Path 18806" d="M258.067,686.111l-1.791-.007-.143,1.9h1.94l1.94-1.877Z" transform="translate(-256.132 -681.526)" fill="#53bfea"/>
            <path id="Path_18807" data-name="Path 18807" d="M280.145,686.168l-1.935,1.891h.632l1.94-1.877Z" transform="translate(-275.933 -681.583)" fill="#53bfea"/>
            <path id="Path_18808" data-name="Path 18808" d="M283.238,641.719,281.3,643.61h3.876l1.94-1.877Z" transform="translate(-278.707 -641.719)" fill="#53bfea"/>
            <path id="Path_18809" data-name="Path 18809" d="M324.094,641.719l-1.935,1.891h.632l1.94-1.877Z" transform="translate(-315.349 -641.719)" fill="#53bfea"/>
          </g>
          <g id="Group_7635" data-name="Group 7635" transform="translate(8.923 51.758)">
            <path id="Path_18810" data-name="Path 18810" d="M314.371,686.168l-1.935,1.891h5.271l1.94-1.877Z" transform="translate(-312.437 -681.583)" fill="#53bfea"/>
            <path id="Path_18811" data-name="Path 18811" d="M368.746,686.168l-1.935,1.891h.632l1.94-1.877Z" transform="translate(-361.203 -681.583)" fill="#53bfea"/>
            <path id="Path_18812" data-name="Path 18812" d="M356.82,641.719l-1.935,1.891h5.426l1.94-1.877Z" transform="translate(-350.507 -641.719)" fill="#53bfea"/>
            <path id="Path_18813" data-name="Path 18813" d="M412.695,641.719l-1.935,1.891h.632l1.94-1.877Z" transform="translate(-400.618 -641.719)" fill="#53bfea"/>
          </g>
          <g id="Group_7636" data-name="Group 7636" transform="translate(24.847 51.711)">
            <path id="Path_18814" data-name="Path 18814" d="M468.753,686.168l-1.935,1.891h4.84l1.94-1.877Z" transform="translate(-466.818 -681.536)" fill="#53bfea"/>
            <path id="Path_18815" data-name="Path 18815" d="M518.948,686.168l-1.935,1.891h.632l1.94-1.877Z" transform="translate(-511.836 -681.536)" fill="#53bfea"/>
            <path id="Path_18816" data-name="Path 18816" d="M511.2,641.308l-1.935,1.891h4.995l1.771-1.708-.02-.23Z" transform="translate(-504.889 -641.261)" fill="#53bfea"/>
            <path id="Path_18817" data-name="Path 18817" d="M562.355,646.97l-1.393,1.349h.632l.752-.688Z" transform="translate(-551.251 -646.381)" fill="#53bfea"/>
          </g>
        </g>
        <g id="Group_7638" data-name="Group 7638" transform="translate(10.797 65.833)">
          <path id="Path_18818" data-name="Path 18818" d="M121.962,723.674h-.415v2.637l.415.026Z" transform="translate(-119.807 -714.861)" fill="#776a68"/>
          <path id="Path_18819" data-name="Path 18819" d="M125.869,723.674h-.415v2.663l.415-.026Z" transform="translate(-123.312 -714.861)" fill="#7f7675"/>
          <path id="Path_18820" data-name="Path 18820" d="M106.734,638.229l-2.058,9.483,2.149.7,1.966-.7Z" transform="translate(-104.677 -638.229)" fill="#74aa35"/>
          <path id="Path_18821" data-name="Path 18821" d="M106.734,638.229l-2.058,9.483,2.149.7Z" transform="translate(-104.677 -638.229)" fill="#5f932c"/>
        </g>
        <g id="Group_7639" data-name="Group 7639" transform="translate(130.895 65.077)">
          <path id="Path_18822" data-name="Path 18822" d="M1286.269,716.347h-.415v2.637l.415.026Z" transform="translate(-1284.115 -707.534)" fill="#776a68"/>
          <path id="Path_18823" data-name="Path 18823" d="M1290.177,716.347h-.414v2.663l.414-.026Z" transform="translate(-1287.619 -707.534)" fill="#7f7675"/>
          <path id="Path_18824" data-name="Path 18824" d="M1271.042,630.9l-2.058,9.483,2.149.7,1.966-.7Z" transform="translate(-1268.984 -630.902)" fill="#74aa35"/>
          <path id="Path_18825" data-name="Path 18825" d="M1271.042,630.9l-2.058,9.483,2.149.7Z" transform="translate(-1268.984 -630.902)" fill="#5f932c"/>
        </g>
        <g id="Group_7640" data-name="Group 7640" transform="translate(141.425 68.62)">
          <path id="Path_18826" data-name="Path 18826" d="M1383.2,725.238h-.291v1.851l.291.018Z" transform="translate(-1381.685 -719.05)" fill="#776a68"/>
          <path id="Path_18827" data-name="Path 18827" d="M1385.941,725.238h-.291v1.87l.291-.018Z" transform="translate(-1384.145 -719.05)" fill="#7f7675"/>
          <path id="Path_18828" data-name="Path 18828" d="M1372.506,665.248l-1.444,6.658,1.509.489,1.38-.489Z" transform="translate(-1371.062 -665.248)" fill="#74aa35"/>
          <path id="Path_18829" data-name="Path 18829" d="M1372.506,665.248l-1.444,6.658,1.509.489Z" transform="translate(-1371.062 -665.248)" fill="#5f932c"/>
        </g>
        <g id="Group_7641" data-name="Group 7641" transform="translate(3.721 67.804)">
          <path id="Path_18830" data-name="Path 18830" d="M42.706,664.465a3.316,3.316,0,1,1-6.633,0c0-2.552,1.485-7.128,3.316-7.128S42.706,662.628,42.706,664.465Z" transform="translate(-36.073 -657.337)" fill="#558b2f"/>
          <path id="Path_18831" data-name="Path 18831" d="M71.541,664.465c0-2.355-1.485-7.128-3.316-7.128v10.454A3.321,3.321,0,0,0,71.541,664.465Z" transform="translate(-64.909 -657.337)" fill="#7ba42f"/>
          <path id="Path_18832" data-name="Path 18832" d="M63.877,726.533l-.2,6.805h.938l-.2-6.805Z" transform="translate(-60.829 -719.395)" fill="#776a68"/>
          <path id="Path_18833" data-name="Path 18833" d="M68.225,726.533v6.805h.469l-.2-6.805Z" transform="translate(-64.908 -719.395)" fill="#7f7675"/>
        </g>
        <g id="Group_7642" data-name="Group 7642" transform="translate(123.275 69.836)">
          <path id="Path_18834" data-name="Path 18834" d="M1200.854,683.205a2.873,2.873,0,1,1-5.745,0c0-2.21,1.286-6.174,2.873-6.174S1200.854,681.614,1200.854,683.205Z" transform="translate(-1195.109 -677.031)" fill="#558b2f"/>
          <path id="Path_18835" data-name="Path 18835" d="M1225.83,683.205c0-2.04-1.286-6.174-2.873-6.174v9.055A2.877,2.877,0,0,0,1225.83,683.205Z" transform="translate(-1220.084 -677.031)" fill="#7ba42f"/>
          <path id="Path_18836" data-name="Path 18836" d="M1219.191,736.964l-.174,5.894h.813l-.173-5.894Z" transform="translate(-1216.552 -730.782)" fill="#776a68"/>
          <path id="Path_18837" data-name="Path 18837" d="M1222.957,736.964v5.894h.406l-.173-5.894Z" transform="translate(-1220.085 -730.782)" fill="#7f7675"/>
        </g>
        <g id="Group_7643" data-name="Group 7643" transform="translate(21.794 68.616)">
          <path id="Path_18838" data-name="Path 18838" d="M217.548,671.943a3.133,3.133,0,1,1-6.266,0c0-2.411,1.4-6.734,3.133-6.734S217.548,670.208,217.548,671.943Z" transform="translate(-211.282 -665.209)" fill="#558b2f"/>
          <path id="Path_18839" data-name="Path 18839" d="M244.79,671.943c0-2.225-1.4-6.734-3.133-6.734v9.876A3.137,3.137,0,0,0,244.79,671.943Z" transform="translate(-238.524 -665.209)" fill="#7ba42f"/>
          <path id="Path_18840" data-name="Path 18840" d="M237.549,730.58l-.189,6.429h.886l-.189-6.429Z" transform="translate(-234.67 -723.837)" fill="#776a68"/>
          <path id="Path_18841" data-name="Path 18841" d="M241.657,730.58v6.429h.443l-.189-6.429Z" transform="translate(-238.523 -723.837)" fill="#7f7675"/>
        </g>
        <g id="Group_7644" data-name="Group 7644" transform="translate(136.357 67.483)">
          <path id="Path_18842" data-name="Path 18842" d="M1327.66,660.379a2.864,2.864,0,1,1-5.728,0c0-2.2,1.282-6.155,2.864-6.155S1327.66,658.793,1327.66,660.379Z" transform="translate(-1321.932 -654.224)" fill="#558b2f"/>
          <path id="Path_18843" data-name="Path 18843" d="M1352.559,660.379c0-2.034-1.282-6.155-2.864-6.155v9.027A2.868,2.868,0,0,0,1352.559,660.379Z" transform="translate(-1346.831 -654.224)" fill="#7ba42f"/>
          <path id="Path_18844" data-name="Path 18844" d="M1345.941,713.975l-.173,5.876h.81l-.173-5.876Z" transform="translate(-1343.309 -707.811)" fill="#776a68"/>
          <path id="Path_18845" data-name="Path 18845" d="M1349.7,713.975v5.876h.405l-.173-5.876Z" transform="translate(-1346.832 -707.811)" fill="#7f7675"/>
        </g>
        <g id="Group_7645" data-name="Group 7645" transform="translate(28.877 70.957)">
          <path id="Path_18846" data-name="Path 18846" d="M298.9,740.591l-.321,5.369.321.027Z" transform="translate(-296.658 -735.157)" fill="#776a68"/>
          <path id="Path_18847" data-name="Path 18847" d="M301.609,740.591v5.4l.321-.027Z" transform="translate(-299.375 -735.157)" fill="#7f7675"/>
          <path id="Path_18848" data-name="Path 18848" d="M304.066,694.161a2.259,2.259,0,0,1-2.259,2.259H301.8v-8.514h.005c.3,0,.836,1.148,1.306,2.481l-1.028.589,1.2-.1A14.6,14.6,0,0,1,304.066,694.161Z" transform="translate(-299.549 -687.906)" fill="#74aa35"/>
          <path id="Path_18849" data-name="Path 18849" d="M282.208,687.906v8.514a2.259,2.259,0,0,1-2.254-2.259,5.226,5.226,0,0,1,.139-.972l1.309.045-1.215-.455C280.659,690.85,281.719,687.927,282.208,687.906Z" transform="translate(-279.955 -687.906)" fill="#5f932c"/>
        </g>
        <g id="Group_7646" data-name="Group 7646" transform="translate(56.744 66.775)">
          <path id="Path_18850" data-name="Path 18850" d="M576.381,720.4l-.446,7.444.446,0Z" transform="translate(-573.272 -712.866)" fill="#776a68"/>
          <path id="Path_18851" data-name="Path 18851" d="M580.136,720.4v7.439l.446,0Z" transform="translate(-577.039 -712.866)" fill="#7f7675"/>
          <path id="Path_18852" data-name="Path 18852" d="M583.543,656.031a3.132,3.132,0,0,1-3.132,3.132H580.4v-11.8h.007c.423,0,1.159,1.592,1.811,3.44l-1.425.816,1.658-.134A20.232,20.232,0,0,1,583.543,656.031Z" transform="translate(-577.28 -647.359)" fill="#74aa35"/>
          <path id="Path_18853" data-name="Path 18853" d="M553.239,647.359v11.8a3.131,3.131,0,0,1-3.124-3.132,7.251,7.251,0,0,1,.193-1.348l1.815.063-1.685-.631C551.091,651.441,552.56,647.388,553.239,647.359Z" transform="translate(-550.115 -647.359)" fill="#5f932c"/>
        </g>
        <path id="Path_18854" data-name="Path 18854" d="M253.942,784.932a1.111,1.111,0,0,0-2.173,0Z" transform="translate(-225.799 -703.177)" fill="#74aa35"/>
        <path id="Path_18855" data-name="Path 18855" d="M128.838,750.044a1.111,1.111,0,0,0-2.173,0Z" transform="translate(-113.6 -671.888)" fill="#e3ea54"/>
        <path id="Path_18856" data-name="Path 18856" d="M149.682,735.581a1.111,1.111,0,0,0-2.173,0Z" transform="translate(-132.293 -658.917)" fill="#8eb259"/>
        <path id="Path_18857" data-name="Path 18857" d="M167.387,735.581a1.111,1.111,0,0,0-2.173,0Z" transform="translate(-148.172 -658.917)" fill="#8eb259"/>
        <path id="Path_18858" data-name="Path 18858" d="M1296.967,755.1a1.111,1.111,0,0,0-2.173,0Z" transform="translate(-1161.236 -676.421)" fill="#e3ea54"/>
        <path id="Path_18859" data-name="Path 18859" d="M1377.367,750.044a1.111,1.111,0,0,0-2.173,0Z" transform="translate(-1233.342 -671.888)" fill="#e3ea54"/>
        <path id="Path_18860" data-name="Path 18860" d="M81.862,783.752a1.11,1.11,0,0,1,1.01.65.782.782,0,0,1,1.442.23H80.775A1.111,1.111,0,0,1,81.862,783.752Z" transform="translate(-72.443 -702.908)" fill="#558b2f"/>
        <path id="Path_18861" data-name="Path 18861" d="M947.295,783.952a1.11,1.11,0,0,1,1.01.65.782.782,0,0,1,1.442.23h-3.538A1.111,1.111,0,0,1,947.295,783.952Z" transform="translate(-848.607 -703.088)" fill="#5f932c"/>
        <path id="Path_18862" data-name="Path 18862" d="M462.542,784.008a.782.782,0,0,0-.676.39,1.109,1.109,0,0,0-1.755-.361.944.944,0,0,0-.5-.153.955.955,0,0,0-.924.742h4.625A.831.831,0,0,0,462.542,784.008Z" transform="translate(-411.369 -702.906)" fill="#5f932c"/>
        <path id="Path_18863" data-name="Path 18863" d="M1252.921,782.952a1.11,1.11,0,0,1,1.01.65.782.782,0,0,1,1.442.23h-3.538A1.111,1.111,0,0,1,1252.921,782.952Z" transform="translate(-1122.708 -702.191)" fill="#558b2f"/>
        <path id="Path_18864" data-name="Path 18864" d="M1350.583,783.743a1.11,1.11,0,0,1,1.01.65.782.782,0,0,1,1.442.23H1349.5A1.111,1.111,0,0,1,1350.583,783.743Z" transform="translate(-1210.297 -702.9)" fill="#b6c127"/>
        <path id="Path_18865" data-name="Path 18865" d="M164.065,773.353a1.041,1.041,0,0,1,1.76-.455,1.388,1.388,0,0,1,2.141-.748,1.736,1.736,0,0,1,3.223,1.241Z" transform="translate(-147.142 -691.659)" fill="#5f932c"/>
        <g id="Group_7647" data-name="Group 7647" transform="translate(70.743 99.297)">
          <path id="Path_18866" data-name="Path 18866" d="M690.518,963.629h-4.2a.49.49,0,0,1-.49-.49h0a.49.49,0,0,1,.49-.49h4.2a.49.49,0,0,1,.49.49h0A.49.49,0,0,1,690.518,963.629Z" transform="translate(-685.827 -962.649)" fill="#4e4f4f" opacity="0.28"/>
          <path id="Path_18867" data-name="Path 18867" d="M744.3,963.629h-.5a.49.49,0,0,1-.49-.49h0a.49.49,0,0,1,.49-.49h.5a.49.49,0,0,1,.49.49h0A.49.49,0,0,1,744.3,963.629Z" transform="translate(-737.377 -962.649)" fill="#4e4f4f" opacity="0.28"/>
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


export default Hospital_pf_avatar;