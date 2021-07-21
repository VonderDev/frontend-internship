import { useEffect, useRef, useState } from "react";

const useSound = (url: string) => {
  const soundRef = useRef(url);
  const [isplay, setIsPlay] = useState<boolean>(false);
  const toggle = () => setIsPlay(!isplay);

  useEffect(() => {
    if (url) {
      soundRef.current = url;
    }
  }, [url]);

  const playSound = () => {
    new Audio(soundRef.current).play();
  };
  const pauseSound = () => {
    new Audio(soundRef.current).pause();
  };

  useEffect(()=>{
    isplay ? useSound(soundRef.current).playSound : useSound(soundRef.current).pauseSound;
    },[isplay])

  return { playSound, pauseSound,isplay,setIsPlay, toggle, soundUrl: soundRef.current };
};

export default useSound;
// import { useEffect, useRef, useState } from "react";
// const useSound = (url: string) => {
//     const [audio] = useState(new Audio(url));
//     const [playing, setPlaying] = useState(false);
  
//     const toggle = () => setPlaying(!playing);
  
//     useEffect(() => {
//         playing ? audio.play() : audio.pause();
//         console.log(playing)
//       },
//       [playing]
//     );
  
//     useEffect(() => {
//       audio.addEventListener('ended', () => setPlaying(false));
//       return () => {
//         audio.removeEventListener('ended', () => setPlaying(false));
//       };
//     }, []);
  
//     return [playing, toggle];
//   };
//   export default useSound;