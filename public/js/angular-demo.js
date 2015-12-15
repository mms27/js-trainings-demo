(function () {
    angular.module('angular-demo', []);

    var app = angular.module('angular-demo');

    /*app.controller = function (controllerName, CtrlConstructor) {
        $$storage[controllerName] = new CtrlConstructor();
    }

    app.service = function (serviceName, ServiceConstructor) {
        $$storage[serviceName] = new ServiceConstructor();
    }

    app.factory = function (factoryName, FactoryConstructor) {
        $$storage[factoryName] = FactoryConstructor();
    }*/

    app.service('userService', UserService);
    app.controller('UserCtrl', UserController);

    UserService.$inject = [];
    function UserService() {
        var storage = {};

        return {
            getName: function () {
                return 'John';
            }
        }
    }

    UserController.$inject = ['userService', '$scope'];
    function UserController(userService, $scope) {
        console.log($scope);
        $scope.hello = function () {alert('yo')};

        this.userName = userService.getName();
        this.hello = function() {
            console.log('Hello, my name is', this.userName);
        }
        this.changeName = function () {
            this.userName = 'Some Another Name';
        }
    }

    // app.directive('myWhatever', function () {
    //     return {
    //         restrict: 'A'
    //     }
    // });

    app.directive('myOnClick', MyOnClickDirective);
    MyOnClickDirective.$inject = ['$parse'];
    function MyOnClickDirective($parse) {
        return {
            restrict: 'AE',
            // require: ['myWhatever'],
            // link: function (scope, element, attrs, myWhateverCtrl) {
            link: function (scope, element, attrs) {
                console.log(attrs);
                //attrs.myOnClick

                var evaluate = $parse(attrs.myOnClick);

                element.on('click', function () {
                    //userCtrl.hello()
                    evaluate(scope);
                    scope.$apply();

                    /*var fakeScope = {
                        userCtrl: {
                            hello: function () {alert('123213')}
                        }
                    }
                    evaluate(fakeScope);*/
                });
            }
        }
    }
})();

/*
var render = _.template('Bla bla <%=someVariable%> bla bla');
var JohnSmith = render({someVariable: 'Jonh Smith'});
var PeteSmith = render({someVariable: 'Pete Smith'});

$scope
    $scope.nam
        $scope
        $scope
        $scope.name

            $scope.name
    $scope
        $scope
    $scope

angular.directive('ngClick', function ($attr, $element, $parse) {

    $element.onClick = function () {
        var a = {
            hello: function () {alert('123')}
        };
        var b = {
            hello: function () {alert('232425345')}
        }

        var render = $parse($attr.ngClick);
        // 'hello()'
        render(a);
        render(b);

        render({})
        scope.$apply();
    }
});
 */