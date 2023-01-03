/*
    Main
*/

import  {earthquakeModel}  from "./earthquakeModel.js";

const url =  "https://api.p2pquake.net/v2/history?codes=556";
let message = "";
let list = [];

class getData{

/* APIを利用して地震情報を取得 */
async getMessage(){
    let response = await fetch(url).catch((err)=>{console.log(err)});
    let result = await response.json().catch((err)=>{console.log(err)});
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

/* 地震情報を元にメッセージを作成 */
 createMessage(obj){
    console.log(obj.getTime + "に、");
    console.log(obj.getPlace+"県で");
    console.log(obj.getLevel + "の地震が発生しました。");
}
/*
    震度を日本語表記に変換する
*/
async convertScale(num){
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
}

export {getMessage};