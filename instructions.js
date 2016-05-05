/*
 * instructions.js
 */
var InstructionsInstruction = require(__dirname+'/instruction.js');

/**
 * Create a new Instructions that let users create sub-instructions.
 * @return {Instructions}
 */
function Instructions() { }

/**
 * Create a new InstructionsInstruction object.
 * @return {InstructionsInstruction}
 */
Instructions.prototype.instruction = function() {
  return new InstructionsInstruction();
}

module.exports = Instructions;
