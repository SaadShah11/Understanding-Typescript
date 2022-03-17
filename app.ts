
//==================UNION TYPES==============
//union is used to add multiple types i.e. number | string | boolean etc

//here we want the inputs to be more flexible i.e. add numbers and strings also
function combine(input1: number | string, input2: number | string){
    //const result = input1 + input2;//this line gives some error so using a workaround this below
    let result;
    if(typeof input1 === 'number' && typeof input2 === 'number'){
        result = input1 + input2;
    }else{
        result = input1.toString() + input2.toString();
    }

    return result;
}

const combineAges = combine(30, 50);
const combineNames = combine("Saad", "Shah");

console.log(combineAges+ " "+combineNames)
