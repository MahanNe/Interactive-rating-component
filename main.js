const ratingButtons = document.querySelectorAll('.rating-btn');
const row_1 = document.getElementById('row_1');
const row_2 = document.getElementById('row_2');

ratingButtons.forEach(function(button) {
    button.addEventListener('click', handleButtons);
});

function handleButtons(event) {
    ratingButtons.forEach(function(button) {
        button.classList.remove('selectedBtn');
    });

    event.target.classList.add('selectedBtn');
}

const onSubmit = () => {
    let selectedButtons = document.querySelectorAll('.selectedBtn');
    if (selectedButtons) {

        row_1.style.display = 'none';
        row_2.style.display = 'block';

        const msgList = document.getElementById('msgList');
        msgList.innerHTML = '';

        selectedButtons.forEach(function(button) {
            const msg = document.createElement('p');
            const msgText = document.createTextNode(`You selected `);

            const msgSpan = document.createElement('span');
            msgSpan.textContent = `${button.textContent} out of 5`;
            msgSpan.style.color = 'hsl(25, 97%, 53%)';

            msg.appendChild(msgText);
            msg.appendChild(msgSpan);
            msgList.appendChild(msg);
        });
    }
}