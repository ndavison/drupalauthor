/**
 *
 *
 *
 *
 */
System.register(['angular2/core', 'angular2/http', './config'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, config_1;
    var DrupalService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (config_1_1) {
                config_1 = config_1_1;
            }],
        execute: function() {
            DrupalService = (function () {
                function DrupalService(http, config) {
                    this.http = http;
                    this.config = config;
                    this._headers = new http_1.Headers({ 'Authorization': 'Basic YWRtaW46YWRtaW4=' });
                }
                DrupalService.prototype.getContentTypes = function () {
                    return this.http.get(this.config.drupalRoot + 'entity/node/bundles?_format=hal_json', { headers: this._headers }).map(function (res) { return res.json(); });
                };
                DrupalService.prototype.saveNode = function () { };
                DrupalService.prototype.authenticate = function () { };
                DrupalService.prototype.logout = function () { };
                DrupalService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http, config_1.Config])
                ], DrupalService);
                return DrupalService;
            })();
            exports_1("DrupalService", DrupalService);
            ;
        }
    }
});
//# sourceMappingURL=drupal.service.js.map