import confetti from 'canvas-confetti';

export const runFireWorks = () => {
    var end = Date.now() + (3 * 500);

// go Buckeyes!
    var colors = ['#ff5353', '#ffee53', '#53ffa9', '#5395ff', '#ef53ff'];

    (function frame() {
    confetti({
        particleCount: 5,
        angle: 45,
        spread: 80,
        origin: { x: 0 },
        colors: colors
    });
    confetti({
        particleCount: 5,
        angle: 130,
        spread: 80,
        origin: { x: 1 },
        colors: colors
    });

    if (Date.now() < end) {
        requestAnimationFrame(frame);
    }
    }());
}