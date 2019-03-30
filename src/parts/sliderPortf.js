export default function sliderPortf(){
    let prev = document.querySelector('.left-c'),
        next = document.querySelector('.right-c'),
        slideCert = document.querySelectorAll('.cert_img'),
        slideIndex = 1;


        showSlides(slideIndex);
        //функция скрывающая слайды и показывающая нужный слайд
        function showSlides(n) {
            if (n > slideCert.length) {
                slideIndex = 1;
            }
            if (n < 1) {
                slideIndex = slideCert.length;
            }
        
            slideCert.forEach((item) => item.classList.remove('slide_on'));
        
            slideCert[slideIndex - 1].classList.add('slide_on'); //показываем нужный слайд при загрузке (сейчас 1-1=0) т е самый первый
        }
        //функция увеличивающая slideIndex

        function plusSlides(n) {
            showSlides(slideIndex += n);
        }

        prev.addEventListener('click', function () {
            plusSlides(-1);
        });
        
        next.addEventListener('click', function () {
            plusSlides(1);
        });
}