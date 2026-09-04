# Student Course Management Application

A React mini project demonstrating **React Router** (navigation, dynamic routes,
`useParams`) and the **Context API** (`createContext`, `useContext`) for shared
state management.

> Practical 3: React Routing and Context API Mini Project

## Features

- Multi-page navigation using `react-router-dom` (Home, Courses, About)
- Dynamic course detail routes: `/course/101`, `/course/102`
- Shared student information (name, roll number, college, course) provided
  through a global `StudentContext` and consumed via `useContext`
- Built entirely with functional components and React Hooks (no class
  components)
- Clean, responsive CSS styling with an active-link highlighted navbar

## Tech Stack

- React 19 (Vite)
- JavaScript (JSX) — no TypeScript
- react-router-dom v7

## Project Structure

```
student-course-app/
├── public/
├── src/
│   ├── components/
│   │   └── Navbar.jsx
│   ├── context/
│   │   └── StudentContext.jsx
│   ├── data/
│   │   └── courses.js
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Courses.jsx
│   │   ├── CourseDetails.jsx
│   │   └── About.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── README.md
```

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run the development server

```bash
npm run dev
```

Open the printed URL (typically `http://localhost:5173`) in your browser.

### 3. Build for production (optional)

```bash
npm run build
npm run preview
```

## Routes

| Route         | Description                                   |
|---------------|------------------------------------------------|
| `/`           | Home page — welcome message + student info      |
| `/courses`    | List of available courses                        |
| `/course/101` | Dynamic route — React Development details        |
| `/course/102` | Dynamic route — Full Stack Development details    |
| `/about`      | About the application                             |

## How Context API is Used

`src/context/StudentContext.jsx` creates a `StudentContext` and a
`StudentProvider` component that wraps the whole app in `App.jsx`. Any page —
currently the **Home** page — calls the `useStudent()` custom hook
(`useContext(StudentContext)` under the hood) to read and display the shared
student details without prop drilling.

## How Routing is Used

`App.jsx` wraps the app in `BrowserRouter` and defines all routes with
`Routes`/`Route`. The `Navbar` component uses `NavLink` to highlight the
active page. The `Courses` page links to each course with `Link`, and the
`CourseDetails` page reads the `:id` URL parameter with `useParams()` to show
the correct course.

## Author

Prepared as a college practical submission.
