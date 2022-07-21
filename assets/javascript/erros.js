function validaArray(arr,num){
   try {
    if(!arr && !num) throw new ReferenceError('Envie os parâmetros!');
    
    if(typeof arr !== 'object') throw new TypeError('Array precisa ser do tipo Object');

    if(typeof num !== 'number') throw new TypeError('Num precisa ser do tipo Number');

    if(arr.length !== num) throw new RangeError('Tamanho inválido');
    
    //else{
    return arr;
    //   }
   } catch (e) {
        if(e instanceof ReferenceError){
            console.log('Esse erro é um ReferenceError.');
            console.log(e.message);
        }else if(e instanceof TypeError){
            console.log('Esse erro é um TypeError.');
            console.log(e.message);
        }else if(e instanceof RangeError){
            console.log('Esse erro é um RangeError.');
            console.log(e.message);
        }else{
            console.log(`Ocorreu um erro não esperado.${e}.`);
        }
   }

}

console.log(validaArray([1,2,3],3));