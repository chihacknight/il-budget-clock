$(function() {

    var indices = []
    $.each(reasons, function( index, value ) {
        indices.push(index);
    });

    var i = 0;

    var clock;

    // start counting July 2, 2015 12am GMT-6
    var start_date =    moment("2015-07-01T23:00:00.000Z");

    updateClock();

    setInterval(function(){
        updateClock();
    }, 1000);

    function updateClock(){
        clock = moment(moment().diff(start_date));
        // console.log(clock)
        $("#years").html(clock.get('year') - 1970);
        $("#months").html(clock.get('month'));
        $("#days").html(clock.get('date') - 1);
        $("#hours").html(clock.get('hour'));
        $("#minutes").html(clock.get('minute'));
        $("#seconds").html(clock.get('second'));
    }

    function shuffle(o){
        for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
        return o;
    }

    function renderReason(reason){
        var reason_date = "";
        if (reason['date'])
            reason_date = " - <em>" + reason['date'] + "</em>";
        $("#reason").html(reason['title']+'<br /><span  class="small">Source: <a href="'+reason['url']+'" target="blank">' + reason['source'] + '</a>'+ reason_date + '</span>');
    }


    $('#do-something').hide();

    if($.address.parameter("reason") && parseInt($.address.parameter("reason"))<reasons.length){
        renderReason(reasons[parseInt($.address.parameter("reason"))])
    }
    else{
        renderReason(reasons[0])
    }


    shuffle(indices);
    $('#more').on('click', function(e){

        $.address.parameter('reason', indices[i]);
        $('#reason').fadeOut().delay(200).fadeIn()
        window.setTimeout(function () {
            renderReason(reasons[indices[i]]);
            i = (i+1) % reasons.length;
            }, 500);

    })

    $('#call-to-action-btn').on('click', function(e){
        $('#do-something').slideDown(function(){ $('html, body').animate({
                scrollTop: $("#do-something").offset().top
             }, 500); });
        
        _trackClickEventWithGA('Click', 'Do something', 'Do something')
    })
});