import React from "react";


export default function Contactus() {
    return (
        <div class="bg-blue-950">
            <div class="flex justify-center items-center h-screen p-4" id="root">
                <div class="bg-white rounded-lg shadow-lg flex flex-col md:flex-row overflow-hidden">
                    <div class="relative">
                        <img alt="Woman holding a phone" class="object-cover h-full w-full md:w-96" src="https://storage.googleapis.com/a1aa/image/vRkzLgec0Gx6YqCfTqnfNh9LbzXy3wuOJAIjwXqIiGe9CegeE.jpg" />
                        <div class="absolute inset-0 bg-blue-900 opacity-50"></div>
                    </div>
                    <div class="p-8 flex-1">
                        <h1 class="text-4xl font-bold text-black">
                            Don't Be Shy.
                            <br />
                            <span class="text-lime-500">Talk To Us.</span>
                        </h1>
                        <form class="mt-4 space-y-4">
                            <input class="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-lime-500" placeholder="Enter Your Name" type="text" />
                            <input class="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-lime-500" placeholder="Enter Your Email" type="email" />
                            <input class="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-lime-500" placeholder="Enter Your Phone Number" type="tel" />
                            <textarea class="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-lime-500" placeholder="Enter Your Project Brief"></textarea>
                            <button class="w-full p-3 bg-lime-500 text-black font-bold rounded hover:bg-lime-600 transition duration-300" type="submit">SUBMIT</button>
                        </form>
                    </div>
                    <div class="bg-red-600 text-white p-8 flex-1">
                        <h2 class="text-xl font-bold">DOTNET CREATIVES INC</h2>
                        <div class="mt-4 space-y-4">
                            <p class="flex items-center"><i class="fas fa-phone-alt mr-2"></i> +1 (855) 216 4439 (USA)</p>
                            <p class="flex items-center"><i class="fas fa-envelope mr-2"></i> info@creativedesigncrew.com</p>
                            <p class="flex items-center"><i class="fas fa-comments mr-2"></i> Live Chat</p>
                            <p class="flex items-center"><i class="fas fa-map-marker-alt mr-2"></i> 113 West G St #5060 San Diego, CA 92101, United States</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}