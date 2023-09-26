import Title from "../../reUsable/Title";

const Prof = () => {
    return (
        <div className="container mx-auto mt-16">
            <div className="md:flex items-center gap-32 mx-4 md:mx-0">
                {/* INFO */}
                <div className="text-white">
                    <Title title="GPT Prof" />
                    <div className="mt-8">
                        <div className="mb-6">
                            <div className="flex items-center gap-4 mb-2">
                                <div className="w-[16px] h-[16px] rounded-full bg-gradient-to-t from-[#2CB49F] to-[#642CB6]"></div>
                                <p className="text-lg font-bold">Real Time, Interactive Conversations:</p>
                            </div>
                            <p className="ml-8">Experience a seamless and dynamic learning journey through real-time voice conversations with Chat GPT. It's like having a personal tutor at your fingertips.</p>
                        </div>
                        <div className="mb-6">
                            <div className="flex items-center gap-4 mb-2">
                                <div className="w-[16px] h-[16px] rounded-full bg-gradient-to-t from-[#2CB49F] to-[#642CB6]"></div>
                                <p className="text-lg font-bold">Real Time, Interactive Conversations:</p>
                            </div>
                            <p className="ml-8">Experience a seamless and dynamic learning journey through real-time voice conversations with Chat GPT. It's like having a personal tutor at your fingertips.</p>
                        </div>
                    </div>
                </div>
                {/* IMAGE */}
                <div>
                    <img className="h-[292] w-[400px] md:h-[392px] md:w-[580px]" src="https://i.ibb.co/ph3xX4X/Site-Stats-pana-1-1.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Prof;