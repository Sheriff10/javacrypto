import React from 'react'
import Container from './Container'
import { FaAsterisk } from "react-icons/fa"

export default function About() {
  return (
    <div className="wrap">
      <Container>
        <div className="grid lg:grid-cols-2 items-center py-32 min-h-[100vh]">
          <div className="img-wrap flex ">
            <img src="/asset/logo.png" alt="Java" className=' w-[500px]' />
          </div>

          <div className="wrap">
            <div className="heading">
              <span className='bg-black p-2 px-3 rounded-3xl bg-opacity-30 text-sm font-bold text-grad border border-blue-500'>About Java</span>
              <div className="text-wrap my-3 text-3xl lg:text-5xl font-extrabold">
                <span>Embrace the Future with Custom AI Assistants</span>
              </div>
            </div>

            <div className="text-wrap font-thin">
              <span>Our AI assistants don’t just respond; they adapt and learn from you, becoming smarter and more in tune with what you need. Picture an AI that gets your work style, handles your schedule, and even boosts your creativity, evolving right alongside you. That’s Jivara – it’s where cutting-edge tech meets your personal world. Plus, you can take your AI assistant to places like Telegram and Discord, so it’s there for you wherever you go online.</span>
              <ul className='mt-5 leading-8'>
                <li className='flex gap-4 items-center'> <FaAsterisk className=' text-blue-500' /> Personalized AI Tailoring.</li>
                <li className='flex gap-4 items-center'> <FaAsterisk className=' text-blue-500' /> 	Learning and Adaptability.</li>
                <li className='flex gap-4 items-center'> <FaAsterisk className=' text-blue-500' /> Platform Versatility.</li>
                <li className='flex gap-4 items-center'> <FaAsterisk className=' text-blue-500' /> 	Investor Benefits.</li>
              </ul>
            </div>
          </div>
        </div>


      </Container>
    </div>
  )
}
