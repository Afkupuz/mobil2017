
var M2XKey = '774fde4a4cec6cabe8b2c9836e59803e';
var M2XURL = 'https://api-m2x.att.com/v2';
var M2XPrimaryEndpoint = '/devices/36f5f661e6e41ac4ee6d03745667d278';
var M2XStreams = '/streams';
var M2XStats = '/stats';
var M2XOnlyOneValue = '/values?limit=1';
var M2XThreeValues = '/values?limit=3';


var TEMPURL = M2XURL + M2XPrimaryEndpoint + M2XStreams + '/temp' + M2XOnlyOneValue;
//Temperature
function Temp(){
	$.ajax({
	    dataType: "text",
	    type: "GET",
	    dataType: "json",
	    url: TEMPURL,
	    headers: {  'X-M2X-KEY' : M2XKey,
	                'Cache-Control' : 'no-cache'
	    },
	    success: function(data){
	        console.log(data); 
	        document.getElementById('TEMP').innerHTML = data.values[0].value;

	    },
	    error: function(xhr, textStatus, errorThrown){
	               //alert('request failed');
	               console.log(errorThrown);
	    }
	})

}
var TEMPSTATURL = M2XURL + M2XPrimaryEndpoint + M2XStreams + '/temp' + M2XStats;
//Temperature Stats
function TempStat(){
	$.ajax({
	    dataType: "text",
	    type: "GET",
	    dataType: "json",
	    url: TEMPSTATURL,
	    headers: {  'X-M2X-KEY' : M2XKey,
	                'Cache-Control' : 'no-cache'
	    },
	    success: function(data){
	        console.log(data);
	        console.log("here it be" + JSON.stringify(data));
            document.getElementById('MAX_TEMP').innerHTML = data.stats.max; // Max
            document.getElementById('AVERAGE_TEMP').innerHTML = data.stats.avg.toFixed(2); //Average
            document.getElementById('STDEV_TEMP').innerHTML = data.stats.stddev.toFixed(3); //Standard Deviation


	    },
	    error: function(xhr, textStatus, errorThrown){
	               //alert('request failed');
	               console.log(errorThrown);
	    }
	})

}
var HUMURL = M2XURL + M2XPrimaryEndpoint + M2XStreams + '/humidity' + M2XOnlyOneValue;
//Humidity
function Humidity(){
	$.ajax({
	    dataType: "text",
	    type: "GET",
	    dataType: "json",
	    url: HUMURL,
	    headers: {  'X-M2X-KEY' : M2XKey,
	                'Cache-Control' : 'no-cache'
	    },
	    success: function(data){
	        console.log(data); 
	        document.getElementById('HUMIDITY').innerHTML = data.values[0].value;

	    },
	    error: function(xhr, textStatus, errorThrown){
	               //alert('request failed');
	               console.log(errorThrown);
	    }
	})

}
var HUMSTATSURL = M2XURL + M2XPrimaryEndpoint + M2XStreams + '/humidity' + M2XStats;
//Humidity
function HumidityStat(){
	$.ajax({
	    dataType: "text",
	    type: "GET",
	    dataType: "json",
	    url: HUMSTATSURL,
	    headers: {  'X-M2X-KEY' : M2XKey,
	                'Cache-Control' : 'no-cache'
	    },
	    success: function(data){
	        console.log(data);
	        console.log("here it be" + JSON.stringify(data));
            document.getElementById('MAX_HUM').innerHTML = data.stats.max; // Max
            document.getElementById('AVERAGE_HUM').innerHTML = data.stats.avg.toFixed(2); //Average
            document.getElementById('STDEV_HUM').innerHTML = data.stats.stddev.toFixed(3); //Standard Deviation

	    },
	    error: function(xhr, textStatus, errorThrown){
	               //alert('request failed');
	               console.log(errorThrown);
	    }
	})

}
var AccelX = M2XURL + M2XPrimaryEndpoint + M2XStreams + '/accelX' + M2XThreeValues;
var AccelY = M2XURL + M2XPrimaryEndpoint + M2XStreams + '/accelY' + M2XThreeValues;
var AccelZ = M2XURL + M2XPrimaryEndpoint + M2XStreams + '/accelZ' + M2XThreeValues;
//Movement
function Accel(){
	$.ajax({
	    dataType: "text",
	    type: "GET",
	    dataType: "json",
	    url: AccelX,
	    headers: {  'X-M2X-KEY' : M2XKey,
	                'Cache-Control' : 'no-cache'
	    },
	    success: function(data){
	        console.log(data); 
	        var x0 = data.values[0].value;
	        var x1 = data.values[1].value;
	        var x2 = data.values[2].value;
	        var xtotal = x0+x1+x2
	        $.ajax({
			    dataType: "text",
			    type: "GET",
			    dataType: "json",
			    url: AccelY,
			    headers: {  'X-M2X-KEY' : M2XKey,
			                'Cache-Control' : 'no-cache'
			    },
			    success: function(data){
			        console.log(data); 
			        var y0 = data.values[0].value;
			        var y1 = data.values[1].value;
			        var y2 = data.values[2].value;
			        var ytotal = y0+y1+y2
			        $.ajax({
					    dataType: "text",
					    type: "GET",
					    dataType: "json",
					    url: AccelZ,
					    headers: {  'X-M2X-KEY' : M2XKey,
					                'Cache-Control' : 'no-cache'
					    },
					    success: function(data){
					        console.log(data); 
					        var z0 = data.values[0].value;
					        var z1 = data.values[1].value;
					        var z2 = data.values[2].value;
					        var ztotal = z0+z1+z2
					        var xmove
					        var ymove
					        var zmove
					        var checkMove
					        var total = (ytotal + xtotal + ytotal)
					        console.log("there it be" + JSON.stringify(data));
					        if (xtotal > 0.04){
					        	xmove = "right"
					        }
					        else if (xtotal < (-0.04)){
					        	xmove = "left"
					        }
					        else {
					        	xmove = "still"
					        }
					        if (ztotal > 3.04){
					        	zmove = "rolled right"
					        }
					        else if (ztotal < (3.00)){
					        	zmove = "rolled left"
					        }
					        else {
					        	zmove = "no roll"
					        }
					        if (ytotal > 0.04){
					        	ymove = "down"
					        }
					        else if (ytotal < (-0.04)){
					        	ymove = "up"
					        }
					        else {
					        	ymove = "still"
					        }
					        if (total < 2.9){
					        	checkMove = "Major Movement!"
					        	console.log(checkMove)
					        	console.log(total)
					        	console.log((ytotal + xtotal + ytotal))
					        }
					        else if (total > 3.12){
					        	checkMove = "Major Movement!!!"
					        	console.log(checkMove)
					        	console.log(total)
					        }
					        else {
					        	console.log(checkMove)
					        	console.log(ytotal+xtotal+ztotal)
					        	checkMove = "Normal Movement"
					        }
					        document.getElementById('ACCELX').innerHTML = xmove;
					        document.getElementById('ACCELY').innerHTML = ymove;
					        document.getElementById('ACCELZ').innerHTML = zmove;
					        document.getElementById('ACCEL').innerHTML = checkMove;

					    },
					    error: function(xhr, textStatus, errorThrown){
					               //alert('request failed');
					               console.log(errorThrown);
					    }
					})

			    },
			    error: function(xhr, textStatus, errorThrown){
			               //alert('request failed');
			               console.log(errorThrown);
			    }
			})

	    },
	    error: function(xhr, textStatus, errorThrown){
	               //alert('request failed');
	               console.log(errorThrown);
	    }
	})

}


// Calling Functions
$( document ).ready(function() {
	Accel();
	Humidity();
	HumidityStat();
	Temp();
	TempStat();
});
