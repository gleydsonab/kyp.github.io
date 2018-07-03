(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./node_modules/angular2-notifications/angular2-notifications.umd.js":
/*!***************************************************************************!*\
  !*** ./node_modules/angular2-notifications/angular2-notifications.umd.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
	 true ? factory(exports, __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js"), __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js"), __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js"), __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js")) :
	undefined;
}(this, (function (exports,core,common,rxjs,animations,platformBrowser) { 'use strict';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var DEFAULT_ICONS = {
    alert: "\n        <svg class=\"simple-notification-svg\" xmlns=\"http://www.w3.org/2000/svg\" fill=\"#ffffff\" height=\"24\" viewBox=\"0 0 24 24\" width=\"24\">\n            <path d=\"M0 0h24v24H0z\" fill=\"none\"/>\n            <path d=\"M22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM12.5 8H11v6l4.75 2.85.75-1.23-4-2.37V8zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z\"/>\n        </svg>\n    ",
    error: "\n        <svg class=\"simple-notification-svg\" xmlns=\"http://www.w3.org/2000/svg\" fill=\"#ffffff\" height=\"24\" viewBox=\"0 0 24 24\" width=\"24\">\n            <path d=\"M0 0h24v24H0V0z\" fill=\"none\"/>\n            <path d=\"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z\"/>\n        </svg>\n    ",
    info: "\n        <svg class=\"simple-notification-svg\" xmlns=\"http://www.w3.org/2000/svg\" fill=\"#ffffff\" height=\"24\" viewBox=\"0 0 24 24\" width=\"24\">\n            <path d=\"M0 0h24v24H0z\" fill=\"none\"/>\n            <path d=\"M11 17h2v-6h-2v6zm1-15C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM11 9h2V7h-2v2z\"/>\n        </svg>\n    ",
    success: "\n        <svg class=\"simple-notification-svg\" xmlns=\"http://www.w3.org/2000/svg\" fill=\"#ffffff\" height=\"24\" viewBox=\"0 0 24 24\" width=\"24\">\n            <path d=\"M0 0h24v24H0z\" fill=\"none\"/>\n            <path d=\"M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z\"/>\n        </svg>\n    ",
    warn: "\n        <svg class=\"simple-notification-svg\" xmlns=\"http://www.w3.org/2000/svg\" fill=\"#ffffff\" width=\"64\" viewBox=\"0 0 64 64\" height=\"64\">\n          <circle cx=\"32.086\" cy=\"50.142\" r=\"2.256\"/>\n          <path d=\"M30.08 25.012V42.32c0 1.107.897 2.005 2.006 2.005s2.006-.897 2.006-2.005V25.012c0-1.107-.897-2.006-2.006-2.006s-2.006.898-2.006 2.006z\"/>\n          <path d=\"M63.766 59.234L33.856 3.082c-.697-1.308-2.844-1.308-3.54 0L.407 59.234c-.331.622-.312 1.372.051 1.975.362.605 1.015.975 1.72.975h59.816c.705 0 1.357-.369 1.721-.975.361-.603.381-1.353.051-1.975zM5.519 58.172L32.086 8.291l26.568 49.881H5.519z\"/>\n        </svg>\n    "
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var NotificationsService = /** @class */ (function () {
    function NotificationsService(globalOptions) {
        this.globalOptions = globalOptions;
        this.emitter = new rxjs.Subject();
        this.icons = DEFAULT_ICONS;
    }
    /**
     * @param {?} notification
     * @param {?} to
     * @return {?}
     */
    NotificationsService.prototype.set = /**
     * @param {?} notification
     * @param {?} to
     * @return {?}
     */
    function (notification, to) {
        notification.id = notification.override && notification.override.id ? notification.override.id : Math.random().toString(36).substring(3);
        notification.click = new core.EventEmitter();
        notification.timeoutEnd = new core.EventEmitter();
        this.emitter.next({ command: 'set', notification: notification, add: to });
        return notification;
    };
    
    /**
     * @param {?=} title
     * @param {?=} content
     * @param {?=} override
     * @return {?}
     */
    NotificationsService.prototype.success = /**
     * @param {?=} title
     * @param {?=} content
     * @param {?=} override
     * @return {?}
     */
    function (title, content, override) {
        if (title === void 0) { title = ''; }
        if (content === void 0) { content = ''; }
        return this.set({ title: title, content: content || '', type: 'success', icon: this.icons.success, override: override }, true);
    };
    /**
     * @param {?=} title
     * @param {?=} content
     * @param {?=} override
     * @return {?}
     */
    NotificationsService.prototype.error = /**
     * @param {?=} title
     * @param {?=} content
     * @param {?=} override
     * @return {?}
     */
    function (title, content, override) {
        if (title === void 0) { title = ''; }
        if (content === void 0) { content = ''; }
        return this.set({ title: title, content: content || '', type: 'error', icon: this.icons.error, override: override }, true);
    };
    /**
     * @param {?=} title
     * @param {?=} content
     * @param {?=} override
     * @return {?}
     */
    NotificationsService.prototype.alert = /**
     * @param {?=} title
     * @param {?=} content
     * @param {?=} override
     * @return {?}
     */
    function (title, content, override) {
        if (title === void 0) { title = ''; }
        if (content === void 0) { content = ''; }
        return this.set({ title: title, content: content || '', type: 'alert', icon: this.icons.alert, override: override }, true);
    };
    /**
     * @param {?=} title
     * @param {?=} content
     * @param {?=} override
     * @return {?}
     */
    NotificationsService.prototype.info = /**
     * @param {?=} title
     * @param {?=} content
     * @param {?=} override
     * @return {?}
     */
    function (title, content, override) {
        if (title === void 0) { title = ''; }
        if (content === void 0) { content = ''; }
        return this.set({ title: title, content: content || '', type: 'info', icon: this.icons.info, override: override }, true);
    };
    /**
     * @param {?=} title
     * @param {?=} content
     * @param {?=} override
     * @return {?}
     */
    NotificationsService.prototype.warn = /**
     * @param {?=} title
     * @param {?=} content
     * @param {?=} override
     * @return {?}
     */
    function (title, content, override) {
        if (title === void 0) { title = ''; }
        if (content === void 0) { content = ''; }
        return this.set({ title: title, content: content || '', type: 'warn', icon: this.icons.warn, override: override }, true);
    };
    /**
     * @param {?=} title
     * @param {?=} content
     * @param {?=} override
     * @return {?}
     */
    NotificationsService.prototype.bare = /**
     * @param {?=} title
     * @param {?=} content
     * @param {?=} override
     * @return {?}
     */
    function (title, content, override) {
        if (title === void 0) { title = ''; }
        if (content === void 0) { content = ''; }
        return this.set({ title: title, content: content || '', type: 'bare', icon: 'bare', override: override }, true);
    };
    // With type method
    /**
     * @param {?=} title
     * @param {?=} content
     * @param {?=} type
     * @param {?=} override
     * @return {?}
     */
    NotificationsService.prototype.create = /**
     * @param {?=} title
     * @param {?=} content
     * @param {?=} type
     * @param {?=} override
     * @return {?}
     */
    function (title, content, type, override) {
        if (title === void 0) { title = ''; }
        if (content === void 0) { content = ''; }
        if (type === void 0) { type = 'success'; }
        return this.set({ title: title, content: content, type: type, icon: (/** @type {?} */ (this.icons))[type], override: override }, true);
    };
    // HTML Notification method
    /**
     * @param {?} html
     * @param {?=} type
     * @param {?=} override
     * @param {?=} icon
     * @return {?}
     */
    NotificationsService.prototype.html = /**
     * @param {?} html
     * @param {?=} type
     * @param {?=} override
     * @param {?=} icon
     * @return {?}
     */
    function (html, type, override, icon) {
        if (type === void 0) { type = 'success'; }
        if (icon === void 0) { icon = 'bare'; }
        return this.set({ html: html, type: type, icon: (/** @type {?} */ (this.icons))[icon], override: override }, true);
    };
    // Remove all notifications method
    /**
     * @param {?=} id
     * @return {?}
     */
    NotificationsService.prototype.remove = /**
     * @param {?=} id
     * @return {?}
     */
    function (id) {
        if (id) {
            this.emitter.next({ command: 'clean', id: id });
        }
        else {
            this.emitter.next({ command: 'cleanAll' });
        }
    };
    NotificationsService.decorators = [
        { type: core.Injectable },
    ];
    /** @nocollapse */
    NotificationsService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: core.Inject, args: ['options',] },] },
    ]; };
    return NotificationsService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var SimpleNotificationsComponent = /** @class */ (function () {
    function SimpleNotificationsComponent(service, cdr) {
        this.service = service;
        this.cdr = cdr;
        this.onCreate = new core.EventEmitter();
        this.onDestroy = new core.EventEmitter();
        this.notifications = [];
        this.position = ['bottom', 'right'];
        this.lastOnBottom = true;
        this.maxStack = 8;
        this.preventLastDuplicates = false;
        this.preventDuplicates = false;
        this.timeOut = 0;
        this.maxLength = 0;
        this.clickToClose = true;
        this.clickIconToClose = false;
        this.showProgressBar = true;
        this.pauseOnHover = true;
        this.theClass = '';
        this.rtl = false;
        this.animate = 'fromRight';
        this._usingComponentOptions = false;
    }
    Object.defineProperty(SimpleNotificationsComponent.prototype, "options", {
        set: /**
         * @param {?} opt
         * @return {?}
         */
        function (opt) {
            this._usingComponentOptions = true;
            this.attachChanges(opt);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    SimpleNotificationsComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /**
             * Only attach global options if config
             * options were never sent through input
             */
        if (!this._usingComponentOptions) {
            this.attachChanges(this.service.globalOptions);
        }
        this.listener = this.service.emitter
            .subscribe(function (item) {
            switch (item.command) {
                case 'cleanAll':
                    _this.notifications = [];
                    break;
                case 'clean':
                    _this.cleanSingle(/** @type {?} */ ((item.id)));
                    break;
                case 'set':
                    if (item.add) {
                        _this.add(/** @type {?} */ ((item.notification)));
                    }
                    else {
                        _this.defaultBehavior(item);
                    }
                    break;
                default:
                    _this.defaultBehavior(item);
                    break;
            }
            _this.cdr.detectChanges();
        });
    };
    /**
     * @return {?}
     */
    SimpleNotificationsComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.listener) {
            this.listener.unsubscribe();
        }
    };
    // Default behavior on event
    /**
     * @param {?} value
     * @return {?}
     */
    SimpleNotificationsComponent.prototype.defaultBehavior = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.notifications.splice(this.notifications.indexOf(value.notification), 1);
        this.onDestroy.emit(this.buildEmit(value.notification, false));
    };
    // Add the new notification to the notification array
    /**
     * @param {?} item
     * @return {?}
     */
    SimpleNotificationsComponent.prototype.add = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        item.createdOn = new Date();
        var /** @type {?} */ toBlock = this.preventLastDuplicates || this.preventDuplicates ? this.block(item) : false;
        // Save this as the last created notification
        this.lastNotificationCreated = item;
        // Override icon if set
        if (item.override && item.override.icons && item.override.icons[item.type]) {
            item.icon = item.override.icons[item.type];
        }
        if (!toBlock) {
            // Check if the notification should be added at the start or the end of the array
            if (this.lastOnBottom) {
                if (this.notifications.length >= this.maxStack) {
                    this.notifications.splice(0, 1);
                }
                this.notifications.push(item);
            }
            else {
                if (this.notifications.length >= this.maxStack) {
                    this.notifications.splice(this.notifications.length - 1, 1);
                }
                this.notifications.splice(0, 0, item);
            }
            this.onCreate.emit(this.buildEmit(item, true));
        }
    };
    // Check if notifications should be prevented
    /**
     * @param {?} item
     * @return {?}
     */
    SimpleNotificationsComponent.prototype.block = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        var /** @type {?} */ toCheck = item.html ? this.checkHtml : this.checkStandard;
        if (this.preventDuplicates && this.notifications.length > 0) {
            for (var /** @type {?} */ i = 0; i < this.notifications.length; i++) {
                if (toCheck(this.notifications[i], item)) {
                    return true;
                }
            }
        }
        if (this.preventLastDuplicates) {
            var /** @type {?} */ comp = void 0;
            if (this.preventLastDuplicates === 'visible' && this.notifications.length > 0) {
                if (this.lastOnBottom) {
                    comp = this.notifications[this.notifications.length - 1];
                }
                else {
                    comp = this.notifications[0];
                }
            }
            else if (this.preventLastDuplicates === 'all' && this.lastNotificationCreated) {
                comp = this.lastNotificationCreated;
            }
            else {
                return false;
            }
            return toCheck(comp, item);
        }
        return false;
    };
    /**
     * @param {?} checker
     * @param {?} item
     * @return {?}
     */
    SimpleNotificationsComponent.prototype.checkStandard = /**
     * @param {?} checker
     * @param {?} item
     * @return {?}
     */
    function (checker, item) {
        return checker.type === item.type && checker.title === item.title && checker.content === item.content;
    };
    /**
     * @param {?} checker
     * @param {?} item
     * @return {?}
     */
    SimpleNotificationsComponent.prototype.checkHtml = /**
     * @param {?} checker
     * @param {?} item
     * @return {?}
     */
    function (checker, item) {
        return checker.html ? checker.type === item.type && checker.title === item.title && checker.content === item.content && checker.html === item.html : false;
    };
    // Attach all the changes received in the options object
    /**
     * @param {?} options
     * @return {?}
     */
    SimpleNotificationsComponent.prototype.attachChanges = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        for (var /** @type {?} */ key in options) {
            if (this.hasOwnProperty(key)) {
                (/** @type {?} */ (this))[key] = options[key];
            }
            else if (key === 'icons') {
                this.service.icons = options[key];
            }
        }
    };
    /**
     * @param {?} notification
     * @param {?} to
     * @return {?}
     */
    SimpleNotificationsComponent.prototype.buildEmit = /**
     * @param {?} notification
     * @param {?} to
     * @return {?}
     */
    function (notification, to) {
        var /** @type {?} */ toEmit = {
            createdOn: notification.createdOn,
            type: notification.type,
            icon: notification.icon,
            id: notification.id
        };
        if (notification.html) {
            toEmit.html = notification.html;
        }
        else {
            toEmit.title = notification.title;
            toEmit.content = notification.content;
        }
        if (!to) {
            toEmit.destroyedOn = new Date();
        }
        return toEmit;
    };
    /**
     * @param {?} id
     * @return {?}
     */
    SimpleNotificationsComponent.prototype.cleanSingle = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        var /** @type {?} */ indexOfDelete = 0;
        var /** @type {?} */ doDelete = false;
        var /** @type {?} */ noti;
        this.notifications.forEach(function (notification, idx) {
            if (notification.id === id) {
                indexOfDelete = idx;
                noti = notification;
                doDelete = true;
            }
        });
        if (doDelete) {
            this.notifications.splice(indexOfDelete, 1);
            this.onDestroy.emit(this.buildEmit(noti, false));
        }
    };
    SimpleNotificationsComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'simple-notifications',
                    encapsulation: core.ViewEncapsulation.None,
                    template: "<div class=\"simple-notification-wrapper\" [ngClass]=\"position\"> <simple-notification *ngFor=\"let a of notifications; let i = index\" [item]=\"a\" [timeOut]=\"timeOut\" [clickToClose]=\"clickToClose\" [clickIconToClose]=\"clickIconToClose\" [maxLength]=\"maxLength\" [showProgressBar]=\"showProgressBar\" [pauseOnHover]=\"pauseOnHover\" [theClass]=\"theClass\" [rtl]=\"rtl\" [animate]=\"animate\" [position]=\"i\"> </simple-notification> </div>",
                    styles: [".simple-notification-wrapper { position: fixed; width: 300px; z-index: 1000; } .simple-notification-wrapper.left { left: 20px; } .simple-notification-wrapper.top { top: 20px; } .simple-notification-wrapper.right { right: 20px; } .simple-notification-wrapper.bottom { bottom: 20px; } .simple-notification-wrapper.center { left: 50%; transform: translateX(-50%); } .simple-notification-wrapper.middle { top: 50%; transform: translateY(-50%); } .simple-notification-wrapper.middle.center { transform: translate(-50%, -50%); } @media (max-width: 340px) { .simple-notification-wrapper { width: auto; left: 20px; right: 20px; } }"],
                    changeDetection: core.ChangeDetectionStrategy.OnPush
                },] },
    ];
    /** @nocollapse */
    SimpleNotificationsComponent.ctorParameters = function () { return [
        { type: NotificationsService, },
        { type: core.ChangeDetectorRef, },
    ]; };
    SimpleNotificationsComponent.propDecorators = {
        "options": [{ type: core.Input },],
        "onCreate": [{ type: core.Output },],
        "onDestroy": [{ type: core.Output },],
    };
    return SimpleNotificationsComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var NotificationComponent = /** @class */ (function () {
    function NotificationComponent(notificationService, domSanitizer, cdr, zone) {
        var _this = this;
        this.notificationService = notificationService;
        this.domSanitizer = domSanitizer;
        this.cdr = cdr;
        this.zone = zone;
        this.titleIsTemplate = false;
        this.contentIsTemplate = false;
        this.htmlIsTemplate = false;
        this.progressWidth = 0;
        this.stopTime = false;
        this.framesPerSecond = 40;
        this.instance = function () {
            var /** @type {?} */ now = new Date().getTime();
            if (_this.endTime < now) {
                _this.remove(); /** @type {?} */
                ((_this.item.timeoutEnd)).emit();
            }
            else if (!_this.stopTime) {
                if (_this.showProgressBar) {
                    _this.progressWidth = Math.min((now - _this.startTime + _this.sleepTime /* We add this.sleepTime just to have 100% before close */) * 100 / _this.timeOut, 100);
                }
                _this.timer = setTimeout(_this.instance, _this.sleepTime);
            }
            _this.zone.run(function () { return _this.cdr.detectChanges(); });
        };
    }
    /**
     * @return {?}
     */
    NotificationComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.item.override) {
            this.attachOverrides();
        }
        if (this.animate) {
            this.item.state = this.animate;
        }
        if (this.timeOut !== 0) {
            this.startTimeOut();
        }
        this.contentType(this.item.title, 'title');
        this.contentType(this.item.content, 'content');
        this.contentType(this.item.html, 'html');
        this.safeSvg = this.domSanitizer.bypassSecurityTrustHtml(this.icon || this.item.icon);
    };
    /**
     * @return {?}
     */
    NotificationComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        clearTimeout(this.timer);
    };
    /**
     * @return {?}
     */
    NotificationComponent.prototype.startTimeOut = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.sleepTime = 1000 / this.framesPerSecond /* ms */;
        this.startTime = new Date().getTime();
        this.endTime = this.startTime + this.timeOut;
        this.zone.runOutsideAngular(function () { return _this.timer = setTimeout(_this.instance, _this.sleepTime); });
    };
    /**
     * @return {?}
     */
    NotificationComponent.prototype.onEnter = /**
     * @return {?}
     */
    function () {
        if (this.pauseOnHover) {
            this.stopTime = true;
        }
    };
    /**
     * @return {?}
     */
    NotificationComponent.prototype.onLeave = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.pauseOnHover) {
            this.stopTime = false;
            this.zone.runOutsideAngular(function () { return setTimeout(_this.instance, _this.sleepTime); });
        }
    };
    /**
     * @param {?} $e
     * @return {?}
     */
    NotificationComponent.prototype.onClick = /**
     * @param {?} $e
     * @return {?}
     */
    function ($e) {
        /** @type {?} */ ((this.item.click)).emit($e);
        if (this.clickToClose) {
            this.remove();
        }
    };
    /**
     * @param {?} $e
     * @return {?}
     */
    NotificationComponent.prototype.onClickIcon = /**
     * @param {?} $e
     * @return {?}
     */
    function ($e) {
        /** @type {?} */ ((this.item.clickIcon)).emit($e);
        if (this.clickIconToClose) {
            this.remove();
        }
    };
    // Attach all the overrides
    /**
     * @return {?}
     */
    NotificationComponent.prototype.attachOverrides = /**
     * @return {?}
     */
    function () {
        var _this = this;
        Object.keys(this.item.override).forEach(function (a) {
            if (_this.hasOwnProperty(a)) {
                (/** @type {?} */ (_this))[a] = _this.item.override[a];
            }
        });
    };
    /**
     * @return {?}
     */
    NotificationComponent.prototype.remove = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.animate) {
            this.item.state = this.animate + 'Out';
            setTimeout(function () {
                _this.notificationService.set(_this.item, false);
            }, 310);
        }
        else {
            this.notificationService.set(this.item, false);
        }
    };
    /**
     * @param {?} item
     * @param {?} key
     * @return {?}
     */
    NotificationComponent.prototype.contentType = /**
     * @param {?} item
     * @param {?} key
     * @return {?}
     */
    function (item, key) {
        if (item instanceof core.TemplateRef) {
            this[key] = item;
        }
        else {
            this[key] = this.domSanitizer.bypassSecurityTrustHtml(item);
        }
        this[key + 'IsTemplate'] = item instanceof core.TemplateRef;
    };
    NotificationComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'simple-notification',
                    encapsulation: core.ViewEncapsulation.None,
                    animations: [
                        animations.trigger('enterLeave', [
                            // Fade
                            animations.state('fade', animations.style({ opacity: 1 })),
                            animations.transition('* => fade', [
                                animations.style({ opacity: 0 }),
                                animations.animate('400ms ease-in-out')
                            ]),
                            animations.state('fadeOut', animations.style({ opacity: 0 })),
                            animations.transition('fade => fadeOut', [
                                animations.style({ opacity: 1 }),
                                animations.animate('300ms ease-in-out')
                            ]),
                            // Enter from top
                            animations.state('fromTop', animations.style({ opacity: 1, transform: 'translateY(0)' })),
                            animations.transition('* => fromTop', [
                                animations.style({ opacity: 0, transform: 'translateY(-5%)' }),
                                animations.animate('400ms ease-in-out')
                            ]),
                            animations.state('fromTopOut', animations.style({ opacity: 0, transform: 'translateY(5%)' })),
                            animations.transition('fromTop => fromTopOut', [
                                animations.style({ opacity: 1, transform: 'translateY(0)' }),
                                animations.animate('300ms ease-in-out')
                            ]),
                            // Enter from right
                            animations.state('fromRight', animations.style({ opacity: 1, transform: 'translateX(0)' })),
                            animations.transition('* => fromRight', [
                                animations.style({ opacity: 0, transform: 'translateX(5%)' }),
                                animations.animate('400ms ease-in-out')
                            ]),
                            animations.state('fromRightOut', animations.style({ opacity: 0, transform: 'translateX(-5%)' })),
                            animations.transition('fromRight => fromRightOut', [
                                animations.style({ opacity: 1, transform: 'translateX(0)' }),
                                animations.animate('300ms ease-in-out')
                            ]),
                            // Enter from bottom
                            animations.state('fromBottom', animations.style({ opacity: 1, transform: 'translateY(0)' })),
                            animations.transition('* => fromBottom', [
                                animations.style({ opacity: 0, transform: 'translateY(5%)' }),
                                animations.animate('400ms ease-in-out')
                            ]),
                            animations.state('fromBottomOut', animations.style({ opacity: 0, transform: 'translateY(-5%)' })),
                            animations.transition('fromBottom => fromBottomOut', [
                                animations.style({ opacity: 1, transform: 'translateY(0)' }),
                                animations.animate('300ms ease-in-out')
                            ]),
                            // Enter from left
                            animations.state('fromLeft', animations.style({ opacity: 1, transform: 'translateX(0)' })),
                            animations.transition('* => fromLeft', [
                                animations.style({ opacity: 0, transform: 'translateX(-5%)' }),
                                animations.animate('400ms ease-in-out')
                            ]),
                            animations.state('fromLeftOut', animations.style({ opacity: 0, transform: 'translateX(5%)' })),
                            animations.transition('fromLeft => fromLeftOut', [
                                animations.style({ opacity: 1, transform: 'translateX(0)' }),
                                animations.animate('300ms ease-in-out')
                            ]),
                            // Rotate
                            animations.state('scale', animations.style({ opacity: 1, transform: 'scale(1)' })),
                            animations.transition('* => scale', [
                                animations.style({ opacity: 0, transform: 'scale(0)' }),
                                animations.animate('400ms ease-in-out')
                            ]),
                            animations.state('scaleOut', animations.style({ opacity: 0, transform: 'scale(0)' })),
                            animations.transition('scale => scaleOut', [
                                animations.style({ opacity: 1, transform: 'scale(1)' }),
                                animations.animate('400ms ease-in-out')
                            ]),
                            // Scale
                            animations.state('rotate', animations.style({ opacity: 1, transform: 'rotate(0deg)' })),
                            animations.transition('* => rotate', [
                                animations.style({ opacity: 0, transform: 'rotate(5deg)' }),
                                animations.animate('400ms ease-in-out')
                            ]),
                            animations.state('rotateOut', animations.style({ opacity: 0, transform: 'rotate(-5deg)' })),
                            animations.transition('rotate => rotateOut', [
                                animations.style({ opacity: 1, transform: 'rotate(0deg)' }),
                                animations.animate('400ms ease-in-out')
                            ])
                        ])
                    ],
                    template: "<div class=\"simple-notification\" [@enterLeave]=\"item.state\" (click)=\"onClick($event)\" [class]=\"theClass\" [ngClass]=\"{ 'alert': item.type === 'alert', 'error': item.type === 'error', 'warn': item.type === 'warn', 'success': item.type === 'success', 'info': item.type === 'info', 'bare': item.type === 'bare', 'rtl-mode': rtl, 'has-icon': item.icon !== 'bare' }\" (mouseenter)=\"onEnter()\" (mouseleave)=\"onLeave()\"> <div *ngIf=\"!item.html\"> <div class=\"sn-title\" *ngIf=\"titleIsTemplate else regularTitle\"> <ng-container *ngTemplateOutlet=\"title\"></ng-container> </div> <ng-template #regularTitle> <div class=\"sn-title\" [innerHTML]=\"title\"></div> </ng-template> <div class=\"sn-content\" *ngIf=\"contentIsTemplate else regularContent\"> <ng-container *ngTemplateOutlet=\"content\"></ng-container> </div> <ng-template #regularContent> <div class=\"sn-content\" [innerHTML]=\"content\"></div> </ng-template> <div class=\"icon\" *ngIf=\"item.icon !== 'bare'\" [innerHTML]=\"safeSvg\"></div> </div> <div *ngIf=\"item.html\"> <div class=\"sn-html\" *ngIf=\"htmlIsTemplate else regularHtml\"> <ng-container *ngTemplateOutlet=\"item.html\"></ng-container> </div> <ng-template #regularHtml> <div class=\"sn-content\" [innerHTML]=\"item.html\"></div> </ng-template> <div class=\"icon\" [class.icon-hover]=\"clickIconToClose\" *ngIf=\"item.icon\" [innerHTML]=\"safeSvg\" (click)=\"onClickIcon($event)\"></div> </div> <div class=\"sn-progress-loader\" *ngIf=\"showProgressBar\"> <span [ngStyle]=\"{'width': progressWidth + '%'}\"></span> </div> </div>",
                    styles: [".simple-notification { width: 100%; padding: 10px 20px; box-sizing: border-box; position: relative; float: left; margin-bottom: 10px; color: #fff; cursor: pointer; transition: all 0.5s; min-height: 70px; } .simple-notification .sn-title, .simple-notification .sn-content, .simple-notification .sn-html { margin: 0; } .simple-notification .sn-title { line-height: 30px; font-size: 20px; } .simple-notification .sn-content { font-size: 16px; line-height: 20px; } .simple-notification.has-icon .sn-title, .simple-notification.has-icon .sn-content, .simple-notification.has-icon .sn-html { padding: 0 50px 0 0; } .simple-notification .icon { position: absolute; box-sizing: border-box; top: 0; right: 0; width: 70px; height: 70px; padding: 10px; } .simple-notification .icon.icon-hover:hover { opacity: 0.5; } .simple-notification .icon svg { fill: #fff; width: 100%; height: 100%; } .simple-notification .icon svg g { fill: #fff; } .simple-notification.rtl-mode.has-icon .sn-title, .simple-notification.rtl-mode.has-icon .sn-content, .simple-notification.rtl-mode.has-icon .sn-html { padding: 0 0 0 50px; } .simple-notification.rtl-mode { direction: rtl; } .simple-notification.rtl-mode .sn-content { padding: 0 0 0 50px; } .simple-notification.rtl-mode svg { left: 0; right: auto; } .simple-notification.error { background: #F44336; } .simple-notification.success { background: #8BC34A; } .simple-notification.alert { background: #ffdb5b; } .simple-notification.info { background: #03A9F4; } .simple-notification.warn { background: #ffdb5b; } .simple-notification .sn-progress-loader { position: absolute; top: 0; left: 0; width: 100%; height: 5px; } .simple-notification .sn-progress-loader span { float: left; height: 100%; } .simple-notification.success .sn-progress-loader span { background: #689F38; } .simple-notification.error .sn-progress-loader span { background: #D32F2F; } .simple-notification.alert .sn-progress-loader span { background: #edc242; } .simple-notification.info .sn-progress-loader span { background: #0288D1; } .simple-notification.warn .sn-progress-loader span { background: #edc242; } .simple-notification.bare .sn-progress-loader span { background: #ccc; } .simple-notification.warn div .sn-title, .simple-notification.warn div .sn-content, .simple-notification.warn div .sn-html { color: #444; }"],
                    changeDetection: core.ChangeDetectionStrategy.OnPush
                },] },
    ];
    /** @nocollapse */
    NotificationComponent.ctorParameters = function () { return [
        { type: NotificationsService, },
        { type: platformBrowser.DomSanitizer, },
        { type: core.ChangeDetectorRef, },
        { type: core.NgZone, },
    ]; };
    NotificationComponent.propDecorators = {
        "timeOut": [{ type: core.Input },],
        "showProgressBar": [{ type: core.Input },],
        "pauseOnHover": [{ type: core.Input },],
        "clickToClose": [{ type: core.Input },],
        "clickIconToClose": [{ type: core.Input },],
        "maxLength": [{ type: core.Input },],
        "theClass": [{ type: core.Input },],
        "rtl": [{ type: core.Input },],
        "animate": [{ type: core.Input },],
        "position": [{ type: core.Input },],
        "item": [{ type: core.Input },],
    };
    return NotificationComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var DEFAULT_OPTIONS = {
    position: ['bottom', 'right'],
    timeOut: 0,
    showProgressBar: true,
    pauseOnHover: true,
    lastOnBottom: true,
    clickToClose: true,
    clickIconToClose: false,
    maxLength: 0,
    maxStack: 8,
    preventDuplicates: false,
    preventLastDuplicates: false,
    theClass: '',
    rtl: false,
    animate: 'fromRight',
    icons: DEFAULT_ICONS
};

