//login botton event handler

const loginBtn = document.getElementById("login");
loginBtn.addEventListener("click", function() {
    const loginArea = document.getElementById("login_frm");
    loginArea.style.display = "none";

    const mainSection = document.getElementById("main_section");
    mainSection.style.display = "block";
});

// deposit botton event handeler

const depositeBtn = document.getElementById("adddeposit");
depositeBtn.addEventListener("click", function() {



    const depositAmount = document.getElementById("depositAmount").value;
    const depositNumber = parseFloat(depositAmount);



    if (isNaN(depositAmount) || depositAmount == '') {

        document.getElementById("deposit_num").innerHTML = "insert a Number!!";
        document.getElementById("depositAmount").value = "";



    } else {
        const currentDeposit = document.getElementById("currentDeposit").innerText;
        const currentDepositNumber = parseFloat(currentDeposit);
        const totalDeposit = depositNumber + currentDepositNumber;
        document.getElementById("currentDeposit").innerText = totalDeposit;

        const currentBalance = document.getElementById("currentBalance").innerText;
        const currentBalanceNumber = parseFloat(currentBalance);
        const totalBalance = depositNumber + currentBalanceNumber;
        document.getElementById("currentBalance").innerText = totalBalance;
        document.getElementById("depositAmount").value = "";
        document.getElementById("deposit_num").innerHTML = "";
    }


});

//withdraw
const withdrawBtn = document.getElementById("addWithdraw");

withdrawBtn.addEventListener("click", function() {
    const withdrawAmount = document.getElementById("withdrawAmount").value;

    if (isNaN(withdrawAmount) || withdrawAmount == '') {
        document.getElementById("withdrawAlert").innerText = "Insert a Number";
        document.getElementById("withdrawAmount").value = "";


    } else {
        const withdrawAmountNumber = parseFloat(withdrawAmount);
        const currentWithdraw = document.getElementById("currentWithdraw");
        document.getElementById("currentWithdraw").innerHTML = withdrawAmountNumber;
        const currentBalance = document.getElementById("currentBalance").innerText;
        const currentBalanceNumber = parseFloat(currentBalance);
        // const totalBalance = currentBalanceNumber - withdrawAmountNumber;
        // document.getElementById("currentBalance").innerText = totalBalance;

        if (currentBalanceNumber < withdrawAmountNumber) {
            document.getElementById("withdrawAlert").innerText = "insuficient balance";
            document.getElementById("currentWithdraw").innerHTML = "00";

        } else {



            const totalBalance = currentBalanceNumber - withdrawAmountNumber;
            document.getElementById("currentBalance").innerText = totalBalance;
            const currentWithdraw = document.getElementById("currentWithdraw");
            document.getElementById("withdrawAlert").innerText = " ";

        }

        document.getElementById("withdrawAmount").value = "";



    }




});