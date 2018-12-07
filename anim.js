import anime from 'animejs'

const obj = { progress: '50%' };

setTimeout(() => {
    document.querySelector('.hero').classList.add('show')
    const timeline = anime.timeline({
        easing: 'easeOutCubic',
        duration: 1000,
    })
    timeline.add({
        targets: obj,
        progress: ['100%', '-20%'],
        update: anim => {
            document.body.style.setProperty('--progress', obj.progress)
        }
    });

    timeline.add({
        targets: '.hero-text',
        opacity: [0, 1],
        offset: 0,
    })
}, 1000)
