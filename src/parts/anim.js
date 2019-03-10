export default function anim (){

    // Box About me
    let btn_about = document.querySelector('.about'),
    btn_main = document.querySelectorAll('.main'),
    card = document.querySelector('.card');

    btn_about.addEventListener('click', ()=>{
            card.classList.add('active');
    });

    for (let i=0; i < btn_main.length; i++) {
        btn_main[i].addEventListener('click', ()=>{
            card.classList.remove('active');
        });
    }
        
    // Portfolio & Hobby

    let	boxPf = document.querySelector('.box_pf'),
        boxPortfolio = document.querySelector('.box_portfolio'),
        btnOn = document.querySelector('.portfol'),
        btnOff = document.querySelector('.main_portf');


    function hidden (item, b){
            // box_pf.style.display = 'none';
        item.style.display = 'none';
            // box_portfolio.classList.remove('portf_off');
        b.classList.remove('portf_off');
            
    }

    function displayOn (item){
        item.classList.remove('portf_on');
    }

    function portfHidden(){
        hidden(boxPf, boxPortfolio);
    }

    // function portfHidden (){
    //     box_pf.style.display = 'none';
    //     box_portfolio.classList.remove('portf_off');
    // }

    function portfOn (){
        // box_portfolio.classList.remove('portf_on');
        displayOn(boxPortfolio);
    }

    btnOff.addEventListener('click', () =>{
        boxPortfolio.classList.add('portf_off');
        setTimeout(portfHidden, 1200);
    });

    btnOn.addEventListener('click', ()=> {
        boxPf.style.display = 'block';
        boxPortfolio.classList.add('portf_on');
        setTimeout(portfOn, 1400);
    });

    // Hobby box

    let boxHb = document.querySelector('.box_hb'),
        boxHobby = document.querySelector('.box_hobby'),
        btnOnHb = document.querySelector('.hobby'),
        btnOffHb = document.querySelector('.main_hobby');

    function hobbyOn (){
        // box_portfolio.classList.remove('portf_on');
        displayOn(boxHobby);
    }

    function hobbyHidden(){
        hidden(boxHb, boxHobby);
    }

    btnOnHb.addEventListener('click', ()=> {
        boxHb.style.display = 'block';
        boxHobby.classList.add('portf_on');
        setTimeout(hobbyOn, 1400);
    });

    btnOffHb.addEventListener('click', () =>{
        boxHobby.classList.add('portf_off');
        setTimeout(hobbyHidden, 1200);
    });
}