import { link } from "fs";

export const navItems = [
  { name: "About", link: "/#about" },
  { name: "Projects", link: "/projects" },
  { name: "Testimonials", link: "/#testimonials" },
  { name: "Contact", link: "/#contact" },
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
    title: "Tech enthusiast with a passion for designing.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently designing something new.",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b1.svg",
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
    title: "Kar Hisaab",
    des: "Logo, Website and App Design.",
    img: "/KarHisaab.png",
    link: "",
  },
  {
    id: 2,
    title: "Speedykart",
    des: "App Redesign.",
    img: "/Speedykart.png",
    link: "",
  },
  {
    id: 3,
    title: "Apparel Tour and Travels",
    des: "Logo Design",
    img: "/2.png",
  },
  {
    id: 4,
    title: "Excite and Explore Tour and Travels",
    des: "Logo Design",
    img: "/20.png",
  },
  {
    id: 5,
    title: "Fashify",
    des: "App Design",
    img: "/FASHIFY.png",
  },
  {
    id: 6,
    title: "Tanu Holiday Tour & Travels",
    des: "Logo Design",
    img: "/tanu.png",
  },
  {
    id: 7,
    title: "Travel",
    des: "App Design",
    img: "/travel.png",
  },
  {
    id: 8,
    title: "Greenend Smart Services",
    des: "Logo Design",
    img: "/sslogo.jpg",
  },
  {
    id: 9,
    title: "Hotel The Casa",
    des: "Logo Design",
    img: "/htc.jpg",
  },
  {
    id: 10,
    title: "Kashmeasy softlabs",
    des: "Business card design",
    img: "/kebc.png",
  },
  {
    id: 11,
    title: "Stationary",
    des: "Stationary",
    img: "/stationary.png",
  },
  {
    id: 12,
    title: "Design Dynasty",
    des: "Business card design",
    img: "/dd.jpg",
  },
  {
    id: 13,
    title: "Yatra Port",
    des: "Business card design",
    img: "/shahid.jpg",
  },
  {
    id: 14,
    title: "Sheikh Enterprises",
    des: "Business card design",
    img: "/insta.png",
  },
  {
    id: 15,
    title: "ESI Website",
    des: "Events and Services International",
    img: "/esifinalgif.gif",
  },
  {
    id: 15,
    title: "The Belvoir Collection",
    des: "End-to-End Real Estate & Design Solutions for Thriving Hospitality Brands",
    video: "/belvoirweb.mp4",
  },
  {
    id: 16,
    title: "Computer Ware Corporation",
    des: "A WordPress Website for a Leading IT solutions company in Kashmir",
    video: "/Computerwarecorp.mp4",
    link: "https://computerwarecorp.com/"
  },
  {
    id: 17,
    title: "Al Shiraa Travels",
    des: "A WordPress Website for a Leading Travel Agency",
    video: "/Alshiraatravels.mp4",
    link: "https://alshiraatravels.com/"
  },
  {
    id: 18,
    title: "Root for Wings",
    des: "A WP site offering a blend of spiritual and soulful services to help unlock personal growth journey.",
    video: "/Rootforwings.mp4",
    link: "https://rootforwings.com/"
  },
  {
    id: 19,
    title: "Broucher Design",
    des: "Designed a brochure for a holistic wellness center in Kashmir offering modern and traditional therapies—from hijama and chiropractic care to fast-track tattoo removal.",
    video: "/DrBasitBroucher.mp4",
    link: "/new-broucher-design-for-dr-basit.mp4"
  },
  {
    id: 20,
    title: "Logo and Letterhead Design",
    des: "Designed a logo and letterhead for a Travel Agency-Al Shira.",
    img: "/AlshiraLetterHead&Logo.png",
    link: "/AlshiraLetterHead&Logo.png"
  },
  {
    id: 21,
    title: "Logo Design",
    des: "Designed a logo for a Designer Brand- Kashmir Only.",
    img: "/kashmir.png",
    link: "/kashmir.png"
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
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
    title: "UI/UX Graphic Designer - KashmEasy Softlabs",
    desc: "Assisted in the design and development of visually engaging web and app interfaces, creating intuitive user experiences. Designed logos, branding elements, and digital assets, ensuring cohesive visual identity across platforms.",
    className: "md:col-span-2",
    thumbnail: "/girl.png",
  },
  {
    id: 2,
    title: "Freelancing Graphic Designer",
    desc: "Created logos, brochures, ads, and web/app designs, focusing on user-friendly interfaces and strong brand identities. Delivered tailored design solutions that enhanced user experience and client satisfaction.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/mouminamajeed",
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "https://x.com/IllahiMomina",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/moumina-m-092143142/",
  },
];
