/* =========================================================
   STARDANCE LEARNING HUB
   JAVASCRIPT — VERSION 0.1 → 1.0
========================================================= */


/* =========================================================
   0.1 — COURSE DATABASE
========================================================= */

const courses = {

    HTML: {

        description:
            "Learn HTML from absolute beginner to professional level.",

        Basic: [

            {
                title: "What is HTML?",

                explanation: `
                    <div class="lesson-text">

                        <p>
                            HTML means
                            <strong>HyperText Markup Language</strong>.
                        </p>

                        <p>
                            HTML creates the structure of a webpage.
                        </p>

                        <h3>Think about a house</h3>

                        <p>
                            HTML is the structure,
                            CSS is the design,
                            and JavaScript adds behaviour.
                        </p>

                    </div>
                `,

                code: `<!DOCTYPE html>

<html lang="en">

<head>

    <meta charset="UTF-8">

    <title>My First Website</title>

</head>

<body>

    <h1>Hello World!</h1>

    <p>I am learning HTML.</p>

</body>

</html>`,

                challenge:
                    "Create an h1 element containing the text Hello World."
            },


            {
                title: "HTML Tags",

                explanation: `
                    <div class="lesson-text">

                        <p>
                            HTML uses tags to describe
                            different parts of a webpage.
                        </p>

                        <p>
                            For example:
                            <code>&lt;h1&gt;Hello&lt;/h1&gt;</code>
                        </p>

                        <p>
                            The first tag opens the element
                            and the second tag closes it.
                        </p>

                    </div>
                `,

                code: `<h1>Hello World!</h1>

<p>This is a paragraph.</p>`,

                challenge:
                    "Create a paragraph that says: I am learning HTML."
            },


            {
                title: "Headings",

                explanation: `
                    <div class="lesson-text">

                        <p>
                            HTML has six main heading levels:
                            h1, h2, h3, h4, h5 and h6.
                        </p>

                        <p>
                            h1 is normally the most important
                            heading and h6 is the smallest level.
                        </p>

                    </div>
                `,

                code: `<h1>Main Heading</h1>

<h2>Section Heading</h2>

<h3>Subsection Heading</h3>`,

                challenge:
                    "Create an h2 heading saying My Projects."
            },


            {
                title: "Paragraphs",

                explanation: `
                    <div class="lesson-text">

                        <p>
                            The <code>&lt;p&gt;</code> element
                            is used for paragraphs.
                        </p>

                    </div>
                `,

                code: `<p>
    This is my first paragraph.
</p>

<p>
    This is my second paragraph.
</p>`,

                challenge:
                    "Create two paragraphs."
            },


            {
                title: "Attributes",

                explanation: `
                    <div class="lesson-text">

                        <p>
                            Attributes provide additional
                            information about HTML elements.
                        </p>

                        <p>
                            Example:
                            <code>id="main"</code>
                        </p>

                    </div>
                `,

                code: `<p id="message">
    Hello!
</p>`,

                challenge:
                    "Create a paragraph with id='intro'."
            },


            {
                title: "Links",

                explanation: `
                    <div class="lesson-text">

                        <p>
                            The <code>&lt;a&gt;</code> element
                            creates a hyperlink.
                        </p>

                    </div>
                `,

                code: `<a href="https://example.com">
    Visit Example
</a>`,

                challenge:
                    "Create a link using the a element."
            },


            {
                title: "Images",

                explanation: `
                    <div class="lesson-text">

                        <p>
                            The <code>&lt;img&gt;</code> element
                            displays an image.
                        </p>

                        <p>
                            The src attribute specifies
                            where the image comes from.
                        </p>

                    </div>
                `,

                code: `<img
    src="https://via.placeholder.com/300"
    alt="Example image"
>`,

                challenge:
                    "Create an image with an alt attribute."
            },


            {
                title: "Lists",

                explanation: `
                    <div class="lesson-text">

                        <p>
                            HTML supports ordered and
                            unordered lists.
                        </p>

                        <p>
                            <code>&lt;ul&gt;</code> creates
                            an unordered list.
                        </p>

                        <p>
                            <code>&lt;ol&gt;</code> creates
                            an ordered list.
                        </p>

                    </div>
                `,

                code: `<ul>

    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>

</ul>`,

                challenge:
                    "Create a list containing three programming languages."
            },


            {
                title: "Div and Sections",

                explanation: `
                    <div class="lesson-text">

                        <p>
                            The div element is a general
                            container for HTML content.
                        </p>

                        <p>
                            Semantic elements such as
                            section, header and footer
                            give meaning to page structure.
                        </p>

                    </div>
                `,

                code: `<section>

    <h2>About Me</h2>

    <p>
        I am learning web development.
    </p>

</section>`,

                challenge:
                    "Create a section containing a heading and paragraph."
            }

        ]
    },


    /* =====================================================
       CSS
    ===================================================== */

    CSS: {

        description:
            "Learn CSS from basic styling to advanced web design.",

        Basic: [

            {
                title: "What is CSS?",

                explanation: `
                    <div class="lesson-text">

                        <p>
                            CSS means
                            <strong>Cascading Style Sheets</strong>.
                        </p>

                        <p>
                            CSS controls how HTML elements
                            look on the screen.
                        </p>

                    </div>
                `,

                code: `<style>

h1 {
    color: blue;
}

</style>

<h1>Hello CSS!</h1>`,

                challenge:
                    "Change the heading color."
            },


            {
                title: "Colors",

                explanation: `
                    <div class="lesson-text">

                        <p>
                            CSS can change text and
                            background colors.
                        </p>

                    </div>
                `,

                code: `<style>

body {
    background: black;
    color: white;
}

</style>

<h1>Hello!</h1>`,

                challenge:
                    "Change the background color."
            },


            {
                title: "Font Size",

                explanation: `
                    <div class="lesson-text">

                        <p>
                            The font-size property controls
                            the size of text.
                        </p>

                    </div>
                `,

                code: `<style>

h1 {
    font-size: 50px;
}

</style>

<h1>Large Text</h1>`,

                challenge:
                    "Change the heading to 60px."
            },


            {
                title: "Width and Height",

                explanation: `
                    <div class="lesson-text">

                        <p>
                            width controls horizontal size.
                        </p>

                        <p>
                            height controls vertical size.
                        </p>

                        <p>
                            1px means one CSS pixel.
                        </p>

                    </div>
                `,

                code: `<style>

.box {

    width: 200px;
    height: 100px;

    background: blue;

}

</style>

<div class="box"></div>`,

                challenge:
                    "Change the width to 300px."
            },


            {
                title: "Margin",

                explanation: `
                    <div class="lesson-text">

                        <p>
                            Margin creates space outside
                            an element.
                        </p>

                    </div>
                `,

                code: `<style>

.box {

    margin: 30px;

    background: lightblue;

}

</style>

<div class="box">
    Hello
</div>`,

                challenge:
                    "Change the margin to 50px."
            },


            {
                title: "Padding",

                explanation: `
                    <div class="lesson-text">

                        <p>
                            Padding creates space between
                            an element's content and its border.
                        </p>

                    </div>
                `,

                code: `<style>

.box {

    padding: 30px;

    background: lightblue;

}

</style>

<div class="box">
    Hello
</div>`,

                challenge:
                    "Change the padding to 40px."
            },


            {
                title: "Borders",

                explanation: `
                    <div class="lesson-text">

                        <p>
                            The border property creates
                            a visible boundary around an element.
                        </p>

                    </div>
                `,

                code: `<style>

.box {

    width: 200px;
    height: 100px;

    border: 3px solid black;

}

</style>

<div class="box"></div>`,

                challenge:
                    "Create a 5px border."
            },


            {
                title: "Classes",

                explanation: `
                    <div class="lesson-text">

                        <p>
                            Classes allow CSS rules to be
                            applied to selected HTML elements.
                        </p>

                    </div>
                `,

                code: `<style>

.card {

    padding: 20px;
    background: lightblue;

}

</style>

<div class="card">

    My Card

</div>`,

                challenge:
                    "Create a class called card."
            },


            {
                title: "Flexbox",

                explanation: `
                    <div class="lesson-text">

                        <p>
                            Flexbox is a powerful CSS layout
                            system.
                        </p>

                        <p>
                            It makes it easier to arrange
                            elements horizontally or vertically.
                        </p>

                    </div>
                `,

                code: `<style>

.container {

    display: flex;

    gap: 20px;

}

.box {

    padding: 30px;

    background: lightblue;

}

</style>

<div class="container">

    <div class="box">A</div>

    <div class="box">B</div>

    <div class="box">C</div>

</div>`,

                challenge:
                    "Create three boxes using Flexbox."
            }

        ]
    },


    /* =====================================================
       JAVASCRIPT
    ===================================================== */

    JavaScript: {

        description:
            "Learn JavaScript programming and build interactive websites.",

        Basic: [

            {
                title: "What is JavaScript?",

                explanation: `
                    <div class="lesson-text">

                        <p>
                            JavaScript is a programming language
                            commonly used to make webpages interactive.
                        </p>

                        <p>
                            HTML creates structure.
                            CSS creates appearance.
                            JavaScript creates behaviour.
                        </p>

                    </div>
                `,

                code: `<h1 id="title">
    Hello!
</h1>

<script>

document.getElementById("title")
    .textContent = "Hello JavaScript!";

<\/script>`,

                challenge:
                    "Use JavaScript to change the heading."
            },


            {
                title: "Variables",

                explanation: `
                    <div class="lesson-text">

                        <p>
                            A variable stores a value
                            that your program can use.
                        </p>

                        <p>
                            Modern JavaScript commonly
                            uses let and const.
                        </p>

                    </div>
                `,

                code: `<h1 id="output"></h1>

<script>

let name = "Stardance";

document.getElementById("output")
    .textContent = name;

<\/script>`,

                challenge:
                    "Create a variable containing your name."
            },


            {
                title: "Numbers",

                explanation: `
                    <div class="lesson-text">

                        <p>
                            JavaScript can perform mathematical
                            calculations.
                        </p>

                    </div>
                `,

                code: `<h1 id="answer"></h1>

<script>

let a = 10;
let b = 20;

let result = a + b;

document.getElementById("answer")
    .textContent = result;

<\/script>`,

                challenge:
                    "Create two numbers and add them."
            },


            {
                title: "Functions",

                explanation: `
                    <div class="lesson-text">

                        <p>
                            A function is a reusable block
                            of code.
                        </p>

                    </div>
                `,

                code: `<h1 id="output"></h1>

<script>

function sayHello() {

    return "Hello!";

}

document.getElementById("output")
    .textContent = sayHello();

<\/script>`,

                challenge:
                    "Create a function that returns your name."
            },


            {
                title: "Conditions",

                explanation: `
                    <div class="lesson-text">

                        <p>
                            Conditions allow a program
                            to make decisions.
                        </p>

                        <p>
                            The if statement runs code
                            when a condition is true.
                        </p>

                    </div>
                `,

                code: `<h1 id="output"></h1>

<script>

let age = 18;

if (age >= 18) {

    document.getElementById("output")
        .textContent = "Adult";

} else {

    document.getElementById("output")
        .textContent = "Under 18";

}

<\/script>`,

                challenge:
                    "Create an if statement."
            },


            {
                title: "Button Events",

                explanation: `
                    <div class="lesson-text">

                        <p>
                            JavaScript can react to events
                            such as button clicks.
                        </p>

                    </div>
                `,

                code: `<button onclick="changeText()">

    Click Me

</button>

<h1 id="message">

    Waiting...

</h1>

<script>

function changeText() {

    document.getElementById("message")
        .textContent = "Button clicked!";

}

<\/script>`,

                challenge:
                    "Make the button change the message."
            },


            {
                title: "The DOM",

                explanation: `
                    <div class="lesson-text">

                        <p>
                            DOM means Document Object Model.
                        </p>

                        <p>
                            JavaScript can use the DOM
                            to find and modify HTML elements.
                        </p>

                    </div>
                `,

                code: `<h1 id="title">
    Original
</h1>

<script>

const heading =
    document.getElementById("title");

heading.textContent =
    "Changed using the DOM!";

<\/script>`,

                challenge:
                    "Find an element using its id."
            }

        ]
    }

};


