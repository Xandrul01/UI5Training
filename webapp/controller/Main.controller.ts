import MessageBox from "sap/m/MessageBox";
import BaseController from "./BaseController";
import ODataModel from "sap/ui/model/odata/v2/ODataModel";

/**
 * @namespace ui5training.controller
 */
export default class Main extends BaseController {

	public onInit(): void {
		const oModel = this.getOwnerComponent().getModel() as ODataModel;
	
		oModel.metadataLoaded().then(() => {
			const oObject = {
				ProductID: "12345",
				ProductName: "Some Product",
				Category: "Some Category",
				Price: 123
			};
	
			const sKey = oModel.createKey("/Products", oObject);
			console.log("Generated Key:", sKey);
	
			oModel.create("/Products", oObject, {
				success: (oData: object) => {
					console.log("Data created successfully:", oData);
				},
				error: (oError: object) => {
					console.error("Error creating data:", oError);
				}
			});
		}).catch((err) => {
			console.error("Metadata failed to load", err);
		});
	}
	

}
