$(function() {
	chrome.extension.sendRequest({action: 'getRecordingStatus'}, function(response) {
		if(response.recording == 'true') {
			console.log('this is on record');
			chrome.extension.sendRequest({action: 'addCurrentTab'}, function(response) { // call background to add currently loaded tab to delicous if we are on record
				console.log('trail posting was ' + response.addStatus);
			});
		}
		else {
			console.log('this is off the record');
		}
	});
});