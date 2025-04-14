const cartAuto = document.querySelector('.cart-auto-container');
const addExtras = document.querySelector('.add-on-extras-cnt');
const insurance = document.querySelector('.insurance-container');
const confirmOrder = document.querySelector('.confirm-order-cnt');
const stepper = document.querySelector('.stepper-car-info-container');
const stepperCarInf = document.querySelector('.car-info-container');
const stepperSteps = stepper.querySelectorAll('.stepper')
const form = document.querySelector('.form-auto');


const buttonStep0 = document.querySelector('.step-0');
const buttonStep1 = document.querySelector('.step-1');
const buttonStep2 = document.querySelector('.step-2');
const buttonForm = document.querySelector('.pay-now-btn');


buttonStep0.addEventListener('click', ()=>{
    cartAuto.style.display = 'none';
    buttonStep0.style.display = 'none';
    addExtras.style.display = 'flex';
    buttonStep1.style.display = 'block';
    stepper.style.display = 'block';
})

buttonStep1.addEventListener('click', ()=>{
    addExtras.style.display = 'none';
    buttonStep1.style.display = 'none';
    insurance.style.display = 'flex';
    buttonStep2.style.display = 'block';
    stepperSteps[0].classList.remove('step-pending');
    stepperSteps[0].classList.add('step-succes');
    stepperSteps[1].classList.remove('step-future');
    stepperSteps[1].classList.add('step-pending');
    
})

buttonStep2.addEventListener('click', ()=>{
    insurance.style.display = 'none';
    buttonStep2.style.display = 'none';
    confirmOrder.style.display = 'flex';
    stepperSteps[1].classList.remove('step-pending');
    stepperSteps[1].classList.add('step-succes');
    stepperSteps[2].classList.remove('step-future');
    stepperSteps[2].classList.add('step-pending');
    stepperCarInf.style.display = 'none';
    // buttonStep2.style.display = 'block';
})


form.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());
  console.log(data);
});


// function innerTotalCart() {
//     const date = createDate();
//     const totalCartListItems = document.querySelectorAll('.total-cart-list-item span:nth-child(2)');
//     const totalCartSum = document.querySelector('.total-cart-sum-cnt:last-child');
//     totalCartListItems[0].textContent = `${date.start} ${date.end}`;
//     totalCartListItems[1].textContent = `Location`
//     totalCartListItems[2].textContent = `${}`
//     totalCartListItems[3].textContent = ''
    
// }

// function createDate() {
//     const now = new Date();
//     const startDate = new Date(now);
//     startDate.setHours(8, 0, 0);

// const endDate = new Date(now);
// endDate.setDate(now.getDate() + 1);
// endDate.setHours(20, 0, 0);


// const formatDate = (date) => {
//     const options = { month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric' };
//     return date.toLocaleString('en-US', options);
// };

// const formattedStartDate = formatDate(startDate);
// const formattedEndDate = formatDate(endDate);

// return  date = { start: formattedStartDate, end: formattedEndDate}
// }