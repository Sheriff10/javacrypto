import React from 'react'
import { FaTelegram, FaTwitter } from 'react-icons/fa'

export default function Footer() {
    return (
        <div className="wrap bg-sec">
            <div className="bg-con bg-black">
                <div className="container mx-auto p-3">
                    <div className="flex flex-wrap gap-1 justify-between items-center py-3">
                        <div className="icon-wrap w-full lg:w-auto">
                            <div className="flex items-center justify-center lg:justify-normal">
                                <img src="/asset/logo.png" alt="HEDEX" className='w-[50px]' />
                                <span className='text-blue-400 text-lg font-extrabold'>JAVA.</span> <span className='text-gray-300 ml-3'> All Copyright reserved. © 2024</span>
                            </div>
                        </div>
                        <div className="socials flex  gap-3 w-full lg:w-auto justify-center text-2xl text-white">
                            <a href="https://t.me/+hzRXIh3QHTU4NmRk" target={"_blank"} rel="noreferrer">
                                <FaTelegram />
                            </a>
                            <a href="https://x.com/java_on_sol?s=21&t=mZeiR7-jY4k3LERm1awlig" target={"_blank"} rel="noreferrer">
                                <FaTwitter />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
