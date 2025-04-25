define(["require", "exports", "./model/mockServer", "sap/ui/core/ComponentContainer"], function (require, exports, mockServer_1, ComponentContainer_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // 🔥 PORNEȘTE MOCK SERVERUL înainte de UI5
    if (location.hostname === "localhost") {
        (0, mockServer_1.initMockServer)();
    }
    // 🔁 Bootstrap UI5 după ce mock-ul a fost activat
    sap.ui.getCore().attachInit(function () {
        new ComponentContainer_1.default({
            name: "ui5training",
            settings: {
                id: "ui5training"
            },
            async: true
        }).placeAt("content");
    });
});
