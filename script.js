/* =====================================
   STARDANCE LEARNING HUB
   JavaScript
===================================== */


/* =====================================
   COURSE DATA
===================================== */

const courses = {

    HTML: {

        description:
            "Learn HTML from complete beginner to advanced level.",

        Basic: [

            {
                title: "What is HTML?",

                explanation: `
                    <div class="lesson-text">

                        <p>
                            HTML stands for
                            <strong>HyperText Markup Language</strong>.
                        </p>

                        <p>
                            HTML creates the basic structure
                            of a webpage.
                        </p>

                        <h3>Think about a house</h3>

                        <p>
                            HTML is like the structure of a house.
                            CSS makes it beautiful, while
                            JavaScript makes it interactive.
                        </p>

                    </div>
                `,

                code:
`<!DOCTYPE html>

<html>

<head>
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
                            HTML uses tags to tell the browser
                            what an element is.
                        </p>

                        <h3>Example</h3>

                        <p>
                            <code>&lt;h1&gt;Hello&lt;/h1&gt;</code>
                        </p>

                        <p>
                            The opening tag is
                            <code>&lt;h1&gt;</code>
                            and the closing tag is
                            <code>&lt;/h1&gt;</code>.
                        </p>

                    </div>
                `,

                code:
`<h1>Hello World!</h1>

<p>This is a paragraph.</p>`,

                challenge:
                    "Create a paragraph that says I am learning HTML."
            },


            {
                title: "HTML Elements",

                explanation: `
                    <div class="lesson-text">

                        <p>
                            An HTML element normally contains
                            an opening tag, content and
                            a closing tag.
                        </p>

                        <h3>Example</h3>

                        <p>
                            <code>&lt;p&gt;Hello&lt;/p&gt;</code>
                        </p>

                    </div>
                `,

                code:
`<h1>My Website</h1>

<p>Welcome to my website.</p>`,

                challenge:
                    "Create an h2 element saying Technologies."
            },


            {
                title: "HTML Attributes",

                explanation: `
                    <div class="lesson-text">

                        <p>
                            Attributes provide additional
                            information about an HTML element.
                        </p>

                        <h3>Example</h3>

                        <p>
                            <code>
                                &lt;p id="intro"&gt;Hello&lt;/p&gt;
                            </code>
                        </p>

                        <p>
                            Here <code>id</code> is an attribute.
                        </p>

                    </div>
                `,

                code:
`<p id="intro">
    Hello World!
</p>`,

                challenge:
                    "Create a paragraph with id=\"message\"."
            },


            {
                title: "The Head Section",

                explanation: `
                    <div class="lesson-text">

                        <p>
                            The <code>&lt;head&gt;</code>
                            contains information about
                            the webpage.
                        </p>

                        <h3>Common elements</h3>

                        <p>
                            You will commonly find
                            <code>&lt;title&gt;</code>,
                            <code>&lt;meta&gt;</code>
                            and
                            <code>&lt;link&gt;</code>
                            inside it.
                        </p>

                    </div>
                `,

                code:
`<!DOCTYPE html>

<html lang="en">

<head>

    <meta charset="UTF-8">

    <meta name="viewport"
          content="width=device-width, initial-scale=1.0">

    <title>My Website</title>

</head>

<body>

    <h1>Hello!</h1>

</body>

</html>`,

                challenge:
                    "Create a webpage with a title called My Website."
            },


            {
                title: "The Body",

                explanation: `
                    <div class="lesson-text">

                        <p>
                            The <code>&lt;body&gt;</code>
                            contains the visible content
                            of the webpage.
                        </p>

                        <p>
                            Headings, paragraphs, images,
                            buttons and many other elements
                            normally go inside the body.
                        </p>

                    </div>
                `,

                code:
`<!DOCTYPE html>

<html>

<head>

    <title>My Site</title>

</head>

<body>

    <h1>Welcome!</h1>

    <p>This is my website.</p>

</body>

</html>`,

                challenge:
                    "Put a heading and paragraph inside the body."
            }

        ]
    },


    /* =====================================
       CSS
    ===================================== */

    CSS: {

        description:
            "Learn how to design beautiful and responsive webpages.",

        Basic: [

            {
                title: "What is CSS?",

                explanation: `
                    <div class="lesson-text">

                        <p>
                            CSS stands for
                            <strong>Cascading Style Sheets</strong>.
                        </p>

                        <p>
                            CSS controls the appearance
                            of HTML elements.
                        </p>

                        <h3>CSS can control</h3>

                        <p>
                            Colors, sizes, spacing, layouts,
                            borders, animations and much more.
                        </p>

                    </div>
                `,

                code:
`<!DOCTYPE html>

<html>

<head>

<style>

h1 {
    font-size: 45px;
}

</style>

</head>

<body>

<h1>Hello CSS!</h1>

</body>

</html>`,

                challenge:
                    "Change the heading size to 60px."
            },


            {
                title: "CSS Colors",

                explanation: `
                    <div class="lesson-text">

                        <p>
                            CSS can change text colors
                            and background colors.
                        </p>

                        <h3>Example</h3>

                        <p>
                            The <code>color</code> property
                            changes text color.
                        </p>

                    </div>
                `,

                code:
`<!DOCTYPE html>

<html>

<head>

<style>

h1 {
    color: blue;
}

</style>

</head>

<body>

<h1>Hello!</h1>

</body>

</html>`,

                challenge:
                    "Change the heading to another color."
            },


            {
                title: "CSS Width and Height",

                explanation: `
                    <div class="lesson-text">

                        <p>
                            CSS can control the width
                            and height of elements.
                        </p>

                        <p>
                            For example,
                            <code>width: 200px;</code>
                            gives an element a width of
                            200 CSS pixels.
                        </p>

                    </div>
                `,

                code:
`<!DOCTYPE html>

<html>

<head>

<style>

.box {

    width: 200px;
    height: 100px;

    background: black;

}

</style>

</head>

<body>

<div class="box"></div>

</body>

</html>`,

                challenge:
                    "Change the box width."
            },


            {
                title: "CSS Classes",

                explanation: `
                    <div class="lesson-text">

                        <p>
                            A class allows you to apply
                            the same CSS rules to one or
                            multiple HTML elements.
                        </p>

                    </div>
                `,

                code:
`<!DOCTYPE html>

<html>

<head>

<style>

.box {

    padding: 20px;
    background: lightblue;

}

</style>

</head>

<body>

<div class="box">
    Hello!
</div>

</body>

</html>`,

                challenge:
                    "Create a class called card."
            }

        ]
    },


    /* =====================================
       JAVASCRIPT
    ===================================== */

    JavaScript: {

        description:
            "Learn programming and make webpages interactive.",

        Basic: [

            {
                title: "What is JavaScript?",

                explanation: `
                    <div class="lesson-text">

                        <p>
                            JavaScript is a programming language
                            commonly used to make webpages
                            interactive.
                        </p>

                        <h3>JavaScript can</h3>

                        <p>
                            React to clicks, change webpage
                            content, calculate values, communicate
                            with APIs and much more.
                        </p>

                    </div>
                `,

                code:
`<!DOCTYPE html>

<html>

<body>

<h1 id="title">
    Hello!
</h1>

<script>

document.getElementById("title")
    .textContent = "Hello JavaScript!";

</script>

</body>

</html>`,

                challenge:
                    "Use JavaScript to change the heading text."
            },


            {
                title: "Variables",

                explanation: `
                    <div class="lesson-text">

                        <p>
                            A variable stores a value
                            that your program can use.
                        </p>

                        <h3>Example</h3>

                        <p>
                            <code>let name = "Learner";</code>
                        </p>

                    </div>
                `,

                code:
`<!DOCTYPE html>

<html>

<body>

<h1 id="output"></h1>

<script>

let name = "Learner";

document.getElementById("output")
    .textContent = "Hello " + name;

</script>

</body>

</html>`,

                challenge:
                    "Create a variable containing your name."
            },


            {
                title: "Functions",

                explanation: `
                    <div class="lesson-text">

                        <p>
                            A function is a reusable block
                            of code that performs a task.
                        </p>

                    </div>
                `,

                code:
`<!DOCTYPE html>

<html>

<body>

<h1 id="output"></h1>

<script>

function sayHello() {

    return "Hello!";

}

document.getElementById("output")
    .textContent = sayHello();

</script>

</body>

</html>`,

                challenge:
                    "Create a function that returns your name."
            },


            {
                title: "Button Events",

                explanation: `
                    <div class="lesson-text">

                        <p>
                            JavaScript can respond to events
                            such as button clicks.
                        </p>

                    </div>
                `,

                code:
`<!DOCTYPE html>

<html>

<body>

<button onclick="changeText()">
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

</script>

</body>

</html>`,

                challenge:
                    "Make the button change the message."
            }

        ]
    }

};


