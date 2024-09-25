const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";
container.appendChild(content);

const content2 = document.createElement("p");
content.classList.add("content2");
content2.textContent = "Hey I'm Red!";
container.appendChild(content2);
content2.style.color = "red";

const content3 = document.createElement("h3");
content.classList.add("content3");
content3.textContent = "Hey I'm blue H3!";
container.appendChild(content3);
content3.style.color = "blue";

const newdiv = document.createElement("div");
content.classList.add("newdiv");
newdiv.style.backgroundColor = "pink";
newdiv.style.border = "thick solid #000000";

const divh1 = document.createElement("h1");
content.classList.add("divh1");
divh1.textContent = "Hey I'm in a div!";
newdiv.appendChild(divh1);

const divp = document.createElement("p");
content.classList.add("divp");
divp.textContent = "Me Too!";
newdiv.appendChild(divp);

container.appendChild(newdiv);


const btn = document.querySelector("#btn");
btn.onclick = () => alert("Hello World");

const btn2 = document.querySelector("#btn2");
btn2.addEventListener("click", () => {
  alert("Hello World");
});


