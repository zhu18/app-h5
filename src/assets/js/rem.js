
//页面加载时调用
window.onload = function(){
    /*720代表设计师给的设计稿的宽度，你的设计稿是多少，就写多少;100代表换算比例，这里写100是
      为了以后好算,比如，你测量的一个宽度是100px,就可以写为1rem,以及1px=0.01rem等等*/
    getRem(750,100)
};
//页面大小变化时调用
window.onresize = function(){
    getRem(750,100)
};

/***
 * 根据页面大小设置字体大小（用于移动端H5页面）
 * @memberof util
 * @author 胡杰 
 * @param [number] pwidth 设计师给的设计稿的宽度
 * @param [number] prem 计算比例（一般用100，方便计算）
 * @example util.getRem(750,100)
 */
function getRem(pwidth,prem) {
  var html = document.getElementsByTagName("html")[0];
  var oWidth = document.body.clientWidth || document.documentElement.clientWidth;
  html.style.fontSize = oWidth / pwidth * prem + "px";
}
