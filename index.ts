import angular from 'angular';

var app = angular.module('demo', []);

app.component('myComponent', {
  controller: ComponentController,
  template: '<div>{{$ctrl.greeting}}</div>'
});

function ComponentController() {
  this.greeting = 'Welcome';
}

angular.bootstrap(document, ['demo']);