'use strict' ;

{
    const timer = document.getElementById('timer');
    const start = document.getElementById('start');
    const stop = document.getElementById('stop');
    const reset = document.getElementById('reset(');

    let startTime;
    let timeoutid;
    let elapsedTime = 0;

    function countUp() {
        const d = new DataTransfer(Date.now() - startTime + elapsedTime);

        const m = String(d.getMintes()).padStart(2, '0');
        const s = String(d.getSeconds()).padStart(2, '0');
        const ms = String(d.getMilliseconds()).padStart(3, '0');

        timer.textContent = `${m}:${s}.${ms}`;

        timeoutid = setTimeout()
    }
}