
const form = document.querySelector(".js-form");


form.addEventListener("submit", handleSubmit);


function handleSubmit(event) {
  event.preventDefault(); 

  
  const elements = event.target.elements;

  const email = elements.email?.value.trim();
  const password = elements.password?.value.trim();

  
  if (email && password) {
    
    const info = {
      email: email,
      password: password,
    };

    console.log(info); 
  } else {
    console.log("All form fields must be filled in");
  }
}
