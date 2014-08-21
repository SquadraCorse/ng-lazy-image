/* globals: beforeEach, describe, it, module, inject, expect */
describe("Lazy image", function() {

    var $document, $window, el, scope;

    beforeEach(module('afkl.ng.lazyImage'));

    beforeEach(inject(function($compile, _$document_, _$window_, $rootScope) {

        scope = $rootScope.$new();
        $document = _$document_;
        $window = _$window_;

        spyOn($window, 'onresize');

        el1 = angular.element('<div afkl-lazy-image="foo.png 480w"></div>');
        el2 = angular.element('<div afkl-lazy-image="foo.png 480h"></div>');
        el3 = angular.element('<div afkl-lazy-image="foo.png 1x"></div>');
        el4 = angular.element('<div afkl-lazy-image=""></div>');
        el5 = angular.element('<div afkl-lazy-image="foo.png 480w, foo.png 480w"></div>');

        $compile(el1)(scope);
        $compile(el2)(scope);
        $compile(el3)(scope);
        $compile(el4)(scope);
        $compile(el5)(scope);

        scope.$digest();

    }));

    it('does it have image attached', function () {
        expect(el1.html()).toBe('<img alt="" class="afkl-lazy-image" src="foo.png">');
        expect(el2.html()).toBe('<img alt="" class="afkl-lazy-image" src="foo.png">');
        expect(el3.html()).toBe('<img alt="" class="afkl-lazy-image" src="foo.png">');
    });

    it('no image should be attached', function () {
        expect(el4.html()).toBe('');
    });

    it('we only have one image', function () {
        expect(el5.html()).toBe('<img alt="" class="afkl-lazy-image" src="foo.png">');
    });

    it('we only have one image', function () {
        $window.resizeTo(200, 200);
        // expect($window.onresize()).toHaveBeenCalled();
    });


    it('should remove images when destroyed', function () {
        scope.$destroy();
        expect($document.find('img').length).toBe(0);
    });

});
