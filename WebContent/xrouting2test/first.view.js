sap.ui.jsview("xrouting2test.first", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf xrouting2test.first
	*/
	getControllerName : function() {
		return "xrouting2test.first";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf xrouting2test.first
	*/
	createContent : function(oController) {
		
		var l1 = new sap.m.StandardListItem({
			title : "Home",
            icon: icon="sap-icon://home",
			type : sap.m.ListType.Navigation,
			press : [ oController.on1stpage, oController ],
		});
		var l2 = new sap.m.StandardListItem({
			title : "My Profile",
            icon: icon="sap-icon://person-placeholder",
			type : sap.m.ListType.Navigation,
			press : [ oController.onProfilepage, oController ],
		});
		var l3 = new sap.m.StandardListItem({
			title : "Contact",
            icon: icon="sap-icon://business-card",
			type : sap.m.ListType.Navigation,
			press : [ oController.onContactpage, oController ],
		});
		
		var l4 = new sap.m.StandardListItem({
			title : "Send Event",
            icon: icon="sap-icon://email",
			type : sap.m.ListType.Navigation,
			press : [ oController.sendEmail, oController  ],
		});

		var oButton = new sap.m.Button({
			text : "Home",
			press : [ oController.on1stpage, oController ],
		});
		var oButton2 = new sap.m.Button({
			text : "My Profile",
			press : [ oController.onProfilepage, oController ],
		});
		var oButton3 = new sap.m.Button({
			text : "Contact",
			press : [ oController.onContactpage, oController ],
		});
		
		var menuPage = new sap.m.Page({
			title : "Navigation",
			content : [
				l1,l2,l3,l4
			//oButton,
			//oButton2,
			//oButton3
			]
		});
		
		var oBar = new sap.m.Bar( {
   			contentLeft : [], 
		          
	     contentMiddle : [ new sap.m.Label( {
	          text : "Navigation",
	          textAlign : "Left",
	          design : "Bold"
	     }).addStyleClass("tit") ],
	     contentRight : []
	});
		
		menuPage.setCustomHeader(oBar);
		
 		return menuPage;
	}
});