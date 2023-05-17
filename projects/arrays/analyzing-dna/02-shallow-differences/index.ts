// Write your shallowDifferences function here! ✨
function shallowDifferences(
	a: string[],
	b: string[]
): (string | undefined)[] | undefined {
	if (a.length !== b.length) {
		return undefined;
	}
	let differences: (string | undefined)[] = [];
	for (let i = 0; i < a.length; i++) {
		differences.push(a[i] === b[i] ? a[i] : undefined);
	}
	return differences;
}
// You'll need to export it so the tests can run it.
export { shallowDifferences };
