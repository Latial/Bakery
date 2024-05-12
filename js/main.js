(function($) {
    "use strict"; // Start of use strict

    let slajderId = ['img0','img1','img2'];

    for(let i = 0; i< slajderId.length;i++ ) {
        let slajder = `<div class="single-slide item" id = "${slajderId[i]}" >
            <div class="slider-content-area">  
                    <div class="row">
                            <div class="slide-content-wrapper text-center">
                                <div class="slide-content">
                                    <img class="classic" src="img/logo/cemrebakerylogo.png">
                                    <h3>Restoraunt MAKES </h3>
                                    <h2>A Taste Of  The Good Life</h2>
                                    <p>Welcome to our lovley Restoraunt. You can make a reservation online or give us a call. We will be waiting for you</p>

                                    <a class="default-btn" href="about.html">Learn more</a>
                                    <img class="classic" src="img/new/icon.png">

                                </div>
                            </div>
                        </div>
        </div>
        <!-- Start Slider Content -->
    </div>`

    document.querySelector("#slidermain").innerHTML += slajder;
    }

    let meniItems = ['Home','Offers','About','Portfolio','Testimonial','Blog','Contact','Address'];

    for(let i = 0; i < meniItems.length; i++) {

        if(i == 3) {       
            let meni =  `<li class="nav-item"><a href="https://upbeat-boyd-2938c5.netlify.app/" target="_blank" class="nav-link text-uppercase font-weight-bold js-scroll-trigger">${meniItems[i]}</a></li>`
            
            document.querySelector("#meni").innerHTML += meni;
        }

        else {
        let meni = `<li class="nav-item"><a href="#section${i}" class="nav-link text-uppercase font-weight-bold js-scroll-trigger">${meniItems[i]}</a></li>`
            document.querySelector("#meni").innerHTML += meni;
        }
    }

    let offers = [
        { 
            "offersItemsText" : "Up to 20% off",
            "specialOffers" : "December specal offer",
            "linkSpecial" : "#",
            "text" : "Click here if you want to see meals that are discounted"
        },
        { 
            "offersItemsText" : "Free dinner!",
            "specialOffers" : "CLick to find out more!",
            "linkSpecial" : "#",
            "text" : "Pay 2 reservations and get the next one compleatly free of charge"
        },
        { 
            "offersItemsText" : "New Customer?",
            "specialOffers" : "Learn more about us",
            "linkSpecial" : "#",
            "text" : "Click here if you would like to read more about who we are."
        }
    ]
    
    for(let i = 0; i < offers.length; i++) {
        let special = `<a href = "${offers[i].linkSpecial}">
        <div class="col-md-4 col-sm-4 col-xs-12">
            <div class="panel panel-default">
                <div class="panel-body colorfullPanel text-center">
                    <h3>${offers[i].offersItemsText}</h3>
                    <h2><span>${offers[i].specialOffers}</span>
                        <img class="classic" src="img/new/icon.png">

                    </h2>
                    <p>${offers[i].text}</p>                    
                </div>
            </div>
        </div>
    </a>`

        document.querySelector("#specialoffers").innerHTML += special
    }

    let headLines = [
        {
            "images" : {
                "src" : "/img/shape/shape1.png",
                "alt" : "shape01"
            },
            "headLine" : "Delivery to your house",
            "textForHeadline" : "Delivery is complitly free for the first 15 orders. You can send us a messege with a form provided under.We will give you a call to ask for a address and to comfirm your order. Thank you for chosing us, you made a right choice."
        },
        {
            "images" : {
                "src" : "/img/shape/shape2.png",
                "alt" : "shape02"
            },
            "headLine" : "Are prices are fair",
            "textForHeadline" : "We believe that our prices are fair. Our managment team tries their hardest to provide fair prices whilekeeping the cost for us low and giving us profit. If you have a complain about the prices you can contact us bellow."
        },
        {
            "images" : {
                "src" : "/img/shape/shape3.png",
                "alt" : "shape03"
            },
            "headLine" : "Serve You Since 1988",
            "textForHeadline" : "Our restoraunt has been established and open for public since 1988. Throughout the years we have meet, employed and served menysatisfied customers."
        }
    ]
    
    for (let i = 0; i < headLines.length; i++) {
        let about = `<div class="col-md-4 col-sm-4 col-xs-12">
        <div class="row">
            <div class="col-md-12 minHeightProp">
                <img class="imgback" src="${headLines[i].images.src}" alt = "${headLines[i].images.alt}">
            </div>
            <div class="col-md-12">
                <div class="text-center">
                    <span>${headLines[i].headLine}</span>
                    <p>${headLines[i].textForHeadline}</p>                                
                    </div> 
            </div> 
        </div>
    </div>`

    document.querySelector("#aboutUs").innerHTML += about
    }

    let bestCakes = [
        {
            "name" : "Red Dust Cake",
            "imgages" : {
                "src" : "img/bestoffers/cake01.jpg",
                "alt" : "Cake01"
            },
            "secondName" : "Red Dust Cake",
            "price" : "10"
        },
        {
            "name" : "Donut Cake",
            "imgages" : {
                "src" : "img/bestoffers/cake02.jpg",
                "alt" : "Cake02"
            },
            "secondName" : "Donut Cake",
            "price" : "12"
        },
        {
            "name" : "Cookie Cake",
            "imgages" : {
                "src" : "img/bestoffers/cake03.jpg",
                "alt" : "Cake03"
            },
            "secondName" : "Cookie Cake",
            "price" : "14"
        },
        {
            "name" : "White Plazma Cake",
            "imgages" : {
                "src" : "img/bestoffers/cake04.jpg",
                "alt" : "Cake04"
            },
            "secondName" : "White Plazma Cake",
            "price" : "16"
        },
        {
            "name" : "Cherry Cake With Chocolate",
            "imgages" : {
                "src" : "img/bestoffers/cake05.jpg",
                "alt" : "Cake05"
            },
            "secondName" : "Cherry Cake With Chocolate",
            "price" : "18"
        },
        {
            "name" : "Rainbow Sweet Cake",
            "imgages" : {
                "src" : "img/bestoffers/cake07.jpg",
                "alt" : "Cake07"
            },
            "secondName" : "Rainbow Sweet Cake",
            "price" : "20"
        }
    ]

    for(let i = 0; i < bestCakes.length;i++) {
        let cakes = `<div class="post-slide">
        <div class="post-img">
            <div class="post-abs"><p>${bestCakes[i].name}</p></div>
            <img src="${bestCakes[i].imgages.src}" alt="${bestCakes[i].imgages.alt}">
        </div>
        <h3 class="post-title"><a href="#">${bestCakes[i].secondName}</a></h3>
        <p class="post-description">
           ${bestCakes[i].price}$
        </p>
    </div>`;

    document.querySelector("#news-slider").innerHTML += cakes;
    }

    let testemonials = [
        {
            "comment" : "A nice place with good food and warm atmosphere, the staff was also very kind",
            "name" : "David Morgan",
            "ocupation" : "Food Critic",
        },
        {
            "comment" : "Nice restoraunt for hangouts and dates, with top-quality food and drinks",
            "name" : "Tomasz Frederick",
            "ocupation" : "Student",
        },
        {
            "comment" : "Polite and nice service with top qulity food and coffie.",
            "name" : "Sabina Greig",
            "ocupation" : "Senior Programmer",
        }
    ]

    for(let i = 0; i < testemonials.length; i++) {
        let comments = `<div class="col-md-12 col-sm-12 col-xs-12 noPadding text-center">
        <div class="single-testimonial">
            <div class="testimonial-info">
                <div class="testimonial-content">
                    <p>${testemonials[i].comment}</p>
                    <h4>${testemonials[i].name}</h4>
                    <h5>${testemonials[i].ocupation}</h5>
                </div>
            </div>
        </div>
    </div> `
    
    document.getElementById("customerFeedback").innerHTML += comments

    }

    let informationsWithLinks = [
        {
            "link" : "#aboutUs",
            "text" : "About Our Shop"
        },
        {
            "link" : "#news-slider",
            "text" : "Top Sellers"
        },
        {
            "link" : "#newss",
            "text" : "Our Blog"
        },
        {
            "link" : "#newMeal",
            "text" : "New Products"
        },
        {
            "link" : "#aboutUs",
            "text" : "Secure Shopping"
        }
    ]

    for(let i = 0; i < informationsWithLinks.length; i++) {
        let infoUsefull = `                                    <li class="footer-section">
        <div class="row">
            <div class="col-md-2 col-sm-2 col-xs-2">
                <div class="footer-icon"></div>
            </div>
            <div class="col-md-10 col-sm-10 col-xs-10">
                <a href="${informationsWithLinks[i].link}"><p>${informationsWithLinks[i].text}</p></a>
            </div>
        </div>
    </li> `
    
    document.getElementById("informations").innerHTML += infoUsefull;

    }

    /*Regularni izrazi*/ 
    let url = window.location.pathname;

    if(url == "/" || url == "/index.html"){
        let button = document.querySelector('#mainButton');

        button.addEventListener("click", function(){
            let field = document.querySelector("#name");
        
            var Name = /^[A-ZŠĆČŽĐ]{1}[a-zčćžšđ]{2,9}(\s[A-ZŠĆČŽĐ]{1}[a-zčćžšđ]{2,9})?$/;

            if(!Name.test(field.value)) {
                let nameWrong = document.getElementById('name');
                nameWrong.classList.add("alert");
                nameWrong.classList.add("alert-danger");
                field.nextElementSibling.innerHTML = "Please enter your name correctly";
            }
            else {
                let right = document.getElementById('name');
                right.classList.remove("alert");
                right.classList.remove("alert-danger");
                field.nextElementSibling.innerHTML = "";
                $('paragraphForm').css('display','none');
            }

            let filed2 = document.querySelector("#surname");
            var surName = /^[A-ZŠĆČŽĐ]{1}[a-zčćžšđ]{2,9}(\s[A-ZŠĆČŽĐ]{1}[a-zčćžšđ]{2,9})?$/;

            if (!surName.test(filed2.value)) {
                let surnameWrong = document.getElementById('surname');
                surnameWrong.classList.add("alert");
                surnameWrong.classList.add("alert-danger");
                filed2.nextElementSibling.innerHTML = "Please enter your Surname correctly";
            }
            else {
                let right = document.getElementById('surname');
                right.classList.remove("alert");
                right.classList.remove("alert-danger");
                filed2.nextElementSibling.innerHTML = "";
                $('paragraphForm').css('display','none');
            }            
            
            let emailFiled = document.getElementById('email');

            let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

            if(!emailPattern.test(emailFiled.value)) {
                let emailPatternWrong = document.getElementById('email');
                emailPatternWrong.classList.add("alert");
                emailPatternWrong.classList.add("alert-danger");
                emailFiled.nextElementSibling.innerHTML = "Please enter a valid email"; 
            }
            else {
                let emalPatternRight = document.getElementById('email');
                emalPatternRight.classList.remove("alert");
                emalPatternRight.classList.remove("alert-danger");
                emailFiled.nextElementSibling.innerHTML = "";
                $('paragraphForm').css('display','none');
            }
        
            let phoneVal = document.getElementById('phone');

            var phone = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;

            if(!phone.test(phoneVal.value)) {
                let phoneWrong = document.getElementById('phone');
                phoneWrong.classList.add("alert");
                phoneWrong.classList.add("alert-danger");
                phoneVal.nextElementSibling.innerHTML = "Please enter a valid phone number"; 
            }
            else {
                let phoneRight = document.getElementById('phone');
                phoneRight.classList.remove("alert");
                phoneRight.classList.remove("alert-danger");
                phoneVal.nextElementSibling.innerHTML = "";
                $('paragraphForm').css('display','none');
            }
        
        })
    }

    function maxLength(el) {    
        if (!('maxLength' in el)) {
            var max = el.attributes.maxLength.value;
            el.onkeypress = function () {
                if (this.value.length >= max) return false;
            };
        }
    }
    
    maxLength(document.getElementById("messageEl"));
    
    /*
    let imgPremium = ['img/bestoffers/cake01.jpg','img/bestoffers/cake02.jpg','img/bestoffers/cake03.jpg','img/bestoffers/cake04.jpg','img/bestoffers/cake05.jpg','img/bestoffers/cake07.jpg'];
    let premiumHeadLine = [];
    let price = ['$12','$20','$18','$8','$26','$19.55'];

    for (let i =0; i<imgPremium.length;i++) {
        let cakes = `<div class="post-slide">
        <div class="post-img">
            <div class="post-abs"><p>Progresso İtalian Style</p></div>
            <img src="${imgPremium[i]}" alt="cake">
        </div>
        <h3 class="post-title"><a href="#">Progresso İtalian Style</a></h3>
        <p class="post-description">
           12$
        </p>
    </div>`

    document.getElementById("news-slider").innerHTML += cakes;
    }*/
    

    $(window).on('scroll', function () {
        if ( $(window).scrollTop() > 10 ) {
             $('.navbar').addClass('active');
        } else {
             $('.navbar').removeClass('active');
        }
    });

    $('.testimonial-area').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        dots: false,
        autoHeight:true,
        pagination: true,
        navText : ["<img src='./img/slider/rightarrow.png' />","<img src='./img/slider/leftarrow.png' />"],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })

    
    $('.main-slider').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        dots: false,
        pagination: true,
        autoHeight: false,
//        autoHeightClass: 'owl-height',
        navText : ["<img src='./img/slider/rightarrow.png' />","<img src='./img/slider/leftarrow.png' />"],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })



      
        // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
          if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
              $('html, body').animate({
                scrollTop: (target.offset().top - 56)
              }, 1000, "easeInOutExpo");
              return false;
            }
          }
        });
      
    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function() {
        $('.navbar-collapse').collapse('hide');
    });
    
    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
        target: '.navbar',
        offset: 100,

    });
      

    // Initialize and add the map

     // End of use strict

})(jQuery);

function googleMap() {
    // The location of Uluru
    var uluru = {lat: -25.344, lng: 131.036};
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 4, center: uluru});
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({position: uluru, map: map});
    }
    "use strict"; // Start of use strict
    
    $('.news-slider').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        autoHeight:false,
        autoHeightClass: 'owl-height',
        pagination: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    })
