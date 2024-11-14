export const hashRoutes = [
    ["Home", "/#home"],
    ["About", "/#about"],
    ["Experience", "/#experience"],
    ["Projects", "/#projects"],
    ["Contact", "/contact"],
    ["Resume", "/resume.pdf"]
];

export const sections = hashRoutes.map(route => route[0].toLowerCase());

export const introAnimatedText = [
    "Software Developer",
    "Programmer",
    "Tech Enthusiast",
    "Web Developer",
    "App Developer"
];
export const myName = "Nidhish Kumar Gupta";
export const shortDescription = "MERN and Full Stack Developer";

export const socialMediaDetails = [
    {
        name: 'GitHub',
        url: 'https://github.com/NidhishCU',
    },
    {
        name: 'Linkedin',
        url: 'https://www.linkedin.com/in/nidhish-gupta-5a1575223/',
    },
    {
        name: 'Instagram',
        url: 'https://www.instagram.com',
    },
    {
        name: 'Email',
        url: 'mailto:nidhish.cu@gmail.com@gmail.com',
    }
];

export const skills = [
    {
        name: "Languages",
        items: ["C", "C++", "Java", "Python", "HTML/CSS", "Javascript", "Typescript"],
    },
    {
        name: "Web Development",
        items: ["React", "NextJs", "Node", "Redux", "Boot", "RestAPI", "ExpressJs", "SocketIO", "MUI"],
    },
    {
        name: "App Development",
        items: ["React-Native", "Node", "Redux", "RestAPI", "ExpressJs", "SocketIO"],
    },
    {
        name: "Database",
        items: ["MySQL", "MongoDB"],
    },
    {
        name: "Tools/Software/Others",
        items: ["Git", "Github", "VSCode", "IntellijIdea", "Docker", "Postman", "Other"],
    },
];

export const experiences = [
    {
        title: "Software Developer Intern",
        company_name: "WebTuks It Solutions Pvt Ltd",
        bottomColor: "#6d92bf",
        icon: "/company/webtuks.png",
        date: "June 2023 - August 2023",
        points: [
             "Developed core features for both companies and job seekers, enabling upskilling, job search, and application management, contributing to a comprehensive employment platform",
        "Implemented a streamlined job application system, improving user experience for job seekers and recruiters alike",
        "Leveraged React Native and JavaScript to build responsive and user-friendly mobile interfaces for seamless navigation and interaction",
        "Collaborated on API integration and backend interactions, enhancing data flow and application functionality",
        "Optimized application performance through MongoDB queries, reducing response times by up to 60% and improving data retrieval",
        "Utilized tools such as Android Studio, Git, and GitHub to ensure version control and collaborative development, adhering to industry standards for efficient project management"
    ]
        
    },
    {
        title: "Software devloper",
        company_name: "DortexAI",
        bottomColor: "#f1df87",
        icon: "/company/DortexAI.png",
        date: "Sep 2023 - Present",
        points: [
            "Led a team of 5 in developing and maintaining mobile applications using React Native, ensuring project timelines and quality standards were met",
            "Oversaw the development of web applications using ReactJS, enhancing responsiveness and improving UX across devices",
            "Managed multiple live projects, coordinating team efforts to deliver high-impact solutions for client needs",
            "Implemented effective front-end and back-end integrations using ReactJS, React Native, JavaScript, and APIs, optimizing application functionality and user experience",
            "Streamlined the development workflow by leveraging tools such as Android Studio, Git, and GitHub for efficient version control and collaborative progress",
            "Provided technical mentorship to team members, fostering skill development and ensuring adherence to best practices"
        ],
    }
];

export const projectsData = [
    {
        title: 'Get Your Dish',
        desciption: 'Build a platform that remotely runs and fetch your dishes as per your search pattern. You will get all recipies of dishes you want to cook.',
        tech: ['Nodejs', 'React', 'MongoDB', 'Expressjs', 'JWT'],
        github: 'https://github.com/NidhishCU/Get-Your-Dish',
        external: 'https://get-your-dish.vercel.app/',
        image: '/projects/getyourdish.png'
    },
    {
        title: 'Portfolio',
        desciption: 'Crafted an engaging portfolio site with ReactJS and Three.js, enhancing user interaction through a serverless feedback system powered by a custom API',
        tech: ['Nodejs', 'React', 'Threejs', 'Nodemailer', 'MUI', 'Bootstrap', 'drei'],
        github: 'https://github.com/Am4nn/Portfolio-Website',
        external: 'https://www.amanarya.com',
        image: '/projects/portfolio-front.png'
    },
    {
        title: 'Draw-Graphs',
        desciption: 'Designed a Java Swing app for user-friendly equation input and dynamic graph visualization, showcasing strong Java and GUI development skills',
        tech: ['Java', 'Java-Swing', 'Java-Collections'],
        github: 'https://github.com/Am4nn/Draw-Graphs',
        image: '/projects/draw-graph-front.png'
    },
    {
        title: 'Super-Mario',
        desciption: "Designed and developed 'Super Mario', a captivating 2D game using C++ and the SFML, showcasing shader programming skills for visually stunning effects in the user interface",
        tech: ['Cpp', 'SFML', 'Shader', 'Vector', 'CMake'],
        github: 'https://github.com/Am4nn/Super-Mario-SFML',
        image: '/projects/super-mario-front.png'
    }
];

export const contactData = {
    imagesrc: '/stars/StarBackground.png',
    imagealt: 'Star Background Image',
};
