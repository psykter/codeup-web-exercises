function calculateLapTimeAverage(lapTimes) {
    if (lapTimes.length === 0) {
        return 0;
    }
    const sum = lapTimes.reduce((total, time) => total + time, 0);
    return sum / lapTimes.length;
}

function getTopRunners(runners) {
    const topRunners = [];
    for (let i = 0; i < runners.length; i++) {
        const runner = runners[i];
        const averageLapTime = calculateLapTimeAverage(runner.lapTimes);
        if (averageLapTime <= 50) {
            topRunners.push({
                name: runner.name,
                age: runner.age
            });
        }
    }
    return topRunners;
}

const runners = [
    { name: "Alice", age: 25, lapTimes: [50.5, 45.2, 48.8, 47.1] },
    { name: "Bob", age: 28, lapTimes: [55.2, 50.7, 53.3, 52.9] },
    { name: "Charlie", age: 24, lapTimes: [48.9, 46.3, 50.1, 49.5] },
    { name: "David", age: 27, lapTimes: [51.4, 50.2, 49.8, 52.3] },
    { name: "Eve", age: 26, lapTimes: [47.7, 45.9, 46.6, 48.3] },
];

const topRunners = getTopRunners(runners);
console.log(topRunners);


