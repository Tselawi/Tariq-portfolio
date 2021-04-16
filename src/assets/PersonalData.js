import logo from "./images/logo.svg";
import backg from "./images/a-t.jpg";
import bg1 from "./images/o-1.jpg";
import bg2 from "./images/a-c.jpg";
import profilepic from "./images/profilepic.jpeg";
import skillbg from "./images/p-1.jpg";
import charatermanager from "./images/charatermanager.png";
import pizza_form from "./images/pizza-form.png";

const personData = {
  about: {
    name: `Tariq Selawi`,
    phone: `+32466346060`,
    email: `selawi.be@gmail.com`,
    address: `4000 Liège ‡(Belgium)`,
    profession: [`System Administrator`, `Junior Web Developer`],
    profilepic,
    skillbg,
    logo,
    backg,
    bg1,
    bg2,
  },

  socialMedias: [
    {
      url: `https://www.linkedin.com/in/tariq-selawi/`,
      icon: `fab fa-linkedin-in`,
      name: `Linkedin`,
    },
    {
      url: `https://github.com/Tselawi/`,
      icon: `fab fa-github`,
      name: `Github`,
    },
    {
      url: `https://twitter.com/selawi_be/`,
      icon: `fab fa-twitter`,
      name: `Twitter`,
    },
  ],

  experience: [
    {
      school: `BeCode`,
      url: `https://becode.org/`,
      brief: `Junior web developer at`,
    },
    {
      school: `Microbus asbl`,
      url: `https://microbus.be/`,
      brief: `Professional orientation towards one of the fields related to coding at`,
    },
    {
      school: `Agility Engineering & contracting company`,
      url: `https://www.agilityecc.com/`,
      brief: `I worked as IT support and system administrator for 9 months in`,
    },
    {
      school: `Bynuna general cleaning`,
      url: ``,
      brief: `I worked as IT support and system addministrator for 5 years in`,
    },
    {
      school: `Alain University of Science & Technology`,
      url: `https://aau.ac.ae/en/`,
      brief: `I graduated in 2010 holding bachelor degree in software engineering from`,
    },
    {
      school: ``,
      url: ``,
      brief: `I am thirsty for learning and I would like to discover a lot and work for a reputable company `,
    },
  ],

  skills: [
    {
      name: `Frontend`,
      language: [
        `HTML5`,
        `CSS3`,
        `SASS`,
        `JavaScript`,
        `React`,
        `React-native`,
        `Bootstrap 4`,
      ],
      icon: `fas fa-laptop-code`,
    },
    {
      name: `Backend`,
      language: [`Docker`, `Php`],
      icon: `fas fa-code`,
    },
    {
      name: `Database`,
      language: [`Phpmyadmin`, `MYSQL`],
      icon: `fas fa-database`,
    },
    {
      name: `Version control`,
      language: [`Git`, `Github`],
      icon: `fas fa-code-branch`,
    },
    {
      name: `Cloud`,
      language: [`Heroku`, `Netlify`],
      icon: `fas fa-cloud`,
    },
  ],

  projects: [
    {
      title: "Character Manager",
      technologies: ["HTML5", `CSS3`, `Javascript`],
      about: `Create, update, remove  heroes characters`,
      image: charatermanager,
      url: `https://tselawi.github.io/modern-js-application/`,
    },
    {
      title: "Pizza Form",
      technologies: ["HTML5, CSS3, Bootstrap, Php, Docker"],
      about: `Submit-order, Register-address, Switch between links`,
      image: pizza_form,
      url: `https://php-form-pizza.herokuapp.com/src/index.php`,
    },
  ],
};

export default personData;
