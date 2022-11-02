const form = document.querySelector("form");
nField = form.querySelector(".firstname"),
nInput = nField.querySelector("input"),
lField = form.querySelector(".lastname"),
lInput = lField.querySelector("input"),
eField = form.querySelector(".email"),
eInput = eField.querySelector("input"),
pField = form.querySelector(".password"),
pInput = pField.querySelector("input");

form.onsubmit = (e)=>{
  e.preventDefault(); //preventing from form submitting
  //if email and password is blank then add shake class in it else call specified function
  (nInput.value == "") ? nField.classList.add("shake", "error") : checkFirstname();
  (lInput.value == "") ? lField.classList.add("shake", "error") : checkLastname();
  (eInput.value == "") ? eField.classList.add("shake", "error") : checkEmail();
  (pInput.value == "") ? pField.classList.add("shake", "error") : checkPass();

  setTimeout(()=>{ //remove shake class after 500ms
    nField.classList.remove("shake");
    lField.classList.remove("shake");
	eField.classList.remove("shake");
	pField.classList.remove("shake");
  }, 500);
  nInput.onkeyup = ()=>{checkFirstname();} //calling checkFirstname function on firstname input keyup
  lInput.onkeyup = ()=>{checkLastname();} //calling checkLastname function on lastname input keyup
  eInput.onkeyup = ()=>{checkEmail();} //calling checkEmail function on email input keyup
  pInput.onkeyup = ()=>{checkPass();} //calling checkPassword function on pass input keyup

  function checkEmail(){ //checkEmail function
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; //pattern for validate email
    if(!eInput.value.match(pattern)){ //if pattern not matched then add error and remove valid class
      eField.classList.add("error");
      eField.classList.remove("valid");
      let errorTxt = eField.querySelector(".error-txt");
      //if email value is not empty then show please enter valid email else show Email can't be blank
      (eInput.value != "") ? errorTxt.innerText = "Enter a valid email address" : errorTxt.innerText = "Email can't be blank";
    }else{ //if pattern matched then remove error and add valid class
      eField.classList.remove("error");
      eField.classList.add("valid");
    }
  }
	function checkFirstname (){ //checkFirstname function
	let pattern =/^[a-zA-Z ]*$/; //pattern for validate firstname
    if(!nInput.value.match(pattern)){ //if pattern not matched then add error and remove valid class
      nField.classList.add("error");
      nField.classList.remove("valid");
      let errorTxt = nField.querySelector(".error-txt");
      //if email value is not empty then show please enter valid firstname else show First Name can't be blank
      (nInput.value != "") ? errorTxt.innerText = "First name cannot contain special characters and numbers" : errorTxt.innerText = "First Name can't be blank";
    }else{ //if pattern matched then remove error and add valid class 
      nField.classList.remove("error");
      nField.classList.add("valid");
    }
	}
	function checkLastname (){ //checkLastname function
	let pattern = /^[a-zA-Z ]*$/; //pattern for validate lastname
    if(!lInput.value.match(pattern)){ //if pattern not matched then add error and remove valid class
      lField.classList.add("error");
      lField.classList.remove("valid");
      let errorTxt = lField.querySelector(".error-txt");
      //if email value is not empty then show please enter valid lastname else show Last Name can't be blank
      (lInput.value != "") ? errorTxt.innerText = "Last name cannot contain special characters and numbers" : errorTxt.innerText = "Last Name can't be blank";
    }else{ //if pattern matched then remove error and add valid class
      lField.classList.remove("error");
      lField.classList.add("valid");
    }
	}
  function checkPass(){ //checkPass function
    if(pInput.value == ""){ //if pass is empty then add error and remove valid class
      pField.classList.add("error");
      pField.classList.remove("valid");
    }else{ //if pass is empty then remove error and add valid class
      pField.classList.remove("error");
      pField.classList.add("valid");
    }
  }

  //if eField and pField doesn't contains error class that mean user filled details properly
  if(!eField.classList.contains("error") && !pField.classList.contains("error")){
    window.location.href = form.getAttribute("action"); //redirecting user to the specified url which is inside action attribute of form tag
  }
}
