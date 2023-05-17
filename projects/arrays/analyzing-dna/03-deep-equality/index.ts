// Write your deepEquality function here! ✨
function deepEquality(a: string[][], b: string[][]): boolean {
	if (a.length !== b.length) return false;
	for (let i = 0; i < a.length; i++) {
		if (a[i].length !== b[i].length) return false;
		for (let j = 0; j < a[i].length; j++) {
			if (a[i][j] !== b[i][j]) return false;
		}
	}
	return true;
}
// You'll need to export it so the tests can run it.
export { deepEquality };
