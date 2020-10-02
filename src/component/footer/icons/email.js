import React, { Component } from 'react'; 

export class Email extends Component {

    componentDidMount() {
        const element = document.querySelector(".circular_reveal_e");
        const inner = document.querySelector(".circular_reveal_content_e");
    
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
          <div id="email">
            <div className="circular_reveal_e">
              <div className="circular_reveal_content_e">
                <img
                  alt="Purpose icon"
                  src={require('../../../assets/imgs/email_icon.jpg')}
                />
              </div>
            </div>
          </div>
        );
    }
}

export default Email; 