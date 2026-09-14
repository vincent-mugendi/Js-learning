setTimeout(() => {
	console.log("Timer finished!");
}, 0);

const start = Date.now();

while (Date.now() - start < 5000) {
}

console.log("Loop finished");
