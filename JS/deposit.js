document.getElementById('deposit-btn').addEventListener('click', function(){
    //getting previous deposit amount
    const prevDepositAmount = document.getElementById('deposit-amount');
    const prevDepositAmountText = prevDepositAmount.innerText.replace(/[^\d.]/g, ''); // Remove non-numeric characters
    const prevDepositAmountNumber = parseFloat(prevDepositAmountText);
    console.log("Previous Deposit: ", prevDepositAmountNumber)
    
    //getting current deposit amount
    const newDepositAmount = document.getElementById('deposit');
    const newDepositAmountString = newDepositAmount.value;
    const newDepositAmountNumber = parseFloat(newDepositAmountString); // converting string to number
    console.log("New Deposit: ", newDepositAmountNumber)

    const totalDeposit = prevDepositAmountNumber + newDepositAmountNumber;

    prevDepositAmount.innerText = totalDeposit;

    //adding new deposit balance to total balance
    const totalBalanceText = document.getElementById('total-balance');
    const totalBalanceString = totalBalanceText.innerText.replace(/[^\d.]/g, '');
    const totalBalanceNumber = parseFloat(totalBalanceString);

    newTotalBalance = totalBalanceNumber + newDepositAmountNumber;
    totalBalanceText.innerText = newTotalBalance;

    newDepositAmount.value = ' ';
});
