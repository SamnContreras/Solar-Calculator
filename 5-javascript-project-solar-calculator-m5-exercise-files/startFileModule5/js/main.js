// JavaScript Document

// By Id
var foundYou = document.getElementById("overview");
console.log(foundYou);
console.log(foundYou.innerText);
foundYou.innerHTML = ">>I Changed You";

// By Tag Name
var foundYou = document.getElementsByTagName("p");
console.log(foundYou);
console.log(foundYou[1].innerText);
foundYou[1].innerText = "..I Changed You<<"

// By Name
var foundYou = document.getElementsByName("description");
console.log(foundYou[0].innerHTML);
foundYou[0].innerHTML = "<< Changed You >>";

// By Class Name
var foundYou = document.getElementsByClassName("smallCenter");
console.log(foundYou[0].innerHTML);
foundYou[0].innerHTML = "New Paragraph info";

// Query Seclector ALl
var foundYou = document.querySelectorAll("ul#lp_list li");
console.log(foundYou[0].innerText);
console.log("LENGTH OF COLLECTION >> " + foundYou.length)
foundYou[2].innerText = "<< I changed You >>";

// Combination 1
var foundYou = document.getElementById("sw_list");
console.log(foundYou);
var childArray = foundYou.getElementsByTagName("li");
console.log(childArray);
childArray[0].innerText = ">> These Items";
childArray[1].innerText = ">> Have Just";
childArray[2].innerText = ">> Been Changed";

// Combination 2
var newOptions = ["Orange", "Red", "Blue"];

var foundYou = document.getElementById("myForm");
console.log(foundYou);

var selectArray = foundYou.getElementsByTagName("option");
console.log(selectArray);

for (i = 0; i < selectArray.length; i++) {
    selectArray[i].innerText = newOptions[i];
}

// Combination 3
var foundYoud = document.getElementById("myForm");
console.log(foundYoud);

var selectArray = foundYoud.getElementsByTagName("input");
console.log(selectArray);

for (i = 0; i < selectArray.length; i++) {
    console.log(selectArray[i].value);
}