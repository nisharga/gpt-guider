import AudioVideo from "./AudioVideo"
import ChatWithPdf from "./ChatWithPdf"
import DiagramPlugin from "./DiagramPlugin"
import DocumentAi from "./DocumentAi"
import Hero from "./Hero"
import PlugIn from "./PlugIn"
import Prof from "./Prof"

const HomePage = () => {
  return (
    <div>
      <Hero />
      <PlugIn />
      <Prof />
      <DocumentAi />
      <ChatWithPdf />
      <AudioVideo />
      <DiagramPlugin />
    </div>
  )
}

export default HomePage