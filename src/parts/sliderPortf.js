export default function sliderPortf(){
    let prev = document.querySelector('.left-c'),
        next = document.querySelector('.right-c'),
        slideCert = document.querySelectorAll('.cert_img'),
        prevS = document.querySelector('.left-s'),
        nextS = document.querySelector('.right-s'),
        slideSite = document.querySelectorAll('.site_link'),
        slideIndex = 1;


        showSlides(slideIndex, slideCert);
        showSlides(slideIndex, slideSite);
        //функция скрывающая слайды и показывающая нужный слайд
        function showSlides(n, item) {
            if (n > item.length) {
                slideIndex = 1;
            }
            if (n < 1) {
                slideIndex = item.length;
            }
        
            // slideCert.forEach((item) => item.classList.remove('slide_on'));
            item.forEach((item) => item.classList.remove('slide_on'));

            // slideCert[slideIndex - 1].classList.add('slide_on'); //показываем нужный слайд при загрузке (сейчас 1-1=0) т е самый первый
            item[slideIndex - 1].classList.add('slide_on');
        }
        //функция увеличивающая slideIndex

        function plusSlides(n, item) {
            showSlides(slideIndex += n, item);
        }

        prev.addEventListener('click', function () {
            plusSlides(-1, slideCert);
        });
        
        next.addEventListener('click', function () {
            plusSlides(1, slideCert);
        });

        prevS.addEventListener('click', function () {
            plusSlides(-1, slideSite);
        });
        
        nextS.addEventListener('click', function () {
            plusSlides(1, slideSite);
        });
}