import anim from './parts/anim';
import lang from './parts/lang';
import sliderHobby from './parts/sliderHobby';
import sliderPortf from './parts/sliderPortf';
import hideMenu from './parts/hideMenu';
import zoomSlides from './parts/zoom';

window.addEventListener('DOMContentLoaded', function(){
	'use strict';
	anim();
	lang();
	sliderHobby();
	sliderPortf();
	hideMenu();
	zoomSlides();
});