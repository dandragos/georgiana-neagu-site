
/*
// Obține referințe la butoanele și secțiunile aferente
const trupaButton = document.getElementById("trupa-button");
const playlistButton = document.getElementById("playlist-button");
const videoButton = document.getElementById("video-button");
const faqButton = document.getElementById("faq-button");
const reviewButton = document.getElementById("review-button");

// Obține referințe la secțiunile lor corespunzătoare
const sections = document.querySelectorAll(".section");

function toggleSection(sectionId) {
  const activeSection = document.querySelector(".section.active");

  if (activeSection) {
    activeSection.style.maxHeight = "0";
    activeSection.classList.remove("active");
  }

  const section = document.getElementById(sectionId);

  if (section.classList.contains("active")) {
    section.style.maxHeight = "0";
    section.classList.remove("active");
    document.querySelector(".container").style.display = "block";
  } else {
    section.style.maxHeight = "none";
    section.classList.add("active");
    document.querySelector(".container").style.display = "none";
  }
}



function addEventListenerToButton(button, sectionId) {
  button.addEventListener("click", function () {
    toggleSection(sectionId);
  });
}

// Adaugă ascultători de evenimente pentru butoane
addEventListenerToButton(trupaButton, "trupa-section");
addEventListenerToButton(playlistButton, "playlist-section");
addEventListenerToButton(videoButton, "video-section");
addEventListenerToButton(faqButton, "faq-section");
addEventListenerToButton(reviewButton, "review-section");

// Ascunde toate secțiunile la început
sections.forEach(section => {
  section.style.maxHeight = "0";
});

function toggleButtons(display) {
  document.querySelectorAll(".POZA-3, .POZA1, .POZA2, .POZA-4, .POZA5").forEach((button) => {
    button.style.display = display;
  });
}

function showTextButton() {
  toggleButtons("none");
  const textButton = document.getElementById("text-button");
  textButton.style.display = "block";
  const backButton = document.getElementById("back-button");
  backButton.style.display = "block";
  backButton.addEventListener("click", showAllButtons);

  const headerButton = document.querySelector("header")
  headerButton.style.display = "block"

  const floatingButton = document.getElementById("floating-button")
  floatingButton.style.display = "block"

}

function showAllButtons() {
  const activeSection = document.querySelector(".section.active");
  
  if (activeSection) {
    activeSection.style.maxHeight = "0";
    activeSection.classList.remove("active");
  }

  window.scrollTo({ top: 0, behavior: "smooth" });

  toggleButtons("grid");

  const textButton = document.getElementById("text-button");
  textButton.style.display = "none";

  const backButton = document.getElementById("backk-button");
  backButton.style.display = "none";

  const headerButton = document.querySelector("header")
  headerButton.style.display = "none"

  const floatingButton = document.getElementById("floating-button")
  floatingButton.style.display = "none"

  

  const container = document.querySelector(".container");
  container.style.display = "grid";
  container.classList.remove("fade-in");

  setTimeout(() => {
    container.classList.add("fade-in");
  }, 0);
}


function showAndScrollToActiveSection(sectionId) {
  sections.forEach(section => {
    if (section.id === sectionId) {
      if (section.classList.contains("active")) {
        section.style.maxHeight = "0";
        section.classList.remove("active");
      } else {
        section.style.maxHeight = section.scrollHeight + "px";
        section.classList.add("active");
      }
    } else {
      if (section.classList.contains("active")) {
        section.style.maxHeight = "0";
        section.classList.remove("active");
      }
    }
  });

  const activeSection = document.getElementById(sectionId);
  if (activeSection) {
    const offsetTop = activeSection.offsetTop;
    window.scrollTo({ top: offsetTop, behavior: "smooth" });
  }
}

// Adaugă un ascultător de eveniment pentru fiecare buton de imagine
document.querySelectorAll(".POZA-3, .POZA1, .POZA2, .POZA-4, .POZA5").forEach((button, index) => {
  button.addEventListener("click", function () {
    document.body.classList.add("fadeIn");
    setTimeout(() => {
      document.body.classList.remove("fadeIn");
    }, 1000);
    toggleContent(index);
  });
});

//let activeContent = null;
/*
function toggleContent(buttonNumber) {
  const content = document.getElementById(`content${buttonNumber}`);
  if (content.style.display === 'block') {
    content.style.display = 'none';
    activeContent = null;
  } else {
    // Ascunde contentul activ, dacă există
    if (activeContent) {
      activeContent.style.display = 'none';
    }
    content.style.display = 'block';
    activeContent = content;
  }
}

*/


