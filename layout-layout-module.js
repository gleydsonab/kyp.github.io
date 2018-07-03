(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layout-layout-module"],{

/***/ "./src/app/layout/components/header/header.component.html":
/*!****************************************************************!*\
  !*** ./src/app/layout/components/header/header.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg fixed-top\">\n    <a class=\"navbar-brand\" href=\"#\"><img src=\"../../../../assets/images/cloud.png\"/> Move Analitycs</a>\n    <button class=\"navbar-toggler\" type=\"button\" (click)=\"toggleSidebar()\">\n        <i class=\"fa fa-bars text-muted\" aria-hidden=\"true\"></i>\n    </button>\n</nav>\n"

/***/ }),

/***/ "./src/app/layout/components/header/header.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/layout/components/header/header.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .navbar {\n  background-color: #222; }\n  :host .navbar .navbar-brand {\n    color: #fff; }\n  :host .navbar .nav-item > a {\n    color: #999; }\n  :host .navbar .nav-item > a:hover {\n      color: #fff; }\n  :host .messages {\n  width: 300px; }\n  :host .messages .media {\n    border-bottom: 1px solid #ddd;\n    padding: 5px 10px; }\n  :host .messages .media:last-child {\n      border-bottom: none; }\n  :host .messages .media-body h5 {\n    font-size: 13px;\n    font-weight: 600; }\n  :host .messages .media-body .small {\n    margin: 0; }\n  :host .messages .media-body .last {\n    font-size: 12px;\n    margin: 0; }\n"

/***/ }),

/***/ "./src/app/layout/components/header/header.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/layout/components/header/header.component.ts ***!
  \**************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(router) {
        var _this = this;
        this.router = router;
        this.pushRightClass = 'push-right';
        this.router.events.subscribe(function (val) {
            if (val instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"] &&
                window.innerWidth <= 992 &&
                _this.isToggled()) {
                _this.toggleSidebar();
            }
        });
    }
    HeaderComponent.prototype.ngOnInit = function () { };
    HeaderComponent.prototype.isToggled = function () {
        var dom = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    };
    HeaderComponent.prototype.toggleSidebar = function () {
        var dom = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    };
    HeaderComponent.prototype.rltAndLtr = function () {
        var dom = document.querySelector('body');
        dom.classList.toggle('rtl');
    };
    HeaderComponent.prototype.onLoggedout = function () {
        localStorage.removeItem('isLoggedin');
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/layout/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/layout/components/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/layout/components/sidebar/sidebar.component.html":
/*!******************************************************************!*\
  !*** ./src/app/layout/components/sidebar/sidebar.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"sidebar\" [ngClass]=\"{sidebarPushRight: isActive}\">\n    <div class=\"list-group\">\n        <a routerLink=\"/bolsonaro\" class=\"list-group-item\" [routerLinkActive]=\"['router-link-active']\">\n            <img src=\"../../../../assets/images/bolsonaro.jpg\" style=\"width: 45px; height: 45px; border-radius: 100%\" /> &nbsp;Jair Bolsonaro\n        </a>\n        <a routerLink=\"/marina\" class=\"list-group-item\" [routerLinkActive]=\"['router-link-active']\">\n            <img src=\"../../../../assets/images/marina.jpg\" style=\"width: 45px; height: 45px; border-radius: 100%\" /> &nbsp;Marina Silva\n        </a>\n        <a routerLink=\"/joao\" class=\"list-group-item\" [routerLinkActive]=\"['router-link-active']\">\n            <img src=\"../../../../assets/images/joao.jpg\" style=\"width: 45px; height: 45px; border-radius: 100%\" /> &nbsp;João Amoêdo\n        </a>\n        <a routerLink=\"/geral\" class=\"list-group-item\" [routerLinkActive]=\"['router-link-active']\">\n            <img src=\"../../../../assets/images/visaoGeral.png\" style=\"width: 45px; height: 45px; border-radius: 100%\" /> &nbsp;Visão Geral\n        </a>\n\n        <!--<a class=\"list-group-item\" (click)=\"sair()\">\n            <i class=\"fa fa-fw fa fa-reply\" aria-hidden=\"true\"></i>&nbsp;{{ 'Sair' }}\n        </a>\n\n        <a [routerLink]=\"['/charts']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n            <i class=\"fa fa-fw fa fa-reply\" aria-hidden=\"true\"></i>&nbsp;{{ 'Charts' }}\n        </a>\n        <a [routerLink]=\"['/tables']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n            <i class=\"fa fa-fw fa-table\"></i>&nbsp;{{ 'Tables' }}\n        </a>\n        <a [routerLink]=\"['/forms']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n            <i class=\"fa fa-fw fa-edit\"></i>&nbsp;{{ 'Forms' }}\n        </a>\n        <a [routerLink]=\"['/bs-element']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n            <i class=\"fa fa-fw fa-desktop\"></i>&nbsp;{{ 'Bootstrap Element' }}\n        </a>\n        \n        <a [routerLink]=\"['/components']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n            <i class=\"fa fa-th-list\"></i>&nbsp;{{ 'Component' }}\n        </a>-->\n    </div>\n</nav>"

/***/ }),

