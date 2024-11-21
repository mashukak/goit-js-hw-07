const form = document.querySelectorAll(".js-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    const elements = event.target.elements;

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

