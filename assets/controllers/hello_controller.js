import { Controller } from '@hotwired/stimulus';
import Splide from '@splidejs/splide';

export default class extends Controller {
    static values = {
        id: String,
    }

     options = {
        type   : this.idValue == 'slide-4-number' ? 'slide' : 'loop',
        drag   : 'free',
        snap   : true,
        cover : false,
        lazyLoad: 'nearby',
        fixedWidth: this.idValue == 'slide-4-number' ? '33%' : '',
        pagination: false,
        perMove: 1,
         perPage: this.idValue == 'slide-4-number' ? 3 : 5,
        gap: '.5rem',
         breakpoints: {
             1000: {
                 perPage: this.idValue == 'slide-4-number' ? 1 : 2,
                 fixedWidth: this.idValue == 'slide-4-number' ? '100%' : '',
             },
             1400: {
                 perPage: this.idValue == 'slide-4-number' ? 2 : 5,
                 fixedWidth: this.idValue == 'slide-4-number' ? '' : '',
             }
         }
    }




    connect() {
        this.bindSlide();
    }

    bindSlide() {
        new Splide( `#${this.idValue}`, this.options ).mount();
    }
}
