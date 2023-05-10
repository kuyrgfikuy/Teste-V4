const questions = [
    {
        question: " Qual foi o motivo da sua saída?",
        answers: [
            { text: "A) Atingi meu objetivo", correct: true},
            { text: "B) Dificuldade em investir", correct: true},
            { text: "C) Não tive o retorno financeiro esperado", correct: true},
            { text: "D) Não tive o atendimento que gostaria", correct: true},
            { text: "E) Mudei para outro corretora", correct: true},
        ]
    },
    {
        question: " Das alternativas a seguir, qual foi o principal motivo para você abrir uma conta na Empresa? (sabemos que pode ter mais de um motivo, mas para nós é importante entender o mais relevante)",
        answers: [
            {text: "A) Começar a economizar pra investir", correct: true},
            {text: "B) Aumentar meu patrimônio em um longo prazo para me preparar para o futuro", correct: true},
            {text: "C) Ganhar dinheiro rápido para aquisição pessoal em um curto prazo (viagem, carro, casa, etc)", correct: true},
            {text: "D) Investir para ganhar uma renda mensal pelos ganhos dos meus investimentos", correct: true},
            {text: "E) Iniciar uma carreira trader", correct: true},
            {text: "F) Conhecer os produtos disponíveis e compará-los com os produtos um outras corretoras", correct: true},
        ]
    },
    {
        question: " Você acredita que a Empresa tem o necessário para você conseguir atingir seu objetivo inicial?",
        answers: [
            {text: "A) Sim, mas precisei retirar meus investimentos antes de atingir meu objetivo", correct: true},
            {text: "B) Sim, consegui atingir meu objetivo com a Empresa!", correct: true},
            {text: "C) Não, eu acredito que não tenha", correct: true},    
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Próximo";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion. 
    question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}


function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "false";
    if(isCorrect){
        selectedBtn.classlsit.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disable = "true";
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = 'Obrigado pela pesquisa.'
    nextButton.innerHTML = "Finalizar"
    nextButton.style.display = "block"
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});

startQuiz();