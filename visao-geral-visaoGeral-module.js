(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["visao-geral-visaoGeral-module"],{

/***/ "./src/app/layout/visao-geral/visao-geral-routing.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/layout/visao-geral/visao-geral-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: VisaoGeralPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisaoGeralPageRoutingModule", function() { return VisaoGeralPageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _visaoGeral_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./visaoGeral.component */ "./src/app/layout/visao-geral/visaoGeral.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _visaoGeral_component__WEBPACK_IMPORTED_MODULE_2__["VisaoGeralPageComponent"]
    }
];
var VisaoGeralPageRoutingModule = /** @class */ (function () {
    function VisaoGeralPageRoutingModule() {
    }
    VisaoGeralPageRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], VisaoGeralPageRoutingModule);
    return VisaoGeralPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/visao-geral/visaoGeral.component.html":
/*!**************************************************************!*\
  !*** ./src/app/layout/visao-geral/visaoGeral.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col col-sm-6\">\r\n        <div class=\"card mb-3\">\r\n            <div class=\"card-header\">\r\n                Citações por portal de notícias\r\n            </div>\r\n            <div class=\"card-body\">\r\n                <canvas baseChart [datasets]=\"barChartData\" [labels]=\"barChartLabels\" [options]=\"barChartOptions\" [legend]=\"barChartLegend\"\r\n                    [chartType]=\"barChartType\">\r\n                </canvas>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col col-sm-6\">\r\n        <div class=\"card mb-3\">\r\n            <div class=\"card-header\">\r\n                Citações no Twitter \r\n            </div>\r\n            <div class=\"card-body\">\r\n                <canvas baseChart height=\"180px\" [data]=\"doughnutChartData\" [labels]=\"doughnutChartLabels\" [chartType]=\"doughnutChartType\">\r\n                </canvas>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/layout/visao-geral/visaoGeral.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/layout/visao-geral/visaoGeral.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tamIframe {\n  position: relative;\n  width: 100%;\n  height: 51rem; }\n\n@media screen and (max-width: 1500px) {\n  .header.tamIframe {\n    width: 100%;\n    height: 51rem; } }\n\n@media screen and (max-width: 1000px) {\n  .header.tamIframe {\n    width: 100%;\n    height: 51rem; } }\n\n@media screen and (max-width: 800px) {\n  .header.tamIframe {\n    width: 100%;\n    height: 700px; } }\n\n@media screen and (max-width: 600px) {\n  .header.tamIframe {\n    width: 100%;\n    height: 700px; } }\n\n@media screen and (max-width: 400px) {\n  .header.tamIframe {\n    width: 100%;\n    height: 35rem; } }\n\n@media screen and (max-width: 320px) {\n  .header.tamIframe {\n    width: 100%;\n    height: 35rem; } }\n"

/***/ }),

/***/ "./src/app/layout/visao-geral/visaoGeral.component.ts":
/*!************************************************************!*\
  !*** ./src/app/layout/visao-geral/visaoGeral.component.ts ***!
  \************************************************************/
/*! exports provided: VisaoGeralPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisaoGeralPageComponent", function() { return VisaoGeralPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../router.animations */ "./src/app/router.animations.ts");
/* harmony import */ var _shared_services_geral_geral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/geral/geral */ "./src/app/shared/services/geral/geral.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VisaoGeralPageComponent = /** @class */ (function () {
    function VisaoGeralPageComponent(service) {
        var _this = this;
        this.service = service;
        //Twitter
        this.doughnutChartLabels = [
            'Jair Bolsonaro',
            'João Amoêdo',
            'Marina Silva'
        ];
        this.doughnutChartData = [350, 450, 100];
        this.doughnutChartType = 'doughnut';
        //Noticias
        this.barChartOptions = {
            scaleShowVerticalLines: false,
            responsive: true
        };
        this.barChartLabels = [
            'Jair Bolsonaro',
            'João Amoêdo',
            'Marina Silva'
        ];
        this.barChartType = 'bar';
        this.barChartLegend = true;
        this.barChartData = [
            { data: [65, 59, 80, 81, 56, 55, 40], label: 'Terra' },
            { data: [28, 48, 40, 19, 86, 27, 90], label: 'UOL' },
            { data: [28, 48, 40, 19, 86, 27, 90], label: 'G1' }
        ];
        this.service.geralCount().then(function (data) {
            console.log(data);
            _this.barChartData = [
                { data: [data[1].n, data[4].n, data[7].n], label: 'Terra' },
                { data: [data[2].n, data[5].n, data[8].n], label: 'UOL' },
                { data: [data[0].n, data[3].n, data[6].n], label: 'G1' }
            ];
            _this.doughnutChartData = [data[9].n, data[10].n, data[11].n];
        });
    }
    VisaoGeralPageComponent.prototype.ngOnInit = function () { };
    VisaoGeralPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-visaoGeral-page',
            template: __webpack_require__(/*! ./visaoGeral.component.html */ "./src/app/layout/visao-geral/visaoGeral.component.html"),
            styles: [__webpack_require__(/*! ./visaoGeral.component.scss */ "./src/app/layout/visao-geral/visaoGeral.component.scss")],
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_1__["routerTransition"])()]
        }),
        __metadata("design:paramtypes", [_shared_services_geral_geral__WEBPACK_IMPORTED_MODULE_2__["GeralService"]])
    ], VisaoGeralPageComponent);
    return VisaoGeralPageComponent;
}());



/***/ }),

/***/ "./src/app/layout/visao-geral/visaoGeral.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/layout/visao-geral/visaoGeral.module.ts ***!
  \*********************************************************/
/*! exports provided: VisaoGeralPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisaoGeralPageModule", function() { return VisaoGeralPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-charts */ "./node_modules/ng2-charts/index.js");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng2_charts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _visao_geral_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./visao-geral-routing.module */ "./src/app/layout/visao-geral/visao-geral-routing.module.ts");
/* harmony import */ var _visaoGeral_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./visaoGeral.component */ "./src/app/layout/visao-geral/visaoGeral.component.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared */ "./src/app/shared/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var VisaoGeralPageModule = /** @class */ (function () {
    function VisaoGeralPageModule() {
    }
    VisaoGeralPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _visao_geral_routing_module__WEBPACK_IMPORTED_MODULE_3__["VisaoGeralPageRoutingModule"], _shared__WEBPACK_IMPORTED_MODULE_5__["StatModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_2__["ChartsModule"]],
            declarations: [_visaoGeral_component__WEBPACK_IMPORTED_MODULE_4__["VisaoGeralPageComponent"]]
        })
    ], VisaoGeralPageModule);
    return VisaoGeralPageModule;
}());



/***/ })

}]);
//# sourceMappingURL=visao-geral-visaoGeral-module.js.map