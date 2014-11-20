(function(){
    var secund;
    var secund_state = 180;
    var minut_state = 180;
    var secund_counter = 0;
    var minut_counter = 0;
    var minute;
    var main_interval;



     function init () {
       secund = document.getElementById('secund');
       minute = document.getElementById('minute');
       var button_start = document.getElementById('start');
       button_start.addEventListener("click", startTimer )

       var button_pause = document.getElementById('pause');
       button_pause.addEventListener("click", stopTimer )
        
    }

// step must be 6 grad per second
    function startTimer () {

        main_interval = setInterval(function(){
            secund_state += 6;
            secund.style.transform = "rotateZ("+ secund_state +"deg)";
            secund_counter++;
            if(secund_counter===60){
                console.log("minyta")
                minut_state+=6;
                minut_counter++;
                minute.style.transform = "rotateZ("+ minut_state +"deg)";
                secund_counter=0;
            }
        }, 1000);
    }

    function stopTimer () {
        clearInterval(main_interval)
        if (!minut_counter){
        alert("прошло " + secund_counter +" секунд")
        }
        else{
           alert("прошло " + minut_counter + " минут " + secund_counter + " секунд" )
        }
        secund_state = 180;
        minut_state = 180;
        secund_counter = 0;
        minut_counter = 0;
        secund.style.transform = "rotateZ("+ 180 +"deg)";
        minute.style.transform = "rotateZ("+ 180 +"deg)";
    }














/////////////////////////////////////////////////////////////////////////////////

    function start() {
        init ();
        
    };


    window.addEventListener("DOMContentLoaded", function() {
        start();
    });
})();


