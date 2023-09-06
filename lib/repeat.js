
/**
 * @function repeat
 * @param String Number
 * @description repeats a string n number of times
 */
function repeat(string, num){
    let repeatedString = '';
    if(typeof string === 'string' && typeof num === 'number'){
        if(num < 1){
            return repeatedString;
        }
        for(let i = 1; i < num; i++){
            repeatedString += string;
        }
    
        return repeatedString;
    }else{
        return console.log('Error invalid String or Number entered');
    }
}

export default repeat;
