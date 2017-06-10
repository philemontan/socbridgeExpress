webpackJsonp([1,4],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_User_model__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_Module_model__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_Course_model__ = __webpack_require__(119);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersService; });



var UsersService = (function () {
    function UsersService() {
        this.byModule = [];
        this.temp = [];
        this.byCourse = [];
        this.Users = [
            new __WEBPACK_IMPORTED_MODULE_0__models_User_model__["a" /* User */]('philemon', 'tan', 'http://imgur.com/u4ZgiJN.png', 'Computer Engineering', 2, ['CS1010', 'CS1020', 'CS1231', 'MA1505', 'MA1506'], []),
            new __WEBPACK_IMPORTED_MODULE_0__models_User_model__["a" /* User */]('siddharth', 'madhavan', 'http://imgur.com/eA8qWn8.png', 'Computer Engineering', 2, ['CS1010', 'CS1020', 'CS1231', 'MA1505', 'MA1506'], [])
        ];
        this.moduleAdded = false;
    }
    UsersService.prototype.verify = function (inputName, inputpw) {
        if (inputName === 'philemon' && inputpw === 'tan') {
            return true;
        }
        else if (inputName === 'siddharth' && inputpw === 'madhavan') {
            return true;
        }
        else {
            return false; // for debugging purposes
            // return false;
        }
    };
    // to get the user object
    UsersService.prototype.getUserByName = function (firstName) {
        for (var _i = 0, _a = this.Users; _i < _a.length; _i++) {
            var i = _a[_i];
            if (i.firstName === firstName) {
                return i;
            }
        }
    };
    UsersService.prototype.getModules = function (user) {
        return;
    };
    UsersService.prototype.getUsers = function () {
        return this.Users;
    };
    UsersService.prototype.addUser = function (user) {
        this.Users.push(user);
        this.temp = [];
        for (var _i = 0, _a = user.modules; _i < _a.length; _i++) {
            var x = _a[_i];
            for (var _b = 0, _c = this.byModule; _b < _c.length; _b++) {
                var i = _c[_b];
                if (x === i.moduleName) {
                    i.users.push(user);
                    this.moduleAdded = true;
                    break;
                }
            }
            if (!this.moduleAdded) {
                this.temp.push(new __WEBPACK_IMPORTED_MODULE_1__models_Module_model__["a" /* Module */](x, [user]));
            }
            this.moduleAdded = false;
        }
        (_d = this.byModule).push.apply(_d, this.temp);
        // for byCourse
        for (var _e = 0, _f = this.byCourse; _e < _f.length; _e++) {
            var x = _f[_e];
            if (user.course === x.name) {
                x.addUser(user);
                this.courseAdded = true;
                break;
            }
        }
        if (!this.courseAdded) {
            this.byCourse.push(new __WEBPACK_IMPORTED_MODULE_2__models_Course_model__["a" /* Course */](user.course, [user]));
        }
        this.courseAdded = false;
        var _d;
    };
    // to get the module objects the user takes
    UsersService.prototype.getUserModules = function (user) {
        var moduleTaken = [];
        for (var _i = 0, _a = user.modules; _i < _a.length; _i++) {
            var module = _a[_i];
            for (var _b = 0, _c = this.byModule; _b < _c.length; _b++) {
                var obj = _c[_b];
                if (module === obj.moduleName) {
                    moduleTaken.push(obj);
                }
            }
        }
        return moduleTaken;
    };
    UsersService.prototype.getCourse = function (user) {
        for (var _i = 0, _a = this.byCourse; _i < _a.length; _i++) {
            var fac = _a[_i];
            if (fac.name === user.course) {
                return fac;
            }
        }
    };
    UsersService.prototype.getModuleByName = function (module) {
        for (var _i = 0, _a = this.byModule; _i < _a.length; _i++) {
            var mod = _a[_i];
            if (mod.moduleName === module) {
                return mod;
            }
        }
        return null;
    };
    return UsersService;
}());

//# sourceMappingURL=Users.service.js.map

/***/ }),
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_uuid__ = __webpack_require__(121);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });

var User = (function () {
    function User(firstName, lastName, imagePath, faculty, yearOfStudy, courses, friendList) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.imagePath = imagePath;
        this.course = faculty;
        this.yearOfStudy = yearOfStudy;
        this.modules = courses;
        this.friendList = friendList;
        this.id = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_uuid__["a" /* uuid */])();
    }
    return User;
}());

//# sourceMappingURL=User.model.js.map

/***/ }),
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Comment; });
var Comment = (function () {
    function Comment(content, user) {
        this.content = content;
        this.user = user;
    }
    return Comment;
}());

//# sourceMappingURL=Comment.model.js.map

/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WallModel; });
var WallModel = (function () {
    function WallModel(title, content, user) {
        this.title = title;
        this.content = content;
        this.user = user;
        this.showComments = false;
        this.newCom = false;
        this.comments = [];
    }
    WallModel.prototype.getComments = function () {
        return this.comments;
    };
    WallModel.prototype.addComment = function (comment) {
        this.comments.push(comment);
    };
    WallModel.prototype.showAllComments = function () {
        this.showComments = !this.showComments;
    };
    WallModel.prototype.newComment = function () {
        this.newCom = !this.newCom;
    };
    return WallModel;
}());

//# sourceMappingURL=Wall.model.js.map

/***/ }),
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 89;


/***/ }),
/* 90 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(122);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
        template: __webpack_require__(204),
        styles: [__webpack_require__(183)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),
/* 101 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login_component__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home_component__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_topbar_topbar_component__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_sidebar_sidebar_component__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__home_module_module_component__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__home_module_wall_wall_component__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__home_module_module_mates_module_mates_component__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__home_module_chatroom_chatroom_component__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__home_module_wall_official_official_component__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__home_module_wall_general_general_component__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__home_course_course_component__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__home_course_course_connect_course_connect_component__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__home_course_progress_chart_progress_chart_component__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__home_course_course_connect_connect_discover_connect_discover_component__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__home_course_course_connect_connect_request_connect_request_component__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__home_course_course_connect_connect_friends_connect_friends_component__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__dropdown_directive__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__Users_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__angular_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_ngx_quill_editor__ = __webpack_require__(97);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_5__login_login_component__["a" /* LoginComponent */], pathMatch: 'full' },
    { path: 'home/:firstName', component: __WEBPACK_IMPORTED_MODULE_6__home_home_component__["a" /* HomeComponent */], children: [
            { path: 'course', component: __WEBPACK_IMPORTED_MODULE_15__home_course_course_component__["a" /* CourseComponent */], pathMatch: 'full' },
            { path: ':module', component: __WEBPACK_IMPORTED_MODULE_9__home_module_module_component__["a" /* ModuleComponent */], children: [
                    { path: 'wall', component: __WEBPACK_IMPORTED_MODULE_10__home_module_wall_wall_component__["a" /* WallComponent */] },
                    { path: 'chat', component: __WEBPACK_IMPORTED_MODULE_12__home_module_chatroom_chatroom_component__["a" /* ChatroomComponent */] }
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
            __WEBPACK_IMPORTED_MODULE_12__home_module_chatroom_chatroom_component__["a" /* ChatroomComponent */],
            __WEBPACK_IMPORTED_MODULE_13__home_module_wall_official_official_component__["a" /* OfficialComponent */],
            __WEBPACK_IMPORTED_MODULE_14__home_module_wall_general_general_component__["a" /* GeneralComponent */],
            __WEBPACK_IMPORTED_MODULE_15__home_course_course_component__["a" /* CourseComponent */],
            __WEBPACK_IMPORTED_MODULE_16__home_course_course_connect_course_connect_component__["a" /* CourseConnectComponent */],
            __WEBPACK_IMPORTED_MODULE_17__home_course_progress_chart_progress_chart_component__["a" /* ProgressChartComponent */],
            __WEBPACK_IMPORTED_MODULE_18__home_course_course_connect_connect_discover_connect_discover_component__["a" /* ConnectDiscoverComponent */],
            __WEBPACK_IMPORTED_MODULE_19__home_course_course_connect_connect_request_connect_request_component__["a" /* ConnectRequestComponent */],
            __WEBPACK_IMPORTED_MODULE_20__home_course_course_connect_connect_friends_connect_friends_component__["a" /* ConnectFriendsComponent */],
            __WEBPACK_IMPORTED_MODULE_21__dropdown_directive__["a" /* DropdownDirective */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_24_ngx_quill_editor__["a" /* QuillEditorModule */],
            __WEBPACK_IMPORTED_MODULE_23__angular_router__["a" /* RouterModule */].forRoot(appRoutes)
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_22__Users_service__["a" /* UsersService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),
/* 102 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* HostBinding */])('class.open'),
    __metadata("design:type", Boolean)
], DropdownDirective.prototype, "isOpen", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* HostListener */])('click'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DropdownDirective.prototype, "toggleOpen", null);
DropdownDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* Directive */])({
        selector: '[appDropdown]'
    }),
    __metadata("design:paramtypes", [])
], DropdownDirective);

