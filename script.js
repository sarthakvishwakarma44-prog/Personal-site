```javascript
/* =========================================================
   STARDANCE LEARNING HUB
   JAVASCRIPT v0.1 → v1.0
   =========================================================
   
   This file controls:
   • Course selection
   • 4 different learning levels
   • Lessons
   • Code editor
   • Live preview
   • Challenges
   • XP
   • Badges
   • Progress saving
========================================================= */


/* =========================================================
   0.1 — COURSE DATABASE
========================================================= */

const courses = {


    /* =====================================================
       HTML COURSE
    ===================================================== */

    HTML: {

        description:
            "Learn HTML from absolute beginner to professional webpage architecture.",


        /* =================================================
           HTML — BASIC
        ================================================= */

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

                        <h3>Think of a house</h3>

                        <p>
                            HTML is the structure,
                            CSS is the appearance,
                            and JavaScript adds behaviour.
                        </p>

                    </div>
                `,

                code: `<!DOCTYPE html>

<html>

<head>

    <title>My First Website</title>

</head>

<body>

    <h1>Hello World!</h1>

</body>

</html>`,

                challenge:
                    "Create an HTML page with an h1 saying Hello World."
            },


            {
                title: "HTML Document Structure",

                explanation: `
                    <div class="lesson-text">

                        <p>
                            A normal HTML document contains
                            html, head and body elements.
                        </p>

                        <p>
                            The head contains information
                            about the webpage.
                        </p>

                        <p>
                            The body contains visible content.
                        </p>

                    </div>
                `,

                code: `<!DOCTYPE html>

<html lang="en">

<head>

    <meta charset="UTF-8">

    <title>My Website</title>

</head>

<body>

    <h1>Welcome!</h1>

</body>

</html>`,

                challenge:
                    "Create a complete HTML document."
            },


            {
                title: "Headings",

                explanation: `
                    <div class="lesson-text">

                        <p>
                            HTML provides six heading levels:
                            h1 through h6.
                        </p>

                    </div>
                `,

                code: `<h1>Main Heading</h1>

<h2>Section</h2>

<h3>Subsection</h3>

<h4>Small Section</h4>`,

                challenge:
                    "Create an h2 heading called My Projects."
            },


            {
                title: "Paragraphs",

                explanation: `
                    <div class="lesson-text">

                        <p>
                            The p element is used for normal
                            paragraphs of text.
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
                title: "Links",

                explanation: `
                    <div class="lesson-text">

                        <p>
                            The a element creates hyperlinks.
                        </p>

                        <p>
                            The href attribute tells the browser
                            where the link should go.
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
                            The img element displays an image.
                        </p>

                        <p>
                            The alt attribute describes the image.
                        </p>

                    </div>
                `,

                code: `<img
    src="https://via.placeholder.com/300"
    alt="Example image"
>`,

                challenge:
                    "Create an image containing an alt attribute."
            },


            {
                title: "Lists",

                explanation: `
                    <div class="lesson-text">

                        <p>
                            ul creates an unordered list.
                        </p>

                        <p>
                            ol creates an ordered list.
                        </p>

                        <p>
                            li creates an individual list item.
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
                title: "Classes and IDs",

                explanation: `
                    <div class="lesson-text">

                        <p>
                            The class attribute can be shared
                            by multiple elements.
                        </p>

                        <p>
                            An id normally identifies one
                            specific element.
                        </p>

                    </div>
                `,

                code: `<h1 id="main-title">

    Stardance

</h1>

<p class="description">

    Learn coding.

</p>`,

                challenge:
                    "Create an element with both an id and a class."
            }

        ],


        /* =================================================
           HTML — INTERMEDIATE
        ================================================= */

        Intermediate: [

            {
                title: "Semantic HTML",

                explanation: `
                    <div class="lesson-text">

                        <p>
                            Semantic HTML uses elements that
                            describe their purpose.
                        </p>

                        <p>
                            Examples include header, nav,
                            main, section, article and footer.
                        </p>

                    </div>
                `,

                code: `<header>

    <h1>My Website</h1>

</header>

<main>

    <section>

        <h2>About Me</h2>

        <p>Hello!</p>

    </section>

</main>

<footer>

    My Footer

</footer>`,

                challenge:
                    "Create a page using header, main and footer."
            },


            {
                title: "HTML Forms",

                explanation: `
                    <div class="lesson-text">

                        <p>
                            Forms collect information from users.
                        </p>

                        <p>
                            Common elements include input,
                            label, textarea and button.
                        </p>

                    </div>
                `,

                code: `<form>

    <label for="name">
        Name
    </label>

    <input
        id="name"
        type="text"
        placeholder="Enter your name"
    >

    <button>
        Submit
    </button>

</form>`,

                challenge:
                    "Create a form with a name input and submit button."
            },


            {
                title: "Tables",

                explanation: `
                    <div class="lesson-text">

                        <p>
                            Tables represent information
                            arranged in rows and columns.
                        </p>

                    </div>
                `,

                code: `<table>

    <tr>

        <th>Name</th>
        <th>Score</th>

    </tr>

    <tr>

        <td>Alex</td>
        <td>95</td>

    </tr>

</table>`,

                challenge:
                    "Create a table with two columns."
            },


            {
                title: "Audio and Video",

                explanation: `
                    <div class="lesson-text">

                        <p>
                            HTML can embed multimedia using
                            audio and video elements.
                        </p>

                    </div>
                `,

                code: `<video
    controls
    width="400"
>

    <source
        src="video.mp4"
        type="video/mp4"
    >

</video>`,

                challenge:
                    "Create a video element with controls."
            },


            {
                title: "HTML Forms and Validation",

                explanation: `
                    <div class="lesson-text">

                        <p>
                            HTML provides attributes such as
                            required, minlength and type
                            to help validate input.
                        </p>

                    </div>
                `,

                code: `<form>

    <input
        type="email"
        required
        placeholder="Email"
    >

    <button>
        Submit
    </button>

</form>`,

                challenge:
                    "Create a required email input."
            },


            {
                title: "Navigation",

                explanation: `
                    <div class="lesson-text">

                        <p>
                            Navigation menus help users move
                            between pages or sections.
                        </p>

                    </div>
                `,

                code: `<nav>

    <a href="#home">
        Home
    </a>

    <a href="#about">
        About
    </a>

    <a href="#contact">
        Contact
    </a>

</nav>`,

                challenge:
                    "Create a navigation menu with three links."
            }

        ],


        /* =================================================
           HTML — ADVANCED
        ================================================= */

        Advanced: [

            {
                title: "Accessibility Basics",

                explanation: `
                    <div class="lesson-text">

                        <p>
                            Accessible HTML helps more people
                            use websites successfully.
                        </p>

                        <p>
                            Important techniques include
                            meaningful labels, alt text,
                            proper headings and semantic elements.
                        </p>

                    </div>
                `,

                code: `<label for="email">
    Email address
</label>

<input
    id="email"
    type="email"
    aria-describedby="email-help"
>

<p id="email-help">
    Enter a valid email address.
</p>`,

                challenge:
                    "Create a labelled input with helpful text."
            },


            {
                title: "Data Attributes",

                explanation: `
                    <div class="lesson-text">

                        <p>
                            data-* attributes allow developers
                            to attach custom data to HTML elements.
                        </p>

                    </div>
                `,

                code: `<button
    data-course="HTML"
    data-level="advanced"
>

    Start Course

</button>`,

                challenge:
                    "Create a button with a custom data attribute."
            },


            {
                title: "SVG Graphics",

                explanation: `
                    <div class="lesson-text">

                        <p>
                            SVG allows scalable vector graphics
                            to be placed directly into HTML.
                        </p>

                    </div>
                `,

                code: `<svg
    width="200"
    height="120"
    viewBox="0 0 200 120"
>

    <circle
        cx="100"
        cy="60"
        r="40"
        fill="skyblue"
    />

</svg>`,

                challenge:
                    "Create an SVG circle."
            },


            {
                title: "Canvas",

                explanation: `
                    <div class="lesson-text">

                        <p>
                            The canvas element provides a drawing
                            surface that JavaScript can control.
                        </p>

                    </div>
                `,

                code: `<canvas
    id="canvas"
    width="400"
    height="200"
    style="border:1px solid black;"
>
</canvas>`,

                challenge:
                    "Create a canvas element."
            },


            {
                title: "Metadata",

                explanation: `
                    <div class="lesson-text">

                        <p>
                            Metadata gives browsers and search
                            systems information about a webpage.
                        </p>

                    </div>
                `,

                code: `<head>

    <meta
        name="description"
        content="My learning website"
    >

    <meta
        name="author"
        content="Stardance"
    >

</head>`,

                challenge:
                    "Create a description meta tag."
            }

        ],


        /* =================================================
           HTML — EXPERT
        ================================================= */

        Expert: [

            {
                title: "Professional HTML Architecture",

                explanation: `
                    <div class="lesson-text">

                        <p>
                            Professional websites use clear,
                            maintainable and semantic structures.
                        </p>

                        <p>
                            Good architecture makes websites
                            easier to maintain and expand.
                        </p>

                    </div>
                `,

                code: `<body>

    <header>
        Site Header
    </header>

    <nav>
        Navigation
    </nav>

    <main>

        <section>

            <article>
                Main Content
            </article>

            <aside>
                Related Content
            </aside>

        </section>

    </main>

    <footer>
        Site Footer
    </footer>

</body>`,

                challenge:
                    "Design a professional semantic page structure."
            },


            {
                title: "Advanced Accessibility",

                explanation: `
                    <div class="lesson-text">

                        <p>
                            Professional accessibility requires
                            careful semantic structure, keyboard
                            usability and appropriate ARIA usage.
                        </p>

                    </div>
                `,

                code: `<button
    type="button"
    aria-label="Open learning menu"
>

    ☰

</button>`,

                challenge:
                    "Create an accessible button with an ARIA label."
            },


            {
                title: "SEO-Friendly Structure",

                explanation: `
                    <div class="lesson-text">

                        <p>
                            Good HTML structure helps search engines
                            understand the content of a webpage.
                        </p>

                        <p>
                            Meaningful titles, headings,
                            descriptions and semantic elements
                            are important.
                        </p>

                    </div>
                `,

                code: `<head>

    <title>
        Stardance Learning Hub
    </title>

    <meta
        name="description"
        content="Learn web development."
    >

</head>`,

                challenge:
                    "Create an SEO-friendly page head."
            },


            {
                title: "Professional Web Components",

                explanation: `
                    <div class="lesson-text">

                        <p>
                            Modern web development can use
                            reusable custom elements and
                            Web Components.
                        </p>

                    </div>
                `,

                code: `<my-learning-card>

    HTML Course

</my-learning-card>`,

                challenge:
                    "Create a custom-looking HTML component."
            }

        ]

    },


    /* =====================================================
       CSS COURSE
    ===================================================== */

    CSS: {

        description:
            "Learn CSS from basic styling to advanced responsive design.",


        /* CSS BASIC */

        Basic: [

            {
                title: "What is CSS?",

                explanation: `
                    <div class="lesson-text">

                        <p>
                            CSS means Cascading Style Sheets.
                        </p>

                        <p>
                            CSS controls the visual appearance
                            of HTML elements.
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
                            font-size controls the size of text.
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
                            Width controls horizontal size.
                        </p>

                        <p>
                            Height controls vertical size.
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
                title: "Margin and Padding",

                explanation: `
                    <div class="lesson-text">

                        <p>
                            Margin creates space outside an element.
                        </p>

                        <p>
                            Padding creates space inside an element.
                        </p>

                    </div>
                `,

                code: `<style>

.box {

    margin: 30px;
    padding: 20px;

    background: lightblue;

}

</style>

<div class="box">
    Hello
</div>`,

                challenge:
                    "Add both margin and padding."
            }

        ],


        /* CSS INTERMEDIATE */

        Intermediate: [

            {
                title: "Flexbox",

                explanation: `
                    <div class="lesson-text">

                        <p>
                            Flexbox is a layout system for
                            arranging elements efficiently.
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

    background: skyblue;

}

</style>

<div class="container">

    <div class="box">A</div>
    <div class="box">B</div>
    <div class="box">C</div>

</div>`,

                challenge:
                    "Create three boxes using Flexbox."
            },


            {
                title: "CSS Grid",

                explanation: `
                    <div class="lesson-text">

                        <p>
                            CSS Grid is useful for two-dimensional
                            layouts involving rows and columns.
                        </p>

                    </div>
                `,

                code: `<style>

.grid {

    display: grid;

    grid-template-columns:
        repeat(3, 1fr);

    gap: 15px;

}

.box {

    padding: 30px;

    background: lightblue;

}

</style>

<div class="grid">

    <div class="box">1</div>
    <div class="box">2</div>
    <div class="box">3</div>

</div>`,

                challenge:
                    "Create a three-column grid."
            },


            {
                title: "Positioning",

                explanation: `
                    <div class="lesson-text">

                        <p>
                            CSS positioning controls how elements
                            are placed relative to their normal flow
                            or another reference.
                        </p>

                    </div>
                `,

                code: `<style>

.box {

    position: relative;

    left: 30px;

    top: 20px;

}

</style>

<div class="box">
    Moved
</div>`,

                challenge:
                    "Move an element using relative positioning."
            },


            {
                title: "Responsive Design",

                explanation: `
                    <div class="lesson-text">

                        <p>
                            Responsive design allows websites
                            to adapt to different screen sizes.
                        </p>

                    </div>
                `,

                code: `<style>

.card {

    width: 500px;

}

@media (max-width: 600px) {

    .card {

        width: 100%;

    }

}

</style>

<div class="card">
    Responsive Card
</div>`,

                challenge:
                    "Create a media query for small screens."
            }

        ],


        /* CSS ADVANCED */

        Advanced: [

            {
                title: "CSS Variables",

                explanation: `
                    <div class="lesson-text">

                        <p>
                            CSS custom properties allow values
                            to be stored and reused.
                        </p>

                    </div>
                `,

                code: `<style>

:root {

    --main-color: royalblue;

}

button {

    background: var(--main-color);

    color: white;

}

</style>

<button>
    Click
</button>`,

                challenge:
                    "Create and use a CSS variable."
            },


            {
                title: "Transitions",

                explanation: `
                    <div class="lesson-text">

                        <p>
                            Transitions smoothly animate changes
                            between CSS states.
                        </p>

                    </div>
                `,

                code: `<style>

button {

    padding: 15px;

    background: blue;

    transition: 0.3s;

}

button:hover {

    background: purple;

}

</style>

<button>
    Hover Me
</button>`,

                challenge:
                    "Add a transition to a button."
            },


            {
                title: "Animations",

                explanation: `
                    <div class="lesson-text">

                        <p>
                            CSS animations can automatically
                            change styles over time.
                        </p>

                    </div>
                `,

                code: `<style>

@keyframes move {

    from {
        transform: translateX(0);
    }

    to {
        transform: translateX(200px);
    }

}

.box {

    animation:
        move 2s infinite alternate;

}

</style>

<div class="box">
    🚀
</div>`,

                challenge:
                    "Create a CSS animation."
            },


            {
                title: "Advanced Selectors",

                explanation: `
                    <div class="lesson-text">

                        <p>
                            CSS provides powerful selectors
                            for targeting elements precisely.
                        </p>

                    </div>
                `,

                code: `<style>

ul > li:first-child {

    color: red;

}

</style>

<ul>

    <li>First</li>
    <li>Second</li>

</ul>`,

                challenge:
                    "Style only the first list item."
            }

        ],


        /* CSS EXPERT */

        Expert: [

            {
                title: "Design Systems",

                explanation: `
                    <div class="lesson-text">

                        <p>
                            Professional websites often use
                            reusable design tokens for colors,
                            spacing, typography and components.
                        </p>

                    </div>
                `,

                code: `<style>

:root {

    --space-small: 8px;
    --space-medium: 16px;
    --space-large: 32px;

    --color-primary: #2563eb;

}

.card {

    padding: var(--space-large);

    color: var(--color-primary);

}

</style>

<div class="card">
    Design System
</div>`,

                challenge:
                    "Create a reusable CSS design system."
            },


            {
                title: "Advanced Responsive Layouts",

                explanation: `
                    <div class="lesson-text">

                        <p>
                            Professional layouts combine Grid,
                            Flexbox, flexible units and media
                            queries to adapt across devices.
                        </p>

                    </div>
                `,

                code: `<style>

.layout {

    display: grid;

    grid-template-columns:
        minmax(200px, 1fr)
        3fr;

    gap: 2rem;

}

</style>

<div class="layout">

    <aside>
        Sidebar
    </aside>

    <main>
        Main Content
    </main>

</div>`,

                challenge:
                    "Build a flexible two-column layout."
            },


            {
                title: "CSS Architecture",

                explanation: `
                    <div class="lesson-text">

                        <p>
                            Large projects need organized CSS
                            so styles remain predictable and
                            maintainable.
                        </p>

                    </div>
                `,

                code: `<style>

/* Component */

.card {

    padding: 20px;

}

/* Component variation */

.card--featured {

    border: 2px solid blue;

}

</style>`,

                challenge:
                    "Create a reusable component and variation."
            }

        ]

    },


    /* =====================================================
       JAVASCRIPT COURSE
    ===================================================== */

    JavaScript: {

        description:
            "Learn JavaScript from basic programming to advanced web application concepts.",


        /* JAVASCRIPT BASIC */

        Basic: [

            {
                title: "What is JavaScript?",

                explanation: `
                    <div class="lesson-text">

                        <p>
                            JavaScript is a programming language
                            used to create interactive webpages.
                        </p>

                        <p>
                            HTML creates structure.
                            CSS creates appearance.
                            JavaScript creates behaviour.
                        </p>

                    </div>
                `,

                code: `<h1 id="message">
    Waiting...
</h1>

<script>

document.getElementById("message")
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
                            Variables store values that programs
                            can use later.
                        </p>

                        <p>
                            let and const are commonly used
                            to declare variables.
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
                title: "Numbers and Math",

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
                            A function is a reusable block of code.
                        </p>

                    </div>
                `,

                code: `<h1 id="output"></h1>

<script>

function greet() {

    return "Hello!";

}

document.getElementById("output")
    .textContent = greet();

<\/script>`,

                challenge:
                    "Create a function that returns a message."
            },


            {
                title: "Conditions",

                explanation: `
                    <div class="lesson-text">

                        <p>
                            Conditions allow programs to make decisions.
                        </p>

                    </div>
                `,

                code: `<h1 id="output"></h1>

<script>

let score = 80;

if (score >= 50) {

    document.getElementById("output")
        .textContent = "Passed!";

} else {

    document.getElementById("output")
        .textContent = "Try again.";

}

<\/script>`,

                challenge:
                    "Create an if/else condition."
            },


            {
                title: "Button Events",

                explanation: `
                    <div class="lesson-text">

                        <p>
                            JavaScript can respond to events such
                            as button clicks.
                        </p>

                    </div>
                `,

                code: `<button onclick="changeMessage()">
    Click Me
</button>

<h2 id="message">
    Waiting...
</h2>

<script>

function changeMessage() {

    document.getElementById("message")
        .textContent = "You clicked the button!";

}

<\/script>`,

                challenge:
                    "Make a button change a message."
            }

        ],


        /* JAVASCRIPT INTERMEDIATE */

        Intermediate: [

            {
                title: "Arrays",

                explanation: `
                    <div class="lesson-text">

                        <p>
                            Arrays store multiple values
                            in one variable.
                        </p>

                    </div>
                `,

                code: `<h2 id="output"></h2>

<script>

const courses = [
    "HTML",
    "CSS",
    "JavaScript"
];

document.getElementById("output")
    .textContent = courses.join(" • ");

<\/script>`,

                challenge:
                    "Create an array containing three items."
            },


            {
                title: "Objects",

                explanation: `
                    <div class="lesson-text">

                        <p>
                            Objects store related information
                            using properties and values.
                        </p>

                    </div>
                `,

                code: `<h2 id="output"></h2>

<script>

const student = {

    name: "Alex",

    level: "Beginner",

    xp: 100

};

document.getElementById("output")
    .textContent =
    student.name + " — " +
    student.xp + " XP";

<\/script>`,

                challenge:
                    "Create an object with three properties."
            },


            {
                title: "Loops",

                explanation: `
                    <div class="lesson-text">

                        <p>
                            Loops repeat code multiple times.
                        </p>

                    </div>
                `,

                code: `<ul id="list"></ul>

<script>

const languages = [
    "HTML",
    "CSS",
    "JavaScript"
];

const list =
    document.getElementById("list");

for (const language of languages) {

    const item =
        document.createElement("li");

    item.textContent = language;

    list.appendChild(item);

}

<\/script>`,

                challenge:
                    "Use a loop to display three items."
            },


            {
                title: "DOM Manipulation",

                explanation: `
                    <div class="lesson-text">

                        <p>
                            JavaScript can find, modify and
                            create HTML elements through the DOM.
                        </p>

                    </div>
                `,

                code: `<button id="button">
    Change
</button>

<p id="text">
    Original text
</p>

<script>

const button =
    document.getElementById("button");

button.addEventListener(
    "click",
    function() {

        document.getElementById("text")
            .textContent = "Changed!";

    }
);

<\/script>`,

                challenge:
                    "Use the DOM to change an element."
            },


            {
                title: "Local Storage",

                explanation: `
                    <div class="lesson-text">

                        <p>
                            localStorage can save small pieces
                            of data in the browser.
                        </p>

                    </div>
                `,

                code: `<button onclick="saveData()">
    Save
</button>

<script>

function saveData() {

    localStorage.setItem(
        "name",
        "Stardance"
    );

    alert("Saved!");

}

<\/script>`,

                challenge:
                    "Save a value using localStorage."
            }

        ],


        /* JAVASCRIPT ADVANCED */

        Advanced: [

            {
                title: "Promises",

                explanation: `
                    <div class="lesson-text">

                        <p>
                            Promises represent the eventual result
                            of an asynchronous operation.
                        </p>

                    </div>
                `,

                code: `<script>

const task = new Promise(
    function(resolve) {

        resolve("Task completed!");

    }
);

task.then(function(message) {

    console.log(message);

});

<\/script>`,

                challenge:
                    "Create a Promise that resolves with a message."
            },


            {
                title: "Async and Await",

                explanation: `
                    <div class="lesson-text">

                        <p>
                            async and await provide a convenient
                            way to work with Promises.
                        </p>

                    </div>
                `,

                code: `<script>

async function start() {

    const result =
        await Promise.resolve(
            "Finished!"
        );

    console.log(result);

}

start();

<\/script>`,

                challenge:
                    "Create an async function using await."
            },


            {
                title: "Fetch API",

                explanation: `
                    <div class="lesson-text">

                        <p>
                            The Fetch API allows JavaScript to
                            request resources from servers.
                        </p>

                    </div>
                `,

                code: `<script>

fetch(
    "https://jsonplaceholder.typicode.com/todos/1"
)

.then(function(response) {

    return response.json();

})

.then(function(data) {

    console.log(data);

});

<\/script>`,

                challenge:
                    "Make a fetch request and convert the response to JSON."
            },


            {
                title: "Modules",

                explanation: `
                    <div class="lesson-text">

                        <p>
                            Modules allow JavaScript programs
                            to be separated into reusable files.
                        </p>

                    </div>
                `,

                code: `// math.js

export function add(a, b) {

    return a + b;

}


// app.js

import { add } from "./math.js";

console.log(add(5, 10));`,

                challenge:
                    "Create a JavaScript function that could be exported."
            },


            {
                title: "Error Handling",

                explanation: `
                    <div class="lesson-text">

                        <p>
                            try, catch and finally help programs
                            handle errors safely.
                        </p>

                    </div>
                `,

                code: `<script>

try {

    throw new Error(
        "Something went wrong"
    );

} catch (error) {

    console.log(error.message);

}

<\/script>`,

                challenge:
                    "Create a try/catch block."
            }

        ],


        /* JAVASCRIPT EXPERT */

        Expert: [

            {
                title: "Application Architecture",

                explanation: `
                    <div class="lesson-text">

                        <p>
                            Large JavaScript applications need
                            organized architecture.
                        </p>

                        <p>
                            Code can be separated into modules,
                            components, services and state logic.
                        </p>

                    </div>
                `,

                code: `const app = {

    state: {

        user: null,

        xp: 0

    },

    start() {

        console.log(
            "Application started"
        );

    }

};

app.start();`,

                challenge:
                    "Create an object representing application state."
            },


            {
                title: "Event Delegation",

                explanation: `
                    <div class="lesson-text">

                        <p>
                            Event delegation allows a parent element
                            to manage events from its children.
                        </p>

                    </div>
                `,

                code: `<ul id="menu">

    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>

</ul>

<script>

document
    .getElementById("menu")
    .addEventListener(
        "click",
        function(event) {

            if (
                event.target.tagName === "LI"
            ) {

                console.log(
                    event.target.textContent
                );

            }

        }
    );

<\/script>`,

                challenge:
                    "Use event delegation on a list."
            },


            {
                title: "Performance Concepts",

                explanation: `
                    <div class="lesson-text">

                        <p>
                            Professional JavaScript should avoid
                            unnecessary work and excessive DOM updates.
                        </p>

                        <p>
                            Efficient algorithms, careful event
                            handling and appropriate rendering
                            strategies can improve performance.
                        </p>

                    </div>
                `,

                code: `const numbers = [];

for (let i = 0; i < 1000; i++) {

    numbers.push(i);

}

console.log(
    "Generated " +
    numbers.length +
    " numbers."
);`,

                challenge:
                    "Create a loop that processes a collection efficiently."
            },


            {
                title: "State Management",

                explanation: `
                    <div class="lesson-text">

                        <p>
                            State represents information that can
                            change while an application is running.
                        </p>

                        <p>
                            Good state management keeps application
                            behaviour predictable.
                        </p>

                    </div>
                `,

                code: `const state = {

    count: 0

};

function increment() {

    state.count++;

    console.log(
        state.count
    );

}

increment();

increment();`,

                challenge:
                    "Create and update application state."
            },


            {
                title: "Final Project Architecture",

                explanation: `
                    <div class="lesson-text">

                        <p>
                            A professional project combines
                            structure, styling, JavaScript logic,
                            reusable components, state and data.
                        </p>

                        <p>
                            This is where individual concepts
                            become a complete application.
                        </p>

                    </div>
                `,

                code: `const app = {

    state: {

        xp: 0,

        lessonsCompleted: 0

    },

    completeLesson() {

        this.state.xp += 10;

        this.state.lessonsCompleted++;

    },

    getProgress() {

        return {

            xp: this.state.xp,

            lessons:
                this.state.lessonsCompleted

        };

    }

};

app.completeLesson();

console.log(
    app.getProgress()
);`,

                challenge:
                    "Build a small application state system."
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
   0.3 — LOAD SAVED PROGRESS
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
   0.4 — PAGE SYSTEM
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
   0.5 — OPEN COURSE
========================================================= */

function openCourse(course) {

    if (!courses[course]) {

        return;

    }


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
   0.6 — OPEN LEVEL
========================================================= */

function openLevel(level) {

    if (
        !courses[currentCourse] ||
        !courses[currentCourse][level]
    ) {

        alert(
            "This level is not available yet."
        );

        return;

    }


    currentLevel = level;

    currentLesson = 0;


    loadLesson();


    showPage("lesson");

}


/* =========================================================
   0.7 — LOAD LESSON
========================================================= */

function loadLesson() {

    const lessons =
        courses[currentCourse][currentLevel];


    if (!lessons) {

        return;

    }


    const lesson =
        lessons[currentLesson];


    if (!lesson) {

        return;

    }


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
   0.8 — BUILD LESSON SIDEBAR
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


            button.type =
                "button";


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
   0.9 — RUN CODE
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

        return;

    }


    completeLevel();

}


/* =========================================================
   0.11 — PREVIOUS LESSON
========================================================= */

function previousLesson() {

    if (currentLesson > 0) {

        currentLesson--;

        loadLesson();

        return;

    }


    alert(
        "You are already on the first lesson."
    );

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
        "🎉 Challenge completed!\n\n" +
        "+10 XP"
    );

}


/* =========================================================
   0.13 — COMPLETE LEVEL
========================================================= */

function completeLevel() {

    alert(
        "🎉 Level completed!\n\n" +
        currentCourse +
        " — " +
        currentLevel
    );


    showPage("progress");

}


/* =========================================================
   0.14 — UPDATE PROGRESS
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


    if (xpDisplay) {

        xpDisplay.textContent =
            xp + " XP";

    }


    if (xpBar) {

        const percentage =
            Math.min(xp, 100);


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
   0.15 — BADGES
========================================================= */

function unlockBadges() {

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

        firstBadge.classList.add(
            "unlocked"
        );

    }


    if (
        fiveBadge &&
        completedLessons >= 5
    ) {

        fiveBadge.classList.add(
            "unlocked"
        );

    }


    if (
        masterBadge &&
        xp >= 100
    ) {

        masterBadge.classList.add(
            "unlocked"
        );

    }

}


/* =========================================================
   0.16 — KEYBOARD SHORTCUT
========================================================= */

document.addEventListener(
    "keydown",
    function(event) {

        /*
            Ctrl + Enter
            runs the code editor.
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
   0.17 — EDITOR AUTO UPDATE
========================================================= */

document.addEventListener(
    "input",
    function(event) {

        if (
            event.target.id ===
            "code-editor"
        ) {

            /*
                The code is not automatically
                executed on every keystroke.

                The user can press Run.
            */

        }

    }
);


/* =========================================================
   0.18 — APPLICATION START
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        updateProgress();

        showPage("home");

        console.log(
            "🚀 Stardance Learning Hub v1.0"
        );

        console.log(
            "HTML: Basic → Intermediate → Advanced → Expert"
        );

        console.log(
            "CSS: Basic → Intermediate → Advanced → Expert"
        );

        console.log(
            "JavaScript: Basic → Intermediate → Advanced → Expert"
        );

    }
);


/* =========================================================
   1.0 — END
========================================================= */
```
