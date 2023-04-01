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
        
		let shutterminposition = 17;    
        if (entity && entity.shutter_min_position) {
          shutterminposition = parseInt(entity.shutter_min_position);
        }
		
		let shuttermaxposition = 142;    
        if (entity && entity.shutter_max_position) {
          shuttermaxposition = parseInt(entity.shutter_max_position);
        }
		
   //     _this.minPosition = shutterminposition;
   //     _this.maxPosition = shuttermaxposition;
        _this.setConfig(_this.config, shutterminposition, shuttermaxposition);
		
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
              <div class="sc-shutter-selector-picture"><img class="sc-shutter-outside-window" src="` + outsideWindowpic + `"` + (outsideWindow == 'show' ? '' : ' style="display:none;"') + `><img class="frame-window" src="` + framewindowpic + `">
                <div class="sc-shutter-selector-slide" style="background-image: url(` + shutterslidepic + `); top: ` + _this.minPosition + `px;"></div>
                <div class="sc-shutter-selector-picker" style="background-image: url(` + shutterbottompic + `); top: ` + _this.minPosition + `px;"></div>
				<div class="container_down" style="display: none;">
                  <div class="chevron_down"></div>
                  <div class="chevron_down"></div>
                  <div class="chevron_down"></div>
                </div>
				<div class="container_up" style="display: none;">
                  <div class="chevron_up"></div>
                  <div class="chevron_up"></div>
                  <div class="chevron_up"></div>
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
          let newPosition = event.pageY - _this.getPictureTop(picture);
          _this.setPickerPosition(newPosition, picker, slide);
        };
           
        let mouseUp = function(event) {
          _this.isUpdating = false;
            
          let newPosition = event.pageY - _this.getPictureTop(picture);
          
          if (newPosition < _this.minPosition)
            newPosition = _this.minPosition;
          
          if (newPosition > _this.maxPosition)
            newPosition = _this.maxPosition;
          
          let percentagePosition = (newPosition - _this.minPosition) * 100 / (_this.maxPosition - _this.minPosition);
          
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
    .frame-window { position: relative; width: 100%; height: 155px;}
    .sc-shutter-outside-window {position: absolute; left: 4%; top: 9px; height: 140px; width: 92%;}
    .sc-shutter-selector-slide { position: absolute; top: ` + _this.minPosition + `px; left: 5%; width: 90%; height: 0; background-position: center bottom;}
    .sc-shutter-selector-picker { position: absolute; top: ` + _this.minPosition + `px; left: 5%; width: 90%; cursor: pointer; height: 20px; background-repeat: no-repeat; background-size: 100% 8px;}
    .sc-shutter-top { text-align: center; margin-top: 5px; }
    .sc-shutter-bottom { text-align: center; margin-bottom: 5px; }
    .sc-shutter-label { display: inline-block; font-size: 20px; vertical-align: middle; }
    .sc-shutter-position { display: inline-block; vertical-align: middle; padding: 0 6px; margin-left: 1rem; border-radius: 2px; background-color: var(--secondary-background-color); }
.container_up,
.container_down {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 25%;
  left: 50%;
  pointer-events: none;
}

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

.chevron_up:before,
.chevron_up:after,
.chevron_down:before,
.chevron_down:after {
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
      `;
    		
      this.card.appendChild(allShutters);
      this.appendChild(style);
	  //                                   --------------------------------
  //    this.minPosition = _this.minPosition;
	  
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
        
      const shutter = _this.card.querySelector('div[data-shutter="' + entityId +'"]');
      const slide = shutter.querySelector('.sc-shutter-selector-slide');
      const picker = shutter.querySelector('.sc-shutter-selector-picker');
        
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
          _this.setPickerPositionPercentage(currentPosition, picker, slide);
        } else {
          _this.setPickerPositionPercentage(100 - currentPosition, picker, slide);
        }
		if (shutteranimation == 'show') { _this.setMovement(movementState, shutter);  }
      }
	  	
    });

  }
  
    setMovement(movement, shutter) {
    if (movement == "opening" || movement == "closing") {
      let opening = movement == "opening"
      
      shutter.querySelectorAll(".container_up").forEach(
        (overlay) => overlay.style.display = opening?"flex":"none"
      )
      shutter.querySelectorAll(".container_down").forEach(
        (overlay) => overlay.style.display = opening?"none":"flex"
      )
    }
    else {
      shutter.querySelectorAll(".container_up").forEach(
        (overlay) => overlay.style.display = "none"
      )
	  shutter.querySelectorAll(".container_down").forEach(
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
  
  setPickerPositionPercentage(position, picker, slide) {
    let realPosition = (this.maxPosition - this.minPosition) * position / 100 + this.minPosition;
  
    this.setPickerPosition(realPosition, picker, slide);
  }
  
  setPickerPosition(position, picker, slide) {
    if (position < this.minPosition)
      position = this.minPosition;
  
    if (position > this.maxPosition)
      position = this.maxPosition;

    picker.style.top = position + 'px';
    slide.style.height = position - this.minPosition + 'px';
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
  //  this.maxPosition = 142;
  //  this.minPosition = 7;
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
