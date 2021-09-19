module.exports = length => {
	let result = '';
	for (let index = 0; index < length; index++) {
		let charNum = 48 + Math.floor(Math.random() * 62);
		charNum = charNum > 57 ? charNum + 7 : charNum;
		charNum = charNum > 90 ? charNum + 6 : charNum;
		const char = String.fromCharCode(charNum);
		result += char;
	}
	return result;
};
