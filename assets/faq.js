const acc = document.getElementsByClassName("accordion");

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    const panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

function askQuestion() {
  const userQuestion = document.getElementById("user-input").value;
  const answerSection = document.getElementById("answer-section");
  
  // Create a new list item element for the user question
  const newQuestion = document.createElement("li");
  newQuestion.classList.add("accordion"); // Add accordion functionality

  // Create a span element for the question text
  const questionSpan = document.createElement("span");
  questionSpan.classList.add("faq-question");
  questionSpan.textContent = userQuestion; // Set the question text

  // Create a div element for the answer (initially empty)
  const answerDiv = document.createElement("div");
  answerDiv.classList.add("faq-answer");

  // Append the question span and answer div to the new list item
  newQuestion.appendChild(questionSpan);
  newQuestion.appendChild(answerDiv);

  // Add the new list item to the FAQ list
  const faqList = document.querySelector(".faq-list");
  faqList.appendChild(newQuestion);

  // Simulate an answer retrieval process (replace with your logic)
  let answer = "Thanks for your question! This feature is currently under development, but here are some resources that might be helpful...";
  
  answerSection.innerHTML = answer; // Update answer section with your response
  
  // Clear the user input field after submitting the question
  document.getElementById("user-input").value = "";
}
