


$(function(){
  getLocation();
});

function getLocation(){
  //確認瀏覽器有geolocation的存在 //也可以在console做檢查
  if(navigator.geolocation==undefined){
    alert("Fail to get location"); //如果出現了就代表沒有 就不能使用
    return;//斷掉連線
  }
                  //精確的位置:打開
  let settings ={
    enableHighAccuracy: true
  };
                                      //呼叫result //如果失敗就呼叫第二個function //呼叫settings
  navigator.geolocation.getCurrentPosition(result, error, settings);
}
          //拿到地理資訊
function result(position){
  debugger;
  let thisCoords = position.coords;
                                    //  緯度位址
  console.log(`Location:${thisCoords.latitude},${thisCoords.longitude}`) ; 
               // 經度位址


  window.location.href=`https://maps.google.com.tw?q=${thisCoords.latitude},${thisCoords.longitude}`;
 
}

function error(err){
  alert(err);
}
      
      
  