//# sourceMappingURL=dropdown.directive.js.map

/***/ }),
/* 103 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
        template: __webpack_require__(205),
        styles: [__webpack_require__(184)]
    }),
    __metadata("design:paramtypes", [])
], ConnectDiscoverComponent);

//# sourceMappingURL=connect-discover.component.js.map

/***/ }),
/* 104 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
        template: __webpack_require__(206),
        styles: [__webpack_require__(185)]
    }),
    __metadata("design:paramtypes", [])
], ConnectFriendsComponent);

//# sourceMappingURL=connect-friends.component.js.map

/***/ }),
/* 105 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
        template: __webpack_require__(207),
        styles: [__webpack_require__(186)]
    }),
    __metadata("design:paramtypes", [])
], ConnectRequestComponent);

//# sourceMappingURL=connect-request.component.js.map

/***/ }),
/* 106 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
        template: __webpack_require__(208),
        styles: [__webpack_require__(187)]
    }),
    __metadata("design:paramtypes", [])
], CourseConnectComponent);

//# sourceMappingURL=course-connect.component.js.map

/***/ }),
/* 107 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_User_model__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Users_service__ = __webpack_require__(14);
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
    function CourseComponent(route, userService) {
        var _this = this;
        this.route = route;
        this.userService = userService;
        this.currentUser = new __WEBPACK_IMPORTED_MODULE_2__models_User_model__["a" /* User */]('test', 'test', 'test', 'test', 5, ['test', 'test2'], []);
        this.route.parent.params
            .subscribe(function (params) {
            _this.currentUser = _this.userService.getUserByName(params['firstName']);
        });
    }
    CourseComponent.prototype.ngOnInit = function () { };
    return CourseComponent;
}());
CourseComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-course',
        template: __webpack_require__(209),
        styles: [__webpack_require__(188)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__Users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__Users_service__["a" /* UsersService */]) === "function" && _b || Object])
], CourseComponent);

var _a, _b;
//# sourceMappingURL=course.component.js.map

/***/ }),
/* 108 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
        template: __webpack_require__(210),
        styles: [__webpack_require__(189)]
    }),
    __metadata("design:paramtypes", [])
], ProgressChartComponent);

//# sourceMappingURL=progress-chart.component.js.map

/***/ }),
/* 109 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_User_model__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Users_service__ = __webpack_require__(14);
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
        var _this = this;
        this.route = route;
        this.userService = userService;
        this.currentUser = new __WEBPACK_IMPORTED_MODULE_1__models_User_model__["a" /* User */]('test', 'test', 'test', 'test', 5, ['test', 'test2'], []);
        this.route.params
            .subscribe(function (params) {
            _this.currentUser = _this.userService.getUserByName(params['firstName']);
        });
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__(211),
        styles: [__webpack_require__(190)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__Users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__Users_service__["a" /* UsersService */]) === "function" && _b || Object])
], HomeComponent);

var _a, _b;
//# sourceMappingURL=home.component.js.map

/***/ }),
/* 110 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatroomComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChatroomComponent = (function () {
    function ChatroomComponent(route) {
        this.route = route;
        this.currentModStr = this.route.parent.snapshot.params['module'];
    }
    ChatroomComponent.prototype.ngOnInit = function () {
    };
    return ChatroomComponent;
}());
ChatroomComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-chatroom',
        template: __webpack_require__(212),
        styles: [__webpack_require__(191)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object])
], ChatroomComponent);

var _a;
//# sourceMappingURL=chatroom.component.js.map

/***/ }),
/* 111 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
        template: __webpack_require__(213),
        styles: [__webpack_require__(192)]
    }),
    __metadata("design:paramtypes", [])
], ModuleMatesComponent);

//# sourceMappingURL=module-mates.component.js.map

/***/ }),
/* 112 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(8);
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
        template: __webpack_require__(214),
        styles: [__webpack_require__(193)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object])
], ModuleComponent);

var _a;
//# sourceMappingURL=module.component.js.map

/***/ }),
/* 113 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Wall_model__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Users_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Comment_model__ = __webpack_require__(61);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeneralComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var GeneralComponent = (function () {
    function GeneralComponent(userService, route) {
        this.userService = userService;
        this.route = route;
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
        this.Posts = [
            new __WEBPACK_IMPORTED_MODULE_1__Wall_model__["a" /* WallModel */]('First Post', 'The missile, launched at a steep angle, reached an altitude of 2,000km (1,242 miles) and travelled about 700km, ' +
                'landing in the sea west of Japan. North Korea said on Monday it was a test of the abilities of a ' +
                '\"newly developed ballistic rocket\". ', this.userService.getUserByName('siddharth')),
            new __WEBPACK_IMPORTED_MODULE_1__Wall_model__["a" /* WallModel */]('Second Post', 'The missile, launched at a steep angle, reached an altitude of 2,000km (1,242 miles) and travelled about 700km, ' +
                'landing in the sea west of Japan. North Korea said on Monday it was a test of the abilities of a ' +
                '\"newly developed ballistic rocket\". ', this.userService.getUserByName('siddharth')),
            new __WEBPACK_IMPORTED_MODULE_1__Wall_model__["a" /* WallModel */]('Third Post', 'The missile, launched at a steep angle, reached an altitude of 2,000km (1,242 miles) and travelled about 700km, ' +
                'landing in the sea west of Japan. North Korea said on Monday it was a test of the abilities of a ' +
                '\"newly developed ballistic rocket\". ', this.userService.getUserByName('siddharth')),
            new __WEBPACK_IMPORTED_MODULE_1__Wall_model__["a" /* WallModel */]('Fourth Post', 'The missile, launched at a steep angle, reached an altitude of 2,000km (1,242 miles) and travelled about 700km, ' +
                'landing in the sea west of Japan. North Korea said on Monday it was a test of the abilities of a ' +
                '\"newly developed ballistic rocket\". ', this.userService.getUserByName('siddharth')),
            new __WEBPACK_IMPORTED_MODULE_1__Wall_model__["a" /* WallModel */]('Fifth Post', 'The missile, launched at a steep angle, reached an altitude of 2,000km (1,242 miles) and travelled about 700km, ' +
                'landing in the sea west of Japan. North Korea said on Monday it was a test of the abilities of a ' +
                '\"newly developed ballistic rocket\". ', this.userService.getUserByName('siddharth'))
        ];
    }
    GeneralComponent.prototype.ngOnInit = function () {
    };
    GeneralComponent.prototype.onPressed = function () {
        this.newPost = true;
    };
    GeneralComponent.prototype.clicked = function () {
        this.newPost = false;
        this.Posts.push(new __WEBPACK_IMPORTED_MODULE_1__Wall_model__["a" /* WallModel */](this.title, this.editorContent, this.userService.getUserByName('siddharth')));
        this.editorContent = '';
        this.title = '';
    };
    GeneralComponent.prototype.newComment = function (wall) {
        if (this.commentContent.length > 0) {
            wall.addComment(new __WEBPACK_IMPORTED_MODULE_4__Comment_model__["a" /* Comment */](this.commentContent, this.userService.getUserByName('siddharth')));
        }
        wall.newComment();
        this.commentContent = '';
    };
    return GeneralComponent;
}());
GeneralComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-general',
        template: __webpack_require__(215),
        styles: [__webpack_require__(194)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__Users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__Users_service__["a" /* UsersService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object])
], GeneralComponent);

var _a, _b;
//# sourceMappingURL=general.component.js.map

/***/ }),
/* 114 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OfficialComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OfficialComponent = (function () {
    function OfficialComponent() {
    }
    OfficialComponent.prototype.ngOnInit = function () {
    };
    return OfficialComponent;
}());
OfficialComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-official',
        template: __webpack_require__(216),
        styles: [__webpack_require__(195)]
    }),
    __metadata("design:paramtypes", [])
], OfficialComponent);

//# sourceMappingURL=official.component.js.map

/***/ }),
/* 115 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Wall_model__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Comment_model__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Users_service__ = __webpack_require__(14);
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
    function WallComponent(userService, route) {
        this.userService = userService;
        this.route = route;
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
        this.Posts = [
            new __WEBPACK_IMPORTED_MODULE_1__Wall_model__["a" /* WallModel */]('First Post', 'The missile, launched at a steep angle, reached an altitude of 2,000km (1,242 miles) and travelled about 700km, ' +
                'landing in the sea west of Japan. North Korea said on Monday it was a test of the abilities of a ' +
                '\"newly developed ballistic rocket\". ', this.userService.getUserByName('siddharth')),
            new __WEBPACK_IMPORTED_MODULE_1__Wall_model__["a" /* WallModel */]('Second Post', 'The missile, launched at a steep angle, reached an altitude of 2,000km (1,242 miles) and travelled about 700km, ' +
                'landing in the sea west of Japan. North Korea said on Monday it was a test of the abilities of a ' +
                '\"newly developed ballistic rocket\". ', this.userService.getUserByName('siddharth')),
            new __WEBPACK_IMPORTED_MODULE_1__Wall_model__["a" /* WallModel */]('Third Post', 'The missile, launched at a steep angle, reached an altitude of 2,000km (1,242 miles) and travelled about 700km, ' +
                'landing in the sea west of Japan. North Korea said on Monday it was a test of the abilities of a ' +
                '\"newly developed ballistic rocket\". ', this.userService.getUserByName('siddharth')),
            new __WEBPACK_IMPORTED_MODULE_1__Wall_model__["a" /* WallModel */]('Fourth Post', 'The missile, launched at a steep angle, reached an altitude of 2,000km (1,242 miles) and travelled about 700km, ' +
                'landing in the sea west of Japan. North Korea said on Monday it was a test of the abilities of a ' +
                '\"newly developed ballistic rocket\". ', this.userService.getUserByName('siddharth')),
            new __WEBPACK_IMPORTED_MODULE_1__Wall_model__["a" /* WallModel */]('Fifth Post', 'The missile, launched at a steep angle, reached an altitude of 2,000km (1,242 miles) and travelled about 700km, ' +
                'landing in the sea west of Japan. North Korea said on Monday it was a test of the abilities of a ' +
                '\"newly developed ballistic rocket\". ', this.userService.getUserByName('siddharth'))
        ];
        this.currentModStr = this.route.parent.snapshot.params['module'];
    }
    WallComponent.prototype.ngOnInit = function () {
    };
    WallComponent.prototype.onPressed = function () {
        this.newPost = true;
    };
    WallComponent.prototype.clicked = function () {
        this.newPost = false;
        this.Posts.push(new __WEBPACK_IMPORTED_MODULE_1__Wall_model__["a" /* WallModel */](this.title, this.editorContent, this.userService.getUserByName('siddharth')));
        this.editorContent = '';
        this.title = '';
    };
    WallComponent.prototype.newComment = function (wall) {
        if (this.commentContent.length > 0) {
            wall.addComment(new __WEBPACK_IMPORTED_MODULE_3__Comment_model__["a" /* Comment */](this.commentContent, this.userService.getUserByName('siddharth')));
        }
        wall.newComment();
        this.commentContent = '';
    };
    return WallComponent;
}());
WallComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-wall',
        template: __webpack_require__(217),
        styles: [__webpack_require__(196)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__Users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__Users_service__["a" /* UsersService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object])
], WallComponent);

var _a, _b;
//# sourceMappingURL=wall.component.js.map

/***/ }),
/* 116 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_User_model__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Users_service__ = __webpack_require__(14);
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
    function SidebarComponent(route, userService) {
        var _this = this;
        this.route = route;
        this.userService = userService;
        this.currentUser = new __WEBPACK_IMPORTED_MODULE_1__models_User_model__["a" /* User */]('test', 'test', 'test', 'test', 5, ['test', 'test2'], []);
        this.route.params
            .subscribe(function (params) {
            _this.currentUser = _this.userService.getUserByName(params['firstName']);
        });
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    return SidebarComponent;
}());
SidebarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-sidebar',
        template: __webpack_require__(218),
        styles: [__webpack_require__(197)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__Users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__Users_service__["a" /* UsersService */]) === "function" && _b || Object])
], SidebarComponent);

