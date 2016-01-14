/*
    Jessica J. Hernandez
    Full Sail University
    Deployment of Web Applications
    201601-01 Online
    Week 2 Assignment: Your Portfolio, Live
*/

$(document).ready(function() {
    
    $paddingTop = $('nav').height();
    $('body').css('padding-top',$paddingTop+30);
    $('#modal').css('padding-top',$paddingTop);
    
    $navItemsHeight = $('.navItem').height();    
    $portionPadding = ($paddingTop - $navItemsHeight) / 2;
    $('.navItem').css('padding-top',$portionPadding).css('padding-bottom',$portionPadding);
    
    $mobileMenuHeight = $('.mobile_nav').height();    
    $mobileMargin = ($paddingTop - $mobileMenuHeight) / 2;
    $('.mobile_nav').css('margin-top',$mobileMargin).css('margin-bottom',$mobileMargin);
    
    window.onload = navBar();
    function navBar() {  
        
		console.log("testing js to make sure it's running");
        
		$(window).scroll(function() {
			if( $(window).scrollTop() > 50 ) {
				console.log("testing one");
				$("#main_logo").css('width','30%');
                
                $('.navItem').css('padding','0');
                $paddingTop = $('nav').height();
                $navItemsHeight = $('.navItem').height();    
                $portionPadding = ($paddingTop - $navItemsHeight) / 2;
                $('.navItem').css('padding-top',$portionPadding).css('padding-bottom',$portionPadding);
			}
			else if( $(window).scrollTop() < 50 ){
				$("#main_logo").css('width','50%');
                
                $paddingTop = $('nav').height();
                $navItemsHeight = $('.navItem').height();    
                $portionPadding = ($paddingTop - $navItemsHeight) / 2;
                $('.navItem').css('padding-top',$portionPadding).css('padding-bottom',$portionPadding);
			}
		});
    }
    
    //$('.navItem span').addClass('activeNavItem');
    $page = $('span.page').attr('id');
    
    if ( $page == "home" ) {
        $('.navItem:nth-child(1) span').addClass('activeNavItem');
        $('.mobileNavItem:nth-child(1) span').addClass('activeNavItem');
    } else if ( $page == "about" ) {
        $('.navItem:nth-child(2) span').addClass('activeNavItem');
        $('.mobileNavItem:nth-child(2) span').addClass('activeNavItem');
    } else if ( $page == "portfolio" ) {
        $('.navItem:nth-child(4) span').addClass('activeNavItem');
        $('.mobileNavItem:nth-child(3) span').addClass('activeNavItem');
    } else if ( $page == "contact" ) {
        $('.navItem:nth-child(5) span').addClass('activeNavItem');
        $('.mobileNavItem:nth-child(4) span').addClass('activeNavItem');
    }
    
    $('.mobile_nav').click(function(e){
        e.preventDefault();
        
        if( $('.mobile_nav').hasClass('closed') ) {
            $('.mobile_nav').removeClass('closed').addClass('opened');
            $('.dot').animate({ backgroundColor: "#c6c6c6" }, 75);
            $('.odd').animate({ backgroundColor: "#f94e4e" }, 500);
            $('#modal').slideDown('slow');
            $('#menu_options').slideDown('slow');
        } else if( $('.mobile_nav').hasClass('opened') ) {
            $('.mobile_nav').removeClass('opened').addClass('closed');
            $('.dot').animate({ backgroundColor: "#c6c6c6" }, 75);
            $('.middle').animate({ backgroundColor: "#f94e4e" }, 500);
            $('#modal').slideUp('slow');
            $('#menu_options').slideUp('slow');
        }
    });
    
    
});