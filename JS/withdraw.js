document.getElementById('withdraw-btn').addEventListener('click', function(){
    const withdrawField = document.getElementById('withdraw');
    const newWithdrawFieldText = withdrawField.value;
    const newWithdrawFieldNumber = parseFloat(newWithdrawFieldText);

    withdrawField.value = '';

    const totalBalanceText = document.getElementById('total-balance');
    const totalBalanceString = totalBalanceText.innerText.replace(/[^\d.]/g, '');
    const totalBalanceNumber = parseFloat(totalBalanceString);

    if(isNaN(newWithdrawFieldNumber)){
        window.alert("Enter a valid number.");
        return;
    }

    //getting current withdraw amount
    const prevWithdrawAmount = document.getElementById('total-withdraw');
    const prevWithdrawAmountText = prevWithdrawAmount.innerText.replace(/[^\d.]/g, '');
    const prevWithdrawAmountNumber = parseFloat(prevWithdrawAmountText); // converting string to number

    //subtracting total balance from current withdraw amount
    if(newWithdrawFieldNumber > totalBalanceNumber){
        window.alert("You don't have enough money to withdraw!!");
        return;
    }

    const totalwithdraw = prevWithdrawAmountNumber + newWithdrawFieldNumber;

    prevWithdrawAmount.innerText = totalwithdraw;


    const currentTotal = totalBalanceNumber - newWithdrawFieldNumber;

    totalBalanceText.innerText = currentTotal;

    if(totalBalanceNumber <= 0){
        totalBalanceText.innerText = 0;
    }
    
})