const abs = require('../src/abs');

describe('ABS function', () => {
    it('should return 1 for 1', () => {
        expect(abs(1)).to.equal(1);
    });

    it('should return 1 for -1', () => {
        expect(abs(-1)).to.equal(1);
    });
});
