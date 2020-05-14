/* Generate Project Cards from data.js */

proj.reverse();

const projectContainer = document.getElementById('project-container');
proj.forEach((project, index) => {
	projectContainer.innerHTML += `
	<div class="project-card">
		<div class="tech-used">
		</div>
		<div class="card-info">
			<p class="time">${proj[index].timeToComplete}</p>
			<h3>${proj[index].name}</h3>
			<p>Creator: ${proj[index].creator}</p>
			<p>${proj[index].date}</p>
			<h4>Description</h4>
			<p class="desc">${proj[index].description}</p>
		</div>
		<div class="card-buttons">
			<a target="_blank" href="${proj[index].readme}">Instructions</a>
			<a target="_blank" href="${proj[index].download}">Download</a>
		</div>
	</div>
`
	const techUsed = document.querySelectorAll('.tech-used');
	if (proj[index].html === true) {
		techUsed[index].innerHTML += `<div class="html-tech"></div>`
	}
	if (proj[index].css === true) {
		techUsed[index].innerHTML += `<div class="css-tech"></div>`
	}
	if (proj[index].javascript === true) {
		techUsed[index].innerHTML += `<div class="js-tech"></div>`
	}
});



/* Search functionality */

const search = document.getElementById('project-search');
const project = projectContainer.querySelectorAll('.project-card')
search.addEventListener('keyup', () => {
	let query = search.value.toLowerCase();
	proj.forEach((tag, index) => {
		if (tag.tags.includes(query)) {
			project[index].style.display = 'grid';
		} else {
			project[index].style.display = 'none';
		}
	});
});
