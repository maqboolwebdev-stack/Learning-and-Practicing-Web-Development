let bank = (function() {
    let bankBalance = 5000;
    
    function checkBalance() {
        console.log(bankBalance);
    }

    function setBalance(value) {
        bankBalance += value;
        console.log(bankBalance);
    }

    function withDraw(value) {
        if(value <= bankBalance) {
            bankBalance -= value;
        }
        console.log(bankBalance);
    }
    
    return {
        checkBalance,
        setBalance,
        withDraw,
    }
})();

bank.checkBalance();
bank.setBalance(1000);
bank.withDraw(3000);