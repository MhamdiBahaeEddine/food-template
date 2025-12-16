let cover = document.getElementsByClassName("cover")[0];
let checkbox = document.getElementById("checkbox");



checkbox.addEventListener("click",(eo) => {
    cover.style.display="block";
})

let main = document.getElementsByClassName("main")[0];
let right = document.getElementById("right");
let one = document.getElementById("one");
let two = document.getElementById("two");
let tree = document.getElementById("tree");
let foor = document.getElementById("foor");

let a1 = document.getElementById("a1");
let a2 = document.getElementById("a2");
let a3 = document.getElementById("a3");
let a4 = document.getElementById("a4");

let x = 0

right.addEventListener("click",(eo) => {
    eo.preventDefault();
    if(x>-300){
        x-=100;
    }
    main.style.transform="translateX("+x+"vw)";
    main.style.transition = "all 2s ease";
    
})

left.addEventListener("click",(eo) => {
    eo.preventDefault();
    if(x<0){
        x+=100;
    }
    main.style.transform="translateX("+x+"vw)";
    main.style.transition = "all 2s ease";
    
})

one.addEventListener("click",(eo) => {
    eo.preventDefault();
    x=0;
    main.style.transform="translateX("+x+"vw)";
    main.style.transition = "all 2s ease";
    // one.style.backgroundColor="black";
    // a1.style.color="white";

    // two.style.backgroundColor="white";
    // a2.style.color="BLACK";
    // tree.style.backgroundColor="white";
    // a3.style.color="BLACK";
    // foor.style.backgroundColor="white";
    // a4.style.color="BLACK";

    
})

two.addEventListener("click",(eo) => {
    eo.preventDefault();
    x=-100;
    main.style.transform="translateX("+x+"vw)";
    main.style.transition = "all 2s ease";
    // two.style.backgroundColor="black";
    // a2.style.color="white";

    // one.style.backgroundColor="white";
    // a1.style.color="BLACK";
    // tree.style.backgroundColor="white";
    // a3.style.color="BLACK";
    // foor.style.backgroundColor="white";
    // a4.style.color="BLACK";
    
})

tree.addEventListener("click",(eo) => {
    eo.preventDefault();
    x=-200;
    main.style.transform="translateX("+x+"vw)";
    main.style.transition = "all 2s ease";
    // tree.style.backgroundColor="black";
    // a3.style.color="white";

    // two.style.backgroundColor="white";
    // a2.style.color="BLACK";
    // one.style.backgroundColor="white";
    // a1.style.color="BLACK";
    // foor.style.backgroundColor="white";
    // a4.style.color="BLACK";
    
})

foor.addEventListener("click",(eo) => {
    eo.preventDefault();
    x=-300;
    main.style.transform="translateX("+x+"vw)";
    main.style.transition = "all 2s ease";
    // foor.style.backgroundColor="black";
    // a4.style.color="white";

    // two.style.backgroundColor="white";
    // a2.style.color="BLACK";
    // tree.style.backgroundColor="white";
    // a3.style.color="BLACK";
    // one.style.backgroundColor="white";
    // a1.style.color="BLACK";
    
})