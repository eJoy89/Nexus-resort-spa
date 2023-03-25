$(document).ready(function(){
    media();
    AOS.init();


    $('#go_top').on('click', function() {
        $('html, body').animate({scrollTop: 0}, 'slow');
    })




    function media (){
        var ww = $(window).width();
        if(ww > 1400){
            $('#wrap').fullpage({
                scrollBar:true
            });


            $('.h-menu li').click(function(){
                $(this).addClass('active');
                $(this).siblings().removeClass('active');
        
                var result = $(this).attr('data-alt');
        
                $('.tabs div').removeClass('active');
                $('#' + result).addClass('active');
        
            });    
        
        
            $('.h-menu li .menu-name').click(function(){
                $(this).toggleClass('active').parent('.menu-box-h').siblings().children().removeClass('active');
            });    
        
        
            $('.h-menu .menu-box-h').click(function(){
                $(this).children('.sub-menu').stop().slideToggle();
                $(this).siblings().children('.sub-menu').stop().slideUp();
        
            });
             
        
            $('#hamburger').click(function(){
                $('#hamburger').toggleClass('active');
                $('nav').toggleClass('active');
            });       
            
        
            $('.check-avaliable').click(function(){
                $('.black-background').fadeIn();
            });
        
            $('.black-background, .modal-btn button').click(function(e){
                console.log(e.target);
        
                if(e.target == e.currentTarget){
                    $('.black-background').fadeOut();
                }
            });


        }else{
            $('.h-menu li').click(function(){
                $(this).addClass('active');
                $(this).siblings().removeClass('active');
        
                var result = $(this).attr('data-alt');
        
                $('.tabs div').removeClass('active');
                $('#' + result).addClass('active');
        
            });
        
        
        
            $('.h-menu li .menu-name').click(function(){
                $(this).toggleClass('active').parent('.menu-box-h').siblings().children().removeClass('active');
            });
        
        
        
        
            $('.h-menu .menu-box-h').click(function(){
                $(this).children('.sub-menu').stop().slideToggle();
                $(this).siblings().children('.sub-menu').stop().slideUp();
        
            });
        
        
            
        
            $('#hamburger').click(function(){
                $('#hamburger').toggleClass('active');
                $('nav').toggleClass('active');
            });
        
        
            
        
            $('.check-avaliable').click(function(){
                $('.black-background').fadeIn();
            });
        
            $('.black-background, .modal-btn button').click(function(e){
                console.log(e.target);
        
                if(e.target == e.currentTarget){
                    $('.black-background').fadeOut();
                }
            });
        }
    }


    

});
