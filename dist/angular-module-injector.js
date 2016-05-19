/** angular-module-injector v0.0.3
    * (c) 2016 @krasevych
    * License: MIT
    * https://github.com/krasevych/angular-module-injector
    */ 
(function () {
    var ng = angular.module;
    var mapModuleName = function (moduleName) {
        return moduleName instanceof Function
            ? moduleName.toString().match(/^function\s*([^\s(]+)/)[1]
            : moduleName;
    };
    function module(name, requires, configFn) {
        name = mapModuleName(name);
        if (requires) {
            requires = requires.map(mapModuleName);
        }
        return ng.apply(this, [name, requires, configFn]);
    }
    angular.module = module;
})();
