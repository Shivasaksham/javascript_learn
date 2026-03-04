function ChangeColor(className) {
const li=document.querySelector(`.${className}`);
const prevcolor_icon=li.style["background-color"];
const prevcolor_body=document.body.style['backgroundColor'];
li.style['backgroundColor']=prevcolor_body
document.body.style['backgroundColor']=prevcolor_icon
}
