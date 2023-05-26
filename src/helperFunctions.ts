
export function createAge() {
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
