module.exports = {
    'build': {
        cwd: './src',
        src: ['lazy-image.js', 'lazy-image-style.css'],
        dest: './dist/',
        expand: true
    },
    'update': {
        cwd: './dist',
        src: ['lazy-image.min.js'],
        dest: './',
        expand: true
    }
};