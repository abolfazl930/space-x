import { createGlobalStyle } from "styled-components";

import DDinEot from "../assets/fonts/D-DIN.eot";
import DDinEot2 from "../assets/fonts/D-DIN.eot";
import DDinWoff2 from "../assets/fonts/D-DIN.woff2";
import DDinWoff from "../assets/fonts/D-DIN.woff";
import DDinTtf from "../assets/fonts/D-DIN.ttf";
import DDinSvg from "../assets/fonts/D-DIN.svg";

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: "D-DIN";
  src: url(${DDinEot});
  src: url(${DDinEot2}) format("embedded-opentype"),
    url(${DDinWoff2}) format("woff2"),
    url(${DDinWoff}) format("woff"),
    url(${DDinTtf}) format("truetype"),
    url(${DDinSvg}) format("svg");
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

body {
  margin: 0;
  font-family: "D-DIN" !important;
  background-color: #000 !important;
}

button{
  font-family: "D-DIN" !important;
}
a{
  text-decoration: none;
}
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  margin-bottom: 0;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1;
}
ol,
ul {
  list-style: none;
  margin-bottom: 0;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}

`;

export default GlobalStyle;
