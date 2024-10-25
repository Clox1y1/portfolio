// Handle form submission
const form = document.getElementById('applicationForm');
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const formData = new FormData(form);

    // Send form data to EmailJS
    fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            service_id: 'your_service_id',  // Replace with your service ID
            template_id: 'your_template_id',  // Replace with your template ID
            user_id: 'your_user_id',  // Replace with your user ID
            template_params: {
                name: formData.get('name'),
                email: formData.get('email'),
                message: formData.get('message'),
            }
        })
    })
    .then(response => {
        if (response.ok) {
            alert('Application submitted successfully!');
            form.reset(); // Clear the form after submission
        } else {
            alert('There was an error submitting your application.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('There was an error submitting your application.');
    });
});