var _a, _b;
//# sourceMappingURL=sidebar.component.js.map

/***/ }),
/* 117 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
        template: __webpack_require__(219),
        styles: [__webpack_require__(198)]
    }),
    __metadata("design:paramtypes", [])
], TopbarComponent);

//# sourceMappingURL=topbar.component.js.map

/***/ }),
/* 118 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Users_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(8);
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
    function LoginComponent(usersService, router, route) {
        this.usersService = usersService;
        this.router = router;
        this.route = route;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginMenu = false;
        this.signupMenu = false;
        this.success = false;
        this.loginFailed = false;
        this.inputUsername = '';
        this.inputPassword = '';
    };
    LoginComponent.prototype.loginClicked = function () {
        this.loginMenu = !this.loginMenu;
    };
    LoginComponent.prototype.signUpClicked = function () {
        this.signupMenu = !this.signupMenu;
    };
    LoginComponent.prototype.authenticate = function () {
        if (this.usersService.verify(this.inputUsername, this.inputPassword)) {
            this.router.navigate(['/home', this.inputUsername, 'course']);
        }
        else {
            this.loginFailed = true;
            this.inputUsername = '';
            this.inputPassword = '';
        }
    };
    LoginComponent.prototype.resetFields = function () {
        this.inputUsername = '';
        this.inputPassword = '';
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__(220),
        styles: [__webpack_require__(199)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__Users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__Users_service__["a" /* UsersService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),
/* 119 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Course; });
var Course = (function () {
    function Course(name, userArr) {
        this.name = name;
        for (var _i = 0, userArr_1 = userArr; _i < userArr_1.length; _i++) {
            var u = userArr_1[_i];
            if (u.yearOfStudy === 1) {
                this.users1.push(u);
            }
            if (u.yearOfStudy === 2) {
                this.users2.push(u);
            }
            if (u.yearOfStudy === 3) {
                this.users3.push(u);
            }
            if (u.yearOfStudy === 4) {
                this.users4.push(u);
            }
        }
    }
    Course.prototype.addUser = function (user) {
        if (user.yearOfStudy === 1) {
            this.users1.push(user);
        }
        else if (user.yearOfStudy === 2) {
            this.users2.push(user);
        }
        else if (user.yearOfStudy === 3) {
            this.users3.push(user);
        }
        else if (user.yearOfStudy === 4) {
            this.users4.push(user);
        }
    };
    return Course;
}());

//# sourceMappingURL=Course.model.js.map

/***/ }),
/* 120 */
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
/* 121 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = uuid;
/* jshint bitwise:false, node:true */
/* tslint:disable:no-bitwise no-var-keyword typedef */
// taken from TodoMVC
/* jshint bitwise:false, node:true */ function uuid() {
    var i, random;
    var result = '';
    for (i = 0; i < 32; i++) {
        random = Math.random() * 16 | 0;
        if (i === 8 || i === 12 || i === 16 || i === 20) {
            result += '-';
        }
        result += (i === 12 ? 4 : (i === 16 ? (random & 3 | 8) : random))
            .toString(16);
    }
    return result;
}
;
//# sourceMappingURL=uuid.js.map

