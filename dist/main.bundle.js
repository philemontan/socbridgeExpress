webpackJsonp([1,4],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http_service__ = __webpack_require__(30);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WallService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WallService = (function () {
    function WallService(httpService) {
        this.httpService = httpService;
        this.wallPosts = [];
    }
    WallService.prototype.addPost = function (wallPost) {
        this.wallPosts.push(wallPost);
    };
    WallService.prototype.getPosts = function () {
        return this.wallPosts;
    };
    WallService.prototype.removeAll = function () {
        this.wallPosts = [];
    };
    WallService.prototype.removeOne = function (post) {
        //send rest call
        this.httpService.deletePost(post)
            .subscribe(function (data) {
            console.log(data);
        }, function (error) {
            console.error(error);
        });
        //removing from current copy in service for visible update
        var idToRemove;
        for (var i = 0; i < this.wallPosts.length; i++) {
            if (this.wallPosts[i].id === post.id) {
                idToRemove = i;
            }
        }
        this.wallPosts.splice(idToRemove, 1);
        //remove from localstorage
        var currModStr = post.mod;
        var indexToRemove;
        var tempBeUser = JSON.parse(localStorage.getItem('user'));
        tempBeUser.modules.forEach(function (mod) {
            if (mod.module_code === currModStr) {
                mod.posts.forEach(function (postItr, index) {
                    if (postItr._id === post.id) {
                        indexToRemove = index;
                    }
                });
                mod.posts.splice(indexToRemove, 1);
            }
        });
        localStorage.setItem('user', JSON.stringify(tempBeUser));
    };
    return WallService;
}());
WallService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* HttpService */]) === "function" && _a || Object])
], WallService);

var _a;
//# sourceMappingURL=Wall.service.js.map

/***/ }),

/***/ 165:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 165;


/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(199);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(299),
        styles: [__webpack_require__(273)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login_component__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home_component__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_topbar_topbar_component__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_sidebar_sidebar_component__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__home_module_module_component__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__home_module_wall_wall_component__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__home_module_module_mates_module_mates_component__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__home_module_chatroom_chat_component__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__home_course_course_component__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__home_course_course_connect_course_connect_component__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__home_course_progress_chart_progress_chart_component__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__home_course_course_connect_connect_discover_connect_discover_component__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__home_course_course_connect_connect_request_connect_request_component__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__home_course_course_connect_connect_friends_connect_friends_component__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__dropdown_directive__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__Users_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__angular_router__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_ngx_quill_editor__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__http_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_ng2_jwt__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_ng2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_24_ng2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__home_module_wall_Wall_service__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__login_ivle_ivle_component__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__login_welcome_welcome_component__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__safehtml_pipe__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__home_module_description_description_component__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__home_module_Description_service__ = __webpack_require__(50);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};































var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_5__login_login_component__["a" /* LoginComponent */], pathMatch: 'full' },
    // { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'welcome', component: __WEBPACK_IMPORTED_MODULE_27__login_welcome_welcome_component__["a" /* WelcomeComponent */] },
    { path: 'IVLE', component: __WEBPACK_IMPORTED_MODULE_26__login_ivle_ivle_component__["a" /* IVLEComponent */] },
    { path: 'home/:firstName', component: __WEBPACK_IMPORTED_MODULE_6__home_home_component__["a" /* HomeComponent */], children: [
            { path: 'course', component: __WEBPACK_IMPORTED_MODULE_13__home_course_course_component__["a" /* CourseComponent */], pathMatch: 'full' },
            { path: ':module', component: __WEBPACK_IMPORTED_MODULE_9__home_module_module_component__["a" /* ModuleComponent */], children: [
                    { path: 'wall', component: __WEBPACK_IMPORTED_MODULE_10__home_module_wall_wall_component__["a" /* WallComponent */] },
                    { path: 'chat', component: __WEBPACK_IMPORTED_MODULE_12__home_module_chatroom_chat_component__["a" /* ChatComponent */] },
                    { path: 'description', component: __WEBPACK_IMPORTED_MODULE_29__home_module_description_description_component__["a" /* DescriptionComponent */] }
                ] }
        ] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_5__login_login_component__["a" /* LoginComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_6__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_7__home_topbar_topbar_component__["a" /* TopbarComponent */],
            __WEBPACK_IMPORTED_MODULE_8__home_sidebar_sidebar_component__["a" /* SidebarComponent */],
            __WEBPACK_IMPORTED_MODULE_9__home_module_module_component__["a" /* ModuleComponent */],
            __WEBPACK_IMPORTED_MODULE_10__home_module_wall_wall_component__["a" /* WallComponent */],
            __WEBPACK_IMPORTED_MODULE_11__home_module_module_mates_module_mates_component__["a" /* ModuleMatesComponent */],
            __WEBPACK_IMPORTED_MODULE_12__home_module_chatroom_chat_component__["a" /* ChatComponent */],
            __WEBPACK_IMPORTED_MODULE_13__home_course_course_component__["a" /* CourseComponent */],
            __WEBPACK_IMPORTED_MODULE_14__home_course_course_connect_course_connect_component__["a" /* CourseConnectComponent */],
            __WEBPACK_IMPORTED_MODULE_15__home_course_progress_chart_progress_chart_component__["a" /* ProgressChartComponent */],
            __WEBPACK_IMPORTED_MODULE_16__home_course_course_connect_connect_discover_connect_discover_component__["a" /* ConnectDiscoverComponent */],
            __WEBPACK_IMPORTED_MODULE_17__home_course_course_connect_connect_request_connect_request_component__["a" /* ConnectRequestComponent */],
            __WEBPACK_IMPORTED_MODULE_18__home_course_course_connect_connect_friends_connect_friends_component__["a" /* ConnectFriendsComponent */],
            __WEBPACK_IMPORTED_MODULE_19__dropdown_directive__["a" /* DropdownDirective */],
            __WEBPACK_IMPORTED_MODULE_26__login_ivle_ivle_component__["a" /* IVLEComponent */],
            __WEBPACK_IMPORTED_MODULE_27__login_welcome_welcome_component__["a" /* WelcomeComponent */],
            __WEBPACK_IMPORTED_MODULE_28__safehtml_pipe__["a" /* SafehtmlPipe */],
            __WEBPACK_IMPORTED_MODULE_29__home_module_description_description_component__["a" /* DescriptionComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_22_ngx_quill_editor__["a" /* QuillEditorModule */],
            __WEBPACK_IMPORTED_MODULE_21__angular_router__["a" /* RouterModule */].forRoot(appRoutes)
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_23__http_service__["a" /* HttpService */], __WEBPACK_IMPORTED_MODULE_20__Users_service__["a" /* UsersService */], __WEBPACK_IMPORTED_MODULE_24_ng2_jwt__["JwtHelper"], __WEBPACK_IMPORTED_MODULE_25__home_module_wall_Wall_service__["a" /* WallService */], __WEBPACK_IMPORTED_MODULE_30__home_module_Description_service__["a" /* DescriptionService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DropdownDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DropdownDirective = (function () {
    function DropdownDirective() {
    }
    DropdownDirective.prototype.toggleOpen = function () {
        this.isOpen = !this.isOpen;
    };
    DropdownDirective.prototype.ngOnInit = function () {
        this.isOpen = false;
    };
    return DropdownDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* HostBinding */])('class.open'),
    __metadata("design:type", Boolean)
], DropdownDirective.prototype, "isOpen", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* HostListener */])('click'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DropdownDirective.prototype, "toggleOpen", null);
DropdownDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* Directive */])({
        selector: '[appDropdown]'
    }),
    __metadata("design:paramtypes", [])
], DropdownDirective);

//# sourceMappingURL=dropdown.directive.js.map

/***/ }),

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConnectDiscoverComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ConnectDiscoverComponent = (function () {
    function ConnectDiscoverComponent() {
    }
    ConnectDiscoverComponent.prototype.ngOnInit = function () {
    };
    return ConnectDiscoverComponent;
}());
ConnectDiscoverComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-connect-discover',
        template: __webpack_require__(300),
        styles: [__webpack_require__(274)]
    }),
    __metadata("design:paramtypes", [])
], ConnectDiscoverComponent);

//# sourceMappingURL=connect-discover.component.js.map

/***/ }),

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConnectFriendsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ConnectFriendsComponent = (function () {
    function ConnectFriendsComponent() {
    }
    ConnectFriendsComponent.prototype.ngOnInit = function () {
    };
    return ConnectFriendsComponent;
}());
ConnectFriendsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-connect-friends',
        template: __webpack_require__(301),
        styles: [__webpack_require__(275)]
    }),
    __metadata("design:paramtypes", [])
], ConnectFriendsComponent);

//# sourceMappingURL=connect-friends.component.js.map

/***/ }),

/***/ 180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConnectRequestComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ConnectRequestComponent = (function () {
    function ConnectRequestComponent() {
    }
    ConnectRequestComponent.prototype.ngOnInit = function () {
    };
    return ConnectRequestComponent;
}());
ConnectRequestComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-connect-request',
        template: __webpack_require__(302),
        styles: [__webpack_require__(276)]
    }),
    __metadata("design:paramtypes", [])
], ConnectRequestComponent);

//# sourceMappingURL=connect-request.component.js.map

/***/ }),

/***/ 181:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CourseConnectComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CourseConnectComponent = (function () {
    function CourseConnectComponent() {
    }
    CourseConnectComponent.prototype.ngOnInit = function () {
    };
    return CourseConnectComponent;
}());
CourseConnectComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-course-connect',
        template: __webpack_require__(303),
        styles: [__webpack_require__(277)]
    }),
    __metadata("design:paramtypes", [])
], CourseConnectComponent);

//# sourceMappingURL=course-connect.component.js.map

/***/ }),

/***/ 182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_User_model__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Users_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__http_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_jwt__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_jwt__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CourseComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CourseComponent = (function () {
    function CourseComponent(route, userService, httpService, jwtHelper) {
        this.route = route;
        this.userService = userService;
        this.httpService = httpService;
        this.jwtHelper = jwtHelper;
        this.currentUser = new __WEBPACK_IMPORTED_MODULE_2__models_User_model__["a" /* User */]('test', 'test', 'test', 'test', 5, ['test', 'test2'], [], 'asdas@hotmail.com', 'asdasd');
        this.ivleRetrievedModules = {
            modules: []
        };
        this.testUser = this.userService.getCurrentUser();
        console.log(this.userService.getCurrentUser().modules);
        this.ivleRetrievedModules.modules = this.userService.getCurrentUser().modules;
    }
    CourseComponent.prototype.ngOnInit = function () {
    };
    return CourseComponent;
}());
CourseComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-course',
        template: __webpack_require__(304),
        styles: [__webpack_require__(278)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__Users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__Users_service__["a" /* UsersService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__http_service__["a" /* HttpService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5_ng2_jwt__["JwtHelper"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_ng2_jwt__["JwtHelper"]) === "function" && _d || Object])
], CourseComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=course.component.js.map

/***/ }),

/***/ 183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgressChartComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProgressChartComponent = (function () {
    function ProgressChartComponent() {
    }
    ProgressChartComponent.prototype.ngOnInit = function () {
    };
    return ProgressChartComponent;
}());
ProgressChartComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-progress-chart',
        template: __webpack_require__(305),
        styles: [__webpack_require__(279)]
    }),
    __metadata("design:paramtypes", [])
], ProgressChartComponent);

//# sourceMappingURL=progress-chart.component.js.map

/***/ }),

/***/ 184:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Users_service__ = __webpack_require__(25);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = (function () {
    function HomeComponent(route, userService) {
        this.route = route;
        this.userService = userService;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__(306),
        styles: [__webpack_require__(280)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__Users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__Users_service__["a" /* UsersService */]) === "function" && _b || Object])
], HomeComponent);

