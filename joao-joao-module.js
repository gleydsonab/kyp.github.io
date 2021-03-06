(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["joao-joao-module"],{

/***/ "./src/app/layout/joao/joao-routing.module.ts":
/*!****************************************************!*\
  !*** ./src/app/layout/joao/joao-routing.module.ts ***!
  \****************************************************/
/*! exports provided: JoaoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JoaoRoutingModule", function() { return JoaoRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _joao_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./joao.component */ "./src/app/layout/joao/joao.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _joao_component__WEBPACK_IMPORTED_MODULE_2__["JoaoComponent"]
    }
];
var JoaoRoutingModule = /** @class */ (function () {
    function JoaoRoutingModule() {
    }
    JoaoRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], JoaoRoutingModule);
    return JoaoRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/joao/joao.component.html":
/*!*************************************************!*\
  !*** ./src/app/layout/joao/joao.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\r\n    <hr>\r\n    <div class=\"row\">\r\n        <div routerLink=\"/twitter\" class=\"col-xl-6 col-lg-6\" (click)=\"mapTwitter()\">\r\n            <app-stat [bgClass]=\"'primary'\" [icon]=\"'fa fa-map-marker'\" [count]=\"countTw\" [label]=\"'Citações no Twitter'\" [description]=\"'Veja o mapa de Tweets'\"></app-stat>\r\n        </div>\r\n        <div routerLink=\"/noticias\" class=\"col-xl-6 col-lg-6\">\r\n            <app-stat [bgClass]=\"'warning'\" [icon]=\"'fa-tasks'\" [count]=\"countNt\" [label]=\"'Citações em Notícias'\" [description]=\"'Veja as Notícias'\"></app-stat>\r\n        </div>\r\n    </div>\r\n    <hr />\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-6\">\r\n            <div class=\"card mb-3\">\r\n                <div class=\"card-header\">Cloud Word Twitter</div>\r\n                <div class=\"card-body\">\r\n                    <img class=\"cloud-word img-thumbnail\" src={{wordCloud}} />\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col col-sm-6\">\r\n            <div class=\"card mb-3\">\r\n                <div class=\"card-header\">\r\n                    Analise de Sentimentos Twitter\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <canvas baseChart height=\"150px\" [data]=\"pieChartData\" [labels]=\"pieChartLabels\" [chartType]=\"pieChartType\">\r\n                    </canvas>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/layout/joao/joao.component.scss":
/*!*************************************************!*\
  !*** ./src/app/layout/joao/joao.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cloud-word {\n  height: 400px;\n  width: 500px; }\n"

/***/ }),

/***/ "./src/app/layout/joao/joao.component.ts":
/*!***********************************************!*\
  !*** ./src/app/layout/joao/joao.component.ts ***!
  \***********************************************/
/*! exports provided: JoaoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JoaoComponent", function() { return JoaoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../router.animations */ "./src/app/router.animations.ts");
/* harmony import */ var _shared_services_twitter_twitter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/twitter/twitter */ "./src/app/shared/services/twitter/twitter.ts");
/* harmony import */ var _shared_services_noticias_noticias__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/noticias/noticias */ "./src/app/shared/services/noticias/noticias.ts");
/* harmony import */ var _noticias_noticias_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../noticias/noticias.model */ "./src/app/layout/noticias/noticias.model.ts");
/* harmony import */ var _twitter_twitter_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../twitter/twitter.model */ "./src/app/layout/twitter/twitter.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var JoaoComponent = /** @class */ (function () {
    function JoaoComponent(twitter, noticias, modelNews, twitterModel) {
        this.twitter = twitter;
        this.noticias = noticias;
        this.modelNews = modelNews;
        this.twitterModel = twitterModel;
        this.countTw = 0;
        this.countNt = 0;
        this.pieChartLabels = [
            'Negativo',
            'Positivo'
        ];
        this.pieChartData = [300, 500];
        this.pieChartType = 'pie';
        this.searchTwitter();
        this.searchNews();
    }
    JoaoComponent.prototype.searchTwitter = function () {
        var _this = this;
        this.wordCloud = 'http://35.237.82.186/app1/wcloud?pres=amoedo';
        this.twitter.getSentimento('amoedo').then(function (data) {
            _this.countTw = data[0].n + data[1].n;
            _this.pieChartData = [data[0].n, data[1].n];
        });
        this.twitter.getNumMencoes('amoedo').then(function (data) {
            _this.countTw = data[0].n;
        });
    };
    JoaoComponent.prototype.searchNews = function () {
        var _this = this;
        this.noticias.getMencoes('amoedo').then(function (data) {
            for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                var x = data_1[_i];
                _this.countNt += x.n;
            }
            _this.modelNews.nomePresidente = 'João Amoêdo';
        });
        this.noticias.getNoticias('amoedo|amoêdo').then(function (data) {
            _this.modelNews.vetorNews = data;
        });
    };
    JoaoComponent.prototype.mapTwitter = function () {
        this.twitterModel.presidente = 'amoedo';
    };
    JoaoComponent.prototype.ngOnInit = function () { };
    JoaoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bolsonaro-page',
            template: __webpack_require__(/*! ./joao.component.html */ "./src/app/layout/joao/joao.component.html"),
            styles: [__webpack_require__(/*! ./joao.component.scss */ "./src/app/layout/joao/joao.component.scss")],
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_1__["routerTransition"])()]
        }),
        __metadata("design:paramtypes", [_shared_services_twitter_twitter__WEBPACK_IMPORTED_MODULE_2__["TwitterService"],
            _shared_services_noticias_noticias__WEBPACK_IMPORTED_MODULE_3__["NoticiasService"],
            _noticias_noticias_model__WEBPACK_IMPORTED_MODULE_4__["PresidenteNoticias"],
            _twitter_twitter_model__WEBPACK_IMPORTED_MODULE_5__["TwitterModel"]])
    ], JoaoComponent);
    return JoaoComponent;
}());



/***/ }),

/***/ "./src/app/layout/joao/joao.module.ts":
/*!********************************************!*\
  !*** ./src/app/layout/joao/joao.module.ts ***!
  \********************************************/
/*! exports provided: JoaoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JoaoModule", function() { return JoaoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-charts */ "./node_modules/ng2-charts/index.js");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng2_charts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _joao_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./joao-routing.module */ "./src/app/layout/joao/joao-routing.module.ts");
/* harmony import */ var _joao_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./joao.component */ "./src/app/layout/joao/joao.component.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared */ "./src/app/shared/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var JoaoModule = /** @class */ (function () {
    function JoaoModule() {
    }
    JoaoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _joao_routing_module__WEBPACK_IMPORTED_MODULE_3__["JoaoRoutingModule"], _shared__WEBPACK_IMPORTED_MODULE_5__["StatModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_2__["ChartsModule"]],
            declarations: [_joao_component__WEBPACK_IMPORTED_MODULE_4__["JoaoComponent"]]
        })
    ], JoaoModule);
    return JoaoModule;
}());



/***/ })

}]);
//# sourceMappingURL=joao-joao-module.js.map