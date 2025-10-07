import { link } from "fs";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building an AI Tool",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Mesh Mega Store",
    des: "Multi vendor ecommerce site built using nextjs, headless cms.",
    img: "/1.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://meshmegastore.ng/",
  },
  {
    id: 2,
    title: "Ticket Marketplace",
    des: "Sell and manage tickets for all your events.",
    img: "/2.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://ticketing-saas-convex-clerk.vercel.app/",
  },
  {
    id: 3,
    title: "AI Summarizer",
    des: "A REAL AI Tool that summarizes text using OpenAI's API.",
    img: "/3.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://acehq-summarizer.vercel.app/",
  },
  {
    id: 4,
    title: "Brainwave- Landing page",
    des: "Recreated a cool landing page with amazing animations.",
    img: "/4.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://brainwave-blue-rho.vercel.app/",
  },
    {
    id: 5,
    title: "Animated Award winning website",
    des: "Built and cloned an award winning website with cool animations.",
    img: "/5.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://codelabaward.vercel.app/",
  },
  {
    id: 6,
    title: "Pcbmentor- Blogging Platform",
    des: "I built a blogging platform for tech enthusiasts and engineers.",
    img: "/6.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://pcb-mentor-iota.vercel.app/",
  },
];

export const testimonials = [
  {
    quote:
      "Working with Destiny was a fantastic experience. He understood our business needs quickly and transformed them into a modern, high-performing website that truly represents our brand. His attention to detail and professionalism are unmatched.",
    name: "Mrs. Lucy Okonkwo",
    title: "COO at Multimesh Group",
  },
  {
    quote:
      "Destiny is a gifted developer who knows how to turn ideas into reality. His technical expertise and design sense made our platform look sleek and perform flawlessly. I’m truly impressed with his dedication and communication.",
    name: "Joseph Ogbonna",
    title: "CEO at PCBMentor",
  },
  {
    quote:
      "Destiny exceeded our expectations in every way. He’s patient, creative, and extremely reliable. From planning to deployment, he made the process smooth and enjoyable — I’d gladly work with him again.",
    name: "Aleruchi Wobo",
    title: "Founder at WoboTech Solutions",
  },
  {
    quote:
      "Collaborating with Destiny was a pleasure from start to finish. He combines technical skill with a great eye for design, and he delivers on time — every time. Our website has received incredible feedback from clients.",
    name: "Emily Carter",
    title: "Marketing Lead at Horizon Studios (UK)",
  },
  {
    quote:
      "Destiny’s professionalism and creativity stood out throughout our collaboration. He’s a problem-solver who doesn’t just code — he crafts digital experiences that align perfectly with your goals.",
    name: "Ryan Mitchel",
    title: "Founder at Peak Innovations",
  },
  {
    quote:
      "I’ve worked with many developers, but Destiny’s passion and precision are on another level. He brought fresh ideas that improved both the design and usability of our platform. Truly a pleasure to work with.",
    name: "Chinedu Okafor",
    title: "CEO at TechBridge Africa",
  },
];


export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Full Stack Developer",
    desc: "Designed and developed feature-rich web applications with a focus on user experience.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance Web Developer",
    desc: "led the development of a multi-vendor ecommerce platform.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "github.com/itz-destiny"
  },
  { 
    id: 2,
    img: "/twit.svg",
    link: "https://x.com/codewithdestiny"
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/destiny-jonathan-919049346?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
  },
];
