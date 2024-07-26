import HeroImg from '../assets/hero.jpeg';
import { AiOutlineGithub, AiOutlineFacebook, AiOutlineLinkedin } from "react-icons/ai";

export default function Hero() {
    const config = {
        subtitle: 'IM A ELECTRICAL AND ELECTRONICS ENGINEER',
        social: {
            Github: 'https://github.com/Thushi1503',
            facebook: 'https://web.facebook.com/profile.php?id=100007118597808',
            linkedin: 'https://www.linkedin.com/feed/'
        }
    }


    return <section className='flex flex-col md:flex-row px-5 py-32 bg-primary justify-center'>
        <div className='md:w-1/2 flex flex-col'>
            <h1 className=' text-black text-6xl font-hero-font'>Hi, <br /> Im <span className='text-black font-bold'>THURUSTHIKA</span> NESALINGAM
                <p className='text-2xl'>{config.subtitle}</p>
            </h1>
            <div className='flex py-10'>
                <a href={config.social.Github} className='pr-5 hover:text-white'><AiOutlineGithub size={40} /></a>
                <a href={config.social.facebook} className='pr-5 hover:text-white'><AiOutlineFacebook size={40} /></a>
                <a href={config.social.linkedin} className='hover:text-white'><AiOutlineLinkedin size={40} /></a>
            </div>
        </div>
        <img className='md:w-1/3' src={HeroImg} />
    </section>
}
