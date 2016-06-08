$(document).ready(function(){
$('#home').addClass('selected');
function setActiveTab(selectedTab){
   // Remove active class from all the tabs
  $('#tabhome').removeClass('selected');
  $('#tababout').removeClass('selected');
  $('#tabcontact').removeClass('selected');
  //Set active class in the selected tab
  $(selectedTab).addClass('selected');
}
$( ".tab" ).click(function() {
  setActiveTab('#'+this.id);
});
$('#tababout').click(function(){
	$(".context").css("display","block");
});
});