import styles from "../WhatIdo/WhatIdo.module.css"
import bulb from "../../assets/bulb.svg"

const WhatIdo = () => {

    const services = [
        {
            id: 1,
            title: "Full Stack Web Development",
            description: "Build responsive and high-performance web applications using PHP (CodeIgniter), JavaScript, TypeScript, MySQL, HTML, and CSS.",
            priceRange: "₹50,000 - ₹2,00,000",
            icon: "💻",
        },
        {
            id: 2,
            title: "REST API Integration",
            description: "Integrate REST APIs for seamless data exchange and real-time functionality in web applications.",
            priceRange: "₹20,000 - ₹80,000",
            icon: "🔗",
        },
        {
            id: 3,
            title: "E-Commerce Development",
            description: "Create dynamic e-commerce platforms with product management, user sessions, form validations, and structured data management using PHP and MySQL.",
            priceRange: "₹40,000 - ₹1,50,000",
            icon: "🛍️",
        },
        {
            id: 4,
            title: "Database Optimization",
            description: "Design and optimize MySQL databases for efficient data storage, retrieval, and management in web applications.",
            priceRange: "₹15,000 - ₹60,000",
            icon: "🗄️",
        },
        {
            id: 5,
            title: "Frontend Development",
            description: "Build interactive and responsive user interfaces using HTML, CSS, JavaScript, jQuery, and Bootstrap for seamless user experiences.",
            priceRange: "₹20,000 - ₹80,000",
            icon: "🎨",
        },
        {
            id: 6,
            title: "CodeIgniter Framework",
            description: "Develop scalable web applications using CodeIgniter MVC framework with clean code architecture and best practices.",
            priceRange: "₹30,000 - ₹1,00,000",
            icon: "⚙️",
        },
        {
            id: 7,
            title: "Performance Optimization",
            description: "Enhance website speed, optimize database queries, and improve overall application performance for better user experience.",
            priceRange: "₹15,000 - ₹50,000",
            icon: "⚡",
        },
        {
            id: 8,
            title: "Version Control & Documentation",
            description: "Maintain well-documented code using Git/GitHub with meaningful commit messages and technical documentation.",
            priceRange: "₹10,000 - ₹40,000",
            icon: "📝",
        },
    ];


    return (
        <div className={`${styles.main}`}>
            <p className='page-title'>What I do</p>


                <div className={`${styles.services} bg4`}>

                    {
                        services.map((service) => (

                            <div className={`${styles.card} bd2`} key={service.id}>
                                <img src={bulb} className={`${styles.bulb_icon}`} alt="bulb_icon" />
                                {/* <p>{service.icon}</p> */}
                                <p className={`${styles.title}`}>{service.title}</p>
                                <p className={`${styles.description}`}>{service.description}</p>
                            </div>
                        ))
                    }

                </div>
        </div>
    )
}

export default WhatIdo