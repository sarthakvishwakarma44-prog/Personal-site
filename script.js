/* =========================================================
   STARDANCE LEARNING HUB
   JAVASCRIPT v1.0
   Works with the fixed index.html
========================================================= */


/* =========================================================
   1. COURSE DATABASE
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
                    <h3>HTML = HyperText Markup Language</h3>

                    <p>
                        HTML creates the structure of a webpage.
                        Think of HTML as the skeleton of a website.
                    </p>

                    <p>
                        HTML uses elements such as headings,
                        paragraphs, links, images and buttons.
                    </p>
                `,

                code: `<!DOCTYPE html>
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
                title: "Headings",

                explanation: `
                    <p>
                        HTML has six heading levels:
                        <strong>h1</strong> to <strong>h6</strong>.
                    </p>

                    <p>
                        h1 is normally the main heading of a page.
                    </p>
                `,

                code: `<!DOCTYPE html>
<html>
<body>

<h1>Main Heading</h1>
<h2>Second Heading</h2>
<h3>Third Heading</h3>
<h4>Fourth Heading</h4>

</body>
</html>`,

                challenge:
                    "Add an h5 heading."
            },


            {
                title: "Paragraphs",

                explanation: `
                    <p>
                        The <strong>p</strong> element creates
                        a paragraph.
                    </p>

                    <p>
                        You can create multiple paragraphs
                        to organize information.
                    </p>
                `,

                code: `<!DOCTYPE html>
<html>
<body>

<h1>About Me</h1>

<p>Hello! My name is Sarthak.</p>

<p>I am learning web development.</p>

</body>
</html>`,

                challenge:
                    "Add one more paragraph."
            },


            {
                title: "Links",

                explanation: `
                    <p>
                        The <strong>a</strong> element creates
                        a hyperlink.
                    </p>

                    <p>
                        The <strong>href</strong> attribute
                        contains the destination.
                    </p>
                `,

                code: `<!DOCTYPE html>
<html>
<body>

<h1>My Link</h1>

<a href="https://www.nasa.gov">
    Visit NASA
</a>

</body>
</html>`,

                challenge:
                    "Create another link."
            }

        ],


        Intermediate: [

            {
                title: "Images",

                explanation: `
                    <p>
                        The <strong>img</strong> element displays
                        an image.
                    </p>

                    <p>
                        The <strong>alt</strong> attribute describes
                        the image.
                    </p>
                `,

                code: `<!DOCTYPE html>
<html>
<body>

<h1>My Image</h1>

<img
    src="https://via.placeholder.com/300"
    alt="Example image"
>

</body>
</html>`,

                challenge:
                    "Change the alt text."
            },


            {
                title: "Lists",

                explanation: `
                    <p>
                        HTML supports ordered and unordered lists.
                    </p>

                    <p>
                        <strong>ul</strong> creates a bullet list
                        and <strong>ol</strong> creates a numbered list.
                    </p>
                `,

                code: `<!DOCTYPE html>
<html>
<body>

<h2>My Skills</h2>

<ul>

    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>

</ul>

</body>
</html>`,

                challenge:
                    "Add another skill."
            },


            {
                title: "Forms",

                explanation: `
                    <p>
                        Forms allow users to enter information.
                    </p>

                    <p>
                        Common elements include input,
                        label and button.
                    </p>
                `,

                code: `<!DOCTYPE html>
<html>
<body>

<h2>Contact Form</h2>

<form>

    <label for="name">
        Name:
    </label>

    <input
        id="name"
        type="text"
    >

    <br><br>

    <button type="submit">
        Send
    </button>

</form>

</body>
</html>`,

                challenge:
                    "Add an email input."
            }

        ],


        Advanced: [

            {
                title: "Semantic HTML",

                explanation: `
                    <p>
                        Semantic elements tell the browser
                        what different parts of a page mean.
                    </p>

                    <p>
                        Examples include header, nav, main,
                        section, article and footer.
                    </p>
                `,

                code: `<!DOCTYPE html>
<html>

<body>

<header>

    <h1>My Website</h1>

</header>

<main>

    <section>

        <h2>About</h2>

        <p>
            Welcome to my website.
        </p>

    </section>

</main>

<footer>

    My Footer

</footer>

</body>
</html>`,

                challenge:
                    "Add a navigation element."
            },


            {
                title: "Accessibility",

                explanation: `
                    <p>
                        Accessible HTML makes websites easier
                        for more people to use.
                    </p>

                    <p>
                        Useful practices include meaningful
                        headings, labels and alternative text.
                    </p>
                `,

                code: `<!DOCTYPE html>
<html>

<body>

<img
    src="https://via.placeholder.com/250"
    alt="A sample placeholder image"
>

<label for="username">
    Username
</label>

<input
    id="username"
    type="text"
>

</body>
</html>`,

                challenge:
                    "Add a label for another input."
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

                code: `<!DOCTYPE html>
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
                    "Add a data-topic attribute."
            }

        ],


        Expert: [

            {
                title: "Professional Page Architecture",

                explanation: `
                    <p>
                        Professional webpages should have
                        a clear and logical structure.
                    </p>

                    <p>
                        Semantic sections make large projects
                        easier to understand and maintain.
                    </p>
                `,

                code: `<!DOCTYPE html>

<html lang="en">

<head>

    <meta charset="UTF-8">

    <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
    >

    <title>Professional Site</title>

</head>

<body>

<header>

    <nav>
        <a href="#">Home</a>
        <a href="#">About</a>
    </nav>

</header>

<main>

    <article>

        <h1>My Article</h1>

        <p>
            Professional HTML structure.
        </p>

    </article>

</main>

<footer>

    <p>My Website</p>

</footer>

</body>

</html>`,

                challenge:
                    "Add another semantic section."
            },


            {
                title: "Metadata",

                explanation: `
                    <p>
                        Metadata gives browsers and search engines
                        information about a webpage.
                    </p>

                    <p>
                        Common examples are charset, viewport
                        and description.
                    </p>
                `,

                code: `<!DOCTYPE html>

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

    <title>My Website</title>

</head>

<body>

    <h1>Hello</h1>

</body>

</html>`,

                challenge:
                    "Add another useful meta element."
            },


            {
                title: "HTML Best Practices",

                explanation: `
                    <p>
                        Professional HTML should be readable,
                        semantic, accessible and logically organized.
                    </p>

                    <p>
                        Good HTML makes CSS and JavaScript
                        easier to write and maintain.
                    </p>
                `,

                code: `<!DOCTYPE html>

<html lang="en">

<head>

    <meta charset="UTF-8">

    <title>Clean HTML</title>

</head>

<body>

<header>

    <h1>My Application</h1>

    <nav>

        <a href="#home">
            Home
        </a>

        <a href="#about">
            About
        </a>

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
            "Learn CSS from basic styling to professional responsive design.",

        Basic: [

            {
                title: "What is CSS?",

                explanation: `
                    <p>
                        CSS means
                        <strong>Cascading Style Sheets</strong>.
                    </p>

                    <p>
                        HTML creates structure.
                        CSS controls how that structure looks.
                    </p>
                `,

                code: `<!DOCTYPE html>

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
                        CSS can change text colors and
                        background colors.
                    </p>
                `,

                code: `<!DOCTYPE html>

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
                        CSS width and height control
                        the size of elements.
                    </p>

                    <p>
                        px is one CSS measurement unit.
                    </p>
                `,

                code: `<!DOCTYPE html>

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
                    "Change the width to 300px."
            }

        ],


        Intermediate: [

            {
                title: "Box Model",

                explanation: `
                    <p>
                        Every normal HTML element can be understood
                        using the CSS box model.
                    </p>

                    <p>
                        It includes content, padding, border
                        and margin.
                    </p>
                `,

                code: `<!DOCTYPE html>

<html>

<head>

<style>

.box {

    width: 200px;

    padding: 20px;

    border: 5px solid blue;

    margin: 20px;

}

</style>

</head>

<body>

<div class="box">
    Box Model
</div>

</body>

</html>`,

                challenge:
                    "Change the padding."
            },


            {
                title: "Flexbox",

                explanation: `
                    <p>
                        Flexbox is a powerful layout system
                        for arranging elements.
                    </p>
                `,

                code: `<!DOCTYPE html>

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
                        CSS Grid is useful for two-dimensional
                        page layouts.
                    </p>
                `,

                code: `<!DOCTYPE html>

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
                        Responsive design allows a webpage
                        to adapt to different screen sizes.
                    </p>

                    <p>
                        Media queries are commonly used
                        for responsive layouts.
                    </p>
                `,

                code: `<!DOCTYPE html>

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
                        Transitions create smooth changes
                        between CSS states.
                    </p>
                `,

                code: `<!DOCTYPE html>

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
                        CSS custom properties allow values
                        to be reused throughout a stylesheet.
                    </p>
                `,

                code: `<!DOCTYPE html>

<html>

<head>

<style>

:root {

    --main-color: #6c63ff;

}

button {

    background: var(--main-color);

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
                title: "Animations",

                explanation: `
                    <p>
                        CSS keyframes allow you to create
                        custom animations.
                    </p>
                `,

                code: `<!DOCTYPE html>

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

        transform:
            translateX(0);

    }

    to {

        transform:
            translateX(200px);

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
            "Learn JavaScript programming from your first variable to interactive web applications.",

        Basic: [

            {
                title: "What is JavaScript?",

                explanation: `
                    <p>
                        JavaScript is a programming language
                        commonly used to make websites interactive.
                    </p>

                    <p>
                        HTML = structure.
                        CSS = appearance.
                        JavaScript = behavior.
                    </p>
                `,

                code: `<!DOCTYPE html>

<html>

<body>

<h1 id="title">
    Hello
</h1>

<script>

document
    .getElementById("title")
    .textContent =
    "Hello JavaScript!";

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

                code: `<!DOCTYPE html>

<html>

<body>

<h1 id="output"></h1>

<script>

let name = "Sarthak";

document
    .getElementById("output")
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
                        A function contains reusable instructions.
                    </p>
                `,

                code: `<!DOCTYPE html>

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
                        Arrays store multiple values
                        inside one variable.
                    </p>
                `,

                code: `<!DOCTYPE html>

<html>

<body>

<h1 id="output"></h1>

<script>

const planets = [
    "Earth",
    "Mars",
    "Jupiter"
];

document
    .getElementById("output")
    .textContent =
    planets.join(", ");

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
                        Objects store related information
                        using properties and values.
                    </p>
                `,

                code: `<!DOCTYPE html>

<html>

<body>

<h1 id="output"></h1>

<script>

const student = {

    name: "Sarthak",

    level: 11

};

document
    .getElementById("output")
    .textContent =
    student.name +
    " - Class " +
    student.level;

</script>

</body>

</html>`,

                challenge:
                    "Add another property."
            },


            {
                title: "DOM Manipulation",

                explanation: `
                    <p>
                        The DOM represents the webpage.
                    </p>

                    <p>
                        JavaScript can use the DOM to
                        change HTML elements.
                    </p>
                `,

                code: `<!DOCTYPE html>

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

    document
        .getElementById("title")
        .textContent =
        "Changed!";

}

</script>

</body>

</html>`,

                challenge:
                    "Change the heading and its style."
            }

        ],


        Advanced: [

            {
                title: "Events",

                explanation: `
                    <p>
                        Events allow JavaScript to react
                        to actions such as clicks and typing.
                    </p>
                `,

                code: `<!DOCTYPE html>

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
                        localStorage allows a webpage to
                        store small pieces of data in the browser.
                    </p>

                    <p>
                        It can be useful for saving learning
                        progress.
                    </p>
                `,

                code: `<!DOCTYPE html>

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

    document
        .getElementById("output")
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
                title: "Asynchronous JavaScript",

                explanation: `
                    <p>
                        Asynchronous JavaScript allows operations
                        that take time to happen without stopping
                        the entire program.
                    </p>
                `,

                code: `<!DOCTYPE html>

<html>

<body>

<h1 id="output">
    Waiting...
</h1>

<script>

setTimeout(

    function() {

        document
            .getElementById("output")
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
                        The Fetch API allows JavaScript to
                        request resources from a server.
                    </p>

                    <p>
                        APIs are important when applications
                        need external data.
                    </p>
                `,

                code: `<!DOCTYPE html>

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

        document
            .getElementById("output")
            .textContent =
            data.title;

    }
)

.catch(

    error => {

        document
            .getElementById("output")
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
                title: "Application State",

                explanation: `
                    <p>
                        Application state is the information
                        that describes what an application
                        currently knows.
                    </p>

                    <p>
                        Separating state from rendering is
                        an important programming concept.
                    </p>
                `,

                code: `<!DOCTYPE html>

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

    document
        .getElementById("output")
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
   2. APPLICATION STATE
========================================================= */

