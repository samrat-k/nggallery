webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__gallery_gallery_component__ = __webpack_require__("../../../../../src/app/gallery/gallery.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__validation_validation_component__ = __webpack_require__("../../../../../src/app/validation/validation.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__home_home_component__["a" /* HomeComponent */] },
    { path: 'gallery', component: __WEBPACK_IMPORTED_MODULE_0__gallery_gallery_component__["a" /* GalleryComponent */] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_1__home_home_component__["a" /* HomeComponent */] },
    { path: 'validation', component: __WEBPACK_IMPORTED_MODULE_4__validation_validation_component__["a" /* ValidationComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_1__home_home_component__["a" /* HomeComponent */] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            exports: [__WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */]],
            imports: [__WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */].forRoot(appRoutes)
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<app-fulllayout></app-fulllayout> \n "

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
        this.activeLayout = 'fulllayout';
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
        //const layout={'fulllayout','sidebar-layout'};
        ,
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_dropdown__ = __webpack_require__("../../../../ngx-bootstrap/dropdown/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_collapse__ = __webpack_require__("../../../../ngx-bootstrap/collapse/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_carousel__ = __webpack_require__("../../../../ngx-bootstrap/carousel/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__footer_footer_component__ = __webpack_require__("../../../../../src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__layout_fulllayout_fulllayout_component__ = __webpack_require__("../../../../../src/app/layout/fulllayout/fulllayout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__gallery_gallery_component__ = __webpack_require__("../../../../../src/app/gallery/gallery.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__header_header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__layout_sidebar_layout_sidebar_layout_component__ = __webpack_require__("../../../../../src/app/layout/sidebar-layout/sidebar-layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__safe_pipe__ = __webpack_require__("../../../../../src/app/safe.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__validation_validation_component__ = __webpack_require__("../../../../../src/app/validation/validation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















//import { SlidsService } from './slids.service';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_11__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_0__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_9__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_10__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_6__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_7__layout_fulllayout_fulllayout_component__["a" /* FulllayoutComponent */],
                __WEBPACK_IMPORTED_MODULE_12__layout_sidebar_layout_sidebar_layout_component__["a" /* SidebarLayoutComponent */],
                __WEBPACK_IMPORTED_MODULE_8__gallery_gallery_component__["a" /* GalleryComponent */],
                __WEBPACK_IMPORTED_MODULE_13__safe_pipe__["a" /* SafePipe */],
                __WEBPACK_IMPORTED_MODULE_14__validation_validation_component__["a" /* ValidationComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_collapse__["a" /* CollapseModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_carousel__["a" /* CarouselModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_dropdown__["a" /* BsDropdownModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_1__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_forms__["d" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_16__angular_http__["b" /* HttpModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_0__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"footer\">\n  <hr>   \n  <div class=\"container\">\n        <p class=\"muted credit\">\n          CODEKATTA <a href=\"#\">Angular Example. </a> \n        </p>\n      </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/gallery/gallery.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/gallery/gallery.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n<div class=\"bs-example\" data-example-id=\"thumbnails-with-custom-content\">\n    <div class=\"row\">\n     \n        <div class=\"col-sm-6 col-md-4\"  *ngFor=\"let vdeo of videoList\"> \n              <div class=\"thumbnail\">\n                \n                \n              <iframe width=\"100%\" height=\"200px\" [src]=\"getUrl(vdeo.ytcode)|safe\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>\n                <div class=\"caption\">\n                    <h3>{{vdeo.title}}</h3>\n                    <p>{{vdeo.description}}</p>\n                    <p>\n                      <!-- <a href=\"#\" class=\"btn btn-primary\" role=\"button\">Button</a> \n                      <a href=\"#\" class=\"btn btn-default\" role=\"button\">Button</a> -->\n                    </p>\n                </div>\n            </div>\n        </div> \n\n    </div>\n</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/gallery/gallery.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GalleryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GalleryComponent = /** @class */ (function () {
    function GalleryComponent() {
        this.videoList = [
            {
                title: " Sea  ",
                ytcode: "QX4j_zHAlw8",
                description: " Calming Sea - Relaxing 2 Hour - Birds Singing "
            },
            {
                title: "  14 Roads  ",
                ytcode: "uq7mztW1knU",
                description: " 14 Roads You Would Never Want to Drive On"
            },
            {
                title: "title 2",
                ytcode: "uq7mztW1knU",
                description: "description 2"
            },
            {
                title: "title 3",
                ytcode: "qPhVZExcGXg",
                description: "description"
            },
            {
                title: "ISRO",
                ytcode: "wR8Tbt8hetc",
                description: "ISRO to launch 31 satellites on January 10, 2018"
            },
            {
                title: "title 4",
                ytcode: "z4V5PYO9wWw",
                description: "description"
            },
            {
                title: "Shuttle Atlantis ",
                ytcode: "5KygwcZ545U",
                description: "Shuttle Atlantis STS-132 - Amazing Shuttle Launch Experience"
            }
        ];
    }
    GalleryComponent.prototype.ngOnInit = function () {
    };
    GalleryComponent.prototype.getUrl = function (urlstr) {
        // return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/'+urlstr);
        return 'https://www.youtube.com/embed/' + urlstr;
    };
    GalleryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-gallery',
            template: __webpack_require__("../../../../../src/app/gallery/gallery.component.html"),
            styles: [__webpack_require__("../../../../../src/app/gallery/gallery.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], GalleryComponent);
    return GalleryComponent;
}());



/***/ }),

/***/ "../../../../../src/app/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "\n<nav class=\"navbar navbar-inverse\">\n  <div class=\"container\">\n    <!-- Brand and toggle get grouped for better mobile display -->\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\" (click)=\"isCollapsed = !isCollapsed\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <!-- <a class=\"navbar-brand\" routerLink=\"/home\"  routerLnkActive=\"active\">Home</a> -->\n    </div> \n    <!-- Collect the nav links, forms, and other content for toggling -->\n    <div class=\"collapse navbar-collapse\"\n     (collapsed)=\"collapsed($event)\"\n     (expanded)=\"expanded($event)\"\n     [collapse]=\"isCollapsed\"  \n     id=\"bs-example-navbar-collapse-1\">\n      <ul class=\"nav navbar-nav\">\n         <li ><a routerLink=\"/home\"  >Home </a></li>\n       \n        <li routerLnkActive=\"active\"><a routerLink=\"/gallery\"  >Gallery <span class=\"sr-only\">(current)</span></a></li>\n        <li routerLnkActive=\"active\"><a routerLink=\"/validation\"  >Validation <span class=\"sr-only\">(current)</span></a></li>\n  \n       \n        <!-- <li><a href=\"#\">Link</a></li> -->\n        <!-- <li class=\"dropdown\">\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Dropdown <span class=\"caret\"></span></a>\n          <ul class=\"dropdown-menu\">\n            <li><a href=\"#\">Action</a></li>\n            <li><a href=\"#\">Another action</a></li>\n            <li><a href=\"#\">Something else here</a></li>\n            <li role=\"separator\" class=\"divider\"></li>\n            <li><a href=\"#\">Separated link</a></li>\n            <li role=\"separator\" class=\"divider\"></li>\n            <li><a href=\"#\">One more separated link</a></li>\n          </ul>\n        </li> -->\n      </ul>\n      <form class=\"navbar-form navbar-left\">\n        <div class=\"form-group\">\n          <input type=\"text\" class=\"form-control\" placeholder=\"Search\">\n        </div>\n        <button type=\"submit\" class=\"btn btn-default\">Submit</button>\n      </form>\n      <ul class=\"nav navbar-nav navbar-right\">\n        <!-- <li><a href=\"#\">Link</a></li>\n        <li class=\"dropdown\">\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Dropdown <span class=\"caret\"></span></a>\n          <ul class=\"dropdown-menu\">\n            <li><a href=\"#\">Action</a></li>\n            <li><a href=\"#\">Another action</a></li>\n            <li><a href=\"#\">Something else here</a></li>\n            <li role=\"separator\" class=\"divider\"></li>\n            <li><a href=\"#\">Separated link</a></li>\n          </ul>\n        </li> -->\n      </ul>\n    </div><!-- /.navbar-collapse -->\n  </div><!-- /.container-fluid -->\n</nav>"

/***/ }),

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        this.isCollapsed = false;
    }
    HeaderComponent.prototype.collapsed = function (event) {
        console.log(event);
    };
    HeaderComponent.prototype.expanded = function (event) {
        console.log(event);
    };
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/header/header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>HOME COMPONENET</h1>\n</div>\n\n\n<div class=\"container\">\n  <div class=\"col-sm-1\"></div>\n  <div class=\"col-sm-10\">\n  \n  <carousel>\n    <slide *ngFor=\"let slide of slides\" >\n      <img src=\"{{slide.image}}\" alt=\"First slide\" style=\"display: block; width: 100%; width: 100%;\">\n      <div class=\"carousel-caption d-none d-md-block\">\n        <h3>{{slide.title}}</h3>\n        <p>{{slide.description}}</p>\n      </div>\n    </slide> \n  </carousel>\n  </div>\n<div class=\"col-sm-1\"></div>\n<div class=\"col-sm-10\">\n    <h1>Json Response Via Service Call: </h1>\n    <br>  {{slides|json}}\n   \n    <br>\n   \n    <br>\n<br>\n   \n</div>\n \n</div>\n<br>\n<br>\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__slids_service__ = __webpack_require__("../../../../../src/app/slids.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(slidsService) {
        this.slidsService = slidsService;
    }
    // public   slides=[
    //   {
    //      image: `https://valor-software.com/ngx-bootstrap/assets/images/nature/1.jpg`,
    //      title:`First slide label`,
    //      description:`Ipsum lorem porem dummy text`
    //   },
    //   {
    //      image: `https://valor-software.com/ngx-bootstrap/assets/images/nature/2.jpg`,
    //      title:`Second slide label`,
    //      description:`Ipsum lorem porem dummy text`
    //   },
    //   {
    //      image: `https://valor-software.com/ngx-bootstrap/assets/images/nature/3.jpg`,
    //      title:`Third slide label`,
    //      description:`Ipsum lorem porem dummy text`
    //   },
    //   {
    //      image: `https://valor-software.com/ngx-bootstrap/assets/images/nature/4.jpg`,
    //      title:`Fourth slide label`,
    //      description:`Ipsum lorem porem dummy text`
    //   }
    // ]
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.slidsService.getSlides()
            .subscribe(function (data) {
            console.log(data);
            _this.slides = data;
        });
        ;
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styleUrls: [],
            providers: [__WEBPACK_IMPORTED_MODULE_1__slids_service__["a" /* SlidsService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__slids_service__["a" /* SlidsService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layout/fulllayout/fulllayout.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/fulllayout/fulllayout.component.html":
/***/ (function(module, exports) {

module.exports = "<!--Header  -->\n<app-header></app-header>\n<!-- Body  -->\n<router-outlet></router-outlet> \n<!-- Footer  -->\n<app-footer></app-footer>\n\n \n"

/***/ }),

/***/ "../../../../../src/app/layout/fulllayout/fulllayout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FulllayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FulllayoutComponent = /** @class */ (function () {
    function FulllayoutComponent() {
    }
    FulllayoutComponent.prototype.ngOnInit = function () {
    };
    FulllayoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-fulllayout',
            template: __webpack_require__("../../../../../src/app/layout/fulllayout/fulllayout.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layout/fulllayout/fulllayout.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FulllayoutComponent);
    return FulllayoutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layout/sidebar-layout/sidebar-layout.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/sidebar-layout/sidebar-layout.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  sidebar-layout works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/layout/sidebar-layout/sidebar-layout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarLayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SidebarLayoutComponent = /** @class */ (function () {
    function SidebarLayoutComponent() {
    }
    SidebarLayoutComponent.prototype.ngOnInit = function () {
    };
    SidebarLayoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-sidebar-layout',
            template: __webpack_require__("../../../../../src/app/layout/sidebar-layout/sidebar-layout.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layout/sidebar-layout/sidebar-layout.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SidebarLayoutComponent);
    return SidebarLayoutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/safe.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SafePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SafePipe = /** @class */ (function () {
    function SafePipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafePipe.prototype.transform = function (value, args) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(value);
    };
    SafePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'safe'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DomSanitizer */]])
    ], SafePipe);
    return SafePipe;
}());



/***/ }),

/***/ "../../../../../src/app/slids.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SlidsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SlidsService = /** @class */ (function () {
    function SlidsService(http) {
        this.http = http;
        this.jurl = 'https://raw.githubusercontent.com/samrat123/ngfileupload/master/slides.json';
        this.resdata = {};
    }
    SlidsService.prototype.getSlides = function () {
        var _this = this;
        console.log("HELLOOOOOOOOOOOOOOO2");
        return this.http.get(this.jurl)
            .map(function (res) { return _this.resdata = res.json(); });
        //    .subscribe(res => this.data = res);;
        //  console.log(this.data);
        // console.log(aa);
        // console.log(this.resdata);
        // return this.resdata;
        //  .map(res);
    };
    SlidsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], SlidsService);
    return SlidsService;
}());