/***/ }),
/* 122 */
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
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\r\nbody {\r\n  padding-top: 0;\r\n  font-size: 12px;\r\n  color: #777;\r\n  background: #f9f9f9;\r\n  font-family: 'Open Sans',sans-serif;\r\n  margin-top:20px;\r\n}\r\n\r\n.bg-white {\r\n  background-color: #fff;\r\n}\r\n\r\n.friend-list {\r\n  list-style: none;\r\n  margin-left: -40px;\r\n}\r\n\r\n.friend-list li {\r\n  border-bottom: 1px solid #eee;\r\n}\r\n\r\n.friend-list li a img {\r\n  float: left;\r\n  width: 45px;\r\n  height: 45px;\r\n  margin-right: 0px;\r\n}\r\n\r\n.friend-list li a {\r\n  position: relative;\r\n  display: block;\r\n  padding: 10px;\r\n  transition: all .2s ease;\r\n  -webkit-transition: all .2s ease;\r\n  -moz-transition: all .2s ease;\r\n  -ms-transition: all .2s ease;\r\n  -o-transition: all .2s ease;\r\n}\r\n\r\n.friend-list li.active a {\r\n  background-color: #f1f5fc;\r\n}\r\n\r\n.friend-list li a .friend-name,\r\n.friend-list li a .friend-name:hover {\r\n  color: #777;\r\n}\r\n\r\n.friend-list li a .last-message {\r\n  width: 65%;\r\n  white-space: nowrap;\r\n  text-overflow: ellipsis;\r\n  overflow: hidden;\r\n}\r\n\r\n.friend-list li a .time {\r\n  position: absolute;\r\n  top: 10px;\r\n  right: 8px;\r\n}\r\n\r\nsmall, .small {\r\n  font-size: 85%;\r\n}\r\n\r\n.friend-list li a .chat-alert {\r\n  position: absolute;\r\n  right: 8px;\r\n  top: 27px;\r\n  font-size: 10px;\r\n  padding: 3px 5px;\r\n}\r\n\r\n.chat-message {\r\n  padding: 60px 20px 115px;\r\n}\r\n\r\n.chat {\r\n  list-style: none;\r\n  margin: 0;\r\n}\r\n\r\n.chat-message{\r\n  background: #f9f9f9;\r\n}\r\n\r\n.chat li img {\r\n  width: 45px;\r\n  height: 45px;\r\n  border-radius: 50em;\r\n  -moz-border-radius: 50em;\r\n  -webkit-border-radius: 50em;\r\n}\r\n\r\nimg {\r\n  max-width: 100%;\r\n}\r\n\r\n.chat-body {\r\n  padding-bottom: 20px;\r\n}\r\n\r\n.chat li.left .chat-body {\r\n  margin-left: 70px;\r\n  background-color: #fff;\r\n}\r\n\r\n.chat li .chat-body {\r\n  position: relative;\r\n  font-size: 11px;\r\n  padding: 10px;\r\n  border: 1px solid #f1f5fc;\r\n  box-shadow: 0 1px 1px rgba(0,0,0,.05);\r\n  -moz-box-shadow: 0 1px 1px rgba(0,0,0,.05);\r\n  -webkit-box-shadow: 0 1px 1px rgba(0,0,0,.05);\r\n}\r\n\r\n.chat li .chat-body .header {\r\n  padding-bottom: 5px;\r\n  border-bottom: 1px solid #f1f5fc;\r\n}\r\n\r\n.chat li .chat-body p {\r\n  margin: 0;\r\n}\r\n\r\n.chat li.left .chat-body:before {\r\n  position: absolute;\r\n  top: 10px;\r\n  left: -8px;\r\n  display: inline-block;\r\n  background: #fff;\r\n  width: 16px;\r\n  height: 16px;\r\n  border-top: 1px solid #f1f5fc;\r\n  border-left: 1px solid #f1f5fc;\r\n  content: '';\r\n  transform: rotate(-45deg);\r\n  -webkit-transform: rotate(-45deg);\r\n  -moz-transform: rotate(-45deg);\r\n  -ms-transform: rotate(-45deg);\r\n  -o-transform: rotate(-45deg);\r\n}\r\n\r\n.chat li.right .chat-body:before {\r\n  position: absolute;\r\n  top: 10px;\r\n  right: -8px;\r\n  display: inline-block;\r\n  background: #fff;\r\n  width: 16px;\r\n  height: 16px;\r\n  border-top: 1px solid #f1f5fc;\r\n  border-right: 1px solid #f1f5fc;\r\n  content: '';\r\n  transform: rotate(45deg);\r\n  -webkit-transform: rotate(45deg);\r\n  -moz-transform: rotate(45deg);\r\n  -ms-transform: rotate(45deg);\r\n  -o-transform: rotate(45deg);\r\n}\r\n\r\n.chat li {\r\n  margin: 15px 0;\r\n}\r\n\r\n.chat li.right .chat-body {\r\n  margin-right: 70px;\r\n  background-color: #fff;\r\n}\r\n\r\n.chat-box {\r\n  position: fixed;\r\n  bottom: 0;\r\n  left: 444px;\r\n  right: 0;\r\n  padding: 15px;\r\n  border-top: 1px solid #eee;\r\n  transition: all .5s ease;\r\n  -webkit-transition: all .5s ease;\r\n  -moz-transition: all .5s ease;\r\n  -ms-transition: all .5s ease;\r\n  -o-transition: all .5s ease;\r\n}\r\n\r\n.primary-font {\r\n  color: #3c8dbc;\r\n}\r\n\r\na:hover, a:active, a:focus {\r\n  text-decoration: none;\r\n  outline: 0;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, ".btn-primary {\r\n  color: #fff;\r\n  background-color: #337ab7;\r\n  border-color: #2e6da4;\r\n  margin: 50px 0 0 0;\r\n\r\n}\r\na{\r\n  text-decoration: none;\r\n  color:#EF7C00;\r\n}\r\n\r\na:hover{\r\n  color:#003D7C ;\r\n}\r\n\r\n#container{\r\n  width: 80%;\r\n  margin: 0 auto;\r\n  overflow: auto;\r\n  clear: both;\r\n}\r\n\r\n#content{\r\n  width: 70%;\r\n  float: left;\r\n  overflow: auto;\r\n}\r\n\r\n#content article{\r\n  border-radius: 5px;\r\n  background: #ffffff;\r\n  overflow: auto;\r\n  padding: 10px 20px;\r\n  margin-top: 10px;\r\n  border:1px #003D7C solid;\r\n}\r\n#content button.readmore{\r\n  display: block;\r\n  float: right;\r\n  color:white;\r\n  padding: 5px 9px;\r\n  background: #2e6da4;\r\n  border-radius: 5px;\r\n}\r\n\r\n#content button.readmore:hover {\r\n  background: black;\r\n}\r\n\r\n#content article:hover {\r\n  border:5px black solid;\r\n}\r\n\r\n#content article span{\r\n  font-style: italic;\r\n  color: black;\r\n}\r\n\r\n#content .badge {\r\n  display: inline-block;\r\n  min-width: 10px;\r\n  padding: 3px 7px;\r\n  font-size: 12px;\r\n  font-weight: 700;\r\n  line-height: 1;\r\n  text-align: center;\r\n  white-space: nowrap;\r\n  vertical-align: middle;\r\n  background-color: white;\r\n  border-radius: 10px;\r\n}\r\n#content button.newComment{\r\n  display: block;\r\n  float: right;\r\n  color:white;\r\n  margin-left: 5px;\r\n  padding: 5px 9px;\r\n  background: #EF7C00;\r\n  border-radius: 5px;\r\n}\r\n\r\n#content button.newComment:hover {\r\n  background: black;\r\n}\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, ".btn-primary {\r\n  color: #fff;\r\n  background-color: #337ab7;\r\n  border-color: #2e6da4;\r\n  margin: 50px 0 0 0;\r\n\r\n}\r\na{\r\n  text-decoration: none;\r\n  color:#EF7C00;\r\n}\r\n\r\na:hover{\r\n  color:#003D7C ;\r\n}\r\n\r\n#container{\r\n  width: 80%;\r\n  margin: 0 auto;\r\n  overflow: auto;\r\n  clear: both;\r\n}\r\n\r\n#content{\r\n  width: 70%;\r\n  float: left;\r\n  overflow: auto;\r\n}\r\n\r\n#content article{\r\n  border-radius: 5px;\r\n  background: #ffffff;\r\n  overflow: auto;\r\n  padding: 10px 20px;\r\n  margin-top: 10px;\r\n  border:1px #003D7C solid;\r\n}\r\n#content button.readmore{\r\n  display: block;\r\n  float: right;\r\n  color:white;\r\n  padding: 5px 9px;\r\n  background: #2e6da4;\r\n  border-radius: 5px;\r\n}\r\n\r\n#content button.readmore:hover {\r\n  background: black;\r\n}\r\n\r\n#content article:hover {\r\n  border:5px black solid;\r\n}\r\n\r\n#content article span{\r\n  font-style: italic;\r\n  color: black;\r\n}\r\n\r\n#content .badge {\r\n  display: inline-block;\r\n  min-width: 10px;\r\n  padding: 3px 7px;\r\n  font-size: 12px;\r\n  font-weight: 700;\r\n  line-height: 1;\r\n  text-align: center;\r\n  white-space: nowrap;\r\n  vertical-align: middle;\r\n  background-color: white;\r\n  border-radius: 10px;\r\n}\r\n#content button.newComment{\r\n  display: block;\r\n  float: right;\r\n  color:white;\r\n  margin-left: 5px;\r\n  padding: 5px 9px;\r\n  background: #EF7C00;\r\n  border-radius: 5px;\r\n}\r\n\r\n#content button.newComment:hover {\r\n  background: black;\r\n}\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "/*https://bootsnipp.com/snippets/featured/user-profile-sidebar*/\r\n.profile-userpic img {\r\n  float: none;\r\n  margin: 0 auto;\r\n  width: 50%;\r\n  height: 50%;\r\n  border-radius: 50% !important;\r\n}\r\n\r\n.profile-usertitle {\r\n  text-align: center;\r\n  margin-top: 20px;\r\n}\r\n\r\n.profile-usertitle-name {\r\n  color: #5a7391;\r\n  font-size: 16px;\r\n  font-weight: 600;\r\n  margin-bottom: 7px;\r\n}\r\n\r\n.profile-usertitle-job {\r\n  text-transform: uppercase;\r\n  color: #5b9bd1;\r\n  font-size: 12px;\r\n  font-weight: 600;\r\n  margin-bottom: 15px;\r\n}\r\n/*end of profile styling*/\r\n\r\n\r\n\r\n\r\nbody,html{\r\n  height: 100%;\r\n}\r\n\r\n.setHeight{\r\n  height: 100%;\r\n}\r\n.profilePic{\r\n  max-height:150px;\r\n  margin-left: 21px;\r\n}\r\nnav.sidebar, .main{\r\n  transition: margin 200ms ease-out;\r\n}\r\n\r\n.main{\r\n  padding: 10px 10px 0 10px;\r\n}\r\n\r\n@media (min-width: 765px) {\r\n\r\n  .main{\r\n    position: absolute;\r\n    width: calc(100% - 40px);\r\n    margin-left: 40px;\r\n    float: right;\r\n  }\r\n\r\n  nav.sidebar:hover + .main{\r\n    margin-left: 200px;\r\n  }\r\n\r\n  nav.sidebar.navbar.sidebar>.container .navbar-brand, .navbar>.container-fluid .navbar-brand {\r\n    margin-left: 10px;\r\n  }\r\n\r\n  nav.sidebar .navbar-brand, nav.sidebar .navbar-header{\r\n    text-align: center;\r\n    width: 100%;\r\n    margin-left: 0px;\r\n  }\r\n\r\n  nav.sidebar a{\r\n    padding-right: 13px;\r\n  }\r\n\r\n  nav.sidebar .navbar-nav > li:first-child{\r\n    border-top: 1px #e5e5e5 solid;\r\n  }\r\n\r\n  nav.sidebar .navbar-nav > li{\r\n    border-bottom: 1px #e5e5e5 solid;\r\n  }\r\n\r\n  nav.sidebar .navbar-nav .open .dropdown-menu {\r\n    position: static;\r\n    float: none;\r\n    width: auto;\r\n    margin-top: 0;\r\n    background-color: transparent;\r\n    border: 0;\r\n    box-shadow: none;\r\n  }\r\n\r\n  nav.sidebar .navbar-collapse, nav.sidebar .container-fluid{\r\n    padding: 0 0px 0 0px;\r\n  }\r\n\r\n  .navbar-inverse .navbar-nav .open .dropdown-menu>li>a {\r\n    color: #777;\r\n  }\r\n\r\n  nav.sidebar{\r\n    width: 200px;\r\n    height: 100%;\r\n    margin-left: -160px;\r\n    float: left;\r\n    margin-bottom: 0px;\r\n  }\r\n\r\n  nav.sidebar li {\r\n    width: 100%;\r\n  }\r\n\r\n  nav.sidebar:hover{\r\n    margin-left: 0px;\r\n  }\r\n\r\n  .forAnimate{\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n@media (min-width: 1330px) {\r\n\r\n  .main{\r\n    width: calc(100% - 200px);\r\n    margin-left: 200px;\r\n  }\r\n\r\n  nav.sidebar{\r\n    margin-left: 0px;\r\n    float: left;\r\n  }\r\n\r\n  nav.sidebar .forAnimate{\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\nnav.sidebar .navbar-nav .open .dropdown-menu>li>a:hover, nav.sidebar .navbar-nav .open .dropdown-menu>li>a:focus {\r\n  color: #CCC;\r\n  background-color: transparent;\r\n}\r\n\r\nnav:hover .forAnimate{\r\n  opacity: 1;\r\n}\r\nsection{\r\n  padding-left: 15px;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "li.logout a{\r\n  background: #ca2129 ;\r\n  margin-bottom: -10px !important ;\r\n  color: #ffffff !important;\r\n  padding-right: 22px;\r\n  padding-left: 22px;\r\n}\r\n\r\n\r\n.logo{\r\n  max-height: 5px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "errorMessage{\r\n  color:red;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),
/* 205 */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  connect-discover works!\r\n</p>\r\n"

/***/ }),
/* 206 */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  connect-friends works!\r\n</p>\r\n"

