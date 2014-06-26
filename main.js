$(document).on('ready', function() {

	$('.profile-form').hide();

	$('.profile-form').on('submit', function(e) {

		// console.log("Updates are " + $('#name').val() + ", " + $('#email').val());
		// console.log("Old values are " + $('#name-value').text() + ", " + $('#email-value').text());

		e.preventDefault();

		$('#name-value').text( $('#name').val() );
		$('#email-value').text( $('#email').val() );
		$('#name').val('');
		$('#email').val('');
		$('.profile-form').toggle('50');
		$('#show-update').text('Show Form');

	})
	
	$('#show-update').on('click', function(e) {
		$('.profile-form').toggle('50');
		$('#show-update').text() === "Show Form" ?
			$('#show-update').text('Hide Form') :
			$('#show-update').text('Show Form')
	})

});