/* =====================================
   CURRENT STATE
===================================== */

let currentCourse = "HTML";

let currentLevel = "Basic";

let currentLesson = 0;

let xp =
    Number(localStorage.getItem("stardanceXP")) || 0;

let completedLessons =
    Number(localStorage.getItem("stardanceLessons")) || 0;


/* =====================================
   PAGE SYSTEM
===================================== */

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


/* =====================================
   OPEN COURSE
===================================== */

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


/* =====================================
   OPEN LEVEL
===================================== */

function openLevel(level) {

    currentLevel = level;

    currentLesson = 0;


    /*
        At this stage, only Basic lessons
        are created.

        Until other levels are added,
        they use the Basic lessons.
    */

    if (!courses[currentCourse][currentLevel]) {

        courses[currentCourse][currentLevel] =
            courses[currentCourse].Basic;

    }


    loadLesson();

    showPage("lesson");
}


/* =====================================
   LOAD LESSON
===================================== */

function loadLesson() {

    const lessons =
        courses[currentCourse][currentLevel];


    const lesson =
        lessons[currentLesson];


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
        .innerHTML = lesson.explanation;


    document
        .getElementById("code-editor")
        .value = lesson.code;


    document
        .getElementById("challenge-text")
        .textContent = lesson.challenge;


    buildLessonList();

    runCode();
}


