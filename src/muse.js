avecRebondissement = false;

$(()=>{
    $("#avecRebondissement").hide();
    
    $("#switchRebondissement").click(()=>{
        avecRebondissement = !avecRebondissement;

        if(avecRebondissement){
            $("#sansRebondissement").hide();
            $("#avecRebondissement").show();
        }
        else{
            $("#avecRebondissement").hide();
            $("#sansRebondissement").show();
        }
    });
})