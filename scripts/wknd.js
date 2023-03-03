function formatAboutUs() {
    var element = document.getElementById("about-us");
    element.classList.add("about-us");
}
formatAboutUs()

function formatContributorsAndGuides() {
    var contributors = document.getElementById("our-contributors");
    contributors.classList.add("contributors-and-guides");
    var guides = document.getElementById("wknd-guides");
    guides.classList.add("contributors-and-guides");
}
formatContributorsAndGuides()



// function addInnerBodyDiv() {
//     const header = document.getElementsByTagName("header")[0];
//     let s = '<div id="main-container">';
//     header.insertAdjacentHTML('afterend', s);

//     // const footer = document.getElementsByTagName("footer")[0];
//     // let s2 = '</div>';
//     // footer.insertAdjacentHTML('afterend', s2);
//     debugger;
// }
// addInnerBodyDiv()
