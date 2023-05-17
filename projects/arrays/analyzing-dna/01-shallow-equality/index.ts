// Write your shallowEquality function here! ✨
function shallowEquality(a: string[], b: string[]): boolean {
	if (a.length !== b.length) return false;
	for (let i = 0; i < a.length; i += 1) {
		if (a[i] !== b[i]) return false;
	}
	return true;
}
// You'll need to export it so the tests can run it.
export { shallowEquality };
