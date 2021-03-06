webpackJsonp([0],{

/***/ 288:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var shared_module_1 = __webpack_require__(49);
var lazy_component_1 = __webpack_require__(455);
var lazy_routing_module_1 = __webpack_require__(456);
var LazyModule = (function () {
    function LazyModule() {
    }
    LazyModule = __decorate([
        core_1.NgModule({
            imports: [
                shared_module_1.SharedModule,
                lazy_routing_module_1.LazyRoutingModule
            ],
            declarations: [
                lazy_component_1.LazyComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], LazyModule);
    return LazyModule;
}());
exports.LazyModule = LazyModule;


/***/ }),

/***/ 455:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var LazyComponent = (function () {
    function LazyComponent() {
    }
    LazyComponent = __decorate([
        core_1.Component({
            changeDetection: core_1.ChangeDetectionStrategy.Default,
            encapsulation: core_1.ViewEncapsulation.Emulated,
            selector: 'lazy',
            template: "\n    <p>\n      Lazy component\n    </p>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], LazyComponent);
    return LazyComponent;
}());
exports.LazyComponent = LazyComponent;


/***/ }),

/***/ 456:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(41);
var lazy_component_1 = __webpack_require__(455);
var LazyRoutingModule = (function () {
    function LazyRoutingModule() {
    }
    LazyRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forChild([
                    { path: '', component: lazy_component_1.LazyComponent }
                ])
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], LazyRoutingModule);
    return LazyRoutingModule;
}());
exports.LazyRoutingModule = LazyRoutingModule;


/***/ })

});
//# sourceMappingURL=0.bundle.js.map