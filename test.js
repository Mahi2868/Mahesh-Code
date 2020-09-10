var uniqList = function(arr) {
	let newArr = [];
	for(let i = 0; i < arr.length; i++) {
		if(newArr.indexOf(arr[i]) === -1){
			newArr.push(arr[i]);
		}
	}
	return newArr;
}
console.log(uniqList([1,2,3,3,2,1,2,3]))

var getSysDia = (input, id)=>{
	for(let j = 0; j < input.length; j++){
		if(input[j].id == id){
			return input[j];
		}
	}
}

let bpReadings = [
  {id: 1, sys: 121, dia: 92},
  {id: 2, sys: 129, dia: 89},
  {id: 3, sys: 118, dia: 93},
  {id: 4, sys: 120, dia: 87},
]
console.log(getSysDia(bpReadings, 3));

const product = {name:"abc", price:22};
product.price = 36;
console.log("product: ",product);