function mobileMenu(selector, clickElement, toShowElement){

    let flag = 0;

    $(selector).click(function(){

        if(flag === 0)
        {
            $(toShowElement).fadeIn(500);

            flag = 1;
        }

        else if(flag = 1)
        {
            $(toShowElement).fadeOut(200);

            flag = 0;
        }
    });

    $(clickElement).click(function(){

        $("#menu-mobile").fadeOut(500);
        $("#hamburger-menu-after-click").fadeOut(500);
        $("#hamburger-menu").fadeIn(500);
        document.body.style.overflow = "auto";
    });
};

function menuDesktopHover(selector, toShowElement, clickElement){
        
    $(selector).hover(function(){

        $(toShowElement).fadeIn(500);

    },
    function(){

        $(toShowElement).fadeOut(200);
    });

    $(clickElement).click(function(){

        $(toShowElement).fadeOut(200);
    });
}

function secondLevelMenu(selector, element)
{
	$(selector).click(function(){

		$(element).css({"animation": "bounceInDown 1s both"}).fadeIn(500);

		$("section:not("+element+")").css({"display": "none"});

		document.body.style.overflow = "auto";
	});
}

$("document").ready(function(){
    
    let tab = [];
    
    tab[0] = new Image();
        
    tab[0].src = "../img/background/foto1.jpg";
    
    tab[0].setAttribute("class", "foto1");

    tab[1] = new Image();

    tab[1].src = "../img/background/foto5.jpg";
    
    tab[1].setAttribute("class", "foto5");

    tab[2] = new Image();

    tab[2].src = "../img/background/foto10.jpg";
    
    tab[2].setAttribute("class", "foto10");
	
	tab[3] = new Image();
        
    tab[3].src = "../img/background/default.jpg";
	
	tab[3].setAttribute("class", "default");
                    
    $("#background-photo").css({
        
        "width": "100%",
        "height": "100vh",
        "position": "fixed",
        "transition": "2s",
        "z-index": "-1",
        
    }).attr("class", "default-foto");

    setInterval(function(){
        
        let position = Math.floor(Math.random() * tab.length);
                
        $("#background-photo").attr("class", tab[position].getAttribute("class")).css({
            
            "background": "url("+tab[position].src+")",
            "background-size": "100% 100%"

        });
             
    },8000);
    
    mobileMenu("#menu-mobile > li:first-child", "#menu-mobile > li:first-child");
    mobileMenu("#menu-mobile > li:nth-child(2)", "#uslugi-mobile", "#uslugi-mobile");
    mobileMenu("#menu-mobile > li:nth-child(3)", "#menu-mobile > li:nth-child(3)");
    mobileMenu("#menu-mobile > li:nth-child(4)", "#menu-mobile > li:nth-child(4)");
    mobileMenu("#menu-mobile > li:nth-child(5)", "#menu-mobile > li:nth-child(5)");    
    menuDesktopHover("#menu-desktop > li:nth-child(2)", "#uslugi-desktop", "#menu-desktop > li ul"); 
    secondLevelMenu("#menu-mobile > li:first-child", "#home-page");
	secondLevelMenu("#backtohome", "#home-page");
    secondLevelMenu("#menu-desktop > li:first-child", "#home-page");
    secondLevelMenu("#menu-mobile > li:nth-child(3)", "#contact");
    secondLevelMenu("#menu-desktop > li:nth-child(3)", "#contact");
    secondLevelMenu("#menu-mobile > li:nth-child(4)", "#dane-firmy");
    secondLevelMenu("#menu-desktop > li:nth-child(4)", "#dane-firmy");
	secondLevelMenu("#menu-mobile > li:nth-child(5)", "#company");
    secondLevelMenu("#menu-desktop > li:nth-child(5)", "#company");
    secondLevelMenu("#uslugi-mobile li:first-child", "#skup_odpadow");
	secondLevelMenu("#uslugi-mobile li:nth-child(2)", "#obsluga");
	secondLevelMenu("#uslugi-mobile li:nth-child(3)", "#posrednictwo");
	secondLevelMenu("#uslugi-mobile li:nth-child(4)", "#niszczenie");
	secondLevelMenu("#uslugi-mobile li:nth-child(5)", "#outsourcing");
	secondLevelMenu("#uslugi-mobile li:nth-child(6)", "#reglanulaty");
    secondLevelMenu("#uslugi-desktop li:first-child", "#skup_odpadow");
	secondLevelMenu("#uslugi-desktop li:nth-child(2)", "#obsluga");
	secondLevelMenu("#uslugi-desktop li:nth-child(3)", "#posrednictwo");
	secondLevelMenu("#uslugi-desktop li:nth-child(4)", "#niszczenie");
	secondLevelMenu("#uslugi-desktop li:nth-child(5)", "#outsourcing");
	secondLevelMenu("#uslugi-desktop li:nth-child(6)", "#reglanulaty");
		
    $("#hamburger-menu").click(function(){
		
		$(this).fadeOut(500).css({"overflow": "scroll"});;
				
		$("#menu-mobile").fadeIn(500).css({"overflow": "scroll"});
				
		$("#hamburger-menu-after-click").fadeIn(500);
		
		document.body.style.overflow = "hidden";
	});
	
	$("#hamburger-menu-after-click").click(function(){
		
		$(this).fadeOut(500);
		
		$("#menu-mobile").fadeOut(500);
		
		$("#hamburger-menu").fadeIn(500);
		
		document.body.style.overflow = "auto";
		
	});
    
    lc_lightbox('.elem', {
		  	wrap_class: 'lcl_fade_oc',
		  	gallery : true, 
		  	thumb_attr: 'data-lcl-thumb', 
		  	skin: 'minimal',
		
    });
    
    lc_lightbox('.elem2', {
		  	wrap_class: 'lcl_fade_oc',
		  	gallery : true, 
		  	thumb_attr: 'data-lcl-thumb', 
		  	skin: 'minimal',
		
    });
});