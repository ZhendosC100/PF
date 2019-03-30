export default function lang (){
    let selectLang = document.querySelectorAll('.lang_select'),
        aboutMain = document.querySelectorAll('.about_main'),
        portfMain = document.querySelectorAll('.portf_main'),
        hobbyMain = document.querySelectorAll('.hobby_main'),
        techMain = document.querySelectorAll('.tech_main'),
        contMain = document.querySelectorAll('.cont_main'),
        mainText = document.querySelectorAll('.lng_opt-info_text'),
        portfBx = document.querySelectorAll('.portf-bx '),
        titleAbout = document.querySelectorAll('.lng_opt-about'),
        titlePortf = document.querySelectorAll('.lng_opt-portf'),
        certBox = document.querySelectorAll('.lng_opt-cert'),
        titleHobby = document.querySelectorAll('.lng_opt-hobby'),
        backBx = document.querySelectorAll('.back-bx'),
        description = document.querySelectorAll('.lng_opt-about_descr'),
        hobbyBx = document.querySelectorAll('.hobby_bx'),
        interestsBox = document.querySelectorAll('.lng-opt_hobby'),
        techBox = document.querySelectorAll('.lng_opt-stack'),
        contactBox = document.querySelectorAll('.lng_opt-cont');

        
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

            //Main page text
            langNonActive(0, mainText, 'active_lng');
            langActive(k, mainText, 'active_lng');

            //About languages
            langNonActive(0, backBx, 'active_lng');
            langNonActive(0, titleAbout, 'active_title');
            langNonActive(0, description, 'active_lng');

            langActive(k, backBx, 'active_lng');
            langActive(k, titleAbout, 'active_title');
            langActive(k, description, 'active_lng');

            //Portfolio languages
            langNonActive(0, portfBx, 'active_lng');
            langNonActive(0, titlePortf, 'active_title');
            langNonActive(0, certBox, 'active_title');
            
            langActive(k, portfBx, 'active_lng');
            langActive(k, titlePortf, 'active_title');
            langActive(k, certBox, 'active_title');

            //Hobby languages
            langNonActive(0, hobbyBx, 'active_hobby');
            langNonActive(0, titleHobby, 'active_title-hobby');
            langNonActive(0, interestsBox, 'active_interests');

            langActive(k, hobbyBx, 'active_hobby');
            langActive(k, titleHobby, 'active_title-hobby');
            langActive(k, interestsBox, 'active_interests');

            //Technologies languages
            langNonActive(0, techBox, 'active_popup');
            langActive(k, techBox, 'active_popup');

            //Contact languages
            langNonActive(0, contactBox, 'active_popup');
            langActive(k, contactBox, 'active_popup');
        });
    }
}