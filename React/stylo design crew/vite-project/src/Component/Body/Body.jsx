import React from "react";
import Navbar from "../Navbar.jsx/Navbar";


export default function Body() {
    return (
        <div class="bg-gradient-to-b from-blue-900 to-blue-800 text-white">
            <div class="flex justify-center items-center min-h-screen" id="root">
                <div class="flex flex-col md:flex-row items-center p-8">
                    <div class="text-left md:w-1/2 p-4">
                        <h1 class="text-4xl font-bold">
                            Get Your
                            <span class="text-white">
                                Custom
                            </span>
                        </h1>
                        <h2 class="text-4xl font-bold text-yellow-400">
                            Logo Designs In
                        </h2>
                        <p class="mt-4 text-lg">
                            Design custom logos for your brand to give it a premium look!
                        </p>
                        <p class="mt-2 text-lg font-bold">
                            Fill The Form To
                            <span class="text-yellow-400">
                                Avail 70% Off
                            </span>
                        </p>
                        <div class="mt-4 flex">
                            <input class="p-2 rounded-l-md text-black w-64" placeholder="Enter Your Name" type="text" />
                            <button class="bg-yellow-400 text-blue-900 font-bold p-2 rounded-r-md">
                                START PROJECT
                            </button>
                        </div>
                        <div class="mt-6 flex space-x-4">
                            <img alt="Trustpilot logo with 5 stars" height="50"
                                src="https://storage.googleapis.com/a1aa/image/wSedU3OTbXznZymrUkCAEjlaSuBPlYfm0gjIOpp46QYofimnA.jpg"
                                width="100" />
                            <img alt="Clutch logo" height="50"
                                src="https://storage.googleapis.com/a1aa/image/L7IzoZjrje08QaDAj22HUPA4d2vyFeffHlNGmqLUDYye9LaeE.jpg"
                                width="100" />
                            <img alt="Google Partner logo" height="50"
                                src="https://storage.googleapis.com/a1aa/image/BvXecwPM4VRbbaB4QXKKbY199oy89itI5gKQ2UEAVd92vo5JA.jpg"
                                width="100" />
                        </div>
                    </div>
                    <div class="relative md:w-1/6 flex justify-center items-center p-4">
                        <div
                            class="absolute bg-yellow-400 text-blue-900 font-bold text-2xl rounded-full w-16 h-16 flex items-center justify-center">
                            $35
                        </div>
                    </div>
                    <div class="grid grid-cols-2 gap-4 md:w-1/3 p-4">
                        <img alt="Logo design for Sobersandiego.com" class="bg-white p-4" height="150"
                            src="https://storage.googleapis.com/a1aa/image/Ak3phncQUhIDFtbQt0eQaThBlqJoxavvCtam1iCaw0xzvo5JA.jpg"
                            width="150" />
                        <img alt="Logo design for Easter Encounter" class="bg-green-900 p-4" height="150"
                            src="https://storage.googleapis.com/a1aa/image/zf3f7krFXecB4oBe4pT9e8Bdx8tFH7t7ZVsa2yfKARwr8X08E.jpg"
                            width="150" />
                        <img alt="Logo design for Gorillas Gaming" class="bg-red-600 p-4" height="150"
                            src="https://storage.googleapis.com/a1aa/image/WNB2oFnGWC6HMFgS9d4IQQxcYKA04c4NmO5ceG6CIba4vo5JA.jpg"
                            width="150" />
                        <img alt="Logo design for The Real Estate Rejuvenators" class="bg-white p-4" height="150"
                            src="https://storage.googleapis.com/a1aa/image/NAJyDGDy6U5gIt7OfNrvZov2QwNalDH7n656wszTG3d2vo5JA.jpg"
                            width="150" />
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
                            <button
                                className="bg-white text-[#4a2c2a] border-none rounded-lg py-3 px-6 text-lg cursor-pointer mx-2 transition-all duration-300 transform hover:bg-gray-200 hover:scale-105 focus:outline-none"
                                id="button-call-us"
                            >
                                Call Us: +1 (510) 954 0786
                            </button>
                        </a>
                        <button
                            className="bg-white text-[#4a2c2a] border-none rounded-lg py-3 px-6 text-lg cursor-pointer mx-2 transition-all duration-300 transform hover:bg-gray-200 hover:scale-105 focus:outline-none"
                            id="button-start-chat"
                        >
                            Start Live Chat
                        </button>
                    </div>

                    <p className="text-sm mt-5" id="footer-additional-info">
                        Our support agents are here to assist you. Explore our design options and get started today!
                    </p>

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

            {/* Special offer as an image with fixed position centered */}
            {/* <div className="special-offer fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 max-w-[200px] w-full">
                <img alt="Special Offer" src="https://via.placeholder.com/300x100?text=Special+Offer" />
            </div> */}
        </div>

        </div>









    );
};