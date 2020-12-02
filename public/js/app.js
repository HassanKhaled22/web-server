console.log('hi from client side')

// fetch('http://puzzle.mead.io/puzzle').then(r=>{
// r.json().then(e=>{
// console.log(e);
// })

// })

// fetch('http://localhost:3000/weather?address=demitta').then(r=>{
//     r.json().then(e=>{
        
//         console.log(e)
    
//     })
// })

let weather= ((address)=>{
   fetch(`/weather?address=${address}`).then(r=>{
r.json().then(e=>{
    
    mes1.textContent=e.location;
    mes2.textContent=e.forcatt;

})
})
})

const mes1=document.querySelector('#m1')
const mes2=document.querySelector('#m2')

const weatherform=document.querySelector('form');
const search=document.querySelector('input');

weatherform.addEventListener('submit',(e)=>{
    e.preventDefault();
    const location=search.value;
    mes1.textContent='loding...';
    mes2.textContent='';

    weather(location);



})