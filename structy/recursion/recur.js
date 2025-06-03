function countDown(n){
    if (n ===  0 )return 
    console.log('Entering', n)
    countDown(n - 1 )
    console.log("returning from", n)
}
countDown(2)