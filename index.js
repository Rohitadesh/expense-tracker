// let submit=document.getElementById('.buttton')
let amount=document.getElementById('amount_spent');
let submit=document.getElementById('submit');
let total_amount=document.querySelector('.total_balance')
let current_amount=document.querySelector('.current_amount')
let bill=document.querySelector('#billname')
let expense_amount=document.querySelector('.expense')
let history=document.querySelector('.history_box')
let amount_credit,amount_debit,extra_amount;


let spending_amount=(income_amount)=>{
    if(income_amount>=0){
        amount_credit =income_amount
        total_amount.innerHTML=amount_credit
        amount.value.innerHTML=" ";
        current_amount.innerText=amount.value;
        let list_spent=document.createElement('p')
        list_spent.innerHTML=bill+amount_credit
        history.appendChild(list_spent)
    }
    else if (income_amount<=0){
        amount_debit=income_amount
        let spent_amount=parseInt(amount_credit)+parseInt(amount_debit)
        current_amount.innerText=spent_amount;
        expense_amount.innerHTML=Math.abs(amount_debit);
        bill.innerHTML=" "
        let list_spent=document.createElement('h2');
        list_spent.innerHTML=bill+amount_debit
        history.appendChild(list_spent)
    }
    
}
// submit.addEventListener('click',add_balance)
submit.addEventListener('click',()=>{
    spending_amount(amount.value);
})