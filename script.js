// Quiz Questions Database
const questions = [
    // HTML Questions
    {
        question: "Which HTML5 element is best suited for marking up the main navigation area of a website?",
        options: ["<navigation>", "<nav>", "<menu>", "<navbar>"],
        correct: 1,
        explanation: "The <nav> element is specifically designed in HTML5 for navigation links. It's a semantic element that represents a section of a page whose purpose is to provide navigation links."
    },
    {
        question: "What is the correct HTML attribute for specifying that an input field is required?",
        options: ["validate='true'", "required", "mandatory='yes'", "validate='required'"],
        correct: 1,
        explanation: "The 'required' attribute is a boolean attribute that, when present, specifies that the input field must be filled out before submitting the form."
    },
    {
        question: "Which semantic HTML element should contain the main content of a webpage?",
        options: ["<main>", "<content>", "<section>", "<article>"],
        correct: 0,
        explanation: "The <main> element represents the dominant content of the <body> of a document. There should only be one <main> element per page."
    },
    {
        question: "What does the 'alt' attribute provide for an <img> element?",
        options: ["Alternative styling", "Alternative text for screen readers", "Animation timing", "Alternative image source"],
        correct: 1,
        explanation: "The 'alt' attribute provides alternative text for an image if it cannot be displayed. It's crucial for accessibility and SEO."
    },
    {
        question: "Which form attribute specifies where to send the form data when submitted?",
        options: ["target", "method", "action", "destination"],
        correct: 2,
        explanation: "The 'action' attribute specifies the URL where the form data should be sent when the form is submitted."
    },
    {
        question: "What is the purpose of the <meta> tag with charset='UTF-8'?",
        options: ["Set page encoding", "Define page metadata", "Specify character set", "Configure browser settings"],
        correct: 2,
        explanation: "The charset='UTF-8' meta tag specifies the character encoding for the HTML document, ensuring proper display of text characters."
    },

    // CSS Questions
    {
        question: "Which CSS property is used to create flexible layouts that can adapt to different screen sizes?",
        options: ["display: block", "display: flex", "display: grid", "display: inline"],
        correct: 1,
        explanation: "Flexbox (display: flex) provides a more efficient way to lay out, align, and distribute space among items in a container, even when their size is unknown or dynamic."
    },
    {
        question: "How would you center an element both horizontally and vertically using CSS Grid?",
        options: ["place-items: center", "align-items: center; justify-items: center", "margin: auto", "position: absolute; top: 50%; left: 50%"],
        correct: 0,
        explanation: "place-items: center is a shorthand property that sets both align-items and justify-items to center, making it perfect for centering grid items."
    },
    {
        question: "What is the CSS 'box-sizing: border-box' property used for?",
        options: ["Add border to element", "Include padding and border in element's total width", "Create rounded borders", "Style box shadows"],
        correct: 1,
        explanation: "border-box tells the browser to account for any border and padding in the values you specify for width and height, making layout calculations more intuitive."
    },
    {
        question: "Which CSS selector targets all elements with a specific attribute, regardless of the attribute value?",
        options: [".class", "#id", "[attribute]", "element"],
        correct: 2,
        explanation: "The attribute selector [attribute] targets any element that has the specified attribute, regardless of its value."
    },
    {
        question: "What is the purpose of CSS custom properties (CSS variables)?",
        options: ["Store values for reuse", "Create animations", "Define responsive breakpoints", "Style pseudo-elements"],
        correct: 0,
        explanation: "CSS custom properties allow you to store values that can be reused throughout your stylesheet, making maintenance and theming much easier."
    },
    {
        question: "Which CSS unit is relative to the font size of the root element?",
        options: ["em", "rem", "px", "%"],
        correct: 1,
        explanation: "rem (root em) is relative to the font size of the root element (html), making it ideal for responsive typography and spacing."
    },

    // JavaScript Questions
    {
        question: "What is the difference between '==' and '===' in JavaScript?",
        options: ["No difference", "'==' checks type, '===' checks value", "'==' checks value only, '===' checks both value and type", "'===' is faster"],
        correct: 2,
        explanation: "==' performs type coercion before comparison, while '===' checks both value and type without coercion. '===' is generally preferred for safer comparisons."
    },
    {
        question: "What does the 'this' keyword refer to in an arrow function?",
        options: ["The object that called the function", "The global object", "The 'this' value from the enclosing context", "undefined"],
        correct: 2,
        explanation: "Arrow functions don't have their own 'this' binding. They inherit 'this' from the surrounding (lexical) context, unlike regular functions."
    },
    {
        question: "Which method is used to add an element to the end of an array?",
        options: ["push()", "pop()", "shift()", "unshift()"],
        correct: 0,
        explanation: "push() adds one or more elements to the end of an array and returns the new length of the array."
    },
    {
        question: "What is the result of typeof null in JavaScript?",
        options: ["'null'", "'undefined'", "'object'", "'number'"],
        correct: 2,
        explanation: "This is a well-known JavaScript bug. typeof null returns 'object' despite null being its own primitive type. This has been preserved for backward compatibility."
    },
    {
        question: "What is the purpose of the async/await syntax in JavaScript?",
        options: ["Create animations", "Handle asynchronous operations synchronously", "Define classes", "Create loops"],
        correct: 1,
        explanation: "async/await allows you to write asynchronous code that looks and behaves like synchronous code, making it easier to read and maintain."
    },
    {
        question: "Which array method creates a new array with all elements that pass a test?",
        options: ["map()", "filter()", "reduce()", "forEach()"],
        correct: 1,
        explanation: "filter() creates a new array with all elements that pass the test implemented by the provided function, without modifying the original array."
    }
];

