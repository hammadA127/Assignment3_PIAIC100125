var st_name=["Michal","John","Tony"];
var st_score=[320,230,480];
var total_score=500;

var qc=document.getElementById("qc");

for(var i=0; i<st_name.length;i++){
    qc.innerHTML +="<p>Score of "+st_name[i]+" is "+st_score[i]+". Percentage: "
    +(st_score[i]/total_score)*100+"%"+"</p>";    
}