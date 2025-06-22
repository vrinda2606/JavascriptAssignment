var date = ['2015/02/01', '2015/02/02', '2015/01/03'];

function minDate(date){
    var temp = new Date(date[0]);
    temp = temp.getTime() ;
    var ans = date[0];
    for(let i = 1 ; i < date.length ; i++){
        var d = new Date(date[i]);
        d = d.getTime();
        if(temp > d){
            temp = d;
            ans = date[i];
        }
    }
    return ans;
    
}
console.log(minDate(date));
