import {bootstrap} from 'angular2/platform/browser';
import {Application} from './application/application';
import {ROUTER_PROVIDERS} from 'angular2/router';

bootstrap(Application, [
    ROUTER_PROVIDERS
]);