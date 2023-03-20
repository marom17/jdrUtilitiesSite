//'use strict';

$(()=>{
    var oracleService = window.oracleService;

    //#region fonctions
    function displayResult(result){
        $("#basicResult").html(result);
    }

    function specResult(result){
        $("#specResult").html(result);
    }
    //#endregion

    //#region basique
    $("#d4").on('click',()=>{
        displayResult("D4: "+oracleService.d4());
    });

    $("#d6").on('click',()=>{
        displayResult("D6: "+oracleService.d6());
    });

    $("#d8").on('click',()=>{
        displayResult("D8: "+oracleService.d8());
    });

    $("#d10").on('click',()=>{
        displayResult("D10: "+oracleService.d10());
    });

    $("#d12").on('click',()=>{
        displayResult("D12: "+oracleService.d12());
    });

    $("#d20").on('click',()=>{
        displayResult("D20: "+oracleService.d20());
    });

    $("#d100").on('click',()=>{
        displayResult("D100: "+oracleService.d100());
    });

    //#endregion

    //#region swade

    function jockerDice() {
        let resFinal = 0;
        let res = 0;
    
        do {
          res = this.oracleService.d6();
          resFinal += res;
        } while (res == 6);
    
        return resFinal;
      }

    $("#swd4").on('click',()=>{
        let resFinal = 0;
        let res = 0;

        do {
        res = oracleService.d4();
        resFinal += res;
        } while (res == 4);

        specResult('D4: ' + resFinal + ' D6: ' + jockerDice());
    });

    $("#swd6").on('click',()=>{
        let resFinal = 0;
        let res = 0;

        do {
        res = oracleService.d6();
        resFinal += res;
        } while (res == 6);

        specResult('D6: ' + resFinal + ' D6: ' + jockerDice());
    });

    $("#swd8").on('click',()=>{
        let resFinal = 0;
        let res = 0;

        do {
        res = oracleService.d8();
        resFinal += res;
        } while (res == 8);

        specResult('D8: ' + resFinal + ' D6: ' + jockerDice());
    });

    $("#swd10").on('click',()=>{
        let resFinal = 0;
        let res = 0;

        do {
        res = oracleService.d10();
        resFinal += res;
        } while (res == 10);

        specResult('D10: ' + resFinal + ' D6: ' + jockerDice());
    });

    $("#swd12").on('click',()=>{
        let resFinal = 0;
        let res = 0;

        do {
        res = oracleService.d12();
        resFinal += res;
        } while (res == 12);

        specResult('D12: ' + resFinal + ' D6: ' + jockerDice());
    });

    $("#swd20").on('click',()=>{
        let resFinal = 0;
        let res = 0;

        do {
        res = oracleService.d20();
        resFinal += res;
        } while (res == 20);

        specResult('D20: ' + resFinal + ' D6: ' + jockerDice());
    });

    //#endregion

    //#region ironsworn
    function ironsworn() {
        return 'Action: ' +
          oracleService.d6() +
          ' Challenge: ' +
          oracleService.d10() +
          ' / ' +
          oracleService.d10();
      }

    $("#ironsworn").on('click',()=>{
        specResult(ironsworn());
    })
    //#endregion
});