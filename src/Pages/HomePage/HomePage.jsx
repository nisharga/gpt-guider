import AudioVideo from "./AudioVideo"
import ChatWithPdf from "./ChatWithPdf"
import DiagramPlugin from "./DiagramPlugin"
import DocumentAi from "./DocumentAi"
import Featurs from "./Featurs"
import Generator from "./Generator"
import Hero from "./Hero"
import PlugIn from "./PlugIn"
import Prof from "./Prof"
import Transcription from "./Transcription"

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Featurs />
      <PlugIn />
      <Prof />
      <DocumentAi />
      <ChatWithPdf />
      <AudioVideo />
      <DiagramPlugin />
      <Transcription />
      <Generator />
    </div>
  )
}

export default HomePage