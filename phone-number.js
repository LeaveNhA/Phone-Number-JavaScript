export class PhoneNumber {
    constructor(n) {
        this.numberData = n;
    }

    number() {
        let ignoreNullWrapper = f => args => args === null ? null : f(args);

        let clear = data => [...data].filter(n => !isNaN(parseInt(n))).join('');

        let validate = data =>
            (data.length === 10 &&
             (data[0] !== '0' && data[0] !== '1') &&
             (data[3] !== '0' && data[3] !== '1'))
            ?
            data : (data.length === 11 && data[0] === '1')
            ?
            validate([...data].splice(1).join('')) : null;

        return [clear, ignoreNullWrapper(validate)]
            .reduce((acc, f) => f(acc), this.numberData);
    }
}
