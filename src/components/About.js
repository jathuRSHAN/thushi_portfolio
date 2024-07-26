import AboutImg from '../assets/about.jpeg';

export default function About() {
    const config = {
        line1: 'Hi, My name is thurusthika. I am a Electrical and Electronics Engineer.',
        line2: 'good at communication and time management, wants to learn and solve problems as part of a team and many more.',
        line3: 'I meet deadlines and am eager to gain real-world experience for personal and professional growth.'
    }

    return <section className='flex flex-col md:flex-row bg-secondary px-5' id='about'>
        <div className='py-5 md:w-1/2'>
            <img src={AboutImg} />
        </div>
        <div className='md:w-1/2 flex justify-center'>
            <div className='flex flex-col justify-center text-white'>
                <h1 className='text-4xl border-b-4 border-black mb-5 w-[170px] font-bold text-black'>About Me</h1>
                <p className='pb-5 text-2xl'>{config.line1}</p>
                <p className='pb-5 text-2xl'>{config.line2}</p>
                <p className='pb-5 text-2xl'>{config.line3}</p>
            </div>
        </div>
    </section>
}