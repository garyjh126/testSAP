sap.ui.jsview("xrouting2test.fullPage1", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf xrouting2test.fullPage1
	*/
	getControllerName : function() {
		return "xrouting2test.fullPage1";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf xrouting2test.fullPage1
	*/
	createContent : function(oController) {

		/*
		 * 	FOR DATE
		 */
		var d = new Date();
		var year = d.getFullYear();
		var month = d.getMonth();
		var day = d.getDate();
		/*
		 */

		var oButton = new sap.m.Button({
			text : "Home",
			press : [ oController.on1stpage, oController ],
		});
		var text = new sap.m.Text({
			text : "My Events",
		});
		var text2 = new sap.m.Text({
			text : "Event Join Requests",
		});

		text.addStyleClass("word1")
		text2.addStyleClass("word1");

		var req_jid = new sap.m.Text({
			text : "",
			id : "req_jid",
		});
		var req_eid = new sap.m.Text({
			text : "",
			id : "req_eid",
		});
		var req_inum = new sap.m.Text({
			text : "",
			id : "req_inum",
		});

		var req_con = new sap.m.Text({
			text : "",
			id : "req_con",
		});

		var req_email = new sap.m.Text({
			text : "",
			id : "req_email",
		});

		var req_org = new sap.m.Text({
			text : "",
			id : "req_org",
		});

		var req_uni = new sap.m.Text({
			text : "",
			id : "req_uni",
		});

		var req_ed = new sap.m.Text({
			text : "",
			id : "req_ed",
		});

		var req_dj = new sap.m.Text({
			text : "",
			id : "req_dj",
		});

		var req_val = new sap.m.Text({
			text : "",
			id : "req_val",
		});



		var oBtnCan = new sap.m.Button("Cancel", {
			text : "Cancel",

			tap : [ oController.Cancel, oController ]
		});

		var oBtnCan2 = new sap.m.Button("Cancel2", {
			text : "Cancel",

			tap : [ oController.Cancel2, oController ]
		});

		var oBtnCan3 = new sap.m.Button("Cancel3", {
			text : "Cancel",

			tap : [ oController.Cancel3, oController ]
		});

		var oBtnAdm_C = new sap.m.Button("Admin_C", {
			text : "Create",
			icon : icon = "sap-icon://create",
			tap : [ oController.Admin_CRUD_2, oController ]
		});

		var oBtnAdm_U = new sap.m.Button("Admin_U", {
			text : "Update",

			tap : [ oController.Admin_U, oController ]
		});

		var oBtnAdm_D = new sap.m.Button("Admin_D", {
			text : "Delete",

			tap : [ oController.Admin_D, oController ]
		});

		var oBtnSav = new sap.m.Button("Admin_C_Btn", {
			text : "Create",

			tap : [ oController.Admin_C, oController ]
		});
		var oBtnUp = new sap.m.Button("Admin_UP_Btn", {
			text : "Accept",

			tap : [ oController.Admin_UP, oController ]
		});

		var oBtnDel = new sap.m.Button("Admin_DEL_Btn", {
			text : "Delete",

			tap : [ oController.Admin_DEL, oController ]
		});

		

		var oDialog1 = new sap.m.Dialog("Dialog1", {
			title : "Admin Update/Delete",

			modal : true,

			contentWidth : "1em",




			content : [
				new sap.m.Label({
					text : "Enter Product Id"
				}),

				new sap.m.Input({
					maxLength : 20,

					id : "EID"
				}),


				new sap.m.Label({
					text : "Enter Location"
				}),

				new sap.m.Input({
					maxLength : 20,

					id : "Location"
				}),

				new sap.m.Label({
					text : "Enter University"
				}),

				new sap.m.Input({
					maxLength : 20,

					id : "University"
				}),

				new sap.m.Label({
					text : "Enter Time"
				}),

				new sap.m.TimePicker("Time", {
					valueFormat : "HH:mm",
					displayFormat : "HH:mm",
					change : "handleChange",
					width : "100%"
				}),
				

				new sap.m.Label({
					text : "Enter Date"
				}),
				new sap.m.DatePicker("Date", {
					minDate : new Date(),
					placeholder : " "
				}),
				

				new sap.m.Label({
					text : "Enter Organiser"
				}),
				new sap.m.Input({
					maxLength : 20,

					id : "Organiser"
				}),

				new sap.m.Label({
					text : "Enter Description"
				}),
				new sap.m.Input({
					maxLength : 20,

					id : "Description"
				}),

				oBtnAdm_U,
				oBtnAdm_D,
				oBtnCan

			]
		});

		var oDialog2 = new sap.m.Dialog("Dialog2", {
			title : "Admin Create",

			modal : true,

			contentWidth : "1em",

			content : [

				new sap.m.Label({
					text : "Enter Location"
				}),

				new sap.m.Input({
					maxLength : 20,

					id : "Location2"
				}),

				new sap.m.Label({
					text : "Enter University"
				}),

				new sap.m.Input({
					maxLength : 20,

					id : "University2"
				}),

				new sap.m.Label({
					text : "Enter Time"
				}),

				new sap.m.TimePicker("Time2", {
					valueFormat : "HH:mm",
					displayFormat : "HH:mm",
					change : "handleChange",
					width : "100%"
				}),
				new sap.m.Label({
					text : "Enter Date"
				}),

				new sap.m.DatePicker("Date2", {
					minDate : new Date(),
					placeholder : " "
				}),

				new sap.m.Label({
					text : "Enter Description"
				}),

				new sap.m.Input({
					maxLength : 20,

					id : "Description2"
				}),
				oBtnSav,
				oBtnCan2

			]
		});

		var oDialog3 = new sap.m.Dialog("Dialog3", {
			title : "Request",

			modal : true,

			contentWidth : "1em",

			content : [

				oBtnUp,
				oBtnDel,
				oBtnCan3

			]
		});
		var oTable = new sap.m.Table({
			id : "AdminTable",

			itemPress : [ oController.Admin_CRUD, oController ],

			columns : [

				new sap.m.Column({
					width : "1em",

					header : new sap.m.Label({
						text : "EventID"
					})
				}),

				new sap.m.Column({
					width : "1em",

					header : new sap.m.Label({
						text : "Location"
					})
				}),

				new sap.m.Column({
					width : "1em",

					header : new sap.m.Label({
						text : "Uni"
					})
				}),

				new sap.m.Column({
					width : "1em",

					header : new sap.m.Label({
						text : "Time"
					})
				}),

				new sap.m.Column({
					width : "1em",

					header : new sap.m.Label({
						text : "Date"
					})
				}),

				new sap.m.Column({
					width : "1em",

					header : new sap.m.Label({
						text : "Organiser"
					})
				}),
				new sap.m.Column({
					width : "1em",

					header : new sap.m.Label({
						text : "Description"
					})
				})


			]
		});


		var template = new sap.m.ColumnListItem({
			type : sap.m.ListType.Active,



			cells : [

				new sap.m.Text({
					text : "{Eventid}"
				}),

				new sap.m.Text({
					text : "{Location}"
				}),

				new sap.m.Text({
					text : "{University}"
				}),

				new sap.m.Text({
					text : "{EventTime}"
				}),

				new sap.m.Text({
					text : "{EventDate}"
				}),

				new sap.m.Text({
					text : "{Organiser}"
				}),

				new sap.m.Text({
					text : "{Description}"
				}),


			]
		});

		var oTable2 = new sap.m.Table({
			id : "AdminTableReq",

			itemPress : [ oController.Admin_CRUD_3, oController ],

			columns : [

				new sap.m.Column({
					width : "1em",

					header : new sap.m.Label({
						text : "Inumber"
					})
				}),

				new sap.m.Column({
					width : "1em",

					header : new sap.m.Label({
						text : "Email"
					})
				}),

				new sap.m.Column({
					width : "1em",

					header : new sap.m.Label({
						text : "Role"
					})
				}),
				new sap.m.Column({
					width : "1em",

					header : new sap.m.Label({
						text : "University"
					})
				}),

				new sap.m.Column({
					width : "1em",

					header : new sap.m.Label({
						text : "Date Of Event"
					})
				}),

				new sap.m.Column({
					width : "1em",

					header : new sap.m.Label({
						text : "Date Request Made"
					})
				}),
			]
		});

		var template2 = new sap.m.ColumnListItem({
			type : sap.m.ListType.Active,



			cells : [

				new sap.m.Text({
					text : "{Inumber}"
				}),

				new sap.m.Text({
					text : "{Email}"
				}),

				new sap.m.Text({
					text : "{Role}"
				}),

				new sap.m.Text({
					text : "{University}"
				}),

				new sap.m.Text({
					text : "{EventDate}"
				}),

				new sap.m.Text({
					text : "{DateJoined}"
				})




			]
		});

		
		

		var oFilters = null;
		var oFilters2 = null;


		oTable.bindItems("/results", template, null, oFilters);
		oTable2.bindItems("/results", template2, null, oFilters2);

		var menuPage = new sap.m.Page({
			title : "Admin Page",
			headerContent : oButton,
			content : [

				text,
				oTable,
				text2,
				oTable2,
				oBtnAdm_C

			]
		});

		var imag = new sap.m.Image({
			src : "images/logo.png",
			height : "40px"
		});

		var oBar = new sap.m.Bar({
			contentLeft : [ new sap.m.Button({
				icon : icon = "sap-icon://nav-back",

				press : [ oController.on1stpage, oController ]
			}) ],

			contentMiddle : [ new sap.m.Label({
				text : "Admin Page",
				textAlign : "Left",
				design : "Bold"
			}).addStyleClass("tit") ],
			contentRight : [ imag ]
		});

		menuPage.setCustomHeader(oBar);

		return menuPage;
	}
});