import React from "react";
import ReactDOM from 'react-dom';

export default function Reviews() {


    const reviews = [
        {
            title: "EPIC HOCKEY",
            date: "04-01-2022",
            rating: 4.5,
            verified: true,
            description: "Creative Design Crew has been phenomenal for us. We have done several projects with them, thoroughly professional team. Really love their designs and animations. Keep up the good work CDC.",
            image: "https://creativedesigncrew.com/assets/images/webp/testi-17.webp",
        },
        {
            title: "VERSATAO",
            date: "10-01-2022",
            rating: 5,
            verified: true,
            description: "I just Love my new Logo. Designers are extremely talented and creative. The customer service was impeccable. Really impressive work.",
            image: "https://creativedesigncrew.com/assets/images/webp/testi-6.webp",
        },
        {
            title: "HUSKIES",
            date: "31-01-2022",
            rating: 4,
            verified: true,
            description: "Building brand identity is the toughest one, but kudos to the Creative Design Crew. They have done a fabulous job.",
            image: "https://creativedesigncrew.com/assets/images/webp/testi-7.webp",
        },
        {
            title: "MPI RISK",
            date: "04-01-2022",
            rating: 4.5,
            verified: true,
            description: "Alex helped me come up with the perfect logo. He was fast, friendly and very responsive. I highly recommend.",
            image: "https://creativedesigncrew.com/assets/images/webp/testi-8.webp",
        },
        {
            title: "FREDDIE'S",
            date: "10-01-2022",
            rating: 5,
            verified: true,
            description: "CDC did an excellent job on my logos! Great job! Reasonably rated. Thank you so much Creative Design Crew!",
            image: "https://creativedesigncrew.com/assets/images/webp/testi-9.webp",
        },
        {
            title: "NEPLES PROPERTY PREVIEW",
            date: "31-01-2022",
            rating: 4,
            verified: true,
            description: "The company did an amazing job turning around my logo project within 48 hours and did lots of follow up! Customer service is one of their great aspects.",
            image: "https://creativedesigncrew.com/assets/images/webp/testi-10.webp",
        },
        {
            title: "GLOBAL TECH",
            date: "01-02-2022",
            rating: 4,
            verified: true,
            description: "The best people I have worked with. Professional, Creative, and Supportive people work here. Highly recommended.",
            image: "https://creativedesigncrew.com/assets/images/webp/testi-1.webp",
        },
        {
            title: "SIMPLE TREASURES",
            date: "09-02-2022",
            rating: 4.5,
            verified: true,
            description: "I was looking for ways to develop my brand and improve my ideas for new products and this company. The staff was friendly and quick to respond to all my needs. I definitely recommend Creative Design Crew!",
            image: "https://creativedesigncrew.com/assets/images/webp/testi-2.webp",
        },
        {
            title: "LUNCH RATE",
            date: "20-02-2022",
            rating: 4,
            verified: true,
            description: "The team at Creative Design Crew took my idea and turned it into a polished and professional logo that's ideal for both print and digital use. Consider me a very satisfied customer.",
            image: "https://creativedesigncrew.com/assets/images/webp/testi-3.webp",
        },
        {
            title: "Mountain Ridge",
            date: "22-02-2022",
            rating: 4.5,
            verified: true,
            description: "From logo designing to corporate branding, Creative Design Crew is highly professional and skilled. They surpassed my expectations with their meticulous stationery designs. Highly",
            image: "https://creativedesigncrew.com/assets/images/webp/testi-4.webp",
        },
        {
            title: "Julian Tucker",
            date: "24-06-2021",
            rating: 4,
            verified: true,
            description: "Creative Design Crew offer high-quality services at affordable prices. They provide unlimited revisions and provide multiple options for designing websites and logo designing.",
            image: "https://creativedesigncrew.com/assets/images/webp/testi-5.webp",
        },
        {
            title: "Game Stamps",
            date: "21-06-2021",
            rating: 4,
            verified: true,
            description: "What an excellent experience so far. Their team of designers are terrific. They were able to create a one of a kind logo for a new brand that I will be launching in the near future. Communication is excellent, I love it.",
            image: "https://creativedesigncrew.com/assets/images/webp/testi-6.webp",
        },
        {
            title: "DBoylan",
            date: "16-05-2021",
            rating: 4,
            verified: true,
            description: "I worked with Creative Design Crew for my brand logo. They designed a stunning logo that I used on my website, social media posts, and business stationery. The logo is very scalable. It is doing a great job at grabbing the audience's attention.",
            image: "https://creativedesigncrew.com/assets/images/webp/testi-11.webp",
        },
        {
            title: "Krystal Vision",
            date: "13-03-2021",
            rating: 4,
            verified: true,
            description: "Creative Design Crew understands our business needs and how digital marketing efforts meet our goal to be more visible. They translate the ever-changing demands from Google and Social Media platforms to keep us ahead of the curve. Keep up the good work CDC !",
            image: "https://creativedesigncrew.com/assets/images/webp/testi-12.webp",
        },
        {
            title: "Horizon Cleaning inc",
            date: "10-02-2021",
            rating: 4,
            verified: true,
            description: "Outstanding work. I appreciated the updated website design & functionality! I like it. I hire them to do my website designing & development. I am so thankful for their professional service.",
            image: "https://creativedesigncrew.com/assets/images/webp/testi-13.webp",
        },
        {
            title: "Faryn Construction",
            date: "07-01-2021",
            rating: 4,
            verified: true,
            description: "An overall good experience working with them. Delivery was on time and high quality content are their plus points for sure!",
            image: "https://creativedesigncrew.com/assets/images/webp/testi-14.webp",
        },
        {
            title: "",
            date: "12-12-2021",
            rating: 4,
            verified: true,
            description: "The Video Animations team took our storyboard and brought it to life in short order. Their responsiveness was fantastic during iterations and their price made it so much affordable. Thank you Creative Design Crew.",
            image: "https://creativedesigncrew.com/assets/images/webp/testi-15.webp",
        },
        {
            title: "Ravelo",
            date: "23-11-2021",
            rating: 4,
            verified: true,
            description: "My overall experience with Creative Design Crew is great. Because I get cool Explainer videos in a week for my business. Which is great to generate leads and sales.",
            image: "https://creativedesigncrew.com/assets/images/webp/testi-16.webp",
        },
        {
            title: "Orange Flame",
            date: "22-10-2021",
            rating: 4.4,
            verified: true,
            description: "The 90 sec Explainer Video by Creative Design Crew Team have a Massive Impact on my visitors and increased my branding power & enhanced my brand image threefold. I am so happy and greatly satisfied of a job well done",
            image: "https://creativedesigncrew.com/assets/images/webp/testi-23.webp",
        },
        {
            title: "Sanatos",
            date: "21-09-2021",
            rating: 4,
            verified: true,
            description: "Their team outlined a clear path of steps to ranking our site online and in the top positions on both google organic search results and google maps. They have our full trust and confidence with regards to their services online! Thank You Creative Design Crew for Great service.",
            image: "https://creativedesigncrew.com/assets/images/webp/testi-24.webp",
        },
        {
            title: "Cabin in the Forest",
            date: "19-08-2021",
            rating: 4.5,
            verified: true,
            description: "Love how the design of my E-commerce website turned out. This has been an amazing group to work with, they are very understanding and respectful.",
            image: "https://creativedesigncrew.com/assets/images/webp/testi-25.webp",
        },
        {
            title: "Darren Turner",
            date: "18-07-2021",
            rating: 3.9,
            verified: true,
            description: "I love Creative Design Crew. I needed a logo for my non-profit organization. After submitting the creative brief, I received so many different types of logos. The creativity and range in styles were so broad, it was hard to choose a winner.",
            image: "https://creativedesigncrew.com/assets/images/webp/testi-26.webp",
        },
        {
            title: "Oakworth",
            date: "27-06-2021",
            rating: 4.2,
            verified: true,
            description: "Fast excellent customer services. These guys are attentive to your every need when it counts. Won't hesitate to do future business with Creative Design Crew. Thanks Guys for helping me with an AWESOME LOGO for my startup",
            image: "https://creativedesigncrew.com/assets/images/webp/testi-27.webp",
        },
        {
            title: "Codeworx",
            date: "17-05-2022",
            rating: 4.4,
            verified: true,
            description: "My business was going down at a fast rate. And to regain my clients I contacted Creative Design Crew’s digital branding services, and I was amazed at the fantastic results they produced. All thanks to the Creative Design Crew and their professional services. Hats off to the team.",
            image: "https://creativedesigncrew.com/assets/images/webp/testi-28.webp",
        },

    ];


    const ReviewCard = ({ review }) => (
        <div className="border p-3 rounded-lg shadow-md flex flex-col items-center bg-white max-w-xs">
            <img src={review.image} alt={review.title} className="w-16 h-16 mb-3 rounded-full" />
            <div className="text-center">
                <h2 className="text-red-600 font-semibold text-sm">{review.title}</h2>
                <p className="text-gray-600 text-xs">{review.date}</p>
                <div className="flex items-center justify-center mt-1">
                    <div className="flex text-yellow-500">
                        {Array.from({ length: 5 }, (_, i) => (
                            <i key={i} className={`fas fa-star ${i < review.rating ? '' : 'text-gray-300'}`}></i>
                        ))}
                    </div>
                    <span className="ml-1 text-xs">{review.rating}/5</span>
                    {review.verified && <i className="fas fa-check-circle text-green-500 ml-1 text-xs"></i>}
                </div>
                <p className="text-xs mt-2">{review.description}</p>
            </div>
        </div>
    );
    return (
        <div className="p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {reviews.map((review, index) => (
                <ReviewCard key={index} review={review} />
            ))}
        </div>
    )
}