import { createContext, useContext, useState } from "react";

interface PixiProps {
    children: any
}

const getDevicePixelRatio = (device:number) => {
  if (window) {
    const dpi = window.devicePixelRatio;
    if (dpi > 0) return dpi;
  }
  return device;
};

const PixiContext = createContext<any>(null);

const PixiProvider = ({ children }:PixiProps ) => {
  const [transparent,setTransparent] = useState<boolean>(true)
  const [backgroundColor,setBackgroundColor] = useState<number | null>(null)
  const [antialias,setAntialias] = useState<boolean>(false)
  const [autoDensity,setAutoDensity] = useState<boolean>(false)
  const [sharedTicker,setSharedTicker] = useState<boolean>(true)
  const [sharedLoader,setSharedLoader] = useState<boolean>(true)
  const [resolution, setResolution] = useState<number>(getDevicePixelRatio(1));
  return (
    <PixiContext.Provider value={{ 
      transparent,
      antialias,
      autoDensity,
      sharedTicker,
      sharedLoader,
      backgroundColor, 
      resolution,
      setResolution }}>
      {children}
    </PixiContext.Provider>
  );
};

export { PixiContext, PixiProvider };