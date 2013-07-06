function fibo(n)
{
	var a =-1,b=1,c,i;
	for(i=0;i<n;i++)
	{
		c=a+b;
		console.log(c);
		a=b;
		b=c;
	}
}
(fibo(10);
