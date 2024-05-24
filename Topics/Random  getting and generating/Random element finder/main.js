function getRomanNumber(array) {
// Write your code here
    let randomIndex = Math.floor(Math.random()* (array.length-1))+1;
    return array[randomIndex];
}