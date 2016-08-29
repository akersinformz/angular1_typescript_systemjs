System.register(['angular'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var angular_1;
    var app;
    function ComponentController() {
        this.greeting = 'Welcome';
    }
    return {
        setters:[
            function (angular_1_1) {
                angular_1 = angular_1_1;
            }],
        execute: function() {
            app = angular_1.default.module('demo', []);
            app.component('myComponent', {
                controller: ComponentController,
                template: '<div>{{$ctrl.greeting}}</div>'
            });
            angular_1.default.bootstrap(document, ['demo']);
        }
    }
});
//# sourceMappingURL=index.js.map