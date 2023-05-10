const quizData = [
    {
        question: "1. Qual foi o motivo da sua saída?",
        a: "A)  Atingi meu objetivo",
        b: "B)  Dificuldade em investir",
        c: "C)  Não tive o retorno financeiro esperado",
        d: "D) Não tive o atendimento que gostaria",
        e: "E) Mudei para outro corretora",
        correct: "a",
    },
    {
        question: "2. Das alternativas a seguir, qual foi o principal motivo para você abrir uma conta na Empresa? (sabemos que pode ter mais de um motivo, mas para nós é importante entender o mais relevante)",
        a: "A)  Começar a economizar pra investir",
        b: "B)  Aumentar meu patrimônio em um longo prazo para me preparar para o futuro",
        c: "C) Ganhar dinheiro rápido para aquisição pessoal em um curto prazo (viagem, carro, casa, etc)",
        d: "D) Investir para ganhar uma renda mensal pelos ganhos dos meus investimentos",
        e: "E) Iniciar uma carreira trader",
        f: "F) Conhecer os produtos disponíveis e compará-los com os produtos um outras corretoras",
        correct: "a",
    },
    {
        question: "3. Você acredita que a Empresa tem o necessário para você conseguir atingir seu objetivo inicial?",
        a: "A)  Sim, mas precisei retirar meus investimentos antes de atingir meu objetivo",
        b: "B)  Sim, consegui atingir meu objetivo com a Empresa!",
        c: "C ) Não, eu acredito que não tenha",
        correct: "a",
    },
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const e_text = document.getElementById('e_text')
const f_text = document.getElementById('f_text')
const g_text = document.getElementById('g_text')
const h_text = document.getElementById('h_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
    e_text.innerText = currentQuizData.e
    f_text.innerText = currentQuizData.f
    g_text.innerText = currentQuizData.g
    h_text.innerText = currentQuizData.h
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
            <h2>Obrigado pelo pela oportunidade, espero muito que tenha gostado.</h2>
            <button onclick="location.reload()">Finalizar</button>
        `
        }
    }
})