//取得網頁上的第一個按鈕元素，並將其存儲在 thisButton 中
let thisButton = document.getElementsByTagName("button")[0];
//取得id 值 "2022/12/2" 的元素，並將其存儲在 Button20221202 中。
let Button20221202 = document.getElementById("2022/12/2");

//取得id 值 2022/2/22" 的元素，並將其存儲在變量 Button20220222 中。。
let Button20220222 = document.getElementById("2022/2/22");
let Button20220104 = document.getElementById("2022/1/4");
let showData = document.getElementById("showData");



//為這些 HTML 元素添加點擊事件監聽器，當用戶點擊這些元素時，會觸發函數 loadServerData。

thisButton.addEventListener("click", loadServerData);
Button20221202.addEventListener("click", loadServerData);
Button20220222.addEventListener("click", loadServerData);
Button20220104.addEventListener("click", loadServerData);

function loadServerData(){
    // debugger;
    console.log("Load Server Data!");
    let xmlHttpRequest;
    if(window.XMLHttpRequest){
        xmlHttpRequest = new XMLHttpRequest();
    }else{
        alert("No XMLHttpRequest!!");
        return;
    }
    let thisMoment;
    if (this.id == ""){
        thisMoment = new Date();
    }else{
        thisMoment = new Date(this.id);
    }
    let thisYear = thisMoment.getFullYear();
    let thisMonth = thisMoment.getMonth() + 1 < 10 ? "0" + (thisMoment.getMonth() + 1) : thisMoment.getMonth() + 1;
    let thisDay = thisMoment.getDate() < 10 ? "0" + thisMoment.getDate() : thisMoment.getDate();
    // debugger;
    let thisDate = thisYear.toString() + thisMonth.toString() + thisDay.toString();

    //settings for XMLHttpRequest object
    xmlHttpRequest.open("GET",thisDate+".txt", true);
    xmlHttpRequest.send();

    xmlHttpRequest.onreadystatechange = function(){
        console.log("readyState : ", xmlHttpRequest.readyState);
        console.log("status : ", xmlHttpRequest.status);
        if(xmlHttpRequest.readyState == 4 && xmlHttpRequest.status == 200){
            showData.innerHTML = "";
            showData.innerHTML = "<pre>"+xmlHttpRequest.responseText+"</pre>";
            // thisButton.style.visibility = "hidden";
        }
    };

}



//隨機笑話
$(function(){
    $("#randomBtn").on("click", loadRandomJoke);
});

function loadRandomJoke(){
    $.getJSON("https://api.chucknorris.io/jokes/random")
    //把網路抓的資料放在data這一包
    .done(function(data){
        console.log("Success");
        console.log(data.value);
        //每次執行時先把資料清空，再載資料
        $("#showData").empty();
        // $("#showData").html(`<pre>${data.value}</pre>`);
        $("#showData").text(data.value);
    })
    .fail(function(err){
        // debugger;
        console.log("Status Code : ",err.status);
    })
    //無論成功或失敗都想做的事
    .always(function(){
        console.log("Complete!");
    })
}