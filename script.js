var request = new XMLHttpRequest();
request.open('GET','https://restcountries.com/v2/all',true);
request.send();
request.onload=function(){
    var data = JSON.parse(request.response);
    //console.log(data);
    // for(i = 0; i<data.length; i++){
    //      console.log(data[i].id,data[i].name,data[i].email);
    //       //console.log(data[i].name);
    //       //console.log(data[i].capital);
    //       //console.log(data[i].population);
    // }
    var res = data.filter((value) => value.population < 100000)
    console.log(res);

}