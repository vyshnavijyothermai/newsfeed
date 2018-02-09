import angular from "angular";
import uiRouter from "angular-ui-router";
import RegController from "./reg.controller";
import route from "./reg.route";
 var regComponent=angular.module("newsfeed.reg",[uiRouter]).config(route)
.controller("RegController",RegController)
.name;
export default regComponent;