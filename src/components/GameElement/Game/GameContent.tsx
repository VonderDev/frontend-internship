import * as PIXI from 'pixi.js'
import ground from '../Assets/Background/bg_ground.png'

const width = 600;
const height = 400;
const options = {
  backgroundColor: 0x56789a,
  resolution: window.devicePixelRatio,
  width: width,
  height: height
};
const style = {
  width: width,
  height: height
  
};
const GameContent = (app: any) => {

    const container = new PIXI.Container();

    app.stage.addChild(container);
  
    const loader = new PIXI.Loader();
    loader.add("ground", ground);
    loader.load((loader, resource) => {
      console.log("resource", resource);
      console.log("resource['ground']", resource["ground"]);
    });
  
    const texture = PIXI.Texture.from(ground);
};

export default GameContent;