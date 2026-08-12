```javascript
/* =========================================================
   STARDANCE LEARNING HUB
   JAVASCRIPT v1.0

   HTML + CSS + JavaScript
   Basic → Intermediate → Advanced → Expert
========================================================= */


/* =========================================================
   COURSE DATABASE
========================================================= */

const courses = {

    /* =====================================================
       HTML
    ===================================================== */

    HTML: {

        description:
            "Learn HTML from your first tag to professional webpage structure.",


        Basic: [

            {
                title: "What is HTML?",

                explanation: `
                    <p><strong>HTML</strong> means HyperText Markup Language.</p>

                    <p>
                    HTML is used to create the structure of a webpage.
                    Think of HTML as the skeleton of a website.
                    </p>

                    <h3>Example</h3>

                    <p>
                    A heading, paragraph, image and button can all be
                    created using HTML elements.
                    </p>
                `,

                code:
`<!DOCTYPE html>
<html>
<head>
    <title>My First Page</title>
</head>

<body>

    <h1>Hello World!</h1>

    <p>I am learning HTML.</p>

</body>
</html>`,

                challenge:
                    "Change the heading to your own name."
            },


            {
                title: "HTML Headings",

                explanation: `
                    <p>
                    HTML provides six heading levels:
                    <strong>h1</strong> through <strong>h6</strong>.
                    </p>

                    <p>
                    h1 is the most important heading and h6 is the
                    least important.
                    </p>
                `,

                code:
`<!DOCTYPE html>
<html>
<body>

<h1>Main Heading</h1>
<h2>Second Heading</h2>
<h3>Third Heading</h3>

</body>
</html>`,

                challenge:
                    "Add an h4 heading containing the text 'My Website'."
            },


            {
                title: "Paragraphs",

                explanation: `
                    <p>
                    The <strong>p</strong> element creates a paragraph.
                    </p>

                    <p>
                    You can use multiple paragraphs to organize
                    information on your webpage.
                    </p>
                `,

                code:
`<!DOCTYPE html>
<html>
<body>

<h1>About Me</h1>

<p>Hello! My name is Sarthak.</p>

<p>I am learning web development.</p>

</body>
</html>`,

                challenge:
                    "Add another paragraph."
            },


            {
                title: "Links",

                explanation: `
                    <p>
                    The <strong>a</strong> element creates a hyperlink.
                    </p>

                    <p>
                    The <strong>href</strong> attribute tells the browser
                    where the link should go.
                    </p>
                `,

                code:
`<!DOCTYPE html>
<html>
<body>

<h1>My Links</h1>

<a href="https://www.nasa.gov">
    Visit NASA
</a>

</body>
</html>`,

                challenge:
                    "Create a link to another website."
            }

        ],



        Intermediate: [

            {
                title: "Semantic HTML",

                explanation: `
                    <p>
                    Semantic elements describe what their content means.
                    </p>

                    <p>
                    Examples include:
                    <strong>header</strong>,
                    <strong>nav</strong>,
                    <strong>main</strong>,
                    <strong>section</strong>,
                    <strong>article</strong> and
                    <strong>footer</strong>.
                    </p>
                `,

                code:
`<!DOCTYPE html>
<html>

<body>

<header>
    <h1>My Website</h1>
</header>

<main>

    <section>
        <h2>About</h2>
        <p>Welcome to my website.</p>
    </section>

</main>

<footer>
    My Footer
</footer>

</body>
</html>`,

                challenge:
                    "Add a navigation section."
            },


            {
                title: "HTML Forms",

                explanation: `
                    <p>
                    Forms allow users to enter information.
                    </p>

                    <p>
                    Common form elements include input,
                    label, textarea and button.
                    </p>
                `,

                code:
`<!DOCTYPE html>
<html>

<body>

<h1>Contact</h1>

<form>

<label>Name:</label>

<input type="text">

<br><br>

<button type="submit">
    Send
</button>

</form>

</body>
</html>`,

                challenge:
                    "Add an email input."
            },


            {
                title: "Tables",

                explanation: `
                    <p>
                    HTML tables organize information into rows
                    and columns.
                    </p>

                    <p>
                    Important elements are:
                    table, tr, th and td.
                    </p>
                `,

                code:
`<!DOCTYPE html>
<html>

<body>

<table border="1">

<tr>
    <th>Name</th>
    <th>Score</th>
</tr>