/* =========================================================
   0.2 — APPLICATION STATE
========================================================= */

let currentCourse = "HTML";

let currentLevel = "Basic";

let currentLesson = 0;


/* =========================================================
   0.3 — SAVE USER PROGRESS
========================================================= */

let xp =
    Number(localStorage.getItem("stardanceXP")) || 0;

let completedLessons =
    Number(localStorage.getItem("stardanceLessons")) || 0;


/* =========================================================
   0.4 — PAGE NAVIGATION
========================================================= */

function showPage(page) {

    document
        .querySelectorAll(".page")
        .forEach(function(element) {

            element.classList.add("hidden");

        });


    const target =
        document.getElementById(page);


    if (target) {

        target.classList.remove("hidden");

    }


    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });


    updateProgress();
}


/* =========================================================
   0.5 — COURSE SELECTION
========================================================= */

function openCourse(course) {

    currentCourse = course;

    document
        .getElementById("course-name")
        .textContent = course;


    document
        .getElementById("course-description")
        .textContent =
        courses[course].description;


    showPage("course");
}


/* =========================================================
   0.6 — LEVEL SELECTION
========================================================= */

function openLevel(level) {

    currentLevel = level;

    currentLesson = 0;


    /*
        At version 1.0, the detailed lessons
        are currently available in Basic.

        Other levels use the Basic lessons
        until their own lesson database is added.
    */

    if (!courses[currentCourse][currentLevel]) {

        courses[currentCourse][currentLevel] =
            courses[currentCourse].Basic;

    }


    loadLesson();

    showPage("lesson");
}


