function createAge() {
	let numbers = [];
	for (let i = 1; i <= 100; i++) {
		numbers.push(i);
	}

	let currentIndex = numbers.length,
		randomIndex;

	// While there remain elements to shuffle.
	while (currentIndex != 0) {
		// Pick a remaining element.
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex--;

		// And swap it with the current element.
		[numbers[currentIndex], numbers[randomIndex]] = [
			numbers[randomIndex],
			numbers[currentIndex],
		];
	}

	return numbers;
}

function numConsequences(num: number) {
	let msg = "That age seems okay, you may proceed";
	if (num === 69 || 420) {
		msg = "Daaaaaaamn, okay, that is a great age. Nice work";
	}
	if (num === 32 || 25 || 29 || 43) {
		msg = "Woah, you are too old, you can forget about this";
	}
	if (num < 18) {
		msg =
			"Age up a bit and try again in a few years (or lie on this form, I'm not the police)";
	}
	return msg;
}

function alertText(msg: string) {
	alert(msg);
}

export { createAge, numConsequences, alertText };
