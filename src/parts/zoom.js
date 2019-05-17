export default function zoomSlides () {
    
    let zoomSlide = document.querySelectorAll('.zoom'),
        dark = document.createElement('div'),
        img = document.createElement('img');

        img.style.cssText = 'display:flex;\
                            align-items: center;\
                            justify-content: center;\
                            margin: auto;\
                            z-index: 10; \
                            display: none;\
                            border-radius: 18px';

        dark.style.cssText = 'position: fixed;\
                                top: 0; \
                                left: 0; \
                                align-items: center;\
                                justify-content: center;\
                                width: 100%; \
                                height: 100%; \
                                z-index: 9; \
                                display: none;\
                                background-color: rgba(0, 0, 0, 0.5);';
        document.body.appendChild(dark);
        dark.appendChild(img);
        dark.classList.add('dark');

            
                
        for (let i = 0; i < zoomSlide.length; i++) {

                    
            zoomSlide[i].addEventListener('click', function(event){
                event.preventDefault();
                img.src = zoomSlide[i].getAttribute('href');
                dark.style.display = 'flex';
                img.style.display = 'flex';
                        
                let k = document.documentElement.clientWidth;
                        

                if (k < 415) {
                    img.classList.add('zoom-slide-responsive');
                } else {
                    img.classList.add('zoom-slide');
                }
                        
                       
            });    
                    
        }


        dark.addEventListener('click', () => {
            dark.style.display = 'none';
            img.style.display = 'none';
            img.classList.remove('zoom-slide');
            let k = document.documentElement.clientWidth;

            if (k < 415) {
                img.classList.remove('zoom-slide-responsive');
            }
        });

}