/* =========================================================
   0.7 — LOAD LESSON
========================================================= */

function loadLesson() {

    const lessons =
        courses[currentCourse][currentLevel];


    const lesson =
        lessons[currentLesson];


    if (!lesson) {

        return;

    }


    document
        .getElementById("lesson-course")
        .textContent = currentCourse;


    document
        .getElementById("lesson-level")
        .textContent = currentLevel;


    document
        .getElementById("lesson-title")
        .textContent = lesson.title;


    document
        .getElementById("lesson-body")
        .innerHTML =
        lesson.explanation;


    document
        .getElementById("code-editor")
        .value =
        lesson.code;


    document
        .getElementById("challenge-text")
        .textContent =
        lesson.challenge;


    buildLessonList();

    runCode();
}


/* =========================================================
   0.8 — LESSON SIDEBAR
========================================================= */

function buildLessonList() {

    const list =
        document.getElementById("lesson-list");


    list.innerHTML = "";


    const lessons =
        courses[currentCourse][currentLevel];


    lessons.forEach(function(lesson, index) {

        const button =
            document.createElement("button");


        button.type = "button";

        button.className =
            "lesson-item";


        if (index === currentLesson) {

            button.classList.add("active");

        }


        button.textContent =
            (index + 1) +
            ". " +
            lesson.title;


        button.onclick = function() {

            currentLesson = index;

            loadLesson();

        };


        list.appendChild(button);

    });
}


