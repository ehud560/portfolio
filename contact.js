// retreive the info from the contact page.

const urlParams = new URLSearchParams(window.location.search);

// Data from the fields.
document.getElementById("submittedName").textContent = urlParams.get("name");
document.getElementById("submittedEmail").textContent = urlParams.get("email");
document.getElementById("submittedSubject").textContent = urlParams.get("subject");
document.getElementById("submittedMessage").textContent = urlParams.get("message");