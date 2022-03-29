fetch("https://api.adviceslip.com/advice").then((response)=>{
	  return response.json();  // converting byte data to json
}).then(data => {
	$("p").append(data.slip.id);
	$("h2").html(data.slip.advice);
});
$("button").click(
	function () {
fetch("https://api.adviceslip.com/advice").then((response)=>{
	  return response.json();  // converting byte data to json
}).then(data => {
	$("p").append(data.slip.id);
	$("h2").html(data.slip.advice);
});
});

