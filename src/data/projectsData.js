import doctorBooking from "../assets/images/projects/doctor-booking.webp";
import doctorDashboard from "../assets/images/projects/doctor-dashboard.webp";
import userAppointments from "../assets/images/projects/user-appointments.webp";
import videoCall from "../assets/images/projects/vedio-call.webp";
import electionResult from "../assets/images/projects/election-result.webp";
import onlineVoting from "../assets/images/projects/online-voting.webp";
import gameHome from "../assets/images/projects/game-home.png";
import gameStart from "../assets/images/projects/game-start.png";
import gameRules from "../assets/images/projects/game-rules.png";
import todolistHome from "../assets/images/projects/todolist-home.png";
import todolistTaskAdded from "../assets/images/projects/todolist-taskAdded.png";
import todolistTaskCompleted from "../assets/images/projects/todolist-taskCompleted.png";

const projectsData = [
  {
    id: 1,

    featured: true,

    title: "Doctor Appointment Booking System 🏥",

    category: "MERN",

    images: [doctorBooking, doctorDashboard, userAppointments, videoCall],

    description:
      "An online platform for booking and managing doctor appointments.",

    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Tailwind CSS",
    ],

    features: [
      "JWT Authentication",
      "Appointment Booking",
      "Doctor Dashboard",
      "Responsive Design",
      "Online Payments",
    ],

    github: " https://github.com/Divya-126",

    live: "https://github.com/Divya-126",
  },

  {
    id: 2,

    featured: false,

    title: "Dice Game 🎲 ",

    category: "REACT",

    images: [gameHome, gameStart, gameRules],

    description:
      "An engaging dice game built with React, featuring score tracking, smooth gameplay, and a modern responsive design.",

    technologies: ["React"],

    features: [
      "🎲 Interactive Dice Rolling",
      "🎯 Number Guessing Gameplay",
      "📊 Real-Time Score Tracking",
      "🔄 Score Reset & Game Rules",
      "📱 Fully Responsive Design",
    ],

    github: "https://github.com/Divya-126/dice-game",

    live: "https://dice-game126.vercel.app/",
  },
  {
    id: 3,

    featured: false,

    title: "To-Do-List 📝",

    category: "REACT",

    images: [todolistHome, todolistTaskAdded.todolistTaskCompleted],

    description:
      "📝 A responsive To-Do List application built with React.js that allows users to add, edit, delete, complete, and manage tasks with Local Storage support for persistent data.",

    technologies: ["PHP", "MySQL", "HTML5", "CSS3", "JavaScript"],

    features: [
      "📝 Add New Tasks",
      "✏️ Edit Existing Tasks",
      "🗑️ Remove Tasks",
      "✅ Track Task Completion",
      "💾 Auto Save with Local Storage",
    ],

    github: "https://github.com/Divya-126/to-do-list",

    live: "https://to-do-list126.vercel.app/",
  },
  {
    id: 4,

    featured: false,

    title: "Online Voting System",

    category: "REACT",

    images: [onlineVoting, electionResult],

    description: "A dashboard for monitoring elections and viewing results.",

    technologies: ["PHP", "MySQL", "HTML5", "CSS3", "JavaScript"],

    features: [
      "User Authentication",
      "Secure Voting",
      "Admin Panel",
      "Vote Counting",
    ],

    github: "https://github.com/Divya-126",

    live: "https://github.com/Divya-126",
  },
  {
    id: 5,

    featured: false,

    title: "Online Voting System",

    category: "REACT",

    images: [onlineVoting, electionResult],

    description: "A dashboard for monitoring elections and viewing results.",

    technologies: ["PHP", "MySQL", "HTML5", "CSS3", "JavaScript"],

    features: [
      "User Authentication",
      "Secure Voting",
      "Admin Panel",
      "Vote Counting",
    ],

    github: "https://github.com/Divya-126",

    live: "https://github.com/Divya-126",
  },
  {
    id: 6,

    featured: false,

    title: "Online Voting System 👆",

    category: "PHP",

    images: [onlineVoting, electionResult],

    description:
      "A secure platform for conducting digital elections and voting.",
    technologies: ["PHP", "MySQL", "HTML5", "CSS3", "JavaScript"],

    features: [
      "User Authentication",
      "Secure Voting",
      "Admin Panel",
      "Vote Counting",
    ],

    github: "https://github.com/Divya-126",

    live: "https://github.com/Divya-126",
  },
];

export default projectsData;