var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var OPTIONS = new core.InjectionToken('options');
/**
 * @param {?} options
 * @return {?}
 */
function optionsFactory(options) {
    return __assign({}, DEFAULT_OPTIONS, options);
}
var SimpleNotificationsModule = /** @class */ (function () {
    function SimpleNotificationsModule() {
    }
    /**
     * @param {?=} options
     * @return {?}
     */
    SimpleNotificationsModule.forRoot = /**
     * @param {?=} options
     * @return {?}
     */
    function (options) {
        if (options === void 0) { options = {}; }
        return {
            ngModule: SimpleNotificationsModule,
            providers: [
                NotificationsService,
                {
                    provide: OPTIONS,
                    useValue: options
                },
                {
                    provide: 'options',
                    useFactory: optionsFactory,
                    deps: [OPTIONS]
                }
            ]
        };
    };
    SimpleNotificationsModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [
                        common.CommonModule
                    ],
                    declarations: [
                        SimpleNotificationsComponent,
                        NotificationComponent
                    ],
                    exports: [SimpleNotificationsComponent]
                },] },
    ];
    return SimpleNotificationsModule;
}());

exports.OPTIONS = OPTIONS;
exports.optionsFactory = optionsFactory;
exports.SimpleNotificationsModule = SimpleNotificationsModule;
exports.NotificationComponent = NotificationComponent;
exports.SimpleNotificationsComponent = SimpleNotificationsComponent;
exports.NotificationsService = NotificationsService;

