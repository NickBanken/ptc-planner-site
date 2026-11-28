function e(e,t=`,`){let n=[],r=``,i=[],a=!1;for(let o=0;o<e.length;o++){let s=e[o],c=e[o+1];s===`"`?a&&c===`"`?(r+=`"`,o++):a=!a:s===t&&!a?(i.push(r),r=``):(s===`
`||s===`\r`)&&!a?(s===`\r`&&c===`
`&&o++,i.push(r),n.push(i),i=[],r=``):r+=s}return(r!==``||i.length>0)&&(i.push(r),n.push(i)),n}function t(e){let t=e.replace(/\r?\n/g,`\r
`);return/[",\r\n]/.test(t)?`"${t.replaceAll(`"`,`""`)}"`:t}function n(e){return`﻿${e.map(e=>e.map(t).join(`,`)).join(`\r
`)}\r\n`}export{n,e as t};