/* =========================================================
   0.9 — RUN CODE
========================================================= */

function runCode() {

    const editor =
        document.getElementById("code-editor");


    const preview =
        document.getElementById("preview");


    if (!editor || !preview) {

        return;

    }


    preview.srcdoc =
        editor.value;
}


/* =========================================================
   0.10 — NEXT LESSON
========================================================= */

function nextLesson() {

    const lessons =
        courses[currentCourse][currentLevel];


    if (
        currentLesson <
        lessons.length - 1
    ) {

        currentLesson++;

        loadLesson();

    }

    else {

        completeLevel();

    }
}


/* =========================================================
   0.11 — PREVIOUS LESSON
========================================================= */

function previousLesson() {

    if (currentLesson > 0) {

        currentLesson--;

        loadLesson();

    }

    else {

        alert(
            "You are already on the first lesson."
        );

    }
}


/* =========================================================
   0.12 — COMPLETE CHALLENGE
========================================================= */

function completeChallenge() {

    xp += 10;

    completedLessons++;


    localStorage.setItem(
        "stardanceXP",
        xp
    );


    localStorage.setItem(
        "stardanceLessons",
        completedLessons
    );


    updateProgress();


    alert(
        "🎉 Challenge completed!\n\n+10 XP"
    );
}


/* =========================================================
   0.13 — COMPLETE LEVEL
========================================================= */

function completeLevel() {

    alert(
        "🎉 Congratulations!\n\n" +
        "You completed the " +
        currentLevel +
        " level of " +
        currentCourse +
        "!"
    );


    showPage("progress");
}


/* =========================================================
   0.14 — UPDATE XP
========================================================= */

function updateProgress() {

    const xpDisplay =
        document.getElementById("xp-display");


    const xpBar =
        document.getElementById("xp-bar");


    const progressText =
        document.getElementById("progress-text");


    if (!xpDisplay) {

        return;

    }


    xpDisplay.textContent =
        xp + " XP";


    const percentage =
        Math.min(xp, 100);


    if (xpBar) {

        xpBar.style.width =
            percentage + "%";

    }


    if (progressText) {

        progressText.textContent =
            completedLessons +
            " challenges completed.";

    }


    unlockBadges();
}


/* =========================================================
   0.15 — BADGE SYSTEM
========================================================= */

function unlockBadges() {

    const firstBadge =
        document.getElementById("badge-first");


    const fiveBadge =
        document.getElementById("badge-five");


    const masterBadge =
        document.getElementById("badge-master");


    if (
        firstBadge &&
        completedLessons >= 1
    ) {

        firstBadge.classList.add("unlocked");

    }


    if (
        fiveBadge &&
        completedLessons >= 5
    ) {

        fiveBadge.classList.add("unlocked");

    }


    if (
        masterBadge &&
        xp >= 100
    ) {

        masterBadge.classList.add("unlocked");

    }
}


/* =========================================================
   0.16 — KEYBOARD SHORTCUTS
========================================================= */

document.addEventListener(
    "keydown",
    function(event) {

        /*
            Ctrl + Enter
            = Run code
        */

        if (
            event.ctrlKey &&
            event.key === "Enter"
        ) {

            runCode();

        }

    }
);


/* =========================================================
   0.17 — AUTO RUN CODE
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        updateProgress();

        showPage("home");

    }
);


/* =========================================================
   1.0 — START APPLICATION
========================================================= */

console.log(
    "🚀 Stardance Learning Hub v1.0 loaded successfully!"
);
