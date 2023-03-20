$(()=>{
    let listOracles = [];
    let listOraclesDelveBase = [];
    let listOraclesDelveDomain = [];
    let listOraclesDelveTheme = [];

    let lng = 'en';

    let surEau = false;

    $.get("assets/ironsworn_oracles.json",(data)=>{
        oracleService.createOracle(data,listOracles);
    });

    $.get("assets/ironsworn_delve_oracles_"+lng+".json",(data)=>{
      oracleService.createOracle(data,listOraclesDelveBase);
      console.log(listOraclesDelveBase)
    });

  $.get("assets/ironsworn_delve_oracles_domain_"+lng+".json",(data)=>{
    oracleService.createOracle(data,listOraclesDelveDomain);
    console.log(listOraclesDelveDomain)
  });

  $.get("assets/ironsworn_delve_oracles_theme_"+lng+".json",(data)=>{
    oracleService.createOracle(data,listOraclesDelveTheme);
    console.log(listOraclesDelveTheme)
  });


    $("#locationOnWater").hide();
    
    $("#switchLocationOnWater").click(()=>{
      surEau = !surEau;

        if(surEau){
            $("#locationOnEarth").hide();
            $("#locationOnWater").show();
        }
        else{
            $("#locationOnWater").hide();
            $("#locationOnEarth").show();
        }
    });

    function rollOracle(oracle){
        return oracleService.getOracleResult(oracle);
    }

    function rollNom() {
      let value = $("#selectTypePerso").find(":selected").val();
      let result = "";

      switch(value){
        case '1':
          let rand = oracleService.random(1,2);
          if(rand === 1){
            result = oracleService.getOracleEntry(listOracles[20],oracleService.d100());
          }
          else{
            result = oracleService.getOracleEntry(listOracles[21],oracleService.d100());
          }
          break;
        case '2':
          result = oracleService.getOracleEntry(listOracles[22],oracleService.d100());
          break;
        case '3':
          result = oracleService.getOracleEntry(listOracles[23],oracleService.d100());
          break;
        case '4':
          result = oracleService.getOracleEntry(listOracles[24],oracleService.d100());
          break;
        case '5':
          result = oracleService.getOracleEntry(listOracles[25],oracleService.d100());
          break
      }

      $("#nomPersoTxt").html("<p>"+result+"</p>");
        
      }
    
    function rollVillage() {
        let rand = oracleService.random(1, 2);
        $("#villageNomTxt").html("");
        let results = "";
    
        if (rand == 1) {
          rand = oracleService.d100();
          let nom = oracleService.d100();
    
          if (oracleService.between(rand, 1, 15)) {
            results = oracleService.getOracleEntry(
                listOracles[7],
              nom
            );
          } else if (oracleService.between(rand, 16, 30)) {
            results = oracleService.getOracleEntry(
                listOracles[8],
              nom
            );
          } else if (oracleService.between(rand, 31, 45)) {
            results = oracleService.getOracleEntry(
                listOracles[9],
              nom
            );
          } else if (oracleService.between(rand, 46, 60)) {
            results = oracleService.getOracleEntry(
                listOracles[10],
              nom
            );
          } else if (oracleService.between(rand, 61, 75)) {
            results = oracleService.getOracleEntry(
                listOracles[11],
              nom
            );
          } else if (oracleService.between(rand, 76, 90)) {
            results = oracleService.getOracleEntry(
                listOracles[12],
              nom
            );
          } else if (oracleService.between(rand, 91, 100)) {
            results = oracleService.getOracleEntry(
                listOracles[13],
              nom
            );
          }
        } else {
            results =
            oracleService.getOracleEntry(
                listOracles[14],
              oracleService.d100()
            ) +
            oracleService.getOracleEntry(
                listOracles[15],
              oracleService.d100()
            );
        }

        $("#villageNomTxt").html(results);

      }

      //#region ironsworn
    $("#actionBtn").on('click',()=>{
        let result = rollOracle(listOracles[0]);
        $("#actionTxt").html(result);
    });

    $("#themeBtn").on('click',()=>{
        let result = rollOracle(listOracles[1]);
        $("#themeTxt").html(result);
    });

    $("#regionBtn").on('click',()=>{
        let result = rollOracle(listOracles[2]);
        $("#regionTxt").html(result);
    });

    $("#lieuxBtn").on('click',()=>{
        let result = rollOracle(listOracles[3]);
        $("#lieuxTxt").html(result);
    });

    $("#eauxCotieresBtn").on('click',()=>{
        let result = rollOracle(listOracles[4]);
        $("#eauxCotieresTxt").html(result);
    });

    $("#descriptionLieuxBtn").on('click',()=>{
        let result = rollOracle(listOracles[5]);
        $("#descriptionLieuxTxt").html(result);
    });

    $("#villageNomBtn").on('click',()=>{
        rollVillage();
    });

    $("#troubleVillageBtn").on('click',()=>{
        let result = rollOracle(listOracles[16]);
        $("#troubleVillageTxt").html(result);
    });

    $("#rolePersoBtn").on('click',()=>{
        let result = rollOracle(listOracles[17]);
        $("#rolePersoTxt").html(result);
    });

    $("#objectifPersoBtn").on('click',()=>{
        let result = rollOracle(listOracles[18]);
        $("#objectifPersoTxt").html(result);
    });

    $("#descriptionPersoBtn").on('click',()=>{
        let result = rollOracle(listOracles[19]);
        $("#descriptionPersoTxt").html(result);
    });

    $("#nomPersoBtn").on('click',()=>{
        rollNom();
    });

    $("#actionCombatBtn").on('click',()=>{
        let result = rollOracle(listOracles[26]);
        $("#actionCombatTxt").html(result);
    });


    $("#contreCoupMystiqueBtn").on('click',()=>{
        let result = rollOracle(listOracles[27]);
        $("#contreCoupMystiqueTxt").html(result);
    });

    $("#rebondissementBtn").on('click',()=>{
        let result = rollOracle(listOracles[28]);
        $("#rebondissementTxt").html(result);
    });

    $("#rangDefisBtn").on('click',()=>{
        let result = rollOracle(listOracles[29]);
        $("#rangDefisTxt").html(result);
    });

    $("#typePersoBtn").on('click',()=>{
      let result = oracleService.random(1,5);

      $("#selectTypePerso").val(result);
    });

    $("#firstLookPersoBtn").on('click',()=>{
      $("#nomPersoBtn").trigger('click');
      $("#descriptionPersoBtn").trigger('click');
      $("#dispositionPersoBtn").trigger('click');
      $("#activityPersoBtn").trigger('click');
      $("#rolePersoTxt").html("");
      $("#objectifPersoTxt").html("");
    });

    $('#firstLookLocation').on('click',()=>{
      //$("#").trigger('click');
      $("#lieuxBtn").trigger('click');
      $("#eauxCotieresBtn").trigger('click');
      $("#villageNomBtn").trigger('click');
      $("#descriptionLieuxTxt").html("");
      $("#troubleVillageTxt").html("");
    });

    //#endregion

    //#region delve
    $("#dispositionPersoBtn").on('click',()=>{
      let result = rollOracle(listOraclesDelveBase[1]);
      $("#dispositionPersoTxt").html(result);
    });

    $("#activityPersoBtn").on('click',()=>{
      let result = rollOracle(listOraclesDelveBase[0]);
      $("#activityPersoTxt").html(result);
    });

    $("#aspectBtn").on('click',()=>{
      let result = rollOracle(listOraclesDelveBase[4]);
      $("#aspectTxt").html(result);
    });

    $("#focusBtn").on('click',()=>{
      let result = rollOracle(listOraclesDelveBase[5]);
      $("#focusTxt").html(result);
    });

    $("#sizeBtn").on('click',()=>{
      let result = rollOracle(listOraclesDelveBase[9]);
      $("#sizeTxt").html(result);
    });

    $("#primaryFormBtn").on('click',()=>{
      let result = rollOracle(listOraclesDelveBase[8]);
      $("#primaryFormTxt").html(result);
    });

    $("#characteristicsBtn").on('click',()=>{
      let result = rollOracle(listOraclesDelveBase[7]);
      $("#characteristicsTxt").html(result);
    });

    $("#abilitiesBtn").on('click',()=>{
      let result = rollOracle(listOraclesDelveBase[6]);
      $("#abilitiesTxt").html(result);
    });

    $("#eventBtn").on('click',()=>{
      let result = rollOracle(listOraclesDelveBase[21]);
      $("#eventTxt").html(result);
    });

    $("#componentBtn").on('click',()=>{
      let result = rollOracle(listOraclesDelveBase[20]);
      $("#componentTxt").html(result);
    });

    $("#methodBtn").on('click',()=>{
      let result = rollOracle(listOraclesDelveBase[2]);
      $("#methodTxt").html(result);
    });

    $("#targetBtn").on('click',()=>{
      let result = rollOracle(listOraclesDelveBase[3]);
      $("#targetTxt").html(result);
    });

    $("#firstLookSiteBtn").on('click',()=>{

    });
    //#endregion
});