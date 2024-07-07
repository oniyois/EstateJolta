document.addEventListener('DOMContentLoaded', function(){
    const hamburger = document.querySelector('.hamburger');
    const menu = document.querySelector('.navbar .menu');

    hamburger.addEventListener('click', function(){
        menu.classList.toggle('show');
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('announcement-form');
    const container = document.getElementById('announcement-container');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        
        const title = document.getElementById('announcement-title').value;
        const date = document.getElementById('announcement-date').value;
        const content = document.getElementById('announcement-content').value;

        
        const announcement = document.createElement('div');
        announcement.classList.add('announcement');
        announcement.innerHTML = `
            <div class="announcement-title">
                <h3>${title}</h3>
                <p class="announcement-date">${date}</p>
                <button class="delete-btn">Delete</button>
            </div>
            <div class="announcement-content">
                <p>${content}</p>
            </div>
        `;

        
        container.prepend(announcement);

    
        form.reset();

        
        const deleteBtn = announcement.querySelector('.delete-btn');
        deleteBtn.addEventListener('click', function() {
            announcement.remove();
        });
    });
});
