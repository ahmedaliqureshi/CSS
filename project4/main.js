// document/addEventListener('DOMContentLoaded',()=>{
// const hamburger = document.querySelector('.hamburger');
// const nav = document.querySelector('nav')

// hamburger.addEventListener('click',()=>{
//     nav.classList.toggle('open');
// })

// const typingElement = document.getElementById('typing');
// const words = ["web developer","science enthusiast","web designer"];
// let wordIndex=0; 
// let letterIndex=0; 
// let currentWord='';
// let currentLetters='';
// let isDeleting=false;

// function type() {
//     if(isDeleting)
//     {
//        currentLetters=currentWord.substring(0,letterIndex-1);
//        letterIndex--;
//     }
//     else
//     {
//         currentLetters=currentWord.substring(0,letterIndex+1);
//         letterIndex++
//     }
//     // typingElement.innerHTML=currentLetters;

//     typingElement.textContent=currentWord.substring(0,letterIndex);

//     let typespeed=150;
//     if(isDeleting)
//     {
//         typespeed/2;
//     }
//     if(!isDeleting && letterIndex === currentWord.length)
//     {
//          typespeed=2000;
//          isDeleting=true;
//     }
//     else if (isDeleting && letterIndex===0)
//     {
//           isDeleting=false;
//           wordIndex++;
//     }
//     if (wordIndex===words.length)
//     {
//         wordIndex=0;
//     }
//     currentWord= words[wordIndex];
//     typespeed=500;

//     setTimeout(type,typespeed);
//     currentWord=words[wordIndex];
// }

// type();


document.addEventListener('DOMContentLoaded', () => {
    // Hamburger menu logic (this part is fine)
    const hamburger = document.getElementById('menu-btn');
    const nav = document.querySelector('nav');

    if (hamburger && nav) { // Good practice to check if elements exist
        hamburger.addEventListener('click', () => {
            nav.classList.toggle('open');
        });
    }

    // --- TYPING ANIMATION LOGIC ---
    const typingElement = document.getElementById('typing');
    // Important: Make sure you have an element with id="typing" in your HTML!
    if (typingElement) {
        const words = ["web developer", "science enthusiast", "web designer"];
        let wordIndex = 0;
        let letterIndex = 0;
        let currentWord = "";
        let isDeleting = false;

        function type() {
            // Set the current word based on the wordIndex
            currentWord = words[wordIndex];
            
            // Logic for typing or deleting
            if (isDeleting) {
                // Deleting a letter
                letterIndex--;
            } else {
                // Typing a letter
                letterIndex++;
            }
            
            // Update the HTML with the current substring
            typingElement.textContent = currentWord.substring(0, letterIndex);

            // Determine the speed of the next character
            let typeSpeed = 150; // A base typing speed

            if (isDeleting) {
                typeSpeed /= 2; // Make deleting faster
            }
            
            // --- LOGIC TO CHANGE STATE (Typing -> Pausing -> Deleting) ---

            // If word is fully typed
            if (!isDeleting && letterIndex === currentWord.length) {
                typeSpeed = 2000; // Pause at the end of the word
                isDeleting = true; // Switch to deleting mode
            } 
            // If word is fully deleted
            else if (isDeleting && letterIndex === 0) {
                isDeleting = false; // Switch back to typing mode
                wordIndex++; // Move to the next word
                
                // If we've reached the end of the words array, loop back
                if (wordIndex === words.length) {
                    wordIndex = 0;
                }
            }

            // *** THE MOST IMPORTANT FIX: Create the loop! ***
            // Call this same function again after the calculated delay
            setTimeout(type, typeSpeed);
        }

        // Start the animation!
        type();
    }
});



// });