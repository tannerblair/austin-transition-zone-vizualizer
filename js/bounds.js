var bounds = [
		[30.372946, -97.726647],
		[30.371673, -97.726872],
		[30.371506, -97.726818],
		[30.356208, -97.730872],
		[30.358377, -97.735581],
		[30.360243, -97.739071],
		[30.361062, -97.740852],
        [30.361310, -97.743996]];

function parseMultilineString(string) {
    "use strict";
    var data = string.substring(18, string.length - 2);
    data = data.split(", ");
    var parsed = [];
    for (let pair of data) {
        pair = pair.split(" ");
        [pair[0], pair[1]] = [pair[1], pair[0]];
        parsed.push(pair)
    }
    return parsed;
}

