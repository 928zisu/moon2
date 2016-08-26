/**
 * Created by Administrator on 2016/7/9.
 */
var boxUl = document.getElementById("boxUl");
var youngLis = boxUl.getElementsByTagName("li");
function creatTop(){
    for (var i = 0; i < youngLis.length; i++) {
        var lowTop = 570 - parseInt(Math.random() * 145 + 125) + "px";
        //默认的随机高度
        youngLis[i].style.top = lowTop;
    }
}
creatTop();
//动画前保存原来的图片位置
function keepTop(){
    for(var j = 0;j<youngLis.length;j++){
        youngLis[j].bg = youngLis[j].offsetTop;
    }
}

for (var i = 0; i < youngLis.length; i++) {
    youngLis[i].index = i;
    keepTop();
    youngLis[i].onmouseover = function () {
        //进入当前图片，高度到达200px ，前后的图片的高度递减 top值递增
        animate(this, {"top": 200});
        for(var k=0;k<youngLis.length;k++){
            animate(youngLis[k], {"top": 200 +  Math.abs(this.index-k)* 50});
        }
        /* for(var j = this.index;j<youngLis.length;j++){
         animate(youngLis[j], {"top": 200 + (j-this.index) * 50});
         }
         for (var k = this.index; k >= 0; k--) {
         animate(youngLis[k], {"top": 200 + (this.index-k)* 50});
         }*/
    }

    //离开图片的时候，回到开始的默认值
    youngLis[i].onmouseout = function () {
        for(var l = 0;l<youngLis.length;l++){
            animate(youngLis[l], {"top": youngLis[l].bg});
        }
    }
    var z=1;
    var big=false;
    youngLis[i].onclick=function(){
        z++;
        if(!big){
            this.bgTop=this.offsetTop;
            this.bgWidth=this.offsetWidth;
            this.bgLeft=this.offsetLeft;
            animate(this, {"top": 50,"width":1022,"left":200});
            big=true;
        }else{
            animate(this, {"top": this.bgTop,"width":this.bgWidth,"left":this.bgLeft});
            big=false;
        }
        this.style.zIndex=z;
    }
}
//点击页面的任意位置。图片位置随机更换
/*document.onclick=function(){
    creatTop();
    keepTop();
    for(var l = 0;l<youngLis.length;l++){
        animate(youngLis[l], {"top": youngLis[l].bg});
    }
}*/

//1234567跳动
document.onkeydown=function(e) {
    //console.log(e.keyCode);
    var step=50;
    if (e.keyCode == 97) {
        youngLis[0].bgTop = youngLis[0].offsetTop;
        animate(youngLis[0], {"top": youngLis[0].bgTop -step}, function () {
            animate(youngLis[0], {"top": youngLis[0].bgTop});
        });
    }
    else if (e.keyCode == 98) {
        youngLis[1].bgTop = youngLis[1].offsetTop;
        animate(youngLis[1], {"top": youngLis[1].bgTop - step}, function () {
            animate(youngLis[1], {"top": youngLis[1].bgTop});
        });
    }
    else if (e.keyCode == 99) {
        youngLis[2].bgTop = youngLis[2].offsetTop;
        animate(youngLis[2], {"top": youngLis[2].bgTop - step}, function () {
            animate(youngLis[2], {"top": youngLis[2].bgTop});
        });
    }
    else  if (e.keyCode == 100) {
        youngLis[3].bgTop = youngLis[3].offsetTop;
        animate(youngLis[3], {"top": youngLis[3].bgTop - step}, function () {
            animate(youngLis[3], {"top": youngLis[3].bgTop});
        });
    }
    else if (e.keyCode == 101) {
        youngLis[4].bgTop = youngLis[4].offsetTop;
        animate(youngLis[4], {"top": youngLis[4].bgTop - step}, function () {
            animate(youngLis[4], {"top": youngLis[4].bgTop});
        });
    }
    else if (e.keyCode == 102) {
        youngLis[5].bgTop = youngLis[5].offsetTop;
        animate(youngLis[5], {"top": youngLis[5].bgTop - step}, function () {
            animate(youngLis[5], {"top": youngLis[5].bgTop});
        });
    }
    else if (e.keyCode == 103) {
        youngLis[6].bgTop = youngLis[6].offsetTop;
        animate(youngLis[6], {"top": youngLis[6].bgTop - step}, function () {
            animate(youngLis[6], {"top": youngLis[6].bgTop});
        });
    }
}

//点击谁就切换到相应的图片界面
var standard=document.getElementById("standard");
var literature=document.getElementById("literature");
var black=document.getElementById("black");
var page1=document.getElementById("page1");
var page2=document.getElementById("page2");
var page3=document.getElementById("page3");
standard.onclick= function () {
    page1.style.display="block";
    page2.style.display="none";
    page3.style.display="none";
}
literature.onclick= function () {
    page1.style.display="none";
    page2.style.display="block";
    page3.style.display="none";
}
black.onclick= function () {
    page1.style.display="none";
    page2.style.display="none";
    page3.style.display="block";
}

//page
var colorSwicth=document.getElementById("color-swicth1");
var pageColorfull=document.getElementById("page-colorfull1");
var colorSwicthLis=colorSwicth.children;
var pageColorfullDivs=pageColorfull.children;
for(var i = 0;i<colorSwicthLis.length;i++){
    colorSwicthLis[i].index=i;
    colorSwicthLis[i].onclick=function(){
        for(var j = 0;j<colorSwicthLis.length;j++){
            colorSwicthLis[j].classList.remove("active");
        }
        this.classList.add("active");

        for(var j = 0;j<colorSwicthLis.length;j++){
            pageColorfullDivs[j]. classList.remove("active")
        }
        pageColorfullDivs[this.index].classList.add("active")

        var colorfull1=pageColorfullDivs[this.index].getElementsByTagName("div");
        animate(colorfull1[0], {"top":60,"right":-10}, function(){
            animate(colorfull1[0], {"top":-20,"right":80});
        });
        animate(colorfull1[1], {"top":20,"right":80}, function(){
            animate(colorfull1[1], {"top":100,"right":0});
        });
    }
}
  //page2部分