/***/ }),
/* 207 */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  connect-request works!\r\n</p>\r\n"

/***/ }),
/* 208 */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  course-connect works!\r\n</p>\r\n"

/***/ }),
/* 209 */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-xs-12\">\r\n    <h1>{{currentUser.course}}</h1>\r\n    <hr>\r\n  </div>\r\n</div>\r\n"

/***/ }),
/* 210 */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  progress-chart works!\r\n</p>\r\n"

/***/ }),
/* 211 */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-xs-3\" style=\"position: fixed; height:100%\">\r\n    <app-sidebar></app-sidebar>\r\n  </div>\r\n  <div class=\"col-xs-9\" style=\"margin-left:13%;\">\r\n    <router-outlet></router-outlet>\r\n    <!--<app-general></app-general>-->\r\n    <!--<app-wall></app-wall>-->\r\n  </div>\r\n</div>\r\n"

/***/ }),
/* 212 */
/***/ (function(module, exports) {

module.exports = "<h1>{{currentModStr}} / Chat</h1>\r\n<hr>\r\n\r\n<link href=\"https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css\" rel=\"stylesheet\">\r\n<div class=\"container bootstrap snippet\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-4 bg-white \">\r\n      <div class=\" row border-bottom padding-sm\" style=\"height: 40px;\">\r\n        Member\r\n      </div>\r\n\r\n      <!-- =============================================================== -->\r\n      <!-- member list -->\r\n      <ul class=\"friend-list\">\r\n        <li class=\"active bounceInDown\">\r\n          <a href=\"#\" class=\"clearfix\">\r\n            <img src=\"https://bootdey.com/img/Content/user_1.jpg\" alt=\"\" class=\"img-circle\">\r\n            <div class=\"friend-name\">\r\n              <strong>John Doe</strong>\r\n            </div>\r\n            <div class=\"last-message text-muted\">Hello, Are you there?</div>\r\n            <small class=\"time text-muted\">Just now</small>\r\n            <small class=\"chat-alert label label-danger\">1</small>\r\n          </a>\r\n        </li>\r\n        <li>\r\n          <a href=\"#\" class=\"clearfix\">\r\n            <img src=\"https://bootdey.com/img/Content/user_2.jpg\" alt=\"\" class=\"img-circle\">\r\n            <div class=\"friend-name\">\r\n              <strong>Jane Doe</strong>\r\n            </div>\r\n            <div class=\"last-message text-muted\">Lorem ipsum dolor sit amet.</div>\r\n            <small class=\"time text-muted\">5 mins ago</small>\r\n            <small class=\"chat-alert text-muted\"><i class=\"fa fa-check\"></i></small>\r\n          </a>\r\n        </li>\r\n        <li>\r\n          <a href=\"#\" class=\"clearfix\">\r\n            <img src=\"https://bootdey.com/img/Content/user_3.jpg\" alt=\"\" class=\"img-circle\">\r\n            <div class=\"friend-name\">\r\n              <strong>Kate</strong>\r\n            </div>\r\n            <div class=\"last-message text-muted\">Lorem ipsum dolor sit amet.</div>\r\n            <small class=\"time text-muted\">Yesterday</small>\r\n            <small class=\"chat-alert text-muted\"><i class=\"fa fa-reply\"></i></small>\r\n          </a>\r\n        </li>\r\n        <li>\r\n          <a href=\"#\" class=\"clearfix\">\r\n            <img src=\"https://bootdey.com/img/Content/user_1.jpg\" alt=\"\" class=\"img-circle\">\r\n            <div class=\"friend-name\">\r\n              <strong>Kate</strong>\r\n            </div>\r\n            <div class=\"last-message text-muted\">Lorem ipsum dolor sit amet.</div>\r\n            <small class=\"time text-muted\">Yesterday</small>\r\n            <small class=\"chat-alert text-muted\"><i class=\"fa fa-reply\"></i></small>\r\n          </a>\r\n        </li>\r\n        <li>\r\n          <a href=\"#\" class=\"clearfix\">\r\n            <img src=\"https://bootdey.com/img/Content/user_2.jpg\" alt=\"\" class=\"img-circle\">\r\n            <div class=\"friend-name\">\r\n              <strong>Kate</strong>\r\n            </div>\r\n            <div class=\"last-message text-muted\">Lorem ipsum dolor sit amet.</div>\r\n            <small class=\"time text-muted\">Yesterday</small>\r\n            <small class=\"chat-alert text-muted\"><i class=\"fa fa-reply\"></i></small>\r\n          </a>\r\n        </li>\r\n        <li>\r\n          <a href=\"#\" class=\"clearfix\">\r\n            <img src=\"https://bootdey.com/img/Content/user_6.jpg\" alt=\"\" class=\"img-circle\">\r\n            <div class=\"friend-name\">\r\n              <strong>Kate</strong>\r\n            </div>\r\n            <div class=\"last-message text-muted\">Lorem ipsum dolor sit amet.</div>\r\n            <small class=\"time text-muted\">Yesterday</small>\r\n            <small class=\"chat-alert text-muted\"><i class=\"fa fa-reply\"></i></small>\r\n          </a>\r\n        </li>\r\n        <li>\r\n          <a href=\"#\" class=\"clearfix\">\r\n            <img src=\"https://bootdey.com/img/Content/user_5.jpg\" alt=\"\" class=\"img-circle\">\r\n            <div class=\"friend-name\">\r\n              <strong>Kate</strong>\r\n            </div>\r\n            <div class=\"last-message text-muted\">Lorem ipsum dolor sit amet.</div>\r\n            <small class=\"time text-muted\">Yesterday</small>\r\n            <small class=\"chat-alert text-muted\"><i class=\"fa fa-reply\"></i></small>\r\n          </a>\r\n        </li>\r\n        <li>\r\n          <a href=\"#\" class=\"clearfix\">\r\n            <img src=\"https://bootdey.com/img/Content/user_2.jpg\" alt=\"\" class=\"img-circle\">\r\n            <div class=\"friend-name\">\r\n              <strong>Jane Doe</strong>\r\n            </div>\r\n            <div class=\"last-message text-muted\">Lorem ipsum dolor sit amet.</div>\r\n            <small class=\"time text-muted\">5 mins ago</small>\r\n            <small class=\"chat-alert text-muted\"><i class=\"fa fa-check\"></i></small>\r\n          </a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n\r\n    <!--=========================================================-->\r\n    <!-- selected chat -->\r\n    <div class=\"col-md-8 bg-white \">\r\n      <div class=\"chat-message\">\r\n        <ul class=\"chat\">\r\n          <li class=\"left clearfix\">\r\n                    \t<span class=\"chat-img pull-left\">\r\n                    \t\t<img src=\"https://bootdey.com/img/Content/user_3.jpg\" alt=\"User Avatar\">\r\n                    \t</span>\r\n            <div class=\"chat-body clearfix\">\r\n              <div class=\"header\">\r\n                <strong class=\"primary-font\">John Doe</strong>\r\n                <small class=\"pull-right text-muted\"><i class=\"fa fa-clock-o\"></i> 12 mins ago</small>\r\n              </div>\r\n              <p>\r\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit.\r\n              </p>\r\n            </div>\r\n          </li>\r\n          <li class=\"right clearfix\">\r\n                    \t<span class=\"chat-img pull-right\">\r\n                    \t\t<img src=\"https://bootdey.com/img/Content/user_1.jpg\" alt=\"User Avatar\">\r\n                    \t</span>\r\n            <div class=\"chat-body clearfix\">\r\n              <div class=\"header\">\r\n                <strong class=\"primary-font\">Sarah</strong>\r\n                <small class=\"pull-right text-muted\"><i class=\"fa fa-clock-o\"></i> 13 mins ago</small>\r\n              </div>\r\n              <p>\r\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales at.\r\n              </p>\r\n            </div>\r\n          </li>\r\n          <li class=\"left clearfix\">\r\n                        <span class=\"chat-img pull-left\">\r\n                    \t\t<img src=\"https://bootdey.com/img/Content/user_3.jpg\" alt=\"User Avatar\">\r\n                    \t</span>\r\n            <div class=\"chat-body clearfix\">\r\n              <div class=\"header\">\r\n                <strong class=\"primary-font\">John Doe</strong>\r\n                <small class=\"pull-right text-muted\"><i class=\"fa fa-clock-o\"></i> 12 mins ago</small>\r\n              </div>\r\n              <p>\r\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit.\r\n              </p>\r\n            </div>\r\n          </li>\r\n          <li class=\"right clearfix\">\r\n                        <span class=\"chat-img pull-right\">\r\n                    \t\t<img src=\"https://bootdey.com/img/Content/user_1.jpg\" alt=\"User Avatar\">\r\n                    \t</span>\r\n            <div class=\"chat-body clearfix\">\r\n              <div class=\"header\">\r\n                <strong class=\"primary-font\">Sarah</strong>\r\n                <small class=\"pull-right text-muted\"><i class=\"fa fa-clock-o\"></i> 13 mins ago</small>\r\n              </div>\r\n              <p>\r\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales at.\r\n              </p>\r\n            </div>\r\n          </li>\r\n          <li class=\"left clearfix\">\r\n                        <span class=\"chat-img pull-left\">\r\n                    \t\t<img src=\"https://bootdey.com/img/Content/user_3.jpg\" alt=\"User Avatar\">\r\n                    \t</span>\r\n            <div class=\"chat-body clearfix\">\r\n              <div class=\"header\">\r\n                <strong class=\"primary-font\">John Doe</strong>\r\n                <small class=\"pull-right text-muted\"><i class=\"fa fa-clock-o\"></i> 12 mins ago</small>\r\n              </div>\r\n              <p>\r\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit.\r\n              </p>\r\n            </div>\r\n          </li>\r\n          <li class=\"right clearfix\">\r\n                        <span class=\"chat-img pull-right\">\r\n                    \t\t<img src=\"https://bootdey.com/img/Content/user_1.jpg\" alt=\"User Avatar\">\r\n                    \t</span>\r\n            <div class=\"chat-body clearfix\">\r\n              <div class=\"header\">\r\n                <strong class=\"primary-font\">Sarah</strong>\r\n                <small class=\"pull-right text-muted\"><i class=\"fa fa-clock-o\"></i> 13 mins ago</small>\r\n              </div>\r\n              <p>\r\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales at.\r\n              </p>\r\n            </div>\r\n          </li>\r\n          <li class=\"right clearfix\">\r\n                        <span class=\"chat-img pull-right\">\r\n                    \t\t<img src=\"https://bootdey.com/img/Content/user_1.jpg\" alt=\"User Avatar\">\r\n                    \t</span>\r\n            <div class=\"chat-body clearfix\">\r\n              <div class=\"header\">\r\n                <strong class=\"primary-font\">Sarah</strong>\r\n                <small class=\"pull-right text-muted\"><i class=\"fa fa-clock-o\"></i> 13 mins ago</small>\r\n              </div>\r\n              <p>\r\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales at.\r\n              </p>\r\n            </div>\r\n          </li>\r\n          <li class=\"right clearfix\">\r\n                        <span class=\"chat-img pull-right\">\r\n                    \t\t<img src=\"https://bootdey.com/img/Content/user_1.jpg\" alt=\"User Avatar\">\r\n                    \t</span>\r\n            <div class=\"chat-body clearfix\">\r\n              <div class=\"header\">\r\n                <strong class=\"primary-font\">Sarah</strong>\r\n                <small class=\"pull-right text-muted\"><i class=\"fa fa-clock-o\"></i> 13 mins ago</small>\r\n              </div>\r\n              <p>\r\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales at.\r\n              </p>\r\n            </div>\r\n          </li>\r\n          <li class=\"right clearfix\">\r\n                        <span class=\"chat-img pull-right\">\r\n                    \t\t<img src=\"https://bootdey.com/img/Content/user_1.jpg\" alt=\"User Avatar\">\r\n                    \t</span>\r\n            <div class=\"chat-body clearfix\">\r\n              <div class=\"header\">\r\n                <strong class=\"primary-font\">Sarah</strong>\r\n                <small class=\"pull-right text-muted\"><i class=\"fa fa-clock-o\"></i> 13 mins ago</small>\r\n              </div>\r\n              <p>\r\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales at.\r\n              </p>\r\n            </div>\r\n          </li>\r\n          <li class=\"right clearfix\">\r\n                        <span class=\"chat-img pull-right\">\r\n                    \t\t<img src=\"https://bootdey.com/img/Content/user_1.jpg\" alt=\"User Avatar\">\r\n                    \t</span>\r\n            <div class=\"chat-body clearfix\">\r\n              <div class=\"header\">\r\n                <strong class=\"primary-font\">Sarah</strong>\r\n                <small class=\"pull-right text-muted\"><i class=\"fa fa-clock-o\"></i> 13 mins ago</small>\r\n              </div>\r\n              <p>\r\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales at.\r\n              </p>\r\n            </div>\r\n          </li>\r\n          <li class=\"right clearfix\">\r\n                        <span class=\"chat-img pull-right\">\r\n                    \t\t<img src=\"https://bootdey.com/img/Content/user_1.jpg\" alt=\"User Avatar\">\r\n                    \t</span>\r\n            <div class=\"chat-body clearfix\">\r\n              <div class=\"header\">\r\n                <strong class=\"primary-font\">Sarah</strong>\r\n                <small class=\"pull-right text-muted\"><i class=\"fa fa-clock-o\"></i> 13 mins ago</small>\r\n              </div>\r\n              <p>\r\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales at.\r\n              </p>\r\n            </div>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n      <div class=\"chat-box bg-white\">\r\n        <div class=\"input-group\">\r\n          <input class=\"form-control border no-shadow no-rounded\" placeholder=\"Type your message here\">\r\n          <span class=\"input-group-btn\">\r\n            \t\t\t<button class=\"btn btn-success no-rounded\" type=\"button\">Send</button>\r\n            \t\t</span>\r\n        </div><!-- /input-group -->\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),
/* 213 */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  module-mates works!\r\n</p>\r\n"

/***/ }),
/* 214 */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),
/* 215 */
/***/ (function(module, exports) {

module.exports = "<body>\r\n<div class=\"row\">\r\n  <div class=\"col col-xs-offset-10\" *ngIf=\"!newPost \">\r\n    <button class=\"btn btn-primary bringDown\" (click)=\"onPressed()\">Add New Post</button>\r\n  </div>\r\n  <div *ngIf=\"newPost\" class=\"col col-lg-offset-2 bringDown\">\r\n    <br>\r\n\r\n    <div class=\"col-xs-8\">\r\n      <input\r\n        type=\"text\"\r\n        class=\"form-control\"\r\n        placeholder=\"Title\"\r\n        [(ngModel)] = \"title\">\r\n    </div>\r\n    <br>\r\n    <br>\r\n    <div >\r\n      <quill-editor [(ngModel)]=\"editorContent\"\r\n                    [options]=\"editorOptions\"></quill-editor>\r\n      <button class=\"btn btn-primary\" (click)=\"clicked()\">\r\n        Submit\r\n      </button>\r\n\r\n    </div>\r\n  </div>\r\n\r\n\r\n\r\n  <div *ngIf=\"!newPost\" class=\"col col-lg-offset-2\">\r\n    <div id=\"main\">\r\n      <div id=\"content\">\r\n        <div *ngFor=\"let x of Posts\">\r\n          <article>\r\n            <header class=\"art-header\">\r\n              <h2 class=\"title\">\r\n                <a href=\"#\">{{x.title}} {{module}}</a>\r\n              </h2>\r\n              <span>Created by: {{x.user.firstName}} {{x.user.lastName}}</span>\r\n            </header>\r\n            <p [innerHTML] = \"x.content\"></p>\r\n            <div class=\"row\">\r\n              <div class=\"col\">\r\n                <button  class=\"newComment\" *ngIf=\"!x.newCom\" (click)=\"x.newComment()\">New Comment</button>\r\n\r\n                <button  class=\"readmore\" *ngIf=\"!x.showComments\"\r\n                         (click)=\"x.showAllComments()\"\r\n                         [disabled] = \"!x.comments.length >0\">\r\n                  Comments <span class=\"badge\" *ngIf=\"x.comments.length >0\">\r\n                  {{x.comments.length}}</span>\r\n                </button>\r\n                <button  class=\"readmore\" *ngIf=\"x.showComments\"\r\n                         (click)=\"x.showAllComments()\">\r\n                  Close Comments\r\n                </button>\r\n              </div>\r\n              <div class=\"col\">\r\n                <div *ngIf=\"x.showComments\">\r\n                  <div *ngFor=\"let comment of x.comments\">\r\n                    <br>\r\n                    <br>\r\n                    <article class=\"comments\">\r\n                      <header>\r\n                        <span>Created by: {{comment.user.firstName}} {{comment.user.firstName}}</span>\r\n                      </header>\r\n                      <p [innerHTML] = \"comment.content\"></p>\r\n                    </article>\r\n                  </div>\r\n                </div>\r\n                <div *ngIf=\"x.newCom\">\r\n                  <quill-editor [(ngModel)]=\"commentContent\"\r\n                                [options]=\"commentOptions\"></quill-editor>\r\n                  <button  class=\"newComment submit\" *ngIf=\"x.newCom\" (click)=\"newComment(x)\">Submit</button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </article>\r\n          <br>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n</body>\r\n\r\n\r\n\r\n"

/***/ }),
/* 216 */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  official works!\r\n</p>\r\n"

