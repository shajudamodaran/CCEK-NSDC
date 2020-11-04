onload = function() 
{	

loadlevels();						
		
}




function loadlevels()
{
	document.getElementsByTagName("level_drop").length=0
	 var select = document.getElementById("level_drop");
	 
	
	 var ref2 = firebase.database().ref('Levels');
 
 ref2.on("value", function(snapshot) 
  {
   snapshot.forEach(userSnapshot => 
	  {
	   var C1 =userSnapshot.val().name;
	   
	    var el = document.createElement("option");
		el.textContent = C1;
		el.value = C1;
		select.appendChild(el);
	   
	    	
	   
	 
	  });
 
  }, 
function (error) 
{
   console.log("Error: " + error.code);
});
}

function callworks()
{
	var selected_level=document.getElementById("level_drop").value;
	console.log(selected_level);
	
	document.getElementsByTagName("work_drop").length=0
	 var select = document.getElementById("work_drop");
	 var ref2 = firebase.database().ref('Works');
 
 ref2.on("value", function(snapshot) 
  {
   snapshot.forEach(userSnapshot => 
	  {
	   var datas =userSnapshot.val().WORK;
	   console.log(datas+"::::::::::"+userSnapshot.key);
	   var C1 = datas.slice(0, 35);
	   
	    var el = document.createElement("option");
		el.textContent = C1+"....";
		el.value = datas;
		select.appendChild(el);
	  });
 
  }, 
function (error) 
{
   console.log("Error: " + error.code);
});
}

function alertnow()
{
	
}