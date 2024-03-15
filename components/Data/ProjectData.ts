import img from '@/components/assets/portfolio.png'
import weather from '@/components/assets/weather.png'
import todo from '@/components/assets/Todo.png'
import infi from '@/components/assets/infi.png'


export const projectData = [
    {
      img: img, // Corrected assignment
      title: "Portfolio Website",
      githubLink: "https://github.com/punyakrit/portfolio-next",
      deployedLink: "https://www.punyakrit.tech/",
      skill: ["NextJs", "Tailwind CSS"]
    },
    {
      img: weather, 
      title: "Weather App",
      githubLink: "https://github.com/punyakrit/Weather-App",
      deployedLink: "https://weather-app-punyakrit.vercel.app/",
      skill: ["ReactJs", "Tailwind CSS","Axios"]

    },
    
    {
      img: todo, 
      title: "Full Stack Todo App",
      githubLink: "https://github.com/punyakrit/FullStack-TodoApp",
      deployedLink: "https://full-stack-todo-app-sable.vercel.app/",
      skill: ["MERN", "Tailwind CSS",]

    },
    {
      img: infi, 
      title: "Infinite Healings Project",
      githubLink: "https://github.com/punyakrit/Infinite-Healings",
      deployedLink: "https://www.infinitehealings.in/",
      skill: ["ReactJs", "Tailwind CSS"]

    }
  ];
  