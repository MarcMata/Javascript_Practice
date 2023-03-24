const timeSinceMidnight = (h, m , s) =>{
    let millisInHours = 60 * 60 * 1000;
    let millisInMinutes = 60 * 1000;
    let millisInSeconds = 1000;
    let totalMillis;
    if (0 <= h <= 23 && 0 <= m <= 59 && 0 <= s <= 59) {
        totalMillis =
            h * millisInHours +
            m * millisInMinutes +
            s * millisInSeconds;
    }
    return totalMillis;
}