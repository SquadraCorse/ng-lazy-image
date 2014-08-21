/* globals: beforeEach, describe, it, module, inject, expect */
describe("Lazy image", function() {

    var el, scope;

    beforeEach(module('squadracorse.lazyImage'));

    beforeEach(inject(function($compile, $rootScope) {

        scope = $rootScope.$new();
        el = angular.element('<div tif-lazy-image="foo.png 480w"></div>');
        $compile(el)(scope);
        scope.$digest();

    }));

    it('does it have image attached', function() {
        
        expect(el.html()).toBe('<img alt="" class="ng-lazy-image" src="foo.png">');
    });


});
