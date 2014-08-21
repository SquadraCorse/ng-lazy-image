/* globals: beforeEach, describe, it, module, inject, expect */
describe("Lazy image", function() {

    var $document, el, scope;

    beforeEach(module('squadracorse.lazyImage'));

    beforeEach(inject(function($compile, _$document_, $rootScope) {

        scope = $rootScope.$new();
        $document = _$document_;

        el1 = angular.element('<div tif-lazy-image="foo.png 480w"></div>');
        el2 = angular.element('<div tif-lazy-image="foo.png 480h"></div>');
        el3 = angular.element('<div tif-lazy-image="foo.png 1x"></div>');
        el4 = angular.element('<div tif-lazy-image=""></div>');

        $compile(el1)(scope);
        $compile(el2)(scope);
        $compile(el3)(scope);
        $compile(el4)(scope);

        scope.$digest();

    }));

    it('does it have image attached', function () {
        expect(el1.html()).toBe('<img alt="" class="ng-lazy-image" src="foo.png">');
        expect(el2.html()).toBe('<img alt="" class="ng-lazy-image" src="foo.png">');
        expect(el3.html()).toBe('<img alt="" class="ng-lazy-image" src="foo.png">');
    });

    it('no image should be attached', function () {
        expect(el4.html()).toBe('');
    });

    it('should remove images when destroyed', function () {
        scope.$destroy();
        expect($document.find('img').length).toBe(0);
    });

});
