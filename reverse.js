function reverse(org){
    let rev =" ";
    let= index = org.length -1;
    do{
        rev = rev + org[index];
        index--;
    } while(index>=0)
    return rev;

}
var org="smriti";
var rev = reverse(org);
console.log(rev);