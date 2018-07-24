sap.ui.jsview("xrouting2test.fullPage", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf xrouting2test.fullPage
	*/ 
	getControllerName : function() {
		return "xrouting2test.fullPage";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf xrouting2test.fullPage
	*/ 
	createContent : function(oController) {
		
		var tile1 = new sap.m.StandardTile({
      	  title : "Events",
    	  info : "See University Events",    	  
          icon: icon="sap-icon://activities",
    	  press: [oController.onFullPage, oController],
        });

		var tile2 = new sap.m.StandardTile({
	      	  title : "Admin",
	          icon: icon="sap-icon://key-user-settings",
	    	  info : "Admin Page",
	    	  press: [oController.onFullPage1, oController],
	   });
		var tile3 = new sap.m.StandardTile({
	      	  title : "My Profile",
	          icon: icon="sap-icon://person-placeholder",
	    	  info : "See Events Joined",
	    	  press: [oController.onFullPage2, oController],
	   });
		
		tile1.addStyleClass("administrationTile");
		tile2.addStyleClass("administrationTile");
		tile3.addStyleClass("administrationTile");
		
		var imag = new sap.m.Image( {
	          src : "images/logo.png",
	          height : "40px"
	     });
		
		var oBar = new sap.m.Bar( {
	          contentLeft : [ ],
		          
	     contentMiddle : [ new sap.m.Label( {
	          text : "University Events",
	          textAlign : "Left",
	          design : "Bold"
	     }).addStyleClass("tit2") ],
	     contentRight : [imag]
	});
		
		
		var menuPage = new sap.m.Page({
			title: "University Events",
			content: [
			           tile1, tile2, tile3
			]
		});
		
		menuPage.setCustomHeader(oBar);
		
 		return menuPage;
 		
	}

});