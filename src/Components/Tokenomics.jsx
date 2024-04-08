import React from 'react'
import Container from './Container'

export default function Tokenomics() {
    const textFunc = (heading, text) => ({ heading, text })

    const textArr = [
        textFunc('Ticker', '$JAVA'),
        textFunc('Total Supply', '100,000,000 $JAVA'),
        textFunc('Transaction Tax', '0%'),
        textFunc('Liquidity', '80% of the total supply'),
        textFunc('Marketing/CEX', ' 20% of the total supply'),
    ]
    return (
        <div className="wrap pb-16">
            <Container>
                <div className="wrap bg-blue-400 bg-opacity-20 py-16 rounded-2xl">
                    <div className="heading text-center">
                        <span className='bg-black p-2 px-3 rounded-3xl bg-opacity-30 text-sm font-bold text-grad border border-blue-500'>$Java</span>
                        <div className="text-wrap my-3 text-2xl lg:text-4xl font-extrabold">
                            <span>Tokenomics Of Java</span>
                        </div>
                        <span className='text-sm'>
                            $Java's tokenomics promote long-term value and participation, fostering growth.
                        </span>
                    </div>

                    <div className="text-wrap text-lg leading-10 mt-10">
                        {textArr.map((i, index) => (
                            <div className="text-wrap flex justify-center gap-3" key={index}>
                                <span className='font-bold'>{i.heading}</span>
                                <span className='font-thin'>{i.text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </div>
    )
}
