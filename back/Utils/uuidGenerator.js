const idGenerator = length => {
	let result = '';
	for (let index = 0; index < length; index++) {
		let charNum = 48 + Math.floor(Math.random() * 62);
		charNum = charNum > 57 ? charNum + 7 : charNum;
		charNum = charNum > 90 ? charNum + 6 : charNum;
		char = String.fromCharCode(charNum);
		// console.log(char);
		result += char;
	}
	return result;
};

module.exports = idGenerator;
