sap.ui.controller("xrouting2test.fullPage1", {

	/**
	* Called when a controller is instantiated and its View controls (if available) are already created.
	* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
	* @memberOf xrouting2test.fullPage1


	/**
	* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
	* (NOT before the first rendering! onInit() is used for that one!).
	* @memberOf xrouting2test.fullPage1
	*/
	//	onBeforeRendering: function() {
	//
	//	},

	/**
	* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
	* This hook is the same one that SAPUI5 controls get after being rendered.
	* @memberOf xrouting2test.fullPage1
	*/
	//	onAfterRendering: function() {
	//
	//	},

	/**
	* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
	* @memberOf xrouting2test.fullPage1
	*/
	//	onExit: function() {
	//
	//	},


	onInit : function() {
		var sServiceUrl = "http://dewdfgwp01325.wdf.sap.corp:8000/sap/opu/odata/sap/ZAMBASSADOR_ADMIN_SRV";

		var oModel = new sap.ui.model.odata.ODataModel(sServiceUrl, true);
		var oModel2 = new sap.ui.model.odata.ODataModel(sServiceUrl, true);

		var oJsonModel = new sap.ui.model.json.JSONModel();
		var oJsonModel2 = new sap.ui.model.json.JSONModel();

		var oTable = sap.ui.getCore().byId("AdminTable");
		var oTable2 = sap.ui.getCore().byId("AdminTableReq");

		oModel.read("/AdminEventListSet?", null, null, true, function(oData, repsonse) {
			oJsonModel.setData(oData);
		//console.log(oJsonModel);
		});

		oModel2.read("/AdminJoinDetailsGetReqSet?", null, null, true, function(oData, repsonse) {
			oJsonModel2.setData(oData);
		
		});
		oTable.setModel(oJsonModel);
		oTable2.setModel(oJsonModel2);
		//console.log(oJsonModel2);

	},

	on1stpage : function() {
		var router = sap.ui.core.UIComponent.getRouterFor(this);
		router.navTo("fullPage", {
			id : 1
		}, false);
	},

	////cancel/////
	Cancel : function() {

		sap.ui.getCore().byId("Dialog1").close();

	},
	Cancel2 : function() {

		sap.ui.getCore().byId("Dialog2").close();

	},
	///////////

	//open dialog to update and delete
	Admin_CRUD : function(evt) {

		//		console.log('admin crud');

		sap.ui.getCore().byId("Dialog1").open();

		var oSelectedItem = evt.getParameter("listItem");

		var sEID = oSelectedItem.getBindingContext().getProperty("Eventid");

		var sLoc = oSelectedItem.getBindingContext().getProperty("Location");

		var sUni = oSelectedItem.getBindingContext().getProperty("University");

		var sTime = oSelectedItem.getBindingContext().getProperty("EventTime");

		var sDate = oSelectedItem.getBindingContext().getProperty("EventDate");

		var sOrg = oSelectedItem.getBindingContext().getProperty("Organiser");

		var sDes = oSelectedItem.getBindingContext().getProperty("Description");

		//console.log(sCategory);




		sap.ui.getCore().byId("EID").setValue(sEID);

		sap.ui.getCore().byId("EID").setEnabled(false);

		sap.ui.getCore().byId("Location").setValue(sLoc);

		sap.ui.getCore().byId("University").setValue(sUni);

		sap.ui.getCore().byId("Time").setValue(sTime);

		sap.ui.getCore().byId("Date").setValue(sDate);

		sap.ui.getCore().byId("Organiser").setValue(sOrg);

		sap.ui.getCore().byId("Description").setValue(sDes);

	},

	Admin_CRUD_2 : function() {

		//		console.log('admin crud');

		sap.ui.getCore().byId("Dialog2").open();





	},
	
	
	Admin_CRUD_3 : function(evt) {

		//		console.log('admin crud');

		sap.ui.getCore().byId("Dialog3").open();

		var oSelectedItem = evt.getParameter("listItem");

		var sJID = oSelectedItem.getBindingContext().getProperty("Joinid");

		var sEID = oSelectedItem.getBindingContext().getProperty("Eventid");

		var sInum = oSelectedItem.getBindingContext().getProperty("Inumber");

		var sCon = oSelectedItem.getBindingContext().getProperty("Confirmed");

		var sEmail = oSelectedItem.getBindingContext().getProperty("Email");

		var sOrg = oSelectedItem.getBindingContext().getProperty("Organiser");

		var sUniversity = oSelectedItem.getBindingContext().getProperty("University");
		
		var sED = oSelectedItem.getBindingContext().getProperty("EventDate");
		
		var sDJ = oSelectedItem.getBindingContext().getProperty("DateJoined");
		
		var sVal = oSelectedItem.getBindingContext().getProperty("Value");
		

		console.log(sVal);




		sap.ui.getCore().byId("req_jid").setText(sJID);

		sap.ui.getCore().byId("req_eid").setText(sEID);

		sap.ui.getCore().byId("req_inum").setText(sInum);

		sap.ui.getCore().byId("req_con").setText(sCon);

		sap.ui.getCore().byId("req_email").setText(sEmail);

		sap.ui.getCore().byId("req_org").setText(sOrg);

		sap.ui.getCore().byId("req_uni").setText(sUniversity);
		
		sap.ui.getCore().byId("req_ed").setText(sED);
		
		sap.ui.getCore().byId("req_dj").setText(sDJ);
		
		sap.ui.getCore().byId("req_val").setText(sVal);


	},


	Admin_C : function() {
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

	Admin_U : function() {

		this.Update();


	},


	Admin_D : function() {
		this.Delete();

	},
	
	Admin_UP : function() {
		this.Update_req();

	},
	
	Admin_DEL : function() {
		this.Delete_req();

	},


	Create : function(email) {
		console.log('Create');





		var oEntry = {};

		oEntry.Eventid = ""; //sap.ui.getCore().byId("PID2").getValue();

		oEntry.Location = sap.ui.getCore().byId("Location2").getValue();

		oEntry.University = sap.ui.getCore().byId("University2").getValue();

		oEntry.EventTime = sap.ui.getCore().byId("Time2").getValue();

		oEntry.Organiser = ""; //email;

		oEntry.Description = sap.ui.getCore().byId("Description2").getValue();

		oEntry.EventDate = sap.ui.getCore().byId("Date2").getValue();


		var sServiceUrl = "http://dewdfgwp01325.wdf.sap.corp:8000/sap/opu/odata/sap/ZAMBASSADOR_ADMIN_SRV";


		var oModel = new sap.ui.model.odata.ODataModel(sServiceUrl, true);


		var oJsonModel = new sap.ui.model.json.JSONModel();

		console.log(oEntry);




		oModel.read("/AdminEventListSet?", null, null, true, function(oData, repsonse) {


			OData.request({
				requestUri : "http://dewdfgwp01325.wdf.sap.corp:8000/sap/opu/odata/SAP/ZAMBASSADOR_ADMIN_SRV/AdminEventListSet",
				method : "GET",
				headers : {
					"X-Requested-With" : "XMLHttpRequest",
					"Content-Type" : "application/atom+xml",
					"DataServiceVersion" : "2.0",
					"X-CSRF-Token" : "Fetch"
				}
			},
				function(data, response) {
					header_xcsrf_token = response.headers['x-csrf-token'];
					var oHeaders = {
						"x-csrf-token" : header_xcsrf_token,
						'Accept' : 'application/json',
					};

					OData.request({
						requestUri : "http://dewdfgwp01325.wdf.sap.corp:8000/sap/opu/odata/SAP/ZAMBASSADOR_ADMIN_SRV/AdminEventListSet",

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



	Update : function() {
		//		console.log('Update');




		var oEntry = {};

		oEntry.Eventid = sap.ui.getCore().byId("EID").getValue();

		oEntry.Location = sap.ui.getCore().byId("Location").getValue();

		oEntry.University = sap.ui.getCore().byId("University").getValue();

		oEntry.EventTime = sap.ui.getCore().byId("Time").getValue();

		oEntry.EventDate = sap.ui.getCore().byId("Date").getValue();

		//oEntry.Organiser = sap.ui.getCore().byId("Organizer").getValue();

		oEntry.Description = sap.ui.getCore().byId("Description").getValue();


	//	console.log(oEntry);

		OData.request({
			requestUri : "http://dewdfgwp01325.wdf.sap.corp:8000/sap/opu/odata/SAP/ZAMBASSADOR_ADMIN_SRV/AdminEventListSet('" + oEntry.Eventid + "')",
			method : "GET",
			headers : {
				"X-Requested-With" : "XMLHttpRequest",
				"Content-Type" : "application/atom+xml",
				"DataServiceVersion" : "2.0",
				"X-CSRF-Token" : "Fetch"
			}
		},
			function(data, response) {
				header_xcsrf_token = response.headers['x-csrf-token'];
				var oHeaders = {
					"x-csrf-token" : header_xcsrf_token,
					'Accept' : 'application/json',
				};

				OData.request({
					requestUri : "http://dewdfgwp01325.wdf.sap.corp:8000/sap/opu/odata/SAP/ZAMBASSADOR_ADMIN_SRV/AdminEventListSet('" + oEntry.Eventid + "')",

					method : "PUT",
					headers : oHeaders,
					data : oEntry
				},
					function(data, request) {
						sap.m.MessageToast.show('Update Success');
						location.reload(true);
					}, function(err) {
						sap.m.MessageToast.show('Update Failed');
					});
			}, function(err) {
				var request = err.request;
				var response = err.response;
				sap.m.MessageToast.show("Error in Get -- Request " + request + " Response " + response);
			});

	},

	Delete : function() {
		var oEntry = {};
		oEntry.Eventid = sap.ui.getCore().byId("EID").getValue();

		OData.request({
			requestUri : "http://dewdfgwp01325.wdf.sap.corp:8000/sap/opu/odata/SAP/ZAMBASSADOR_ADMIN_SRV/AdminEventListSet('" + oEntry.Eventid + "')",
			method : "GET",
			headers : {
				"X-Requested-With" : "XMLHttpRequest",
				"Content-Type" : "application/atom+xml",
				"DataServiceVersion" : "2.0",
				"X-CSRF-Token" : "Fetch"
			}
		},
			function(data, response) {
				header_xcsrf_token = response.headers['x-csrf-token'];
				var oHeaders = {
					"x-csrf-token" : header_xcsrf_token,
					'Accept' : 'application/json',
				};

				OData.request({
					requestUri : "http://dewdfgwp01325.wdf.sap.corp:8000/sap/opu/odata/SAP/ZAMBASSADOR_ADMIN_SRV/AdminEventListSet('" + oEntry.Eventid + "')",

					method : "DELETE",
					headers : oHeaders,
					data : oEntry
				},
					function(data, request) {
						sap.m.MessageToast.show('Delete Success');
						location.reload(true);
					}, function(err) {
						sap.m.MessageToast.show('Delete Failed');
					});
			}, function(err) {
				var request = err.request;
				var response = err.response;
				sap.m.MessageToast.show("Error in Get -- Request " + request + " Response " + response);
			});


	},
	
	
	Update_req : function() {
		//		console.log('Update');

		var oEntry = {};

		oEntry.Joinid = sap.ui.getCore().byId("req_jid").getText();

		oEntry.Eventid = sap.ui.getCore().byId("req_eid").getText();

		oEntry.Inumber = sap.ui.getCore().byId("req_inum").getText();

		oEntry.Confirmed = sap.ui.getCore().byId("req_con").getText();

		oEntry.Email = sap.ui.getCore().byId("req_email").getText();

		oEntry.Organiser = sap.ui.getCore().byId("req_org").getText();

		oEntry.University = sap.ui.getCore().byId("req_uni").getText();
		
		oEntry.EventDate = sap.ui.getCore().byId("req_ed").getText();
		
		oEntry.DateJoined = sap.ui.getCore().byId("req_dj").getText();
		
		oEntry.Role = "";
		
		oEntry.Value = Number(sap.ui.getCore().byId("req_val").getText());



		//console.log(oEntry);

		OData.request({
			requestUri : "http://dewdfgwp01325.wdf.sap.corp:8000/sap/opu/odata/SAP/ZAMBASSADOR_ADMIN_SRV/AdminJoinDetailsGetReqSet('" + oEntry.Joinid + "')",
			method : "GET",
			headers : {
				"X-Requested-With" : "XMLHttpRequest",
				"Content-Type" : "application/atom+xml",
				"DataServiceVersion" : "2.0",
				"X-CSRF-Token" : "Fetch"
			}
		},
			function(data, response) {
				header_xcsrf_token = response.headers['x-csrf-token'];
				var oHeaders = {
					"x-csrf-token" : header_xcsrf_token,
					'Accept' : 'application/json',
				};

				OData.request({
					requestUri : "http://dewdfgwp01325.wdf.sap.corp:8000/sap/opu/odata/SAP/ZAMBASSADOR_ADMIN_SRV/AdminJoinDetailsGetReqSet('" + oEntry.Joinid + "')",

					method : "PUT",
					headers : oHeaders,
					data : oEntry
				},
					function(data, request) {
						sap.m.MessageToast.show('Update Success');
						location.reload(true);
					}, function(err) {
						sap.m.MessageToast.show('Update Failed');
					});
			}, function(err) {
				var request = err.request;
				var response = err.response;
				sap.m.MessageToast.show("Error in Get -- Request " + request + " Response " + response);
			});

	},

	Delete_req : function() {
		var oEntry = {};
		oEntry.Joinid = sap.ui.getCore().byId("req_jid").getText();

		OData.request({
			requestUri : "http://dewdfgwp01325.wdf.sap.corp:8000/sap/opu/odata/SAP/ZAMBASSADOR_ADMIN_SRV/AdminJoinDetailsSet('" + oEntry.Joinid + "')",
			method : "GET",
			headers : {
				"X-Requested-With" : "XMLHttpRequest",
				"Content-Type" : "application/atom+xml",
				"DataServiceVersion" : "2.0",
				"X-CSRF-Token" : "Fetch"
			}
		},
			function(data, response) {
				header_xcsrf_token = response.headers['x-csrf-token'];
				var oHeaders = {
					"x-csrf-token" : header_xcsrf_token,
					'Accept' : 'application/json',
				};

				OData.request({
					requestUri : "http://dewdfgwp01325.wdf.sap.corp:8000/sap/opu/odata/SAP/ZAMBASSADOR_ADMIN_SRV/AdminJoinDetailsSet('" + oEntry.Joinid + "')",

					method : "DELETE",
					headers : oHeaders,
					data : oEntry
				},
					function(data, request) {
						sap.m.MessageToast.show('Delete Success');
						location.reload(true);
					}, function(err) {
						sap.m.MessageToast.show('Delete Failed');
					});
			}, function(err) {
				var request = err.request;
				var response = err.response;
				sap.m.MessageToast.show("Error in Get -- Request " + request + " Response " + response);
			});


	},

	Cancel : function() {

		sap.ui.getCore().byId("Dialog1").close();




	},


	Cancel2 : function() {


		sap.ui.getCore().byId("Dialog2").close();


	},
	
	Cancel3 : function() {


		sap.ui.getCore().byId("Dialog3").close();


	}
});