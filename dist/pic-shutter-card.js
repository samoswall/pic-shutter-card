// pic-shutter-card version 1.2.0

class ShutterCard extends HTMLElement {

  set hass(hass) {
    const _this = this;
    const entities = this.config.entities;

    //Init the card
    if (!this.card) {
      const card = document.createElement('ha-card');
      
      if (this.config.title) {
          card.header = this.config.title;
      }
    
      this.card = card;
      this.appendChild(card);
    
      let allShutters = document.createElement('div');
      allShutters.className = 'sc-shutters';
      entities.forEach(function(entity) {
        let entityId = entity;
        if (entity && entity.entity) {
            entityId = entity.entity;
        }
        
        let titlePosition = 'top';
        if (entity && entity.title_position) {
            titlePosition = entity.title_position.toLowerCase();
        }

        let invertPercentage = false;
        if (entity && entity.invert_percentage) {
          invertPercentage = entity.invert_percentage;
        }
        
        let buttonsPosition = 'left';
        if (entity && entity.buttons_position) {
            buttonsPosition = entity.buttons_position.toLowerCase();
        }
        
        let outsideWindow = 'not show';
        if (entity && entity.outside_window) {
          outsideWindow = entity.outside_window.toLowerCase();
        }
        
        let outsideWindowpic = '/hacsfiles/pic-shutter-card/outside_window.png';
        if (entity && entity.outside_window_pic) {
          outsideWindowpic = entity.outside_window_pic.toLowerCase();
        }

        let framewindowpic = '/hacsfiles/pic-shutter-card/frame_window.png';
        if (entity && entity.frame_window_pic) {
          framewindowpic = entity.frame_window_pic.toLowerCase();
        }
        
        let shutterslidepic = '/hacsfiles/pic-shutter-card/sc_shutter_slide.png';
        if (entity && entity.shutter_slide_pic) {
          shutterslidepic = entity.shutter_slide_pic.toLowerCase();
        }
        
        let shutterbottompic = '/hacsfiles/pic-shutter-card/sc_shutter_bottom.png';
        if (entity && entity.shutter_bottom_pic) {
          shutterbottompic = entity.shutter_bottom_pic.toLowerCase();
        }
        
        let shutterminposition = 4;
        if (entity && entity.shutter_min_position) {
          shutterminposition = parseInt(entity.shutter_min_position);
        }
 
        let shuttermaxposition = 127;
        if (entity && entity.shutter_max_position) {
          shuttermaxposition = parseInt(entity.shutter_max_position);
        }

        let shutterheigth = 140;
        if (entity && entity.shutter_heigth) {
          shutterheigth = parseInt(entity.shutter_heigth);
        }

        let shutterdirection = 'up';
        if (entity && entity.shutter_direction) {
          shutterdirection = entity.shutter_direction.toLowerCase();
        }

        let shuttertop = 17;
        if (entity && entity.shutter_top) {
          shuttertop = parseInt(entity.shutter_top);
        }

        let shutterpicheight = 155;
        if (entity && entity.shutter_pic_height) {
          shutterpicheight = parseInt(entity.shutter_pic_height);
        }

        let shutterleft = 5;
        if (entity && entity.shutter_left) {
          shutterleft = parseInt(entity.shutter_left);
        }

        let shutterwidth = 90;
        if (entity && entity.shutter_width) {
          shutterwidth = parseInt(entity.shutter_width);
        }

        _this.minPosition = shutterminposition;
        _this.maxPosition = shuttermaxposition;
        _this.shuttertop = shuttertop;
        _this.shutterdirection = shutterdirection;
        _this.setConfig(_this.config, shutterminposition, shuttermaxposition);
        _this.shutterpicheight = shutterpicheight;

        let shutter = document.createElement('div');

        shutter.className = 'sc-shutter';
        shutter.dataset.shutter = entityId;
        shutter.innerHTML = `
          <div class="sc-shutter-top" ` + (titlePosition == 'bottom' ? 'style="display:none;"' : '') + `>
            <div class="sc-shutter-label">
            </div>
            <div class="sc-shutter-position">
            </div>
          </div>
          <div class="sc-shutter-middle" style="flex-direction: ` + (buttonsPosition == 'right' ? 'row-reverse': 'row') + `;">
            <div class="sc-shutter-buttons"` + (buttonsPosition == 'not show' ? ' style="display: none;"': '') + `>
              <ha-icon-button class="sc-shutter-button" data-command="up"><ha-icon icon="mdi:arrow-up"></ha-icon></ha-icon-button><br>
              <ha-icon-button class="sc-shutter-button" data-command="stop"><ha-icon icon="mdi:stop"></ha-icon></ha-icon-button><br>
              <ha-icon-button class="sc-shutter-button" data-command="down"><ha-icon icon="mdi:arrow-down"></ha-icon></ha-icon-button>
            </div>
            <div class="sc-shutter-selector">
              <div class="sc-shutter-selector-picture"><img class="sc-shutter-outside-window" src="` + outsideWindowpic + `"` + (outsideWindow == 'show' ? '' : ' style="display:none;"') + `><img class="frame-window" src="` + framewindowpic + `" style="height: ` + shutterpicheight + `px;">
                <div class="sc-shutter-selector-slide" style="background-position: center bottom; background-image: url(` + shutterslidepic + `); top: ` + shuttertop + `px; left: ` + shutterleft + `px; width: ` + shutterwidth + `px;"></div>
                <div class="sc-shutter-selector-slide2" style="background-position: center bottom; background-image: url(` + shutterslidepic + `); top: ` + shuttertop + `px;"></div>
                <div class="sc-shutter-selector-picker" style="background-image: url(` + shutterbottompic + `); top: ` + shuttertop + `px; left: ` + shutterleft + `px; background-position: center;"></div>
                <div class="container_up" style="display: none;">
                  <div class="chevron_up"></div>
                  <div class="chevron_up"></div>
                  <div class="chevron_up"></div>
                </div>
                <div class="container_down" style="display: none;">
                  <div class="chevron_down"></div>
                  <div class="chevron_down"></div>
                  <div class="chevron_down"></div>
                </div>
                <div class="container_left" style="display: none;">
                  <div class="chevron_left"></div>
                  <div class="chevron_left"></div>
                  <div class="chevron_left"></div>
                </div>
                <div class="container_right" style="display: none;">
                  <div class="chevron_right"></div>
                  <div class="chevron_right"></div>
                  <div class="chevron_right"></div>
                </div>
                <div class="container_leftright_out" style="display: none;">
                  <div class="chevron_leftright_out"></div>
                  <div class="chevron_leftright_out"></div>
                  <div class="chevron_leftright_out"></div>
                </div>
                <div class="container_leftright_out" style="display: none;">
                <div class="chevron_rightleft_out"></div>
                <div class="chevron_rightleft_out"></div>
                <div class="chevron_rightleft_out"></div>
                </div>
                <div class="container_leftright_in" style="display: none;">
                  <div class="chevron_leftright_in"></div>
                  <div class="chevron_leftright_in"></div>
                  <div class="chevron_leftright_in"></div>
                </div>
                <div class="container_leftright_in" style="display: none;">
                  <div class="chevron_rightleft_in"></div>
                  <div class="chevron_rightleft_in"></div>
                  <div class="chevron_rightleft_in"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="sc-shutter-bottom" ` + (titlePosition != 'bottom' ? 'style="display:none;"' : '') + `>
            <div class="sc-shutter-label">
            </div>
            <div class="sc-shutter-position">
            </div>
          </div>
        `;
        
        let picture = shutter.querySelector('.sc-shutter-selector-picture');
        let slide = shutter.querySelector('.sc-shutter-selector-slide');
		let slide2 = shutter.querySelector('.sc-shutter-selector-slide2');
        let picker = shutter.querySelector('.sc-shutter-selector-picker');
     
        let mouseDown = function(event) {
            if (event.cancelable) {
              //Disable default drag event
              event.preventDefault();
            }
            
            _this.isUpdating = true;
            
            document.addEventListener('mousemove', mouseMove);
            document.addEventListener('touchmove', mouseMove);
            document.addEventListener('pointermove', mouseMove);
      
            document.addEventListener('mouseup', mouseUp);
            document.addEventListener('touchend', mouseUp);
            document.addEventListener('pointerup', mouseUp);
        };
  
        let mouseMove = function(event) {
			var newPosition = 0;
		    switch (shutterdirection) {
                case 'up':
                    newPosition = event.pageY - _this.getPictureTop(picture) - _this.shuttertop;
                    break;  
                case 'left':
                    newPosition = (event.pageX - _this.getPictureLeft(picture)) / picture.offsetWidth * 100;
                    break;
                case 'right':
                    newPosition = 100 - ((event.pageX - _this.getPictureLeft(picture)) / picture.offsetWidth * 100);
                    break;
				case 'leftright':
                    newPosition = (100 - (event.pageX - _this.getPictureLeft(picture)) / picture.offsetWidth * 100) * 2;
                    break;
                }
          _this.setPickerPosition(newPosition, picker, slide, shutterdirection, shutterheigth, slide2, shuttertop);
        };
           
        let mouseUp = function(event) {
          _this.isUpdating = false;
          var newPosition = 0;
          switch (shutterdirection) {
                case 'up':
                    newPosition = event.pageY - _this.getPictureTop(picture) - _this.shuttertop;
                    break;  
                case 'left':
                    newPosition = event.pageX - _this.getPictureLeft(picture);
                    break;
                case 'right':
                    newPosition = 100 - ((event.pageX - _this.getPictureLeft(picture)) / picture.offsetWidth * 100 );
                    break;
				case 'leftright':
                    newPosition = (100 - (event.pageX - _this.getPictureLeft(picture)) / picture.offsetWidth * 100) * 2;
                    break;
                }

          if (newPosition < _this.minPosition)
            newPosition = _this.minPosition;
          
          if (newPosition > _this.maxPosition)
            newPosition = _this.maxPosition;

		  let percentagePosition = 0;
		  switch (shutterdirection) {
                case 'up':
                    percentagePosition = (newPosition - _this.minPosition) * 100 / (_this.maxPosition - _this.minPosition);
                    break;  
                case 'left':
                    percentagePosition = (newPosition - _this.minPosition) * 100 / (_this.maxPosition - _this.minPosition);
                    break;
                case 'right':
                    percentagePosition = 100 - ((newPosition - _this.minPosition) * 100 / (_this.maxPosition - _this.minPosition));
                    break;
				case 'leftright':
                    percentagePosition = 100 - (((newPosition - _this.minPosition) * 100 / (_this.maxPosition - _this.minPosition)));
                    break;
                }

          if (invertPercentage) {
            _this.updateShutterPosition(hass, entityId, percentagePosition);
          } else {
            _this.updateShutterPosition(hass, entityId, 100 - percentagePosition);
          }
          
          document.removeEventListener('mousemove', mouseMove);
          document.removeEventListener('touchmove', mouseMove);
          document.removeEventListener('pointermove', mouseMove);
      
          document.removeEventListener('mouseup', mouseUp);
          document.removeEventListener('touchend', mouseUp);
          document.removeEventListener('pointerup', mouseUp);
        };
      
        //Manage slider update
        picker.addEventListener('mousedown', mouseDown);
        picker.addEventListener('touchstart', mouseDown);
        picker.addEventListener('pointerdown', mouseDown);
        
        //Manage click on buttons
        shutter.querySelectorAll('.sc-shutter-button').forEach(function (button) {
            button.onclick = function () {
                const command = this.dataset.command;
                
                let service = '';
                
                switch (command) {
                  case 'up':
                      service = 'open_cover';
                      break;
                      
                  case 'down':
                      service = 'close_cover';
                      break;
                
                  case 'stop':
                      service = 'stop_cover';
                      break;
                }
                
                hass.callService('cover', service, {
                  entity_id: entityId
                });
            };
        });
      
        allShutters.appendChild(shutter);
      });
     
      const style = document.createElement('style');
      style.textContent = `
    .sc-shutter { margin-top: 1rem; overflow: hidden; width: 100%;}
    .sc-shutter:first-child { margin-top: 0; }
    .sc-shutter-middle { display: flex; margin: 5px 5px; width: 93%; justify-content: center;}
    .sc-shutter-buttons { text-align: center; margin-top: 0.5rem; width: 25%; min-width: 40px;}
    .sc-shutter-selector-picture { position: relative; margin: auto; background-size: cover; min-height: 150px; max-height: 100%; width: auto; }
    .frame-window { position: relative; width: 100%; height: ` + _this.shutterpicheight + `px;}
    .sc-shutter-outside-window {position: absolute; left: 4%; top: 9px; height: 140px; width: 92%;}
    .sc-shutter-selector-slide { position: absolute; top: ` + _this.minPosition + `px; left: 5%; width: 0%; height: 0;}
    .sc-shutter-selector-slide2 { position: absolute; top: ` + _this.minPosition + `px; left: 5%; width: 0%; height: 0; }
    .sc-shutter-selector-picker { position: absolute; top: ` + _this.minPosition + `px; left: 5%; width: 0%; cursor: pointer; height: 10px; background-repeat: no-repeat; background-size: 100% 8px;}
    .sc-shutter-top { text-align: center; margin-top: 5px; }
    .sc-shutter-bottom { text-align: center; margin-bottom: 5px; }
    .sc-shutter-label { display: inline-block; font-size: 20px; vertical-align: middle; }
    .sc-shutter-position { display: inline-block; vertical-align: middle; padding: 0 6px; margin-left: 1rem; border-radius: 2px; background-color: var(--secondary-background-color); }

.container_up,
.container_down,
.container_left,
.container_right,
.container_leftright_out,
.container_leftright_in {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  pointer-events: none;
}

.container_up {left: 50%; top: 25%;}
.container_down {left: 50%; top: 25%;}
.container_left {left: 25%; top: 50%;}
.container_right {left: 25%; top: 50%;}
.container_leftright_out {left: 25%; top: 50%;}
.container_leftright_in {left: 25%; top: 50%;}

.chevron_down {
  position: absolute;
  width: 2.1rem;
  height: 0.48rem;
  opacity: 0;
  transform: scale(0.3);
  animation: move-chevron-down 3s ease-out infinite;
}

.chevron_down:first-child {
  animation: move-chevron-down 3s ease-out 1s infinite;
}

.chevron_down:nth-child(2) {
  animation: move-chevron-down 3s ease-out 2s infinite;
}

.chevron_up {
  position: absolute;
  width: 2.1rem;
  height: 0.48rem;
  opacity: 0;
  transform: scale(0.3);
  animation: move-chevron-up 3s ease-out infinite;
}

.chevron_up:first-child {
  animation: move-chevron-up 3s ease-out 1s infinite;
}

.chevron_up:nth-child(2) {
  animation: move-chevron-up 3s ease-out 2s infinite;
}

.chevron_left {
  position: absolute;
  width: 0.9rem;
  height: 2.1rem;
  opacity: 0;
  transform: scale(0.3);
  animation: move-chevron-left 3s ease-out infinite;  
}

.chevron_left:first-child {
  animation: move-chevron-left 3s ease-out 1s infinite;
}

.chevron_left:nth-child(2) {
  animation: move-chevron-left 3s ease-out 2s infinite;
}

.chevron_right {
  position: absolute;
  width: 0.9rem;
  height: 2.1rem;
  opacity: 0;
  transform: scale(0.3);
  animation: move-chevron-right 3s ease-out infinite;  
}

.chevron_right:first-child {
  animation: move-chevron-right 3s ease-out 1s infinite;
}

.chevron_right:nth-child(2) {
  animation: move-chevron-right 3s ease-out 2s infinite;
}

.chevron_leftright_out {
  position: absolute;
  width: 0.9rem;
  height: 2.1rem;
  opacity: 0;
  transform: scale(0.3);
  animation: move-chevron-leftright_out 3s ease-out infinite;  
}

.chevron_leftright_out:first-child {
  animation: move-chevron-leftright_out 3s ease-out 1s infinite;
}

.chevron_leftright_out:nth-child(2) {
  animation: move-chevron-leftright_out 3s ease-out 2s infinite;
}

.chevron_rightleft_out {
  position: absolute;
  width: 0.9rem;
  height: 2.1rem;
  opacity: 0;
  transform: scale(0.3);
  animation: move-chevron-rightleft_out 3s ease-out infinite;  
}

.chevron_rightleft_out:first-child {
  animation: move-chevron-rightleft_out 3s ease-out 1s infinite;
}

.chevron_rightleft_out:nth-child(2) {
  animation: move-chevron-rightleft_out 3s ease-out 2s infinite;
}

.chevron_leftright_in {
  position: absolute;
  width: 0.9rem;
  height: 2.1rem;
  opacity: 0;
  transform: scale(0.3);
  animation: move-chevron-leftright_in 3s ease-out infinite;  
}

.chevron_leftright_in:first-child {
  animation: move-chevron-leftright_in 3s ease-out 1s infinite;
}

.chevron_leftright_in:nth-child(2) {
  animation: move-chevron-leftright_in 3s ease-out 2s infinite;
}

.chevron_rightleft_in {
  position: absolute;
  width: 0.9rem;
  height: 2.1rem;
  opacity: 0;
  transform: scale(0.3);
  animation: move-chevron-rightleft_in 3s ease-out infinite;  
}

.chevron_rightleft_in:first-child {
  animation: move-chevron-rightleft_in 3s ease-out 1s infinite;
}

.chevron_rightleft_in:nth-child(2) {
  animation: move-chevron-rightleft_in 3s ease-out 2s infinite;
}

.chevron_up:before,
.chevron_up:after,
.chevron_down:before,
.chevron_down:after,
.chevron_left:before,
.chevron_left:after,
.chevron_right:before,
.chevron_right:after,
.chevron_leftright_out:before,
.chevron_leftright_out:after,
.chevron_rightleft_out:before,
.chevron_rightleft_out:after,
.chevron_leftright_in:before,
.chevron_leftright_in:after,
.chevron_rightleft_in:before,
.chevron_rightleft_in:after {
  content: '';
  position: absolute;
  top: 0;
  height: 100%;
  width: 50%;
  background: var(--paper-item-icon-color, #44739e);
}

.chevron_down:before {
  left: 0;
  transform: skewY(30deg);
}

.chevron_down:after {
  right: 0;
  width: 50%;
  transform: skewY(-30deg);
}

.chevron_up:before {
  left: 0;
  transform: skewY(-30deg);
}

.chevron_up:after {
  right: 0;
  width: 50%;
  transform: skewY(30deg);
}

.chevron_left:before {
  top: 50%;
  height: 50%;
  transform: skewX(30deg);  
}

.chevron_left:after {
  bottom: 0;
  height: 50%;
  transform: skewX(-30deg);  
}

.chevron_right:before {
  top: 50%;
  height: 50%;
  transform: skewX(-30deg);  
}

.chevron_right:after {
  bottom: 0;
  height: 50%;
  transform: skewX(30deg);  
}

.chevron_leftright_out:before {
  top: 50%;
  height: 50%;
  transform: skewX(-30deg);  
}

.chevron_leftright_out:after {
  bottom: 0;
  height: 50%;
  transform: skewX(30deg);  
}

.chevron_rightleft_out:before {
  top: 50%;
  height: 50%;
  transform: skewX(30deg);  
}

.chevron_rightleft_out:after {
  bottom: 0;
  height: 50%;
  transform: skewX(-30deg);  
}

.chevron_leftright_in:before {
  top: 50%;
  height: 50%;
  transform: skewX(30deg);  
}

.chevron_leftright_in:after {
  bottom: 0;
  height: 50%;
  transform: skewX(-30deg);  
}

.chevron_rightleft_in:before {
  top: 50%;
  height: 50%;
  transform: skewX(-30deg);  
}

.chevron_rightleft_in:after {
  bottom: 0;
  height: 50%;
  transform: skewX(30deg);  
}

@keyframes move-chevron-down {
 25% {
   opacity: 1;
 }
 33.3% {
   opacity: 1;
   transform: translateY(2.28rem);
 }
 66.6% {
   opacity: 1;
   transform: translateY(3.12rem);
 }
 100% {
   opacity: 0;
   transform: translateY(4.8rem) scale(0.5);
 }
}

@keyframes move-chevron-up {
 100% {
   opacity: 0;
 }
 66.6% {
   opacity: 1;
   transform: translateY(2.28rem);
 }
 33.3% {
   opacity: 1;
   transform: translateY(3.12rem);
 }
 25% {
   opacity: 1; 
 }
 1% {
   opacity: 0; 
   transform: translateY(4.8rem) scale(0.5);
 }
}

@keyframes move-chevron-left {
 100% {
   opacity: 0;
 }
 66.6% {
   opacity: 1;
   transform: translateX(2.28rem);
 }
 33.3% {
   opacity: 1;
   transform: translateX(3.12rem);
 }
 25% {
   opacity: 1; 
 }
 1% {
   opacity: 0; 
   transform: translateX(4.8rem) scale(0.5);
 }
}

@keyframes move-chevron-right {
 25% {
   opacity: 1;
 }
 33.3% {
   opacity: 1;
   transform: translateX(2.28rem);
 }
 66.6% {
   opacity: 1;
   transform: translateX(3.12rem);
 }
 100% {
   opacity: 0;
   transform: translateX(4.8rem) scale(0.5);
 }
}

@keyframes move-chevron-leftright_out {
 33.3% {
   opacity: 0;
   transform: translateX(50px) scale(0.5);
 }
 50% {
   opacity: 1;
   transform: translateX(50px);
 }
 66.6% {
   opacity: 1;
   transform: translateX(65px);
 }
 100% {
   opacity: 0;
   transform: translateX(80px) scale(0.5);
 }
}

@keyframes move-chevron-rightleft_out {
33.3% {
   opacity: 0;
   transform: translateX(30px) scale(0.5);
 }
 50% {
   opacity: 1;
   transform: translateX(30px);
 }
 66.6% {
   opacity: 1;
   transform: translateX(15px);
 }
 100% {
   opacity: 0;
   transform: scale(0.5);
 }
}

@keyframes move-chevron-leftright_in {
 33.3% {
   opacity: 0;
   transform: translateX(70px) scale(0.5);
 }
 50% {
   opacity: 1;
   transform: translateX(70px);
 }
 66.6% {
   opacity: 1;
   transform: translateX(55px);
 }
 100% {
   opacity: 0;
   transform: translateX(40px) scale(0.5);
 }
}

@keyframes move-chevron-rightleft_in {
 
 33.3% {
   opacity: 0;
   transform: translateX(0px) scale(0.5);
 }
 50% {
   opacity: 1;
   transform: translateX(0px);
 }
 66.6% {
   opacity: 1;
   transform: translateX(15px);
 }
 100% {
   opacity: 0;
   transform: translateX(30px) scale(0.5);
 }
}
      `;

      this.card.appendChild(allShutters);
      this.appendChild(style);
    }
    
    //Update the shutters UI
    entities.forEach(function(entity) {
      let entityId = entity;
      if (entity && entity.entity) {
        entityId = entity.entity;
      }

      let invertPercentage = false;
      if (entity && entity.invert_percentage) {
        invertPercentage = entity.invert_percentage;
      }
      let shutteranimation = 'show';
      if (entity && entity.shutter_animation) {
        shutteranimation = entity.shutter_animation;
      }  
      let shutterheigth = 140;
      if (entity && entity.shutter_heigth) {
        shutterheigth = parseInt(entity.shutter_heigth);
      }
      let shutterdirection = 'up';
      if (entity && entity.shutter_direction) {
        shutterdirection = entity.shutter_direction.toLowerCase();
      }
      let shuttertop = 17;
      if (entity && entity.shutter_top) {
        shuttertop = parseInt(entity.shutter_top);
      }
	  
	  let shutterminposition = 4;
      if (entity && entity.shutter_min_position) {
        shutterminposition = parseInt(entity.shutter_min_position);
      }
 
      let shuttermaxposition = 127;
      if (entity && entity.shutter_max_position) {
        shuttermaxposition = parseInt(entity.shutter_max_position);
      }

      let shutterwidth = 90;
      if (entity && entity.shutter_width) {
        shutterwidth = parseInt(entity.shutter_width);
      }

      const shutter = _this.card.querySelector('div[data-shutter="' + entityId +'"]');
      const slide = shutter.querySelector('.sc-shutter-selector-slide');
      const picker = shutter.querySelector('.sc-shutter-selector-picker');
      const slide2 = shutter.querySelector('.sc-shutter-selector-slide2');

      const state = hass.states[entityId];
      const friendlyName = (entity && entity.name) ? entity.name : state ? state.attributes.friendly_name : 'unknown';
      const currentPosition = state ? state.attributes.current_position : '100';
      const movementState = state? state.state : 'unknown';
      shutter.querySelectorAll('.sc-shutter-label').forEach(function(shutterLabel) {
          shutterLabel.innerHTML = friendlyName;
      })

      if (!_this.isUpdating) {
        shutter.querySelectorAll('.sc-shutter-position').forEach(function (shutterPosition) {
          shutterPosition.innerHTML = currentPosition + '%';
        })

        if (invertPercentage) {
          _this.setPickerPositionPercentage(currentPosition, picker, slide, shutterdirection, shutterheigth, slide2, shuttertop, shutterwidth);
        } else {
          _this.setPickerPositionPercentage(100 - currentPosition, picker, slide, shutterdirection, shutterheigth, slide2, shuttertop, shutterwidth);
        }
        if (shutteranimation == 'show') { _this.setMovement(movementState, shutter, shutterdirection);  }
      }
    });
  }
  
