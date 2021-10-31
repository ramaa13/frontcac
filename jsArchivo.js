const componentesVue = new Vue({
    el: '#componentesVue',
    data: {
        menu: 'menuvue',
        footbar: 'footbarvue',
        lorem: 'loremvue',
        sucursales: [{
                barrio: "Villa Devoto",
                direccion: "Fco Beiro 4800 - CABA",
                iframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.7422142149053!2d-58.52052268521397!3d-34.61067956537258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb7d0c18122cf%3A0x16e318de5f9e91fa!2sAv.%20Francisco%20Beir%C3%B3%204800%2C%20C1419HZW%20CABA!5e0!3m2!1ses!2sar!4v1629241755594!5m2!1ses!2sar" allowfullscreen="" loading="lazy"></iframe>'
            },
            {
                barrio: "Urquiza",
                direccion: "Triunvirato 3000 - CABA",
                iframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.7662355967927!2d-58.46692788521494!3d-34.58478106400244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb60a440ef8fb%3A0x4e34d3fd9e77ca4b!2sAv%20Triunvirato%203000%2C%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1629241861100!5m2!1ses!2sar" allowfullscreen="" loading="lazy"></iframe>'
            },
            {
                barrio: "Belgrano",
                direccion: "Cabildo 3200 - CABA",
                iframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3286.027031498418!2d-58.46750898521614!3d-34.5528709623155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb682dda080b7%3A0x5467664e274a1d00!2sAv.%20Cabildo%203200%2C%20C1429AAP%20CABA!5e0!3m2!1ses!2sar!4v1629241889566!5m2!1ses!2sar" allowfullscreen="" loading="lazy"></iframe>'
            },
        ]
    },
    components: {
        'menuvue': {
            template: `<nav class="item3-cabezera">
          <a href="index.html"> Home </a>
          <a href="contacto.html"> Contacto </a>
         <a href="sucursales.html"> Sucursales </a>
        </nav>`
        },
        'loremvue': {
            template: `<p>Lorem ipsum dolor sit amet et delectus accommodare his consul copiosae legendos at vix ad putent delectus delicata usu. Vidit dissentiet eos cu eum an brute copiosae hendrerit. Eos erant dolorum an. Per facer affert ut. Mei iisque mentitum moderatius cu. Sit munere facilis accusam eu dicat falli consulatu at vis. Te facilisis mnesarchum qui</p>`
        },

        'footbarvue': {
            template: ` <section class="foot">
                        <a href="https://twitter.com/?lang=es"><i class="fab fa-twitter"></i></a>
                        <a href="https://es-la.facebook.com/"><i class="fab fa-facebook-f"></i></a>
                        <a href="https://ar.pinterest.com/"><i class="fab fa-pinterest"></i></a>
                        <a href="https://www.instagram.com/?hl=es"><i class="fab fa-instagram"></i></a>
                        <a href="https://www.linkedin.com/"><i class="fab fa-linkedin-in"></i></a>
                    </section>`
        }

    }
});
