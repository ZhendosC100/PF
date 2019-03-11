export default function lang (){
    let selectLang = document.querySelectorAll('.lang_select'),
        aboutMain = document.querySelectorAll('.about_main'),
        portfMain = document.querySelectorAll('.portf_main'),
        hobbyMain = document.querySelectorAll('.hobby_main'),
        techMain = document.querySelectorAll('.tech_main'),
        contMain = document.querySelectorAll('.cont_main'),
        portfBx = document.querySelectorAll('.portf-bx '),
        titleAbout = document.querySelectorAll('.lng_opt-about'),
        backBx = document.querySelectorAll('.back-bx'),
        hobbyBx = document.querySelectorAll('.hobby_bx');

        
        let langNonActive = (b, name_box, z) =>{
            for(let i = b; i < name_box.length; i++){
                name_box[i].classList.remove(z);
            }
        };
        
        let langActive = (a, name_box, z) => {
            name_box[a].classList.add(z);
        };

    for(let i=0; i < selectLang.length; i++){
        let k=i;
        selectLang[i].addEventListener('click', ()=>{
            // Selector of languages
            langNonActive(0, selectLang,'active_select'); 
            langActive(k, selectLang, 'active_select');

            //Menu languages
            langNonActive(0, aboutMain, 'active_lng');
            langNonActive(0, portfMain, 'active_lng');
            langNonActive(0, hobbyMain, 'active_lng');
            langNonActive(0, techMain, 'active_lng');
            langNonActive(0, contMain, 'active_lng');
            
            langActive(k, aboutMain, 'active_lng');
            langActive(k, portfMain, 'active_lng');
            langActive(k, hobbyMain, 'active_lng');
            langActive(k, techMain, 'active_lng');
            langActive(k, contMain, 'active_lng');

            //About languages
            langNonActive(0, backBx, 'active_lng');
            langNonActive(0, titleAbout, 'active_title');

            langActive(k, backBx, 'active_lng');
            langActive(k, titleAbout, 'active_title');

            //Portfolio languages
            langNonActive(0, portfBx, 'active_lng');
            
            langActive(k, portfBx, 'active_lng');

            //Hobby languages
            langNonActive(0, hobbyBx, 'active_hobby');

            langActive(k, hobbyBx, 'active_hobby');
        });
    }
}