import styles from "./Projects.module.css"
import ProjectCard from '../ProjectCard/ProjectCard';
import type { project } from '../../models/project.model';

const Projects = () => {

    const projects: project[] = [
        {
            title: "MShopee",
            description: "Developed a fully dynamic website about Mobile Selling, where users can choose devices with various variety and place orders. Implemented backend database using MySQL with backend logic that mirrored real e-commerce site flows, using form validations, user sessions, and structured data management.",
            images:[
                "/images/project_1.png",
                "/images/project_2.png",
                "/images/project_3.png"
            ],
            tags:["PHP","CodeIgniter","jQuery","JavaScript","MySQL","Bootstrap","HTML"],
            github:'https://github.com/Rutuja3107',
            live:''
        },
        {
            title:"WeatherForecasting",
            description:"Built a fully functional weather forecasting website where users can enter a location to view real-time weather predictions without using a backend database. Integrated third-party weather API to fetch live data dynamically based on user input, ensuring seamless user experience. Applied form input validation, responsive UI design, and asynchronous JavaScript (AJAX) to fetch and display accurate weather data instantly.",
            images:[
                "/images/project_12.png",
                "/images/project_13.png"
            ],
            tags:["HTML","CSS","JavaScript","jQuery","Bootstrap","OpenWeatherMap API","AJAX"],
            github:"https://github.com/Rutuja3107",
            live:""
        }
    ]

    return (
        <div className={`${styles.main} bg4`}>
            <div className={`${styles.card_container} bg2`}>
                {projects.map((project,index)=>(

                <ProjectCard key={index} project={project}/>
                ))}

            </div>
        </div>
    );
}

export default Projects