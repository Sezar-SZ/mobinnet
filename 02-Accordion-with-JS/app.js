function faqHTML(id, question, answer) {
    return `<div class="faq""> <div class="question"> <span>${question}</span> <img src="./down-arrow.svg"/> </div><div class="answer collapse"> <span>${answer}</span> </div></div>`;
}

async function fetchFAQS() {
    const response = await fetch("./data.json");
    const data = response.json();
    return data;
}

const faqs = await fetchFAQS();

const faqsContainer = document.querySelector("#faqs-container");
faqs.forEach((faq) => {
    const { id, question, answer } = faq;
    faqsContainer.innerHTML += faqHTML(id, question, answer);
});

document.querySelectorAll(".question").forEach((question) => {
    question.addEventListener("click", (event) => {
        const answer = question.parentElement.querySelector(".answer");
        const img = question.parentElement.querySelector("img");

        if (answer.classList.contains("expand")) {
            closeAll();
        } else {
            closeAll();
            answer.classList.add("expand");
            question.classList.add("question-selected");
            img.classList.add("rotate");
        }
    });
});

function closeAll() {
    const faqs = document.querySelectorAll(".faq");
    faqs.forEach((faq) => {
        const answer = faq.querySelector(".answer");
        const question = faq.querySelector(".question");
        const img = faq.querySelector("img");
        answer.classList.remove("expand");
        answer.classList.add("collapse");
        question.classList.remove("question-selected");
        img.classList.remove("rotate");
    });
}