<tr>
    <td>Alex</td>
    <td>95</td>
</tr>

</table>

</body>
</html>`,

                challenge:
                    "Add another student to the table."
            }

        ],



        Advanced: [

            {
                title: "Accessibility",

                explanation: `
                    <p>
                    Accessible HTML makes websites easier to use
                    for people with different abilities.
                    </p>

                    <p>
                    Use meaningful headings, labels, alt text
                    and semantic elements.
                    </p>
                `,

                code:
`<!DOCTYPE html>
<html>

<body>

<img
    src="https://via.placeholder.com/300"
    alt="Example image"
>

<label for="name">
    Your name
</label>

<input
    id="name"
    type="text"
>

</body>
</html>`,

                challenge:
                    "Add an accessible label to another input."
            },


            {
                title: "Data Attributes",

                explanation: `
                    <p>
                    HTML allows custom data using
                    <strong>data-*</strong> attributes.
                    </p>

                    <p>
                    JavaScript can later read these values.
                    </p>
                `,

                code:
`<!DOCTYPE html>
<html>

<body>

<button
    data-course="HTML"
    data-level="Advanced"
>
    Learn HTML
</button>

</body>
</html>`,

                challenge:
                    "Create a button with a data-topic attribute."
            },


            {
                title: "Professional Page Structure",

                explanation: `
                    <p>
                    Large websites should have a clear and logical
                    document structure.
                    </p>

                    <p>
                    Organize content using semantic elements
                    instead of putting everything inside divs.
                    </p>
                `,

                code:
`<!DOCTYPE html>
<html>

<head>
    <title>Professional Site</title>
</head>

<body>

<header>
    <h1>My Site</h1>

    <nav>
        <a href="#">Home</a>
        <a href="#">About</a>
    </nav>
</header>

<main>

    <article>
        <h2>My Article</h2>

        <p>
            Article content.
        </p>
    </article>

</main>

<footer>
    Copyright 2026
</footer>

</body>
</html>`,

                challenge:
                    "Add a second article."
            }

        ],



        Expert: [

            {
                title: "HTML Architecture",

                explanation: `
                    <p>
                    Professional websites need a consistent
                    document architecture.
                    </p>

                    <p>
                    Separate navigation, content, supporting
                    information and footer content clearly.
                    </p>
                `,

                code:
`<!DOCTYPE html>
<html lang="en">

<head>

<meta charset="UTF-8">

<meta
    name="viewport"
    content="width=device-width, initial-scale=1.0"
>

<title>Professional Application</title>

</head>

<body>

<header>
    <nav>
        <a href="/">Home</a>
    </nav>
</header>

<main>

    <section>
        <h1>Application</h1>

        <article>
            <h2>Content</h2>
            <p>Main information.</p>
        </article>

    </section>

</main>

<footer>
    Footer
</footer>

</body>
</html>`,

                challenge:
                    "Create another semantic section."
            },


            {
                title: "Metadata",

                explanation: `
                    <p>
                    Metadata gives browsers and search engines
                    information about your webpage.
                    </p>

                    <p>
                    Common metadata includes charset,
                    viewport and description.
                    </p>
                `,

                code:
`<!DOCTYPE html>

<html lang="en">

<head>

<meta charset="UTF-8">

<meta
    name="viewport"
    content="width=device-width, initial-scale=1.0"
>

<meta
    name="description"
    content="My professional website"
>

<title>Professional Website</title>

</head>

<body>

<h1>Hello</h1>

</body>

</html>`,

                challenge:
                    "Add a theme-color metadata tag."
            },


            {
                title: "HTML Best Practices",

                explanation: `
                    <p>
                    Professional HTML should be readable,
                    semantic, accessible and logically organized.
                    </p>

                    <p>
                    Good structure makes CSS and JavaScript
                    easier to maintain.
                    </p>
                `,

                code:
`<!DOCTYPE html>

<html lang="en">

<head>

<meta charset="UTF-8">

<title>Clean HTML</title>

</head>

<body>

<header>

    <h1>My Application</h1>

    <nav>
        <a href="#home">Home</a>
        <a href="#about">About</a>
    </nav>

</header>

<main id="home">

    <section id="about">

        <h2>About</h2>

        <p>
            Clean and semantic HTML.
        </p>

    </section>

</main>

<footer>

    <p>My Website</p>

</footer>

</body>

