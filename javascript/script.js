const app = new Vue ({
    el: '#app',
    data: {
        indexImage: 0,
        direction: 1,
        timeSlider: 2 * 1000,
        idInterval: 0,
        isAutoplayActive: true,
        objSlide: [
            {
                image: '01.webp',
                title: "Marvel's Spiderman Miles Morale",
                text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
            },
            {
                image: '02.webp',
                title: 'Ratchet & Clank: Rift Apart',
                text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
            },
            {
                image: '03.webp',
                title: 'Fortnite',
                text: 'Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.',
            },
            {
                image: '04.webp',
                title: 'Stray',
                text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
            },
            {
                image: '05.webp',
                title: "Marvel's Avengers",
                text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
            },
        ],
    },
    methods: {
        changeSlide(direction) {
            if (direction > 0) {
                clearInterval(this.idInterval);
                this.startAutoplay();

                this.indexImage++;
                if (this.indexImage === this.objSlide.length) {
                    this.indexImage = 0;
                }

                console.log('sto andando verso giù!'); //DEBUG

            } else {
                clearInterval(this.idInterval);
                this.startAutoplay();
                
                if (this.indexImage === 0) {
                    this.indexImage = this.objSlide.length;
                }
                this.indexImage--;
                
                this.direction = -1;
                
                console.log('sto andando verso su!'); //DEBUG
            }
        },
        
        setActiveIndex(index) {
            this.indexImage = index;

            console.log('hai selezionato l\'immagine:', index); //DEBUG
        },

        controlAutoPlay() {
            if(this.isAutoplayActive) {
                this.stopAutoplay()
            } else {
                this.startAutoplay()
            }
        },

        stopAutoplay() {
            clearInterval(this.idInterval);
            this.isAutoplayActive = false;
        },

        startAutoplay() {
            this.idInterval = setInterval(() => this.changeSlide(this.direction), this.timeSlider);
            this.isAutoplayActive = true;
        },

        invertAutoplay() {
            this.direction *= -1;

            console.log('ho cambiato direzione'); //DEBUG
        },

        pauseAutoplay() {
            this.stopAutoplay();

            console.log('sei dentro lo slide'); //DEBUG
        },

        resumeAutoplay() {
            if(this.isAutoplayActive) {
                this.startAutoplay();
            }

            console.log('sei uscito dallo slide'); //DEBUG
        },
    },

    mounted() {
        this.isAutoplayActive ? this.startAutoplay() : '';
    }
});