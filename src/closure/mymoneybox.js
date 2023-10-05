// Caja de ahorro

function moneyBox(coins) {
    let saveCoins = 0;
    saveCoins += coins; // se lee saveCoins = saveCoins + coins;
    console.log(`MoneyBox: $${saveCoins}`);
}

moneyBox(5);
moneyBox(5);

// Hay un error en esta logica, ya que no guarda la primera cantidad depositada. Para ello ocupamos el closure.


// Solucion correcta a contiacion

function moneyBox() {
    let saveCoins = 0;

    function countCoins(coins) {
        saveCoins += coins;
        console.log(`MoneyBox $${saveCoins}`);
    }
    return countCoins;
}

const myMoneyBox = moneyBox();
myMoneyBox(5);
myMoneyBox(25);
myMoneyBox(65);

const moneyBoxJulia = moneyBox();
moneyBoxJulia(45);
moneyBoxJulia(20);
moneyBoxJulia(5);