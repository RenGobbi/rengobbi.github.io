$(document).ready(function () {

	$("#button-download-cv").click(function (e) {
		e.preventDefault();
		window.location.href = "assets/files/Curriculo_RenanEliasGobbi.pdf";
		var asd = document.querySelector("#button-download-cv");
	});

	// const download = function(){
	// 	const a = document.createElement('a');
	// 	a.style = 'display: none';
	// 	document.body.appendChild(a);
	// 	return function(conteudo, nomeArquivo){
	// 		// const blob = new Blob([conteudo], {type: 'octet/stream'});
	// 		//const url = window.URL.createObjectURL(blob);
	// 		const url = window.URL.createObjectURL("assets/files/Curriculo_RenanEliasGobbi.pdf");
	// 		a.href = url;
	// 		// a.download = nomeArquivo;
	// 		a.download = "Curriculo_RenanEliasGobbi.pdf";
	// 		a.click();
	// 		window.URL.revokeObjectURL(url);
	// 	}
	// }

	// var btnDownload = document.querySelector("#button-download-cv");

	// btnDownload.addEventListener('click', function(){
	// 	download();
	// })

	// $("#button-download-cv").click(function (e) {
	// 	// e.preventDefault();
	// 	// window.location.href = "assets/files/Curriculo_RenanEliasGobbi.pdf";
	// 	// var asd = document.querySelector("#button-download-cv");
	// 	let link = document.createElement('a');
	// 	link.setAttribute('download', 'nomeDoArquivo');
	// 	link.href = "assets/files/Curriculo_RenanEliasGobbi.pdf"
	// 	document.body.appendChild(link);
	// 	link.click();
	// 	link.remove();
	// });








	const toTop = document.querySelector(".to-top");

	window.addEventListener("scroll", () => {
		if (window.pageYOffset > 100) {
			toTop.classList.add("active");
		} else {
			toTop.classList.remove("active");
		}
	})

	let projectsRows = document.getElementsByClassName('projectRow');
	let numberProjects = projectsRows.length;
	let firstLineProject = 1;
	let lastLineProject = numberProjects;

	let projeto = firstLineProject;

	let scrollcontainer = document.querySelector(".gallery");
	let backBtn = document.getElementById("backBtn");
	let nextBtn = document.getElementById("nextBtn");

	nextBtn.addEventListener("click", () => {

		if (projeto < lastLineProject) { projeto += 1; }
		if (projeto < lastLineProject) {
			$(backBtn).attr('style', 'background-color: #007bff !important; color:white !important');
		} else {
			$(nextBtn).attr('style', 'background-color: white  !important; color:#007bff !important');
		}

		activeProject(projeto);
	});

	backBtn.addEventListener("click", () => {

		if (projeto > firstLineProject) { projeto -= 1; }

		if (projeto > firstLineProject) {
			$(nextBtn).attr('style', 'background-color: #007bff !important; color:white !important');
			$(backBtn).attr('style', 'background-color: #007bff !important; color:white !important');
		} else {
			$(backBtn).attr('style', 'background-color: white  !important; color:#007bff !important');
		}

		activeProject(projeto);
	});

	function activeProject(projeto) {
		for (var i = firstLineProject; i <= numberProjects; i++) {
			let projectActual = "#projectLine" + i;
			if (i == projeto) {
				$(projectActual).attr('style', 'display:flex');
			} else {
				$(projectActual).attr('style', 'display:none');
			}
		}
	}

	var windowWidth = window.innerWidth;

	if (windowWidth <= 575) {
		sizeOfThings();
	}

	function sizeOfThings() {
		if (windowWidth <= 575) {

			var windowHeight = window.innerHeight;

			$('a[href^="#home"]').on('click', function () {
				event.preventDefault();
				window.scrollTo({ behavior: "smooth", top: 0 });
			});

			$('a[href^="#about"]').on('click', function () {
				var offsetTop = document.querySelector("#about").offsetTop;
				event.preventDefault();
				window.scrollTo({ behavior: "smooth", top: offsetTop - 50 });
			});

			$('a[href^="#projetos"]').on('click', function () {
				var offsetTop = document.querySelector("#projetos").offsetTop;
				event.preventDefault();
				window.scrollTo({ behavior: "smooth", top: offsetTop - 100 });
			});
		}
	}

	window.addEventListener('resize', function () {
		sizeOfThings();
	});
});