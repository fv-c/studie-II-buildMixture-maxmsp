function buildMisture(v) {
	var res = [];
	for(var i = 0; i < 5; i++) {
		res[i] = v * Math.pow(5,i/25);
	}
	return res;
}

function msg_float(v) {
	outlet(0,buildMisture(v));
	}