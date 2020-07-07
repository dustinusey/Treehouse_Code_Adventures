const body = document.querySelector('body');
const wrapper = document.querySelector('.wrapper');
/* 

Ham Nav 

*/

const hamMenu = document.querySelector('.ham-menu');
const hamMenuMenu = document.querySelector('.ham-menu-menu');
// ham lines
const topLine = document.querySelector('.top-line');
const midLine = document.querySelector('.mid-line');
const btmLine = document.querySelector('.btm-line');

const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.modal .fa-times');



wrapper.addEventListener('click', e => {
    const cards = document.querySelectorAll('.card');
    const extraInfo = document.querySelectorAll('.extra-info-class');
    mobileNavItems = document.querySelectorAll('.mobile-nav-item');
    let unavailable = document.querySelectorAll('.disabled-feature');
    const modalContainer = document.querySelector('.modal_project_container');
    unavailable.forEach((item) => {
        if (e.target === item) {
            alert('This feature is currently unavailable.')
        }
    })
    mobileNavItems.forEach((item) => {
        if (e.target === item) {
            hamMenuMenu.classList.toggle('showHamMenu');
            handleHamLines();
        }
        });
        if ( e.target === hamMenu ) {
            hamMenuMenu.classList.toggle('showHamMenu');
            handleHamLines();
        }
        cards.forEach((card) => {
            if (e.target === card) {
                overlay.classList.add('show-overlay');
                modal.style.top = '50%';
            }
        });
        extraInfo.forEach((item) => {
            if (e.target === item) {
                overlay.classList.add('show-overlay');
                modal.style.top = '50%';
                modalContainer.innerHTML = 
                `
                <h1 class="extra-info-header">About Code Adventures</h1>
                <p class="firstp">Treehouse Code Adventures is a space for you to learn and grow in addition to the Techdegree content you're given. Here you will find more projects to work on to sharpen your skills. It's important to note that these challenges are not required to complete your Treehouse Techdegree. They are a supplement to your learning and can be great additions to your portfolio as full projects. So have fun and give them your all.</p>
                <br><br>
                <p class="lastp">You will want to read the instructions supplied with the challenge before downloading. If you think you can conquer the challenge, go ahead and download the files and get started. Make sure to share your work when finished in the <span class="emph">#code-adventures</span> channel in Slack! As well as any issues you face while working through your challenge.</p>
                `
                }
            
        })
        if (e.target === overlay || e.target === modalClose) {
            overlay.classList.remove('show-overlay');
            modal.style.top = '-100%';
        }

});

const projectSearchBtn = document.querySelector('.project-search-btn');
const projectSearch = document.querySelector('.project-search');
const searchLI = document.querySelectorAll('.main-nav li');
const mainNav = document.querySelector('.main-nav');
mainNav.addEventListener('click', e => {
    if (e.target === projectSearchBtn || e.target === searchLI[1]) {
        projectSearch.classList.toggle('show-search');
    }
});

function handleHamLines() {
    midLine.classList.toggle('hideLine');
    topLine.classList.toggle('centerLine');
    btmLine.classList.toggle('centerLine');
    setTimeout(() => {
        topLine.classList.toggle('topShift');
        btmLine.classList.toggle('btmShift');
    }, 100);
}






/* 

Project Cards

*/

const cardContainer = document.querySelector('.card-container');
data.forEach((proj, index) => {
    
    cardContainer.innerHTML += 
    `
    <div class="card">
    <p class="time_length">${proj.project_length}</p>
        <div class="card-image-div np card${index}">
        </div>
        <div class="card-info-div np">
        <h1 class="project_name">${proj.project_name}</h1>
            <p class="project_date">${proj.project_date}</p>
            <p class="project_creator">Creator: ${proj.project_creator}</p>
            <p class="project_desc">${proj.project_desc}</p>
        </div>
        <div class="card-tech-div np">
            <ul>
            </ul>
        </div>
    </div>
    `
    const cardImageDiv = document.querySelectorAll('.card-image-div');
    cardImageDiv[index].style.backgroundImage = `url(${proj.project_image})`
});




data.forEach((proj, index) => {
    const cardTechDivUL = document.querySelectorAll('.card-tech-div ul');
    if (proj.project_html === true &&
        proj.project_css === true && 
        proj.project_js === true ) {
            cardTechDivUL[index].innerHTML += '<li><p class="tech-item">HTML</p></li> <li><p class="tech-item">CSS</p></li> <li><p class="tech-item">JavaScript</p></li>'
        } else
        if (proj.project_html === true && proj.project_css === true) {
            cardTechDivUL[index].innerHTML += '<li><p class="tech-item">HTML</p></li> <li><p class="tech-item">CSS</p></li>'
        } else
        if (proj.project_html === true) {
            cardTechDivUL[index].innerHTML += '<li><p class="tech-item">HTML</p></li>'
        }
});


const main = document.querySelector('main');
main.addEventListener('click', e => {
    const card = document.querySelectorAll('.card');
    const modalContainer = modal.querySelector('.modal_project_container');
    
    card.forEach((card, index) => {
        let pos = index;
        let current_project_name = data[pos].project_name;
        let current_project_image = data[pos].project_image;
        let current_project_description = data[pos].project_desc;
        let current_project_instructions_link = data[pos].project_instructions;
        let current_project_download_link = data[pos].project_download;
        if (e.target === card) {
            data.forEach((proj, projIndex) => {
                
                modalContainer.innerHTML = 
                `
                <h1>${current_project_name}</h1>
                <div class="modal_project_info">
                    <img src="${current_project_image}">
                    <p>${current_project_description}</p>
                </div>
                <div class="modal-link-div">
                    <a target="_blank" href="${current_project_instructions_link}">Instructions</a>
                    <a target="_blank" href="${current_project_download_link}">Download</a>
                </div>
            </div>
            `
            });
        }
    });
});








