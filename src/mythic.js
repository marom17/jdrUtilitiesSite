$(()=>{
    let listOracles = [];
    let lng = 'en';

    $.get("assets/mythic_oracles_"+lng+".json",(data)=>{
        oracleService.createOracle(data,listOracles);

        let html = "";

        for (let oracle of listOracles){
            let id = oracle.name;
            id = id.replaceAll("&","").replaceAll(" ","").toLowerCase();
            html += '<div class="row"><div class="col-4">'+oracle.name+'</div><div class="col-2"><button class="btn btn-primary" id="'+id+'Btn">Roll</button></div><div class="col-6" id="'+id+'Txt"></div></div>';
        }

        $("#oracle").html(html)

        for (let oracle of listOracles){
            let id = oracle.name;
            id = id.replaceAll("&","").replaceAll(" ","").toLowerCase();

            let idBtn = "#"+id+"Btn";

            $(idBtn).on('click',()=>{
                let result = "";

                if(id === "sceneadjustmenttable"){
                    result = oracleService.getOracleResult(oracle,1,10);
                }
                else{
                    result = oracleService.getOracleResult(oracle);
                }

                
                $("#"+id+"Txt").html(result);
            })
        }
        
    });

    $("#fateCheckBtn").on('click',()=>{
        let odds = parseInt($("#odds").find(":selected").val());
        let chaosFactor = parseInt($("#chaosFactor").find(":selected").text())
        let chaosFactorModifier = parseInt($("#chaosFactor").find(":selected").val());


        let dice1 = parseInt(oracleService.random(1,10));
        let dice2 = parseInt(oracleService.random(1,10));

        let result =  dice1 + dice2 + odds + chaosFactorModifier;

        let resultTxt = "";

        if(result >= 18 && result <= 20){
            resultTxt = "Exceptional Yes";
        }
        else if(result >= 11){
            resultTxt = "Yes";
        }
        else if(result >=2 && result <= 4){
            resultTxt = "Exceptional No";
        }
        else{
            resultTxt = "No"
        }

        if(dice1 === dice2 && dice1 <= chaosFactor){
            resultTxt += " with Random Event";
        }
        
        $("#fateCheckTxt").html(resultTxt);
    })
})