  setMovement(movement, shutter,shutterdirection) {
    if (movement == "opening" || movement == "closing") {
        let opening = movement == "opening"
        switch (shutterdirection) {
          case 'up':
            shutter.querySelectorAll(".container_up").forEach(
              (overlay) => overlay.style.display = opening?"flex":"none"
            )
            shutter.querySelectorAll(".container_down").forEach(
              (overlay) => overlay.style.display = opening?"none":"flex"
            )
          break;
          case 'left':
            shutter.querySelectorAll(".container_left").forEach(
              (overlay) => overlay.style.display = opening?"flex":"none"
            )
            shutter.querySelectorAll(".container_right").forEach(
              (overlay) => overlay.style.display = opening?"none":"flex"
            )
          break;
		  case 'right':
            shutter.querySelectorAll(".container_right").forEach(
              (overlay) => overlay.style.display = opening?"flex":"none"
            )
            shutter.querySelectorAll(".container_left").forEach(
              (overlay) => overlay.style.display = opening?"none":"flex"
            )
          break;
		  case 'leftright':
            shutter.querySelectorAll(".container_leftright_out").forEach(
              (overlay) => overlay.style.display = opening?"flex":"none"
            )
            shutter.querySelectorAll(".container_leftright_in").forEach(
              (overlay) => overlay.style.display = opening?"none":"flex"
            )
          break;
	  }
    }
    else {
      shutter.querySelectorAll(".container_up").forEach(
        (overlay) => overlay.style.display = "none"
      )
      shutter.querySelectorAll(".container_down").forEach(
        (overlay) => overlay.style.display = "none"
      )
	  shutter.querySelectorAll(".container_left").forEach(
        (overlay) => overlay.style.display = "none"
      )
      shutter.querySelectorAll(".container_right").forEach(
        (overlay) => overlay.style.display = "none"
      )
	  shutter.querySelectorAll(".container_leftright_in").forEach(
        (overlay) => overlay.style.display = "none"
      )
      shutter.querySelectorAll(".container_leftright_out").forEach(
        (overlay) => overlay.style.display = "none"
      )
    }  
  }  