/***/ }),

/***/ "../../../../../src/app/validation/validation.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "select.ng-valid,input.ng-valid:not(form)  {\n    border: 1px solid #42A948;\n    border-left: 5px solid #42A948; /* green */\n  }\n  \n  select.ng-invalid, input.ng-invalid:not(form)  {\n    border: 1px solid #a94442;\n    border-left: 5px solid #a94442;  \n  }\n  \n  select.ng-untouched,input.ng-untouched{\n    border:1px solid #ccc!important;\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/validation/validation.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n<div class=\"bs-example\" data-example-id=\"thumbnails-with-custom-content\">\n    <div class=\"row\">\n       <h1> Model Driven Forms </h1>\n        <div class=\"col-sm-9\" > \n\t\t\t<form class=\"needs-validation\" novalidate \t[formGroup]=\"myform\"> \n\t\t\t\t<fieldset formGroupName=\"name\">\n\t\t\t\t\t<div class=\"form-group\" >\n\t\t\t\t\t\t<label>First Name</label>\n\t\t\t\t\t\t<input type=\"text\"\n\t\t\t\t\t\t\t\t\t class=\"form-control has-success\"\n\t\t\t\t\t\t\t\t\t formControlName=\"firstName\"\n\t\t\t\t\t\t\t\t\t required>\n\t\t\t\t\t\t<div class=\"text-danger\"\n\t\t\t\t\t\t\t\t *ngIf=\"firstName.errors && (firstName.dirty || firstName.touched)\">\n\t\t\t\t\t\t\t<p *ngIf=\"firstName.errors.required\">First Name is required</p>\n\t\t\t\t\t\t</div>\n\t\t\t\n\t\t\t\t\t\t<!--\n\t\t\t\t\t\t\t<pre>Valid? {{ myform.controls.name.controls.firstName.valid }}</pre>\n\t\t\t\t\t\t\t<pre>Dirty? {{ myform.controls.name.controls.firstName.dirty }}</pre>\n\t\t\t\t\t\t-->\n\t\t\t\t\t</div>\n\t\t\t\n\t\t\t\t\t<div class=\"form-group\" >\n\t\t\t\t\t\t<label>Last Name</label>\n\t\t\t\t\t\t<input type=\"text\"\n\t\t\t\t\t\t\t\t\t class=\"form-control\"\n\t\t\t\t\t\t\t\t\t formControlName=\"lastName\"\n\t\t\t\t\t\t\t\t\t required>\n\t\t\t\t\t\t<div class=\"text-danger\"\n\t\t\t\t\t\t\t\t *ngIf=\"lastName.errors && (lastName.dirty || lastName.touched)\">\n\t\t\t\t\t\t\t<p *ngIf=\"lastName.errors.required\">Last Name is required</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</fieldset>\n\t\t\t\n\t\t\t\n\t\t\t\t<div class=\"form-group\" >\n\t\t\t\t\t<label>Email</label>\n\t\t\t\t\t<input type=\"email\"\n\t\t\t\t\t\t\t\t class=\"form-control\"\n\t\t\t\t\t\t\t\t formControlName=\"email\"\n\t\t\t\t\t\t\t\t required>\n\t\t\t\t\t<div class=\"text-danger\"\n\t\t\t\t\t\t\t *ngIf=\"email.errors && (email.dirty || email.touched)\">\n\t\t\t\t\t\t<p *ngIf=\"email.errors.required\">Email is required</p>\n\t\t\t\t\t\t<p *ngIf=\"email.errors.pattern\">\n\t\t\t\t\t\t\t\tEmail is invalid.\t\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</div>\n\t\t\t\n\t\t\t\t\t<!--\n\t\t\t\t\t\t<pre>Valid? {{ myform.controls.email.valid }}</pre>\n\t\t\t\t\t\t<pre>Dirty? {{ myform.controls.email.dirty }}</pre>\n\t\t\t\t\t-->\n\t\t\t\n\t\t\t\t</div>\n\t\t\t\n\t\t\t\t<div class=\"form-group\" > \n\t\t\t\t\t<label>Password</label>\n\t\t\t\t\t<input type=\"password\"\n\t\t\t\t\t\t\t\t class=\"form-control\"\n\t\t\t\t\t\t\t\t formControlName=\"password\"\n\t\t\t\t\t\t\t\t required>\n\t\t\t\t\t<div class=\"text-danger\"\n\t\t\t\t\t\t\t *ngIf=\"password.errors && (password.dirty || password.touched)\">\n\t\t\t\t\t\t<p *ngIf=\"password.errors.required\">Password is required</p>\n\t\t\t\t\t\t<p *ngIf=\"password.errors.minlength\">Password must be 8 characters long, we need another {{password.errors.minlength.requiredLength - password.errors.minlength.actualLength}} characters </p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\n\t\t\t\t<!--\n\t\t\t\t\t<pre>{{ password.errors | json }}</pre>\n\t\t\t\t-->\n\t\t\t\n\t\t\t\t<div class=\"form-group\" >\n\t\t\t\t\t<label>Language</label>\n\t\t\t\t\t<select class=\"form-control\"\n\t\t\t\t\t\t\t\t\tformControlName=\"language\" required>\n\t\t\t\t\t\t<option value=\"-1\">Please select a language</option>\n\t\t\t\t\t\t<option *ngFor=\"let lang of langs\"\n\t\t\t\t\t\t\t\t\t\t[value]=\"lang\">{{lang}}\n\t\t\t\t\t\t</option>\n\t\t\t\t\t</select>\n\t\t\t\t\t<div class=\"text-danger\"\n\t\t\t\t\t\t\t\t\t*ngIf=\"language.errors && (language.dirty || language.touched)\">\n\t\t\t\t\t\t\t<p *ngIf=\"language.errors.required\">Language is required</p> \n\t\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\n\t\t\t\t<pre>{{myform.value | json}}</pre>\n\t\t\t</form>\t\t\t\t \n\t\t\t\t</div> \n\n\n\n    </div>\n</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/validation/validation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ValidationComponent = /** @class */ (function () {
    function ValidationComponent() {
        this.langs = [
            'English',
            'French',
            'German',
        ];
    }
    ValidationComponent.prototype.ngOnInit = function () {
        this.createFormControls();
        this.createForm();
    };
    ValidationComponent.prototype.createFormControls = function () {
        this.firstName = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required);
        this.lastName = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required);
        this.email = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required,
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+.\.[a-z]{2,4}$")
        ]);
        this.password = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required,
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].minLength(8)
        ]);
        this.language = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required);
    };
    ValidationComponent.prototype.createForm = function () {
        this.myform = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            name: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
                firstName: this.firstName,
                lastName: this.lastName,
            }),
            email: this.email,
            password: this.password,
            language: this.language
        });
    };
    ValidationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-validation',
            template: __webpack_require__("../../../../../src/app/validation/validation.component.html"),
            styles: [__webpack_require__("../../../../../src/app/validation/validation.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ValidationComponent);
    return ValidationComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map