/* =====================================
   BUILD LESSON LIST
===================================== */

function buildLessonList() {

    const list =
        document.getElementById("lesson-list");


    list.innerHTML = "";


    const lessons =
        courses[currentCourse][currentLevel];


    lessons.forEach(function(lesson, index) {

        const button =
            document.createElement("button");


        button.className = "lesson-item";


        if (index === currentLesson) {

            button.classList.add("active");

        }


        button.textContent =
            (index + 1) + ". " + lesson.title;


        button.onclick = function() {

            currentLesson = index;

            loadLesson();

        };


        list.appendChild(button);

    });
}


/* =====================================
   RUN USER CODE
===================================== */

function runCode() {

    const code =
        document
            .getElementById("code-editor")
            .value;


    const preview =
        document.getElementById("preview");


    preview.srcdoc = code;
}


/* =====================================
   NEXT LESSON
===================================== */

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

        alert(
            "🎉 You completed this level!"
        );

    }
}


/* =====================================
   PREVIOUS LESSON
===================================== */

function previousLesson() {

    if (currentLesson > 0) {

        currentLesson--;

        loadLesson();

    }

    else {

        alert(
            "This is the first lesson."
        );

    }
}


/* =====================================
   COMPLETE CHALLENGE
===================================== */

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


/* =====================================
   UPDATE PROGRESS
===================================== */

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


    xpBar.style.width =
        percentage + "%";


    progressText.textContent =
        completedLessons +
        " challenges completed.";


    unlockBadges();
}


/* =====================================
   BADGES
===================================== */

function unlockBadges() {

    if (completedLessons >= 1) {

        document
            .getElementById("badge-first")
            .classList.add("unlocked");

    }


    if (completedLessons >= 5) {

        document
            .getElementById("badge-five")
            .classList.add("unlocked");

    }


    if (xp >= 100) {

        document
            .getElementById("badge-master")
            .classList.add("unlocked");

    }
}


/* =====================================
   START WEBSITE
===================================== */

updateProgress();

showPage("home");
