function curriedAdd(total) {
    if (arguments.length) {
    return function addTo(num) {
        if (!num) {return total;}
        total += num;
        return addTo;
    }
    } 
    return 0
}

module.exports = { curriedAdd };
