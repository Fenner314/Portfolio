const vid = document.getElementById('video');
const sound = document.getElementById('sound');

console.log(vid.muted);

const click = () => {
    if (vid.muted) {
        sound.src = 'utilities/volume64-green.png';
        sound.style.right = '39px';
        vid.muted = !vid.muted;
    } else {
        sound.src = 'utilities/mute64-gray.png';
        sound.style.right = '40px';
        vid.muted = !vid.muted;
    }
}

sound.addEventListener('click', click);