let currentCourse = "HTML";

let currentLevel = "Basic";

let currentLesson = 0;


/* =========================================================
   3. SAVED PROGRESS
========================================================= */

let xp =
    Number(
        localStorage.getItem("stardanceXP")
    ) || 0;


let completedLessons =
    Number(
        localStorage.getItem("stardanceLessons")
    ) || 0;


/*
   Store individual completed challenges.

   This prevents the same challenge from giving
   unlimited XP.
*/

let completedChallenges = [];

try {

    completedChallenges =
        JSON.parse(
            localStorage.getItem(
                "stardanceChallenges"
            )
        ) || [];

} catch (error) {

    completedChallenges = [];

}



/* =========================================================
   4. PAGE SYSTEM
========================================================= */

function showPage(pageId) {

    const pages =
        document.querySelectorAll(".page");


    pages.forEach(function(page) {

        page.classList.add("hidden");

    });


    const target =
        document.getElementById(pageId);


    if (!target) {

        console.error(
            "Page not found:",
            pageId
        );

        return;

    }


    target.classList.remove("hidden");


    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });


    updateProgress();

}



/* =========================================================
   5. START LEARNING
========================================================= */

function startLearning() {

    showPage("courses");

}


/* =========================================================
   6. OPEN COURSE
========================================================= */

