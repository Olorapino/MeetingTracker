concepts = 1;

counter = 0;
var counterFunction;

function start(){
	clearInterval(counterFunction);
	counterFunction = setInterval(doCount, 1000);
	document.getElementById("status").innerHTML = "and counting";

}

function stop(){
	
	clearInterval(counterFunction);
	document.getElementById("status").innerHTML = "so far";
}


function doCount(){

	counter = counter +1;	
	
	minutos = Math.floor(counter/60);
	segundos = counter-(minutos*60);

	if( minutos > 0 ){
		document.getElementById("counter").innerHTML = minutos + "'" +((segundos>9)?segundos:""+0+segundos)+"\"";
	}else{
		document.getElementById("counter").innerHTML = ((segundos>9)?segundos:""+0+segundos)+"\""; 
	}
	 
	 
	 people = document.getElementById("people").value; 
	 cost = document.getElementById("cost").value/60/60;
	 document.getElementById("totalCost").innerHTML = (counter*people*cost).toString().substring(0,4); 
	 
}

