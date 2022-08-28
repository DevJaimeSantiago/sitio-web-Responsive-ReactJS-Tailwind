import React from 'react'

const Newsletter = () => {
  return (
    <div className='w-full py-16 text-white px-4'>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
            <div className='lg:col-span-2 my-4'>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>¿Quieres consejos y trucos para optimizar tu flujo?</h1>
                <p>Suscribete a nuestro boletin y mantente al dia</p>
            </div>
            <div className='my-4'>
                <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                    <input className='p-3 flex w-full rounded-md text-black' type="email" placeholder='Ingrese Email' />
                    <button className='bg-[#00df9a] text-black rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3'>Notificarme</button>
                </div>
                <p>Nos procupamos por la protección de sus datos. Lea nuestra <span className='text-[#00df9a]'>Política  de privacidad.</span></p>
            </div>
        </div>
    </div>
  )
}

export default Newsletter