import Title from "../../reUsable/Title";

const DiagramPlugin = () => {
    return (
        <><div className="circle absolute circleTwo rounded-full mt-[280px]"></div>
            <div className="container mx-auto mt-32">
                <div className="md:flex items-center gap-32 mx-4 lg:mx-0">
                    {/* INFO */}
                    <div className="text-white">
                        <Title title="Diagram plugin" />
                        <div className="mt-8">
                            <div className="mb-6">
                                <div className="flex items-center gap-4 mb-2">
                                    <div className="w-[16px] h-[16px] rounded-full bg-gradient-to-t from-[#2CB49F] to-[#642CB6]"></div>
                                    <p className="text-lg font-bold">Enhanced Understanding:</p>
                                </div>
                                <p className="ml-8">Visual representation of information helps students understand complex topics and see the bigger picture.</p>
                            </div>
                            <div className="mb-6">
                                <div className="flex items-center gap-4 mb-2">
                                    <div className="w-[16px] h-[16px] rounded-full bg-gradient-to-t from-[#2CB49F] to-[#642CB6]"></div>
                                    <p className="text-lg font-bold">Efficient Study:</p>
                                </div>
                                <p className="ml-8">Instead of manually creating mind maps, students can save time by letting the AI generate initial maps which they can then customize.</p>
                            </div>
                            <div className="mb-6">
                                <div className="flex items-center gap-4 mb-2">
                                    <div className="w-[16px] h-[16px] rounded-full bg-gradient-to-t from-[#2CB49F] to-[#642CB6]"></div>
                                    <p className="text-lg font-bold">Memory Retention:</p>
                                </div>
                                <p className="ml-8">Visual aids like mind maps and diagrams are known to improve memory retention, making it easier for students to recall information during exams.</p>
                            </div>
                        </div>
                    </div>
                    {/* IMAGE */}
                    <div>
                        <img className="h-[292] w-[400px] md:h-[400px] md:w-[570px] lg:h-[570px] lg:w-[680px]" src="https://i.ibb.co/g4yWkyZ/Visual-data-rafiki-1.png" alt="" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default DiagramPlugin;