// Global Variables
let currentQuestionIndex = 0;
let score = 0;
let userAnswers = new Array(questions.length);
let quizActive = false;
let timerInterval = null;
let timeLeft = 15;
const TIMER_DURATION = 15;
let chartInstance = null;

// DOM Elements
const startScreen = document.getElementById('startScreen');
const quizContainer = document.getElementById('quizContainer');
const resultScreen = document.getElementById('resultScreen');
const reportSection = document.getElementById('reportSection');
const startBtn = document.getElementById('startBtn');
const nextBtn = document.getElementById('nextBtn');
const skipBtn = document.getElementById('skipBtn');
const submitBtn = document.getElementById('submitBtn');
const viewReportBtn = document.getElementById('viewReportBtn');
const restartBtn = document.getElementById('restartBtn');
const closeReportBtn = document.getElementById('closeReportBtn');

// Quiz Elements
const questionNumber = document.getElementById('questionNumber');
const totalQuestions = document.getElementById('totalQuestions');
const progressFill = document.getElementById('progressFill');
const questionText = document.getElementById('questionText');
const optionsContainer = document.getElementById('optionsContainer');
const explanationSection = document.getElementById('explanationSection');
const explanationText = document.getElementById('explanationText');

// Timer Elements
const timerDisplay = document.getElementById('timerDisplay');
const timerValue = document.getElementById('timerValue');

// Result Elements
const scoreText = document.getElementById('scoreText');
const percentageText = document.getElementById('percentageText');
const performanceMessage = document.getElementById('performanceMessage');
const reportContent = document.getElementById('reportContent');
const confettiContainer = document.getElementById('confettiContainer');

// Initialize Quiz
function initQuiz() {
    totalQuestions.textContent = `of ${questions.length}`;
    
    // Event Listeners
    startBtn.addEventListener('click', startQuiz);
    nextBtn.addEventListener('click', nextQuestion);
    skipBtn.addEventListener('click', skipQuestion);
    submitBtn.addEventListener('click', showResults);
    
    // Report button event listener with error handling
    if (viewReportBtn) {
        viewReportBtn.addEventListener('click', function() {
            console.log('Report button clicked'); // Debug log
            toggleReport();
        });
    }
    
    restartBtn.addEventListener('click', restartQuiz);
    closeReportBtn.addEventListener('click', toggleReport);
    
    // Click outside to close functionality
    if (reportSection) {
        reportSection.addEventListener('click', function(e) {
            if (e.target === reportSection) {
                reportSection.classList.remove('show');
            }
        });
    }
}

// Start Quiz
function startQuiz() {
    startScreen.classList.remove('active');
    quizContainer.classList.add('active');
    currentQuestionIndex = 0;
    score = 0;
    userAnswers = [];
    quizActive = true;
    loadQuestion();
}

