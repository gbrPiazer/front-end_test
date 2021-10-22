$(function(){
    $('div.icons i').click(function(){
        var listaMenu = $('nav.mobile');
        listaMenu.fadeIn();       
    });
    $('nav.mobile i').click(function(){
        var listaMenu = $('nav.mobile');
        listaMenu.fadeOut();        
    });

    $('li.here').hover(function(){
        $(this).find('ol').slideToggle(400);
    });

    
    $('div.produto-single').hover(function(){       
        $(this).find('span').slideToggle();        
    });
    
})