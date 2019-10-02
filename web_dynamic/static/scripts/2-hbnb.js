$( document ).ready(function() {
  myIds = []
  myNames = []
  let flag;
  $.getJSON('http://0.0.0.0:5001/api/v1/status/', function( data ) {
    if (data.status === 'OK') {
      $(DIV#api_status).addClass(available);
    } else {
      $(DIV#api_status).removeClass(available);
    }
  });
  $("UL.popover INPUT").on( 'change', function() {
    if( $(this).is(':checked') ) {
        myIds.push($(this).attr('data-id'));
	myNames.push($(this).attr('data-name'));
    } else {
	for (let i = 0; i < myIds.length; i++) {
	    if (myIds[i] === $(this).attr('data-id')) {
	      myIds.splice(i, 1);
	      myNames.splice(i, 1);
            }
	}
    }
    if (!myNames.length) {
	myNames.push('&nbsp');
	flag = 0;
    } else if (flag === 0 && myNames.length > 0){
	myNames.splice(0, 1);
	flag = 1;
    }
    $('DIV.amenities H4').html(myNames.join(', '));
  });
});
