webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\r\n<html>\r\n<head>\r\n  <title></title>\r\n</head>\r\n<body>\r\n\r\n\t<app-navbar></app-navbar>\r\n\r\n\t<div class='content'>\r\n\t\t<router-outlet></router-outlet>\r\n\t</div>\r\n  \r\n</body>\r\n</html>\r\n<!--\r\n<div class=\"content\">\r\n  <router-outlet></router-outlet>\r\n</div>\r\n-->"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__ = __webpack_require__("./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_home_home_component__ = __webpack_require__("./src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_register_register_component__ = __webpack_require__("./src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_login_login_component__ = __webpack_require__("./src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_config_config_component__ = __webpack_require__("./src/app/components/config/config.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_view_view_component__ = __webpack_require__("./src/app/components/view/view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_profile_profile_component__ = __webpack_require__("./src/app/components/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_aboutus_aboutus_component__ = __webpack_require__("./src/app/components/aboutus/aboutus.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var appRoutes = [
    { path: "", component: __WEBPACK_IMPORTED_MODULE_7__components_home_home_component__["a" /* HomeComponent */] },
    { path: "register", component: __WEBPACK_IMPORTED_MODULE_9__components_register_register_component__["a" /* RegisterComponent */] },
    { path: "login", component: __WEBPACK_IMPORTED_MODULE_10__components_login_login_component__["a" /* LoginComponent */] },
    { path: "config", component: __WEBPACK_IMPORTED_MODULE_11__components_config_config_component__["a" /* ConfigComponent */] },
    { path: "view", component: __WEBPACK_IMPORTED_MODULE_12__components_view_view_component__["a" /* ViewComponent */] },
    { path: "profile", component: __WEBPACK_IMPORTED_MODULE_13__components_profile_profile_component__["a" /* ProfileComponent */] },
    { path: "aboutus", component: __WEBPACK_IMPORTED_MODULE_14__components_aboutus_aboutus_component__["a" /* AboutusComponent */] },
    { path: "**", component: __WEBPACK_IMPORTED_MODULE_7__components_home_home_component__["a" /* HomeComponent */] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_config_config_component__["a" /* ConfigComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_view_view_component__["a" /* ViewComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_aboutus_aboutus_component__["a" /* AboutusComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* RouterModule */].forRoot(appRoutes)
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_8__services_auth_service__["a" /* AuthService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/aboutus/aboutus.component.css":
/***/ (function(module, exports) {

module.exports = ".pg {\r\n\t\r\n\tmargin-left: 350px;\r\n\tmargin-right: 350px;\r\n\ttext-justify: auto;\r\n\t\r\n}\r\n\r\n.descrp {\r\n\tdisplay: block;\r\n}\r\n\r\n.leftSide {\r\n\tfloat: left;\r\n\twidth: 40%;\r\n\tmargin-left: 20px;\r\n\tmargin-right: 20px;\r\n\ttext-justify: auto;\r\n}\r\n\r\n.rightSide {\r\n\tfloat: right;\r\n\twidth: 40%;\r\n\tmargin-left: 20px;\r\n\tmargin-right: 20px;\r\n\ttext-justify: auto;\r\n}"

/***/ }),

/***/ "./src/app/components/aboutus/aboutus.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"jumbotron text-center\">\r\n\r\n\t<div class=\"pg\">\r\n\t\t<h1>About Us</h1>\r\n\t\t<img src=\"https://my.mixtape.moe/tilzoe.png\">\r\n\t\t<p> We are a group of entrepreneurial individuals who wants to make a change in the society by encouraging\r\n\t\t\tcustomers to give constructive feedback. In this way, customers feel that their voice are being heard\r\n\t\t\tand companies are given the resources to understand their potential customers' needs and demands.\r\n\t\t</p>\r\n\t\t<p>\r\n\t\t\tFeel free to contact us at <a href=\"mailto:wmloh@uwaterloo.ca\">wmloh@uwaterloo.ca</a> for more details!\r\n\t\t</p>\r\n\t</div>\r\n\t<br>\r\n\t<div class=\"pg\">\r\n\t\t<h1>Our Philosophy</h1>\r\n\t\t<br>\r\n\t\t<div class=\"leftSide\">\r\n\t\t\t\r\n\t\t\t<h2>Businesses</h2>\r\n\t\t\t<br>\r\n\t\t\t<img src=\"https://my.mixtape.moe/qoqbhd.PNG\">\r\n\t\t\t<p>\r\n\t\t\t\tIn today's data-driven economy, knowing how your consumers' behaviours and demands are imperative to\r\n\t\t\t\tkeep the business growing.\r\n\t\t\t</p>\r\n\t\t\t<br>\r\n\t\t\t<img src=\"https://my.mixtape.moe/rtwpdh.PNG\">\r\n\t\t\t<p>\r\n\t\t\t\tBy using a platform where users congregate to evaluate companies based on their service and products,\r\n\t\t\t\tbusinesses could stand out amongst the crowd if customers' voices are heard.\r\n\t\t\t</p>\r\n\t\t\t<br>\r\n\t\t\t<br>\r\n\t\t\t<img src=\"https://my.mixtape.moe/cvnoow.PNG\">\r\n\t\t\t<p>\r\n\t\t\t\tOur services enable a more contemporary approach to customer relationship management (CRM) which \r\n\t\t\t\tcould capture potential customers' attention.\r\n\t\t\t</p>\r\n\t\t\t<br>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"rightSide\">\r\n\t\t\t<h2>Customers</h2>\r\n\t\t\t<br>\r\n\r\n\t\t\t<img src=\"https://my.mixtape.moe/dvgttb.PNG\">\r\n\t\t\t<p>\r\n\t\t\t\tWho does not want a free cookie? With just a scan using your smartphone camera and filling out a \r\n\t\t\t\tshort form, the cookie will be yours!\r\n\t\t\t</p>\r\n\t\t\t<br>\r\n\t\t\t<img src=\"https://my.mixtape.moe/rdszef.PNG\">\r\n\t\t\t<p>\r\n\t\t\t\tIf you are happy with the services or products of a certain company, this is the place to give your\r\n\t\t\t\tnote of encouragement. If you are not, then this is the place to share what you think could have been \r\n\t\t\t\timproved.\r\n\t\t\t</p>\r\n\t\t\t<br>\r\n\t\t\t<img src=\"https://my.mixtape.moe/csrrvy.PNG\">\r\n\t\t\t<p>\r\n\t\t\t\tWhen people are able to freely about to convey feedback, companies will certainly know that their \r\n\t\t\t\treputation is at stake. This means that businesses will want to maintain business integrity to ensure\r\n\t\t\t\tthat every one of you is satisfied.\r\n\t\t\t</p>\r\n\t\t</div>\r\n\t</div>\r\n\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/aboutus/aboutus.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutusComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutusComponent = /** @class */ (function () {
    function AboutusComponent() {
    }
    AboutusComponent.prototype.ngOnInit = function () {
    };
    AboutusComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-aboutus',
            template: __webpack_require__("./src/app/components/aboutus/aboutus.component.html"),
            styles: [__webpack_require__("./src/app/components/aboutus/aboutus.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutusComponent);
    return AboutusComponent;
}());



/***/ }),

/***/ "./src/app/components/config/config.component.css":
/***/ (function(module, exports) {

module.exports = ".list {\r\n\tmargin-left: 400px;\r\n\tmargin-right: 400px;\r\n}\r\n\r\n.btnColor {\r\n\tbackground-color: rgba(255,255,255,0);\r\n    border-color: #000000;\r\n    border-radius: 1px;\r\n    border-width: 1px;\r\n    color: #000000;\r\n}\r\n\r\n.btnColor:hover {\r\n\t-webkit-transition: background-color 0.2s;\r\n\tbackground-color: rgba(150,150,210,0.2);\r\n    border-color: #000000;\r\n    border-radius: 1px;\r\n    border-width: 1px;\r\n    color: #000000;\r\n}"

/***/ }),

/***/ "./src/app/components/config/config.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron text-center\">\r\n\t<div>\r\n\t\t<h1>Configure surveys for products</h1>\r\n\t</div>\r\n\t<br>\r\n\t<div *ngIf=\"user\">\r\n\t\t<ul *ngFor=\"let product of user.products; let i = index\" class=\"list-group\">\r\n\t\t\t<li class=\"list-group-item list\">{{product}}</li>\r\n\t\t</ul>\r\n\t</div>\r\n\t<br>\r\n\t<div>\r\n\t\t<p>What would you like to ask your customers?</p>\r\n\t\t<textarea rows=\"4\" cols=\"50\"></textarea>\r\n\t\t<br>\r\n\t\t<button type=\"submit\" class=\"btn btnColor\">Save</button>\r\n\t</div>\r\n\t<div>\r\n\t\t<br>\r\n\t\t<p>Generate QR Code!</p>\r\n\t\t<button type=\"submit\" class=\"btn btnColor\" (click)=\"onGenerateClick()\">Generate!</button>\r\n\t\t<br/> <br/>\r\n\t\t<img src=\"{{image_link}}\" *ngIf=\"show_qr\">\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/config/config.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ConfigComponent = /** @class */ (function () {
    function ConfigComponent(router, authService) {
        this.router = router;
        this.authService = authService;
        this.show_qr = false;
    }
    ConfigComponent.prototype.ngOnInit = function () {
        this.user = JSON.parse(localStorage.getItem('user'));
        var email = this.user.email;
        this.image_link = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + "Subway Customer Feedback Survey";
    };
    ConfigComponent.prototype.onGenerateClick = function () {
        this.show_qr = true;
    };
    ConfigComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-config',
            template: __webpack_require__("./src/app/components/config/config.component.html"),
            styles: [__webpack_require__("./src/app/components/config/config.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]])
    ], ConfigComponent);
    return ConfigComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ".pg {\r\n\t\r\n\tmargin-left: 350px;\r\n\tmargin-right: 350px;\r\n\ttext-justify: auto;\r\n\t\r\n}"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"jumbotron text-center\">\r\n\r\n\t<img src=\"https://my.mixtape.moe/knkzaw.jpg\" width=\"640\" height=\"427\">\r\n\t<div>\r\n\t\t<h1>Welcome to FeedMeFeedback</h1>\r\n\t</div>\r\n\t<div class=\"pg\">\r\n\t\t<br>\r\n\t\t<p>\r\n\t\t\tFeedMeFeedback is a website designed for both customers and companies.\r\n\t\t</p>\r\n\t\t<p> If you are part of a retail or service company, this would be an excellent avenue to learn from your\r\n\t\t\tcustomers' feedback. If you are an angry customer, this is the place to vent your frustration\r\n\t\t\tas well as provide constructive feedback. If you are a customer who is impressed by your favourite\r\n\t\t\trestaurant, giving encouraging feedback will give them motivation to keep up the hard work.\r\n\t\t</p>\r\n\t\t<p>\r\n\t\t\tMore importantly, regardless who you are, our service offers unparalleled convenience.\r\n\t\t\tFor customers, we have specially dedicated a mobile version of FeedMeFeedback so that you can\r\n\t\t\tsimply give your feedback in less than a minute!\r\n\t\t</p>\r\n\t\t<p>\r\n\t\t\tSo what are you waiting for? <a href=\"/register\">Sign up</a> today!\r\n\t\t</p>\r\n\t</div>\t\r\n\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
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
    function HomeComponent(router) {
        this.router = router;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/components/home/home.component.html"),
            styles: [__webpack_require__("./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ".btnColor {\r\n\tbackground-color: rgba(255,255,255,0);\r\n    border-color: #000000;\r\n    border-radius: 1px;\r\n    border-width: 1px;\r\n    color: #000000;\r\n}\r\n\r\n.btnColor:hover {\r\n\t-webkit-transition: background-color 0.2s;\r\n\tbackground-color: rgba(150,150,210,0.2);\r\n    border-color: #000000;\r\n    border-radius: 1px;\r\n    border-width: 1px;\r\n    color: #000000;\r\n}"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron text-center\">\r\n\t<div>\r\n\t\t<h1>Login to FeedMeFeedback!</h1>\r\n\t</div>\r\n\t<br>Email address: <input type=\"text\" name=\"email\" [(ngModel)]=\"email\"/><br>\r\n\t<br>Password: <input type=\"password\" name=\"password\" [(ngModel)]=\"password\"/><br>\r\n\t<br><input type=\"submit\" (click)=\"onLoginSubmit()\" class=\"btn btnColor\">\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, authService) {
        this.router = router;
        this.authService = authService;
        this.email = "";
        this.password = "";
        this.loginFail = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        if (this.email == "" || this.password == "" || this.email == undefined || this.password == undefined) {
            this.loginFail = true;
        }
        else {
            this.user = { email: this.email, password: this.password };
            this.authService.loginUser(this.user).subscribe(function (data) {
                if (data.success) {
                    var response_user = data.user;
                    _this.loginFail = false;
                    localStorage.clear();
                    localStorage.setItem("user", JSON.stringify(response_user));
                    _this.router.navigateByUrl('');
                }
                else {
                    _this.loginFail = true;
                }
            });
        }
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/components/login/login.component.html"),
            styles: [__webpack_require__("./src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports) {

module.exports = "nav {\r\n  display:block;\r\n  height: 75px;\r\n}\r\n\r\nli {\r\n    margin: 35px;\r\n}\r\n\r\n.btnColor {\r\n    background-color: rgba(255,255,255,0);\r\n    border-color: #ff9600;\r\n    border-radius: 1px;\r\n    border-width: 1px;\r\n    color: #ff9600;\r\n    width: 150px;\r\n}\r\n\r\n.btnColor:hover {\r\n    -webkit-transition: background-color 0.2s;\r\n    background-color: rgba(255,200,125,0.2);\r\n    border-color: #ff9600;\r\n    border-radius: 1px;\r\n    border-width: 1px;\r\n    color: #ff9600;\r\n}\r\n\r\n.sgnColor {\r\n    background-color: rgba(255,255,255,0);\r\n    border-color: #01c681;\r\n    border-radius: 1px;\r\n    border-width: 1px;\r\n    color: #01c681;\r\n}\r\n\r\n.sgnColor:hover {\r\n    -webkit-transition: background-color 0.2s;\r\n    background-color: rgba(210,255,190,0.35);\r\n    border-color: #01c681;\r\n    border-radius: 1px;\r\n    border-width: 1px;\r\n    color: #01c681;\r\n}\r\n\r\n.my-color{\r\n  background: -webkit-gradient(linear, left bottom, left top, from(white),to(#f2f9f9));\r\n  background: linear-gradient(to top, white,#f2f9f9);\r\n}\r\n\r\n.nav {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-wrap: wrap;\r\n  flex-wrap: wrap;\r\n  padding-left: 0;\r\n  margin-bottom: 0;\r\n  list-style: none;\r\n}\r\n\r\n.nav-link {\r\n  display: block;\r\n  padding: 0.5rem 1rem;\r\n}\r\n\r\n.nav-home {\r\n    display:block;\r\n    padding: 0.5rem 1rem;\r\n    color: black;\r\n}\r\n\r\n.nav-link:hover, .nav-link:focus {\r\n  text-decoration: none;\r\n}\r\n\r\n.navbar {\r\n  position: relative;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-wrap: wrap;\r\n  flex-wrap: wrap;\r\n\r\n  -webkit-box-pack: justify;\r\n  -ms-flex-pack: justify;\r\n  justify-content: space-between;\r\n  padding: 0.5rem 1rem;\r\n}\r\n\r\n.navbar-brand {\r\n  display: inline-block;\r\n  padding-top: 0.3125rem;\r\n  padding-bottom: 0.3125rem;\r\n  margin-right: 1rem;\r\n  font-size: 1.25rem;\r\n  line-height: inherit;\r\n  white-space: nowrap;\r\n  padding-left : 10px;\r\n  padding-right: 10px;\r\n}\r\n\r\n.nav-tabs .nav-link.active,\r\n.nav-tabs .nav-item.show .nav-link {\r\n  color: #495057;\r\n  background-color: #fff;\r\n  border-color: #dee2e6 #dee2e6 #fff;\r\n}\r\n\r\n.nav-fill .nav-item {\r\n  -webkit-box-flex: 1;\r\n  -ms-flex: 1 1 auto;\r\n  flex: 1 1 auto;\r\n  text-align: center;\r\n}\r\n\r\n.nav-justified .nav-item {\r\n  -ms-flex-preferred-size: 0;\r\n  flex-basis: 0;\r\n  -webkit-box-flex: 1;\r\n  -ms-flex-positive: 1;\r\n  flex-grow: 1;\r\n  text-align: center;\r\n}\r\n\r\n.mr-auto {\r\n  margin-right: auto !important;\r\n}\r\n\r\n.ml-auto {\r\n  margin-left: auto !important;\r\n  -ms-flex-line-pack:;\r\n      align-content: \r\n}\r\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\r\n    <nav class=\"navbar navbar-expand-md navbar-dark fixed-top my-color\">\r\n      \t<img src=\"https://my.mixtape.moe/tilzoe.png\" style=\"height: 50px; width:100px; margin-right: 10px; margin-left: 30px;\">\r\n        <a class=\"navbar-brand\"></a>\r\n        <ul class=\"navbar-nav mr-auto\">\r\n          <li class=\"ml-auto\">\r\n            <a href=\"/\"><button type=\"button\" class=\"btn btnColor\">Home</button></a>\r\n          </li>\r\n\r\n          <li class=\"ml-auto\">\r\n            <a href=\"/view\"><button type=\"button\" class=\"btn btnColor\">View</button></a>\r\n          </li>\r\n\r\n          <li class=\"ml-auto\">\r\n            <a href=\"/config\"><button type=\"button\" class=\"btn btnColor\">Configuration</button></a>\r\n          </li>\r\n        </ul>\r\n          <ul class=\"navbar-nav\">\r\n            <li class=\"mr-auto\">\r\n                <a href=\"/aboutus\"><button type=\"button\" class=\"btn sgnColor float-right\">About Us</button></a>\r\n            </li>\r\n            <li class=\"mr-auto\">\r\n                <a href=\"/login\"> <input type=\"image\" src= \"https://my.mixtape.moe/xvocqg.png\" style=\"height: 30px; width:30px;\" name=\"Login\" *ngIf=\"!authService.loggedIn()\"/> </a>\r\n            </li>\r\n\r\n            <li class=\"mr-auto\">\r\n            \t<a href=\"/register\"><button type=\"button\" class=\"btn sgnColor float-right\" *ngIf=\"!authService.loggedIn()\">Register</button></a>\r\n            </li>\r\n\r\n            <li class=\"mr-auto\">\r\n            \t<a href=\"/profile\"><input type=\"image\" src= \"https://my.mixtape.moe/xvocqg.png\" style=\"height: 30px; width:30px;\" name=\"Profile\" *ngIf=\"authService.loggedIn()\"></a>\r\n            </li>\r\n        </ul>\r\n    </nav>\r\n</header>\r\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(authService) {
        this.authService = authService;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__("./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("./src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/profile/profile.component.css":
/***/ (function(module, exports) {

module.exports = ".sgnColor {\r\n    background-color: rgba(255,255,255,0);\r\n    border-color: #01c681;\r\n    border-radius: 1px;\r\n    border-width: 1px;\r\n    color: #01c681;\r\n}\r\n\r\n.sgnColor:hover {\r\n    -webkit-transition: background-color 0.2s;\r\n    background-color: rgba(210,255,190,0.35);\r\n    border-color: #01c681;\r\n    border-radius: 1px;\r\n    border-width: 1px;\r\n    color: #01c681;\r\n}"

/***/ }),

/***/ "./src/app/components/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div  class=\"jumbotron text-center\">\r\n\t<img src=\"https://my.mixtape.moe/bdkazl.png\" width=\"200\" height=\"289\">\r\n\t<br>\r\n\t\r\n\t<p>Tesla Inc.</p>\r\n\r\n\t<br>\r\n\t<a href=\"/\"><button type=\"button\" class=\"btn sgnColor\" *ngIf=\"authService.loggedIn()\" (click)=\"authService.logout()\">Logout</button></a>\r\n\r\n\r\n\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(authService) {
        this.authService = authService;
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-profile',
            template: __webpack_require__("./src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__("./src/app/components/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/register/register.component.css":
/***/ (function(module, exports) {

module.exports = ".btnColor {\r\n\tbackground-color: rgba(255,255,255,0);\r\n    border-color: #000000;\r\n    border-radius: 1px;\r\n    border-width: 1px;\r\n    color: #000000;\r\n}\r\n\r\n.btnColor:hover {\r\n\t-webkit-transition: background-color 0.2s;\r\n\tbackground-color: rgba(150,150,210,0.2);\r\n    border-color: #000000;\r\n    border-radius: 1px;\r\n    border-width: 1px;\r\n    color: #000000;\r\n}"

/***/ }),

/***/ "./src/app/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron text-center\">\r\n\t<div>\r\n\t\t<h1>Sign up with FeedMeFeedback!</h1>\r\n\t</div>\r\n\t<br>Company Name: <input type=\"text\" name=\"companyName\" [(ngModel)]=\"companyName\"/><br>\r\n\t<br>Email address: <input type=\"text\" name=\"email\" [(ngModel)]=\"email\"/><br>\r\n\t<br>Password: <input type=\"password\" name=\"password\" [(ngModel)]=\"password\"/><br>\r\n\t<br><input type=\"submit\" (click)=\"onRegisterSubmit()\" class=\"btn btnColor\">\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(router, authService) {
        this.router = router;
        this.authService = authService;
        this.products = [];
        this.feedback = [];
        this.registerFail = false;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        if (this.companyName == undefined || this.email == undefined || this.password == undefined) {
            this.registerFail = true;
        }
        else {
            this.user = {
                companyName: this.companyName,
                email: this.email,
                password: this.password,
                products: this.products,
                feedback: this.feedback
            };
            this.authService.registerUser(this.user).subscribe(function (data) {
                if (data.success) {
                    _this.registerFail = true;
                    _this.router.navigateByUrl("login");
                }
                else {
                    _this.registerFail = false;
                }
            });
        }
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-register',
            template: __webpack_require__("./src/app/components/register/register.component.html"),
            styles: [__webpack_require__("./src/app/components/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/view/view.component.css":
/***/ (function(module, exports) {

module.exports = ".list {\r\n\tmargin-left: 400px;\r\n\tmargin-right: 400px;\r\n\tborder-color: #ff9600;\r\n\ttext-align: center;\r\n}"

/***/ }),

/***/ "./src/app/components/view/view.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron text-center\">\r\n\t<div>\r\n\t\t<h1>View surveys completed by customers</h1>\r\n\t</div>\r\n\t<br>\r\n\t<p>The following products have been rated</p>\r\n\t<div *ngIf=\"user\" class=\"list-group\">\r\n\t\t<div *ngFor=\"let feed of feedback\" class=\"list-group-item list\">\r\n\t\t\t<ul *ngFor=\"let rating of feed.rating; let i = index\" >\r\n\t\t\t\t<p *ngIf=\"rating != -1\" style=\"margin-left: -40px\">{{feed.products[i]}} : {{rating}}/10</p>\r\n\t\t\t</ul>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/view/view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ViewComponent = /** @class */ (function () {
    function ViewComponent(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    ViewComponent.prototype.ngOnInit = function () {
        this.user = JSON.parse(localStorage.getItem('user'));
        this.feedback = this.user.feedback;
    };
    ViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-view',
            template: __webpack_require__("./src/app/components/view/view.component.html"),
            styles: [__webpack_require__("./src/app/components/view/view.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]])
    ], ViewComponent);
    return ViewComponent;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    // registerUser(Object) registers the new user to mongodb
    AuthService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post("https://feed-me-back.herokuapp.com:443/users/register", user, { headers: headers })
            .map(function (resp) { return resp.json(); });
    };
    // loginUser(Object) authenticates that user's email and password are in mongodb
    AuthService.prototype.loginUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post("https://feed-me-back.herokuapp.com:443/users/login", user, { headers: headers })
            .map(function (resp) { return resp.json(); });
    };
    // updateFeedback(string, Object) finds the user with email and appends the new feedback to
    //   the user's feedback array
    AuthService.prototype.updateFeedback = function (email, feedback) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var body = { email: email, feedback: feedback };
        return this.http.post("https://feed-me-back.herokuapp.com:443/users/feedback", body, { headers: headers })
            .map(function (resp) { return resp.json(); });
    };
    // loggedIn() returns true if there exists a user in the localStorage, false otherwise.
    AuthService.prototype.loggedIn = function () {
        var user = localStorage.getItem('user');
        if (user != null) {
            return true;
        }
        else {
            return false;
        }
    };
    // logout() clears the local storage
    AuthService.prototype.logout = function () {
        localStorage.clear();
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
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

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map