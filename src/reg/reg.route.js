function route($stateProvider)
{

    $stateProvider.state("reg",{
        url:"/reg",
        template:require("./reg.html"),
        controller:"RegController",
        controllerAs:"RegCtrl"
    })
}
    route.$inject=["$stateProvider"];

    export default route;
