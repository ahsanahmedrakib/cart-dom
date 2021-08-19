function countProduct(pro, increment) {
    const product = document.getElementById(pro+'-number');
    const productText = product.value;
    const productNumber = parseInt(productText);
    if (increment) {
       update = productNumber + 1;
    }
    else if (productNumber > 0) {
       update = productNumber - 1;
    }
    product.value = update;
    const price = document.getElementById(pro+'-total');
    if(pro == 'phone'){
       updatePrice = update * 1219;
    }
    else{
       updatePrice = update * 59;
    }
    price.innerText = updatePrice;
    caculate();
 }
 function getInputValue(product){
    const productInput = document.getElementById(product+'-number').value;
    const productTotal = parseInt(productInput);
    return productTotal;

 }
 // calculate
 function caculate(){
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const total = subTotal + tax;
    document.getElementById('subtotal').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-amount').innerText = total;
 }
 // phone
 document.getElementById('phone-plus').addEventListener('click', function () {
    countProduct('phone', true);
 })
 document.getElementById('phone-minus').addEventListener('click', function () {
    countProduct('phone', false)
 })
 // case
 document.getElementById('case-plus').addEventListener('click', function () {
    countProduct('case', true)
 })
 document.getElementById('case-minus').addEventListener('click', function () {
    countProduct('case', false)
 })