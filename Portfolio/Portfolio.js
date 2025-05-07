var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

// document.querySelector(".contact-right").addEventListener("submit", function(e) {
//     e.preventDefault(); // prevent normal form submission

//     const form = this;

//     fetch(form.action, {
//       method: "POST",
//       body: new FormData(form),
//       headers: { 'Accept': 'application/json' }
//     }).then(response => {
//       if (response.ok) {
//         alert("Message sent!");
//         form.reset(); // clear form
//         setTimeout(() => window.location.reload(), 1000); // refresh after 1s
//       } else {
//         alert("Failed to send message.");
//       }
//     }).catch(error => {
//       console.error("Error:", error);
//       alert("Something went wrong.");
//     });
//   });

    