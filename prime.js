function checkPrime(num)
{
    if(num <= 1)
    {
        return false;
    }
    
    for(let i = 2; i <= num**0.5; i++)
    {
        if(num % i == 0)
            return false;
    }
    
    return true;
}

console.log(checkPrime(13));
