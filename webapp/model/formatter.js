define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        formatValue: function (value) {
            return value === null || value === void 0 ? void 0 : value.toUpperCase();
        }
    };
});
