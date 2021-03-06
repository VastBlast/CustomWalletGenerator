const workerpool = require('workerpool');

const pool = workerpool.pool(__dirname + '/worker.js', {
    maxWorkers: undefined // set it here or will use set default based on CPU count
});


for (let i = 0; i < pool.maxWorkers; i++) {
    pool.exec('brute', [])
        .then(function (result) {
            console.log(result);
        })
        .then(function () {
            pool.terminate(true); // terminate all workers when done
        });
}