var _a, _b;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 185:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client__ = __webpack_require__(583);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Users_service__ = __webpack_require__(25);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChatComponent = (function () {
    function ChatComponent(route, userService) {
        this.route = route;
        this.userService = userService;
        this.localDomain = 'http://localhost:3000';
        this.herokuDomain = 'http://socbridge.herokuapp.com';
        this.socket = null;
        this.currentModStr = '';
        this.messages = [];
        // initializing variables
        this.currentModStr = route.parent.params['module'];
        this.currUser = this.userService.getCurrentUser();
        this.currMembers = [];
        this.socket = __WEBPACK_IMPORTED_MODULE_2_socket_io_client__(this.herokuDomain);
        //receiving messages
        this.socket.on('message', function (msg) {
            this.messages.push(msg);
        }.bind(this));
        //receiving user joined message
        this.socket.on('joined-message', function (joinedMsg) {
            this.messages.push(joinedMsg.italics());
        }.bind(this));
        //receiving user left message
        this.socket.on('left-message', function (joinedMsg) {
            this.messages.push(joinedMsg.italics());
        }.bind(this));
        // receiving room info
        this.socket.on('room-info', function (roomInfo) {
            this.currMembers = roomInfo;
            console.log(roomInfo);
        }.bind(this));
    }
    ChatComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.parent.params
            .subscribe(function (params) {
            //reset current member list when module changes
            _this.currMembers = [];
            //set current module
            _this.currentModStr = params['module'];
            _this.joiningInfo = [];
            //sending join info
            _this.joiningInfo.push(_this.currUser.firstName);
            _this.joiningInfo.push(_this.currentModStr);
            _this.joinRoom(_this.joiningInfo);
        });
    };
    ChatComponent.prototype.ngOnDestroy = function () {
        // this.socket.emit('leave-all', this.currUser.firstName);
    };
    ChatComponent.prototype.ngAfterViewChecked = function () { };
    // join room, called on init
    ChatComponent.prototype.joinRoom = function (joiningInfo) {
        this.socket.emit('subscribe', joiningInfo);
    };
    // emit message
    ChatComponent.prototype.sendNewMessage = function () {
        this.newMsg = this.currUser.firstName + ': ' + this.typedMessage;
        this.socket.emit('new message', this.newMsg);
        this.socket.emit('send', { room: this.currentModStr, message: this.newMsg });
        this.typedMessage = '';
    };
    ChatComponent.prototype.enterClicked = function () {
        this.newMsg = this.currUser.firstName + ': ' + this.typedMessage;
        this.socket.emit('new message', this.newMsg);
        this.socket.emit('send', { room: this.currentModStr, message: this.newMsg });
        this.typedMessage = '';
    };
    return ChatComponent;
}());
ChatComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-chat',
        template: __webpack_require__(307),
        styles: [__webpack_require__(281)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__Users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__Users_service__["a" /* UsersService */]) === "function" && _b || Object])
], ChatComponent);

var _a, _b;
//# sourceMappingURL=chat.component.js.map

/***/ }),

/***/ 186:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Description_service__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DescriptionComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DescriptionComponent = (function () {
    function DescriptionComponent(http, descriptionService, route) {
        var _this = this;
        this.http = http;
        this.descriptionService = descriptionService;
        this.route = route;
        this.semesters = [];
        this.workloads = [];
        this.examDates = ['', '', '', ''];
        this.CORS_web = '';
        this.IVLE_web = '';
        this.NUSMODS_web = '';
        this.data = this.descriptionService.data;
        this.route.parent.params
            .subscribe(function (params) {
            _this.currentMod = _this.descriptionService.getModDescription(params['module']);
        });
    }
    DescriptionComponent.prototype.ngOnInit = function () {
        for (var _i = 0, _a = this.currentMod['History']; _i < _a.length; _i++) {
            var i = _a[_i];
            this.semesters.push(i['Semester']);
            if (i['ExamDate']) {
                this.examDates[i['Semester'] - 1] = i['ExamDate'];
            }
            else {
                this.examDates[i['Semester'] - 1] = 'No Exam';
            }
            ;
        }
        ;
        this.semesters.sort();
        this.workloads = this.currentMod['Workload'].split('-');
        this.CORS_web = 'https://myaces.nus.edu.sg/cors/jsp/report/ModuleDetailedInfo.jsp?acad_y=2017/2018sem_c=1&mod_c=' + this.currentMod['ModuleCode'];
        this.IVLE_web = 'http://ivle.nus.edu.sg/lms/public/list_course_public.aspx?code=' + this.currentMod['ModuleCode'];
        this.NUSMODS_web = 'https://nusmods.com/modules/' + this.currentMod['ModuleCode'];
    };
    return DescriptionComponent;
}());
DescriptionComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-description',
        template: __webpack_require__(308),
        styles: [__webpack_require__(282)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__Description_service__["a" /* DescriptionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__Description_service__["a" /* DescriptionService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object])
], DescriptionComponent);

var _a, _b, _c;
//# sourceMappingURL=description.component.js.map

/***/ }),

/***/ 187:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModuleMatesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ModuleMatesComponent = (function () {
    function ModuleMatesComponent() {
    }
    ModuleMatesComponent.prototype.ngOnInit = function () {
    };
    return ModuleMatesComponent;
}());
ModuleMatesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-module-mates',
        template: __webpack_require__(309),
        styles: [__webpack_require__(283)]
    }),
    __metadata("design:paramtypes", [])
], ModuleMatesComponent);

//# sourceMappingURL=module-mates.component.js.map

/***/ }),

/***/ 188:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModuleComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ModuleComponent = (function () {
    function ModuleComponent(route) {
        var _this = this;
        this.route = route;
        this.route.params
            .subscribe(function (params) {
            _this.currentModuleName = params['module'];
        });
    }
    ModuleComponent.prototype.ngOnInit = function () {
    };
    return ModuleComponent;
}());
ModuleComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-module',
        template: __webpack_require__(310),
        styles: [__webpack_require__(284)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object])
], ModuleComponent);

var _a;
//# sourceMappingURL=module.component.js.map

/***/ }),

/***/ 189:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_Post_model__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_Comment_model__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Users_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__http_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Wall_service__ = __webpack_require__(101);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WallComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var WallComponent = (function () {
    function WallComponent(userService, route, httpService, wallService) {
        this.userService = userService;
        this.route = route;
        this.httpService = httpService;
        this.wallService = wallService;
        this.newPost = false;
        this.title = '';
        this.editorContent = '';
        this.editorOptions = {
            placeholder: 'insert content...'
        };
        this.commentContent = '';
        this.commentOptions = {
            placeholder: 'insert content...'
        };
        this.currentModStr = '';
    }
    WallComponent.prototype.ngOnInit = function () {
        var _this = this;
        var wallSvc = this.wallService;
        var userSvc = this.userService;
        this.route.parent.params
            .subscribe(function (params) {
            _this.currentModStr = params['module'];
            _this.wallService.removeAll();
            var storageUserObj = JSON.parse(localStorage.getItem('user'));
            var storageModArr = storageUserObj.modules;
            storageModArr.forEach(function (storageModObj) {
                if (storageModObj.module_code === params['module']) {
                    storageModObj.posts.forEach(function (storageModObjPost) {
                        var commentArr = [];
                        storageModObjPost.comments.forEach(function (storageModObjPostComment) {
                            commentArr.push(new __WEBPACK_IMPORTED_MODULE_3__models_Comment_model__["a" /* Comment */](storageModObjPostComment.content, userSvc.createFeUserFromBeObj(storageModObjPostComment.user), storageModObjPostComment.post));
                        });
                        wallSvc.addPost(new __WEBPACK_IMPORTED_MODULE_1__models_Post_model__["a" /* Post */](storageModObjPost.title, storageModObjPost.content, userSvc.createFeUserFromBeObj(storageModObjPost.user), params['module'], storageModObjPost._id, commentArr, storageModObjPost.user._id === storageUserObj._id || storageModObjPost.user === storageUserObj._id));
                    });
                }
            });
        });
    };
    WallComponent.prototype.onPressed = function () {
        this.newPost = true;
    };
    WallComponent.prototype.clicked = function () {
        var _this = this;
        console.log(this.editorContent);
        this.newPost = false;
        var tempPost = new __WEBPACK_IMPORTED_MODULE_1__models_Post_model__["a" /* Post */](this.title, this.editorContent, this.userService.getCurrentUser(), this.currentModStr, '', [], true);
        // this.wallService.addPost(tempPost);
        // this.Posts.push(new Post(this.title, this.editorContent, this.userService.getUserByName('siddharth')));
        this.editorContent = '';
        this.title = '';
        this.httpService.sendNewPost(tempPost)
            .subscribe(function (data) {
            console.log(data);
            tempPost.id = data.postId;
            _this.wallService.addPost(tempPost);
            //adding to local storage
            var currModStr = _this.currentModStr;
            var tempBeUser = JSON.parse(localStorage.getItem('user'));
            tempBeUser.modules.forEach(function (mod) {
                if (mod.module_code === currModStr) {
                    mod.posts.push(data.post);
                }
            });
            localStorage.setItem('user', JSON.stringify(tempBeUser));
        }, function (error) {
            console.error(error);
        });
    };
    WallComponent.prototype.cancelNewPost = function () {
        this.newPost = !this.newPost;
    };
    WallComponent.prototype.cancelNewComment = function (post) {
        post.showNewCommentEditor();
    };
    WallComponent.prototype.newComment = function (post) {
        var currModStr = this.currentModStr;
        if (this.commentContent.length > 0) {
            var newComment = new __WEBPACK_IMPORTED_MODULE_3__models_Comment_model__["a" /* Comment */](this.commentContent, this.userService.getCurrentUser(), post.id);
            //current post adding comment
            post.addComment(newComment);
            //storing comment in local storage
            var tempBeUser = JSON.parse(localStorage.getItem('user'));
            tempBeUser.modules.forEach(function (mod) {
                if (mod.module_code === currModStr) {
                    mod.posts.forEach(function (postItr) {
                        if (postItr._id === post.id) {
                            postItr.comments.push(newComment);
                        }
                    });
                }
            });
            localStorage.setItem('user', JSON.stringify(tempBeUser));
            //rest call for comment
            this.httpService.sendNewComment(newComment)
                .subscribe(function (data) {
                console.log(data);
            }, function (error) {
                console.error(error);
            });
        }
        post.showNewCommentEditor();
        post.showAllComments();
        this.commentContent = '';
    };
    WallComponent.prototype.saveEditedPost = function (post) {
        post.showPostEdit();
        var currModStr = this.currentModStr;
        //edit local storage's user and post
        var tempBeUser = JSON.parse(localStorage.getItem('user'));
        tempBeUser.modules.forEach(function (mod) {
            if (mod.module_code === currModStr) {
                mod.posts.forEach(function (postItr) {
                    if (postItr._id === post.id) {
                        postItr.content = post.content;
                        postItr.title = post.title;
                        console.log('found and edited');
                    }
                });
            }
        });
        localStorage.setItem('user', JSON.stringify(tempBeUser));
        //send rest call to edit
        this.httpService.editPost(post)
            .subscribe(function (data) {
            console.log(data);
        }, function (error) {
            console.error(error);
        });
    };
    return WallComponent;
}());
WallComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-wall',
        template: __webpack_require__(311),
        styles: [__webpack_require__(285)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__Users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__Users_service__["a" /* UsersService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__http_service__["a" /* HttpService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__Wall_service__["a" /* WallService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__Wall_service__["a" /* WallService */]) === "function" && _d || Object])
], WallComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=wall.component.js.map

/***/ }),

