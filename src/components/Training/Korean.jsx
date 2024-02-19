import React from 'react'
import img from "../../assets/images/training/Germany.png"
const Korean = () => {
    const topik1={
        1:"Able to carry out simple conversations related to familiar topics and daily life.",
        2:"Able to handle everyday situations in Korea and engage in simple conversations.",
    };
    const topik2={
        3:"Able to understand and express oneself on familiar topics using basic vocabulary and grammar.",
        4:"Able to converse and express oneself on a wide range of topics, understand news articles and editorials, and write essays.",
        5:"Able to understand and discuss complex issues, including abstract topics, and write well-structured essays. ",
        6:"Able to comprehend and discuss various materials, including academic and specialized content, and write sophisticated essays.",
    };
    
    
    return (
        <>
            <div className="xl:h-[40vh] sm:h-[20vh] h-[25vh] relative overflow-hidden">
                <div className='overflow-hidden w-full h-full animate-zoom'>
                    <img className='w-full h-full object-cover object-center brightness-75 ' src={img} />
                </div>
                <div className="absolute flex top-0 bottom-0 right-0 left-0 wow animate__animated animate__zoomIn">
                    <h2 className="m-auto md:text-5xl text-3xl uppercase text-white font-bold" >Korean Language</h2>
                </div>
            </div>
            <div className='px-20 py-10'>
                <p className="text-justify mt-5 font-semibold text-lg text-gray-500">
                    "Education is considered as key to success". With this being said there are many reasons for students to choose Japan as a country for higher studies. Out of many students some are attracted by Japan's high educational standards, while for others the center of attraction is Japan's rich cultural heritages. According to the annual data, in approx. around 5 million students study abroad and this numbers has been seen in increasing trend. With over 150,000 international students, Japan is one of the most popular destinations for international students. From the research, the Japanese high school students rank number one in the word of Math and number 2 in scientific literacy. Japan has the highest numbers of Nobel prize winners of any Asian country. Japan has over 700 universities, with 10 ranked in the top 200 worldwide. Japan is one of the safest countries in the world. Violent crime is rare, with Japan ranking last in the number of victims of crime per capita. Japan regularly turns up on lists of the safest places to visit in the world. Japan also has one of the world's most advanced healthcare systems, reflected in this high life expectancy. Members of the National Health Insurance scheme pay only 30% of their healthcare costs, with a trip to the doctor or dentist often costing only a few hundred yen (few dollars).
                </p>
                <div className='my-20'>
                    <h2 className='text-2xl underline  font-semibold text-primary'>TOPIK I - Beginner Levels </h2>
                    <div className='grid grid-cols-2 gap-10 text-center mt-5'>
                    {Object.keys(topik1).map((key) => (
                        
                        <div key={key} className=' mt-2 font-semibold text-lg text-gray-500 border border-primary transition-all ease-linear duration-500 group cursor-pointer hover:bg-primary hover:text-white py-10 px-5 rounded-xl'>
                            <h2 className='text-xl  font-semibold text-primary group-hover:text-white duration-500'>Level {key} </h2>
                            <p className='mt-2'>
                                {topik1[key]}
                            </p>
                        </div>
                    ))}
                        
                    </div>
                </div>
                <div className='my-20'>
                    <h2 className='text-2xl underline  font-semibold text-primary'>TOPIK II - Intermediate/Advanced Levels  </h2>
                    <div className='grid grid-cols-2 gap-10 text-center mt-5'>
                    {Object.keys(topik2).map((key) => (
                        
                        <div key={key} className=' mt-2 font-semibold text-lg text-gray-500 border border-primary transition-all ease-linear duration-500 group cursor-pointer hover:bg-primary hover:text-white py-10 px-5 rounded-xl'>
                            <h2 className='text-xl  font-semibold text-primary group-hover:text-white duration-500'>Level {key} </h2>
                            <p className='mt-2'>
                                {topik2[key]}
                            </p>
                        </div>
                    ))}
                        
                    </div>
                </div>

                {/* <div>
                    <h2 className='text-4xl  font-semibold text-primary'>SSW Preparation </h2>
                    <p className='text-justify mt-5 font-semibold text-lg text-gray-500'>
                        In order to obtain a Specified Skilled Worker (SSW) status of residence in Japan, individuals typically need to pass both a Japanese language test and a skills proficiency test.
                    </p>
                </div> */}
                
            </div>
        </>
    )
}

export default Korean