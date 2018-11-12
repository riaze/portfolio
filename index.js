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



  


