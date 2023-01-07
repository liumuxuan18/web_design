let mapArray, ctx, currentImagMain;
let imgMountain,imgMain,imgEnemy;
//mapArray-決定地圖中每個格子的元素
//ctx-HTML5Canvas用
//currentImgMain:X,Y-決定主角所在座標
//imgXXX: 圖片物件
const gridLength=200; //每一格200

//網頁載入完成後初始化動作 (遊戲初始化)
$(function(){
//使用二維陣列 //跟畫面上的布局是對等的
    mapArray = [ //0-可走, 1-障礙 ,2-終點 ,3-敵人
        [0,1,1],
        [0,0,0],
        [3,1,2]
    ];

    ctx = $("#myCanvas")[0].getContext("2d");

    //把主角擺上畫面
    imgMain = new Image();
    imgMain.src = "images/spriteSheet.png";

//如果只寫這段 圖片載入會錯過要求時間而跑不出來
    
    currentImagMain = {
        "x":0,
        "y":0
    };

    imgMain.onload = function(){
//剪裁
        ctx.drawImage(imgMain,0,0,80,130,currentImagMain.x,currentImagMain.y,gridLength,gridLength);
    };




});

//處理使用者按下按鍵                //自訂名稱
$(document).on("keydown",function(event){

});


////////


// function loadImages(sources, callback) {
//     var images = {};
//     var loadedImages = 0;
//     var numImages = 0;
//     // get num of sources
//     for(var src in sources) {
//       numImages++;
//     }
//     for(var src in sources) {
//       images[src] = new Image();
//       images[src].onload = function() {
//         if(++loadedImages >= numImages) {
//           callback(images);
//         }
//       };
//       images[src].src = sources[src];
//     }
//   }