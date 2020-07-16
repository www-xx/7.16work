
var swiper = document.querySelector('.swiper');
var box = document.getElementsByClassName('box')[0];
var btns = document.querySelectorAll(".btns li");
var as = document.querySelectorAll('a');
//轮播图视口宽度
var winW = parseInt(getComputedStyle(swiper, null).width);

//自动轮播
var num = 0;
function move() {
  num++;
  if (num > btns.length-1) {
    animate(box, {
      "margin-left": -num * winW
    }, 500, Tween.Linear, () =>{
      box.style.marginLeft = 0;
    });
    num = 0;
  } else {
    animate(box, {
      "margin-left": -num * winW
    }, 500);
  }

  for (let i = 0; i < btns.length; i++) {
    btns[i].style.backgroundColor = '#d0d0d0';
  }
  btns[num].style.backgroundColor = '#555';
}
var t = setInterval(move, 3000);

//按钮点击
for (let i = 0; i < btns.length; i++) {
  btns[i].onclick = function () {
    num = i;
    animate(box, {
      "margin-left": -num * winW
    }, 500);
    for (let j = 0; j < btns.length; j++) {
      btns[j].style.backgroundColor = '#d0d0d0';
    }
    btns[num].style.backgroundColor = '#555';
  }
}

//鼠标的移入移出
swiper.onmouseover = function () {
  clearInterval(t)
}
swiper.onmouseout = function () {
  t = setInterval(move, 3000);
}

var fenleis = document.querySelectorAll('.fenlei li');
var fenleihis = document.querySelectorAll('.fenleihi li');
var fenleihi = document.querySelector('.fenleihi')
var fenlei = document.querySelector('.fenlei');

for (let i = 0; i < fenleis.length; i++) {
  fenleis[i].onmouseover = function () {
    for (let i = 0; i <fenleihis.length; i++) {
      fenleihis[i].style.display = "none";
      fenleis[i].style.color = "#fff"
    }
    fenleihis[i].style.display = "block";
    fenleis[i].style.color = "red"
  }
  fenleis[i].onmouseout = function () {
    for (let i = 0; i <fenleihis.length; i++) {
      fenleihis[i].style.display = "none";
      fenleis[i].style.color = "#fff"
    }
  }
}

