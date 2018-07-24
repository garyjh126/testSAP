sap.ui.controller("xrouting2test.fullPage", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf xrouting2test.fullPage
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf xrouting2test.fullPage
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf xrouting2test.fullPage
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf xrouting2test.fullPage
*/
//	onExit: function() {
//
//	}
	
	onFullPage : function() {
		sap.ui.core.UIComponent.getRouterFor(this).navTo("first",{});
		sap.ui.core.UIComponent.getRouterFor(this).navTo("second",{});
	},
	onFullPage1 : function() {
		sap.ui.core.UIComponent.getRouterFor(this).navTo("fullPage1",{});
		//alert("hello");
	},
	onFullPage2 : function() {
		sap.ui.core.UIComponent.getRouterFor(this).navTo("fullPage2",{});
		//alert("hello");
	}

});