 <!-- Below, the W3Schools' (W3 Schools (2022)How TO - Overlay, How To Create an Overlay Effect. Available at:https://www.w3schools.com/howto/howto_css_overlay.asp (Accessed: April 28, 2022)) was utilised, the below javascript sourced directly from W3schools.-->

function on() {
  document.getElementById("TextBox").style.display = "block";
}<!--here, if the function notices an activation of the already monitored asset with the "on()" attribute, it will find the 'TextBox' asset and set it's style to be block, from a prior state of none, making it visible-->

function off() {
  document.getElementById("TextBox").style.display = "none";
};;

<!--comparatively, the "function off()" inverts this, making the prior visibile element invisible.-->
function on1() {
  document.getElementById("TextBox1").style.display = "block";
}

function off1() {
  document.getElementById("TextBox1").style.display = "none";
};;




function on2() {
  document.getElementById("TextBox2").style.display = "block";
}

function off2() {
  document.getElementById("TextBox2").style.display = "none";
};;
<!--this is then repeated a number of times for a variety of text boxes-->



<!--next was the frame by frame Javascript animation, utilisign the individually exported .SVG frames-->
let HomePageImages = [
 <!--Here, the Let Array is then utilised, allowing for a variable to be declreaded within this block expression, the following code both sourced from and learnt from "bhawnaatrish (2021) How to create Frame by Frame Animation using CSS and JavaScript ?. Available at: https://www.geeksforgeeks.org/how-to-create-frame-by-frame-animation-using-css-and-javascript/?ref=rp#:~:text=We%20can%20use%20the%20JavaScript,interval%20gaps%20in%20between%20them. (Accessed: April 25 2022)"-->
"Images/HeaderAnimations/WomanWaveAnim/womanwave0001.svg",
"Images/HeaderAnimations/WomanWaveAnim/womanwave0002.svg",
"Images/HeaderAnimations/WomanWaveAnim/womanwave0003.svg",
"Images/HeaderAnimations/WomanWaveAnim/womanwave0004.svg",
"Images/HeaderAnimations/WomanWaveAnim/womanwave0005.svg",
"Images/HeaderAnimations/WomanWaveAnim/womanwave0006.svg",
"Images/HeaderAnimations/WomanWaveAnim/womanwave0007.svg",
"Images/HeaderAnimations/WomanWaveAnim/womanwave0008.svg",
"Images/HeaderAnimations/WomanWaveAnim/womanwave0009.svg",
  <!--originally, a 'var' array was present, but this was echnaged for the let attribute.-->

"Images/HeaderAnimations/WomanWaveAnim/womanwave0010.svg",
"Images/HeaderAnimations/WomanWaveAnim/womanwave0011.svg",
"Images/HeaderAnimations/WomanWaveAnim/womanwave0011.svg",
"Images/HeaderAnimations/WomanWaveAnim/womanwave0012.svg",
"Images/HeaderAnimations/WomanWaveAnim/womanwave0013.svg",
"Images/HeaderAnimations/WomanWaveAnim/womanwave0014.svg",
"Images/HeaderAnimations/WomanWaveAnim/womanwave0015.svg",
"Images/HeaderAnimations/WomanWaveAnim/womanwave0016.svg",
"Images/HeaderAnimations/WomanWaveAnim/womanwave0017.svg",
"Images/HeaderAnimations/WomanWaveAnim/womanwave0018.svg",
"Images/HeaderAnimations/WomanWaveAnim/womanwave0019.svg",

"Images/HeaderAnimations/WomanWaveAnim/womanwave0020.svg",
"Images/HeaderAnimations/WomanWaveAnim/womanwave0021.svg",
"Images/HeaderAnimations/WomanWaveAnim/womanwave0022.svg",
"Images/HeaderAnimations/WomanWaveAnim/womanwave0023.svg",
"Images/HeaderAnimations/WomanWaveAnim/womanwave0024.svg",
"Images/HeaderAnimations/WomanWaveAnim/womanwave0025.svg",
"Images/HeaderAnimations/WomanWaveAnim/womanwave0026.svg",
"Images/HeaderAnimations/WomanWaveAnim/womanwave0027.svg",
"Images/HeaderAnimations/WomanWaveAnim/womanwave0028.svg",
"Images/HeaderAnimations/WomanWaveAnim/womanwave0029.svg",

"Images/HeaderAnimations/WomanWaveAnim/womanwave0030.svg",
"Images/HeaderAnimations/WomanWaveAnim/womanwave0031.svg",
"Images/HeaderAnimations/WomanWaveAnim/womanwave0032.svg",
"Images/HeaderAnimations/WomanWaveAnim/womanwave0033.svg",
"Images/HeaderAnimations/WomanWaveAnim/womanwave0034.svg",
"Images/HeaderAnimations/WomanWaveAnim/womanwave0035.svg",
"Images/HeaderAnimations/WomanWaveAnim/womanwave0036.svg",
"Images/HeaderAnimations/WomanWaveAnim/womanwave0037.svg",
"Images/HeaderAnimations/WomanWaveAnim/womanwave0038.svg",
"Images/HeaderAnimations/WomanWaveAnim/womanwave0039.svg",

"Images/HeaderAnimations/WomanWaveAnim/womanwave0040.svg",
"Images/HeaderAnimations/WomanWaveAnim/womanwave0041.svg",
"Images/HeaderAnimations/WomanWaveAnim/womanwave0042.svg",
"Images/HeaderAnimations/WomanWaveAnim/womanwave0043.svg",
"Images/HeaderAnimations/WomanWaveAnim/womanwave0044.svg",
"Images/HeaderAnimations/WomanWaveAnim/womanwave0045.svg",
"Images/HeaderAnimations/WomanWaveAnim/womanwave0046.svg",
"Images/HeaderAnimations/WomanWaveAnim/womanwave0047.svg",
"Images/HeaderAnimations/WomanWaveAnim/womanwave0048.svg",
"Images/HeaderAnimations/WomanWaveAnim/womanwave0049.svg",

"Images/HeaderAnimations/WomanWaveAnim/womanwave0050.svg",
"Images/HeaderAnimations/WomanWaveAnim/womanwave0051.svg",
"Images/HeaderAnimations/WomanWaveAnim/womanwave0052.svg",
"Images/HeaderAnimations/WomanWaveAnim/womanwave0053.svg",
"Images/HeaderAnimations/WomanWaveAnim/womanwave0054.svg",
"Images/HeaderAnimations/WomanWaveAnim/womanwave0055.svg",
"Images/HeaderAnimations/WomanWaveAnim/womanwave0056.svg",
"Images/HeaderAnimations/WomanWaveAnim/womanwave0057.svg",
"Images/HeaderAnimations/WomanWaveAnim/womanwave0058.svg",
"Images/HeaderAnimations/WomanWaveAnim/womanwave0059.svg",

"Images/HeaderAnimations/WomanWaveAnim/womanwave0050.svg",
"Images/HeaderAnimations/WomanWaveAnim/womanwave0051.svg",
"Images/HeaderAnimations/WomanWaveAnim/womanwave0052.svg",
"Images/HeaderAnimations/WomanWaveAnim/womanwave0053.svg",
"Images/HeaderAnimations/WomanWaveAnim/womanwave0054.svg",
"Images/HeaderAnimations/WomanWaveAnim/womanwave0055.svg",
"Images/HeaderAnimations/WomanWaveAnim/womanwave0056.svg",
"Images/HeaderAnimations/WomanWaveAnim/womanwave0057.svg",
"Images/HeaderAnimations/WomanWaveAnim/womanwave0058.svg",
"Images/HeaderAnimations/WomanWaveAnim/womanwave0059.svg",

"Images/HeaderAnimations/WomanWaveAnim/womanwave0060.svg",
"Images/HeaderAnimations/WomanWaveAnim/womanwave0061.svg",
"Images/HeaderAnimations/WomanWaveAnim/womanwave0062.svg",
"Images/HeaderAnimations/WomanWaveAnim/womanwave0063.svg",
"Images/HeaderAnimations/WomanWaveAnim/womanwave0064.svg",
"Images/HeaderAnimations/WomanWaveAnim/womanwave0065.svg",
"Images/HeaderAnimations/WomanWaveAnim/womanwave0066.svg",
"Images/HeaderAnimations/WomanWaveAnim/womanwave0067.svg",
"Images/HeaderAnimations/WomanWaveAnim/womanwave0068.svg",
"Images/HeaderAnimations/WomanWaveAnim/womanwave0069.svg",

"Images/HeaderAnimations/WomanWaveAnim/womanwave0070.svg",
"Images/HeaderAnimations/WomanWaveAnim/womanwave0071.svg",
"Images/HeaderAnimations/WomanWaveAnim/womanwave0072.svg",
"Images/HeaderAnimations/WomanWaveAnim/womanwave0073.svg",
"Images/HeaderAnimations/WomanWaveAnim/womanwave0074.svg",
"Images/HeaderAnimations/WomanWaveAnim/womanwave0075.svg",
"Images/HeaderAnimations/WomanWaveAnim/womanwave0076.svg",
"Images/HeaderAnimations/WomanWaveAnim/womanwave0077.svg",
"Images/HeaderAnimations/WomanWaveAnim/womanwave0078.svg",
"Images/HeaderAnimations/WomanWaveAnim/womanwave0079.svg",

"Images/HeaderAnimations/WomanWaveAnim/womanwave0080.svg",
"Images/HeaderAnimations/WomanWaveAnim/womanwave0081.svg",
"Images/HeaderAnimations/WomanWaveAnim/womanwave0082.svg",
"Images/HeaderAnimations/WomanWaveAnim/womanwave0083.svg",
"Images/HeaderAnimations/WomanWaveAnim/womanwave0084.svg",
"Images/HeaderAnimations/WomanWaveAnim/womanwave0085.svg",
"Images/HeaderAnimations/WomanWaveAnim/womanwave0086.svg",
"Images/HeaderAnimations/WomanWaveAnim/womanwave0087.svg",
"Images/HeaderAnimations/WomanWaveAnim/womanwave0088.svg",
"Images/HeaderAnimations/WomanWaveAnim/womanwave0089.svg",
"Images/HeaderAnimations/WomanWaveAnim/womanwave0090.svg",
];

setInterval("Animate()", 24);
<!--interval determines the frame rate of the individual exported shots-->
let x = 0;
<!--the "function Animate()" then animated the selected frames, utilising the ''-->
function Animate() {
  document.getElementById("img").src = HomePageImages[x]
  <!-- this then retrieves the indicated element ("img"), and assigns its source as the animation, allowing for the frmae by frame SVG animation to be utilised-->
  x++;
  if (HomePageImages.length == x) {
      x = 0}};
<!--Finally, the 'if' element is inserted, establishing that the end of an array has been reached if the length is equal to zero-->
