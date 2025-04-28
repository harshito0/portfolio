// const monsterImage = new Image();
// monsterImage.src = 'https://yt3.ggpht.com/-egl0BJumF1A/AAAAAAAAAAI/AAAAAAAAAAA/zk1ch1-WaY8/s900-c-k-no-mo-rj-c0xffffff/photo.jpg';

// let monsterImageLoaded = false;
// monsterImage.onload = () => {
//     monsterImageLoaded = true;
// };
// function drawMonster() {
//     if (monsterImageLoaded) {
//         ctx.drawImage(monsterImage, monster.x - 25, monster.y - 25, 50, 50);
//     } else {
//         // If image not loaded yet, draw a placeholder
//         ctx.fillStyle = 'red';
//         ctx.beginPath();
//         ctx.arc(monster.x, monster.y, monster.radius, 0, Math.PI * 2);
//         ctx.fill();
//         ctx.closePath();
//     }

//     // Move monster
//     monster.x += monster.dx;
//     monster.y += monster.dy;

//     // Bounce off walls
//     if (monster.x <= 25 || monster.x >= canvas.width - 25) {
//         monster.dx *= -1;
//     }
//     if (monster.y <= 25 || monster.y >= canvas.height - 25) {
//         monster.dy *= -1;
//     }
// }
// const monsterImage = new Image();
// monsterImage.src = 'https://yt3.ggpht.com/-egl0BJumF1A/AAAAAAAAAAI/AAAAAAAAAAA/zk1ch1-WaY8/s900-c-k-no-mo-rj-c0xffffff/photo.jpg';
// let monsterImageLoaded = false;

// monsterImage.onload = () => {
//     monsterImageLoaded = true;
// };

// function drawMonster() {
//     if (monsterImageLoaded) {
//         ctx.drawImage(monsterImage, monster.x - 25, monster.y - 25, 50, 50);
//     } else {
//         ctx.fillStyle = 'red';
//         ctx.beginPath();
//         ctx.arc(monster.x, monster.y, monster.radius, 0, Math.PI * 2);
//         ctx.fill();
//         ctx.closePath();
//     }

//     monster.x += monster.dx;
//     monster.y += monster.dy;

//     if (monster.x <= 25 || monster.x >= canvas.width - 25) monster.dx *= -1;
//     if (monster.y <= 25 || monster.y >= canvas.height - 25) monster.dy *= -1;
// }
