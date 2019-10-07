
for(let i=0; i < 8; i++){
    for(let j=0; j < 8; j++){
        if(i % 2 === 0 ) {
            if (j % 2 === 0) $("." + i + "-" + j).css("background", "white");
            else {
                $("." + i + "-" + j).css("background", "#7a7a7a");
                if(i < 3) $("." + i + "-" + j).prepend('<img src="img/red.png" />');
                if(i > 4) $("." + i + "-" + j).prepend('<img src="img/black.png" />');
            }
        }
        else {
            if (j % 2 === 0){
                $("." + i + "-" + j).css("background", "#7a7a7a");
                if(i < 3) $("." + i + "-" + j).prepend('<img src="img/red.png" />');
                if(i > 4) $("." + i + "-" + j).prepend('<img src="img/black.png" />');
            }
            else $("." + i + "-" + j).css("background", "white");
        }
    }
}
$("th").mouseover(function () {
  //  if($('<img src="img/black.png" />')){
        row = $(this).data('row');
        column = $(this).data('col');

        $("." + row + "-" + column).css("opacity", "0.7");
        $("." + row + "-" + column).css("transform", "scale(0.95)");
 //   }
});
$("th").mouseout(function () {
 //   if($('<img src="img/black.png" />')){
        row = $(this).data('row');
        column = $(this).data('col');

        $("." + row + "-" + column).css("opacity", "1");
        $("." + row + "-" + column).css("transform", "scale(1)");
 //   }
});

