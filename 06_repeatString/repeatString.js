const repeatString = function(str, num) {
    if (num < 0){
        return "ERROR";
    }
    output_str = "";
    for (let i = 0; i < num; i++){
        output_str = output_str + str;
    }
    return output_str;
};

// Do not edit below this line
module.exports = repeatString;