  getPictureTop(picture) {
      let pictureBox = picture.getBoundingClientRect();
      let body = document.body;
      let docEl = document.documentElement;
      let scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
      let clientTop = docEl.clientTop || body.clientTop || 0;
      let pictureTop  = pictureBox.top + scrollTop - clientTop;
      return pictureTop;
  }

  getPictureLeft(picture) {
      let pictureBox = picture.getBoundingClientRect();
      let body = document.body;
      let docEl = document.documentElement;
      let scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;
      let clientLeft = docEl.clientLeft || body.clientLeft || 0;
      let pictureLeft  = pictureBox.left + scrollLeft - clientLeft;
      return pictureLeft;
  }    

  setPickerPositionPercentage(position, picker, slide, shutterdirection, shutterheigth, slide2, shuttertop, shutterwidth) {
    let realPosition = (this.maxPosition - this.minPosition) * position / 100 + this.minPosition;
  
    this.setPickerPosition(realPosition, picker, slide, shutterdirection, shutterheigth, slide2, shuttertop, shutterwidth);
  }
  
  setPickerPosition(position, picker, slide, shutterdirection, shutterheigth, slide2, shuttertop, shutterwidth) {
    if (position < this.minPosition)
      position = this.minPosition;
  
    if (position > this.maxPosition)
      position = this.maxPosition;

    switch (shutterdirection) {
       case 'up':
          picker.style.top = position + this.minPosition + shuttertop - 8 + 'px';
          slide.style.height = position + this.minPosition + 'px';
		  slide.style.width = shutterwidth + '%';
		  picker.style.width = slide.style.width;
		  picker.style.height = '10px';
          break;
       case 'left':
          slide.style.height = shutterheigth + 'px';
          slide.style.backgroundSize = 'auto ' + shutterheigth + 'px';
          slide.style.width = (position / this.maxPosition * 100 * (this.maxPosition / 100) - this.minPosition) + '%';
          slide.style.backgroundPosition = 'right bottom';
		  slide.style.left = this.minPosition + '%';
		  picker.style.width = '10px';
		  picker.style.height = slide.style.height;
		  picker.style.left = position - 6 + '%';
          break;
       case 'right':
          slide.style.height = shutterheigth + 'px';
          slide.style.backgroundSize = 'auto ' + shutterheigth + 'px';
		  slide.style.width = (position / this.maxPosition * 100 * (this.maxPosition / 100) - this.minPosition) + '%';
		  slide.style.left = this.maxPosition - position + this.minPosition + '%';
          slide.style.backgroundPosition = 'left bottom';
		  picker.style.width = '10px';
		  picker.style.height = slide.style.height;
		  picker.style.left = this.maxPosition - position + this.minPosition + '%';
          break;
       case 'leftright':
          slide.style.height = shutterheigth + 'px';
          slide.style.backgroundSize = 'auto ' + shutterheigth + 'px';
          slide.style.backgroundPosition = 'right bottom';
		  slide.style.width = (position / this.maxPosition * 100 * (this.maxPosition / 100) - this.minPosition) / 2 + '%';
		  slide.style.left = this.minPosition + '%';

          slide2.style.height = shutterheigth + 'px';
          slide2.style.backgroundSize = 'auto ' + shutterheigth + 'px';
          slide2.style.backgroundPosition = 'left bottom';
		  slide2.style.width = (position / this.maxPosition * 100 * (this.maxPosition / 100) - this.minPosition) / 2 + '%';
		  slide2.style.left = (this.maxPosition - position + this.minPosition) + (position / this.maxPosition * 100 * (this.maxPosition / 100) - this.minPosition) / 2 + '%';	
		  picker.style.width = '10px';
		  picker.style.height = slide.style.height;
		  picker.style.left = this.maxPosition - (position / 2) + '%';
          break;
    }
  }
  
  updateShutterPosition(hass, entityId, position) {
    let shutterPosition = Math.round(position);
  
    hass.callService('cover', 'set_cover_position', {
      entity_id: entityId,
      position: shutterPosition
    });
  }

  setConfig(config, mmin, mmax) {
    if (!config.entities) {
      throw new Error('You need to define entities');
    }
    this.config = config;
    this.maxPosition = mmax;
    this.minPosition = mmin;
    this.isUpdating = false;
  }

  // The height of your card. Home Assistant uses this to automatically
  // distribute all cards over the available columns.
  getCardSize() {
    return this.config.entities.length + 1;
  }
}

customElements.define("pic-shutter-card", ShutterCard);
