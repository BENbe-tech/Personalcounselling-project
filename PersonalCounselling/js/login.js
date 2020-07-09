const inputs = document.querySelectorAll(".input");

function validateForm() {

    var password = document.getElementById("password").value;


    if(password == null || password == "" ){
        alert("pasword must be filled");
           return false;
    }
   
   
    if(password.length < 6){
       alert("atleast 6 characters required");
       return false;
   }
   else{
       return true;
   }


}

function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}


inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
})