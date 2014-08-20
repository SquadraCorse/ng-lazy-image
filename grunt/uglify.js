module.exports = {
    app: {
        files: {
            'dist/lazy-image.min.js': [
                'src/lazy-image.js'
            ]
        }
    },
    lib: {
        files: {
            "src/lib.js" : [ 
                "bower_components/angular/angular.js"
            ]
        }
    }
};