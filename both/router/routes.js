Router.route('/', {
  name: 'home'
});

Router.route('/about', {
  name: 'about',
  waitOn: function() {
  	return Meteor.subscribe('about');
  },
  data: function() {
  	return About.findOne();
  }
});

Router.route('/contact', {
  name: 'contact'
});

Router.plugin('ensureSignedIn', {
  only: ['dashboard']
});
