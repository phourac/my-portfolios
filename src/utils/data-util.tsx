import { title } from "process";
import { CiFacebook } from "react-icons/ci";
import {
  FaBootstrap,
  FaCss3,
  FaFacebook,
  FaFigma,
  FaFileWord,
  FaGitAlt,
  FaGithub,
  FaGitlab,
  FaHtml5,
  FaInstagram,
  FaLinkedinIn,
  FaNode,
  FaPython,
  FaReact,
  FaTelegram,
  FaVuejs,
  FaWordpress,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import {
  PiMicrosoftExcelLogoFill,
  PiMicrosoftPowerpointLogoFill,
} from "react-icons/pi";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import {
  SiCanva,
  SiCodemirror,
  SiDaisyui,
  SiJira,
  SiMicrosoftword,
  SiMui,
  SiNuxtdotjs,
  SiStrapi,
  SiTypescript,
} from "react-icons/si";
import { TbBrandFramerMotion, TbBrandThreejs } from "react-icons/tb";

export const navItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Work",
    href: "/work",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

export const SkillsData = [
  {
    title: "Promgraming Languages",
    skill: [
      {
        icon: FaHtml5,
        value: "Html",
        lang: "",
      },
      {
        icon: FaCss3,
        value: "CSS",
        lang: "",
      },
      {
        icon: IoLogoJavascript,
        value: "Javascript",
        lang: "",
      },
      {
        icon: "",
        value: "ECMAScript",
        lang: "ES",
      },
      {
        icon: SiTypescript,
        value: "Typescript",
        lang: "",
      },
      {
        icon: FaPython,
        value: "Python",
        lang: "",
      },
    ],
  },
  {
    title: "Frameworks, Libraries & mores",
    skill: [
      {
        icon: FaReact,
        value: "React.js",
        lang: "",
      },
      {
        icon: FaVuejs,
        value: "Vue.js",
        lang: "",
      },
      {
        icon: RiNextjsFill,
        value: "Next.js",
        lang: "",
      },
      {
        icon: SiNuxtdotjs,
        value: "Nuxt.js",
        lang: "",
      },
      {
        icon: RiTailwindCssFill,
        value: "TailwindCSS",
        lang: "",
      },
      {
        icon: FaBootstrap,
        value: "Bootstrap",
        lang: "",
      },

      {
        icon: SiMui,
        value: "MUI",
        lang: "",
      },
      {
        icon: SiDaisyui,
        value: "DaisyUI",
        lang: "",
      },
      {
        icon: TbBrandFramerMotion,
        value: "Framer Motion",
        lang: "",
      },
      {
        icon: TbBrandThreejs,
        value: "React Three Fiber",
        lang: "",
      },
      {
        icon: "",
        value: "Chart.js",
        lang: "Chart",
      },
      {
        icon: SiCodemirror,
        value: "Codemirror",
        lang: "",
      },

      {
        icon: FaNode,
        value: "Node.js",
        lang: "",
      },
    ],
  },
  {
    title: "Tools & Platforms",
    skill: [
      {
        icon: FaGitAlt,
        value: "Git",
        lang: "",
      },
      {
        icon: FaGithub,
        value: "GitHub",
        lang: "",
      },
      {
        icon: FaGitlab,
        value: "GitLab",
        lang: "",
      },
      {
        icon: SiJira,
        value: "Jira",
        lang: "",
      },
    ],
  },
  {
    title: "Languages",
    skill: [
      {
        icon: "",
        lang: "ខ្មែរ",
        value: "100%",
      },
      {
        icon: "",
        lang: "English",
        value: "70%",
      },
    ],
  },
  {
    title: "Other Skills",
    skill: [
      {
        icon: SiStrapi,
        value: "Strapi",
        lang: "",
      },
      {
        icon: FaWordpress,
        value: "Wordpress",
        lang: "",
      },
      {
        icon: FaFigma,
        value: "Figma",
        lang: "",
      },
      {
        icon: SiMicrosoftword,
        value: "MsWord",
        lang: "",
      },
      {
        icon: PiMicrosoftPowerpointLogoFill,
        value: "MsPowerpoint",
        lang: "",
      },
      {
        icon: SiCanva,
        value: "Canva",
        lang: "",
      },
    ],
  },
];

export const contact = {
  phone: {
    number: "+855 85704481",
  },
  email: {
    e: "tphourac@gmail.com",
  },
};

export const socials = [
  {
    name: "Facebook",
    link: "https://www.facebook.com/profile.php?id=100028488592786",
    icon: FaFacebook,
  },
  {
    name: "Telegram",
    link: "https://t.me/phourac",
    icon: FaTelegram,
  },
  {
    name: "Linkedin",
    link: "https://www.linkedin.com/in/than-phourac-822370267/",
    icon: FaLinkedinIn,
  },
];

export const socialsMedia = [
  {
    name: "Facebook",
    link: "https://www.facebook.com/profile.php?id=100028488592786",
    icon: FaFacebook,
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/t.kyrc?igsh=OG84ampsaDFnYzJn&utm_source=qr",
    icon: FaInstagram,
  },
  {
    name: "Telegram",
    link: "https://t.me/phourac",
    icon: FaTelegram,
  },
  {
    name: "Linkedin",
    link: "https://www.linkedin.com/in/than-phourac-822370267/",
    icon: FaLinkedinIn,
  },
  {
    name: "Github",
    link: "https://github.com/Phourac",
    icon: FaGithub,
  },
  {
    name: "Gitlab",
    link: "https://gitlab.com/-/user_settings/profile",
    icon: FaGitlab,
  },
];

export const projects = [
  {
    id: 1,
    title: "Dogenote Seller",
    type: "Admin Portal",
    src: "c2montreal.png",
    color: "#e3e5e7",
    img: "/img/Screenshot 2024-09-06 at 2.58.52 in the afternoon.png",
    credit: "Digital one",
    tech: "React js",
    detatil: {
      img: "/img/dogenote-seller1.png",
      vdo: "/img/dogenote-seller-mp4.mp4",
      color: "#5c8ddf",
      pc: [
        {
          img: "/img/dogenote-seller3.png",
        },
        {
          img: "/img/dogenote-seller2.png",
        },
      ],
    },
  },
  {
    id: 2,
    title: "Dogenote Admin",
    type: "Admin Portal",
    src: "c2montreal.png",
    color: "#d6d7dc",
    img: "/img/Screenshot 2024-09-06 at 2.59.58 in the afternoon.png",
    credit: "Digital one",
    tech: "React js",
    detatil: {
      img: "/img/dogenote_admin1.png",
      vdo: "/img/dogenote-admin-video.mp4",
      color: "#5c8ddf",
      pc: [
        {
          img: "/img/dogenote-admin3.png",
        },
        {
          img: "/img/dogenote_admin2.png",
        },
      ],
    },
  },
  {
    id: 3,
    title: "Mulberry Preschool",
    type: "Landing Page",
    src: "c2montreal.png",
    color: "#e3e3e3",
    img: "/img/Screenshot 2024-09-06 at 2.35.09 in the afternoon.png",
    credit: "Digital one",
    tech: "Next js",
    detatil: {
      img: "/img/muberry1.png",
      vdo: "/img/mulbery-mp4.mp4",
      color: "#cd3887",
      mobile: [
        {
          img: "/img/mulberry-m1.png",
        },
        {
          img: "/img/mulberry-m2.png",
        },
        {
          img: "/img/mulberry-m3.png",
        },
      ],
    },
  },
  {
    id: 4,
    title: "TK Express",
    type: "Landing Page",
    src: "c2montreal.png",
    color: "#21242b",
    img: "/img/Screenshot 2024-09-06 at 2.55.16 in the afternoon.png",
    credit: "Digital one",
    tech: "Next js",
    detatil: {
      img: "/img/tkexpresspc.png",
      vdo: "/img/tkexpress-home.mp4",
      color: "#205068",
      mobile: [
        {
          img: "/img/tk3.png",
        },
        {
          img: "/img/tk2.png",
        },
        {
          img: "/img/tk1.png",
        },
      ],
    },
  },
  {
    id: 5,
    title: "AMK",
    type: "Admin Portal",
    src: "c2montreal.png",
    color: "#d4e3ec",
    img: "/img/AMK_TemplateList.png",
    credit: "Digital one",
    tech: "Next js",
    detatil: {
      img: "/img/amk1.png",

      color: "#95456d",
      pc: [
        {
          img: "/img/amk2.png",
        },
        {
          img: "/img/amk3.png",
        },
      ],
    },
  },
  {
    id: 6,
    title: "KH-POS",
    type: "POS System",
    src: "c2montreal.png",
    color: "#e5e0e1",
    img: "/img/kh-pos_productList.png",
    credit: "Digital one",
    tech: "React js",
    detatil: {
      img: "/img/kh-pos1.png",
      color: "#3274f0",
      pc: [
        {
          img: "/img/kh-pos2.png",
        },
        {
          img: "/img/kh-pos3.png",
        },
      ],
    },
  },
  {
    id: 7,
    title: "More Plus",
    type: "Admin Dashboard",
    src: "c2montreal.png",
    color: "#d7d4cf",
    img: "/img/moreplus-dashboard.png",
    credit: "Digital one",
    tech: "React js",
    detatil: {
      img: "/img/more-plus1.png",
      vdo: "/img/more-plus-mp4.mp4",
      color: "#FD6254",
      pc: [
        {
          img: "/img/more-plus2.png",
        },
        {
          img: "/img/more-plus3.png",
        },
      ],
    },
  },
];

export const experiences = [
  {
    year: "2019 - 2023",
    job: "Computer Science - Bachelor Degree",
    place: "RUPP",
  },
  {
    year: "2019 - 2023",
    job: "General English",
    place: "CAM-ASEAN",
  },
  {
    year: "2022 - 2023",
    job: "Web Apprentice",
    place: "Koompi",
  },
  {
    year: "2023 - Present",
    job: "Web Developer",
    place: "BLOC-Delivery",
  },
];

export const picAbout = [
  {
    color: "#21242b",
    img: "/img/2024-09-10 17.14.50.jpg",
  },
  {
    color: "#21242b",
    img: "/img/2024-09-10 17.15.12.jpg",
  },
  {
    color: "#21242b",
    img: "/img/2024-09-10 17.26.35.jpg",
  },
  {
    color: "#21242b",
    img: "/img/2024-09-10 17.17.57.jpg",
  },
  {
    color: "#21242b",
    img: "/img/IMG_2101.jpg",
  },
  {
    color: "#21242b",
    img: "/img/IMG_2204.jpg",
  },
  {
    color: "#21242b",
    img: "/img/2024-09-10 17.14.50.jpg",
  },
];

// export const