</html>`,

                challenge:
                    "Add another navigation link."
            }

        ]

    },



    /* =====================================================
       CSS
    ===================================================== */

    CSS: {

        description:
            "Learn CSS from colors and sizes to layouts, animations and advanced design.",


        Basic: [

            {
                title: "What is CSS?",

                explanation: `
                    <p>
                    CSS means <strong>Cascading Style Sheets</strong>.
                    </p>

                    <p>
                    HTML creates the structure and CSS controls
                    how that structure looks.
                    </p>
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

<h1>Hello CSS!</h1>

</body>

</html>`,

                challenge:
                    "Change the heading color."
            },


            {
                title: "Colors",

                explanation: `
                    <p>
                    CSS can change text and background colors.
                    </p>
                `,

                code:
`<!DOCTYPE html>

<html>

<head>

<style>

body {
    background: black;
}

h1 {
    color: cyan;
}

</style>

</head>

<body>

<h1>Colors</h1>

</body>

</html>`,

                challenge:
                    "Change the background color."
            },


            {
                title: "Width and Height",

                explanation: `
                    <p>
                    CSS width and height control the dimensions
                    of an element.
                    </p>

                    <p>
                    Pixels are one possible unit.
                    </p>
                `,

                code:
`<!DOCTYPE html>

<html>

<head>

<style>

.box {

    width: 200px;

    height: 100px;

    background: purple;

}

</style>

</head>

<body>

<div class="box"></div>

</body>

</html>`,

                challenge:
                    "Change the box width to 300px."
            }

        ],



        Intermediate: [

            {
                title: "Flexbox",

                explanation: `
                    <p>
                    Flexbox is used to arrange elements efficiently
                    in rows or columns.
                    </p>
                `,

                code:
`<!DOCTYPE html>

<html>

<head>

<style>

.container {

    display: flex;

    gap: 20px;

}

.box {

    padding: 30px;

    background: purple;

}

</style>

</head>

<body>

<div class="container">

<div class="box">A</div>

<div class="box">B</div>

<div class="box">C</div>

</div>

</body>

</html>`,

                challenge:
                    "Center the boxes."
            },


            {
                title: "CSS Grid",

                explanation: `
                    <p>
                    CSS Grid is useful for two-dimensional layouts.
                    </p>
                `,

                code:
`<!DOCTYPE html>

<html>

<head>

<style>

.grid {

    display: grid;

    grid-template-columns:
        repeat(3, 1fr);

    gap: 10px;

}

.box {

    padding: 30px;

    background: cyan;

}

</style>

</head>

<body>

<div class="grid">

<div class="box">1</div>
<div class="box">2</div>
<div class="box">3</div>

</div>

</body>

</html>`,

                challenge:
                    "Change the grid to two columns."
            }

        ],



        Advanced: [

            {
                title: "Responsive Design",

                explanation: `
                    <p>
                    Responsive design allows a website to adapt
                    to different screen sizes.
                    </p>

                    <p>
                    Media queries are commonly used for this.
                    </p>
                `,

                code:
`<!DOCTYPE html>

<html>

<head>

<style>

.box {

    width: 500px;

    height: 150px;

    background: purple;

}

@media (max-width: 600px) {

    .box {

        width: 100%;

    }

}

</style>

</head>

<body>

<div class="box"></div>

</body>

</html>`,

                challenge:
                    "Change the breakpoint to 700px."
            },


            {
                title: "Transitions",

                explanation: `
                    <p>
                    CSS transitions create smooth changes
                    between states.
                    </p>
                `,

                code:
`<!DOCTYPE html>

<html>

<head>

<style>

button {

    padding: 15px;

    background: blue;

    color: white;

    transition: 0.3s;

}

button:hover {

    transform: scale(1.1);

}

</style>

</head>

<body>

<button>
    Hover Me
</button>

</body>

</html>`,

                challenge:
                    "Change the transition duration."
            }

        ],



        Expert: [

            {
                title: "CSS Variables",

                explanation: `
                    <p>
                    CSS custom properties allow reusable values.
                    </p>

                    <p>
                    They are especially useful in large projects
                    and design systems.
                    </p>
                `,

                code:
`<!DOCTYPE html>

<html>

<head>

<style>

:root {

    --main-color: #6c63ff;

}

button {

    background:
        var(--main-color);

    color: white;

    padding: 15px;

}

</style>

</head>

<body>

<button>
    CSS Variable
</button>

</body>

