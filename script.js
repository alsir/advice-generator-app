fetch("https://api.adviceslip.com/advice").then((response)=>{
	  return response.json();  // converting byte data to json
}).then(data => {
	$("span").html(data.slip.id);
	$("h2").html(data.slip.advice);
});
$("button").click(
	function () {
fetch("https://api.adviceslip.com/advice").then((response)=>{
	  return response.json();  // converting byte data to json
}).then(data => {
	$("span").html(data.slip.id);
	$("h2").html(data.slip.advice);
});
});

