//h1 {color:red}
//.parrafito{}
//#
const h1=document.querySelector('h1');
const form=document.querySelector('#form');
const input1=document.querySelector('#calculo1');
const input2=document.querySelector('#calculo2');
const btn=document.querySelector('#btnCalcular');
const presult=document.querySelector('#result');

btn.addEventListener('click',sumarInputValues);

// btn.addEventListener('click',btnOnClick); //es la mejor forma
function sumarInputValues(){
    //event.preventDefault;
    //console.log({event}); 
    const resultado= parseInt(input1.value) + parseInt(input2.value);
    presult.innerText="Resultado :"+resultado;
 }

// const p =document.querySelector('p');
// const parrafito=document.querySelector('.parrafito');
// const pid=document.querySelector('#pid');
// const input=document.querySelector('input');



// console.log(input.value);
// console.log({
//     h1,
//     p,
//     parrafito,
//     pid,
//     input,
// });
// h1.innerHTML='Patito <br> Feo';//a codigo html
// h1.innerText='Patito <br> Feo'; //a texto no más
// h1.getAttribute('');//nos ayuda aleer alguns atributos que tenga nuestro elemento
// //console.log(h1.getAttribute('pantalla'));
// //h1.setAttribute('class','rojo');
// h1.classList.add('rojo');
// h1.classList.remove('verde');
// //h1.classList.toggle('verde'); agregar quitar
// //h1.classList.contains('verde'); true o false si se tiene lo que estámos preguntando
// input.value="456";
// const img=document.createElement('img');
// img.setAttribute('src','https://estaticos.elcolombiano.com/binrepository/1000x667/0c0/0d0/none/11101/NQTT/imagen-mdesfile-de-silletrero-2023-10_42998401_20230807181216.jpg');
// console.log(img);
// pid.append(img);
// pid.innerHTML("");