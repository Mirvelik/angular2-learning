/**
 * Created by mir on 5/28/16.
 */
System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var TwitterService;
    return {
        setters:[],
        execute: function() {
            TwitterService = (function () {
                function TwitterService() {
                }
                TwitterService.prototype.getTweets = function () {
                    return [
                        { id: 1, name: 'first' },
                        { id: 2, name: 'second' },
                        { id: 3, name: 'third' }
                    ];
                };
                return TwitterService;
            }());
            exports_1("TwitterService", TwitterService);
        }
    }
});
//# sourceMappingURL=twitter.service.js.map