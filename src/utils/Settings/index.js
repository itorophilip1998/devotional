import { useSelector } from "react-redux";

export const Settings = () => {
    const { rate, volume, voice } = useSelector((state) => state.data.speech);
    var msg = new SpeechSynthesisUtterance()
    var voices = window.speechSynthesis.getVoices()
    msg.voice = voices[voice] //[6]
    msg.volume = volume // From 0 to 1
    msg.rate = rate // From 0.1 to 10
    msg.pitch = 0 // From 0 to 2
    msg.lang = 'en-US'
    msg.text = "Hello Hi"
  return  speechSynthesis.speak(msg)
}
