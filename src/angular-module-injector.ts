declare const angular;

(function () {
    const ng = angular.module;

    const mapModuleName = (moduleName: string | any) =>
        moduleName instanceof Function
            ? moduleName.toString().match(/^function\s*([^\s(]+)/)[1]
            : moduleName;

    function module(name: string, requires: string[] | any[], configFn: Function) {
        name = mapModuleName(name);

        if (requires) {
            requires = requires.map(mapModuleName);
        }

        return ng.apply(this, [name, requires, configFn]);
    }

    angular.module = module;
})();
