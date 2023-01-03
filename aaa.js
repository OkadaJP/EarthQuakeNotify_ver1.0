"use strict"

let promise = new Promise(function(resolve, reject) {
  // promise が作られたとき、関数は自動的に実行されます

  // 1秒後、ジョブが "done!" という結果と一緒に完了したことを合図します
  setTimeout(() => resolve(console.log("Hello World")), 1000);
}
)