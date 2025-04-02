window.onscroll = () => {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        document.getElementById('go-top').classList.remove('hidden');
    } else {
        document.getElementById('go-top').classList.add('hidden');
    }
};
document.getElementById('go-top').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

const burgerIcon = document.getElementById('burger-icon');
const mobileMenu = document.getElementById('mobile-menu');
const closeMenu = document.getElementById('close-menu');
const menuLinks = document.querySelectorAll('#mobile-menu a');

burgerIcon.addEventListener('click', () => {
    mobileMenu.classList.toggle('show');
});

closeMenu.addEventListener('click', () => {
    mobileMenu.classList.remove('show');
});

menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('show');
    });
});

document.addEventListener('click', (e) => {
    if (!mobileMenu.contains(e.target) && !burgerIcon.contains(e.target)) {
        mobileMenu.classList.remove('show');
    }
});
let currentIndex = 0;

const section = document.querySelector('#home');
const contactUsButton = document.querySelector('#contact-us');

const updateBackground = () => {
    section.classList.add('transition-all', 'duration-1000', 'ease-in-out');
    section.style.backgroundImage = backgrounds[currentIndex].image;
    
    setTimeout(() => section.classList.remove('transition-all', 'duration-1000', 'ease-in-out'), 1000);
};

setInterval(() => {
    currentIndex = (currentIndex + 1) % backgrounds.length; 
    updateBackground();
}, 5000); 
const header = document.getElementById("main-header");
    const homeSection = document.getElementById("home");

    window.addEventListener("scroll", function () {
        let homeBottom = homeSection.offsetTop + homeSection.offsetHeight;
        let scrollTop = window.scrollY || document.documentElement.scrollTop;

        if (scrollTop < homeBottom) {
            header.style.top = "0";
        } else {
            header.style.top = "-100px";
        }
    });
    document.addEventListener("DOMContentLoaded", function () {
        const goTopButton = document.getElementById("go-top");
        const progressCircle = document.getElementById("progress");
    
        window.addEventListener("scroll", () => {
            let scrollTop = window.scrollY;
            let docHeight = document.documentElement.scrollHeight - window.innerHeight;
            let progress = (scrollTop / docHeight) * 138; 
    
            if (scrollTop > 100) {
                goTopButton.classList.remove("hidden");
            } else {
                goTopButton.classList.add("hidden");
            }
    
            progressCircle.style.strokeDashoffset = 138 - progress;
        });
    
            goTopButton.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    });
    document.querySelector("#learn-more").addEventListener("click", function(event) {
        event.preventDefault();
        document.querySelector("#about").scrollIntoView({ behavior: "smooth" });
    });
    document.querySelectorAll('.filter-btn').forEach(button => {
        button.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            const products = document.querySelectorAll('.product');
    
            products.forEach(product => {
                if (category === 'all' || product.getAttribute('data-category') === category) {
                    product.style.opacity = '0'; 
                    setTimeout(() => {
                        product.style.display = 'block'; 
                        setTimeout(() => {
                            product.style.opacity = '1'; 
                        }, 100); 
                    }, 500); 
                } else {
                    product.style.opacity = '0';
                    setTimeout(() => {
                        product.style.display = 'none';
                    }, 500);
                }
            });
        });
    });
    document.addEventListener('DOMContentLoaded', function() {
        const slider = document.querySelector('.slider-container');
        const sliderElement = document.getElementById('imageSlider');
        
        if (!sliderElement) return;
        
        let currentIndex = 0;
        const slideCount = document.querySelectorAll('.slider-container > div').length;
        
        window.moveSlide = function(index) {
            currentIndex = index;
            updateSliderPosition();
        };
        
        function updateSliderPosition() {
            slider.style.transform = `translateX(-${currentIndex * 100}%)`;
            document.querySelectorAll('.slider-dot').forEach((dot, i) => {
                if (i === currentIndex) {
                    dot.classList.add('active');
                    dot.classList.remove('bg-gray-300');
                    dot.classList.add('bg-amber-600');
                } else {
                    dot.classList.remove('active');
                    dot.classList.remove('bg-amber-600');
                    dot.classList.add('bg-gray-300');
                }
            });
        }
        let touchStartX = 0;
        let touchEndX = 0;
        
        sliderElement.addEventListener('touchstart', function(e) {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });
        
        sliderElement.addEventListener('touchend', function(e) {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        }, { passive: true });
        
        function handleSwipe() {
            const swipeThreshold = 50; 
            const diff = touchStartX - touchEndX;
            
            if (Math.abs(diff) < swipeThreshold) return;
            
            if (diff > 0) {
                if (currentIndex < slideCount - 1) {
                    currentIndex++;
                    updateSliderPosition();
                }
            } else {
                if (currentIndex > 0) {
                    currentIndex--;
                    updateSliderPosition();
                }
            }
        }
    });





































    
    // <script type="module">
    //     import Chatbot from "https://cdn.jsdelivr.net/npm/flowise-embed/dist/web.js"
    //     Chatbot.init({
    //         chatflowid: "6690bfb1-6f4b-49aa-b4d1-134e107de62b",
    //         apiHost: "https://ponsica-ponsica.hf.space",
    //         chatflowConfig: {},
    //         observersConfig: {},
    //         theme: {
    //             button: {
    //                 backgroundColor: '#a96631',
    //                 right: 20,
    //                 bottom: 20,
    //                 size: 50,
    //                 dragAndDrop: true,
    //                 iconColor: 'white',
    //                 customIconSrc: 'logo2.png',
    //                 autoWindowOpen: {
    //                     autoOpen: false, 
    //                     autoOpenOnMobile: false
    //                 }
    //             },
    //             customCSS: ``,
    //             chatWindow: {
    //                 showTitle: true,
    //                 showAgentMessages: true,
    //                 title: 'Chat Bot',
    //                 titleAvatarSrc: 'logo.png',
    //                 welcomeMessage: 'Hello! This is a custom welcome message',
    //                 errorMessage: 'This is a custom error message',
    //                 backgroundColor: '#ffffff',
    //                 backgroundImage: 'enter image path or link',
    //                 fontSize: 16,
    //                 starterPrompts: [
    //                     "What is a bot?",
    //                     "Who are you?"
    //                 ],
    //                 starterPromptFontSize: 15,
    //                 clearChatOnReload: false,
    //                 sourceDocsTitle: 'Sources:',
    //                 renderHTML: true,
    //                 botMessage: {
    //                     backgroundColor: '#f7f8ff',
    //                     textColor: '#303235',
    //                     showAvatar: true,
    //                     avatarSrc: 'logo2.png'
    //                 },
    //                 userMessage: {
    //                     backgroundColor: '#a96631',
    //                     textColor: '#ffffff',
    //                     showAvatar: true,
    //                     avatarSrc: 'https://www.freeiconspng.com/thumbs/profile-icon-png/profile-icon-9.png'
    //                 },
    //                 textInput: {
    //                     placeholder: 'Type your question',
    //                     backgroundColor: '#ffffff',
    //                     textColor: '#303235',
    //                     sendButtonColor: '#a96631',
    //                     maxChars: 50,
    //                     maxCharsWarningMessage: 'You exceeded the characters limit. Please input less than 50 characters.',
    //                     autoFocus: true
    //                 },
    //                 feedback: {
    //                     color: '#303235'
    //                 },
    //                 dateTimeToggle: {
    //                     date: true,
    //                     time: true
    //                 },
    //                 footer: {
    //                     textColor: '#303235',
    //                     text: 'Powered by',
    //                     company: 'Teleforce',
    //                     companyLink: 'https://teleforcespaces.com/'
    //                 }
    //             }
    //         }
    //     })
    // </script>
