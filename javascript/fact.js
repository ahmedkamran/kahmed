function factorial(n)
{
	var i,fact=1;
	for(i=1;i<=n;i++)
	{
		fact=fact*i;
	}
	return fact
}
console.log(factorial(5));
