function findSchool() {
    let age = parseInt(document.getElementById("ageInput").value);
    let resultText = "";

    if (isNaN(age) || age < 0) {
        resultText = "Please enter a valid age.";
    } else if (age >= 0 && age <= 3) {
        resultText = "Your child is too young for school. Consider nursery or preschool.";
    } else if (age === 4 || age === 5) {
        resultText = "Your child should be in Reception (Early Years Foundation Stage).";
    } else if (age >= 6 && age <= 10) {
        resultText = "Your child should be in Primary School (Key Stage 1 & 2).";
    } else if (age >= 11 && age <= 16) {
        resultText = "Your child should be in Secondary School (Key Stage 3 & 4).";
    } else if (age >= 17 && age <= 18) {
        resultText = "Your child should be in Sixth Form or College (A-Levels or BTECs).";
    } else if (age >= 19 && age <= 21) {
        resultText = "Your child should be in University (Undergraduate level).";
    } else if (age > 21 && age <= 25) {
        resultText = "Your child might be in University (Postgraduate level).";
    } else {
        resultText = "School is generally completed by this age";
    }

    document.getElementById("result").innerText = resultText;
  }
