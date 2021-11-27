
let array = [1,2,3,4,5,6,7,8,9];
let modifiedArray = [];

function shuffleArray() {
    for (let i = array.length-1; i>0;i--){
        let j = Math.floor(Math.random() * (i+1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    modifiedArray = array;
    assignValue(array);
}

function assignValue(modifiedArray){
    for(let i=1;i<=modifiedArray.length;i++){
        let element = "";
        let divElement = document.getElementById("item"+i);
        element = modifiedArray[i-1];
        divElement.innerText = element;
    }
}

function sort(){
    let sortedArray = [];
    sortedArray = modifiedArray.sort();
    assignValue(sortedArray);
}
