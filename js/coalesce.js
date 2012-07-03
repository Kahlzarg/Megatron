(function(ns) {
   
	ns.ProgressInit = function() {

		$("#progressbar").progressbar({
			value: 10
		});
		ns.Progress(0);

	};

	ns.Progress = function(percent) {
		window.perx = percent;
		if (percent > 100){
			//$.mobile.sdCurrentDialog.close();
		}
		else {
			$('#progressbar').progressbar({value:percent});
			//$('#progress').attr('value',percent);
			setTimeout("js.Pages.Coalesce.Progress(" + (percent + 10) +");",250);
		}
	};
    
})(js.Pages.Coalesce);