/***/ 190:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Users_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__http_service__ = __webpack_require__(30);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SidebarComponent = (function () {
    function SidebarComponent(route, userService, httpService, router) {
        this.route = route;
        this.userService = userService;
        this.httpService = httpService;
        this.router = router;
        // this.route.params
        //   .subscribe(
        //     (params: Params) => {
        //       this.currentUser = this.userService.getUserByName(params['firstName']);
        //     }
        //   );
        // this.currentUser = this.userService.getCurrentUser();
    }
    SidebarComponent.prototype.ngOnInit = function () { };
    SidebarComponent.prototype.logout = function () {
        this.httpService.signOut();
        this.router.navigate(['/']);
        this.userService.signOut();
    };
    return SidebarComponent;
}());
SidebarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-sidebar',
        template: __webpack_require__(312),
        styles: [__webpack_require__(286)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__Users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__Users_service__["a" /* UsersService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__http_service__["a" /* HttpService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object])
], SidebarComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=sidebar.component.js.map

/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TopbarComponent = (function () {
    function TopbarComponent() {
    }
    TopbarComponent.prototype.ngOnInit = function () {
    };
    return TopbarComponent;
}());
TopbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-topbar',
        template: __webpack_require__(313),
        styles: [__webpack_require__(287)]
    }),
    __metadata("design:paramtypes", [])
], TopbarComponent);

//# sourceMappingURL=topbar.component.js.map

/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Users_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_http_service__ = __webpack_require__(30);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IVLEComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var IVLEComponent = (function () {
    function IVLEComponent(http, route, userService, router, httpService) {
        this.http = http;
        this.route = route;
        this.userService = userService;
        this.router = router;
        this.httpService = httpService;
        this.api_key = 'Nxm9ocEZtuEeyUn3ed4Ci';
        this.ivleRetrievedModules = {
            modules: []
        };
        this.lapiUrl = {
            url: ''
        };
        this.access_token = (this.route.snapshot.queryParams['token']);
        this.profile = this.http.request('https://ivle.nus.edu.sg/api/Lapi.svc/Profile_View?APIKey='
            + this.api_key + '&AuthToken=' + this.access_token);
        this.module = this.http.request('https://ivle.nus.edu.sg/api/Lapi.svc/Modules?APIKey='
            + this.api_key + '&AuthToken=' + this.access_token +
            '&Duration=5000&IncludeAllInfo=true');
    }
    IVLEComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.lapiUrl.url = 'https://ivle.nus.edu.sg/api/Lapi.svc/Modules?APIKey='
            + this.api_key + '&AuthToken=' + this.access_token +
            '&Duration=5000&IncludeAllInfo=true';
        this.httpService.populate(this.lapiUrl)
            .subscribe(function (data) {
            console.log(data);
            localStorage.setItem('token', data.token);
            localStorage.setItem('userId', data.userId);
            localStorage.setItem('user', data.userObj);
            localStorage.setItem('message', data.message);
            _this.userService.initializeUserData();
            console.log(data.ivleRetrievedModules);
            _this.ivleRetrievedModules = data.moduleArrObj;
        }, function (error) { return console.error(error); });
    };
    IVLEComponent.prototype.continue = function () {
        localStorage.clear();
        this.router.navigate(['']);
    };
    return IVLEComponent;
}());
IVLEComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-ivle',
        template: __webpack_require__(314),
        styles: [__webpack_require__(288)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__Users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__Users_service__["a" /* UsersService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4_app_http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_app_http_service__["a" /* HttpService */]) === "function" && _e || Object])
], IVLEComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=ivle.component.js.map

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Users_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__http_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_User_model__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_jwt__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_module_Description_service__ = __webpack_require__(50);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var LoginComponent = (function () {
    function LoginComponent(usersService, router, route, httpService, jwtHelper, descriptionService) {
        this.usersService = usersService;
        this.router = router;
        this.route = route;
        this.httpService = httpService;
        this.jwtHelper = jwtHelper;
        this.descriptionService = descriptionService;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginMenu = false;
        this.signupMenu = false;
        this.loginFailed = false;
        this.loginUsername = '';
        this.loginPassword = '';
        this.signUpFailed = false;
        this.signUpFirstName = '';
        this.signUpLastName = '';
        this.signUpEmail = '';
        this.signUpPassword = '';
        this.signUpCourse = '';
        this.duplicateUserBool = false;
        this.descriptionService.getData();
    };
    LoginComponent.prototype.loginClicked = function () {
        this.loginMenu = !this.loginMenu;
    };
    LoginComponent.prototype.signUpClicked = function () {
        this.signupMenu = !this.signupMenu;
    };
    LoginComponent.prototype.signIn = function () {
        var _this = this;
        var newUser = new __WEBPACK_IMPORTED_MODULE_4__models_User_model__["a" /* User */]('', '', '/', '', 0, [], [], this.loginUsername, this.loginPassword);
        this.httpService.signIn(newUser)
            .subscribe(function (data) {
            localStorage.setItem('token', data.token);
            localStorage.setItem('userId', data.userId);
            localStorage.setItem('user', data.userObj);
            localStorage.setItem('message', data.message);
            _this.usersService.initializeUserData();
            var tempUser = _this.usersService.getCurrentUser();
            if (tempUser.modules.length > 0) {
                _this.router.navigate(['home', _this.usersService.getCurrentUser().firstName, 'course']);
            }
            else {
                _this.router.navigate(['welcome']);
            }
        }, function (error) {
            console.error(error);
            _this.loginFailed = true;
        });
    };
    LoginComponent.prototype.signIn2 = function () {
        var _this = this;
        var newUser = new __WEBPACK_IMPORTED_MODULE_4__models_User_model__["a" /* User */]('', '', '/', '', 0, [], [], this.signUpEmail, this.signUpPassword);
        this.httpService.signIn(newUser)
            .subscribe(function (data) {
            localStorage.setItem('token', data.token);
            localStorage.setItem('userId', data.userId);
            localStorage.setItem('user', data.userObj);
            localStorage.setItem('message', data.message);
            _this.usersService.initializeUserData();
            var tempUser = _this.usersService.getCurrentUser();
            if (tempUser.modules.length > 0) {
                _this.router.navigate(['home', _this.usersService.getCurrentUser().firstName, 'course']);
            }
            else {
                _this.router.navigate(['welcome']);
            }
        }, function (error) {
            console.error(error);
            _this.loginFailed = true;
        });
    };
    LoginComponent.prototype.signUp = function () {
        var _this = this;
        if (this.signUpFirstName === '' || this.signUpLastName === '' ||
            this.signUpEmail === '' || this.signUpCourse === '' ||
            this.signUpPassword === '') {
            this.resetFields();
            this.signUpFailed = true;
        }
        else {
            var newUser = new __WEBPACK_IMPORTED_MODULE_4__models_User_model__["a" /* User */](this.signUpFirstName, this.signUpLastName, '/', this.signUpCourse, 0, [], [], this.signUpEmail, this.signUpPassword);
            this.httpService.signUp(newUser)
                .subscribe(function (data) {
                console.log(data);
                _this.signIn2();
            }, 
            // error => console.error(error)
            function (error) {
                console.log(error);
                _this.resetFields();
                _this.duplicateUserBool = true;
            });
        }
    };
    LoginComponent.prototype.resetFields = function () {
        this.loginUsername = '';
        this.loginPassword = '';
        this.signUpFirstName = '';
        this.signUpLastName = '';
        this.signUpEmail = '';
        this.signUpPassword = '';
        this.signUpCourse = '';
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__(315),
        styles: [__webpack_require__(289)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__Users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__Users_service__["a" /* UsersService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__http_service__["a" /* HttpService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5_ng2_jwt__["JwtHelper"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_ng2_jwt__["JwtHelper"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__home_module_Description_service__["a" /* DescriptionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__home_module_Description_service__["a" /* DescriptionService */]) === "function" && _f || Object])
], LoginComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WelcomeComponent = (function () {
    function WelcomeComponent() {
        this.localHostStr = 'localhost:4200';
        this.herokuDomainStr = 'socbridge.herokuapp.com';
    }
    WelcomeComponent.prototype.ngOnInit = function () {
    };
    return WelcomeComponent;
}());
WelcomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-welcome',
        template: __webpack_require__(316),
        styles: [__webpack_require__(290)]
    }),
    __metadata("design:paramtypes", [])
], WelcomeComponent);

//# sourceMappingURL=welcome.component.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Comment; });
var Comment = (function () {
    function Comment(content, user, post) {
        this.content = content;
        this.user = user;
        this.post = post;
    }
    return Comment;
}());

//# sourceMappingURL=Comment.model.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Module; });
var Module = (function () {
    function Module(name, users) {
        this.moduleName = name;
        this.users = users;
    }
    return Module;
}());

//# sourceMappingURL=Module.model.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Post; });
var Post = (function () {
    function Post(title, content, user, mod, id, commentArr, ownerBool) {
        this.title = title;
        this.content = content;
        this.user = user;
        this.mod = mod;
        this.comments = commentArr;
        this.id = id;
        this.ownerBool = ownerBool;
        this.showCommentsBool = false;
        this.newComBool = false;
        this.editPostBool = false;
        this.deletePostBool = false;
    }
    Post.prototype.getComments = function () {
        return this.comments;
    };
    Post.prototype.addComment = function (comment) {
        this.comments.push(comment);
    };
    Post.prototype.showAllComments = function () {
        if (this.showCommentsBool === false) {
            this.showCommentsBool = true;
            this.newComBool = false;
            this.editPostBool = false;
            this.deletePostBool = false;
        }
        else {
            this.showCommentsBool = false;
        }
    };
    Post.prototype.showPostEdit = function () {
        if (this.editPostBool === false) {
            this.editPostBool = true;
            this.newComBool = false;
            this.showCommentsBool = false;
            this.deletePostBool = false;
        }
        else {
            this.editPostBool = false;
        }
    };
    Post.prototype.showNewCommentEditor = function () {
        if (this.newComBool === false) {
            this.newComBool = true;
            this.showCommentsBool = false;
            this.editPostBool = false;
            this.deletePostBool = false;
        }
        else {
            this.newComBool = false;
        }
    };
    Post.prototype.showDelete = function () {
        if (this.deletePostBool === false) {
            this.deletePostBool = true;
            this.newComBool = false;
            this.editPostBool = false;
            this.showCommentsBool = false;
        }
        else {
            this.deletePostBool = false;
        }
    };
    return Post;
}());

//# sourceMappingURL=Post.model.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(34);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SafehtmlPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SafehtmlPipe = (function () {
    function SafehtmlPipe(sanitized) {
        this.sanitized = sanitized;
    }
    SafehtmlPipe.prototype.transform = function (value) {
        return this.sanitized.bypassSecurityTrustHtml(value);
    };
    return SafehtmlPipe;
}());
SafehtmlPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Pipe */])({
        name: 'safehtml'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]) === "function" && _a || Object])
], SafehtmlPipe);

var _a;
//# sourceMappingURL=safehtml.pipe.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 25:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_User_model__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_Module_model__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_module_Description_service__ = __webpack_require__(50);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UsersService = (function () {
    function UsersService(http, descriptionService) {
        this.http = http;
        this.descriptionService = descriptionService;
        this.FEmodArr = [];
    }
    UsersService.prototype.createFeUserFromBeObj = function (BeUser) {
        return (new __WEBPACK_IMPORTED_MODULE_0__models_User_model__["a" /* User */](BeUser.firstName, BeUser.lastName, 'http://i.imgur.com/XqGLoAM.png', BeUser.course, 2, [], [], BeUser.email, BeUser.password));
    };
    UsersService.prototype.initializeUserData = function () {
        var storageObj = JSON.parse(localStorage.getItem('user'));
        var BEmodArr = storageObj.modules;
        var tempMod;
        for (var i = 0; i < BEmodArr.length; i++) {
            tempMod = BEmodArr[i];
            this.FEmodArr.push(new __WEBPACK_IMPORTED_MODULE_1__models_Module_model__["a" /* Module */](tempMod.module_code, []));
            this.descriptionService.ModsTaken.push(tempMod['module_code']);
        }
        console.log(this.FEmodArr);
        this.user = new __WEBPACK_IMPORTED_MODULE_0__models_User_model__["a" /* User */](storageObj.firstName, storageObj.lastName, 'http://i.imgur.com/XqGLoAM.png', storageObj.course, 2, this.FEmodArr, [], storageObj.email, storageObj.password);
        this.descriptionService.compute();
    };
    UsersService.prototype.signOut = function () {
        this.FEmodArr = [];
    };
    UsersService.prototype.getCurrentUser = function () {
        return this.user;
    };
    return UsersService;
}());
UsersService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__home_module_Description_service__["a" /* DescriptionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__home_module_Description_service__["a" /* DescriptionService */]) === "function" && _b || Object])
], UsersService);

var _a, _b;
//# sourceMappingURL=Users.service.js.map

/***/ }),

