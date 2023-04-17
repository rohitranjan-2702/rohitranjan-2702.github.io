// gitprofile.config.js

const config = {
  github: {
    username: "rohitranjan-2702",
    sortBy: "stars",
    limit: 8,
    exclude: {
      forks: false,
      projects: ["Nodejs-Openai-Image", "", ""], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: "rohit-ranjan-singh-6133901b6",
    twitter: "rohit_ranjan27",
    facebook: "",
    instagram: "",
    dribbble: "",
    behance: "",
    medium: "",
    dev: "",
    stackoverflow: "", // format: userid/username
    website: "https://beacons.ai/rohitranjan",
    phone: "",
    email: "rohitranjan2702@gmail.com",
  },
  resume: {
    fileUrl:
      "https://drive.google.com/file/d/1aXbWKtmzCEnZenQsYxtb-ha_VFSERefS/view", // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    "JavaScript",
    "Firebase",
    "ReactJS",
    "NodeJS",
    "ExpressJS",
    "MongoDB",
    "RESTApi's",
    "Tailwind",
    "Typescript",
    "Html",
    "Css",
    "DiscordJS",
    "Github",
    "Python",
    "NextJs",
    "Docker",
  ],
  experiences: [
    {
      company: "Cunard Consulting",
      position: "Junior MERN Developer Intern",
      from: "Mar 2023",
      to: "Present",
      companyLink: "",
    },
    {
      company: "CLUELESS Community",
      position: "Developer Relations",
      from: "Jan 2023",
      to: "Present",
      companyLink: "https://www.clueless.live/",
    },
    {
      company: "MLH Hackathon Winner",
      position: "2nd Runnerup",
      from: "Feb 2023",
      to: "Mar 2023",
      companyLink: "",
    },
  ],
  /* certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com'
    },
  ], */
  education: [
    {
      institution: "Heritage Institute of Technology, Kolkata",
      degree: "B.tech in Computer Science",
      from: "2021",
      to: "2025",
    },
    {
      institution: "Delhi Model Public School, Kulharia",
      degree: "High School",
      from: "2019",
      to: "2021",
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: "CodeHelp - Diversion winning project",
      description:
        "CodeHelp is a 1-to-1 tutoring platform, where you can just upload your doubt and you get assisted by a technical expert of that particular tech you are learning or you have doubt in. You just have to upload your doubt in the ASK DOUBT page, add in the details, select the relevant techstack and that's it. You get automatically to the expert tutors within minutes and solve your doubts so easily and also understand your mistake more deeply.",
      imageUrl: "",
      link: "https://github.com/rohitranjan-2702/CodeHelp_Final",
    },
  ],

  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: "",
    username: "",
    limit: 2,
  },
  googleAnalytics: {
    id: "", // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: "",
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: "winter",

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      "light",
      "dark",
      "cupcake",
      "bumblebee",
      "emerald",
      "corporate",
      "synthwave",
      "retro",
      "cyberpunk",
      "valentine",
      "halloween",
      "garden",
      "forest",
      "aqua",
      "lofi",
      "pastel",
      "fantasy",
      "wireframe",
      "black",
      "luxury",
      "dracula",
      "cmyk",
      "autumn",
      "business",
      "acid",
      "lemonade",
      "night",
      "coffee",
      "winter",
      "procyon",
    ],

    // Custom theme
    customTheme: {
      primary: "#fc055b",
      secondary: "#219aaf",
      accent: "#e8d03a",
      neutral: "#2A2730",
      "base-100": "#E3E3ED",
      "--rounded-box": "3rem",
      "--rounded-btn": "3rem",
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made By <a 
      class="text-primary" href="https://beacons.ai/rohitranjan"
      target="_blank"
      rel="noreferrer"
    >RoHit</a> and ❤️`,
};

export default config;
