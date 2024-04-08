import React from 'react'
import Container from './Container'

export default function Card() {
    
    const card = [
        {
          "title": "$JAVA Staking",
          "text": "Promote long-term holding and involvement in the network to increase the stability and value of the token."
        },
        {
          "title": "Customer Service",
          "text": "To support consumers and get feedback, set up a strong customer service system."
        },
        {
          "title": "Back Testing",
          "text": "After beta testing, take into account user comments to finalize the products and reinventing Ai proficiency"
        }
      ];
    return (
        <div className="wrap bg-gray-50">
            <Container>
                <div className="grid lg:grid-cols-3 py-16 gap-10">
                    {card.map((card, index) => (
                        <div className="card bg-white rounded-xl  lg:shadow-lg p-5" key={index}>
                            <div className="card-head">
                                <div className="img-wrap">
                                    <img src="/asset/c1.svg" alt="Java" className='w-[80px] mb-2' />
                                </div>
                                <div className="text--wrap font-bold text-xl">
                                    <span>{card.title}</span>
                                </div>
                            </div>
                            <div className="card-body font-thin mt-4">
                                <span>
                                    {card.text}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}
