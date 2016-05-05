/*
 * index.js
 */
var InstructionRestart = require(__dirname+'/restart.js'); 
var InstructionStart = require(__dirname+'/start.js');
var InstructionStop = require(__dirname+'/stop.js');

var self = this; // set the context locally, for access protection

/**
 * Create a new Instruction that let users create sub-instruction.
 * @return {Instruction}
 */
function Instruction() {
  console.log('instructions instruction - Instruction called'); 
  // add key value pairs here
  // self's are not directly publicly accessible, only through their public method(s)
  // use self's here for protection from direct access
  self._foo = {};  // will be set
}

Instruction.prototype.foo = function() {
  return self._foo;
}

Instruction.prototype.setfoo = function(fnOrValue) {
  self._foo = fnOrValue;
}

Instruction.prototype.restart = function() {
  return new InstructionRestart();  
}

Instruction.prototype.start = function() {
  return new InstructionStart();  
}

Instruction.prototype.stop = function() {
  return new InstructionStop();  
}

module.exports = Instruction;
