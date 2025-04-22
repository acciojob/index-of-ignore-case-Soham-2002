function indexOfIgnoreCase(s1, s2) {
  // write your code here
	let text = s1.toUpperCase()
	let ser = s2.toUpperCase();
	let idx = text.indexOf(ser)
	return idx
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
