sap.ui.jsview("xrouting2test.fullPage2", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf xrouting2test.fullPage2
	*/
	getControllerName : function() {
		return "xrouting2test.fullPage2";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf xrouting2test.fullPage2
	*/
	createContent : function(oController) {

		var oButton = new sap.m.Button({
			text : "Home",
			press : [ oController.on1stpage, oController ],
		});
		var oButton2 = new sap.m.Button({
			text : "Update Email",
            icon: icon="sap-icon://email",
			press : [ oController.Email, oController ],
		});
		
		var points = new sap.m.Label({
			id : "points",
			text : "Points"
		});

		
		var title = new sap.m.Label({
			text : "My Joined Events"
		}).addStyleClass("word3");
		var oTable = new sap.m.Table("MyEvents", {
			inset : true,
			//itemPress : [ oController.ItemPress, oController ],
			columns : [

				new sap.m.Column({
					header : new sap.m.Label({
						text : "University"
					}),
					hAlign : "Left",
					width: "100px",
					demandPopin : true,
					popinDisplay : "Block",
					minScreenWidth : sap.m.ScreenSize.Medium
				}),
				new sap.m.Column({
					header : new sap.m.Label({
					text : "Date"
					}),
					hAlign : "Left",
					width : "100px",
					demandPopin : true,
					popinDisplay : "Block",
					minScreenWidth : sap.m.ScreenSize.Medium
				}),
				new sap.m.Column({
					header : new sap.m.Label({
						text : "Organiser"
					}),
					hAlign : "Left",
					width : "100px",
					demandPopin : true,
					popinDisplay : "Block",
					minScreenWidth : sap.m.ScreenSize.Medium
				}),

				new sap.m.Column({
					header : new sap.m.Label({
						text : "Organiser Email"
					}),
					hAlign : "Left",
					width : "100px",
					demandPopin : true,
					popinDisplay : "Block",
					minScreenWidth : sap.m.ScreenSize.Medium
				}),
				new sap.m.Column({
					header : new sap.m.Label({
						text : "Role"
					}),
					hAlign : "Left",
					width : "100px",
					demandPopin : true,
					popinDisplay : "Block",
					minScreenWidth : sap.m.ScreenSize.Medium
				}),

			]
		});


    

		var template = new sap.m.ColumnListItem({


			type: sap.m.ListType.Active,

	

			cells : [

				new sap.m.Text( {
					text : "{University}"
				}),

				new sap.m.Text({
					text : "{EventDate}"
				}),

				new sap.m.Text({
					text : "{Organiser}"
				}),

				new sap.m.Text({
					text : "{Email}"
				}),
				new sap.m.Text({
					text : "{Role}"
				})


			]
		});
	
		var imag = new sap.m.Image( {
	          src : "images/logo.png",
	          height : "40px"
	     });
		
		var oBar = new sap.m.Bar( {
   			contentLeft : [new sap.m.Button({

                icon: icon="sap-icon://nav-back",
                
                press: [ oController.on1stpage, oController ]

            })], 

		          
	     contentMiddle : [ new sap.m.Label( {
	          text : "Profile Page",
	          textAlign : "Left",
	          design : "Bold"
	     }).addStyleClass("tit") ],
	     contentRight : [imag]
	});

		var oFilters = null;

		oTable.bindItems("/results", template, null, oFilters);

		var menuPage = new sap.m.Page({
			title : "Profile Page",
			headerContent : oButton,
			content : [
				
				title,
				oTable,
				oButton2,
				points

			]
		});
		
		menuPage.setCustomHeader(oBar);
		
 		return menuPage;
	}
});