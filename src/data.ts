import IndonesiaMap from "./components/maps/Indonesia";
import SingaporeMap from "./components/maps/Singapore";
import DubaiMap from "./components/maps/Dubai";

export type TeamMember = {
  id: number;
  name: string;
  nim: string;
  role: string;
  email: string;
  instagram: string;
  linkedin: string;
  image: string;
  bio: string;
  skills: string[];
};

export type FAQItem = {
  question: string;
  answer: string;
};
export const newsData = [
  {
    id: 1,
    title: "Special 0% Interest Promotion for Car Loans",
    date: "2025-03-07",
    description:
      "Enjoy 0% interest on car loans until the end of this month. Terms & conditions apply.",
    image: "/images/promo-mobil.jpeg",
    category: "Promo",
    details: `
      This 0% interest program applies to specific car purchases with a loan term of up to 3 years.  
      **How to get this promotion:**  
      1. Apply for a car loan through the CBank app or at the nearest branch.  
      2. Choose a car that is included in the promo program.  
      3. Make a down payment according to the terms.  
      4. Enjoy 0% interest for the specified loan term.  
      
      *This promo is valid until the end of the month and is limited to the first customers who apply!*
    `,
  },
  {
    id: 2,
    title: "CBank Wins Best Digital Bank Award",
    date: "2025-03-05",
    description:
      "CBank has been awarded as the Best Digital Bank at the 2025 FinTech Awards.",
    image: "/images/bank-award.jpeg",
    category: "News",
    details: `
      CBank has been named **Best Digital Bank 2025** at the FinTech Awards for its outstanding digital banking innovations.  
      **Key factors behind CBank's victory:**  
      - AI-based banking security system.  
      - Fully-featured branchless banking services.  
      - Real-time transaction speed across all services.  
      
      *CBank continues to innovate to provide the best banking experience in the digital era!*
    `,
  },
  {
    id: 3,
    title: "50% Discount on Credit Card Transactions at Restaurants",
    date: "2025-03-01",
    description:
      "Get up to 50% off when dining at select restaurants with your CBank credit card.",
    image: "/images/diskon-resto.jpg",
    category: "Promo",
    details: `
      This promotion is available for CBank credit card holders dining at partner restaurants throughout March 2025.  
      **How to get the discount:**  
      1. Use your CBank credit card when paying at participating restaurants.  
      2. The 50% discount is automatically applied at checkout.  
      3. The promo is only valid for transactions of at least Rp 200,000.  
      
      *Enjoy great meals at a lower price with CBank!*
    `,
  },
];