/***/ "./src/app/layout/components/sidebar/sidebar.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/layout/components/sidebar/sidebar.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidebar {\n  border-radius: 0;\n  position: fixed;\n  z-index: 1000;\n  top: 56px;\n  left: 235px;\n  width: 235px;\n  margin-left: -235px;\n  border: none;\n  border-radius: 0;\n  overflow-y: auto;\n  background-color: #222;\n  bottom: 0;\n  overflow-x: hidden;\n  padding-bottom: 40px;\n  transition: all 0.2s ease-in-out; }\n  .sidebar .list-group a.list-group-item {\n    background: #222;\n    border: 0;\n    border-radius: 0;\n    color: #999;\n    text-decoration: none; }\n  .sidebar .list-group a.list-group-item .fa {\n      margin-right: 10px; }\n  .sidebar .list-group a:hover {\n    background: #151515;\n    color: #fff; }\n  .sidebar .list-group a.router-link-active {\n    background: #151515;\n    color: #fff; }\n  .sidebar .list-group .header-fields {\n    padding-top: 10px; }\n  .sidebar .list-group .header-fields > .list-group-item:first-child {\n      border-top: 1px solid rgba(255, 255, 255, 0.2); }\n  .sidebar .sidebar-dropdown *:focus {\n    border-radius: none;\n    border: none; }\n  .sidebar .sidebar-dropdown .panel-title {\n    font-size: 1rem;\n    height: 50px;\n    margin-bottom: 0; }\n  .sidebar .sidebar-dropdown .panel-title a {\n      color: #999;\n      text-decoration: none;\n      font-weight: 400;\n      background: #222; }\n  .sidebar .sidebar-dropdown .panel-title a span {\n        position: relative;\n        display: block;\n        padding: 0.75rem 1.5rem;\n        padding-top: 1rem; }\n  .sidebar .sidebar-dropdown .panel-title a:hover,\n    .sidebar .sidebar-dropdown .panel-title a:focus {\n      color: #fff;\n      outline: none;\n      outline-offset: -2px; }\n  .sidebar .sidebar-dropdown .panel-title:hover {\n    background: #151515; }\n  .sidebar .sidebar-dropdown .panel-collapse {\n    border-radious: 0;\n    border: none; }\n  .sidebar .sidebar-dropdown .panel-collapse .panel-body .list-group-item {\n      border-radius: 0;\n      background-color: #222;\n      border: 0 solid transparent; }\n  .sidebar .sidebar-dropdown .panel-collapse .panel-body .list-group-item a {\n        color: #999; }\n  .sidebar .sidebar-dropdown .panel-collapse .panel-body .list-group-item a:hover {\n        color: #fff; }\n  .sidebar .sidebar-dropdown .panel-collapse .panel-body .list-group-item:hover {\n      background: #151515; }\n  .nested-menu .list-group-item {\n  cursor: pointer; }\n  .nested-menu .nested {\n  list-style-type: none; }\n  .nested-menu ul.submenu {\n  display: none;\n  height: 0; }\n  .nested-menu .expand ul.submenu {\n  display: block;\n  list-style-type: none;\n  height: auto; }\n  .nested-menu .expand ul.submenu li a {\n    color: #fff;\n    padding: 10px;\n    display: block; }\n  @media screen and (max-width: 992px) {\n  .sidebar {\n    top: 54px;\n    left: 0px; } }\n  @media print {\n  .sidebar {\n    display: none !important; } }\n  @media (min-width: 992px) {\n  .header-fields {\n    display: none; } }\n  ::-webkit-scrollbar {\n  width: 8px; }\n  ::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 0px white;\n  border-radius: 3px; }\n  ::-webkit-scrollbar-thumb {\n  border-radius: 3px;\n  -webkit-box-shadow: inset 0 0 3px white; }\n"

