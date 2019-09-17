var _0xeef2=["\x75\x73\x65\x20\x73\x74\x72\x69\x63\x74","\x70\x75\x73\x68","\x6C\x65\x6E\x67\x74\x68","\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D\x2D","\x6C\x6F\x67","\x6D\x61\x78","\x73\x6C\x69\x63\x65"];
_0xeef2[0];var isPrime=function isPrime(_0x2d82x2)
{
	for(var _0x2d82x3=2;_0x2d82x3< _0x2d82x2;++_0x2d82x3)
	{
		if(_0x2d82x2% _0x2d82x3=== 0)
		{
			return false
		}
	}
	return true
}
;
var getXPrimeNumber=function getXPrimeNumber(_0x2d82x5)
{
	var _0x2d82x6=0;
	var primes=[];
	for(var _0x2d82x3=2;_0x2d82x6< _0x2d82x5;++_0x2d82x3)
	{
		if(isPrime(_0x2d82x3))
		{
			primes[_0xeef2[1]](_0x2d82x3);_0x2d82x6++
		}
	}
	return primes
}
;
var max=10003;
var primes=getXPrimeNumber(10003);
var lastPrime=primes[primes[_0xeef2[2]]- 1];
var lastLastPrime=primes[primes[_0xeef2[2]]- 2];
var lastLastLastPrime=primes[primes[_0xeef2[2]]- 3];
console[_0xeef2[4]](_0xeef2[3]);console[_0xeef2[4]](primes[_0xeef2[6]](Math[_0xeef2[5]](primes[_0xeef2[2]]- 5,1)));console[_0xeef2[4]](_0xeef2[3])
