setTimeout(function() {
    document.getElementById('profile-pic').src = 'images/Rick-Morty1.png';
}, 2000);

setTimeout(function() {
    document.getElementById('profile-name').innerHTML = 'Angry Taz';
}, 4000);

setTimeout(function() {
    document.getElementById('profile-desc').classList.add('new-style');
}, 6000);

setInterval(function() {
    document.getElementById('profile-card').classList.toggle('toggle-bg');
}, 2000);
