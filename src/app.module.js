import './less/styles.less';
import angular from 'angular';
import uirouter from 'angular-ui-router';
import routes from './app.routes';
import homeComponent from './home';
import aboutComponent from './about';
import loginComponent from './login';
import regComponent from './reg';
angular.module('newsfeed', [uirouter, homeComponent, aboutComponent,loginComponent,regComponent])
    .config(routes);

if (process.env.NODE_ENV !== 'production') { 
    console.log('Looks like we are in development mode!');
}
//just checking node js enviroment (developer server or not)//
