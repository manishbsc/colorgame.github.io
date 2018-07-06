
var size=6; 
var color=generaterandomcolor(size);
var pickedcolor=pickcolor();
var square=document.querySelectorAll(".square");
var h1=document.querySelector("h1");                // why other things are not working
var displaycolor=document.getElementById("displaycolor");
var message=document.getElementById("message");
var mode=document.querySelectorAll(".mode");
var newcolor=document.querySelector("#newcolor");

init();

function init(){
	setupmodebutton();
	setupsquare();
	reset();
}

function setupmodebutton(){
  for (var i = 0;i<mode.length; i++) {
  	mode[i].addEventListener("click",function(){
    mode[0].classList.remove("selected");
    mode[1].classList.remove("selected");
    this.classList.add("selected");

    this.textContent===	"EASY"?size=3:size=6;
     reset();
  	});
  }
}

newcolor.addEventListener("click",function(){
	reset()});

function reset(){
	//genrate color
	color=generaterandomcolor(size);
	newcolor.textContent="NEW COLOR"; 
	message.textContent="";
	//pick one color
	pickedcolor=pickcolor();
	// display text
    displaycolor.textContent=pickedcolor;

	for (var i = 0; i<square.length; i++) {
		if(color[i]){
			square[i].style.display="block";
		    square[i].style.backgroundColor=color[i];
	     }
	     else{
              square[i].style.display="none";
	     }
	}

	h1.style.backgroundColor= "steelblue";
          
}

function setupsquare(){
  //setting colors to 6 boxes
 for (var i=0; i<square.length; i++) {
 	square[i].style.backgroundColor=color[i];
    //on click checking for correct
 	square[i].addEventListener("click",function(){
 	var clickedcolor=this.style.backgroundColor;	
 	//true 
 	if (clickedcolor===pickedcolor) {
 		message.textContent="correct";
 		changecolor(clickedcolor);
 		h1.style.backgroundColor=clickedcolor;
 		newcolor.textContent="PLAY AGAIN";
 	}
 	//false
 	else{
 		this.style.backgroundColor="#232323";
 		message.textContent="incorrect";
 	}
 });
 }
 }

 // if correct then make all sqaure of correct color
  function changecolor(color){
 for (var i=0; i<square.length; i++) {
  square[i].style.backgroundColor=color;
 }
}
// pick 1 color  out of 6 color
function pickcolor() {
	var random=Math.floor(Math.random()*color.length);
	 return color[random];
	// body...
}
// generate random color
function generaterandomcolor(num) {
	// array
	var arr=[];
	// repeat n times
	for(var i=0;i<num;i++){
		//get array
		arr.push(randomcolor())
	}
 // return array
 return arr;
}

function randomcolor() {
	// body...
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);
	return "rgb("+r+", "+g+", "+b+")";
}







