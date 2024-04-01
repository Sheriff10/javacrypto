import React from 'react'
import Container from './Container'

export default function Roadmap() {
    const roadmapArr = [
        {
            title: "Research and Development",
            list: [
                { listTitle: "Market Understudy", listText: "Explore way plsskk" },
                { listTitle: "Technology Innovation", listText: "Explore way plsskk" },
                { listTitle: "Whitepaper Disclosure", listText: "Explore way plsskk" }
            ]
        },
        {
            title: "Product Release",
            list: [
                { listTitle: "Beta Testing", listText: "Test both items on a limited number of consumers to get their feedback and make the required adjustments. (Analysis and Trading setup is already in progress)" },
                { listTitle: "Back Testing", listText: "After beta testing, take into account user comments to finalize the products and reinventing Ai proficiency" },
                { listTitle: "Official Product Release", listText: "Traders Launch Pro with JAVA and Market Analyzer module goes Live" }
            ]
        },
        {
            title: "Pos-Launch Activities",
            list: [
                { listTitle: "Customer Service", listText: "To support consumers and get feedback, set up a strong customer service system." },
                { listTitle: "$JAVA Staking", listText: "Promote long-term holding and involvement in the network to increase the stability and value of the token." },
                { listTitle: "Marketing Campaigns", listText: "Implement partnership of top networks (already in works) and  ongoing marketing efforts to attract new users and retain existing ones." }
            ]
        },
        {
            title: "Growth and Extension",
            list: [
                { listTitle: "Feature Update", listText: "Consistently add new functionality to our AI bots based on input from users and developments in technology." },
                { listTitle: "Market Expansion", listText: "Market Expansion: Explore ways to broaden your reach to social media sites other than 'X,' with 'TikTok, Meta, & Instagram' as your top priorities." },
                { listTitle: "Strategic Alliance", listText: "To increase reach, establish alliances with influential people and businesses." }
            ]
        }

    ]
    return (
        <div className="wrap">
            <Container>
                <div className="heading">
                    <span className='bg-black p-2 px-3 rounded-3xl bg-opacity-30 text-sm font-bold text-grad border border-blue-500'>Roadmap</span>
                    <div className="text-wrap my-3 text-3xl lg:text-5xl font-extrabold">
                        <span>Roadmap Phases</span>
                    </div>
                </div>

                {roadmapArr.map((roadmap, index) => (
                    <div className="wrap bg-grad text-white rounded-xl p-10 my-3" key={index}>
                        <div className="grid lg:grid-cols-4 justify-between items-center gap-5 ">
                            <div className="text-wrap leading-8 col-span-2">
                                <span className='text-4xl lg:text-5xl font-bold'>Phase {index + 1}</span> <br />
                                <span className='text-lg'>{roadmap.title}</span>
                            </div>

                            <div className="list-wrap col-span-2">
                                <ul>
                                    {roadmap.list.map((list, index) => (
                                        <li className='mb-3' key={index}><span className='font-bold'>{list.listTitle}</span> <br /> <span className="font-thin text-black text-sm">{list.listText}</span>.</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </Container>
        </div>
    )
}
