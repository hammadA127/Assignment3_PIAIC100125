var qualification =["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
var qc=document.getElementById("qc");
qc.innerHTML +="<h1>Qualifications</h1>";
var ol = document.createElement("ol");
for(i=0;i<qualification.length;i++){
    var node = document.createElement("li");
    node.innerText = qualification[i];
    ol.appendChild(node);
}
qc.appendChild(ol);