var currentContent = null;

function toggleContent(contentId) {
  var content = document.getElementById("content" + contentId);
  if (currentContent && currentContent !== content) {
    currentContent.style.display = "none";
  }
  if (content.style.display === "none" || !currentContent) {
    content.style.display = "block";
    currentContent = content;
  } else {
    content.style.display = "none";
    currentContent = null;
  }
}






/*







// Master DOManipulator v2 ------------------------------------------------------------
const items = document.querySelectorAll('.item'),
  controls = document.querySelectorAll('.control'),
  headerItems = document.querySelectorAll('.item-header'),
  descriptionItems = document.querySelectorAll('.item-description'),
  activeDelay = .96,
  interval = 5000;

let current = 0;

const slider = {
  init: () => {
    controls.forEach(control => control.addEventListener('click', (e) => { slider.clickedControl(e) }));
    controls[current].classList.add('active');
    items[current].classList.add('active');
  },
  nextSlide: () => { // Increment current slide and add active class
    slider.reset();
    if (current === items.length - 1) current = -1; // Check if current slide is last in array
    current++;
    controls[current].classList.add('active');
    items[current].classList.add('active');
    slider.transitionDelay(headerItems);
    slider.transitionDelay(descriptionItems);
  },
  clickedControl: (e) => { // Add active class to clicked control and corresponding slide
    slider.reset();
    clearInterval(intervalF);

    const control = e.target,
      dataIndex = Number(control.dataset.index);

    control.classList.add('active');
    items.forEach((item, index) => { 
      if (index === dataIndex) { // Add active class to corresponding slide
        item.classList.add('active');
      }
    })
    current = dataIndex; // Update current slide
    slider.transitionDelay(headerItems);
    slider.transitionDelay(descriptionItems);
    intervalF = setInterval(slider.nextSlide, interval); // Fire that bad boi back up
  },
  reset: () => { // Remove active classes
    items.forEach(item => item.classList.remove('active'));
    controls.forEach(control => control.classList.remove('active'));
  },
  transitionDelay: (items) => { // Set incrementing css transition-delay for .item-header & .item-description, .vertical-part, b elements
    let seconds;
    
    items.forEach(item => {
      const children = item.childNodes; // .vertical-part(s)
      let count = 1,
        delay;
      
      item.classList.value === 'item-header' ? seconds = .015 : seconds = .007;

      children.forEach(child => { // iterate through .vertical-part(s) and style b element
        if (child.classList) {
          item.parentNode.classList.contains('active') ? delay = count * seconds + activeDelay : delay = count * seconds;
          child.firstElementChild.style.transitionDelay = `${delay}s`; // b element
          count++;
        }
      })
    })
  },
}

let intervalF = setInterval(slider.nextSlide, interval);
slider.init();




/*

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}


/*

var slideIndex = 1;
showSlides(slideIndex);

// Funcția pentru a afișa slide-urile
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

// Funcția pentru butonul de next slide
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Funcția pentru butonul de previous slide
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Adăugați evenimente pentru butoanele prev și next
document.querySelector('.prev').addEventListener('click', function () {
    plusSlides(-1);
});

document.querySelector('.next').addEventListener('click', function () {
    plusSlides(1);
});
*/



