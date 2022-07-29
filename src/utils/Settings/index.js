export const Settings = ({ rate, volume, voice, text }) => {
    try {
        const speaking = window.speechSynthesis.speaking

        var msg = new SpeechSynthesisUtterance()
        var voices = window.speechSynthesis.getVoices()
        msg.voice = voices[voice] //[6]
        msg.volume = volume // From 0 to 1
        msg.rate = 1 // From 0.1 to 10
        msg.pitch = 0 // From 0 to 2
        msg.lang = 'en-US'
        msg.text = text
        if (!speaking) {
            speechSynthesis.speak(msg)

        }


    } catch (error) {
        console.log(error)
    }
}