/***/ }),
/* 217 */
/***/ (function(module, exports) {

module.exports = "<h1>{{currentModStr}} / Wall</h1>\r\n<hr>\r\n<body>\r\n<div class=\"row\">\r\n  <div class=\"col col-xs-offset-10\" *ngIf=\"!newPost \">\r\n    <button class=\"btn btn-primary bringDown\" (click)=\"onPressed()\">Add New Post</button>\r\n  </div>\r\n  <div *ngIf=\"newPost\" class=\"col col-lg-offset-2 bringDown\">\r\n    <br>\r\n\r\n    <div class=\"col-xs-10\">\r\n      <input\r\n        type=\"text\"\r\n        class=\"form-control\"\r\n        placeholder=\"Title\"\r\n        [(ngModel)] = \"title\">\r\n    </div>\r\n    <br>\r\n    <br>\r\n    <div class=\"col-xs-10\">\r\n      <quill-editor [(ngModel)]=\"editorContent\"\r\n                    [options]=\"editorOptions\"></quill-editor>\r\n      <button class=\"btn btn-primary\" (click)=\"clicked()\">Submit</button>\r\n\r\n    </div>\r\n  </div>\r\n\r\n\r\n\r\n  <div *ngIf=\"!newPost\" class=\"col col-lg-offset-2\">\r\n    <div id=\"main\">\r\n      <div id=\"content\">\r\n        <div *ngFor=\"let x of Posts\">\r\n          <article>\r\n            <header class=\"art-header\">\r\n              <h2 class=\"title\">\r\n                <a href=\"#\">{{x.title}} {{module}}</a>\r\n              </h2>\r\n              <span>Created by: {{x.user.firstName}} {{x.user.lastName}}</span>\r\n            </header>\r\n            <p [innerHTML] = \"x.content\"></p>\r\n            <div class=\"row\">\r\n              <div class=\"col\">\r\n                <button  class=\"newComment\" *ngIf=\"!x.newCom\" (click)=\"x.newComment()\">New Comment</button>\r\n\r\n                <button  class=\"readmore\" *ngIf=\"!x.showComments\"\r\n                         (click)=\"x.showAllComments()\"\r\n                         [disabled] = \"!x.comments.length >0\">\r\n                  Comments <span class=\"badge\" *ngIf=\"x.comments.length >0\">\r\n                  {{x.comments.length}}</span>\r\n                </button>\r\n                <button  class=\"readmore\" *ngIf=\"x.showComments\"\r\n                         (click)=\"x.showAllComments()\">\r\n                  Close Comments\r\n                </button>\r\n              </div>\r\n              <div class=\"col\">\r\n                <div *ngIf=\"x.showComments\">\r\n                  <div *ngFor=\"let comment of x.comments\">\r\n                    <br>\r\n                    <br>\r\n                    <article class=\"comments\">\r\n                      <header>\r\n                        <span>Created by: {{comment.user.firstName}} {{comment.user.firstName}}</span>\r\n                      </header>\r\n                      <p [innerHTML] = \"comment.content\"></p>\r\n                    </article>\r\n                  </div>\r\n                </div>\r\n                <div *ngIf=\"x.newCom\">\r\n                  <quill-editor [(ngModel)]=\"commentContent\"\r\n                                [options]=\"commentOptions\"></quill-editor>\r\n                  <button  class=\"newComment submit\" *ngIf=\"x.newCom\" (click)=\"newComment(x)\">Submit</button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </article>\r\n          <br>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n</body>\r\n\r\n\r\n\r\n"

/***/ }),
/* 218 */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse sidebar setHeight\" >\r\n  <div class=\"container-fluid\" >\r\n    <div class=\"navbar-header\">\r\n      <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#bs-sidebar-navbar-collapse-1\">\r\n        <span class=\"sr-only\">Toggle navigation</span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n      </button>\r\n    </div>\r\n    <div class=\"collapse navbar-collapse\" id=\"bs-sidebar-navbar-collapse-1\">\r\n      <ul class=\"nav navbar-nav\">\r\n        <li>\r\n          <div class=\"row\">\r\n            <div class=\"col-xs-12\">\r\n              <!--<img class=\"profilePic\" src=\"{{ currentUser.imagePath }}\" alt=\"profile pic\">-->\r\n\r\n              <!--sidebar profile-->\r\n              <div class=\"profile-userpic\">\r\n                <img src=\"{{ currentUser.imagePath }}\" class=\"img-responsive\" alt=\"\">\r\n              </div>\r\n              <div class=\"profile-usertitle\">\r\n                <div class=\"profile-usertitle-name\">\r\n                  {{currentUser.firstName + ' ' + currentUser.lastName}}\r\n                </div>\r\n                <div class=\"profile-usertitle-job\">\r\n                  {{currentUser.course}} <br> {{'Year ' + currentUser.yearOfStudy}}\r\n                </div>\r\n              </div>\r\n              <!--sidebar profile-->\r\n            </div>\r\n          </div>\r\n        </li>\r\n\r\n        <!--previous sample-->\r\n        <!--<li class=\"active\">-->\r\n          <!--<a>CEG<span style=\"font-size:16px;\" class=\"pull-right hidden-xs showopacity glyphicon glyphicon-home\">-->\r\n          <!--</span>-->\r\n          <!--</a>-->\r\n        <!--</li>-->\r\n        <!--<li ><a>CEG<span style=\"font-size:16px;\" class=\"pull-right hidden-xs showopacity glyphicon glyphicon-th-list\"></span></a></li>-->\r\n\r\n        <!--course button-->\r\n        <li routerLinkActive=\"active\" class=\"dropdown\" appDropdown >\r\n          <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" routerLink=\"/home/{{currentUser.firstName}}/course\">{{ currentUser.course }}<span class=\"caret\"></span><span style=\"font-size:16px;\" class=\"pull-right hidden-xs showopacity glyphicon glyphicon-user\"></span></a>\r\n          <ul class=\"dropdown-menu forAnimate\" role=\"menu\">\r\n            <li><a>Requests</a></li>\r\n            <li><a>Expand</a></li>\r\n          </ul>\r\n        </li>\r\n\r\n        <li routerLinkActive=\"active\" class=\"dropdown\" appDropdown  *ngFor=\"let module of currentUser.modules\">\r\n          <a routerLink=\"/home/{{currentUser.firstName}}/{{module}}/wall\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">{{ module }}<span class=\"caret\"></span><span style=\"font-size:16px;\" class=\"pull-right hidden-xs showopacity glyphicon glyphicon-user\"></span></a>\r\n          <ul class=\"dropdown-menu forAnimate\" role=\"menu\">\r\n            <li><a routerLink=\"/home/{{currentUser.firstName}}/{{module}}/wall\">Wall</a></li>\r\n            <li><a routerLink=\"/home/{{currentUser.firstName}}/{{module}}/chat\">Chat Box</a></li>\r\n            <!--<li routerLinkActive=\"active\"><a routerLink=\"/home/:user/:module/mod-mates\">Current Module Mates</a></li>-->\r\n          </ul>\r\n        </li>\r\n      </ul>\r\n      <button class=\"btn btn-danger\">Logout</button>\r\n    </div>\r\n  </div>\r\n</nav>\r\n"