</html>`,

                challenge:
                    "Create a second CSS variable."
            },


            {
                title: "Advanced Animations",

                explanation: `
                    <p>
                    CSS keyframes allow you to create custom
                    animations without JavaScript.
                    </p>
                `,

                code:
`<!DOCTYPE html>

<html>

<head>

<style>

.box {

    width: 80px;

    height: 80px;

    background: cyan;

    animation:
        move 2s infinite alternate;

}

@keyframes move {

    from {

        transform: translateX(0);

    }

    to {

        transform: translateX(200px);

    }

}

</style>

</head>

<body>

<div class="box"></div>

</body>

</html>`,

                challenge:
                    "Change the animation duration."
            }

        ]

    },



    /* =====================================================
       JAVASCRIPT
    ===================================================== */

    JavaScript: {

        description:
            "Learn JavaScript programming from variables to interactive web applications.",


        Basic: [

            {
                title: "What is JavaScript?",

                explanation: `
                    <p>
                    JavaScript is a programming language commonly
                    used to make websites interactive.
                    </p>

                    <p>
                    HTML creates structure, CSS creates appearance,
                    and JavaScript adds behavior.
                    </p>
                `,

                code:
`<!DOCTYPE html>

<html>

<body>

<h1 id="title">
    Hello
</h1>

<script>

document.getElementById("title")
    .textContent = "Hello JavaScript!";

</script>

</body>

</html>`,

                challenge:
                    "Change the message."
            },


            {
                title: "Variables",

                explanation: `
                    <p>
                    Variables store information.
                    </p>

                    <p>
                    Modern JavaScript commonly uses
                    <strong>let</strong> and <strong>const</strong>.
                    </p>
                `,

                code:
`<!DOCTYPE html>

<html>

<body>

<h1 id="output"></h1>

<script>

let name = "Sarthak";

document.getElementById("output")
    .textContent = name;

</script>

</body>

</html>`,

                challenge:
                    "Change the name."
            },


            {
                title: "Functions",

                explanation: `
                    <p>
                    Functions contain reusable instructions.
                    </p>
                `,

                code:
`<!DOCTYPE html>

<html>

<body>

<button onclick="hello()">
    Click Me
</button>

<script>

function hello() {

    alert("Hello!");

}

</script>

</body>

</html>`,

                challenge:
                    "Change the alert message."
            }

        ],



        Intermediate: [

            {
                title: "Arrays",

                explanation: `
                    <p>
                    Arrays store multiple values in one variable.
                    </p>
                `,

                code:
`<!DOCTYPE html>

<html>

<body>

<h1 id="output"></h1>

<script>

const planets = [
    "Earth",
    "Mars",
    "Jupiter"
];

document.getElementById("output")
    .textContent = planets.join(", ");

</script>

</body>

</html>`,

                challenge:
                    "Add another planet."
            },


            {
                title: "Objects",

                explanation: `
                    <p>
                    Objects store related information using
                    properties and values.
                    </p>
                `,

                code:
`<!DOCTYPE html>

<html>

<body>

<h1 id="output"></h1>

<script>

const student = {

    name: "Sarthak",

    level: 11

};

document.getElementById("output")
    .textContent =
    student.name + " - Class " + student.level;

</script>

</body>

</html>`,

                challenge:
                    "Add a new property."
            },


            {
                title: "DOM Manipulation",

                explanation: `
                    <p>
                    The DOM represents the webpage as objects
                    that JavaScript can access and modify.
                    </p>
                `,

                code:
`<!DOCTYPE html>

<html>

<body>

<h1 id="title">
    Original
</h1>

<button onclick="changeTitle()">
    Change
</button>

<script>

function changeTitle() {

    document.getElementById("title")
        .textContent = "Changed!";

}

</script>

</body>

</html>`,

                challenge:
                    "Change the text and its style."
            }

        ],



        Advanced: [

            {
                title: "Events",

                explanation: `
                    <p>
                    Events allow JavaScript to react to user actions.
                    </p>

                    <p>
                    Examples include clicks, typing,
                    mouse movement and keyboard events.
                    </p>
                `,

                code:
`<!DOCTYPE html>

<html>

<body>

<button id="button">
    Click Me
</button>

<p id="message"></p>

<script>

document
    .getElementById("button")
    .addEventListener(
        "click",
        function() {

            document
                .getElementById("message")
                .textContent =
                "Button clicked!";

        }
    );

