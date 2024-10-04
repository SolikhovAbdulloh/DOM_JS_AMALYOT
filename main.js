// function hello(){
//     alert("salomat")
// }

// const btn = document.getElementById("btn")

// btn.onclick = function(){
//     alert("eheeeee")
// };

// let listen = document.getElementById('listener')

// document.body.addEventListener("keydown", (x) => {
//     console.log(x); 
// })

////// ////////////////////////1-Topshiriq

// const firstbox = document.querySelector("#first");
// const secondbox = document.querySelector("#second");
// const thirdbox = document.querySelector("#third");


// document.addEventListener("keydown",(eV)=>{
//     console.log(eV);
    

//     firstbox.innerHTML = eV.code;
//     secondbox.innerHTML = eV.key;
//     thirdbox.innerHTML = eV.keyCode;
 
//     if(eV.key === " "){
//          secondbox.innerHTML = "space"
//     }
// })



////////////////////////////////// // masalalar

// 1) /[a-z]/g  ft harflarni topish

// 2) raqamlar uchun

// let num = "(123) 999-9999"

// let degex = /[(\]?(\d{3,}|\d{3})[)][ ]?(\d{3})[-](\d{4})/g 

// const result = degex.test(num)

// console.log(result);



// 3)  
// let teg = "<h1>Hello world</h1>"

// let degex = /[^<>\\D][a-z A-Z]/g;

// console.log(degex.exec(teg));

// 4)
// let email = "qweqwe@gmail.com"

// let degex =/[a-zA-Z0-9._%+-]+@gmail\.com/g

// console.log(degex.test(email));

// 5)


// const Ipadresss = '[192.168.0.1]'

// const regEx = /[\(]?(\d{3})[.,]?(\d{3})[.](\d{1,4})[.]?(\d{1,4})?\)?/g;

// let result = regEx.test(Ipadresss)

// console.log(result);

// 6)

// const dollar = 'qwedsa$fdq$'

// let regEx = "/^[$]$/g";

// console.log(regEx.test(dollar));

// 10)

// let web = 'exapmle.com'

// let regEx = /[a-zA-Z[.\]com]/g;

// console.log(regEx.exec(web));


// 11

// let name = 'Solikhov Abdulloh'

// let regEx = /[\D\a-zA-Z]/g;

// console.log(regEx.exec(name));

//15

// let misol = '2*(3+4)'

// let regEx = /[\(\)\d{1,}]?[*\/\+\](\d)[)]/g;

// console.log(regEx.exec(misol));

////////////////////////Dom da mashq/////////////////////////

// const father = document.querySelector("#ota")

// const btn = document.querySelector("button")

// btn.addEventListener("click",()=>{
//     father.innerHTML += '<h1>men tugildim</h1>'
// })

// btn.addEventListener("mouseover",()=>{
//     console.log("Click bosildi");
    
// })

// const items = document.querySelectorAll("h1")

// items.forEach((item)=>{
//     item.addEventListener("click",(item)=>{
//         item.target.style.color = 'blue'
//         item.target.style.opacity = "50%"
        
//     })
// })

// const ul = document.querySelector('ul')

// const button = document.querySelector("button")

// let li = document.createElement('li')

// let li = document.querySelectorAll('li')

// li.forEach((e) => {
//     e.addEventListener("click",(e) => {
//         console.log('li bosildi');
//         e.stopPropagation()    
//     })
// })

// ul.addEventListener("click",(e)=>{
    
//     if(e.target.nodeName == 'LI'){

//         e.target.remove()
//     }
    
// })
 
// li.addEventListener("click",()=>{

//     // ul.innerHTML += " <li>Someting</li>"
//     li.innerText = "birinchi li yaratildi"

//     ul.appendChild(li)    
// })

const ul = document.querySelector('ul')

// const li = document.querySelector('li')

const btn = document.querySelector('button')

btn.addEventListener('click', ()=>{

    const li = document.createElement('li')

    li.textContent = "Chelsi"

    ul.appendChild(li)

})
