import { initMockServer } from "./model/mockServer";
import ComponentContainer from "sap/ui/core/ComponentContainer";

// 🔥 PORNEȘTE MOCK SERVERUL înainte de UI5
if (location.hostname === "localhost") {
	initMockServer();
}

// 🔁 Bootstrap UI5 după ce mock-ul a fost activat
sap.ui.getCore().attachInit(() => {
	new ComponentContainer({
		name: "ui5training",
		settings: {
			id: "ui5training"
		},
		async: true
	}).placeAt("content");
});
