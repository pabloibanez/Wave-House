$(document).ready(function(){
	
	// Animated anchors
	
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 2000, 'easeOutQuart', function () {
	        window.location.hash = target;
	    });
	});
	
	// Animated text loop
	
	var items = ["Part gaming", "Part digital influencing", "Lots of incubating", "Part agency"],
    	$text = $( '#intro h2' ),
        delay = 2; //seconds
    
    function loop ( delay ) {
        $.each( items, function ( i, elm ){
            $text.delay( delay*1E3).fadeOut();
            $text.queue(function(){
                $text.html( items[i] );
                $text.dequeue();
            });
            $text.fadeIn();
            $text.queue(function(){
                if ( i == items.length -1 ) {
                    loop(delay);   
                }
                $text.dequeue();
            });
        });
    }

    loop( delay );
    
    // Autosize textarea
    
    jQuery.each(jQuery('textarea'), function() {
	    var offset = this.offsetHeight - this.clientHeight;
	 
	    var resizeTextarea = function(el) {
	        jQuery(el).css('height', 'auto').css('height', el.scrollHeight + offset);
	    };
	    jQuery(this).on('keyup input', function() { resizeTextarea(this); }).removeAttr('data-autoresize');
	});
	
	// Animations
	
	var controller = new ScrollMagic.Controller();
    
    $(function () {
		
		// Apply link
		
		var applyButton = new ScrollMagic.Scene({triggerElement: "#apply"})
						.setClassToggle("#apply-button", "hide")
						.addTo(controller);
						
		// Show animations
		
		var crest = new ScrollMagic.Scene({triggerElement: "#crest", offset: -100})
						.setClassToggle("#crest", "show")
						.addTo(controller);
						
		var whoweareh2 = new ScrollMagic.Scene({triggerElement: "#whoweare h2", offset: -100})
						.setClassToggle("#whoweare h2", "show")
						.addTo(controller);
		
		var whoweareh3 = new ScrollMagic.Scene({triggerElement: "#whoweare h3", offset: -100})
						.setClassToggle("#whoweare h3", "show")
						.addTo(controller);
		
		var backgrounds = new ScrollMagic.Scene({triggerElement: "#whoisallowed ul", offset: -100})
						.setClassToggle("#whoisallowed", "showbg")
						.addTo(controller);
						
		var whoisallowedh2 = new ScrollMagic.Scene({triggerElement: "#whoisallowed h2", offset: -100})
						.setClassToggle("#whoisallowed h2", "show")
						.addTo(controller);
		
		$(".quote").each(function() {
   
		    new ScrollMagic.Scene({triggerElement: this, offset: -100})
						.setClassToggle(this, "show")
						.addTo(controller);
		});

		$("li").each(function() {
   
		    new ScrollMagic.Scene({triggerElement: this, offset: -100})
						.setClassToggle(this, "show")
						.addTo(controller);
		});
		

		
		// define movement of panels
		var wipeAnimation = new TimelineMax()
			.fromTo(".slide2", 1, {right: "-100%"}, {right: "0%", ease: Linear.easeNone})
			.fromTo(".slide3", 1, {right: "-100%"}, {right: "0%", ease: Linear.easeNone})
			.fromTo(".slide4", 1, {right: "-100%"}, {right: "0%", ease: Linear.easeNone})
			.fromTo(".slide5", 1, {right: "-100%"}, {right: "0%", ease: Linear.easeNone})
		
		var logoAnimation = new TimelineMax()
			.fromTo(".neonrootslogo", 0.1, {opacity: "0"}, {opacity: "1"})
			.fromTo(".rootstraplogo", 0.1, {opacity: "0"}, {opacity: "1"})
			.fromTo(".neonwaveslogo", 0.1, {opacity: "0"}, {opacity: "1"})
			.fromTo(".influencers", 0.1, {opacity: "0"}, {opacity: "1"})
			.fromTo(".lifestyle", 0.1, {opacity: "0"}, {opacity: "1"});
			
		// create scene to pin and link animation
		new ScrollMagic.Scene({
				triggerElement: "#tenants",
				triggerHook: "onLeave",
				duration: "300%"
			})
			.setPin("#tenants")
			.setTween(wipeAnimation)
			.addTo(controller);
		
		new ScrollMagic.Scene({
				triggerElement: "#tenants",
				triggerHook: "onLeave",
				duration: "330%",
				offset: "-100%"
			})

			.setTween(logoAnimation)
			.addTo(controller);
		
		// Tenants logos
				
		/*var logo1 = new TimelineMax()
					.to(".tenant.neonrootslogo", 1, {opacity: "1", top: "50%", ease: Circ.easeOut})
					.to(".tenant.neonrootslogo", 1, {opacity: "0"});

		var scenelogo1 = new ScrollMagic.Scene({triggerElement: ".slide1", duration: "100%"})
						.setTween(logo1)
						.addTo(controller);
						
		var logo2 = new TimelineMax()
					.to(".tenant.rootstraplogo", 1, {opacity: "1", top: "50%", ease: Circ.easeOut})
					.to(".tenant.rootstraplogo", 1, {opacity: "0"});

		var scenelogo2 = new ScrollMagic.Scene({triggerElement: ".slide2", duration: "100%"})
						.setTween(logo2)
						.addTo(controller);
		
		var logo3 = new TimelineMax()
					.to(".tenant.neonwaveslogo", 1, {opacity: "1", top: "50%", ease: Circ.easeOut})
					.to(".tenant.neonwaveslogo", 1, {opacity: "0"});

		var scenelogo3 = new ScrollMagic.Scene({triggerElement: ".slide3", duration: "100%"})
						.setTween(logo3)
						.addTo(controller);
						
		var logo4 = new TimelineMax()
					.to(".tenant.influencers", 1, {opacity: "1", top: "50%", ease: Circ.easeOut})
					.to(".tenant.influencers", 1, {opacity: "0"});

		var scenelogo4 = new ScrollMagic.Scene({triggerElement: ".slide4", duration: "100%"})
						.setTween(logo4)
						.addTo(controller);
		
		var logo5 = new TimelineMax()
					.to(".tenant.lifestyle", 1, {opacity: "1", top: "50%", ease: Circ.easeOut})
					.to(".tenant.lifestyle", 1, {opacity: "0"});

		var scenelogo5 = new ScrollMagic.Scene({triggerElement: ".slide5", duration: "100%"})
						.setTween(logo5)
						.addTo(controller);*/
						
	});

});