/***/ }),
/* 219 */
/***/ (function(module, exports) {

module.exports = "  <nav class=\"navbar navbar-inverse\">\r\n        <div class=\"container-fluid\">\r\n          <!-- Brand and toggle get grouped for better mobile display -->\r\n          <div class=\"navbar-header\">\r\n            <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\r\n              <span class=\"sr-only\">Toggle navigation</span>\r\n              <span class=\"icon-bar\"></span>\r\n              <span class=\"icon-bar\"></span>\r\n              <span class=\"icon-bar\"></span>\r\n            </button>\r\n            <a class=\"navbar-brand\" >Nus Connect</a>\r\n          </div>\r\n          <ul class=\"nav navbar-nav\">\r\n            <li ><a> <strong><em>Philemon Tan</em></strong></a></li>\r\n            <li ><a> <strong><em>Year 2</em></strong></a></li>\r\n          </ul>\r\n\r\n          <!-- Collect the nav links, forms, and other content for toggling -->\r\n          <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\r\n            <ul class=\"nav navbar-nav navbar-right\">\r\n              <li class=\"logout\"><a >Logout</a></li>\r\n            </ul>\r\n          </div><!-- /.navbar-collapse -->\r\n        </div><!-- /.container-fluid -->\r\n      </nav>\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),
/* 220 */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\" style=\"text-align: center\">\r\n  <h1 class=\"display-3\">NUS Connect</h1>\r\n  <p class=\"lead\">This is a platform for NUS Students to Connect and discuss!</p>\r\n  <hr class=\"my-2\">\r\n  <p>Please Login to Continue</p>\r\n  <hr>\r\n\r\n  <div class=\"row lead\">\r\n    <div class=\"col-lg-4 col-lg-offset-4\">\r\n      <button class=\"btn btn-success btn-block\" (click) = loginClicked()>Login <span class=\"caret\"></span></button>\r\n      <br>\r\n        <div *ngIf=\"loginMenu\">\r\n          <div class=\"col-xs-8\">\r\n            <input\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              placeholder=\"Username\"\r\n              [(ngModel)] = \"inputUsername\">\r\n          </div>\r\n          <div >\r\n            <button class=\"btn btn-primary\" (click)=\"authenticate()\">Enter.</button>\r\n          </div>\r\n\r\n        </div>\r\n        <div *ngIf=\"loginMenu\">\r\n          <div class=\"col-xs-8\">\r\n            <input\r\n              type=\"password\"\r\n              class=\"form-control\"\r\n              placeholder=\"Password\"\r\n              [(ngModel)] = \"inputPassword\">\r\n          </div>\r\n          <div >\r\n            <button (click)=\"resetFields()\" class=\"btn btn-danger\">Reset</button>\r\n          </div>\r\n        </div>\r\n      <button class=\"btn btn-primary btn-block\" (click)= signUpClicked() *ngIf=\"!loginMenu\">Sign Up <span class=\"caret\"></span></button>\r\n    </div>\r\n  </div>\r\n  <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"loginFailed\">\r\n    <span class=\"glyphicon glyphicon-exclamation-sign\" aria-hidden=\"true\"></span>\r\n    <span class=\"sr-only\">Error:</span>\r\n    Login Failed. Please check your username and password.\r\n  </div>\r\n</div>\r\n"

/***/ }),
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */,
/* 245 */,
/* 246 */,
/* 247 */,
/* 248 */,
/* 249 */,
/* 250 */,
/* 251 */,
/* 252 */,
/* 253 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(90);


/***/ })
],[253]);
//# sourceMappingURL=main.bundle.js.map