</script>

</body>

</html>`,

                challenge:
                    "Change the message."
            },


            {
                title: "Local Storage",

                explanation: `
                    <p>
                    localStorage allows a webpage to store
                    small amounts of data in the browser.
                    </p>

                    <p>
                    This can be useful for saving learning progress.
                    </p>
                `,

                code:
`<!DOCTYPE html>

<html>

<body>

<button onclick="saveData()">
    Save
</button>

<button onclick="loadData()">
    Load
</button>

<p id="output"></p>

<script>

function saveData() {

    localStorage.setItem(
        "message",
        "Hello!"
    );

}

function loadData() {

    document.getElementById("output")
        .textContent =
        localStorage.getItem("message");

}

</script>

</body>

</html>`,

                challenge:
                    "Change the stored message."
            }

        ],



        Expert: [

            {
                title: "Async JavaScript",

                explanation: `
                    <p>
                    Asynchronous JavaScript allows a program to
                    perform operations that may take time without
                    blocking everything else.
                    </p>
                `,

                code:
`<!DOCTYPE html>

<html>

<body>

<h1 id="output">
    Waiting...
</h1>

<script>

setTimeout(
    function() {

        document.getElementById("output")
            .textContent =
            "Finished!";

    },
    2000
);

</script>

</body>

</html>`,

                challenge:
                    "Change the delay."
            },


            {
                title: "Fetch API",

                explanation: `
                    <p>
                    The Fetch API allows JavaScript to request
                    resources from servers.
                    </p>

                    <p>
                    It is commonly used when working with APIs.
                    </p>
                `,

                code:
`<!DOCTYPE html>

<html>

<body>

<h2 id="output">
    Loading...
</h2>

<script>

fetch(
    "https://jsonplaceholder.typicode.com/todos/1"
)

.then(
    response =>
        response.json()
)

.then(
    data => {

        document.getElementById("output")
            .textContent =
            data.title;

    }
)

.catch(
    error => {

        document.getElementById("output")
            .textContent =
            "Request failed.";

    }
);

</script>

</body>

</html>`,

                challenge:
                    "Change the API endpoint."
            },


            {
                title: "Application Architecture",

                explanation: `
                    <p>
                    Professional JavaScript applications separate
                    data, state, user interface and application logic.
                    </p>

                    <p>
                    This makes large applications easier to maintain
                    and expand.
                    </p>
                `,

                code:
`<!DOCTYPE html>

<html>

<body>

<h1 id="output">
    Application
</h1>

<script>

const state = {

    user: "Student",

    xp: 100

};

function render() {

    document.getElementById("output")
        .textContent =
        state.user +
        " has " +
        state.xp +
        " XP.";

}

render();

</script>

</body>

