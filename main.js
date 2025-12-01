// Create snowflakes
function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.innerHTML = '❄';
    snowflake.style.left = Math.random() * 100 + 'vw';
    snowflake.style.animationDuration = Math.random() * 3 + 2 + 's';
    snowflake.style.opacity = Math.random();
    snowflake.style.fontSize = Math.random() * 10 + 10 + 'px';
            
    document.body.appendChild(snowflake);
            
    setTimeout(() => {
        snowflake.remove();
    }, 5000);
}
        
setInterval(createSnowflake, 200);

// Password check function
function checkPassword() {
    const password = document.getElementById('password').value;
    const errorMsg = document.getElementById('errorMsg');
            
    if (password === 'Aug15') {
        // Hide login page
        document.getElementById('loginPage').style.display = 'none';
        // Show main content
        document.getElementById('mainContent').style.display = 'block';
        // Scroll to top
        window.scrollTo(0, 0);
        // Start music
        playMusic();
    } else {
        // Show error message
        errorMsg.style.display = 'block';
        // Shake the input
        document.getElementById('password').style.animation = 'shake 0.5s';
        setTimeout(() => {
            document.getElementById('password').style.animation = '';
        }, 500);
    }
}

// Allow Enter key to submit
document.getElementById('password').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        checkPassword();
    }
});

// Add shake animation
const style = document.createElement('style');
style.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-10px); }
        75% { transform: translateX(10px); }
    }
`;
document.head.appendChild(style);

// Make ornaments interactive
document.querySelectorAll('.ornament').forEach((ornament, index) => {
    ornament.addEventListener('click', function() {
        const messages = [
            { text: 'You light up my life! ✨', icon: '🎄' },
            { text: 'You\'re my favorite person! 💕', icon: '⭐' },
            { text: 'Best Christmas ever with you! 🎄', icon: '❤️' }
        ];
        const msg = messages[index];
        showMessage(msg.text, msg.icon);
    });
});

// Message popup functions
const messagePopup = document.getElementById('messagePopup');
const popupContent = document.getElementById('popupContent');
const popupIcon = document.getElementById('popupIcon');
let popupTimeout;

function showMessage(message, icon) {
    // Set content
    popupContent.textContent = message;
    popupIcon.textContent = icon;
            
    // Show popup
    messagePopup.classList.add('show');
            
    // Clear any existing timeout
    clearTimeout(popupTimeout);
            
    // Auto-hide after 5 seconds
    popupTimeout = setTimeout(() => {
        hideMessage();
    }, 5000);
}

function hideMessage() {
    messagePopup.classList.remove('show');
    clearTimeout(popupTimeout);
}

// Hide popup on scroll
window.addEventListener('scroll', () => {
    if (messagePopup.classList.contains('show')) {
        hideMessage();
    }
});

// Music control functions
const music = document.getElementById('backgroundMusic');
const musicControl = document.getElementById('musicControl');

function playMusic() {
    music.play().catch(e => {
        // Auto-play might be blocked, user will need to click the button
        console.log('Auto-play prevented:', e);
    });
}

function toggleMusic() {
    if (music.paused) {
        music.play();
        musicControl.classList.add('playing');
        musicControl.innerHTML = '🎵';
    } else {
        music.pause();
        musicControl.classList.remove('playing');
        musicControl.innerHTML = '🔇';
    }
}

// Update music button when music plays/pauses
music.addEventListener('play', () => {
    musicControl.classList.add('playing');
    musicControl.innerHTML = '🎵';
});

music.addEventListener('pause', () => {
    musicControl.classList.remove('playing');
    musicControl.innerHTML = '🔇';
}); 