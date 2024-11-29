import React from "react";

export default function Body() {
    return (
        <div className="bg-gradient-to-b from-blue-950 to-blue-700 text-white">
            <div className="flex justify-center items-center min-h-screen" id="root">
                <div className="flex flex-col md:flex-row items-center p-8">
                    <div className="text-left md:w-1/2 p-4">
                        <h1 className="text-5xl font-extrabold leading-tight">
                            Get Your
                            <span className="text-yellow-400"> Custom </span>
                         Logo Designs In
                        </h1>
                        <h2 className="text-4xl font-semibold text-yellow-400 mt-2">
                            A Premium Way
                        </h2>
                        <p className="mt-4 text-lg">
                            Design custom logos for your brand to give it a professional look and feel!
                        </p>
                        <p className="mt-2 text-lg font-bold">
                            Fill The Form To
                            <span className="text-yellow-400"> Avail 70% Off </span>
                        </p>
                        <div className="mt-6 flex">
                            <input
                                className="p-3 rounded-l-md text-black w-64 placeholder-gray-500"
                                placeholder="Enter Your Name"
                                type="text"
                            />
                            <button className="bg-yellow-400 text-blue-900 font-bold p-3 rounded-r-md transition-transform transform hover:scale-105">
                                START PROJECT
                            </button>
                        </div>
                        <div className="mt-16 flex space-x-4">
                            <img
                                alt="Trustpilot logo with 5 stars"
                                height="50"
                                src="https://creativedesigncrew.com/assets/logo-design/images/trust.png"
                                width="100%"
                            />
                            {/* <img
                                alt="Clutch logo"
                                height="50"
                                src="https://storage.googleapis.com/a1aa/image/L7IzoZjrje08QaDAj22HUPA4d2vyFeffHlNGmqLUDYye9LaeE.jpg"
                                width="100"
                            />
                            <img
                                alt="Google Partner logo"
                                height="50"
                                src="https://storage.googleapis.com/a1aa/image/BvXecwPM4VRbbaB4QXKKbY199oy89itI5gKQ2UEAVd92vo5JA.jpg"
                                width="100"
                            /> */}
                        </div>
                    </div>
                    <div className="relative md:w-1/6 flex justify-center items-center p-4">
                        <div className="absolute bg-yellow-400 text-blue-900 font-bold text-2xl rounded-full w-16 h-16 flex items-center justify-center">
                            $35
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 md:w-1/3 p-4">
                        <img
                            alt="Logo design for Sobersandiego.com"
                            className="bg-white p-4 rounded-lg shadow-lg"
                            height="150"
                            src="https://storage.googleapis.com/a1aa/image/Ak3phncQUhIDFtbQt0eQaThBlqJoxavvCtam1iCaw0xzvo5JA.jpg"
                            width="150"
                        />
                        <img
                            alt="Logo design for Easter Encounter"
                            className="bg-green-900 p-4 rounded-lg shadow-lg"
                            height="150"
                            src="https://storage.googleapis.com/a1aa/image/zf3f7krFXecB4oBe4pT9e8Bdx8tFH7t7ZVsa2yfKARwr8X08E.jpg"
                            width="150"
                        />
                        <img
                            alt="Logo design for Gorillas Gaming"
                            className="bg-red-600 p-4 rounded-lg shadow-lg"
                            height="150"
                            src="https://storage.googleapis.com/a1aa/image/WNB2oFnGWC6HMFgS9d4IQQxcYKA04c4NmO5ceG6CIba4vo5JA.jpg"
                            width="150"
                        />
                        <img
                            alt="Logo design for The Real Estate Rejuvenators"
                            className="bg-white p-4 rounded-lg shadow-lg"
                            height="150"
                            src="https://storage.googleapis.com/a1aa/image/NAJyDGDy6U5gIt7OfNrvZov2QwNalDH7n656wszTG3d2vo5JA.jpg"
                            width="150"
                        />
                    </div>
                </div>
            </div>

            <div className="m-0 p-0 font-sans bg-gray-100 text-gray-800 flex justify-center items-center min-h-screen">
                <div className="bg-[#4a2c2a] text-white p-8 rounded-lg shadow-lg max-w-4xl w-11/12 text-center relative">
                    <h1 className="text-4xl mb-5 leading-tight">Unlock Our Prime Design Package</h1>
                    <p className="text-lg mb-5 leading-relaxed">
                        Enhance your brand with our exclusive Prime Design Package. Contact us today to learn more about our offer!
                    </p>
                    <div className="mb-5" id="cta-buttons-container">
                        <a href="tel:+15109540786">
                            <button className="bg-white text-[#4a2c2a] border-none rounded-lg py-3 px-6 text-lg cursor-pointer mx-2 transition-all duration-300 transform hover:bg-gray-200 hover:scale-105 focus:outline-none">
                                Call Us: +1 (510) 954 0786
                            </button>
                        </a>
                        <button className="bg-white text-[#4a2c2a] border-none rounded-lg py-3 px-6 text-lg cursor-pointer mx-2 transition-all duration-300 transform hover:bg-gray-200 hover:scale-105 focus:outline-none">
                            Start Live Chat
                        </button>
                    </div>
                    <p className="text-sm mt-5">Our support agents are here to assist you. Explore our design options and get started today!</p>
                    <div className="flex flex-wrap gap-5 justify-center mt-5" id="gallery-main">
                        <img
                            src="https://creativedesigncrew.com/assets/images/webp/cta-1.webp"
                            alt="Prime Design Showcase"
                            className="max-w-full h-auto rounded-lg shadow-md"
                        />
                        <img
                            src="https://creativedesigncrew.com/assets/images/webp/cta-center-img.webp"
                            alt="Design Center Visual"
                            className="max-w-full h-auto rounded-lg shadow-md"
                        />
                        <img
                            src="https://creativedesigncrew.com/assets/images/webp/cta-2.webp"
                            alt="Support Services"
                            className="max-w-full h-auto rounded-lg shadow-md"
                        />
                    </div>
                </div>
            </div>

            <div className="banner flex items-center justify-between bg-[#0a2a4a] p-4 rounded-lg shadow-md w-full relative">
                <div className="left-section flex items-center">
                    <img
                        alt="Design samples on the left"
                        className="mr-2 rounded-md"
                        height="60"
                        src="https://creativedesigncrew.com/assets/images/webp/cta-1.webp"
                        width="60"
                    />
                    <div>
                        <h1 className="text-white text-lg font-bold m-0">Avail Creative Design</h1>
                        <h2 className="text-[#c6c6c6] text-sm mt-1">Packages At</h2>
                    </div>
                </div>
                <div className="right-section flex items-center">
                    <div className="contact-info flex items-center justify-between ml-4">
                        <img
                            alt="Special Offer"
                            src="https://creativedesigncrew.com/assets/images/webp/cta-center-img.webp"
                            className="w-24 h-24"
                        />
                        <div className="text-white text-sm mx-2">Get In Touch With Our Support Agent Or</div>
                        <button className="bg-white text-[#0a2a4a] border-2 border-[#0a2a4a] rounded-full py-2 px-4 text-sm cursor-pointer mx-1 hover:bg-[#0a2a4a] hover:text-white transition-colors">
                            +1 (855) 857 5569
                        </button>
                        <button className="bg-white text-[#0a2a4a] border-2 border-[#0a2a4a] rounded-full py-2 px-4 text-sm cursor-pointer mx-1 hover:bg-[#0a2a4a] hover:text-white transition-colors">
                            Live Chat
                        </button>
                    </div>
                    <img
                        alt="Design samples on the right"
                        className="mr-2 rounded-md"
                        height="60"
                        src="https://creativedesigncrew.com/assets/images/webp/cta-2.webp"
                        width="60"
                    />
                </div>
            </div>
        </div>
    );
}
