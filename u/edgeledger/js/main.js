function initMap() {
    //Localizacion
    const loc = {
        lat: 42.361145,
        lng: -71.057083
    };
    //centered map on location
    const mao = new google.maps.Map(document.querySelector('.map'), {
        zoom: 14,
        center: loc
    });
    //El marcador de la localización
    const marker = new google.maps.Marker({
        position: loc,
        map: map
    })
}

// Sticky menu background
window.addEventListener('scroll', function () {
    if (this.window.scrollY > 150) {
        this.document.querySelector('#navbar').style.opacity = 0.8
    } else {
        this.document.querySelector('#navbar').style.opacity = 1
    }
})

// Smooth Scrolling

$('#navbar a, .btn').on('click', function (event) {
    if (this.h !== '') {
        event.preventDefault();

        const hash = this.hash;

        $('html, body').animate({
                scrollTop: $(hash).offset().top - 100
            },
            800
        );
    }
})