
function rFibonacci(n) {
    if(n <= 1)
        return n;
    return rFibonacci(n - 1) + rFibonacci(n - 2);
}
function iFibonacci(n) {
    let a = 1, b = 0, temp;

    while(n > 0) {
        temp = a;
        a = a + b;
        b = temp;
        n--;
    }
    
    return b;
}
exports.rFibonacci = rFibonacci;
exports.iFibonacci = iFibonacci;