function parseMultilineString(string) {
    "use strict";
    var data = string.substring(16);
    data = data.split("(").join("");
    data = data.split(")").join("");
    data = data.split(", ");
    var parsed = [];
    for (let pair of data) {
        pair = pair.split(" ");
        [pair[0], pair[1]] = [pair[1], pair[0]];
        parsed.push(pair)
    }
    return parsed;
}
