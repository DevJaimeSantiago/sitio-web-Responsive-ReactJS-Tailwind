import React from 'react'

// imagenes
import laptop from '../assets/laptop.jpg'

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[500px] mx-auto my-4' src={laptop} alt="/" />
            <div className='flex flex-col justify-center'>
                <p className='text-[#00df9a] font-bold' >PANEL DE ANÁLISIS DE DATOS</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Gestionar el análisis de datos de forma centralizadda</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae numquam autem esse nam deserunt quis provident labore delectus maiores, quidem in nostrum saepe soluta hic, ab facilis adipisci facere! Saepe?</p>
                <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Comenzar</button>                
            </div>
        </div>
    </div>
  )
}

export default Analytics