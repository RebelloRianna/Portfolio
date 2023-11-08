const servicesButtons=document.querySelectorAll('.service_item');
const serviceDetails=document.querySelector('.services_right');

servicesButtons.forEach(item=>{
    item.addEventListener('click',()=>{
        const serviceClass=item.classList[1];
        console.log(serviceClass)
    })
})