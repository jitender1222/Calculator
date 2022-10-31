const display=document.getElementById('display');
const add=document.getElementById('add');
const sub=document.getElementById('subtract');
const multiply=document.getElementById('multiply');
const divide=document.getElementById('divide');
const equal=document.getElementById('equalTo');
const clear=document.getElementById('clear');


const btn=document.querySelectorAll('.btn');

let num=" ";


// clear the text on the input field

clear.addEventListener('click',()=>{
    display.innerHTML=" ";
    num=" ";
})

// display the number on the screen

function displayNumber(val,bool){
    if(bool==true){
    num=num+val;
    display.innerHTML=num;
    }
}

// adding the number

add.addEventListener('click',()=>{
    let sum=0;
    sum=display.innerHTML;
    console.log(sum);
})


btn.forEach((value)=>{
    value.addEventListener('click',()=>{
        displayNumber(value.innerHTML,true);
    })
})






