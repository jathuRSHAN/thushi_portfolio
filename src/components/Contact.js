
export default function Contact() {

    const config = {
        email: 'Thushi1503@gmail.com',
        phone: '+94773436493'
    }

    return <section id='contact' className='flex flex-col bg-primary px-5 py-32 text-white'>
        <div className='flex flex-col items-center'>

            <h1 className='text-4xl border-b-4  border-black mb-5 w-[140px] font-bold text-black'>Contact</h1>
            <p className='pb-5 text-black text-2xl'>If you want to discuss more in detail, please contact me</p>
            <p className='py-2 text-black text-2xl'><span className='font-bold'>Email :</span> {config.email}</p>
            <p className='py-2 text-black text-2xl'><span className='font-bold'>Phone :</span> {config.phone}</p>
        </div>
    </section>
}