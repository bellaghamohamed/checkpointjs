function myFunction() {
    var bol=document.getElementById("mytext");
    if (bol.style.fontWeight=="bold") {
        bol.style.fontWeight="normal";
      } else {
        bol.style.fontWeight="bold";
      }
    
  }
  function itfunction() {
    var ita=document.getElementById("mytext");
    if (ita.style.fontstyle=="italic") {
        ita.style.fontstyle="normal";
      } else {
        ita.style.fontStyle="italic";
      }
    
  }
  function underfunction() {
    var under=document.getElementById("mytext");
    if (under.style.textDecoration=="underline") {
        under.style.textDecoration="none";
      } else {
        under.style.textDecoration="underline";
      }
    
  }
//var e = document.getElementById("values");
//var struser = e.options[e.selectedIndex].text;
function sizeoption(){
  document.getElementById("mytext").style.fontSize=document.getElementById("lotfi").value;
  console.log( getElementById("lotfi".value));
}
function texted(){
  document.getElementById("mytext").style.fontFamily=document.getElementById("text").value;
}