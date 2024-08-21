/**
 * @param { int } num
 * 
 */


function fibonatti(num) {
    if (num <= 1) 
        return num 
    return fibonatti(num-1) + fibonatti(num-2)
}
console.log(

    fibonatti(2)
)

