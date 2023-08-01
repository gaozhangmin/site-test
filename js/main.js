(function () {
	const backgroundImages = [
		'../images/tv/screenshot.png',
		'../images/tv/screenshot25.png',
		'../images/tv/screenshot26.png',
		'../images/tv/screenshot24.png',
		'../images/tv/screenshot23.png',
		'../images/tv/screenshot22.png',
		'../images/tv/screenshot21.png',
		'../images/tv/screenshot20.png',
		'../images/tv/screenshot19.png',
		'../images/tv/screenshot18.png',
		'../images/tv/screenshot17.png',
		'../images/tv/screenshot16.png',
		'../images/tv/screenshot15.png',
		'../images/tv/screenshot14.png',
		'../images/tv/screenshot13.png',
		'../images/tv/screenshot10.png',
		'../images/tv/screenshot08.png',
		'../images/tv/screenshot06.png',
		'../images/tv/screenshot02.png',
		'../images/tv/settings.png',

	];
	let currentImageIndex = 0;
	const heroSection = document.getElementById('heroSection');

	function changeBackgroundImage() {
		currentImageIndex = (currentImageIndex + 1) % backgroundImages.length;
		const imageURL = backgroundImages[currentImageIndex];
		heroSection.style.backgroundImage = `url(${imageURL})`;
	}

	setInterval(changeBackgroundImage, 2000);


	const backgroundImages1 = [
		'../images/desktop/1.png',
		'../images/desktop/2.png',
		'../images/desktop/3.png',
		'../images/desktop/4.png',
		'../images/desktop/5.png',
		'../images/desktop/6.png',
		'../images/desktop/7.png',
		'../images/desktop/8.png',
		'../images/desktop/9.png',
		'../images/desktop/10.png'
	];
	let currentDesImageIndex = 0;
	const heroDesk = document.getElementById('heroDesk');

	function changeDeskBackgroundImage() {
		currentDesImageIndex = (currentDesImageIndex + 1) % backgroundImages1.length;
		const imageURL = backgroundImages1[currentDesImageIndex];
		heroDesk.style.backgroundImage = `url(${imageURL})`;
	}

	setInterval(changeDeskBackgroundImage, 2000);



	var header = document.getElementById("mainHeader");

	function changeHeader() {
		var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		header.classList.toggle("header-background", scrollTop >= 50 || document.body.classList.contains("nav-open"));
	}

	var didScroll = false;

	$(window).scroll(function () {
		didScroll = true;
	});

	setInterval(function() {
		if (didScroll) {
			didScroll = false;
			changeHeader();
		}
	}, 100);

	changeHeader();

	document.getElementById("open-nav").addEventListener("click", function (event) {
		event.preventDefault();
		document.body.classList.toggle("nav-open");
		changeHeader();
	});

	$("a[href*=\\#]").on("click", function (event) {
		if(this.pathname === window.location.pathname) {
			event.preventDefault();

			$("html, body").animate({
				scrollTop: $(this.hash).offset().top
			}, 500);
		}
	});
})();