function openCourse(courseName) {

    if (!courses[courseName]) {

        console.error(
            "Course does not exist:",
            courseName
        );

        return;

    }


    currentCourse = courseName;

    currentLevel = "Basic";

    currentLesson = 0;


    const courseNameElement =
        document.getElementById(
            "course-name"
        );


    const descriptionElement =
        document.getElementById(
            "course-description"
        );


    if (courseNameElement) {

        courseNameElement.textContent =
            courseName;

    }


    if (descriptionElement) {

        descriptionElement.textContent =
            courses[courseName].description;

    }


    showPage("course");

}



/* =========================================================
   7. OPEN LEVEL
========================================================= */

function openLevel(level) {

    const course =
        courses[currentCourse];


    if (!course) {

        return;

    }


    if (!course[level]) {

        console.error(
            "Level does not exist:",
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
   8. LOAD LESSON
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
            "No lessons found."
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


    /* Course */

    const courseElement =
        document.getElementById(
            "lesson-course"
        );


    if (courseElement) {

        courseElement.textContent =
            currentCourse;

    }


    /* Level */

    const levelElement =
        document.getElementById(
            "lesson-level"
        );


    if (levelElement) {

        levelElement.textContent =
            currentLevel;

    }


    /* Title */

    const titleElement =
        document.getElementById(
            "lesson-title"
        );


    if (titleElement) {

        titleElement.textContent =
            lesson.title;

    }


    /* Explanation */

    const bodyElement =
        document.getElementById(
            "lesson-body"
        );


    if (bodyElement) {

        bodyElement.innerHTML =
            lesson.explanation;

    }


    /* Code editor */

    const editor =
        document.getElementById(
            "code-editor"
        );


    if (editor) {

        editor.value =
            lesson.code;

    }


    /* Challenge */

    const challengeElement =
        document.getElementById(
            "challenge-text"
        );


    if (challengeElement) {

        challengeElement.textContent =
            lesson.challenge;

    }


    buildLessonList();

    runCode();

}



/* =========================================================
   9. BUILD LESSON LIST
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


            button.addEventListener(
                "click",
                function() {

                    currentLesson =
                        index;

                    loadLesson();

                }
            );


            list.appendChild(
                button
            );

        }
    );

}



/* =========================================================
   10. RUN CODE
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
   11. NEXT LESSON
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
        "🎉 You completed this level!\n\n" +
        "Choose another level to continue."
    );

}



/* =========================================================
   12. PREVIOUS LESSON
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
   13. COMPLETE CHALLENGE
========================================================= */

function completeChallenge() {

    const challengeId =
        currentCourse +
        "-" +
        currentLevel +
        "-" +
        currentLesson;


    /*
       Don't give XP twice for the same challenge.
    */

    if (
        completedChallenges.includes(
            challengeId
        )
    ) {

        alert(
            "✅ You already completed this challenge!"
        );

        return;

    }


    completedChallenges.push(
        challengeId
    );


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


    localStorage.setItem(
        "stardanceChallenges",
        JSON.stringify(
            completedChallenges
        )
    );


    updateProgress();


    alert(
        "🎉 Challenge completed!\n\n" +
        "+10 XP"
    );

}



/* =========================================================
   14. UPDATE PROGRESS
========================================================= */

function updateProgress() {

    const xpDisplay =
        document.getElementById(
            "xp-display"
        );


    const challengeCount =
        document.getElementById(
            "challenge-count"
        );


    const lessonCount =
        document.getElementById(
            "lesson-count"
        );


    const xpBar =
        document.getElementById(
            "xp-bar"
        );


    const progressText =
        document.getElementById(
            "progress-text"
        );


    if (xpDisplay) {

        xpDisplay.textContent =
            xp + " XP";

    }


    if (challengeCount) {

        challengeCount.textContent =
            completedLessons;

    }


    if (lessonCount) {

        lessonCount.textContent =
            completedLessons;

    }


    if (xpBar) {

        /*
           Every 100 XP = one full progress bar.
        */

        const percentage =
            Math.min(
                xp % 100,
                100
            );


        /*
           If XP is exactly 100, show full.
        */

        if (xp > 0 && xp % 100 === 0) {

            xpBar.style.width =
                "100%";

        } else {

            xpBar.style.width =
                percentage + "%";

        }

    }


    if (progressText) {

        if (completedLessons === 0) {

            progressText.textContent =
                "Start learning to begin your journey.";

        } else {

            progressText.textContent =
                completedLessons +
                " challenge(s) completed.";

        }

    }


    updateBadges();

}



/* =========================================================
   15. BADGES
========================================================= */

function updateBadges() {

    const firstBadge =
        document.getElementById(
            "badge-first"
        );


    const fiveBadge =
        document.getElementById(
            "badge-five"
        );


    const masterBadge =
        document.getElementById(
            "badge-master"
        );


    if (
        firstBadge &&
        completedLessons >= 1
    ) {

        firstBadge.classList.remove(
            "locked"
        );

        firstBadge.classList.add(
            "unlocked"
        );

    }


    if (
        fiveBadge &&
        completedLessons >= 5
    ) {

        fiveBadge.classList.remove(
            "locked"
        );

        fiveBadge.classList.add(
            "unlocked"
        );

    }


    if (
        masterBadge &&
        xp >= 100
    ) {

        masterBadge.classList.remove(
            "locked"
        );

        masterBadge.classList.add(
            "unlocked"
        );

    }

}



/* =========================================================
   16. EVENT CONNECTIONS
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {


        /* ---------------------------------------------
           START LEARNING
        --------------------------------------------- */

        const startButton =
            document.getElementById(
                "start-learning"
            );


        if (startButton) {

            startButton.addEventListener(
                "click",
                startLearning
            );

        }



        /* ---------------------------------------------
           EXPLORE PROJECT
        --------------------------------------------- */

        const exploreButton =
            document.getElementById(
                "explore-project"
            );


        if (exploreButton) {

            exploreButton.addEventListener(
                "click",
                function() {

                    showPage(
                        "requirements"
                    );

                }
            );

        }



        /* ---------------------------------------------
           NAVIGATION BUTTONS
        --------------------------------------------- */

        document
            .querySelectorAll(
                "[data-page]"
            )
            .forEach(
                function(button) {

                    button.addEventListener(
                        "click",
                        function() {

                            const page =
                                button.dataset.page;

                            showPage(page);

                        }
                    );

                }
            );



        /* ---------------------------------------------
           COURSE BUTTONS
        --------------------------------------------- */

        document
            .querySelectorAll(
                "[data-course]"
            )
            .forEach(
                function(button) {

                    /*
                       Only buttons inside the course
                       cards should open a course.
                    */

                    if (
                        button.classList.contains(
                            "course-button"
                        )
                    ) {

                        button.addEventListener(
                            "click",
                            function() {

                                openCourse(
                                    button.dataset.course
                                );

                            }
                        );

                    }

                }
            );



        /* ---------------------------------------------
           LEVEL BUTTONS
        --------------------------------------------- */

        document
            .querySelectorAll(
                "[data-level]"
            )
            .forEach(
                function(button) {

                    button.addEventListener(
                        "click",
                        function() {

                            openLevel(
                                button.dataset.level
                            );

                        }
                    );

                }
            );



        /* ---------------------------------------------
           BACK TO COURSES
        --------------------------------------------- */

        const backToCourses =
            document.getElementById(
                "back-to-courses"
            );


        if (backToCourses) {

            backToCourses.addEventListener(
                "click",
                function() {

                    showPage("courses");

                }
            );

        }



        /* ---------------------------------------------
           BACK TO COURSE
        --------------------------------------------- */

        const backToCourse =
            document.getElementById(
                "back-to-course"
            );


        if (backToCourse) {

            backToCourse.addEventListener(
                "click",
                function() {

                    showPage("course");

                }
            );

        }



        /* ---------------------------------------------
           RUN CODE
        --------------------------------------------- */

        const runButton =
            document.getElementById(
                "run-code"
            );


        if (runButton) {

            runButton.addEventListener(
                "click",
                runCode
            );

        }



        /* ---------------------------------------------
           COMPLETE CHALLENGE
        --------------------------------------------- */

        const completeButton =
            document.getElementById(
                "complete-challenge"
            );


        if (completeButton) {

            completeButton.addEventListener(
                "click",
                completeChallenge
            );

        }



        /* ---------------------------------------------
           NEXT LESSON
        --------------------------------------------- */

        const nextButton =
            document.getElementById(
                "next-lesson"
            );


        if (nextButton) {

            nextButton.addEventListener(
                "click",
                nextLesson
            );

        }



        /* ---------------------------------------------
           PREVIOUS LESSON
        --------------------------------------------- */

        const previousButton =
            document.getElementById(
                "previous-lesson"
            );


        if (previousButton) {

            previousButton.addEventListener(
                "click",
                previousLesson
            );

        }



        /* ---------------------------------------------
           INITIAL PROGRESS
        --------------------------------------------- */

        updateProgress();


        /* ---------------------------------------------
           START ON HOME
        --------------------------------------------- */

        showPage("home");

    }
);



/* =========================================================
   17. KEYBOARD SHORTCUT
========================================================= */

/*
   Ctrl + Enter
   = Run code
*/

document.addEventListener(
    "keydown",
    function(event) {

        if (
            event.ctrlKey &&
            event.key === "Enter"
        ) {

            event.preventDefault();

            runCode();

        }

    }
);
