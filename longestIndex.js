const x=["Hello","World","Hai"];
let y=0;
let z;

function longestIndex(){
for(let i=0;i<x.length;i++){
if(x[i].length>y) //if(x[i].length>=y) output:World
{
     y =x[i].length;
      z = x[i];

}
}
}
longestIndex();
console.log(""+ z);