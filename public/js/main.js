console.log(document.getElementsByTagName("h1")[1].innerText);


console.log(document.getElementsByTagName("li")[document.getElementsByTagName("li").length-1].innerText);



console.log(document.getElementsByTagName("p")[0].innerText.toUpperCase());



let li = document.getElementsByTagName("li");

let newLi = Array.prototype.slice.call(li);

newLi.forEach(element => console.log(element.innerText.toUpperCase()));