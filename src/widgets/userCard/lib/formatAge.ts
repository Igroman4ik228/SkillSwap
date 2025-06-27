export function formatAge(age: number): string {
	const abs = Math.abs(age);
	const lastTwo = abs % 100;
	const lastOne = abs % 10;

	if (lastTwo >= 11 && lastTwo <= 19) return `${age} лет`;
	if (lastOne === 1) return `${age} год`;
	if (lastOne >= 2 && lastOne <= 4) return `${age} года`;
	return `${age} лет`;
}
