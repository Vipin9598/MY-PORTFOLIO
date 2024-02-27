import gif from "./images/gif.png";
import password from "./images/password.png";
import weather from "./images/weather.png";
import MEDITECH from "./images/MEDITECH.png";
const data = [
  {
    id: 1,
    url: "https://vipinmeditech.netlify.app/",
    title: "MEDITECH",
    description:
      "MEDITECH is a comprehensive online learning platform . It operates as a fully functional web app seamlessly integrated with RazorPay, ensuring a smooth payment experience for our users",
    image: MEDITECH,
    btn: "CheckOut",
  },
  {
    id: 2,
    url: "https://checkweatherforcast.netlify.app",
    title: "Weather-App",
    description:
      "Stay informed with our weather app! Get real-time temperature, wind speed, cloud coverage, and humidity updates. Plan your day confidently with accurate weather data at your fingertips",
    image: weather,
    btn: "CheckOut",
  },

  {
    id: 3,
    url: "https://vipin-password-generator-app.netlify.app",
    title: "Password-Generator",
    description:
      "Easily create strong passwords with our app! Generate secure and unique passwords tailored to your needs. Enhance your online security effortlessly. ",
    image: password,
    btn: "CheckOut",
  },

  {
    id: 4,
    url: "https://vipingifgenerator.netlify.app",
    title: "Random-GIF-Generator",
    description:
      "Experience the magic of our Random GIF Generator app! Input any text and watch as it transforms into a delightful GIF. Express emotions, stories, and reactions uniquely through dynamic visuals.",
    image: gif,
    btn: "CheckOut",
  },
];

export default data;
