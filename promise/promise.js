console.log('start');

function getData() {
    return new Promise((resolve, reject) => {
        setTimeout((() => {
            resolve(1);
        }), 10000);
        reject(new Error("promise error!!!"));
    });
}

getData().then((res) => {
    console.log(res);
}).catch(err => {
   console.error(err); 
});;
  