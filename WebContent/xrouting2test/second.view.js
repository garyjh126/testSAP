sap.ui.jsview("xrouting2test.second", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf xrouting2test.second
	*/
	getControllerName : function() {
		return "xrouting2test.second";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf xrouting2test.second
	*/
	createContent : function(oController) {



		var oDate = new Date();
		var date = new sap.m.DatePicker({
			id : "dateId",
			minDate : oDate,
			change : function(evt) {
				//oController.dateSelect(evt);

			}
		});


		var eid = new sap.m.Text({
			maxLength : 20,
			text : "",
			id : "EvtID",
		//textAlign : "Left"
		});

		

		var oBtnDisplayAttendees = new sap.m.Button("DisplayAttendees", {
			text : "Display Participants",
			tap : [ oController.DisplayAttendees, oController ]
		});
		
		var oBtnCan = new sap.m.Button("EventCancel", {
			text : "Cancel",
			tap : [ oController.Cancel, oController ]
		});

		var oBtnJoin = new sap.m.Button("Join_Event", {
			text : "Join",
			tap : [ oController.Event_Join, oController ]
		});

		var text = new sap.m.Text({
			id : "textId",
			text : "Filter Events By Date"
		});

		var text2 = new sap.m.Text({
			id : "text2Id",
			text : "Filter Events By Category"
		});



		var oDialog1 = new sap.m.Dialog("EventDialog", {
			title : "Event Details",

			modal : true,

			contentWidth : "1em",
			
			content : [



				new sap.m.Bar({
					contentLeft : [


						new sap.m.Label({
							text : "Description: "
						}),

						new sap.m.Text({
							maxLength : 20,
							text : "",
							id : "EventDescription",
						//textAlign : "Left"
						}),

					]
				}),
				new sap.m.Bar({
					contentLeft : [

						new sap.m.Label({
							text : "Time: "
						}),

						new sap.m.Text({
							maxLength : 20,
							text : "",
							id : "EventTime",
						//textAlign : "Left"
						}),


					]
				}),
				new sap.m.Bar({
					contentLeft : [


						new sap.m.Label({
							text : "Organiser: "
						}),

						new sap.m.Text({
							maxLength : 20,
							text : "",
							id : "EventOrganizer",
						//textAlign : "Left"
						}),



					]
				}),
				new sap.m.Bar({
					contentLeft : [


						new sap.m.Label({
							text : "Location: "
						}),

						new sap.m.Text({
							maxLength : 20,
							text : "",
							id : "EventLocation",
						//textAlign : "Left"
						}),

					]
				}),

				new sap.m.Bar({
					contentLeft : [


						new sap.m.Label({
							text : "Role: "
						}),

						new sap.m.Select({
							id : "mySelectMenu"
						}),

					]
				}),


				oBtnJoin,
				oBtnCan, 
				oBtnDisplayAttendees

			]
		});



		var search = new sap.m.SearchField({
			liveChange : [ oController.onSearch, oController ],
			width : "100%"
		});




		var oList = new sap.m.List({
			id : "EventList",
			headerText : "Events",
			itemPress : [ oController.JoinDialog, oController ]
		});








		var oTemplateListItem = new sap.m.StandardListItem({
			title : "{University}",
			description : "{Eventid}",
			info : "{Organiser}",
			type : sap.m.ListType.Active, 
			//press: [ oController.j, oController ]
		});



		var oFilters = null;




		oList.bindItems("/results", oTemplateListItem, null, oFilters);

		var imag = new sap.m.Image( {
	          src : "images/logo.png",
	          height : "40px"
	     });
		
		var oBar = new sap.m.Bar( {
	          contentLeft : [ ],
		          
	     contentMiddle : [ new sap.m.Label( {
	          text : "Events Page",
	          textAlign : "Left",
	          design : "Bold"
	     }).addStyleClass("tit") ],
	     contentRight : [imag]
	});


		
		//-----Gary's changes-------//
		
		

		var tableOnClick = new sap.m.Table({
			id : "tableOnClick",

			//itemPress : [ oController.JoinDialog, oController ],
			
			//showOverlay: true,
			
			columns : [

				new sap.m.Column({
					width : "1em",

					header : new sap.m.Label({
						text : "INumber"
					})
				}),
				
				
				
				new sap.m.Column({
					width : "1em",

					header : new sap.m.Label({
						text : "Date Joined"
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
						text : "Value"
					})
				}),
				
				new sap.m.Column({
					width : "1em",

					header : new sap.m.Label({
						text : "Email"
					})
				})
				

			]
		});
		
		var templateOnC = new sap.m.ColumnListItem({
			type : sap.m.ListType.Active,
			



			cells : [

				new sap.m.Text({
					text : "{Inumber}"
				}),

			
				new sap.m.Text({
					text : "{DateJoined}"
				}),

				new sap.m.Text({
					text : "{Role}"
				}), 
				
				new sap.m.Text({
					text : "{Value}"
				}),
				
				new sap.m.Text({
					text : "{Email}"
				}),

			]
		});
		
		var filterOnC = null;


		tableOnClick.bindItems("/results", templateOnC, null, filterOnC);
		
		//--------------------------//
		
		
		
		var menuPage = new sap.m.Page({
			title : "Events Page",
			content : [
				//oButton,
				//text,
				//date,
				//text2,
				search,
				oList

			]
		});
		
		menuPage.setCustomHeader(oBar);
		
		return menuPage;
	}
});