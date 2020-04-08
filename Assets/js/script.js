// NAv Bar Functions

function menuscroll() {
	var $navmenu = $('.nav-menu');
	if ($(window).scrollTop() > 10) {
		$navmenu.addClass('is-scrolling');
	} else {
		$navmenu.removeClass('is-scrolling');
	}
}
menuscroll();
$(window).on('scroll', function() {
	menuscroll();
});

$('.navbar-nav > li:not(.dropdown) > a').on('click', function() {
	$('.navbar-collapse').collapse('hide');
});

var siteNav = $('#navbar');
siteNav.on('show.bs.collapse', function(e) {
	$(this).parents('.nav-menu').addClass('menu-is-open');
});
siteNav.on('hide.bs.collapse', function(e) {
	$(this).parents('.nav-menu').removeClass('menu-is-open');
});

// read more

$('#readmore').on('click', () => {
	if ($('#readmore').text() == 'Read More') {
		$('#readmore').text('Read Less');
		$('#about-res').addClass('a-visible');
		$('#about-res').removeClass('a-hidden');
	} else {
		$('#readmore').text('Read More');
		$('#about-res').removeClass('a-visible');
		$('#about-res').addClass('a-hidden');
	}
});

// Form  Validation
let $form = $('#news-letter');
$form.on('submit', (e) => {
	if ($('#email').val() == '') {
		e.preventDefault();
	} else {
		$.notify(
			{
				// options
				icon: 'far fa-check-circle',
				message: 'Subscription <strong>Successful</strong>'
			},
			{
				// settings
				element: 'body',
				type: 'info',
				allow_dismiss: true,
				type: 'success',
				offset: {
					y: 150
				},

				placement: {
					align: 'center'
				}
			}
		);
	}
});
