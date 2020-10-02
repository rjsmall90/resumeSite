import React, { Component } from 'react'; 


export class Linked extends Component {

    componentDidMount() {
        const element = document.querySelector(".circular_reveal_l");
        const inner = document.querySelector(".circular_reveal_content_l");
    
        const easing = 0.3;
        const outScale = 0.6;
        const inScale = 1;
    
        let targetScale = outScale;
        let elementScale = targetScale;
        let innerScale = 1 / elementScale;
    
        element.addEventListener("pointerover", () => {
          targetScale = inScale;
        });
    
        element.addEventListener("pointerout", () => {
          targetScale = outScale;
        });
    
        const update = () => {
          elementScale += (targetScale - elementScale) * easing;
          innerScale = 1 / elementScale;
    
          element.style.transform = `scale(${elementScale})`;
          inner.style.transform = `scale(${innerScale})`;
    
          requestAnimationFrame(update);
        };
    
        requestAnimationFrame(update);
    }

    render() {
        return (
          <div id="linked">
            <div className="circular_reveal_l">
              <div className="circular_reveal_content_l">
                <img
                  alt="Purpose icon"
                  src={require('../../../assets/imgs/LI_icon.jpg')}
                />
              </div>
            </div>
          </div>
        );
    }
}

export default Linked; 