// JavaScript Document
var defaultCSS= document.getElementById("styles");// stylesheet wale link tag ko 'styles' ki ID do,aur class "unchanged" rakho
var btn= document.getElementById('btn');
var circle= document.getElementById('circle')
function toggleCSS(){
if(defaultCSS.className == "unchanged"){
	defaultCSS.setAttribute("href","style/alternate.css");//Switch-2.css ki jaga apni dusri CSS file ka link do..
	defaultCSS.setAttribute("class","changed");
	btn.setAttribute('class','container-switch-clicked');
	circle.setAttribute('class', 'switch-circle-clicked');
  }
else if (defaultCSS.className == "changed"){
	defaultCSS.setAttribute("href","style/css.css");//Switch.css ki jaga orignal CSS file ka link do..
	defaultCSS.setAttribute('class','unchanged');
    btn.setAttribute('class','container-switch-unclicked');
	circle.setAttribute('class', 'switch-circle')
  }
else{
	alert('You Dont Have The Authority To Edit It :D...')
  }
}   