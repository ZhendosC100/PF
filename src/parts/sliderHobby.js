export default function sliderHobby (){

    let slides = document.querySelectorAll('.slider-box'),
        prev = document.querySelector('.left'),
        next = document.querySelector('.right'),
        btnOnHb = document.querySelector('.hobby'),
        btn_mainS = document.querySelectorAll('.main_back'),
        slideIndex = 1;
    
        showSlides(slideIndex);
        //функция скрывающая слайды и показывающая нужный слайд
        function showSlides(n) {
            if (n > slides.length) {
                slideIndex = 1;
            }
            if (n < 1) {
                slideIndex = slides.length;
            }
        
            slides.forEach((item) => item.classList.remove('slide_on'));
        
            slides[slideIndex - 1].classList.add('slide_on'); //показываем нужный слайд при загрузке (сейчас 1-1=0) т е самый первый
        }
        //функция увеличивающая slideIndex

        const timeSliding = () => {
            showSlides(slideIndex += 1);
        };

        
    

    btnOnHb.addEventListener('click', () => {
        let stopSliding = setInterval(timeSliding, 5300);
            
        function plusSlides(n) {
            showSlides(slideIndex += n);
        }
                
        prev.addEventListener('click', function () {
            plusSlides(-1);
            clearInterval(stopSliding);
        });
        
        next.addEventListener('click', function () {
            plusSlides(1);
            clearInterval(stopSliding);
        });

        for(let i = 0; i < btn_mainS.length; i++){
            btn_mainS[i].addEventListener('click', () => {
                clearInterval(stopSliding);
            });
        }

    });
            
}