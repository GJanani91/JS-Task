const number= [ [ 5, 8, 7, 12, 13 ],[ 1, 3, 4 ] ]
let arr = number.flat();
console.log(arr);
let deleted_value=[];
for(i=0;i<arr.length;i++){
    if((arr[i]==5)||(arr[i]==7))
    {
        let splice_value =arr.splice(i,1);
        deleted_value.push(splice_value);

    }
}
console.log("The deleted values are:  "+deleted_value);
console.log("The remaining elements are: "+arr);
