# Angular Lazy Image
> Directive for loading responsive image when container (which is preventing reflow) is in viewport.

[![Build Status](https://travis-ci.org/SquadraCorse/ng-lazy-image.svg)](https://travis-ci.org/SquadraCorse/ng-lazy-image) 
[![Coverage Status](https://coveralls.io/repos/SquadraCorse/ng-lazy-image/badge.png?branch=master)](https://coveralls.io/r/SquadraCorse/ng-lazy-image?branch=master) 


## Demo
> [Demonstration on Heroku](http://angular-lazy-image.herokuapp.com/)


## Installation
1. `bower install angular-lazy-image`
2. Add a dependency on `lazyImage` in your app module.
3. See the `style.css` for some classes you can use (will add more aspect ratio's later)


### Usage

``` html

	<div tif-lazy-image="//placehold.it/480x320 480w, //placehold.it/768x512 768w, //placehold.it/768x512 480w 2x, //placehold.it/936x624 2x" class="g-img-lazy g-img-ratio-3-2"></div>

```

The attributes are using the srcset setup. Your window will determine which image fits best (so the rules are very dynamic). The image will only be set when the parent container is in the viewport (lazy loading).


### Options

- "tif-lazy-image" : srcset string
- "class" : `g-img-lazy` will use height 0 trick, `g-img-ratio-3-2` sets correct aspect ratio

## Build using
[![Codeship Status for SquadraCorse/ng-lazy-image](https://www.codeship.io/projects/0fad19b0-0ad2-0132-b0c1-12fe8603e519/status)](https://www.codeship.io/projects/31862)

## License
As AngularJS itself, this module is released under the permissive [MIT license](LICENSE.md). Your contributions are always welcome.
