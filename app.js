let names = document.querySelectorAll("#namesList li");

for (let i = 0; i < names.length; i++) {
  let name = names[i].textContent;

  if (name.charAt(0) === "J" || name.charAt(0) === "j") {
    console.log("Goodbye " + name);
  } else {
    console.log("Hello " + name);
  }
}
