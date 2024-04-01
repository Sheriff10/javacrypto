import React from 'react'
import Container from './Container'

export default function Intro() {
    return (
        <div className="wrap">
            <Container>
                <div className="grid lg:grid-cols-2 items-center py-32 min-h-[90vh]">
                    <div className="text-wrap z-10   bg-opacity-10 py-10 backdrop-blur-sm">
                        <span className='text-6xl lg:text-8xl font-extrabold'>
                            Meet Your <span className='text-grad'>Personal </span>
                            Cook AI
                        </span>
                        <div className="text-wrap my-5">
                            <span className='lg:font-thin text-gray-900'>
                                AI with Java – a platform that redefines your interaction with technology. Our advanced AI assistants are designed to learn from you, adapt to your needs, and enhance both your personal and professional life.
                            </span>
                        </div>

                        <div className="btn-wrap">
                            <button className='bg-grad rounded-3xl p-2 px-3 lg:min-w-[200px] text-white font-medium'>Join Java Community</button>
                        </div>
                    </div>

                    <div className="img-wrap  absolute lg:relative right-0 lg:flex justify-end">
                        <img src="/asset/pfp.png" alt="Java" className='w-[400px]' />
                    </div>
                </div>


            </Container>
        </div>
    )
}
