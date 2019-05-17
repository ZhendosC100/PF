export default function hideMenu(){

    //main box

    let mainMenu = document.querySelector('.hide_main'),
        boxMenu = document.querySelector('.box_menu');

        mainMenu.addEventListener('click', function(){

            let turnOff = setTimeout(function(){
                boxMenu.style.display = 'none';
            }, 7000);

            if (boxMenu.style.display == 'flex'){
                boxMenu.style.display = 'none';
                clearTimeout(turnOff);
            }else {
                boxMenu.style.display = 'flex';
            }
            

        });


    //hobby box
    let menu = document.querySelector('.hide_menu'),
        interests = document.querySelector('.interests');

        function hideOff (item, b, c, d){
            item.addEventListener(b, function(){

                d.style.display = c;
    
            });
        }

        hideOff(menu, 'mouseover', 'flex', interests);
        hideOff(menu, 'mouseout', 'none', interests);
}