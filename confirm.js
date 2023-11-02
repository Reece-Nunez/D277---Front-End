document.addEventListener('DOMContentLoaded', function () {
    const emailInput1 = document.getElementById('email');
    const emailInput2 = document.getElementById('confirm');
    const confirmationMessage = document.getElementById('confirm-message');
    const checkButton = document.getElementById('check-button');

    checkButton.addEventListener('click', validateEmails);

    function validateEmails(event) {
        event.preventDefault();

        const email = emailInput1.value.trim();
        const confirm = emailInput2.value.trim();

        if (email === '' || confirm === '') {
            confirmationMessage.textContent = 'Please Enter an Email in Both Boxes';
            confirmationMessage.style.color = 'red';
        } else if (email !== confirm) {
            confirmationMessage.textContent = 'Emails do not match.';
            confirmationMessage.style.color = 'red';
        }else {
            confirmationMessage.textContent = 'Emails Match!';
            confirmationMessage.style.color = 'green';
        }
    }
});