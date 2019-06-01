/*for competence progress bar*/
function f1()
{

var el = document.querySelectorAll(".progressing");
/*var el2 = document.getElementsByClassName("progressing")[1];
var el3 = document.getElementsByClassName("progressing")[2];
var el4 = document.getElementsByClassName("progressing")[3];
var el5 = document.getElementsByClassName("progressing")[4];
var el6 = document.getElementsByClassName("progressing")[5];
var el7 = document.getElementsByClassName("progressing")[6];
var el8 = document.getElementsByClassName("progressing")[7];
var el9 = document.getElementsByClassName("progressing")[8];
var el10 = document.getElementsByClassName("progressing")[9];
*/
var width=0;
var id = setInterval(f, 50);

	
	function f(){
		if(width>=80){
		clearInterval(id);
		}
		else{
		width=width+3;
		
		el[0].style.width=width +'%';						
		el[1].style.width=width +'%';
		el[2].style.width=(width-6) +'%';
		el[3].style.width=(width-6) +'%';
		el[4].style.width=(width-6) +'%';
		el[5].style.width=(width-8) +'%';
		el[6].style.width=(width-40)+'%';
		el[7].style.width=(width-50) +'%';
		
		/* second method
		el2.style.width=width +'%';
		el3.style.width=(width-6) +'%';
		el4.style.width=(width-6) +'%';
		el5.style.width=(width-6) +'%';
		el6.style.width=(width-8) +'%';
		el7.style.width=(width-40)+'%';
		el8.style.width=(width-50) +'%';*/

		}

	}

}

if(screen.width<490){
	const x = document.getElementsByClassName("skill")[5];
	const y = document.getElementsByClassName("skill")[6];
	const z = document.getElementsByClassName("skill")[7];
	
	 x.innerHTML = "BT"; 
	 y.innerHTML = "React";
	 z.innerHTML = "Sy";	 
}

if(screen.width<=360){
	let a =document.querySelectorAll(".skill,.level");

	for(let i=0; i<a.length; i++){

    a[i].style.paddingTop="0px";
    a[7].style.paddingRight="10px";
    
}	
}
var a = window.matchMedia("(min-width: 768px) and (max-width: 992px)");	
/*let tel=document.getElementById("tel");*/
document.getElementById('tel').addEventListener('click', function() {
	
	if(tel.innerHTML == "Tel.Mob"){
		if (a.matches){
			email.style.marginTop = "15px";
		}
		tel.style.transition = "0.5s"; 
		tel.style.transform = "rotateX(360deg)"; 
		tel.innerHTML = "06.95.42.93.94";
		

	}
	else if(tel.innerHTML == "06.95.42.93.94"){
		tel.style.transition = "0.5s"; 
		tel.style.transform = "rotateX(-360deg)"; 
		tel.innerHTML = "Tel.Mob";	
	}	
});

/*tel.onclick=function(){
	if(tel.innerHTML == "Tel.Mob"){
		tel.style.transition = "0.5s"; 
		tel.style.transform = "rotateX(360deg)"; 
		tel.innerHTML = "06.95.42.93.94";
	}
	else if(tel.innerHTML == "06.95.42.93.94"){
		tel.style.transition = "0.5s"; 
		tel.style.transform = "rotateX(-360deg)"; 
		tel.innerHTML = "Tel.Mob";
	}
} */

document.getElementById('email').addEventListener('click', function() { 
	var x = window.matchMedia("(min-width: 768px)");
	if(email.innerHTML == "Email"){
	
		if (x.matches){
		document.createElement ("br");
		email.style.marginTop = "15px";
		}
		email.style.transition = "0.5s"; 
		email.style.transform = "rotateX(360deg)"; 
		email.innerHTML = "ria.thas20@gmail.com";	
		}
	else if(email.innerHTML == "ria.thas20@gmail.com")
	{
	if (a.matches){
		if(tel.innerHTML == "Tel.Mob"){
		document.createElement ("br");
		email.style.marginTop = "0px";
		}
		else
		{
		email.style.marginTop = "15px";
		}
		}
	else{
		email.style.marginTop = "0px";
	}		
	email.style.transition = "0.5s"; 
	email.style.transform = "rotateX(-360deg)"; 
	email.innerHTML = "Email";
	}
});
