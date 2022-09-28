/**
 * demo.js
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2019, Codrops
 * http://www.codrops.com
 */
{
    const enterCtrl = document.querySelector('.content__button');

    let animation = new explosion.default(
        'container', // id of DOM el
        {
            surface: '5E6262',
            inside: 'ef572d',
            background: '151616',
            onLoad: ()=>{
                document.body.classList.remove('loading');
            }
        }
    );

    animation.camera.position.z = 500;

    let targetMouseX = 0, mouseX = 0, ta = 0;
    const sign = n => n === 0 ? 1 : n/Math.abs(n);    
    document.addEventListener('mousemove',(e) => {
        targetMouseX = 2*(e.clientX - animation.width/2)/animation.width;
    });
    document.addEventListener('touchmove',(e) => {
        targetMouseX = ( e.touches[0].clientX / animation.width ) * 2 - 1;
    });

    const draw = () => {
        if ( animation ) {
            mouseX += (targetMouseX - mouseX)*0.05;
            ta = Math.abs(mouseX);
            animation.scene.rotation.y = 0.2 *-ta*(2 - ta)*Math.PI * sign(mouseX);
            animation.scene.rotation.z = 0.2 *-ta*(2 - ta)*Math.PI * sign(mouseX);
        }
        window.requestAnimationFrame(draw);
    }
    draw();


    let isOpen = false;
    enterCtrl.addEventListener('click', () => {
        isOpen = true;

        new TimelineMax()
        .to(enterCtrl, 0.3, {
            opacity: 0,
            ease: Expo.easeOut,
            complete: () => TweenMax.set(enterCtrl, {'pointer-events' : 'none'})
        })
        .to(animation.settings, 20, {
            progress: 2,
            ease: Expo.easeOut
        }, 0)
        .call(function(){
            // Replace current window with a random wikipedia page. Prevents navigation option back to the home page.
            // Prompts user to scan the qr code again.
            window.location.replace("https://en.wikipedia.org/wiki/Special:Random")
        }, null, null, 2)
    });

    enterCtrl.addEventListener('mouseenter', () => {
        if ( isOpen ) return;
        new TimelineMax()
        .to(animation.camera.position, 1, {
            z: 450,
            ease: Expo.easeOut
        }, 0);
    });

    enterCtrl.addEventListener('mouseleave', () => {
        if ( isOpen ) return;
        new TimelineMax()
        .to(animation.camera.position, 1, {
            z: 500,
            ease: Expo.easeOut
        }, 0);
    });
}