/***/ 273:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 274:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 275:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 276:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 277:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 278:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 279:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 280:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, ".full {\r\n  position: relative;\r\n  background-size: cover;\r\n  min-height:100vh;\r\n  width: 100%;\r\n  background-color: #C4DFE6;\r\n  padding-bottom: 0;\r\n  margin-bottom: 0;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 281:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, ".chat-container {\r\n  width:100%;\r\n  height:100%;\r\n}\r\n.participant-bar {\r\n  background-color: #FFCCAC;\r\n  height: 600px;\r\n  overflow-y:scroll;\r\n  width: 10%;\r\n  border-bottom-left-radius: 15%;\r\n  border-top-left-radius: 15%;\r\n\r\n}\r\n.chat-area {\r\n  background-color: pink;\r\n  height: 600px;\r\n  width: 70%;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: reverse;\r\n      -ms-flex-direction: column-reverse;\r\n          flex-direction: column-reverse;\r\n}\r\n.chat-display {\r\n  width:100%;\r\n  overflow-y:auto;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: reverse;\r\n      -ms-flex-direction: column-reverse;\r\n          flex-direction: column-reverse;\r\n}\r\n.list-group {\r\n  padding:0;\r\n  width:100%;\r\n  height:100%;\r\n}\r\n.list-group-item {\r\n  background:#FFFBFF;\r\n  width: 100%;\r\n  display:block;\r\n}\r\n.alt-msg-display {\r\n  background:white;\r\n  width: 100%;\r\n  display:block;\r\n}\r\n.input-css {\r\n  width:100%;\r\n  height:100%;\r\n}\r\n\r\n.display-3 {\r\n  text-align: center;\r\n}\r\n\r\n.modHeader {\r\n  background-color: #5BC8AC;\r\n  position: fixed;\r\n  margin: auto;\r\n  color: white;\r\n  z-index:9999;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 282:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, ".highlight {\r\n  font-weight: 700;\r\n  color: #ff5138;\r\n}\r\ndt {\r\n  font-weight: 700;\r\n}\r\ndd, dt {\r\n  line-height: 1.42857;\r\n}\r\n*, :after, :before {\r\n  box-sizing: border-box;\r\n}\r\ndt {\r\n  display: block;\r\n}\r\n\r\nbody {\r\n  padding-top: 50px;\r\n  line-height: 1.5;\r\n}\r\n\r\nbody {\r\n  font-family: Roboto,Helvetica Neue,Helvetica,Arial,sans-serif!important;\r\n  font-size: 14px;\r\n  line-height: 1.42857;\r\n  color: #333;\r\n  background-color: #fafafa;\r\n}\r\n.module-page .module-code {\r\n  margin-bottom: 5px;\r\n  color: #ff5138;\r\n}\r\n.h1, h1 {\r\n  font-size: 36px;\r\n}\r\n.h1, .h2, .h3, h1, h2, h3 {\r\n  margin-top: 20px;\r\n  margin-bottom: 10px;\r\n}\r\n.h1, .h2, .h3, .h4, .h5, .h6, h1, h2, h3, h4, h5, h6 {\r\n  font-family: inherit;\r\n  font-weight: 500;\r\n  line-height: 1.1;\r\n  color: inherit;\r\n}\r\nh1 {\r\n  font-size: 2em;\r\n  margin: .67em 0;\r\n}\r\n\r\n*, :after, :before {\r\n  box-sizing: border-box;\r\n}\r\n\r\nh1 {\r\n  display: block;\r\n  font-size: 2em;\r\n  -webkit-margin-before: 0.67em;\r\n  -webkit-margin-after: 0.67em;\r\n  -webkit-margin-start: 0px;\r\n  -webkit-margin-end: 0px;\r\n  font-weight: bold;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 283:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 284:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 285:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, ".btn-primary {\r\n  color: #fff;\r\n  background-color: #337ab7;\r\n  border-color: #2e6da4;\r\n  margin: 50px 0 0 0;\r\n\r\n}\r\n\r\n.quillColor {\r\n  background-color: white;\r\n}\r\n\r\n.modHeader {\r\n  background-color: #F18D9E;\r\n  position: fixed;\r\n  margin: auto;\r\n  color: white;\r\n  z-index:9999;\r\n}\r\n\r\n\r\n\r\n.paddingAwayFromModHeader {\r\n  padding-top: 50px;\r\n}\r\n\r\n.btnPosition {\r\n  padding-right: 20px;\r\n}\r\n\r\n.btnBarOverflowHider {\r\n  padding-top: 50px;\r\n  overflow: hidden;\r\n}\r\n\r\n\r\nbody {\r\n\r\n  /*color: #C4DFE6;*/\r\n  position: relative;\r\n  background-size: cover;\r\n  min-height:100vh;\r\n  background-color: #C4DFE6;\r\n  padding-bottom: 0;\r\n  margin-bottom: 0;\r\n  padding-top: 0;\r\n  padding-right: 0;\r\n  margin-top: 0;\r\n  margin-right:0;\r\n  overflow: hidden;\r\n}\r\n\r\n.btn-group {\r\n  float: right;\r\n}\r\n\r\na{\r\n  text-decoration: none;\r\n  color:#EF7C00;\r\n}\r\n\r\na:hover{\r\n  color:#003D7C ;\r\n}\r\n\r\n#container{\r\n  width: 80%;\r\n  margin: 0 auto;\r\n  overflow: auto;\r\n  clear: both;\r\n}\r\n.sameSize {\r\n  border-radius: 5px;\r\n  background: #C4DFE6;\r\n  overflow: auto;\r\n  padding: 10px 20px;\r\n  margin-top: 10px;\r\n  width: 70%;\r\n  margin-left: 40px;\r\n}\r\n.buttonSizes {\r\n\r\n  float: right;\r\n\r\n\r\n\r\n}\r\n#content{\r\n  width: 70%;\r\n  float: left;\r\n  overflow: auto;\r\n}\r\n\r\n#content article{\r\n  border-radius: 5px;\r\n  background: #ffffff;\r\n  overflow: auto;\r\n  padding: 10px 20px;\r\n  margin-top: 10px;\r\n  border:2px solid #66A5AD;\r\n}\r\n#content article.comments{\r\n  border-radius: 5px;\r\n  background: #ffffff;\r\n  overflow: auto;\r\n  padding: 0px 20px;\r\n  margin-top: 0px;\r\n  border:0px #003D7C solid;\r\n}\r\n#content button.readmore{\r\n  display: block;\r\n  float: right;\r\n  color:white;\r\n  padding: 5px 9px;\r\n  background: #2e6da4;\r\n  border-radius: 5px;\r\n}\r\n\r\n#content button.editButton{\r\n  display: block;\r\n  float: right;\r\n  color:white;\r\n  padding: 5px 9px;\r\n  background: #2e6da4;\r\n  border-radius: 5px;\r\n}\r\n\r\n#content button.deleteButton{\r\n  display: block;\r\n  float: right;\r\n  color:white;\r\n  padding: 5px 9px;\r\n  background: #2e6da4;\r\n  border-radius: 5px;\r\n}\r\n\r\n#content button.readmore:hover {\r\n  background: black;\r\n}\r\n\r\n#content article:hover {\r\n  /*border:1px black solid;*/\r\n}\r\n\r\n#content article.comments:hover {\r\n  border: 0;\r\n}\r\n\r\n\r\n\r\n#content article span{\r\n  /*font-style: italic;*/\r\n  color: black;\r\n}\r\n\r\n#content .badge {\r\n  display: inline-block;\r\n  min-width: 10px;\r\n  padding: 3px 7px;\r\n  font-size: 12px;\r\n  font-weight: 700;\r\n  line-height: 1;\r\n  text-align: center;\r\n  white-space: nowrap;\r\n  vertical-align: middle;\r\n  background-color: white;\r\n  border-radius: 10px;\r\n}\r\n#content button.newComment{\r\n  display: block;\r\n  float: right;\r\n  color:white;\r\n  margin-left: 5px;\r\n  padding: 5px 9px;\r\n  background: #EF7C00;\r\n  border-radius: 5px;\r\n}\r\n\r\n#content button.newComment:hover {\r\n  background: black;\r\n}\r\n\r\n#content hr.commentLine {\r\n  border: 1px solid #66A5AD;\r\n}\r\n\r\n:host/deep/ p,\r\n:host/deep/ ol,\r\n:host/deep/ ul,\r\n:host/deep/ pre,\r\n:host/deep/ blockquote,\r\n:host/deep/ h1,\r\n:host/deep/ h2,\r\n:host/deep/ h3,\r\n:host/deep/ h4,\r\n:host/deep/ h5,\r\n:host/deep/ h6 {\r\n  margin: 0;\r\n  padding: 0;\r\n  counter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;\r\n}\r\n:host/deep/ ol,\r\n:host/deep/ ul {\r\n  padding-left: 1.5em;\r\n}\r\n:host/deep/ ol > li,\r\n:host/deep/ ul > li {\r\n  list-style-type: none;\r\n}\r\n:host/deep/ ul > li::before {\r\n  content: '\\2022';\r\n}\r\n:host/deep/ ul[data-checked=true],\r\n:host/deep/ ul[data-checked=false] {\r\n  pointer-events: none;\r\n}\r\n:host/deep/ ul[data-checked=true] > li *,\r\n:host/deep/ ul[data-checked=false] > li * {\r\n  pointer-events: all;\r\n}\r\n:host/deep/ ul[data-checked=true] > li::before,\r\n:host/deep/ ul[data-checked=false] > li::before {\r\n  color: #777;\r\n  cursor: pointer;\r\n  pointer-events: all;\r\n}\r\n:host/deep/ ul[data-checked=true] > li::before {\r\n  content: '\\2611';\r\n}\r\n:host/deep/ ul[data-checked=false] > li::before {\r\n  content: '\\2610';\r\n}\r\n:host/deep/ li::before {\r\n  display: inline-block;\r\n  white-space: nowrap;\r\n  width: 1.2em;\r\n  text-align: right;\r\n  margin-right: 0.3em;\r\n  margin-left: -1.5em;\r\n}\r\n:host/deep/ li.ql-direction-rtl::before {\r\n  text-align: left;\r\n  margin-left: 0.3em;\r\n}\r\n:host/deep/ ol li,\r\n:host/deep/ ul li {\r\n  padding-left: 1.5em;\r\n}\r\n:host/deep/ ol li {\r\n  counter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;\r\n  counter-increment: list-num;\r\n}\r\n:host/deep/ ol li:before {\r\n  content: counter(list-num, decimal) '. ';\r\n}\r\n:host/deep/ ol li.ql-indent-1 {\r\n  counter-increment: list-1;\r\n}\r\n:host/deep/ ol li.ql-indent-1:before {\r\n  content: counter(list-1, lower-alpha) '. ';\r\n}\r\n:host/deep/ ol li.ql-indent-1 {\r\n  counter-reset: list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;\r\n}\r\n:host/deep/ ol li.ql-indent-2 {\r\n  counter-increment: list-2;\r\n}\r\n:host/deep/ ol li.ql-indent-2:before {\r\n  content: counter(list-2, lower-roman) '. ';\r\n}\r\n:host/deep/ ol li.ql-indent-2 {\r\n  counter-reset: list-3 list-4 list-5 list-6 list-7 list-8 list-9;\r\n}\r\n:host/deep/ ol li.ql-indent-3 {\r\n  counter-increment: list-3;\r\n}\r\n:host/deep/ ol li.ql-indent-3:before {\r\n  content: counter(list-3, decimal) '. ';\r\n}\r\n:host/deep/ ol li.ql-indent-3 {\r\n  counter-reset: list-4 list-5 list-6 list-7 list-8 list-9;\r\n}\r\n:host/deep/ ol li.ql-indent-4 {\r\n  counter-increment: list-4;\r\n}\r\n:host/deep/ ol li.ql-indent-4:before {\r\n  content: counter(list-4, lower-alpha) '. ';\r\n}\r\n:host/deep/ ol li.ql-indent-4 {\r\n  counter-reset: list-5 list-6 list-7 list-8 list-9;\r\n}\r\n:host/deep/ ol li.ql-indent-5 {\r\n  counter-increment: list-5;\r\n}\r\n:host/deep/ ol li.ql-indent-5:before {\r\n  content: counter(list-5, lower-roman) '. ';\r\n}\r\n:host/deep/ ol li.ql-indent-5 {\r\n  counter-reset: list-6 list-7 list-8 list-9;\r\n}\r\n:host/deep/ ol li.ql-indent-6 {\r\n  counter-increment: list-6;\r\n}\r\n:host/deep/ ol li.ql-indent-6:before {\r\n  content: counter(list-6, decimal) '. ';\r\n}\r\n:host/deep/ ol li.ql-indent-6 {\r\n  counter-reset: list-7 list-8 list-9;\r\n}\r\n:host/deep/ ol li.ql-indent-7 {\r\n  counter-increment: list-7;\r\n}\r\n:host/deep/ ol li.ql-indent-7:before {\r\n  content: counter(list-7, lower-alpha) '. ';\r\n}\r\n:host/deep/ ol li.ql-indent-7 {\r\n  counter-reset: list-8 list-9;\r\n}\r\n:host/deep/ ol li.ql-indent-8 {\r\n  counter-increment: list-8;\r\n}\r\n:host/deep/ ol li.ql-indent-8:before {\r\n  content: counter(list-8, lower-roman) '. ';\r\n}\r\n:host/deep/ ol li.ql-indent-8 {\r\n  counter-reset: list-9;\r\n}\r\n:host/deep/ ol li.ql-indent-9 {\r\n  counter-increment: list-9;\r\n}\r\n:host/deep/ ol li.ql-indent-9:before {\r\n  content: counter(list-9, decimal) '. ';\r\n}\r\n:host/deep/ .ql-indent-1:not(.ql-direction-rtl) {\r\n  padding-left: 3em;\r\n}\r\n:host/deep/ li.ql-indent-1:not(.ql-direction-rtl) {\r\n  padding-left: 4.5em;\r\n}\r\n:host/deep/ .ql-indent-1.ql-direction-rtl.ql-align-right {\r\n  padding-right: 3em;\r\n}\r\n:host/deep/ li.ql-indent-1.ql-direction-rtl.ql-align-right {\r\n  padding-right: 4.5em;\r\n}\r\n:host/deep/ .ql-indent-2:not(.ql-direction-rtl) {\r\n  padding-left: 6em;\r\n}\r\n:host/deep/ li.ql-indent-2:not(.ql-direction-rtl) {\r\n  padding-left: 7.5em;\r\n}\r\n:host/deep/ .ql-indent-2.ql-direction-rtl.ql-align-right {\r\n  padding-right: 6em;\r\n}\r\n:host/deep/ li.ql-indent-2.ql-direction-rtl.ql-align-right {\r\n  padding-right: 7.5em;\r\n}\r\n:host/deep/ .ql-indent-3:not(.ql-direction-rtl) {\r\n  padding-left: 9em;\r\n}\r\n:host/deep/ li.ql-indent-3:not(.ql-direction-rtl) {\r\n  padding-left: 10.5em;\r\n}\r\n:host/deep/ .ql-indent-3.ql-direction-rtl.ql-align-right {\r\n  padding-right: 9em;\r\n}\r\n:host/deep/ li.ql-indent-3.ql-direction-rtl.ql-align-right {\r\n  padding-right: 10.5em;\r\n}\r\n:host/deep/ .ql-indent-4:not(.ql-direction-rtl) {\r\n  padding-left: 12em;\r\n}\r\n:host/deep/ li.ql-indent-4:not(.ql-direction-rtl) {\r\n  padding-left: 13.5em;\r\n}\r\n:host/deep/ .ql-indent-4.ql-direction-rtl.ql-align-right {\r\n  padding-right: 12em;\r\n}\r\n:host/deep/ li.ql-indent-4.ql-direction-rtl.ql-align-right {\r\n  padding-right: 13.5em;\r\n}\r\n:host/deep/ .ql-indent-5:not(.ql-direction-rtl) {\r\n  padding-left: 15em;\r\n}\r\n:host/deep/ li.ql-indent-5:not(.ql-direction-rtl) {\r\n  padding-left: 16.5em;\r\n}\r\n:host/deep/ .ql-indent-5.ql-direction-rtl.ql-align-right {\r\n  padding-right: 15em;\r\n}\r\n:host/deep/ li.ql-indent-5.ql-direction-rtl.ql-align-right {\r\n  padding-right: 16.5em;\r\n}\r\n:host/deep/ .ql-indent-6:not(.ql-direction-rtl) {\r\n  padding-left: 18em;\r\n}\r\n:host/deep/ li.ql-indent-6:not(.ql-direction-rtl) {\r\n  padding-left: 19.5em;\r\n}\r\n:host/deep/ .ql-indent-6.ql-direction-rtl.ql-align-right {\r\n  padding-right: 18em;\r\n}\r\n:host/deep/ li.ql-indent-6.ql-direction-rtl.ql-align-right {\r\n  padding-right: 19.5em;\r\n}\r\n:host/deep/ .ql-indent-7:not(.ql-direction-rtl) {\r\n  padding-left: 21em;\r\n}\r\n:host/deep/ li.ql-indent-7:not(.ql-direction-rtl) {\r\n  padding-left: 22.5em;\r\n}\r\n:host/deep/ .ql-indent-7.ql-direction-rtl.ql-align-right {\r\n  padding-right: 21em;\r\n}\r\n:host/deep/ li.ql-indent-7.ql-direction-rtl.ql-align-right {\r\n  padding-right: 22.5em;\r\n}\r\n:host/deep/ .ql-indent-8:not(.ql-direction-rtl) {\r\n  padding-left: 24em;\r\n}\r\n:host/deep/ li.ql-indent-8:not(.ql-direction-rtl) {\r\n  padding-left: 25.5em;\r\n}\r\n:host/deep/ .ql-indent-8.ql-direction-rtl.ql-align-right {\r\n  padding-right: 24em;\r\n}\r\n:host/deep/ li.ql-indent-8.ql-direction-rtl.ql-align-right {\r\n  padding-right: 25.5em;\r\n}\r\n:host/deep/ .ql-indent-9:not(.ql-direction-rtl) {\r\n  padding-left: 27em;\r\n}\r\n:host/deep/ li.ql-indent-9:not(.ql-direction-rtl) {\r\n  padding-left: 28.5em;\r\n}\r\n:host/deep/ .ql-indent-9.ql-direction-rtl.ql-align-right {\r\n  padding-right: 27em;\r\n}\r\n:host/deep/ li.ql-indent-9.ql-direction-rtl.ql-align-right {\r\n  padding-right: 28.5em;\r\n}\r\n:host/deep/ .ql-video {\r\n  display: block;\r\n  max-width: 100%;\r\n}\r\n:host/deep/ .ql-video.ql-align-center {\r\n  margin: 0 auto;\r\n}\r\n:host/deep/ .ql-video.ql-align-right {\r\n  margin: 0 0 0 auto;\r\n}\r\n:host/deep/ .ql-bg-black {\r\n  background-color: #000;\r\n}\r\n:host/deep/ .ql-bg-red {\r\n  background-color: #e60000;\r\n}\r\n:host/deep/ .ql-bg-orange {\r\n  background-color: #f90;\r\n}\r\n:host/deep/ .ql-bg-yellow {\r\n  background-color: #ff0;\r\n}\r\n:host/deep/ .ql-bg-green {\r\n  background-color: #008a00;\r\n}\r\n:host/deep/ .ql-bg-blue {\r\n  background-color: #06c;\r\n}\r\n:host/deep/ .ql-bg-purple {\r\n  background-color: #93f;\r\n}\r\n:host/deep/ .ql-color-white {\r\n  color: #fff;\r\n}\r\n:host/deep/ .ql-color-red {\r\n  color: #e60000;\r\n}\r\n:host/deep/ .ql-color-orange {\r\n  color: #f90;\r\n}\r\n:host/deep/ .ql-color-yellow {\r\n  color: #ff0;\r\n}\r\n:host/deep/ .ql-color-green {\r\n  color: #008a00;\r\n}\r\n:host/deep/ .ql-color-blue {\r\n  color: #06c;\r\n}\r\n:host/deep/ .ql-color-purple {\r\n  color: #93f;\r\n}\r\n:host/deep/ .ql-font-serif {\r\n  font-family: Georgia, Times New Roman, serif;\r\n}\r\n:host/deep/ .ql-font-monospace {\r\n  font-family: Monaco, Courier New, monospace;\r\n}\r\n:host/deep/ .ql-size-small {\r\n  font-size: 0.75em;\r\n}\r\n:host/deep/ .ql-size-large {\r\n  font-size: 1.5em;\r\n}\r\n:host/deep/ .ql-size-huge {\r\n  font-size: 2.5em;\r\n}\r\n:host/deep/ .ql-direction-rtl {\r\n  direction: rtl;\r\n  text-align: inherit;\r\n}\r\n:host/deep/ .ql-align-center {\r\n  text-align: center;\r\n}\r\n:host/deep/ .ql-align-justify {\r\n  text-align: justify;\r\n}\r\n:host/deep/ .ql-align-right {\r\n  text-align: right;\r\n}\r\n:host/deep/.ql-blank::before {\r\n  color: rgba(0,0,0,0.6);\r\n  content: attr(data-placeholder);\r\n  font-style: italic;\r\n  pointer-events: none;\r\n  position: absolute;\r\n}\r\n:host/deep/img {\r\n  max-width: 100px;\r\n  max-height: 100px;\r\n}\r\n:host/deep/img:hover {\r\n  max-width: 100%;\r\n  max-height: 100%;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 286:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "/*https://bootsnipp.com/snippets/featured/user-profile-sidebar*/\r\n.profile-userpic img {\r\n  float: none;\r\n  margin: 0 auto;\r\n  width: 50%;\r\n  height: 50%;\r\n  border-radius: 50% !important;\r\n}\r\n\r\n.profile-usertitle {\r\n  text-align: center;\r\n  margin-top: 20px;\r\n}\r\n\r\n.profile-usertitle-name {\r\n  /*color: #5a7391;*/\r\n  color: white;\r\n  font-size: 16px;\r\n  font-weight: 600;\r\n  margin-bottom: 7px;\r\n}\r\n\r\n.profile-usertitle-job {\r\n  text-transform: uppercase;\r\n  /*color: #5b9bd1;*/\r\n  color: #C4DFE6;\r\n  font-size: 12px;\r\n  font-weight: 600;\r\n  margin-bottom: 15px;\r\n}\r\n/*end of profile styling*/\r\n\r\n/*EXPERIMENT STYLING*/\r\n.navbar {\r\n  background-image: none;\r\n  background-color: #003B46;\r\n}\r\n\r\n.dropdown {\r\n  font-size: 14px;\r\n  font-weight: 600;\r\n\r\n}\r\n\r\n\r\n/*END OF EXPERIMENT STYLING*/\r\n\r\n\r\nbody,html{\r\n  height: 100%;\r\n}\r\n\r\n.setHeight{\r\n  height: 100%;\r\n}\r\n.profilePic{\r\n  max-height:150px;\r\n  margin-left: 21px;\r\n}\r\nnav.sidebar, .main{\r\n  transition: margin 200ms ease-out;\r\n}\r\n\r\n.main{\r\n  padding: 10px 10px 0 10px;\r\n}\r\n\r\n@media (min-width: 765px) {\r\n\r\n  .main{\r\n    position: absolute;\r\n    width: calc(100% - 40px);\r\n    margin-left: 40px;\r\n    float: right;\r\n  }\r\n\r\n  nav.sidebar:hover + .main{\r\n    margin-left: 200px;\r\n  }\r\n\r\n  nav.sidebar.navbar.sidebar>.container .navbar-brand, .navbar>.container-fluid .navbar-brand {\r\n    margin-left: 10px;\r\n  }\r\n\r\n  nav.sidebar .navbar-brand, nav.sidebar .navbar-header{\r\n    text-align: center;\r\n    width: 100%;\r\n    margin-left: 0px;\r\n  }\r\n\r\n  nav.sidebar a{\r\n    padding-right: 13px;\r\n  }\r\n\r\n  nav.sidebar .navbar-nav > li:first-child{\r\n    /*border-top: 1px #e5e5e5 solid;*/\r\n  }\r\n\r\n  nav.sidebar .navbar-nav > li{\r\n    border-bottom: 1px #e5e5e5 solid;\r\n  }\r\n\r\n  nav.sidebar .navbar-nav .open .dropdown-menu {\r\n    position: static;\r\n    float: none;\r\n    width: auto;\r\n    margin-top: 0;\r\n    background-color: transparent;\r\n    border: 0;\r\n    box-shadow: none;\r\n  }\r\n\r\n  /*padding for entire sidebar within container*/\r\n  nav.sidebar .navbar-collapse, nav.sidebar .container-fluid{\r\n    padding: 15px 0px 0px 0px;\r\n  }\r\n  /*padding for entire sidebar within container*/\r\n\r\n  /*module drop down*/\r\n  .navbar-inverse .navbar-nav .open .dropdown-menu>li>a {\r\n    color: white;\r\n    /*font-size: 12px;*/\r\n    /*font-weight: 600;*/\r\n  }\r\n  /*end of module dropdown*/\r\n\r\n  nav.sidebar{\r\n    width: 200px;\r\n    height: 100%;\r\n    margin-left: -160px;\r\n    float: left;\r\n    margin-bottom: 0px;\r\n  }\r\n\r\n  nav.sidebar li {\r\n    width: 100%;\r\n  }\r\n\r\n  nav.sidebar:hover{\r\n    margin-left: 0px;\r\n  }\r\n\r\n  .forAnimate{\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n@media (min-width: 1330px) {\r\n\r\n  .main{\r\n    width: calc(100% - 200px);\r\n    margin-left: 200px;\r\n  }\r\n\r\n  nav.sidebar{\r\n    margin-left: 0px;\r\n    float: left;\r\n  }\r\n\r\n  nav.sidebar .forAnimate{\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n /*hover style*/\r\nnav.sidebar .navbar-nav .open .dropdown-menu>li>a:hover, nav.sidebar .navbar-nav .open .dropdown-menu>li>a:focus {\r\n  color: #CCC;\r\n  /*color: black;*/\r\n  /*color: #66A5AD;*/\r\n  background-color: #66A5AD;\r\n  /*background-color: #003B46;*/\r\n  /*padding-top: 0;*/\r\n  /*padding-left:0;*/\r\n  /*margin-top:0;*/\r\n  /*margin-bottom:0;*/\r\n\r\n}\r\n/*hover style*/\r\n\r\nnav:hover .forAnimate{\r\n  opacity: 1;\r\n}\r\nsection{\r\n  padding-left: 15px;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 287:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "li.logout a{\r\n  background: #ca2129 ;\r\n  margin-bottom: -10px !important ;\r\n  color: #ffffff !important;\r\n  padding-right: 22px;\r\n  padding-left: 22px;\r\n}\r\n\r\n\r\n.logo{\r\n  max-height: 5px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 288:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, ".jumbotron {\r\n  padding-top: 30px;\r\n  padding-bottom: 30px;\r\n  margin-bottom: 30px;\r\n  color: inherit;\r\n  background-color: #ef9e0d;\r\n}\r\n.modList {\r\n  list-style: none;\r\n\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 289:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "errorMessage{\r\n  color:red;\r\n}\r\n\r\n.container {\r\n  min-height: 100%;\r\n  background-color: #3c8dbc;\r\n  margin: auto 10px;\r\n  width: auto;\r\n  height: 2000px;\r\n}\r\n\r\n.coloring_class {\r\n  background-color: #C4DFE6;\r\n  min-height: 100%;\r\n}\r\n/*body {*/\r\n  /*min-height: 100%;*/\r\n  /*background-color: #3c8dbc;*/\r\n/*}*/\r\n\r\nhtml, body {\r\n  height:100%;\r\n  margin: 0;\r\n  padding: 0;\r\n  background-color: #3c8dbc;\r\n}\r\n/*#doc3 {*/\r\n  /*margin: auto 10px;*/\r\n  /*width: 100%;*/\r\n  /*height: 1000px;*/\r\n  /*background-color: #3c8dbc;*/\r\n/*}*/\r\n.fullheight.jumbotron {\r\n  position: relative;\r\n  background-size: cover;\r\n  min-height:100vh;\r\n  background-color: #C4DFE6;\r\n  padding-bottom: 0;\r\n  margin-bottom: 0;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 290:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, ".btn-primary {\r\n  color: #fff;\r\n  background-color: #ef9534;\r\n  border-color: #EF7C00;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 299:
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
 // this is Angular's http service




var HttpService = (function () {
    function HttpService(http, router) {
        this.http = http;
        this.router = router;
        this.herokusDomain = '';
        this.localDomain = 'http://localhost:3000/';
    }
    HttpService.prototype.signUp = function (newUser) {
        var userCopy = newUser;
        console.log('Signup attempted');
        var body = JSON.stringify(userCopy);
        var header = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/json' });
        return this.http.post(this.herokusDomain + 'user/signUp', body, { headers: header })
            .map(function (response) { return response.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw(error.json()); });
    };
    HttpService.prototype.signIn = function (loginCred) {
        var userCopy = loginCred;
        console.log('Signin attempted');
        var body = JSON.stringify(userCopy);
        var header = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/json' });
        return this.http.post(this.herokusDomain + 'user/signIn', body, { headers: header })
            .map(function (response) { return response.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw(error.json()); });
    };
    HttpService.prototype.signOut = function () {
        localStorage.clear();
    };
    HttpService.prototype.populate = function (lapiUri) {
        var token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
        var body = JSON.stringify(lapiUri);
        // const body = lapiUri;
        var header = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/json' });
        return this.http.post(this.herokusDomain + 'user/populate' + token, body, { headers: header })
            .map(function (response) { return response.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw(error.json()); });
    };
    HttpService.prototype.sendNewPost = function (post) {
        var token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
        var body = JSON.stringify(post);
        var header = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/json' });
        return this.http.post(this.herokusDomain + 'posts/newPost' + token, body, { headers: header })
            .map(function (response) { return response.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw(error.json()); });
    };
    HttpService.prototype.sendNewComment = function (comment) {
        var token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
        var body = JSON.stringify(comment);
        var header = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/json' });
        return this.http.post(this.herokusDomain + 'posts/newComment' + token, body, { headers: header })
            .map(function (response) { return response.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw(error.json()); });
    };
    HttpService.prototype.editPost = function (post) {
        var token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
        var body = JSON.stringify(post);
        var header = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/json' });
        return this.http.post(this.herokusDomain + 'posts/editPost' + token, body, { headers: header })
            .map(function (response) { return response.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw(error.json()); });
    };
    HttpService.prototype.deletePost = function (post) {
        var token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
        var body = JSON.stringify(post);
        var header = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/json' });
        return this.http.post(this.herokusDomain + 'posts/deletePost' + token, body, { headers: header })
            .map(function (response) { return response.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw(error.json()); });
    };
    return HttpService;
}());
HttpService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _b || Object])
], HttpService);

