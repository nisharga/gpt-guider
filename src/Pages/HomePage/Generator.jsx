import Title from "../../reUsable/Title";

const Generator = () => {
    return (
        <>
            <div className="circle absolute circleTwo mt-[180px] rounded-full"></div>
            <div className="container mx-auto mt-32">
                <div className="md:flex items-center gap-16 mx-4 lg:mx-0">
                    {/* INFO */}
                    <div className="text-white">
                        <Title title="Questions & Answers Generator" />
                        <div className="mt-8">
                            <div className="flex gap-4 mb-4">
                                <div>
                                    <div className="w-[16px] h-[16px] rounded-full bg-gradient-to-t from-[#2CB49F] to-[#642CB6]"></div>
                                </div>
                                <p className="text-[18px]">generates diverse test questions for self-assessment purposes. These questions cover various topics, ensuring comprehensive understanding and preparation for exams or assessments.:</p>
                            </div>
                        </div>
                    </div>
                    {/* IMAGE */}
                    <div>
                        <img className="h-[370px] w-[370px] md:w-[700px] lg:h-[500px] lg:w-[700px]" src="https://i.ibb.co/HCLqBHG/Exams-bro-1.png" alt="" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Generator;