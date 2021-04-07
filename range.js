// Works as python's range

const range = (n, start = 0, step = 1) => {
    return Object.keys(Array(n).fill())
    .map((x) => Number(x))
    .filter((x) => x + start < n)
    .map((x) => x + start)
    .filter((x, i) => !(i % step));
}
