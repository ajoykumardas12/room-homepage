const heroImg = document.getElementById("hero-img");
const heading = document.getElementById("cta-heading");
const paragraph = document.getElementById("cta-paragraph");

let count = 0;
const length = 3;

const next = () => {
    count++;

    const index = count % length;
    heroImg.src = heroImages[index];
    heading.textContent = headingTexts[index];
    paragraph.textContent = paragraphTexts[index];
}

const previous = () => {
    count--;

    if(count == -1){
        count = 2;
    }

    const index = count % length;
    heroImg.src = heroImages[index];
    heading.textContent = headingTexts[index];
    paragraph.textContent = paragraphTexts[index];
}

const heroImages = [
    "/images/desktop-image-hero-1.jpg",
    "/images/desktop-image-hero-2.jpg",
    "/images/desktop-image-hero-3.jpg"
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