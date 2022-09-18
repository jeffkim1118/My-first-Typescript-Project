export {}

function searchPrice(){
	let symbol = (<HTMLInputElement>document.getElementById("symbol")).value;
	const encodedParams = new URLSearchParams();
	encodedParams.append("symbol", `${symbol}`);
	encodedParams.append("period", "1d");
	
	const options = {
		method: 'POST',
		headers: {
			'content-type': 'application/x-www-form-urlencoded',
			'X-RapidAPI-Key': 'a8f76c54e4mshe8e1ce45440e780p1c666djsn50a9f2fb428f',
			'X-RapidAPI-Host': 'yahoo-finance97.p.rapidapi.com'
		},
		body: encodedParams
	};

    fetch('https://yahoo-finance97.p.rapidapi.com/price', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
}