Object.defineProperty(exports, '__esModule', { value: true });

})));


/***/ }),

/***/ "./src/app/layout/login/login-routing.module.ts":
/*!******************************************************!*\
  !*** ./src/app/layout/login/login-routing.module.ts ***!
  \******************************************************/
/*! exports provided: LoginRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginRoutingModule", function() { return LoginRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.component */ "./src/app/layout/login/login.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
    }
];
var LoginRoutingModule = /** @class */ (function () {
    function LoginRoutingModule() {
    }
    LoginRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], LoginRoutingModule);
    return LoginRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/login/login.component.html":
/*!***************************************************!*\
  !*** ./src/app/layout/login/login.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n    <div class=\"wrapper fadeInDown\">\n        <div id=\"formContent\">\n            <!-- Tabs Titles -->\n            <div *ngIf=\"!cadastroSeg\">\n                <h2 class=\"active\" (click)=\"logarSegments()\">Logar</h2>\n                <h2 class=\"inactive underlineHover\" (click)=\"cadastrarSegments()\">Cadastra-se</h2>\n            </div>\n\n            <div *ngIf=\"cadastroSeg\">\n                <h2 class=\"inactive underlineHover\" (click)=\"logarSegments()\">Logar</h2>\n                <h2 class=\"active\" (click)=\"cadastrar()\">Cadastra-se</h2>\n            </div>\n\n            <!-- Icon -->\n            <div class=\"fadeIn first\">\n                <img src=\"http://movecode.com/wp-content/uploads/2018/04/logo_cinza.png\" id=\"icon\" alt=\"User Icon\" />\n            </div>\n\n            <!-- Register Form -->\n            <div *ngIf=\"cadastroSeg\">\n                <input type=\"text\" class=\"fadeIn third\" name=\"nome\" [(ngModel)]=\"nome\" placeholder=\"Nome\">\n                <input type=\"text\" class=\"fadeIn second\" name=\"login\" [(ngModel)]=\"email\" placeholder=\"Email\">\n                <input type=\"password\" class=\"fadeIn third\" name=\"senha\" [(ngModel)]=\"senha\" placeholder=\"Senha\">\n                <input type=\"button\" class=\"fadeIn fourth\" value=\"Cadastrar\" (click)=\"cadastrar()\">\n            </div>\n\n            <!-- Login Form -->\n            <div *ngIf=\"!cadastroSeg\">\n                <input type=\"text\" class=\"fadeIn second\" name=\"login\" [(ngModel)]=\"email\" placeholder=\"Email\">\n                <input type=\"password\" class=\"fadeIn third\" name=\"senha\" [(ngModel)]=\"senha\" placeholder=\"Senha\">\n                <input type=\"button\" class=\"fadeIn fourth\" value=\"Entrar\" (click)=\"logar()\">\n                <div (click)=\"onLoginClick()\">\n                    <img class=\"facebook\" src=\"../../../assets/images/facebook.png\" />\n                </div>\n                <br>\n            </div>\n            <!-- Remind Passowrd -->\n            <div id=\"formFooter\">\n                <a class=\"underlineHover\" href=\"#\">Esquece sua senha?</a>\n            </div>\n        </div>\n    </div>\n    <simple-notifications></simple-notifications>\n</body>\n"

/***/ }),

