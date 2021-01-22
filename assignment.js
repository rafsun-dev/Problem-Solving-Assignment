function kilometerToMeter(kilometer) {
    var result = kilometer * 1000;
    return result;
}

function budgetCalculator(ghori, mobile, laptop) {
    var result = ghori * 50 + mobile * 100 + laptop * 500;
    return result;
}

function hotelCost(days) {
    var rent = 0;
    if (days <= 10) {
        rent = days * 100;
    }
    else if (days <= 20) {
        var firstPartRent = 10 * 100;
        var remaining = days - 10;
        var secondPartRent = remaining * 80;
        rent = firstPartRent + secondPartRent
    }
    else {
        var firstPartRent = 10 * 100;
        var secondPartRent = 10 * 80;
        var remaining = days - 20;
        var thirdPartRent = remaining * 50;
        rent = firstPartRent + secondPartRent + thirdPartRent;
    }
    return rent;
}

function megaFriend(friendName) {
    var largestName = friendName[0];
    for (var i = 0; i < friendName.length; i++) {
        var element = friendName[i];
        if (element > largestName) {
            largestName = element;
        }
    }
    return largestName;
}