export const brandLogos = [
  {
    name: "Amazon",
    image:
      "https://amazon-blogs-brightspot-lower.s3.amazonaws.com/about/00/92/0260aab44ee8a2faeafde18ee1da/amazon-logo-inverse.svg",
  },
  {
    name: "Shopee",
    image:
      "https://www.mendaftarkerja.com/wp-content/uploads/2024/09/IMG_2812.png",
  },
  {
    name: "Tokopedia",
    image: "https://www.julo.co.id/sites/default/files/2024-10/tokopedia.webp",
  },
  { name: "Lazada", image: "https://blog.alconost.com/hubfs/Lazada.svg" },
  {
    name: "Bukalapak",
    image:
      "https://hybrid.co.id/wp-content/uploads/2020/03/6d348add535c3c623309ebf5c1ee0c88_brand-architecture-bukalapak-primary@2x-1.png",
  },
  {
    name: "Blibli",
    image: "https://logowik.com/content/uploads/images/bliblicom1753.jpg",
  },
  {
    name: "Zalora",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt26xkMirIuF1VVGPpU0lCWc7XwpVz3uvixQ&s",
  },
  {
    name: "Traveloka",
    image:
      "https://interworks.com/wp-content/uploads/2023/02/Traveloka_Primary_Logo.webp",
  },
  {
    name: "Gojek",
    image:
      "https://www.pranataprinting.com/wp-content/uploads/2021/05/Sejarah-Singkat-Perusahaan-Gojek-Dan-Perkembangannya.jpg",
  },
  {
    name: "Grab",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsY2Mxbw-W5Fmx-ExXurEX-Z1_m4SjdN7Cgg&s",
  },
  {
    name: "Tiket.com",
    image:
      "https://www.linkaja.id/uploads/images/YW50aWtvZGVfXzE2OTY2NzU4MThfbG9nby10aWtldC1jb20tcG5n.png",
  },
];
export const offices = [
  {
    region: "Asia Pacific",
    city: "Jakarta",
    address: "Sudirman Central Business District, Tower 1",
    services: ["Retail Banking", "Corporate Finance", "Investment"],
    established: "2015",
    coordinates: { x: "400", y: "200" },
    mapComponent: IndonesiaMap,
  },
  {
    region: "Southeast Asia",
    city: "Singapore",
    address: "Marina Bay Financial Centre, Tower 3",
    services: ["Wealth Management", "Private Banking", "Trading"],
    established: "2018",
    coordinates: { x: "400", y: "200" },
    mapComponent: SingaporeMap,
  },
  {
    region: "Middle East",
    city: "Dubai",
    address: "Dubai International Financial Centre, Gate Village 8",
    services: ["Islamic Banking", "International Finance", "Treasury"],
    established: "2021",
    coordinates: { x: "480", y: "160" },
    mapComponent: DubaiMap,
  },
];

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Asep Jamaludin",
    nim: "101012330125",
    role: "Frontend Developer",
    email: "asepjamaludinn24@gmail.com",
    instagram: "https://www.instagram.com/_jmldnnn",
    linkedin: "https://www.linkedin.com/in/asep-jamaludin-061565294/",
    image: "/images/users/user1.JPG",
    bio: "Frontend developer with expertise in React and modern JavaScript frameworks. Loves creating responsive and accessible web applications.",
    skills: ["React", "JavaScript", "Tailwind CSS", "TypeScript"],
  },
  {
    id: 2,
    name: "Rheno Febrian",
    nim: "2021010102",
    role: "Backend Developer",
    email: "rfebrianc@gmail.com",
    instagram: "@rhenofbrn",
    linkedin: "@rhenofbrn",
    image: "https://source.unsplash.com/random/200x200?face=2",
    bio: "Backend developer specializing in Node.js and database design. Passionate about building scalable and secure APIs.",
    skills: ["Node.js", "Express", "MongoDB", "SQL"],
  },
  {
    id: 3,
    name: "Septia Retno",
    nim: "101012330230",
    role: "UI/UX Designer",
    email: "septiaretno01@gmail.com",
    instagram: "@septiaartn",
    linkedin: "@septiaartn",
    image: "https://source.unsplash.com/random/200x200?face=3",
    bio: "UI/UX designer passionate about crafting user-friendly and visually appealing digital experiences.",
    skills: ["Figma", "Adobe XD", "User Research", "Prototyping"],
  },
  {
    id: 4,
    name: "Hilmy Baihaqi",
    nim: "101012340233",
    role: "Project Manager",
    email: "hilmybaihaqi08@gmail.com",
    instagram: "@hilmybaihaqii_",
    linkedin: "@hilmybaihaqii_",
    image: "https://source.unsplash.com/random/200x200?face=4",
    bio: "Experienced project manager with a track record of delivering successful tech projects. Skilled in agile methodologies and team leadership.",
    skills: ["Agile", "Scrum", "JIRA", "Team Leadership"],
  },
];

export const faqData: FAQItem[] = [
  {
    question: "What is Cbank and how does it work?",
    answer:
      "Cbank is a modern digital banking platform that combines traditional banking services with cutting-edge technology. We provide secure, easy-to-use financial services including instant transfers, savings accounts, investment options, and comprehensive money management tools. Our platform is designed to make banking accessible and efficient for everyone.",
  },
  {
    question: "What are the main features of Cbank?",
    answer:
      "Cbank offers a wide range of features including real-time money transfers, bill payments, budgeting tools, savings goals, investment opportunities, and detailed transaction analytics. We also provide virtual cards, mobile payments, and integration with major payment platforms. All these features are accessible through our user-friendly mobile app and web platform.",
  },
  {
    question: "How secure is Cbank?",
    answer:
      "Security is our top priority at Cbank. We implement bank-grade encryption, multi-factor authentication, and continuous security monitoring. Our platform is compliant with all relevant banking regulations and we regularly undergo security audits. We also provide instant notifications for all transactions and allow users to freeze their cards instantly if needed.",
  },
  {
    question: "What are the fees associated with Cbank?",
    answer:
      "Cbank believes in transparent pricing. Our basic account is free and includes essential banking features. Premium accounts have a small monthly fee and provide additional benefits such as travel insurance, premium support, and higher transaction limits. All fees are clearly displayed in our app, and we never charge hidden fees.",
  },
  {
    question: "How can I contact Cbank support?",
    answer:
      "Our support team is available 24/7 through multiple channels. You can reach us via in-app chat, email, or phone. Premium users get priority support with dedicated account managers. We also have an extensive help center with guides and FAQs to help you find quick answers to common questions.",
  },
];