/***/ }),

/***/ "./src/app/layout/components/sidebar/sidebar.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/layout/components/sidebar/sidebar.component.ts ***!
  \****************************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _shared_services_ativarComponents__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/services/ativarComponents */ "./src/app/shared/services/ativarComponents.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(translate, router, showComponent) {
        var _this = this;
        this.translate = translate;
        this.router = router;
        this.showComponent = showComponent;
        this.isActive = false;
        this.showMenu = '';
        this.pushRightClass = 'push-right';
        this.router.events.subscribe(function (val) {
            if (val instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"] &&
                window.innerWidth <= 992 &&
                _this.isToggled()) {
                _this.toggleSidebar();
            }
        });
    }
    SidebarComponent.prototype.sair = function () {
        this.showComponent.show = false;
        localStorage.removeItem('nome');
        localStorage.removeItem('email');
        this.router.navigate(['login']);
    };
    SidebarComponent.prototype.eventCalled = function () {
        this.isActive = !this.isActive;
    };
    SidebarComponent.prototype.addExpandClass = function (element) {
        if (element === this.showMenu) {
            this.showMenu = '0';
        }
        else {
            this.showMenu = element;
        }
    };
    SidebarComponent.prototype.isToggled = function () {
        var dom = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    };
    SidebarComponent.prototype.toggleSidebar = function () {
        var dom = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    };
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/layout/components/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.scss */ "./src/app/layout/components/sidebar/sidebar.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _shared_services_ativarComponents__WEBPACK_IMPORTED_MODULE_3__["AtivarComponents"]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/layout/layout-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/layout/layout-routing.module.ts ***!
  \*************************************************/
/*! exports provided: LayoutRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutRoutingModule", function() { return LayoutRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout.component */ "./src/app/layout/layout.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _layout_component__WEBPACK_IMPORTED_MODULE_2__["LayoutComponent"],
        children: [
            { path: '', redirectTo: 'bolsonaro' },
            { path: 'noticias', loadChildren: './noticias/noticias.module#NoticiasPageModule' },
            { path: 'geral', loadChildren: './visao-geral/visaoGeral.module#VisaoGeralPageModule' },
            { path: 'login', loadChildren: './login/login.module#LoginModule' },
            { path: 'twitter', loadChildren: './twitter/twitter.module#TwitterPageModule' },
            { path: 'bolsonaro', loadChildren: './bolsonaro/bolsonaro.module#BolsonaroPageModule' },
            { path: 'marina', loadChildren: './marina/marina.module#MarinaModule' },
            { path: 'joao', loadChildren: './joao/joao.module#JoaoModule' },
            { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
            { path: 'tables', loadChildren: './tables/tables.module#TablesModule' },
            { path: 'forms', loadChildren: './form/form.module#FormModule' },
            { path: 'bs-element', loadChildren: './bs-element/bs-element.module#BsElementModule' },
            { path: 'components', loadChildren: './bs-component/bs-component.module#BsComponentModule' }
        ]
    }
];
var LayoutRoutingModule = /** @class */ (function () {
    function LayoutRoutingModule() {
    }
    LayoutRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], LayoutRoutingModule);
    return LayoutRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/layout.component.html":
