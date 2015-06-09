Meteor.startup(function() {
  AutoForm.setDefaultTemplate('materialize');

  $('body').on('click', '[data-action=logout]', function(event) {
    event.preventDefault();
    AccountsTemplates.logout();
  });
  
});

Template._footer.helpers({
	aboutEx: function() {
		return About.find();
	}
})

Template.appLayout.rendered = function() {
	$('.modal-trigger').leanModal();
}


