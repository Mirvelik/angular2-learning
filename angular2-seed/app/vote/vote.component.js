System.register(["angular2/core"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var VoteComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            /**
             * Created by mir on 5/28/16.
             */
            VoteComponent = (function () {
                function VoteComponent() {
                    this.step = 0;
                    this.vote = 10;
                }
                VoteComponent.prototype.plus = function () {
                    if (this.step <= 0) {
                        this.step += 1;
                        this.vote++;
                    }
                };
                VoteComponent.prototype.minus = function () {
                    if (this.step >= 0) {
                        this.step -= 1;
                        this.vote--;
                    }
                };
                VoteComponent = __decorate([
                    core_1.Component({
                        selector: 'vote',
                        templateUrl: 'app/vote/vote.template.html',
                        styles: ["\n        .my-vote{\n            width: 20px;\n        }\n        "]
                    }), 
                    __metadata('design:paramtypes', [])
                ], VoteComponent);
                return VoteComponent;
            }());
            exports_1("VoteComponent", VoteComponent);
        }
    }
});
//# sourceMappingURL=vote.component.js.map