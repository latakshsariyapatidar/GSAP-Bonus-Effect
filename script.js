// //Selecting the first heading element;
// var firsth1 = document.querySelector("#firsth1").textContent;

// //Splitting the text into an array of characters;
// var firsth1_splitted = firsth1.split('');

// //Creating a clutter element for the first heading element to add all the characters as a span tag;
// var clutter = '';
// firsth1_splitted.forEach(function(elem){
//     clutter += `<span>${elem}</span>`;
// })
// console.log(clutter);

// //Adding the clutter to the first heading element inner html
// document.querySelector("#firsth1").innerHTML = clutter;

//  Code to display all the elements in span tag

var h1_all = document.querySelectorAll("#page2 h1");

h1_all.forEach(function(elem){
    var splitted_text = elem.textContent.split("");
    var clutter = '';
    splitted_text.forEach(function(e){
        clutter += `<span>${e}</span>`
    })
    elem.innerHTML = clutter;
})

//Animating the characters to appear one by one;

gsap.to("#page2 h1 span", {
    color : 'rgb(233, 233, 222)',
    stagger :0.2,
    scrollTrigger:{
        trigger : "#page2 h1",
        scroller : "body",
        start : "top 50%",
        end : "top -30%",
        scrub : 1
    }
})