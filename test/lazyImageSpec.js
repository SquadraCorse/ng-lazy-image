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


describe("srcset Service", function() {

    var SrcSetService;

    beforeEach(module('afkl.ng.lazyImage'));

    beforeEach(inject(function(srcSetService) {
        SrcSetService = srcSetService;
    }));



    it('Is my srcset Service available', function () {
        expect(SrcSetService).toBeDefined();
    });

    it('Simple image candidates without descriptors understood', function () {
        var s = SrcSetService.get({src: 'default.png', srcset: 'mobile.png'});
        expect(s.best.src).toBeDefined();
    });

    it('Single image declarations set to the right defaults', function () {
        var s = SrcSetService.get({srcset: 'mobile.png'});
        var best = s.best;
        expect(best.src).toBe('mobile.png');
        expect(best.x).toBe(1);
        expect(best.w).toBe(Infinity);
        expect(best.h).toBe(Infinity);
    });

    it('Complex compound image candidates understood', function () {
        var s = SrcSetService.get({srcset: 'mobile.png 720w, tablet.png 1280w, desktop.png 1x'});
        expect(s.best.src).toBeDefined();
    });


    it('Repeated values for image candidates are ignored', function () {
        var s = SrcSetService.get({srcset: 'mobile.png 720w, mobile.png 720w'});
        expect(s.candidates.length).toBe(1);
    });



});

// TODO TEST CORRECT SIZE IMAGE
// 