</html>`,

                challenge:
                    "Change the XP value."
            }

        ]

    }

};



/* =========================================================
   APPLICATION STATE
========================================================= */

let currentCourse = "HTML";

let currentLevel = "Basic";

let currentLesson = 0;


/* =========================================================
   SAVED PROGRESS
========================================================= */

let xp =
    Number(
        localStorage.getItem("stardanceXP")
    ) || 0;


let completedLessons =
    Number(
        localStorage.getItem("stardanceLessons")
    ) || 0;



/* =========================================================
   PAGE SYSTEM
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
   OPEN COURSE
========================================================= */

function openCourse(course) {

    if (!courses[course]) {

        console.error(
            "Course not found:",
            course
        );

        return;

    }


    currentCourse = course;

    currentLevel = "Basic";

    currentLesson = 0;


    const name =
        document.getElementById("course-name");


    const description =
        document.getElementById(
            "course-description"
        );


    if (name) {

        name.textContent = course;

    }


    if (description) {

        description.textContent =
            courses[course].description;

    }


    showPage("course");

}



/* =========================================================
   OPEN LEVEL
========================================================= */

function openLevel(level) {

    if (
        !courses[currentCourse] ||
        !courses[currentCourse][level]
    ) {

        console.error(
            "Level not found:",
            currentCourse,
            level
        );

        return;

    }


    currentLevel = level;

    currentLesson = 0;


    loadLesson();

    showPage("lesson");

}



/* =========================================================
   LOAD LESSON
========================================================= */

function loadLesson() {

    const course =
        courses[currentCourse];


    if (!course) {

        return;

    }


    const lessons =
        course[currentLevel];


    if (
        !lessons ||
        lessons.length === 0
    ) {

        console.error(
            "No lessons found:",
            currentCourse,
            currentLevel
        );

        return;

    }


    if (
        currentLesson < 0 ||
        currentLesson >= lessons.length
    ) {

        currentLesson = 0;

    }


    const lesson =
        lessons[currentLesson];


    const courseElement =
        document.getElementById(
            "lesson-course"
        );


    const levelElement =
        document.getElementById(
            "lesson-level"
        );


    const titleElement =
        document.getElementById(
            "lesson-title"
        );


    const bodyElement =
        document.getElementById(
            "lesson-body"
        );


    const editor =
        document.getElementById(
            "code-editor"
        );


    const challenge =
        document.getElementById(
            "challenge-text"
        );


    if (courseElement) {

        courseElement.textContent =
            currentCourse;

    }


    if (levelElement) {

        levelElement.textContent =
            currentLevel;

    }


    if (titleElement) {

        titleElement.textContent =
            lesson.title;

    }


    if (bodyElement) {

        bodyElement.innerHTML =
            lesson.explanation;

    }


    if (editor) {

        editor.value =
            lesson.code;

    }


    if (challenge) {

        challenge.textContent =
            lesson.challenge;

    }


    buildLessonList();

    runCode();

}



/* =========================================================
   LESSON LIST
========================================================= */

function buildLessonList() {

    const list =
        document.getElementById(
            "lesson-list"
        );


    if (!list) {

        return;

    }


    list.innerHTML = "";


    const lessons =
        courses[currentCourse][currentLevel];


    lessons.forEach(
        function(lesson, index) {

            const button =
                document.createElement(
                    "button"
                );


            button.type = "button";


            button.className =
                "lesson-item";


            if (
                index === currentLesson
            ) {

                button.classList.add(
                    "active"
                );

            }


            button.textContent =
                (index + 1) +
                ". " +
                lesson.title;


            button.onclick =
                function() {

                    currentLesson =
                        index;

                    loadLesson();

                };


            list.appendChild(
                button
            );

        }
    );

}



/* =========================================================
   RUN CODE
========================================================= */

function runCode() {

    const editor =
        document.getElementById(
            "code-editor"
        );


    const preview =
        document.getElementById(
            "preview"
        );


    if (
        !editor ||
        !preview
    ) {

        return;

    }


    preview.srcdoc =
        editor.value;

}



/* =========================================================
   NEXT LESSON
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

        return;

    }


    alert(
        "🎉 You completed this level!"
    );

}



/* =========================================================
   PREVIOUS LESSON
========================================================= */

function previousLesson() {

    if (
        currentLesson > 0
    ) {

        currentLesson--;

        loadLesson();

        return;

    }


    alert(
        "This is the first lesson."
    );

}



/* =========================================================
   COMPLETE CHALLENGE
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
   UPDATE PROGRESS
========================================================= */

function updateProgress() {

    const xpDisplay =
        document.getElementById(
            "xp-display"
        );


    const xpBar =
        document.getElementById(
            "xp-bar"
        );


    const progressText =
        document.getElementById(
            "progress-text"
        );


    if (!xpDisplay) {

        return;

    }


    xpDisplay.textContent =
        xp + " XP";


    if (xpBar) {

        const percentage =
            Math.min(
                xp,
                100
            );


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
   BADGES
========================================================= */

function unlockBadges() {

    const first =
        document.getElementById(
            "badge-first"
        );


    const five =
        document.getElementById(
            "badge-five"
        );


    const master =
        document.getElementById(
            "badge-master"
        );


    if (
        first &&
        completedLessons >= 1
    ) {

        first.classList.add(
            "unlocked"
        );

    }


    if (
        five &&
        completedLessons >= 5
    ) {

        five.classList.add(
            "unlocked"
        );

    }


    if (
        master &&
        xp >= 100
    ) {

        master.classList.add(
            "unlocked"
        );

    }

}



/* =========================================================
   KEYBOARD SHORTCUT
========================================================= */

document.addEventListener(
    "keydown",
    function(event) {

        /*
         Ctrl + Enter
         = Run Code
        */

        if (
            event.ctrlKey &&
            event.key === "Enter"
        ) {

            event.preventDefault();

            runCode();

        }

    }
);



/* =========================================================
   START APPLICATION
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        updateProgress();

        showPage("home");

    }
);
```
