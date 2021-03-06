Blog.config({
	blogIndexTemplate: 'blog',
	comments: {
		disqusShortname: 'anthonygrills'
	}
});

Template.blog.rendered = function() {
	$('a[href^="#content"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});
	
	$(window).scrollTop(0);
}