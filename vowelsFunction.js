const str="Hello World! Aim";
const v="a,e,i,o,u";
let count=0;
let str1=str.toLowerCase();
vowelsCount();
function vowelsCount(){
for(let i=0;i<str1.length;i++)
{
    for(let j=0;j<v.length;j++)
    {
        if(str1[i]==v[j])
        count++;
    }

    
}
return count;

}
console.log("The vowels count in the given string: "+count);
