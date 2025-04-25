var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define(["require", "exports", "./BaseController"], function (require, exports, BaseController_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * @namespace ui5training.controller
     */
    var Main = /** @class */ (function (_super) {
        __extends(Main, _super);
        function Main() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Main.prototype.onInit = function () {
            var oModel = this.getOwnerComponent().getModel();
            oModel.metadataLoaded().then(function () {
                var oObject = {
                    ProductID: "12345",
                    ProductName: "Some Product",
                    Category: "Some Category",
                    Price: 123
                };
                var sKey = oModel.createKey("/Products", oObject);
                console.log("Generated Key:", sKey);
                oModel.create("/Products", oObject, {
                    success: function (oData) {
                        console.log("Data created successfully:", oData);
                    },
                    error: function (oError) {
                        console.error("Error creating data:", oError);
                    }
                });
            }).catch(function (err) {
                console.error("Metadata failed to load", err);
            });
        };
        return Main;
    }(BaseController_1.default));
    exports.default = Main;
});
