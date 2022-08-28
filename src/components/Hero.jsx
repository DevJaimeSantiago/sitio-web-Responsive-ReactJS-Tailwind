import React from 'react'
import ReactTypingEffect from 'react-typing-effect'

const Hero = () => {
  return (
    <div className='text-white'>
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            <p className='text-[#00df9a] font-bold p-2'>CRECIENDO CON ANÁLISIS DE DATOS</p>
            <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Crecer con datos</h1>
            <div className='flex justify-center items-center'>
                <p className='md:text-4xl sm:text-3xl text-xl font-bold py-4'>Rápido, flexible financiamiento para</p>
                <ReactTypingEffect
                    className='md:text-4xl sm:text-3xl text-xl font-bold md:pl-2 pl-2'
                    text={['BTB', 'BTC', 'SASS']}
                    cursorRenderer={cursor => <h1>{cursor}</h1> }
                    speed={320}
                    eraseSpeed={340}
                />

            </div>
            <p className='md:text-xl text-xl font-bold text-gray-600'>Supervise sus análisis de datos para aumentar los ingresos de las plataformas BTB, BTC y SASS</p>
            <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Comenzar</button>
        </div>
    </div>
  )
}

export default Hero