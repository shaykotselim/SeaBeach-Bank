// handle deposite button
document.getElementById("deposite-button").addEventListener('click', function (){
    // get amount deposite
    const inputButton = document.getElementById("deposite-info")
    ;
    const newDepositeAmountText = inputButton.value;
    const newDepositeAmount = parseFloat(newDepositeAmountText)
    // console.log(inputInfo);

    const totalDeposite = document.getElementById('deposite-total')
    ;
    const previousDepositeText = totalDeposite.innerText;
    const previousDeposite = parseFloat(previousDepositeText)
    const newDepositeTotal = previousDeposite + newDepositeAmount; 

    totalDeposite.innerText = newDepositeTotal;

    //update account blance 
    const balanceTotal = document.getElementById('blance-total')
    ;
    const blanceTotalText =balanceTotal.innerText
    const previousBlanceTotal = parseFloat(blanceTotalText)
    const newBlanceTotal = previousBlanceTotal + newDepositeAmount;
    balanceTotal.innerText = newBlanceTotal


    // clear the deposite input field
    inputButton.value = '';
})

    // handle withdraw event handler
document.getElementById('Withdraw-button').addEventListener('click', function () {
    const withDrawInput = document.getElementById('withdraw-info');

    const withdrawAmountText = withDrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawAmountText);
    console.log(newWithdrawAmount);
    
    // set withdraw total
    const withDrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawText = withDrawTotal.innerText;
    const previousWithdraw = parseFloat(previousWithdrawText);

    const newWithdrawTotal = newWithdrawAmount + previousWithdraw ;

    withDrawTotal.innerText = newWithdrawTotal;

    // update blance
    const blanceTotal = document.getElementById('blance-total');
    const previousBlanceText = blanceTotal.innerText;
    const previousBlanceTotal = parseFloat(previousBlanceText);
    const newBlanceTotal = previousBlanceTotal - newWithdrawAmount;

    blanceTotal.innerText = newBlanceTotal;

    // clear withdraw input
    withDrawInput.value = '';


})