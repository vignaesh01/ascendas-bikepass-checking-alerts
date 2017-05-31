/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
		document.addEventListener("offline", this.onOffline, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        //app.receivedEvent('deviceready');
		//  document.removeEventListener('deviceready', this.onDeviceReady, false);
		
		/* admob.setOptions({
			publisherId:  "ca-app-pub-7830155450711523/8193228147"    
      });
      
      // Start showing banners (atomatic when autoShowBanner is set to true)
      admob.createBannerView();*/
	 /* var networkState = navigator.connection.type;
	  console.log('networkState '+networkState);
	  if(networkState==Connection.NONE){
	   var scope=angular.element(document.getElementById('ngContainer')).scope();
	   scope.networkStatus();
	   
	  }*/
	  FCMPlugin.onNotification(function(data){
    if(data.wasTapped){
      //Notification was received on device tray and tapped by the user.
      //alert( JSON.stringify(data) );
    }else{
      //Notification was received in foreground. Maybe the user needs to be notified.
      //alert( JSON.stringify(data) );
	  navigator.notification.alert(
    data.message,  // message
    function(){},         // callback
    'Alert'         // title
    );
	
	var scope=angular.element(document.getElementById('ngContainer')).scope();
		 scope.getCurrentStatus();
    }
});
    },
	onOffline : function(){
		 var scope=angular.element(document.getElementById('ngContainer')).scope();
		 scope.networkStatus();
	},
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};
