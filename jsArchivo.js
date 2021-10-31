
const componentesVue = new Vue({
    el: '#componentesVue',
    data: {
        menu: 'menuvue',
        footbar: 'footbarvue',
        lorem: 'loremvue',
        sucursales:[
         {barrio:"Villa Devoto", direccion:"Fco Beiro 4800 - CABA", iframe:'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.7422142149053!2d-58.52052268521397!3d-34.61067956537258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb7d0c18122cf%3A0x16e318de5f9e91fa!2sAv.%20Francisco%20Beir%C3%B3%204800%2C%20C1419HZW%20CABA!5e0!3m2!1ses!2sar!4v1629241755594!5m2!1ses!2sar" allowfullscreen="" loading="lazy"></iframe>'},
         {barrio:"Urquiza", direccion:"Triunvirato 3000 - CABA", iframe:'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.7662355967927!2d-58.46692788521494!3d-34.58478106400244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb60a440ef8fb%3A0x4e34d3fd9e77ca4b!2sAv%20Triunvirato%203000%2C%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1629241861100!5m2!1ses!2sar" allowfullscreen="" loading="lazy"></iframe>'},
         {barrio:"Belgrano", direccion:"Cabildo 3200 - CABA", iframe:'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3286.027031498418!2d-58.46750898521614!3d-34.5528709623155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb682dda080b7%3A0x5467664e274a1d00!2sAv.%20Cabildo%203200%2C%20C1429AAP%20CABA!5e0!3m2!1ses!2sar!4v1629241889566!5m2!1ses!2sar" allowfullscreen="" loading="lazy"></iframe>'},
       ]

    },
    components: {
        'menuvue': {
            template: `<nav>
                    <a href="index.html">Home</a>
                    <a href="acerca.html">Acerca de</a>
                    <a href="contacto.html">Contacto</a>
                    <a href="registrese.html">Regístrese</a>
                    <a href="sucursales.html">Sucursales</a>
                    <a href="nuestros_clientes.html">Nuestros clientes</a>
                </nav>`
        },
        'footbarvue': {
            template: `<footer>
        <p>
            <a href="https://twitter.com/?lang=es"><i class="fab fa-twitter"></i></a>
            <a href="https://es-la.facebook.com/"><i class="fab fa-facebook-f"></i></a>
            <a href="https://ar.pinterest.com/"><i class="fab fa-pinterest"></i></a>
            <a href="https://www.instagram.com/?hl=es"><i class="fab fa-instagram"></i></a>
            <a href="https://www.linkedin.com/"><i class="fab fa-linkedin-in"></i></a>
        </p>
        <p>Derechos reservados @2021</p>
    </footer>`
},
'loremvue': {
    template: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`
}

    }
});
