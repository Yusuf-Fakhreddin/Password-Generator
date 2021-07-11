#!/usr/bin/env node

const chalk = require("chalk");
const program = require("commander");
const clipboardy = require("clipboardy");
const createPassword = require("./utils/createPassword");
const savePassword = require("./utils/savePassword");
const log = console.log;
program.version("1.0.0").description("Simple Password Generator");

// specifying options of the command and getting their values

// option(" -alias, --option <value to take> " , "description" , "default value")
program
	.option("-l,--length <number>", "length of password", "8")
	.option("-s,--save", "boolean save password to passwords.txt or not ")
	.option("-nn,--no-numbers", "remove numbers")
	.option("-ns,--no-symbols", "remove symbols")
	.parse();

// default save: false & default save: false & default symbols : true
const { length, save, numbers, symbols } = program.opts();

// Get generated password
const generatedPassword = createPassword(length, numbers, symbols);

// Save to file
if (save) {
	savePassword(generatedPassword);
}

// copy to clipboard
clipboardy.writeSync(generatedPassword);

log(chalk.blue("Generated Password: ") + chalk.bold(generatedPassword));
log(chalk.yellow("Password coppied to your clipboard"));
