jQuery(document).ready(function($){
		
    jQuery('.ultraman-item img').css('height', innerHeight*0.9);
    $('*').animate({scrollTop: $('#ultra1').offset().top},100);
    /* Âncora */

    $('.botao-next, .botao-prev, .menu ul li a').click(function(){
        var target = $(this).attr('href');
        $('*').animate({scrollTop: $(target).offset().top},500);
        
            var matches = target.match(/(\d+)/);
             
            if (matches) {
                matches = matches[0];
            }

            var prev = matches-1;
            var next = matches-(-1);

            if (prev==0) { prev=29}
            if (next==30) { next=1}

        $('.botao-prev').attr("href", "#ultra"+ prev);
        $('.botao-next').attr("href", "#ultra"+ next);
        $('.ultraman-item.showing').attr("class", "ultraman-item");
        //$(target + ' img').attr("class", "showing");
        $(target).attr("class", "ultraman-item showing");

        return false;
                
    });

});

