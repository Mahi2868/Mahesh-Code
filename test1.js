const printStars = (noOftimes)=> {
    var x = 10;
    var x = 20;
    let y = 5;
    let y = 30;
    for (let i = 1; i <= 10; i++) {
        setImmediate(()=>{
            console.log(i);
        })
    }
    
}
printStars(5);