/*!**********************************************!*\
  !*** ./src/app/layout/layout.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span *ngIf=\"this.showComponents.show\">\n    <app-header></app-header>\n    <app-sidebar></app-sidebar>\n    <section class=\"main-container\">\n        <router-outlet></router-outlet>\n    </section>\n</span>\n<span *ngIf=\"!this.showComponents.show\">\n    <section>\n        <router-outlet></router-outlet>\n    </section>\n</span>"

/***/ }),

/***/ "./src/app/layout/layout.component.scss":
/*!**********************************************!*\
  !*** ./src/app/layout/layout.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-container {\n  margin-top: 56px;\n  margin-left: 235px;\n  padding: 15px;\n  -ms-overflow-x: hidden;\n  overflow-x: hidden;\n  overflow-y: scroll;\n  position: relative;\n  overflow: hidden; }\n\n@media screen and (max-width: 992px) {\n  .main-container {\n    margin-left: 0px !important; } }\n\n@media print {\n  .main-container {\n    margin-top: 0px !important;\n    margin-left: 0px !important; } }\n"

/***/ }),

/***/ "./src/app/layout/layout.component.ts":
/*!********************************************!*\
  !*** ./src/app/layout/layout.component.ts ***!
  \********************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_ativarComponents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/ativarComponents */ "./src/app/shared/services/ativarComponents.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LayoutComponent = /** @class */ (function () {
    function LayoutComponent(router, showComponents) {
        this.router = router;
        this.showComponents = showComponents;
        this.verificLogin();
    }
    LayoutComponent.prototype.verificLogin = function () {
        var email = localStorage.getItem('email');
        if (!email) {
            this.showComponents.show = false;
            this.router.navigate(['login']);
        }
        else {
            this.showComponents.show = true;
            this.router.navigate(['bolsonaro']);
        }
    };
    LayoutComponent.prototype.ngOnInit = function () { };
    LayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-layout',
            template: __webpack_require__(/*! ./layout.component.html */ "./src/app/layout/layout.component.html"),
            styles: [__webpack_require__(/*! ./layout.component.scss */ "./src/app/layout/layout.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _shared_services_ativarComponents__WEBPACK_IMPORTED_MODULE_2__["AtivarComponents"]])
    ], LayoutComponent);
    return LayoutComponent;
}());



/***/ }),

/***/ "./src/app/layout/layout.module.ts":
/*!*****************************************!*\
  !*** ./src/app/layout/layout.module.ts ***!
  \*****************************************/
/*! exports provided: LayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutModule", function() { return LayoutModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _layout_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layout-routing.module */ "./src/app/layout/layout-routing.module.ts");
/* harmony import */ var _layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layout.component */ "./src/app/layout/layout.component.ts");
/* harmony import */ var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/sidebar/sidebar.component */ "./src/app/layout/components/sidebar/sidebar.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/layout/components/header/header.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var LayoutModule = /** @class */ (function () {
    function LayoutModule() {
    }
    LayoutModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _layout_routing_module__WEBPACK_IMPORTED_MODULE_4__["LayoutRoutingModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDropdownModule"].forRoot()
            ],
            declarations: [_layout_component__WEBPACK_IMPORTED_MODULE_5__["LayoutComponent"], _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__["SidebarComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"]]
        })
    ], LayoutModule);
    return LayoutModule;
}());



/***/ })

}]);
//# sourceMappingURL=layout-layout-module.js.map