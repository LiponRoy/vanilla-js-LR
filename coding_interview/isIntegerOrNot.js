const isIntegerOrNot = (val) => {
	// kono digit k 1 dea vag dile vag ses 0 hobe jodi integer hoy
	// jmon 5 ekke 5,   10 ekke 10,
	if (val % 1 === 0) {
		console.log('Integer');
	} else {
		console.log('Not Integer');
	}
};

const num = 200;

isIntegerOrNot(num);