/***/ "./src/app/layout/login/login.component.scss":
/*!***************************************************!*\
  !*** ./src/app/layout/login/login.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Poppins\");\n/* BASIC */\n.danger {\n  color: red; }\n.facebook {\n  width: 220px;\n  height: 40px; }\nbody {\n  font-family: \"Poppins\", sans-serif;\n  height: 100vh;\n  background-image: url(\"https://www.wexpayables.com/wp-content/uploads/2018/01/system-AI-1024x396.jpg\"); }\na {\n  color: #92badd;\n  display: inline-block;\n  text-decoration: none;\n  font-weight: 400; }\nh2 {\n  text-align: center;\n  font-size: 16px;\n  font-weight: 600;\n  text-transform: uppercase;\n  display: inline-block;\n  margin: 40px 8px 10px 8px;\n  color: #cccccc; }\n/* STRUCTURE */\n.wrapper {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  justify-content: center;\n  width: 100%;\n  min-height: 100%;\n  padding: 20px; }\n#formContent {\n  border-radius: 10px 10px 10px 10px;\n  background: #fff;\n  padding: 30px;\n  width: 90%;\n  max-width: 450px;\n  position: relative;\n  padding: 0px;\n  box-shadow: 0 30px 60px 0 rgba(0, 0, 0, 0.3);\n  text-align: center; }\n#formFooter {\n  background-color: #f6f6f6;\n  border-top: 1px solid #dce8f1;\n  padding: 25px;\n  text-align: center;\n  border-radius: 0 0 10px 10px; }\n/* TABS */\nh2.inactive {\n  color: #cccccc; }\nh2.active {\n  color: #0d0d0d;\n  border-bottom: 2px solid #5fbae9; }\n/* FORM TYPOGRAPHY*/\ninput[type=button],\ninput[type=submit],\ninput[type=reset] {\n  background-color: #56baed;\n  border: none;\n  color: white;\n  padding: 15px 80px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  text-transform: uppercase;\n  font-size: 13px;\n  box-shadow: 0 10px 30px 0 rgba(95, 186, 233, 0.4);\n  border-radius: 5px 5px 5px 5px;\n  margin: 5px 20px 40px 20px;\n  transition: all 0.3s ease-in-out; }\ninput[type=button]:hover,\ninput[type=submit]:hover,\ninput[type=reset]:hover {\n  background-color: #39ace7; }\ninput[type=button]:active,\ninput[type=submit]:active,\ninput[type=reset]:active {\n  -webkit-transform: scale(0.95);\n  transform: scale(0.95); }\ninput[type=text] {\n  background-color: #f6f6f6;\n  border: none;\n  color: #0d0d0d;\n  padding: 15px 32px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px;\n  margin: 5px;\n  width: 85%;\n  border: 2px solid #f6f6f6;\n  transition: all 0.5s ease-in-out;\n  border-radius: 5px 5px 5px 5px; }\ninput[type=text]:focus {\n  background-color: #fff;\n  border-bottom: 2px solid #5fbae9; }\ninput[type=text]:placeholder {\n  color: #cccccc; }\ninput[type=password] {\n  background-color: #f6f6f6;\n  border: none;\n  color: #0d0d0d;\n  padding: 15px 32px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px;\n  margin: 5px;\n  width: 85%;\n  border: 2px solid #f6f6f6;\n  transition: all 0.5s ease-in-out;\n  border-radius: 5px 5px 5px 5px; }\ninput[type=password]:focus {\n  background-color: #fff;\n  border-bottom: 2px solid #5fbae9; }\ninput[type=password]:placeholder {\n  color: #cccccc; }\n/* ANIMATIONS */\n/* Simple CSS3 Fade-in-down Animation */\n.fadeInDown {\n  -webkit-animation-name: fadeInDown;\n  animation-name: fadeInDown;\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both; }\n@-webkit-keyframes fadeInDown {\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0); }\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none; } }\n@keyframes fadeInDown {\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0); }\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none; } }\n/* Simple CSS3 Fade-in Animation */\n@-webkit-keyframes fadeIn {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n@keyframes fadeIn {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n.fadeIn {\n  opacity: 0;\n  -webkit-animation: fadeIn ease-in 1;\n  animation: fadeIn ease-in 1;\n  -webkit-animation-fill-mode: forwards;\n  animation-fill-mode: forwards;\n  -webkit-animation-duration: 0.4s;\n  animation-duration: 0.4s; }\n.fadeIn.first {\n  -webkit-animation-delay: 0.4s;\n  animation-delay: 0.4s; }\n.fadeIn.second {\n  -webkit-animation-delay: 0.6s;\n  animation-delay: 0.6s; }\n.fadeIn.third {\n  -webkit-animation-delay: 0.4s;\n  animation-delay: 0.4s; }\n.fadeIn.fourth {\n  -webkit-animation-delay: 0.4s;\n  animation-delay: 0.4s; }\n/* Simple CSS3 Fade-in Animation */\n.underlineHover:after {\n  display: block;\n  left: 0;\n  bottom: -10px;\n  width: 0;\n  height: 2px;\n  background-color: #56baed;\n  content: \"\";\n  transition: width 0.2s; }\n.underlineHover:hover {\n  color: #0d0d0d; }\n.underlineHover:hover:after {\n  width: 100%; }\n/* OTHERS */\n*:focus {\n  outline: none; }\n#icon {\n  width: 60%; }\n* {\n  box-sizing: border-box; }\n"

/***/ }),

