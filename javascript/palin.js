function palin(n)
{
	var m=n,sum=0,p;	
	while(n>0)
	{
		p=n%10;
		sum=sum*10+p;
		n= Math.floor(n/10);
	}
	if(sum==m)
	{
		return true
	}
	else
	{
		return false
	}
	
}
console.log(palin(12321));
