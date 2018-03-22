let drawFlatArea = function (count){
    let strResult = ''
    for(i = 1; i <= count; i++){
        strResult += '_';
    }
    return strResult;
}

let drawMountain = function (count){
    let strResult = '/';
    for(i = 1; i <= count; i++){
        strResult += "'";
    }
    strResult += '\\';
    return strResult
}

console.log(drawFlatArea(15), drawMountain(10), drawFlatArea(9), drawMountain(20))