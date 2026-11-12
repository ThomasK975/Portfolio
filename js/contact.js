

const form = document.querySelector('.contact-form');
const status = document.querySelector('#form-status');
const submitButton = form.querySelector('button[type="submit"]');

form.addEventListener('submit', async (event) => {

    event.preventDefault();


    submitButton.disabled = true;
    status.textContent = 'Sending...';
    status.className = 'form-status';

    try {

        const response = await fetch(form.action, {
            method: 'POST',
            body: new FormData(form),

            headers: { 'Accept': 'application/json' }
        });


        if (response.ok) {
            status.textContent = "Thanks! Your message has been sent.";
            status.className = 'form-status success';
            form.reset();
        } else {
            status.textContent = 'Something went wrong. Please try again.';
            status.className = 'form-status error';
        }
    } catch (error) {

        status.textContent = 'Could not send. Check your connection and try again.';
        status.className = 'form-status error';
    }

    submitButton.disabled = false;
});
