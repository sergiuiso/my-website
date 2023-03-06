function replaceAccordionListBody() {
    var accList = document.getElementsByClassName("faqs-accordion-body");
    var accItems = [...accList[0].children];

    accItems.forEach(item => {
        var itemChildren = [...item.children];

        var buttonTag = document.createElement('button');
        buttonTag.classList.add('accordion', 'accordion-button-border');
        buttonTag.innerHTML = itemChildren[0].innerHTML;
        
        var divTag = document.createElement('div');
        divTag.classList.add('panel');
        
        var pTag = document.createElement('p');
        pTag.innerHTML = itemChildren[1].innerHTML;

        divTag.appendChild(pTag);
        item.replaceChildren(buttonTag, divTag);
    });
}
replaceAccordionListBody();

function addAccordionEffect() {
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
            this.classList.remove('accordion-button-border-hidden');
        } else {
            panel.style.display = "block";
            this.classList.add('accordion-button-border-hidden');
        }

        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
    }
}
addAccordionEffect(); 