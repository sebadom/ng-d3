// Tests the ng-lodash module has access to lodash functions as accessible
describe('ng-d3', function () {
    beforeEach(module('ngD3'));
    it('should have d3 as a constant defined', inject(function (d3) {
        expect(d3).toBeDefined();
    }));
});
