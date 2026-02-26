console.log(window);
// console.log("bhagg");
// window.console.log("huggg");

console.log(document);
// console.log(document.body);
// console.log(document.title);
// console.log(document.head);
// console.log(document.body.children);

//document object model 



console.log(document.querySelector("#title"));

console.log(document.querySelector(".para").innerText);

console.log(document.querySelector(".para").innerHTML);

console.log(document.querySelector(".para").textContent);



//changing content of element
//changing conetent of headding
let heading = document.querySelector("#title");
heading.innerHTML = "Welcome to DOM Manipulation = new title = Col panging";


