function censor() {
    const censoredArr = []; // [['abc','sds'],['aaa','fff']]

    return function(str1, str2 = ''){
        if(str2){
            censoredArr.push([str1, str2]);
        }else{
            for (let pair of censoredArr){
                str1 = str1.replace(new RegExp(pair[0], 'gi'), pair[1])
            }
            return str1;
        }
    }
}

const changerScane = censor();

changerScane('PHP','JS'); // ['PHP','JS']

changerScane('back-end','front-end');  // ['back-end','front-end']

console.log(changerScane('PHP is the moment popular programing language for back-end web-development')); //JS is the moment popular programing language for front-end web-development


