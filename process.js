let full_price = document.getElementById('full_price');
let disconut_percent = document.getElementById('disconut_percent');
let disconut_price = document.getElementById('disconut_price');
let total_price = document.getElementById('total_price');
let btn = document.getElementById('btn');

btn.addEventListener('click', function(){
    full_price = Number(full_price.value);
    disconut_percent = Number(disconut_percent.value);
    let cal_disconut =  disconut_percent/100*full_price;
    disconut_price.value = cal_disconut;
    let cal_price = full_price - cal_disconut;
    total_price.value = cal_price;
})