import { createContext, useContext, useState } from "react";

const initialContext = {
  transparent: true,
  backgroundColor: null,
  antialias: false,
  autoDensity: false,
  sharedTicker: true,
  sharedLoader: true,
};
interface PixiProps {
    children: any
}
interface RatioProps {
    device: number
}

const getDevicePixelRatio = ({device}:RatioProps) => {
  if (window) {
    const dpi = window.devicePixelRatio;
    if (dpi > 0) return dpi;
  }
  return device;
};

const PixiContext = createContext(initialContext);

const PixiProvider = ({ children }:PixiProps ) => {
  const pixiContext = useContext(PixiContext);
//   const [resolution, setResolution] = useState<any>(getDevicePixelRatio({device: 1}));
  return (
    <PixiContext.Provider value={{ ...pixiContext }}>
      {children}
    </PixiContext.Provider>
  );
};

export { PixiContext, PixiProvider };