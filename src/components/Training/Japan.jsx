import React from 'react'
import img from "../../assets/images/training/Japan.webp"
const Japan = () => {
    const data={
        N5:"Basic understanding of Japanese, able to read and understand basic expressions and sentences written in hiragana, katakana, and basic kanji.",
        N4:"Able to understand and use basic expressions and phrases. Can understand sentences and frequently used expressions related to areas of most immediate relevance.",
        N3:"Can understand Japanese used in everyday situations to a certain degree. Can understand the main points of clear standard input on familiar matters.",
        N2:"Can understand Japanese used in everyday situations and in a variety of circumstances. Can understand the main ideas of complex text on both concrete and abstract topics.",
        N1:"Can understand a wide range of Japanese and recognize implicit meaning. Can express ideas fluently and spontaneously, and engage in discussions with native speakers without much difficulty.",
    };
    
    return (
        <>
            <div className="xl:h-[40vh] sm:h-[20vh] h-[25vh] relative overflow-hidden">
                <div className='overflow-hidden w-full h-full animate-zoom'>
                    <img className='w-full h-full object-cover object-center brightness-75 ' src={img} />
                </div>
                <div className="absolute flex top-0 bottom-0 right-0 left-0 wow animate__animated animate__zoomIn">
                    <h2 className="m-auto md:text-5xl text-3xl uppercase text-white font-bold" >Japanese Language</h2>
                </div>
            </div>
            <div className='px-20 py-10'>
                <p className="text-justify mt-5 font-semibold text-lg text-gray-500">
                    "Education is considered as key to success". With this being said there are many reasons for students to choose Japan as a country for higher studies. Out of many students some are attracted by Japan's high educational standards, while for others the center of attraction is Japan's rich cultural heritages. According to the annual data, in approx. around 5 million students study abroad and this numbers has been seen in increasing trend. With over 150,000 international students, Japan is one of the most popular destinations for international students. From the research, the Japanese high school students rank number one in the word of Math and number 2 in scientific literacy. Japan has the highest numbers of Nobel prize winners of any Asian country. Japan has over 700 universities, with 10 ranked in the top 200 worldwide. Japan is one of the safest countries in the world. Violent crime is rare, with Japan ranking last in the number of victims of crime per capita. Japan regularly turns up on lists of the safest places to visit in the world. Japan also has one of the world's most advanced healthcare systems, reflected in this high life expectancy. Members of the National Health Insurance scheme pay only 30% of their healthcare costs, with a trip to the doctor or dentist often costing only a few hundred yen (few dollars).
                </p>
                <div className='my-20'>
                    <div className='grid grid-cols-2 gap-10 text-center'>
                    {Object.keys(data).map((key) => (
                        
                        <div key={key} className=' mt-2 font-semibold text-lg text-gray-500 border border-primary transition-all ease-linear duration-500 group cursor-pointer hover:bg-primary hover:text-white py-10 px-5 rounded-xl'>
                            <h2 className='text-xl  font-semibold text-primary group-hover:text-white duration-500'>{key} </h2>
                            <p className='mt-2'>
                                {data[key]}
                            </p>
                        </div>
                    ))}
                        
                    </div>
                </div>

                <div>
                    <h2 className='text-4xl  font-semibold text-primary'>SSW Preparation </h2>
                    <p className='text-justify mt-5 font-semibold text-lg text-gray-500'>
                        In order to obtain a Specified Skilled Worker (SSW) status of residence in Japan, individuals typically need to pass both a Japanese language test and a skills proficiency test.
                    </p>
                </div>
                
            </div>
        </>
    )
}

export default Japan