// Load Question
function loadQuestion() {
    const question = questions[currentQuestionIndex];
    
    // Update progress
    questionNumber.textContent = `Question ${currentQuestionIndex + 1}`;
    progressFill.style.width = `${((currentQuestionIndex + 1) / questions.length) * 100}%`;
    
    // Update question text
    questionText.textContent = question.question;
    
    // Clear and populate options
    optionsContainer.innerHTML = '';
    question.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'option';
        optionElement.textContent = option;
        optionElement.addEventListener('click', () => selectAnswer(index));
        optionsContainer.appendChild(optionElement);
    });
    
    // Hide explanation and action buttons
    explanationSection.classList.remove('show');
    nextBtn.classList.add('hidden');
    submitBtn.classList.add('hidden');
    
    // Enable skip button
    skipBtn.disabled = false;
    
    // Start timer for this question
    startTimer();
}

// Select Answer
function selectAnswer(selectedIndex) {
    if (!quizActive) return;
    
    // Stop timer when answer is selected
    stopTimer();
    
    const question = questions[currentQuestionIndex];
    const options = document.querySelectorAll('.option');
    
    // Disable all options
    options.forEach(option => option.classList.add('disabled'));
    
    // Check answer
    const isCorrect = selectedIndex === question.correct;
    if (isCorrect) {
        options[selectedIndex].classList.add('correct');
        score++;
    } else {
        options[selectedIndex].classList.add('incorrect');
        options[question.correct].classList.add('correct');
    }
    
    // Store user answer BEFORE any index changes
    userAnswers[currentQuestionIndex] = {
        question: question.question,
        selected: question.options[selectedIndex],
        correct: question.options[question.correct],
        isCorrect: selectedIndex === question.correct,
        explanation: question.explanation,
        status: "answered",
        timeTaken: TIMER_DURATION - timeLeft
    };
    
    // Disable skip button after answering
    skipBtn.disabled = true;
    
    // Show explanation
    showExplanation(question.explanation);
    
    // Show next button or submit button
    if (currentQuestionIndex < questions.length - 1) {
        nextBtn.classList.remove('hidden');
        submitBtn.classList.add('hidden');
    } else {
        nextBtn.classList.add('hidden');
        submitBtn.classList.remove('hidden');
    }
}

// Timer Functions
function startTimer() {
    // Reset timer
    timeLeft = TIMER_DURATION;
    timerValue.textContent = timeLeft;
    timerDisplay.classList.remove('hidden');
    timerDisplay.classList.remove('warning');
    progressFill.classList.remove('timer-warning');
    
    // Clear any existing timer
    if (timerInterval) {
        clearInterval(timerInterval);
    }
    
    // Start countdown
    timerInterval = setInterval(() => {
        timeLeft--;
        timerValue.textContent = timeLeft;
        
        // Add warning effects when time is low
        if (timeLeft <= 5) {
            timerDisplay.classList.add('warning');
            progressFill.classList.add('timer-warning');
        }
        
        // Auto-advance when time runs out
        if (timeLeft <= 0) {
            stopTimer();
            autoAdvanceQuestion();
        }
    }, 1000);
}

function stopTimer() {
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
    timerDisplay.classList.add('hidden');
    progressFill.classList.remove('timer-warning');
}

function autoAdvanceQuestion() {
    if (!quizActive) return;
    
    const question = questions[currentQuestionIndex];
    const options = document.querySelectorAll('.option');
    
    // Disable all options
    options.forEach(option => option.classList.add('disabled'));
    
    // Show correct answer
    options[question.correct].classList.add('correct');
    
    // Store user answer as incorrect (time ran out) BEFORE any index changes
    userAnswers[currentQuestionIndex] = {
        question: question.question,
        selected: "Time Expired",
        correct: question.options[question.correct],
        isCorrect: false,
        explanation: question.explanation,
        status: "timeout",
        timeTaken: TIMER_DURATION
    };
    
    // Disable skip button
    skipBtn.disabled = true;
    
    // Show explanation
    showExplanation(question.explanation);
    
    // Show next button or finish quiz
    if (currentQuestionIndex < questions.length - 1) {
        nextBtn.classList.remove('hidden');
        submitBtn.classList.add('hidden');
    } else {
        nextBtn.classList.add('hidden');
        submitBtn.classList.remove('hidden');
    }
}