var _a, _b;
//# sourceMappingURL=http.service.js.map

/***/ }),

/***/ 300:
/***/ (function(module, exports) {

module.exports = "<p>\r\n  connect-discover works!\r\n</p>\r\n"

/***/ }),

/***/ 301:
/***/ (function(module, exports) {

module.exports = "<p>\r\n  connect-friends works!\r\n</p>\r\n"

/***/ }),

/***/ 302:
/***/ (function(module, exports) {

module.exports = "<p>\r\n  connect-request works!\r\n</p>\r\n"

/***/ }),

/***/ 303:
/***/ (function(module, exports) {

module.exports = "<p>\r\n  course-connect works!\r\n</p>\r\n"

/***/ }),

/***/ 304:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-xs-12\">\r\n    <p>Work in Progress!</p>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 305:
/***/ (function(module, exports) {

module.exports = "<p>\r\n  progress-chart works!\r\n</p>\r\n"

/***/ }),

/***/ 306:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-xs-3\" style=\"position: fixed; height:100%\">\r\n    <app-sidebar style=\"z-index: 9999\"></app-sidebar>\r\n  </div>\r\n  <div class=\"col-xs-9 full\" style=\"margin-left:13%;\">\r\n    <router-outlet></router-outlet>\r\n    <!--<app-general></app-general>-->\r\n    <!--<app-wall></app-wall>-->\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 307:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-xs-12 modHeader\">\r\n    <h1>{{currentModStr}} / Chatroom</h1>\r\n  </div>\r\n</div>\r\n<hr>\r\n<br>\r\n<br>\r\n<!--<br>-->\r\n<br>\r\n<br>\r\n\r\n\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-xs-12  chat-container\">\r\n    <!--participant bar-->\r\n    <div class=\"col-xs-2 participant-bar rounded\">\r\n      <h4 class=\"display-3\">Participants\r\n        <span class=\"badge\" >{{currMembers.length}}</span></h4>\r\n      <hr>\r\n      <ul>\r\n        <li *ngFor=\"let member of currMembers\" [innerHtml]=\"member\"></li>\r\n      </ul>\r\n    </div>\r\n    <!--CHAT AREA-->\r\n    <div class=\"col-xs-10 chat-area\">\r\n      <div class=\"row input-field\">\r\n        <div class=\"input-group\">\r\n          <!--<span class=\"input-group-addon\" id=\"basic-addon1\">{{this.currUser.firstName}}</span>-->\r\n          <input type=\"submit text\"\r\n                 class=\"form-control\"\r\n                 (keyup.enter)=\"enterClicked()\"\r\n                 placeholder=\"Type your message here!\"\r\n                 aria-describedby=\"basic-addon2\"\r\n                 [(ngModel)]=\"typedMessage\">\r\n          <span class=\"input-group-btn\">\r\n            <button class=\"btn btn-secondary\" type=\"button\" (click)=\"sendNewMessage()\">\r\n              <span class=\"glyphicon glyphicon-send\"></span>\r\n            </button>\r\n          </span>\r\n        </div>\r\n      </div>\r\n      <div class=\"row chat-display\">\r\n        <ul class=\"list-group\">\r\n          <li class=\"list-group-item\"\r\n              [ngClass]=\"{'alt-msg-display':i%2===0}\"\r\n              *ngFor=\"let msg of messages; let i = index\"\r\n              [innerHtml]=\"msg\">\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 308:
/***/ (function(module, exports) {

module.exports = "<div class=\"content\"><div><div class=\"row module-page\">\r\n  <div class=\"col-md-8\">\r\n    <h1 class=\"module-code\">{{currentMod['ModuleCode']}}</h1>\r\n    <h2 class=\"module-title\">{{currentMod['ModuleTitle']}}</h2>\r\n    <hr>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"module-main-content\" id=\"details\">\r\n          <div class=\"panel panel-default\">\r\n            <div class=\"panel-heading\">\r\n              <h2 class=\"panel-title nm-section-title\">Module Details</h2>\r\n            </div>\r\n            <div class=\"panel-body\">\r\n              <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                  <dl>\r\n                    <dt class=\"highlight\">Description</dt>\r\n                    <dd class=\"module-desc\">\r\n                      {{currentMod['ModuleDescription']}}\r\n                    </dd>\r\n                    <hr>\r\n                    <dt *ngIf=\"currentMod['History'].length>0\" class=\"highlight\">Semesters Offered</dt>\r\n                    <dd>\r\n                      <span *ngIf=\"semesters.indexOf(4)>-1\" class=\"label label-default\">Special Term II</span>\r\n                      <span *ngIf=\"semesters.indexOf(3)>-1\" class=\"label label-default\">Special Term I</span>\r\n                      <span *ngIf=\"semesters.indexOf(2)>-1\" class=\"label label-default\">Semester 2</span>\r\n                      <span *ngIf=\"semesters.indexOf(1)>-1\" class=\"label label-default\">Semester 1</span>\r\n                    </dd>\r\n                    <hr>\r\n                    <dt class=\"highlight\">Modular Credits (MCs)</dt>\r\n                    <dd>{{currentMod['ModuleCredit']}}</dd>\r\n                    <hr>\r\n                    <dt class=\"highlight\">Preclusion(s)</dt>\r\n                    <dd>{{currentMod[\"Preclusion\"]}}</dd>\r\n                    <hr>\r\n                    <dt class=\"highlight\">Department</dt>\r\n                    <dd>{{currentMod['Department']}}</dd>\r\n                    <hr>\r\n                    <dt class=\"highlight\">Weekly Workload</dt>\r\n                    <dl class=\"workload-components\">\r\n                      <dd>Lecture: {{workloads[0]}} hrs</dd>\r\n                      <dd>Tutorial:  {{workloads[1]}} hrs</dd>\r\n                      <dd>Lab:  {{workloads[2]}} hrs</dd>\r\n                      <dd>Project:  {{workloads[3]}} hrs</dd>\r\n                      <dd>Preparation:  {{workloads[4]}} hrs</dd>\r\n                    </dl>\r\n                    <hr>\r\n                    <dt *ngIf=\"semesters.indexOf(4)>-1\" class=\"highlight\">Special Term II Exam Date</dt>\r\n                    <dd *ngIf=\"semesters.indexOf(4)>-1 && examDates[3] != 'No Exam'\">\r\n                      {{examDates[3] | date: 'medium'}}\r\n                    </dd>\r\n                    <dd *ngIf=\"semesters.indexOf(4)>-1 && examDates[3] == 'No Exam'\">\r\n                      {{examDates[3]}}\r\n                    </dd>\r\n                    <hr  *ngIf=\"semesters.indexOf(4)>-1\">\r\n                    <dt *ngIf=\"semesters.indexOf(3)>-1\" class=\"highlight\">Special Term I Exam Date</dt>\r\n                    <dd *ngIf=\"semesters.indexOf(3)>-1 && examDates[2] != 'No Exam'\">\r\n                      {{examDates[2] | date: 'medium'}}\r\n                    </dd>\r\n                    <dd *ngIf=\"semesters.indexOf(3)>-1 && examDates[2] == 'No Exam'\">\r\n                      {{examDates[2]}}\r\n                    </dd>\r\n                    <hr *ngIf=\"semesters.indexOf(3)>-1\">\r\n                    <dt *ngIf=\"semesters.indexOf(2)>-1\" class=\"highlight\">Semester 2 Exam Date</dt>\r\n                    <dd *ngIf=\"semesters.indexOf(2)>-1 && examDates[1] != 'No Exam'\">\r\n                      {{examDates[1] | date: 'medium'}}\r\n                    </dd>\r\n                    <dd *ngIf=\"semesters.indexOf(2)>-1 && examDates[1] == 'No Exam'\">\r\n                      {{examDates[1]}}\r\n                    </dd>\r\n                    <hr *ngIf=\"semesters.indexOf(2)>-1\">\r\n                    <dt *ngIf=\"semesters.indexOf(1)>-1\" class=\"highlight\">Semester 1 Exam Date</dt>\r\n                    <dd *ngIf=\"semesters.indexOf(1)>-1 && examDates[0] != 'No Exam'\">\r\n                      {{examDates[0] | date: 'medium'}}\r\n                    </dd>\r\n                    <dd *ngIf=\"semesters.indexOf(1)>-1 && examDates[0] == 'No Exam'\">\r\n                      {{examDates[0]}}\r\n                    </dd>\r\n                    <hr *ngIf=\"semesters.indexOf(1)>-1\">\r\n                  </dl>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                  <div class=\"btn-group btn-group-justified\">\r\n                    <div class=\"btn-group\">\r\n                      <a class=\"cors btn btn-default\" href=\"{{CORS_web}}\" target=\"_blank\">\r\n                        <i class=\"fa fa-check fa-fw\"></i>\r\n                        &nbsp;CORS Link\r\n                      </a>\r\n                    </div>\r\n                    <div class=\"btn-group\">\r\n                      <a class=\"ivle btn btn-default\"  href=\"{{IVLE_web}}\" target=\"_blank\">\r\n                        <i class=\"fa fa-graduation-cap\"></i>\r\n                        &nbsp;IVLE Link\r\n                      </a>\r\n                    </div>\r\n                    <div class=\"btn-group\">\r\n                      <a class=\"nusmods btn btn-default\"   href=\"{{NUSMODS_web}}\" target=\"_blank\">\r\n                        <i class=\"fa fa-graduation-cap\"></i>\r\n                        &nbsp;NUSMODS Link\r\n                      </a>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <hr>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n</div>\r\n</div>\r\n"

/***/ }),

