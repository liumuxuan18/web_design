
$(function(){   // 這是匿名函式，會在網頁載入完成時自動執行   
  // 綁定 dragenter 事件  //進入
  $("#dropbox").on("dragenter", dragenter);
  // 綁定 dragleave 事件   //離開
  $("#dropbox").on("dragleave", dragleave);
  // 綁定 dragover 事件
  $("#dropbox").on("dragover", dragover);
  // 綁定 drop 事件
  $("#dropbox").on("drop", drop);
});

function dragenter(){
  // 改變 dropbox 背景色為紅色
  $("#dropbox").css("background-color","red");
  // 改變 dropbox 文字為 "Drop it!"
  $("#dropbox").text("Drop it!");
}

function dragleave() {
  // 改變 dropbox 背景色為藍色
  $("#dropbox").css("background-color", "blue");
  // 改變 dropbox 文字為 "Come here."
  $("#dropbox").text("Come here.");
}  

function dragover(e) {
// 禁止瀏覽器的預設功能 (通常是改變瀏覽器的檔案位置)
  e.preventDefault();
}

function drop(e) {
  e.preventDefault();
  // debugger;
  // 取得拖拽的檔案
  let files =e.originalEvent.dataTransfer.files;

  // 如果沒有檔案則退出
  if(files.length==0){
    return false;
  }

 // 轉換第一個檔案 
  convert(files[0]);
}

// 轉換檔案的函式
function convert(file){
   //如果判斷不是文字檔執行以下  //查看是否為文字類型的檔案
  if(!file.type.match(/text.*/)){
    alert('請拖放文字檔');
    dragleave();
    return false;
  }

  let reader = new FileReader();

  reader.onloadend=function(){
    let s = reader.result;
    $('#preview').text(s);

  };

  reader.readAsText(file);
}