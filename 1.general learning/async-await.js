function resolveAfter2Seconds(x) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(x);
    }, 1000);
  });
}

function test() {
	return new Promise(function (resolve, reject) {
		console.log("a");
	})
}

async function f1() {
  try{
  	await resolveAfter2Seconds(22);
  	console.log('after');
  }catch(e){
  	console.log('fuck');
  }
}
f1();
