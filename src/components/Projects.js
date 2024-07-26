import websiteImg1 from '../assets/p1.jpg';
import websiteImg2 from '../assets/R.jpeg';
import websiteImg3 from '../assets/p3.jpeg';

export default function Projects() {

    const config = {
        projects: [
            {
                image: websiteImg1,
                description: 'Developing A System For Predicting Core Temperature Using Skin Temperature.',
                link: 'https://github.com/Thushi1503'
            },
            {
                image: websiteImg2,
                description: 'Gas Leakage Detection Using Microcontroller',
                link: 'https://github.com/Thushi1503'
            },
            {
                image: websiteImg3,
                description: 'Motion-Activated Solar Light Brightness System',
                link: 'https://github.com/Thushi1503'
            }
        ]
    }

    return <section id='projects' className="flex  flex-col py-20 px-5 justify-center bg-primary text-white">
        <div className="w-full">
            <div className="flex flex-col px-10 py-5">
                <h1 className="text-4xl border-b-4 border-black mb-5 w-[150px] font-bold text-black ">Projects</h1>
                <p className='text-2xl text-black'>These are some of my best projects. Check them out.</p>
            </div>
        </div>
        <div className="w-full">
            <div className='flex flex-col md:flex-row px-10 gap-10 text-black text-2xl '>
                {config.projects.map((project) => (
                    <div className='relative '>
                        <img className='h-[500px] w-[600px]' src={project.image} />
                        <div className='project-desc '>
                            <p className='text-center px-5 py-5'>{project.description}</p>
                            <div className='flex justify-center text-black text-2xl '>
                                <a className='btn' target='_blank' href={project.link}>View Project</a>
                            </div>
                        </div>
                    </div>
                ))}


            </div>
        </div>
    </section>
}