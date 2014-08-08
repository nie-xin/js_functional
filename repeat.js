function repeat(operation, num) {
    if (num !== 1) {
        repeat(operation, num - 1);
    } else {
        operation();
    }
}

module.exports = repeat;
