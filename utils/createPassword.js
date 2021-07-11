const alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*_-+=";

const createPassword = (length = 8, hasNumbers = true, hasSymbols = true) => {
	let allPossibleChars = alpha;
	hasNumbers ? (allPossibleChars += numbers) : "";
	hasSymbols ? (allPossibleChars += symbols) : "";
	return generatePassword(length, allPossibleChars);
};

const generatePassword = (length, allPossibleChars) => {
	let password = "";
	for (let i = 0; i < length; i++) {
		password += allPossibleChars.charAt(
			Math.floor(Math.random() * allPossibleChars.length)
		);
	}
	return password;
};

module.exports = createPassword;
