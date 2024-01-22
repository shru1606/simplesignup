let currentStep = 1;

function nextStep(step) {
    // Validation logic can be added here for each step if needed

    // Hide the current step and show the next step
    document.getElementById(`step${currentStep}`).classList.add('hidden');
    currentStep = step;
    document.getElementById(`step${currentStep}`).classList.remove('hidden');
}

function prevStep(step) {
    // Hide the current step and show the previous step
    document.getElementById(`step${currentStep}`).classList.add('hidden');
    currentStep = step;
    document.getElementById(`step${currentStep}`).classList.remove('hidden');
}

function submitForm() {
    // Assuming some form validation logic here
    
    // Simulating a successful registration
    document.getElementById('signupForm').style.display = 'none';
    document.getElementById('registrationSuccess').style.display = 'block';
}
