/* change the text of a body when clicked*/
function changeText(text) {

  if(text.style.fontFamily =="")
		{
	
		text.style.fontSize="medium";
	
		text.style.fontFamily="Berlin Sans FB,sans-serif";
		
		}
	    else
		{
		text.style.fontFamily="";
		text.style.fontSize="";

		}

}


/*shows today's date*/
function ShowDate()
{
			let TheDate= new Date();
			document.getElementById("Date").innerHTML=TheDate.toDateString();


}

/*set an interval for a blinking text*/
  setInterval(() => {
    const el = document.getElementById("blinkingText");
    el.style.visibility = (el.style.visibility === "hidden") ? "visible" : "hidden";
  }, 1500);