/***/ "./src/app/layout/login/login.component.ts":
/*!*************************************************!*\
  !*** ./src/app/layout/login/login.component.ts ***!
  \*************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_cadastro_cadastro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/cadastro/cadastro */ "./src/app/shared/services/cadastro/cadastro.ts");
/* harmony import */ var _shared_services_login_logar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/login/logar */ "./src/app/shared/services/login/logar.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_ativarComponents__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/ativarComponents */ "./src/app/shared/services/ativarComponents.ts");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular2-notifications */ "./node_modules/angular2-notifications/angular2-notifications.umd.js");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angular2_notifications__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = /** @class */ (function () {
    // tslint:disable-next-line:max-line-length
    function LoginComponent(cadastroService, logarService, router, showComponente, notif) {
        this.cadastroService = cadastroService;
        this.logarService = logarService;
        this.router = router;
        this.showComponente = showComponente;
        this.notif = notif;
    }
    LoginComponent.prototype.sucess = function (msg) {
        this.notif.success('Sucesso', msg, {
            timeOut: 3000,
            showProgressBar: true,
            pauseOnHover: false,
            clickToClose: true,
            maxLength: 50
        });
    };
    LoginComponent.prototype.erro = function (msg) {
        this.notif.error('Erro', msg, {
            timeOut: 3000,
            showProgressBar: true,
            pauseOnHover: false,
            clickToClose: true,
            maxLength: 50
        });
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.cadastrarSegments = function () {
        this.cadastroSeg = true;
    };
    LoginComponent.prototype.logarSegments = function () {
        this.cadastroSeg = false;
    };
    LoginComponent.prototype.cadastrar = function () {
        var _this = this;
        if (this.email && this.senha && this.nome) {
            var obj = {
                email: this.email,
                senha: this.senha,
                nome: this.nome
            };
            this.cadastroService.cadastrar(obj).then(function (data) {
                console.log(data);
                var response = data.resultado;
                if (response === 'sucesso') {
                    _this.sucess('Cadastrado com sucesso!');
                    _this.cadastroSeg = false;
                }
                else if (response === 'erro: email existente') {
                    _this.erro('Email já existente!');
                }
            });
        }
        else {
            this.erro('Preencha todos os campos');
        }
    };
    LoginComponent.prototype.logar = function () {
        var _this = this;
        var obj = {
            email: this.email,
            senha: this.senha
        };
        this.logarService.logar(obj).then(function (data) {
            console.log(data);
            var response = data.resultado;
            if (response === 'sucesso') {
                var tam = data.retorno.length;
                if (tam > 0) {
                    _this.showComponente.show = true;
                    localStorage.setItem('email', data.retorno[0].email);
                    localStorage.setItem('nome', data.retorno[0].nome);
                    _this.router.navigate(['bolsonaro']);
                }
                else {
                    _this.erro('Erro: verifique seu email ou senha');
                }
            }
            else {
                _this.erro('Erro: verifique seu email ou senha');
            }
        });
    };
    LoginComponent.prototype.onLoginClick = function () {
        var _this = this;
        // this.router.navigate(['./home']);
        FB.getLoginStatus(function (response) {
            console.log(response);
            if (response.status === 'connected') {
                _this.router.navigate(['./bolsonaro']);
            }
            else {
                FB.login(function (loginResponse) {
                    _this.router.navigate(['./bolsonaro']);
                });
            }
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/layout/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/layout/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_cadastro_cadastro__WEBPACK_IMPORTED_MODULE_1__["CadastroService"],
            _shared_services_login_logar__WEBPACK_IMPORTED_MODULE_2__["LogarService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _shared_services_ativarComponents__WEBPACK_IMPORTED_MODULE_4__["AtivarComponents"],
            angular2_notifications__WEBPACK_IMPORTED_MODULE_5__["NotificationsService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/layout/login/login.module.ts":
/*!**********************************************!*\
  !*** ./src/app/layout/login/login.module.ts ***!
  \**********************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.component */ "./src/app/layout/login/login.component.ts");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/layout/login/login-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular2-notifications */ "./node_modules/angular2-notifications/angular2-notifications.umd.js");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angular2_notifications__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_3__["LoginRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], angular2_notifications__WEBPACK_IMPORTED_MODULE_5__["SimpleNotificationsModule"].forRoot()],
            declarations: [_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]]
        })
    ], LoginModule);
    return LoginModule;
}());



/***/ })

}]);
//# sourceMappingURL=login-login-module.js.map