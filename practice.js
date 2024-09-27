function sum(x, y) {
    const result = normalize(x) + normalize(y);

    function normalize(i) {
        if (i < 0) {
            return 0;
        }

        return i;
    }

    console.log(result);
}

// console.log(sum(-5,10));
sum(-5,10);