// Show Explanation
function showExplanation(explanation) {
    explanationText.textContent = explanation;
    explanationSection.classList.remove('hidden');
    setTimeout(() => {
        explanationSection.classList.add('show');
    }, 100);
}

// Skip Question
function skipQuestion() {
    if (!quizActive || skipBtn.disabled) return;
    
    // Stop timer when question is skipped
    stopTimer();
    
    const question = questions[currentQuestionIndex];
    const options = document.querySelectorAll('.option');
    
    // Disable all options
    options.forEach(option => option.classList.add('disabled'));
    
    // Store user answer as skipped BEFORE any index changes
    userAnswers[currentQuestionIndex] = {
        question: question.question,
        selected: "Skipped",
        correct: question.options[question.correct],
        isCorrect: false,
        explanation: question.explanation,
        status: "skipped",
        timeTaken: TIMER_DURATION - timeLeft
    };
    
    // Disable skip button
    skipBtn.disabled = true;
    
    // Show explanation
    showExplanation(question.explanation);
    
    // Show next button or submit button
    if (currentQuestionIndex < questions.length - 1) {
        nextBtn.classList.remove('hidden');
        submitBtn.classList.add('hidden');
    } else {
        nextBtn.classList.add('hidden');
        submitBtn.classList.remove('hidden');
    }
}

// Next Question
function nextQuestion() {
    stopTimer();
    currentQuestionIndex++;
    loadQuestion();
}

// Show Results
function showResults() {
    quizActive = false;
    quizContainer.classList.remove('active');
    resultScreen.classList.add('active');
    
    // Calculate percentage
    const percentage = Math.round((score / questions.length) * 100);
    
    // Update score display
    scoreText.textContent = score;
    percentageText.textContent = `${percentage}%`;
    
    // Set performance message
    let message, messageClass;
    if (percentage >= 90) {
        message = "Coding Champion!";
        messageClass = "excellent";
        triggerCelebration();
    } else if (percentage >= 70) {
        message = "Great Job!";
        messageClass = "good";
    } else {
        message = "Keep Practicing!";
        messageClass = "needs-practice";
    }
    
    performanceMessage.textContent = message;
    performanceMessage.className = `performance-message ${messageClass}`;
}

// Trigger Celebration
function triggerCelebration() {
    const colors = ['#4ade80', '#22c55e', '#16a34a', '#15803d', '#14532d'];
    
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.animationDelay = Math.random() * 0.5 + 's';
            confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
            confettiContainer.appendChild(confetti);
            
            // Remove confetti after animation
            setTimeout(() => {
                confetti.remove();
            }, 4000);
        }, i * 30);
    }
}

// Toggle Report
function toggleReport() {
    if (!reportSection) return;

    // ALWAYS generate report before showing
    generateReport();

    // Toggle popup
    reportSection.classList.toggle('show');
}