/***/ 309:
/***/ (function(module, exports) {

module.exports = "<p>\r\n  module-mates works!\r\n</p>\r\n"

/***/ }),

/***/ 310:
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ 311:
/***/ (function(module, exports) {

module.exports = "<body>\r\n<div class=\"row\">\r\n  <div class=\"col-xs-12 modHeader\">\r\n    <h1>{{currentModStr}} / Wall</h1>\r\n  </div>\r\n</div>\r\n<hr>\r\n\r\n\r\n<div class=\"row\">\r\n  <!--new post editor/title-->\r\n  <div class=\"col col-lg-offset-1\" *ngIf=\"!newPost \">\r\n    <button class=\"btn btn-primary bringDown\" (click)=\"onPressed()\">Add New Post</button>\r\n  </div>\r\n  <div *ngIf=\"newPost\">\r\n    <br>\r\n    <div class=\"row\">\r\n      <!--<div class=\"col-xs-10\">-->\r\n\r\n    </div>\r\n    <br>\r\n    <!--new post editor/content-->\r\n    <div class=\"row\">\r\n      <!--<div class=\"col-xs-10\">-->\r\n      <div class=\"sameSize \">\r\n        <div class=\"col col-lg-offset-1\">\r\n          <input\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            placeholder=\"Title\"\r\n            [(ngModel)] = \"title\">\r\n        </div>\r\n        <div class=\"col col-lg-offset-1 quillColor \">\r\n          <quill-editor [(ngModel)]=\"editorContent\"\r\n                        [options]=\"editorOptions\"></quill-editor>\r\n        </div>\r\n        <br>\r\n        <div class=\"row\">\r\n          <div class=\"col\">\r\n            <!--test-->\r\n            <div class=\"btn-group btnPosition\" role=\"group\" aria-label=\"Basic example\">\r\n              <!--edit button-->\r\n              <button type=\"button\"\r\n                      class=\"btn btn-success\"\r\n                      (click)=\"clicked()\"\r\n                      >\r\n                <span class=\"glyphicon glyphicon-ok\"></span>\r\n                Submit</button>\r\n              <!--delete button-->\r\n              <button type=\"button\"\r\n                      class=\"btn btn-danger\"\r\n                      (click)=\"cancelNewPost()\"\r\n                      >\r\n                <span class=\"glyphicon glyphicon-remove\"></span>\r\n                Cancel</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <hr>\r\n  </div>\r\n\r\n\r\n  <!--main wall-->\r\n  <div  class=\"col col-lg-offset-1 paddingAwayFromModHeader\">\r\n    <!--<div *ngIf=\"!newPost\" class=\"col col-lg-offset-1\">-->\r\n    <div id=\"main\">\r\n      <div id=\"content\">\r\n        <!--<div *ngFor=\"let x of Posts\">-->\r\n        <div *ngFor=\"let x of wallService.wallPosts\">\r\n          <article>\r\n            <header class=\"art-header\">\r\n              <h2 class=\"title\">\r\n                <a href=\"#\">{{x.title}} {{module}}</a>\r\n              </h2>\r\n              <span>Created by: {{x.user.firstName}} {{x.user.lastName}}</span>\r\n            </header>\r\n            <p [innerHTML] = \"x.content | safehtml\"></p>\r\n            <div class=\"row\">\r\n              <div class=\"col\">\r\n                <!--test-->\r\n                <div class=\"btn-group\" role=\"group\" aria-label=\"Basic example\">\r\n                  <!--edit button-->\r\n                  <button type=\"button\"\r\n                          class=\"btn btn-info\"\r\n                          (click)=\"x.showPostEdit()\"\r\n                          *ngIf=\"x.ownerBool\">\r\n                    <span class=\"glyphicon glyphicon-wrench\"></span>\r\n                    edit</button>\r\n                  <!--delete button-->\r\n                  <button type=\"button\"\r\n                          class=\"btn btn-danger\"\r\n                          (click)=\"x.showDelete()\"\r\n                          *ngIf=\"x.ownerBool\">\r\n                    <span class=\"glyphicon glyphicon-trash\"></span>\r\n                    delete</button>\r\n                  <!--new comment button-->\r\n                  <button type=\"button\"\r\n                          class=\"btn btn-success\"\r\n                          (click)=\"x.showNewCommentEditor()\">\r\n                    <span class=\"glyphicon glyphicon-pencil\"></span>\r\n                    New Comment</button>\r\n                  <!--show comment button-->\r\n                  <button type=\"button\"\r\n                          class=\"btn btn-warning\"\r\n                          *ngIf=\"!x.showCommentsBool\"\r\n                          (click)=\"x.showAllComments()\"\r\n                          [disabled] = \"!x.comments.length >0\">\r\n                    <span class=\"glyphicon glyphicon-plus\"></span>\r\n                    Show comments\r\n                    <span class=\"badge\" >{{x.comments.length}}</span></button>\r\n                  <!--close comment button-->\r\n                  <button type=\"button\"\r\n                          class=\"btn btn-warning\"\r\n                          *ngIf=\"x.showCommentsBool\"\r\n                          (click)=\"x.showAllComments()\">\r\n                    <span class=\"glyphicon glyphicon-minus\"></span>\r\n                    Close comments\r\n                    <span class=\"badge\" >{{x.comments.length}}</span></button>\r\n                </div>\r\n              </div>\r\n              <!--delete confirmation-->\r\n              <div *ngIf = \"x.deletePostBool\">\r\n                <br>\r\n                <br>\r\n                <div class=\"alert alert-danger\">\r\n                  <strong>Danger!</strong> Confirmation for deletion(This action is irreversible) --\r\n                  <button class=\"btn btn-danger\"\r\n                          (click)=\"wallService.removeOne(x)\">Confirm\r\n                    <span class=\"glyphicon glyphicon-ok\"></span></button>\r\n                </div>\r\n              </div>\r\n\r\n\r\n\r\n\r\n              <!--post editor-->\r\n              <div *ngIf=\"x.editPostBool\">\r\n                <br>\r\n                <br>\r\n                <hr>\r\n                <div class=\"row\">\r\n                  <div class=\"col-xs-10\">\r\n                    <input\r\n                      type=\"text\"\r\n                      class=\"form-control\"\r\n                      placeholder=\"Title\"\r\n                      [(ngModel)] = \"x.title\">\r\n                  </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                  <div class=\"col-xs-10\">\r\n                    <quill-editor [(ngModel)]=\"x.content\"\r\n                                  [options]=\"editorOptions\"></quill-editor>\r\n                  </div>\r\n                </div>\r\n                <hr>\r\n                <div class=\"row\">\r\n                  <div class=\"col-xs-10\">\r\n                    <div class=\"btn-toolbar\" role=\"toolbar\">\r\n                      <div class=\"btn-group\" role=\"group\">\r\n                        <button type=\"button\" class=\"btn btn-success\" (click)=\"saveEditedPost(x)\">Save</button>\r\n                      </div>\r\n                      <div class=\"btn-group\" role=\"group\">\r\n                        <button type=\"button\" class=\"btn btn-danger\" (click)=\"x.showPostEdit()\">Cancel</button>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n              </div>\r\n              <!--comment section-->\r\n              <div class=\"col\">\r\n                <div *ngIf=\"x.showCommentsBool\">\r\n                  <br>\r\n                  <hr class=\"commentLine\">\r\n                  <div *ngFor=\"let comment of x.comments\">\r\n                    <article class=\"comments\">\r\n                      <header>\r\n                        <span>Comment by: {{comment.user.firstName}} {{comment.user.lastName}}</span>\r\n                      </header>\r\n                      <p [innerHTML] = \"comment.content | safehtml\"></p>\r\n                    </article>\r\n                    <hr>\r\n                  </div>\r\n                </div>\r\n                <!--new comment editor-->\r\n                <div *ngIf=\"x.newComBool\">\r\n                  <quill-editor [(ngModel)]=\"commentContent\"\r\n                                [options]=\"commentOptions\"></quill-editor>\r\n                  <!--<button  class=\"newComment submit\" *ngIf=\"x.newComBool\" (click)=\"newComment(x)\">Submit</button>-->\r\n                  <div class=\"row\">\r\n                    <div class=\"col\">\r\n                      <!--test-->\r\n                      <div class=\"btn-group btnPosition\" role=\"group\" aria-label=\"Basic example\">\r\n                        <!--edit button-->\r\n                        <button type=\"button\"\r\n                                class=\"btn btn-success\"\r\n                                (click)=\"newComment(x)\"\r\n                        >\r\n                          <span class=\"glyphicon glyphicon-ok\"></span>\r\n                          Submit</button>\r\n                        <!--cancel button-->\r\n                        <button type=\"button\"\r\n                                class=\"btn btn-danger\"\r\n                                (click)=\"cancelNewComment(x)\"\r\n                        >\r\n                          <span class=\"glyphicon glyphicon-remove\"></span>\r\n                          Cancel</button>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </article>\r\n          <br>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n</body>\r\n\r\n"

/***/ }),

