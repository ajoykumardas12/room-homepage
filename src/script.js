// width variable
let width = window.innerWidth;

// DOM elements
const heroImg = document.getElementById("hero-img");
const heading = document.getElementById("cta-heading");
const paragraph = document.getElementById("cta-paragraph");
const body = document.querySelector("body");
const mobileNav = document.getElementById("mobile-nav");
const main = document.querySelector("body");

// length is total number of image-text sets, count tracks the change
let count = 0;
const length = 3;

// change image for smaller screens - runs initially
if(width < 640){
    heroImg.src = "/images/mobile-image-hero-1.jpg";
}

let resizeTimeout;

const setWidth = () => {
    // clear last debounce resizeTimeout
    clearTimeout(resizeTimeout);

    // update width function with 300ms debounce
    resizeTimeout = setTimeout(() => {
        width = window.innerWidth;
        heroImg.src = (width < 640) ? (mobileHeroImages[count]) : desktopHeroImages[count];
    }, 300);
}

// add eventlistender to track window resize
window.addEventListener("resize", setWidth);

// change to next image-text set
const next = () => {
    count++;

    if(count == 3){
        count = 0
    }

    heroImg.src = (width>640) ? desktopHeroImages[count] : mobileHeroImages[count];
    heading.textContent = headingTexts[count];
    paragraph.textContent = paragraphTexts[count];
}

// change to previous image-text set
const previous = () => {
    count--;

    if(count == -1){
        count = 2;
    }

    heroImg.src = (width>640) ? desktopHeroImages[count] : mobileHeroImages[count];
    heading.textContent = headingTexts[count];
    paragraph.textContent = paragraphTexts[count];
}

// Mobile nav functions
const openNav = () => {
    // body.style.overflowY = "hidden";
    mobileNav.classList.remove("hidden");
}
const closeNav = () => {
    // body.style.overflowY = "auto";
    mobileNav.classList.add("hidden");
}

// image-text datas
const desktopHeroImages = [
    "/images/desktop-image-hero-1.jpg",
    "/images/desktop-image-hero-2.jpg",
    "/images/desktop-image-hero-3.jpg"
]
const mobileHeroImages = [
    "/images/mobile-image-hero-1.jpg",
    "/images/mobile-image-hero-2.jpg",
    "/images/mobile-image-hero-3.jpg"
]
const headingTexts = [
    "Discover innovative ways to decorate",
    "We are available all across the globe",
    "Manufactured with the best materials"
]
const paragraphTexts = [
    "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
    "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
    "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."
]