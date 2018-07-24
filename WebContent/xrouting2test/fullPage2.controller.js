sap.ui.controller("xrouting2test.fullPage2", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf xrouting2test.fullPage2
*/


/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf xrouting2test.fullPage2
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf xrouting2test.fullPage2
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf xrouting2test.fullPage2
*/
//	onExit: function() {
//
//	}
	
	onInit: function() {
		
		var sServiceUrl = "http://dewdfgwp01325.wdf.sap.corp:8000/sap/opu/odata/sap/ZAMBASSADOR_USR_SRV";
		var oModel = new sap.ui.model.odata.ODataModel(sServiceUrl, true);		
		var oModel2 = new sap.ui.model.odata.ODataModel(sServiceUrl, true);
		
		var oJsonModel = new sap.ui.model.json.JSONModel();
		var oJsonModel2 = new sap.ui.model.json.JSONModel();


		var oTable = sap.ui.getCore().byId("MyEvents");
		var points = sap.ui.getCore().byId("points");
		


		oModel.read("/JoinDetailsUserSet?", null, null, true, function(oData, repsonse) {
			oJsonModel.setData(oData);
		//console.log(oJsonModel);
		});
		oTable.setModel(oJsonModel);
		
		oModel2.read("/pointsSet?", null, null, true, function(oData, repsonse) {
			var p = String(oData.results[0].Points);
			console.log(p);
			oJsonModel2.setData(oData);
			points.setText(p);
			
		//console.log(oJsonModel2);
		});
		
		
		
		



	},
	on1stpage:function(){
		var router = sap.ui.core.UIComponent.getRouterFor(this);
		router.navTo("fullPage", {id:1}, false);
	}

});