/***/ 312:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse sidebar setHeight\" >\r\n  <div class=\"container-fluid\" >\r\n    <div class=\"navbar-header\">\r\n      <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#bs-sidebar-navbar-collapse-1\">\r\n        <span class=\"sr-only\">Toggle navigation</span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n      </button>\r\n    </div>\r\n    <div class=\"collapse navbar-collapse\" id=\"bs-sidebar-navbar-collapse-1\">\r\n      <ul class=\"nav navbar-nav\">\r\n        <li>\r\n          <div class=\"row\">\r\n            <div class=\"col-xs-12\">\r\n              <!--<img class=\"profilePic\" src=\"{{ currentUser.imagePath }}\" alt=\"profile pic\">-->\r\n\r\n              <!--sidebar profile-->\r\n              <div class=\"profile-userpic\">\r\n                <img src=\"{{  userService.user.imagePath }}\" class=\"img-responsive\" alt=\"\">\r\n              </div>\r\n              <div class=\"profile-usertitle\">\r\n                <div class=\"profile-usertitle-name\">\r\n                  {{userService.user.firstName + ' ' + userService.user.lastName}}\r\n                </div>\r\n                <div class=\"profile-usertitle-job\">\r\n                  {{userService.user.course}} <br> {{'Year ' + userService.user.yearOfStudy}}\r\n                </div>\r\n              </div>\r\n              <!--sidebar profile-->\r\n            </div>\r\n          </div>\r\n        </li>\r\n\r\n        <!--previous sample-->\r\n        <!--<li class=\"active\">-->\r\n          <!--<a>CEG<span style=\"font-size:16px;\" class=\"pull-right hidden-xs showopacity glyphicon glyphicon-home\">-->\r\n          <!--</span>-->\r\n          <!--</a>-->\r\n        <!--</li>-->\r\n        <!--<li ><a>CEG<span style=\"font-size:16px;\" class=\"pull-right hidden-xs showopacity glyphicon glyphicon-th-list\"></span></a></li>-->\r\n\r\n        <!--course button-->\r\n        <li routerLinkActive=\"active\" class=\"dropdown\" appDropdown >\r\n          <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" routerLink=\"/home/{{userService.user.firstName}}/course\">{{ userService.user.course }}<span class=\"caret\"></span><span style=\"font-size:16px;\" class=\"pull-right hidden-xs showopacity glyphicon glyphicon-user\"></span></a>\r\n          <ul class=\"dropdown-menu forAnimate\" role=\"menu\">\r\n            <li><a>Requests</a></li>\r\n            <li><a>Expand</a></li>\r\n          </ul>\r\n        </li>\r\n\r\n        <li routerLinkActive=\"active\" class=\"dropdown\" appDropdown  *ngFor=\"let module of userService.user.modules\">\r\n          <a routerLink=\"/home/{{userService.user.firstName}}/{{module.moduleName}}/wall\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">{{ module.moduleName }}<span class=\"caret\"></span><span style=\"font-size:16px;\" class=\"pull-right hidden-xs showopacity glyphicon glyphicon-user\"></span></a>\r\n          <ul class=\"dropdown-menu forAnimate\" role=\"menu\">\r\n            <li><a routerLink=\"/home/{{userService.user.firstName}}/{{module.moduleName}}/description\">Description</a></li>\r\n            <li><a routerLink=\"/home/{{userService.user.firstName}}/{{module.moduleName}}/wall\">Wall</a></li>\r\n            <li><a routerLink=\"/home/{{userService.user.firstName}}/{{module.moduleName}}/chat\">Chat Box</a></li>\r\n            <!--<li routerLinkActive=\"active\"><a routerLink=\"/home/:user/:module/mod-mates\">Current Module Mates</a></li>-->\r\n          </ul>\r\n        </li>\r\n      </ul>\r\n      <button class=\"btn btn-danger\" (click)=\"logout()\">Logout</button>\r\n    </div>\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ 313:
/***/ (function(module, exports) {

module.exports = "  <nav class=\"navbar navbar-inverse\">\r\n        <div class=\"container-fluid\">\r\n          <!-- Brand and toggle get grouped for better mobile display -->\r\n          <div class=\"navbar-header\">\r\n            <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\r\n              <span class=\"sr-only\">Toggle navigation</span>\r\n              <span class=\"icon-bar\"></span>\r\n              <span class=\"icon-bar\"></span>\r\n              <span class=\"icon-bar\"></span>\r\n            </button>\r\n            <a class=\"navbar-brand\" >Nus Connect</a>\r\n          </div>\r\n          <ul class=\"nav navbar-nav\">\r\n            <li ><a> <strong><em>Philemon Tan</em></strong></a></li>\r\n            <li ><a> <strong><em>Year 2</em></strong></a></li>\r\n          </ul>\r\n\r\n          <!-- Collect the nav links, forms, and other content for toggling -->\r\n          <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\r\n            <ul class=\"nav navbar-nav navbar-right\">\r\n              <li class=\"logout\"><a >Logout</a></li>\r\n            </ul>\r\n          </div><!-- /.navbar-collapse -->\r\n        </div><!-- /.container-fluid -->\r\n      </nav>\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ 314:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\" centre jumbotron\">\r\n    <h1>Welcome</h1>\r\n    <h2>The Courses you have currently enrolled in: </h2>\r\n    <ul>\r\n      <li *ngFor=\"let mod of ivleRetrievedModules.modules\" class=\"modList\">\r\n        <hr>\r\n        {{mod}}\r\n      </li>\r\n      <li>Please proceed to login</li>\r\n    </ul>\r\n    <button class=\"btn btn-lg btn-success\" (click)=\"continue()\">Continue</button>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 315:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-xs-12 coloring_class\">\r\n    <div  style=\"text-align: center\">\r\n      <h1 class=\"display-3\">NUS Connect</h1>\r\n      <p class=\"lead\">\r\n        This is a platform for NUS Students to Connect and discuss!</p>\r\n      <hr class=\"my-2\">\r\n      <!--<hr>-->\r\n      <p>Please Login to Continue</p>\r\n      <hr>\r\n\r\n\r\n      <div class=\"row lead\">\r\n        <!--login-->\r\n        <div class=\"col-lg-4 col-lg-offset-4\">\r\n          <button class=\"btn btn-success btn-block\" *ngIf=\"!signupMenu\" (click) = loginClicked()>Login <span class=\"caret\"></span></button>\r\n          <br>\r\n          <div *ngIf=\"loginMenu && !signupMenu\">\r\n            <div class=\"col-xs-8\">\r\n              <input\r\n                type=\"text\"\r\n                class=\"form-control\"\r\n                placeholder=\"Username (Email)\"\r\n                [(ngModel)] = \"loginUsername\">\r\n            </div>\r\n            <div >\r\n              <button class=\"btn btn-primary\" (click)=\"signIn()\">Enter.</button>\r\n            </div>\r\n\r\n          </div>\r\n          <div *ngIf=\"loginMenu\">\r\n            <div class=\"col-xs-8\">\r\n              <input\r\n                type=\"password\"\r\n                class=\"form-control\"\r\n                placeholder=\"Password\"\r\n                [(ngModel)] = \"loginPassword\">\r\n              <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"loginFailed\">\r\n                <span class=\"glyphicon glyphicon-exclamation-sign\" aria-hidden=\"true\"></span>\r\n                <span class=\"sr-only\">Error:</span>\r\n                Login Failed. Please check your username and password.\r\n              </div>\r\n            </div>\r\n            <div>\r\n              <button (click)=\"resetFields()\" class=\"btn btn-danger\">Reset</button>\r\n            </div>\r\n            <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"duplicateUserBool\">\r\n              <span class=\"glyphicon glyphicon-exclamation-sign\" aria-hidden=\"true\"></span>\r\n              <span class=\"sr-only\">Error:</span>\r\n              Invalid Login Credentials\r\n            </div>\r\n\r\n          </div>\r\n\r\n          <!--Sign Up-->\r\n          <button class=\"btn btn-primary btn-block\" (click)= signUpClicked() *ngIf=\"!loginMenu\">Sign Up <span class=\"caret\"></span></button>\r\n          <br>\r\n          <div *ngIf=\"signupMenu\">\r\n            <div class=\"col-xs-8\">\r\n              <input\r\n                type=\"text\"\r\n                class=\"form-control\"\r\n                placeholder=\"Email (This will be your username)\"\r\n                [(ngModel)] = \"signUpEmail\">\r\n            </div>\r\n            <div >\r\n              <button class=\"btn btn-primary\" (click)=\"signUp()\">Enter.</button>\r\n            </div>\r\n\r\n          </div>\r\n          <div *ngIf=\"signupMenu\">\r\n            <div class=\"col-xs-8\">\r\n              <input\r\n                type=\"password\"\r\n                class=\"form-control\"\r\n                placeholder=\"Password\"\r\n                [(ngModel)] = \"signUpPassword\">\r\n            </div>\r\n            <div>\r\n              <button (click)=\"resetFields()\" class=\"btn btn-danger\">Reset</button>\r\n            </div>\r\n\r\n            <div *ngIf=\"signupMenu\">\r\n              <div class=\"col-xs-8\">\r\n                <input\r\n                  type=\"text\"\r\n                  class=\"form-control\"\r\n                  placeholder=\"First Name\"\r\n                  [(ngModel)] = \"signUpFirstName\">\r\n                <input\r\n                  type=\"text\"\r\n                  class=\"form-control\"\r\n                  placeholder=\"Last Name\"\r\n                  [(ngModel)] = \"signUpLastName\">\r\n                <input\r\n                  type=\"text\"\r\n                  class=\"form-control\"\r\n                  placeholder=\"Course\"\r\n                  [(ngModel)] = \"signUpCourse\">\r\n                <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"signUpFailed\">\r\n                  <span class=\"glyphicon glyphicon-exclamation-sign\" aria-hidden=\"true\"></span>\r\n                  <span class=\"sr-only\">Error:</span>\r\n                  All input fields are required!\r\n                </div>\r\n                <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"duplicateUserBool\">\r\n                  <span class=\"glyphicon glyphicon-exclamation-sign\" aria-hidden=\"true\"></span>\r\n                  <span class=\"sr-only\">Error:</span>\r\n                  Email is already registered.\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"fullheight jumbotron\" id=\"doc3\">\r\n</div>\r\n"

/***/ }),

