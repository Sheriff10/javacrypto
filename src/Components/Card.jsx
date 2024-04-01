import React from 'react'
import Container from './Container'

export default function Card() {
    const cardFunc = (img, heading, text) => {
        return { img, heading, text }
    }
    const cardImg = [
        cardFunc("", "AI Profile Customization",)
    ]
    const dum = [1, 2, 3]
    return (
        <div className="wrap bg-gray-50">
            <Container>
                <div className="grid lg:grid-cols-3 py-16 gap-10">
                    {dum.map((card, index) => (
                        <div className="card bg-white rounded-xl  lg:shadow-lg p-5" key={index}>
                            <div className="card-head">
                                <div className="img-wrap">
                                    <img src="/asset/c1.svg" alt="Java" className='w-[80px] mb-2' />
                                </div>
                                <div className="text--wrap font-bold text-xl">
                                    <span>AI Profile Customization</span>
                                </div>
                            </div>
                            <div className="card-body font-thin mt-4">
                                <span>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, quis. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, rerum.
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}
