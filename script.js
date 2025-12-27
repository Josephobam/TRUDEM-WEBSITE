document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu
    const menuBtn = document.getElementById('mobile-menu');
    const navList = document.getElementById('nav-list');
    if (menuBtn) {
        menuBtn.addEventListener('click', () => {
            navList.classList.toggle('active');
        });
    }

    // Dynamic Content
    const data = {
        prophecy: "2026: Companionship & Sacrifice - Walking with God to the altar of total devotion.",
        prayer: "Father, baptize me with the Spirit of devotion. Let my sacrifice produce evidence of Your glory."
    };
    if(document.getElementById('prophecy-text')) document.getElementById('prophecy-text').innerText = data.prophecy;
    if(document.getElementById('prayer-text')) document.getElementById('prayer-text').innerText = data.prayer;

    // WhatsApp Action
    const form = document.getElementById('whatsappForm');
    if(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const text = `*TRUDEM WEBSITE INQUIRY*%0AName: ${document.getElementById('userName').value}%0APhone: ${document.getElementById('userPhone').value}%0AMessage: ${document.getElementById('userMessage').value}`;
            window.open(`https://wa.me/2348166847592?text=${text}`, '_blank');
        });
    }
});