/***/ 316:
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\" style=\"text-align: center\">\r\n  <h1 class=\"display-3\">NUS Connect</h1>\r\n  <p class=\"lead\">This is a platform for NUS Students to Connect and discuss!</p>\r\n  <hr class=\"my-2\">\r\n  <p>We would need you to connect to IVLE in order to retrieve your credentials</p>\r\n  <hr>\r\n  <a href=\"https://ivle.nus.edu.sg/api/login/?apikey=Nxm9ocEZtuEeyUn3ed4Ci&url=http://{{herokuDomainStr}}/IVLE\" class=\"btn btn-lg btn-primary NUS \">IVLE</a>\r\n</div>\r\n"

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(29);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DescriptionService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DescriptionService = (function () {
    function DescriptionService(http) {
        this.http = http;
        this.ModsTaken = [];
        this.requiredData = [];
    }
    ;
    DescriptionService.prototype.getData = function () {
        var _this = this;
        this.NUSMODS = this.http.get('http://api.nusmods.com/2017-2018/moduleInformation.json');
        this.NUSMODS.subscribe(function (response) {
            _this.data = JSON.parse(response['_body']);
        }, function (error) { return console.log(error); });
    };
    DescriptionService.prototype.compute = function () {
        for (var i = 0; i < this.data.length; i++) {
            if (this.ModsTaken.indexOf(this.data[i]['ModuleCode']) > -1) {
                this.requiredData.push(this.data[i]);
            }
        }
    };
    DescriptionService.prototype.getModDescription = function (modName) {
        for (var _i = 0, _a = this.requiredData; _i < _a.length; _i++) {
            var i = _a[_i];
            if (i['ModuleCode'] === modName) {
                return i;
            }
        }
    };
    return DescriptionService;
}());
DescriptionService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], DescriptionService);

var _a;
//# sourceMappingURL=Description.service.js.map

/***/ }),

/***/ 593:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 594:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(166);


/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User(firstName, lastName, imagePath, faculty, yearOfStudy, courses, friendList, email, password) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.imagePath = imagePath;
        this.course = faculty;
        this.yearOfStudy = yearOfStudy;
        this.modules = courses;
        this.friendList = friendList;
        this.email = email;
        this.password = password;
    }
    return User;
}());

//# sourceMappingURL=User.model.js.map

/***/ })

},[594]);
//# sourceMappingURL=main.bundle.js.map