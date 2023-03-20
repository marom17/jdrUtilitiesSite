class Oracle {
    oracleEntries = [];
    name = "";
    maxNbRoll = 1;
    description = "";
}
  
class OracleEntry {
    min = 0;
    max = 0;
    value = "";
}

class OracleService{
    //#region basique
    d4(){
        return this.random(1,4);
    }

    d6(){
        return this.random(1,6);
    }

    d8(){
        return this.random(1,8);
    }

    d10(){
        return this.random(1,10);
    }

    d12(){
        return this.random(1,12);
    }

    d20(){
        return this.random(1,20);
    }

    d100(){
        return this.random(1,100);
    }

    //#endregion

    //#region swade

    //#endregion

    //#region spec

    //#endregion

    random(min, max){
        return Math.ceil(Math.random()*(max-min))+min;
    }

    createOracle(json, listOracles){
        json.forEach((oracle) => {
            let tmp = new Oracle();
            tmp.name = oracle.name;
            tmp.oracleEntries = [];
            tmp.description = oracle.description;
            tmp.maxNbRoll = oracle.usage.maxRoll;
        
            oracle.oracle.forEach((entry)=>{
                let tmpEntry = new OracleEntry();
                tmpEntry.min = entry.min;
                tmpEntry.max = entry.max;
                tmpEntry.value = entry.value;

                tmp.oracleEntries.push(tmpEntry);
            });

            listOracles.push(tmp);
        });
    }

    getOracleResult(oracle, min = 1, max = 100) {
        let rand = this.random(min,max);
    
        let result = this.getOracleEntry(oracle, rand);
    
        return result;
      }
    
      getOracleEntry(oracle, index) {
        return oracle.oracleEntries.filter(
          (entry) => parseInt(entry.min) <= parseInt(index) && parseInt(entry.max) >= parseInt(index)
        )[0].value;
      }
    
      between(value, min, max) {
        return value >= min && value <= max;
      }
}  

window.oracleService = new OracleService();