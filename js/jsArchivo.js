const componentesVue = new Vue({
    el: '#componentesVue',
    data: {
        menu: 'menuvue',
        footbar: 'footbarvue',
        lorem: 'loremvue'
    },
    components: {
        'menuvue': {    // Código reutilizable para el menu.
            template: `<nav class="item3-cabezera">
          <a href="index.html"> Home </a>
          <a href="contacto.html"> Contacto </a>
         <a href="sucursales.html"> Sucursales </a>
        </nav>`
        },
        'loremvue': { // Código reutilizable para Lorem Ipsum.
            template: `<p>Lorem ipsum dolor sit amet et delectus accommodare his consul copiosae legendos at vix ad putent delectus delicata usu. Vidit dissentiet eos cu eum an brute copiosae hendrerit. Eos erant dolorum an. Per facer affert ut. Mei iisque mentitum moderatius cu. Sit munere facilis accusam eu dicat falli consulatu at vis. Te facilisis mnesarchum qui</p>`
        },

        'footbarvue': { // Código reutilizable el foot.
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
