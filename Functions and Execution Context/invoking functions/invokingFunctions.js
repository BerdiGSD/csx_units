let calls = "";

function jerry(str) {
// [0] concat str with Jerry
    str += "Jerry";
// then return invocation of kramer
    return kramer(str);
}

function george(str) {
// [2] concat str with George
    str += "George";
// then return invocation of elaine
    return elaine(str);
}

function elaine(str) {
// [3] concat str with elaine
	str += "Elaine";
// then return to calls
	return str;
}

function kramer(str) {
// [1] concat str with Kramer
    str += "Kramer";
// then return invocation of george'
    return george(str);
}


// Uncomment these to check your work!
calls = jerry(calls);
console.log(calls); // should log: 'JerryKramerGeorgeElaine'