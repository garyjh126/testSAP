
sap.ui.controller("xrouting2test.second", {

	/**
	* Called when a controller is instantiated and its View controls (if available) are already created.
	* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
	* @memberOf xrouting2test.second
	*/


	/**
	* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
	* (NOT before the first rendering! onInit() is used for that one!).
	* @memberOf xrouting2test.second
	*/
	//	onBeforeRendering: function() {
	//
	//	},

	/**
	* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
	* This hook is the same one that SAPUI5 controls get after being rendered.
	* @memberOf xrouting2test.second
	*/
	//	onAfterRendering: function() {
	//
	//	},

	/**
	* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
	* @memberOf xrouting2test.second
	*/
	//	onExit: function() {
	//
	//	},


	onInit : function() {
		
		
		
		var sServiceUrl = "http://dewdfgwp01325.wdf.sap.corp:8000/sap/opu/odata/sap/ZAMBASSADOR_ADMIN_SRV";


		var oModel = new sap.ui.model.odata.ODataModel(sServiceUrl, true);


		var oJsonModel = new sap.ui.model.json.JSONModel();

		var oList = sap.ui.getCore().byId("EventList");

		oModel.read("/AdminEventListSet?", null, null, true, function(oData, repsonse) {
			oJsonModel.setData(oData);
		//console.log(oJsonModel);
		});
		oList.setModel(oJsonModel);
		
		var mModel = new sap.ui.model.json.JSONModel("model/your_data.json"); //initialise your model from a JSON file
		sap.ui.getCore().setModel(mModel, "your_data_model"); //set model with a name to use later
		var mod = new sap.ui.getCore().getModel("your_data_model");
		var oItemSelectTemplate = new sap.ui.core.Item({
			key : "{dkey}",
			text : "{dtext}"
		}); //Define the template for items, which will be inserted inside a select element
		var mySelectMenu = sap.ui.getCore().byId("mySelectMenu"); //Get a reference to the UI element, Select to bind data
		//console.log(mySelectMenu);
		mySelectMenu.setModel(mod); // set model your_data_model to Select element
		mySelectMenu.bindAggregation("items", "/mRoot", oItemSelectTemplate); //bind aggregation, item to Select element with the template selected above

		
		
	},

	onSearch : function(oEvt) {

		// add filter for search
		var aFilters = [];
		var sQuery = oEvt.getSource().getValue();
		var oItem = oEvt.getSource();
		var oContext = oItem.getBindingContext();
		//var sName = oContext.getProperty("Name");
		//var sPath = oContext.getProperty("Path");
		//console.log(oContext);
		if (sQuery && sQuery.length > 0) {
			var filter = new sap.ui.model.Filter("University", sap.ui.model.FilterOperator.Contains, sQuery);
			aFilters.push(filter);
		}

		// update list binding
		var list = sap.ui.getCore().byId("EventList");
		var binding = list.getBinding("items");
		binding.filter(aFilters, "Application");
	},


	JoinDialog : function(evt) {

		
		
		sap.ui.getCore().byId("EventDialog").open();

		var oSelectedItem = evt.getParameter("listItem");

		//console.log(oSelectedItem);

		var sEID = oSelectedItem.getBindingContext().getProperty("Eventid");

		var sLoc = oSelectedItem.getBindingContext().getProperty("Location");

		var sUni = oSelectedItem.getBindingContext().getProperty("University");

		var sTime = oSelectedItem.getBindingContext().getProperty("EventTime");

		var sDate = oSelectedItem.getBindingContext().getProperty("EventDate");

		var sOrg = oSelectedItem.getBindingContext().getProperty("Organiser");

		var sDes = oSelectedItem.getBindingContext().getProperty("Description");

		console.log(sEID);

		sap.ui.getCore().byId("EventDescription").setText(sDes);

		sap.ui.getCore().byId("EventTime").setText(sTime);

		sap.ui.getCore().byId("EventOrganizer").setText(sOrg);

		sap.ui.getCore().byId("EventLocation").setText(sLoc);

		sap.ui.getCore().byId("EvtID").setText(sEID);
		
		
		
		
		
		//CREATE OR FIND FUNCTION MODULE WHICH GETS ALL USERS AT ONE PARTICULAR EVENT 
		//Populate table following click of 'Display Participants' click
		
		var usersOnClickURL = "http://dewdfgwp01325.wdf.sap.corp:8000/sap/opu/odata/SAP/ZAMBASSADOR_USR_SRV";
		var uocModel = new sap.ui.model.odata.ODataModel(usersOnClickURL, true);
		var uocJsonModel = new sap.ui.model.json.JSONModel();
		var uocTable = sap.ui.getCore().byId("tableOnClick");	
		var st = "'" + sEID + "'";
		//var req = "/UserEventsSet('" + sEID.toString() + "')";
	//	req = "/UserEventsSet?";
		//console.log(req);
		
		uocModel.read("/EventsSetSet?$filter=Eventid eq "+st, null, null, true, function(oData, repsonse) {
			uocJsonModel.setData(oData);
		//console.log(oJsonModel);
		});

		
		/*uocModel.read("UserEventsSet('" + sEID.toString() + "')", null, null, true, function(oData, repsonse) {


			OData.request({
				requestUri : "http://dewdfgwp01325.wdf.sap.corp:8000/sap/opu/odata/SAP/ZAMBASSADOR_USR_SRV/UserEventsSet('" + sEID.toString() + "')",
				method : "GET",
				headers : {
					"X-Requested-With" : "XMLHttpRequest",
					"Content-Type" : "application/atom+xml",
					"DataServiceVersion" : "2.0",
					"X-CSRF-Token" : "Fetch"
				}
			},
				function(data, response) {
					uocJsonModel.setData(oData);
					console.log(oData);
				})
		});*/

		
		
		uocTable.setModel(uocJsonModel);
		
		

	},
	
	j: function(evt){
		/*var eventList = sap.ui.getCore().byId("EventList");
		var clicked = evt.getSource();
		var eventID = clicked.mProperties.description;
		console.log(clicked);*/
		
		
	},

	
	DisplayAttendees: function() {
		var ed = sap.ui.getCore().byId("EventDialog");
		var tab = sap.ui.getCore().byId("tableOnClick");
		
		//var c = new sap.ui.core.Control;
		var currentWidth = ed.getContentWidth();
		
		var temp = "";
		for(var i = 0; i < currentWidth.length; i++){
			if(currentWidth.charAt(i)!="e"){
				temp += currentWidth.charAt(i);
			}
			else {
				break;
			}
			
			
		}
		var cssSize =  parseInt(temp) + 70;
		var feedB = "" + cssSize + "em";
		/*if(initialChange){
			ed.setContentWidth(feedB);
		}
			*/
		if(parseInt(temp) < 71 ){
			ed.setContentWidth(feedB);	
		}
		
		
		console.log("New Size: "+ ed.getContentWidth())
		ed.addContent(tab);
	},
	
	
		
		
		
	
	
	Event_Join : function() {
		var y = "http://dewdfgwp01325.wdf.sap.corp:8000/sap/bc/ui2/start_up";
		var xmlHttp = null;
		var email;
		xmlHttp = new XMLHttpRequest();
		xmlHttp.onreadystatechange = function() {
			if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
				oUserData = JSON.parse(xmlHttp.responseText);
				email = oUserData.email;


				if (oUserData.id == "I348462") {
					//sap.ui.getCore().byId("Admin").setVisible(true);

				}
			}
		};
		xmlHttp.open("GET", y, false);
		xmlHttp.send(null);
		this.Create(email);


	},

	Create : function(email) {


		var oDate = new Date();
		
		var role = sap.ui.getCore().byId("mySelectMenu").getSelectedItem().mProperties.text;

		var oEntry = {};


		oEntry.Eventid = sap.ui.getCore().byId("EvtID").getText();

		oEntry.Location = ""; //sap.ui.getCore().byId("Location2").getValue();

		oEntry.University = ""; //sap.ui.getCore().byId("University2").getValue();

		oEntry.EventTime = ""; //sap.ui.getCore().byId("Time2").getValue();

		oEntry.Organiser = sap.ui.getCore().byId("EventOrganizer").getText();

		oEntry.Description = ""; //sap.ui.getCore().byId("Description2").getValue();

		oEntry.EventDate = ""; //sap.ui.getCore().byId("Date2").getValue();
		
		oEntry.Role = role.toUpperCase(); //sap.ui.getCore().byId("Date2").getValue();
		

		
		
		console.log(sap.ui.getCore().byId("mySelectMenu").getSelectedItem().mProperties.text);



		var sServiceUrl = "http://dewdfgwp01325.wdf.sap.corp:8000/sap/opu/odata/sap/ZAMBASSADOR_USR_SRV";


		var oModel = new sap.ui.model.odata.ODataModel(sServiceUrl, true);


		var oJsonModel = new sap.ui.model.json.JSONModel();

		//console.log(oEntry);



		oModel.read("/JoinDetailsSet?", null, null, true, function(oData, repsonse) {


			OData.request({
				requestUri : "http://dewdfgwp01325.wdf.sap.corp:8000/sap/opu/odata/SAP/ZAMBASSADOR_USR_SRV/JoinDetailsSet",
				method : "GET",
				headers : {
					"X-Requested-With" : "XMLHttpRequest",
					"Content-Type" : "application/atom+xml",
					"DataServiceVersion" : "2.0",
					"X-CSRF-Token" : "Fetch"
				}
			},
				function(data, response) {
					console.log(data);

					header_xcsrf_token = response.headers['x-csrf-token'];
					var oHeaders = {
						"x-csrf-token" : header_xcsrf_token,
						'Accept' : 'application/json',
					};

					OData.request({
						requestUri : "http://dewdfgwp01325.wdf.sap.corp:8000/sap/opu/odata/SAP/ZAMBASSADOR_USR_SRV/JoinDetailsPostSet",

						method : "POST",
						headers : oHeaders,
						data : oEntry
					},
						function(data, request) {
							sap.m.MessageToast.show('Product Created');
							location.reload(true);
						}, function(err) {
							sap.m.MessageToast.show('Product Create Failed');
						});

				}, function(err) {
					var request = err.request;
					var response = err.response;
					sap.m.MessageToast.show("Error in Get -- Request " + request + " Response " + response);



				});
		});
		
		


	},


	on2ndpage : function() {
		var router = sap.ui.core.UIComponent.getRouterFor(this);
		router.navTo("third", {
			id : 1
		}, false);
	},


	Cancel : function() {

		sap.ui.getCore().byId("EventDialog").close();

	},
});