let setHtmlFontSize = () => {
    const htmlDom = document.querySelector('html');
    let htmlWid = document.documentElement.clientWidth || document.body.clientWidth;
    htmlDom.style.fontSize = 100*htmlWid/375 + 'px';
}
window.onresize = setHtmlFontSize;
setHtmlFontSize();