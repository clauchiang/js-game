//開頭
let heroName = prompt('來自異世界的旅人啊，\n你叫什麼名字?', 'aaaa');
const welcome = document.getElementById('sentence');
if (heroName !== null) {
    welcome.innerHTML = "Welcome, 勇者 - " + heroName + " (按下空白鍵繼續)" + "<span class='triangle'> ▼ </span>";
} else {
    alert("你不願意透露姓名是嗎......")
    welcome.innerHTML = "......Welcome, 無名的勇者 (按下空白鍵繼續)" + "<span class='triangle'> ▼ </span>";
}

//時間
function currentTime() {

    const now = new Date();
    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();

    h = leadingZero(h);
    m = leadingZero(m);
    s = leadingZero(s);

    document.getElementById("time").innerHTML = `${h}:${m}:${s}`;
    setTimeout("currentTime()", 1000);

}

function leadingZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

//人物移動
const hero = document.getElementById('hero');
hero.style.left = '200px';
hero.style.bottom = '50px';

const monster = document.getElementById('monster');
monster.style.right = '200px';
monster.style.bottom = '50px';

//左移
document.addEventListener('keydown', function (e) {

    if (e.key === 'ArrowLeft') {
        moveLeftFun();
    }

})

//右移
document.addEventListener('keydown', function (e) {

    if (e.key === 'ArrowRight') {
        moveRightFun();
    }
})


//跳躍
document.addEventListener('keydown', function (e) {

    if (e.key === 'ArrowUp') {

        moveJumpFun();
        effJumpFun();
    }
})
document.addEventListener('keyup', function (e) {

    if (e.key === 'ArrowUp') {

        moveDownFun();
        setTimeout(effJumpStopFun, 500);

    }
})

// 操控說明
document.addEventListener('keydown', function (e) {

    if (e.code === 'Space') {
        const control = document.getElementById('sentence')
        control.innerHTML = "使用方向鍵以操控人物前進、後退和跳躍，" + "<br>" + "並用滑鼠點擊來攻擊怪物" + "<span class='triangle'> ▼ </span>";
    }
})

//撥放音樂
function playFun() {
    let audio = document.getElementById('audio');
    audio.loop = "ture";
    audio.play();
}

//停止
function stopFun() {
    let audio = document.getElementById('audio');
    audio.pause();
    audio.currentTime = 0;
}

//左移function
function moveLeftFun() {
    let leftNum = hero.style.left.replace('px', '');
    let left = parseInt(leftNum, 10);

    if (left > 10) {
        hero.innerHTML = "<img src='./img/heroL.gif' alt='人物'>";
        hero.style.left = `${left - 50}px`;
    }
}

//右移function
function moveRightFun() {
    let leftNum = hero.style.left.replace('px', '');
    let left = parseInt(leftNum, 10);

    if (left < 1750) {
        hero.innerHTML = "<img src='./img/hero.gif' alt='人物'>";
        hero.style.left = `${left + 50}px`;
    }
}

//跳躍function
function moveJumpFun() {
    let jumpNum = hero.style.bottom.replace('px', '');
    let jump = parseInt(jumpNum, 0);

    hero.style.height = `${jump + 150}px`;
}

function moveDownFun() {
    let jumpNum = hero.style.bottom.replace('px', '');
    let jump = parseInt(jumpNum, 10);

    hero.style.height = `${jump + 50}px`;
}

//補血
function heartFun1() {
    let heart = document.getElementById('heart1')
    heart.innerHTML = "<img src='./img/fullheart.png' alt='fullHeart'>";
    effHeartFun();
}
function heartFun2() {
    let heart = document.getElementById('heart2')
    heart.innerHTML = "<img src='./img/fullheart.png' alt='fullHeart'>";
    effHeartFun();
}
function heartFun3() {
    let heart = document.getElementById('heart3')
    heart.innerHTML = "<img src='./img/fullheart.png' alt='fullHeart'>";
    effHeartFun();
}

// 效果音
function effectFun() {
    let effect = document.getElementById('effect');
    effect.play();
}

function effStopFun() {
    let effect = document.getElementById('effect');
    effect.pause();
    effect.currentTime = 0;
}

function effJumpFun() {
    let effJump = document.getElementById('effJump');
    effJump.play();
}

function effJumpStopFun() {
    let effJump = document.getElementById('effJump');
    effJump.pause();
    effJump.currentTime = 0;
}

function effHeartFun() {
    let effHeart = document.getElementById('effHeart');
    effHeart.play();
}

function effWinFun() {
    let effWin = document.getElementById('effWin');
    effWin.play();
}

// 打怪fun jq
$(document).ready(function () {

    let hit = 0;
    $('#monster').click(function () {
        hit += 1;
        $('#hit').html(`<p id='hit2'>Hit ${hit}</p>`);

        if (hit > 9) {
            $('#hit').html("<div id='hit'></div>");
            $('#monster').html('<img src="./img/death.gif" alt="monster">');
            effWinFun();
        }
    })

    $('#reset').click(function () {
        $('#monster').html('<img src="./img/monsterL.gif" alt="monster">');
        hit = 0;
        $('#monster').prepend(`<p id='hit'>Hit 0</p>`);
    })

});


