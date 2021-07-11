const fs = require("fs");
const path = require("path");
const os = require("os");
const chalk = require("chalk");

const savePassword = (password) => {
	// creates the file if it does not exits

	// fs.open(current directory create the file , append , 666 permissions , call back to execute after opening the file write (id, text to write + EOL for new line , null position , encoding m call back to execute when writing is done )  )

	fs.open(path.join(__dirname, "../", "passwords.txt"), "a", 666, (e, id) => {
		fs.write(id, password + os.EOL, null, "utf-8", () => {
			fs.close(id, () => {
				console.log(chalk.green("Password saved to passwords.txt"));
			});
		});
	});
	// "a" to appened to the file not replace its value
};

module.exports = savePassword;
