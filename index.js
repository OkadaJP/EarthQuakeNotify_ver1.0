import  {earthquakeModel}  from "./earthquakeModel.js";

const url =  "https://api.p2pquake.net/v2/history?codes=556";
let message = "";
let list = [];

setInterval(getMessage,2000);

async function getMessage(){
    let response = await fetch(url);
    let result = await response.json();
    message = result;
    
    await message.forEach(element => {
        if(list.length == 0){
            convertScale(element['areas'][0]['scaleFrom'])
            .then(
            (result) => {
                let obj = new earthquakeModel(element['id'],result,element['areas'][0]['pref'],element['earthquake']['originTime']);
                createMessage(obj);
            }).catch((err) => {
                console.log(err);
            });
            
        }
    });
}

function createMessage(obj){
    console.log(obj.getTime + "に、");
    console.log(obj.getPlace+"県で");
    console.log(obj.getLevel + "の地震が発生しました。");
}

async function convertScale(num){
    switch(num){
        case 10:
        return "震度１";
        case 20:
        return "震度２";
        case 30:
        return "震度３";
        case 40:
        return "震度４";
        case 45:
        return "震度５弱";
        case 50:
        return "震度５強";
        case 55:
        return "震度６弱";
        case 60:
        return "震度６強";
        case 70:
        return "震度７";
        default:
        return "震度不明";
    }
}