var colorSwicth2=document.getElementById("color-swicth2");
var pageColorfull2=document.getElementById("page-colorfull2");
var colorSwicthLis2=colorSwicth2.children;
var pageColorfullDivs2=pageColorfull2.children;
for(var i=0;i<colorSwicthLis2.length;i++){
    colorSwicthLis2[i].index=i;
    colorSwicthLis2[i].onclick= function () {
        for(var j = 0;j<colorSwicthLis2.length;j++){
            colorSwicthLis2[j].classList.remove("active");
        }
        this.classList.add("active");

        for(var j = 0;j<colorSwicthLis2.length;j++){
            pageColorfullDivs2[j]. classList.remove("active")
        }
        pageColorfullDivs2[this.index].classList.add("active")
        var colorfull2=pageColorfullDivs2[this.index].getElementsByTagName("div");
        animate(colorfull2[0], {"top":60,"right":-10}, function(){
            animate(colorfull2[0], {"top":-20,"right":80});
        });
        animate(colorfull2[1], {"top":20,"right":80}, function(){
            animate(colorfull2[1], {"top":100,"right":0});
        });
    }
}
//page3部分
var colorBlack=document.getElementById("color-swicth3");
var pagecolorfull3=document.getElementById("page-colorfull3");
var telBlack=pagecolorfull3.children
colorBlack.onclick= function () {
    animate(telBlack[0], {"top":60,"right":-10}, function(){
        animate(telBlack[0], {"top":-20,"right":80});
    });
    animate(telBlack[1], {"top":20,"right":80}, function(){
        animate(telBlack[1], {"top":100,"right":0});
    });
}




function animate(obj, json, fn) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var flag = true;
        for (var k in json) {
            var leader = parseInt(getStyle(obj, k)) || 0;
            var target = json[k];
            var step = (target - leader) / 10;
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            leader = leader + step;
            obj.style[k] = leader + "px";
            if (leader != target) {
                flag = false;
            }
        }
        if (flag) {
            clearInterval(obj.timer);
            if (fn) {
                fn();
            }
        }
    }, 15);
}
function getStyle(obj, attr) {
    if (obj.currentStyle) {
        return obj.currentStyle[attr];
    } else {
        return window.getComputedStyle(obj, null)[attr];
    }
}

//human部分
window.onscroll = function () {
    var header=document.getElementById("header");
    var subnavShow=document.getElementById("nav-sub-show");
    var subnavHide=document.getElementById("nav-sub-hide-box");
    var topH=header.offsetHeight+subnavShow.offsetHeight
    if(scroll().top>topH ){
        subnavShow.style.display="none";
        subnavHide.style.display="block";
        /*subnavShow.hide();
        subnavHide.show();*/
        subnavHide.style.position="fixed";
        subnavHide.style.top="0px";
        subnavHide.style.zIndex="2";

    }else{
        subnavShow.style.display="block";
        subnavHide.style.display="none";
        /*subnavShow.show();
        subnavHide.hide();*/
    }
    var human = document.getElementById("human");
    var humanLeftImg = document.getElementById("human-left-img");
    var humanRightImg = document.getElementById("human-right-img");
    var topH = human.offsetTop;
    var botH = topH + human.offsetHeight;
    if (scroll().top > topH && scroll().top < botH) {
        animate2(humanLeftImg, {"width": 300,"left":0},function () {
            animate(human, {"heigth": 1310})
        });
        animate2(humanRightImg, {"width": 300,"right":0}, function () {
            animate(human, {"heigth": 1310})
        });
    } else {
        animate2(humanLeftImg, {"width": 339}, function () {
            animate(human, {"heigth": 1310})
        });
        animate2(humanRightImg, {"width": 339}, function () {
            animate(human, {"heigth": 1310})
        });
    }
}

function scroll() {
    return {
        top: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
        left: window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0
    };
}
function animate2(obj, json, fn) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var flag = true;
        for (var k in json) {
            if (k === "opacity") {
                var leader = getStyle(obj, k) * 1000;
                var target = json[k] * 1000;
                var step = (target - leader) / 2;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                leader = leader + step;
                obj.style[k] = leader / 1000;
            } else if (k === "zIndex") {
                obj.style.zIndex = json[k];
            } else {
                var leader = parseInt(getStyle(obj, k)) || 0;
                var target = json[k];
                var step = (target - leader) / 10;
                var step = step > 0 ? Math.ceil(step) : Math.floor(step);
                leader = leader + step;
                obj.style[k] = leader + "px";
            }

            if (leader != target) {
                flag = false;
            }
        }
        if (flag) {
            clearInterval(obj.timer);
            if (fn) {
                fn();
            };
        };
    }, 100);
}
function getStyle(obj, attr) {
    if (obj.currentStyle) {
        return obj.currentStyle[attr];
    } else {
        return window.getComputedStyle(obj, null)[attr];
    }
}

$(function () {
    $(".language").hover(function () {
        $("#more_lag").show();
    }, function () {
        $("#more_lag").hide();
    })
    $("#more_lag li").click(function () {
        $("#lags").html($(this).html());
        //$("#lags s").css("backgroundPositionY",($(this).index()*-30));
        //alert($(this).index());
    });
    $(".en").click(function () {
        $("#lags s").css("backgroundPositionY",-30);
    })
    $(".jp").click(function () {
        $("#lags s").css("backgroundPositionY",-61);
    })
});