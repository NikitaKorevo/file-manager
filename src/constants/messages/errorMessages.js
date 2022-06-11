export const ERROR_MESSAGES = {
  invalidInput: 'Invalid input',
  operationFailed: 'Operation failed',

  printInvalidInput: function () {
    return console.error(this.invalidInput);
  },

  printOperationFailed: function () {
    return console.error(this.operationFailed);
  },
};
