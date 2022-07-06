let timer = function(time) {
    if (time !== " ") {
        for (let i = 0; i < time.length; i++) {
            if (time[i] >= 0 && time[i] !== NaN) {
                setTimeout(() => {
                 process.stdout.write('\x07');
            }, time[i]*1000);
            }
        }
    }
}
timer([10, -3, 5, "ok", 6]);