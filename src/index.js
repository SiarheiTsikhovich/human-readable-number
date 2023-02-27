module.exports = function toReadable(number) {
    const oneNineteen = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const dozens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const textNumber = number.toString();
    let readableNumber = '';

    if (number == 0) {
        readableNumber = 'zero';
    }
    else if (number < 20) {
        readableNumber = oneNineteen[number];
    } else if (number >= 20 && number < 100) {
        readableNumber = dozens[textNumber[0]] + ' ' + oneNineteen[textNumber[1]];
    } else if (number >= 100 && number < 1000) {
        if (textNumber[1] == '1') {
            readableNumber = oneNineteen[textNumber[0]] + " " + "hundred" + " " + oneNineteen[textNumber[1] + textNumber[2]];
        } else if (textNumber[1] == '0') {
            readableNumber = oneNineteen[textNumber[0]] + " " + "hundred" + " " + oneNineteen[textNumber[2]];
        } else if (textNumber[1] != '1' && textNumber[1] != '0') {
            readableNumber = oneNineteen[textNumber[0]] + " " + "hundred" + " " + dozens[textNumber[1]] + ' ' + oneNineteen[textNumber[2]];
        }
    }
    return readableNumber.trim();
}