// Generate Report
function generateReport() {
    reportContent.innerHTML = '';

    if (!userAnswers || userAnswers.length === 0) {
        reportContent.innerHTML = "<p style='color:white;'>No data available</p>";
        return;
    }

    // Debug validation - ensure array indices match
    console.log('User Answers Array:', userAnswers);
    console.log('Array Length:', userAnswers.length);
    console.log('Expected Length:', questions.length);

    // Calculate stats
    const correctCount = userAnswers.filter(a => a.isCorrect).length;
    const skippedCount = userAnswers.filter(a => a.selected === "Skipped").length;
    const wrongCount = userAnswers.length - correctCount - skippedCount;

    // Update stats display
    document.getElementById('correctCount').textContent = correctCount;
    document.getElementById('wrongCount').textContent = wrongCount;
    document.getElementById('skippedCount').textContent = skippedCount;

    // Generate report items
    questions.forEach((q, index) => {
        const answer = userAnswers[index] || {
            selected: "Not Answered",
            correct: q.options[q.correct],
            explanation: q.explanation,
            isCorrect: false,
            status: "unanswered"
        };
        
        const reportItem = document.createElement('div');
        
        // Determine class based on answer status
        let itemClass = 'report-item';
        if (answer.isCorrect) {
            itemClass += ' correct';
        } else if (answer.selected === "Skipped") {
            itemClass += ' skipped';
        } else {
            itemClass += ' incorrect';
        }
        
        reportItem.className = itemClass;

        // Clear existing content
        reportItem.innerHTML = '';
        
        // Question text
        const questionEl = document.createElement('div');
        questionEl.className = 'report-question';
        questionEl.textContent = `Q${index + 1}. ${q.question}`;
        reportItem.appendChild(questionEl);
        
        // Your answer
        const yourAnswerEl = document.createElement('div');
        yourAnswerEl.className = `report-answer ${answer.isCorrect ? 'correct' : (answer.selected === "Skipped" ? 'skipped' : 'incorrect')}`;
        yourAnswerEl.innerHTML = `<strong>Your Answer:</strong> `;
        yourAnswerEl.appendChild(document.createTextNode(answer.selected || "Not Answered"));
        reportItem.appendChild(yourAnswerEl);
        
        // Correct answer
        const correctAnswerEl = document.createElement('div');
        correctAnswerEl.className = 'report-answer correct';
        correctAnswerEl.innerHTML = `<strong>Correct Answer:</strong> `;
        correctAnswerEl.appendChild(document.createTextNode(answer.correct));
        reportItem.appendChild(correctAnswerEl);
        
        // Explanation
        const explanationEl = document.createElement('div');
        explanationEl.className = 'report-explanation';
        explanationEl.innerHTML = `<strong>Explanation:</strong> ${answer.explanation}`;
        reportItem.appendChild(explanationEl);

        reportContent.appendChild(reportItem);
    });

    // Initialize chart after rendering report
    initializeChart(correctCount, wrongCount, skippedCount);
}

// Initialize Chart
function initializeChart(correctCount, wrongCount, skippedCount) {
    const ctx = document.getElementById('reportChart');
    if (!ctx) return;

    // Destroy previous chart instance if it exists
    if (chartInstance) {
        chartInstance.destroy();
    }

    // Create new chart
    chartInstance = new Chart(ctx, {
        type: 'bar', // You can change to 'pie' if you prefer
        data: {
            labels: ['Correct', 'Wrong', 'Skipped'],
            datasets: [{
                label: 'Quiz Results',
                data: [correctCount, wrongCount, skippedCount],
                backgroundColor: [
                    'rgba(34, 197, 94, 0.8)',  // Green for correct
                    'rgba(239, 68, 68, 0.8)',   // Red for wrong
                    'rgba(250, 204, 21, 0.8)'   // Yellow for skipped
                ],
                borderColor: [
                    'rgba(34, 197, 94, 1)',
                    'rgba(239, 68, 68, 1)',
                    'rgba(250, 204, 21, 1)'
                ],
                borderWidth: 2,
                borderRadius: 8
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            animation: {
                duration: 1500,
                easing: 'easeOutQuart',
                delay: (context) => {
                    let delay = 0;
                    if (context.type === 'data' && context.mode === 'default') {
                        delay = context.dataIndex * 200;
                    }
                    return delay;
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    },
                    ticks: {
                        color: 'rgba(255, 255, 255, 0.8)',
                        stepSize: 1
                    }
                },
                x: {
                    grid: {
                        display: false
                    },
                    ticks: {
                        color: 'rgba(255, 255, 255, 0.8)'
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    titleColor: '#fff',
                    bodyColor: '#fff',
                    borderColor: 'rgba(255, 255, 255, 0.2)',
                    borderWidth: 1,
                    cornerRadius: 8,
                    displayColors: true
                }
            }
        }
    });
}
// Restart Quiz
function restartQuiz() {
    // Stop timer if running
    stopTimer();
    
    // Reset all variables
    currentQuestionIndex = 0;
    score = 0;
    userAnswers = [];
    quizActive = false;
    
    // Destroy chart instance if it exists
    if (chartInstance) {
        chartInstance.destroy();
        chartInstance = null;
    }
    
    // Clear confetti
    confettiContainer.innerHTML = '';
    
    // Hide all screens
    startScreen.classList.remove('active');
    quizContainer.classList.remove('active');
    resultScreen.classList.remove('active');
    reportSection.classList.remove('show');
    
    // Show start screen
    startScreen.classList.add('active');
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initQuiz);
