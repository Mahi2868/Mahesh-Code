//rajiv@webileapps.com
/*
Expected output : 

{
    "10-14": { "male" : 1, "female": 1},
    "15-19": { "male": 1, "female": 0},
    "20-24": { "male": 0, "female": 1},
    "25-29": { "male": 0, "female": 1},
}

{
    "0-04": { "male" : 2, "female": 0},
    "05-09": { "male": 1, "female": 0},
    "10-14": { "male": 0, "female": 1},
    "15-19": { "male": 0, "female": 1},
}

1. Marks are always integers.
2. The ranges will depend on the data and they are always continuous.
3. Each range will be of size 5 and start with a multiple of 5.
*/


const students = [
    {"name": "user1", "marks": 2, "gender": "male"},
    {"name": "user2", "marks": 4, "gender": "male"},
    {"name": "user3", "marks": 13, "gender": "male"},
    {"name": "user4", "marks": 20, "gender": "female"},
    {"name": "user5", "marks": 25, "gender": "female"},
]

//this is the actual function for our task
function getMarksBreakDown(data) {
    let max = data.reduce((max, p) => p.marks > max ? p.marks : max, data[0].marks);
    var range = 0;
    var output = {};

    while(range<= max) {
        let startRange = range, endRange = range+4;
        var subArray =  data.filter(function(item) {
            return item.marks >= startRange && item.marks <= endRange;
        });
        let male = 0, female = 0;
        subArray.map(function(x){
            if(x.gender=="male"){
                male += 1;
            } else {
                female += 1;
            }
        })
        output[startRange + "-" + endRange] = {"male": male, "female": female}
        range += 5;
    }
    console.log("input: ", students)
    console.log("output: ", output)
    return output;
}

getMarksBreakDown(students);

function getAverage(data) {
    var total = 0;
    var count = 0;
    // for(let i = 0; i < data.length; i++) {
    //     if(data[i].gender=="female") {
    //         count++;
    //         total += data[i].marks;
    //     }
    // }
    // data.map(function(item){
        // console.log("item:", item);
        // if(item.gender=="female") {
        //     count++;
        //     total += item.marks;
        // }
        var marvelHeroes =  data.filter(function(hero) {
            return hero.gender == "female";
        });
        console.log("marvelHeroes: ", marvelHeroes);
        var sum = marvelHeroes.reduce((a, b) => (a.marks + b.marks));
        console.log("sum: ", sum);
        
    // });
    return sum/marvelHeroes.length;
}
// console.log(getAverage(students));