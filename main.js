document.addEventListener('DOMContentLoaded', () => {
    const languageSelect = document.getElementById('language');
    const textArea = document.getElementById('text-area');

    const placeholders = {
        tamil: 'உங்கள் உரை இங்கு தோன்றும்...',
        english: 'Your text will appear here...',
        telugu: 'మీ టెక్స్ట్ ఇక్కడ కనిపిస్తుంది...',
        hindi: 'आपका पाठ यहाँ दिखाई देगा...',
        malayalam: 'നിങ്ങളുടെ വാചകം ഇവിടെ പ്രത്യക്ഷപ്പെടും...',
        japanese: 'あなたのテキストはここに表示されます...'
    };

    languageSelect.addEventListener('change', (event) => {
        const selectedLanguage = event.target.value;
        textArea.placeholder = placeholders[selectedLanguage];
    });

    // Set initial placeholder based on the default selected option
    textArea.placeholder = placeholders[languageSelect.value];
});
