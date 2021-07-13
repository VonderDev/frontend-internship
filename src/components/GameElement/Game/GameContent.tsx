import * as PIXI from 'pixi.js'
import ground from '../Assets/Background/bg_ground.png'
import sky from '../Assets/Background/bg_sky.png'
import tree from '../Assets/Background/bg_trees.png'
import bush1 from '../Assets/Item/Bush/Bush_1.png'
import bush2 from '../Assets/Item/Bush/Bush_2.png'
import bush3 from '../Assets/Item/Bush/Bush_3.png'
import bush4 from '../Assets/Item/Bush/Bush_4.png'
import treef1 from '../Assets/Item/Tree/TreeF_1.png'
import treef2 from '../Assets/Item/Tree/TreeF_2.png'
import treeb1 from '../Assets/Item/Tree/TreeB_1.png'
import treeb2 from '../Assets/Item/Tree/TreeB_2.png'
import treeb3 from '../Assets/Item/Tree/TreeB_3.png'
import cloud1 from '../Assets/Item/Cloud/Cloud_1.png'
import cloud2 from '../Assets/Item/Cloud/Cloud_2.png'
import cloud3 from '../Assets/Item/Cloud/Cloud_3.png'
import groundS3 from '../Assets/Background/bg_groundS3.png'
import bgHouseS3 from '../Assets/Background/bg_houseS3.png'
import door from '../Assets/Item/House/Door.png'
import house from '../Assets/Item/House/house.png'
import fence from '../Assets/Item/House/fenceHouse.png'
import flower from '../Assets/Item/House/Flowers.png'

const GameContent = (app: any,gameRef: any, updateRatioRef: any) => {

    const firstScene = new PIXI.Container();
    const secondScene = new PIXI.Container();
    const doorScene = new PIXI.Container();
    const homeScene = new PIXI.Container();
  
    secondScene.visible = false;
    doorScene.visible = false;
    homeScene.visible = false;
  
    app.stage.addChild(firstScene);
    app.stage.addChild(secondScene);
    app.stage.addChild(homeScene);
    app.stage.addChild(doorScene);
    //Preload asset
    window.onload = function(){

      const loader = new PIXI.Loader();
      loader.add("ground", ground)
            .add("sky", sky)
            .add("tree", tree)
            .add("bush1", bush1)
            .add("bush2", bush2)
            .add("bush3", bush3)
            .add("bush4", bush4)
            .add("treef1", treef1)
            .add("treef2", treef2)
            .add("treeb1", treeb1)
            .add("treeb2", treeb2)
            .add("treeb3", treeb3)
            .add("cloud1", cloud1)
            .add("cloud2", cloud2)
            .add("cloud3", cloud3)
            .add('groundS3',groundS3)
            .add('bgHouseS3', bgHouseS3)
            .add('door', door)
            .add('house', house)
            .add('fence', fence)
            .add('flower', flower)
      loader.onProgress.add(showProgress);
      loader.onComplete.add(doneLoading);
      loader.onError.add(loadError);
      loader.load((loader, resource) => {
      console.log("resource", resource);
    });
    }
    const showProgress = (e : any) =>{
      console.log(e.progress)
    }
    const loadError = (e : any) =>{
      console.log('Error'+ e.message)
    }

    const doneLoading = (e : any) =>{
      console.log('Done Loading! Scene1 start')
      firstScene.interactive = true;
      firstScene.buttonMode = true;
      firstScene.on('pointerdown', onClick1);
      gameScene1();

    }

    const ticker = new PIXI.Ticker();
    const cloud1Texture = PIXI.Texture.from(cloud1);
    const Cloud1 = new PIXI.Sprite(cloud1Texture );
    
    const cloud2Texture = PIXI.Texture.from(cloud2);
    const Cloud2 = new PIXI.Sprite(cloud2Texture );
    
    function animate() {
      console.log('Width',firstScene.width)
      if(Cloud1.x + Cloud1.width < firstScene.width){
        Cloud1.x += 0.1 *2
      }
      if(Cloud2.x + Cloud2.width < firstScene.width){
        Cloud2.x -= 0.1 * 3
      }
    }

    function onClick1() {
      console.log("chang to Scene2")
      firstScene.visible = false;
      doorScene.visible = false;
      homeScene.visible = false;
      secondScene.visible = true;
      secondScene.interactive = true;
      secondScene.buttonMode = true;
      secondScene.on('pointerdown', onClick2);
      gameScene2();
    }
    function onClick2() {
      console.log("chang to Scene3")
      firstScene.visible = false;
      doorScene.visible = false;
      homeScene.visible = true;
      secondScene.visible = false;
      homeScene.interactive = true;
      homeScene.buttonMode = true;
      homeScene.on('pointerdown', onClick3);
      gameScene3();
    }
    function onClick3() {
      console.log("chang to doorScene")
      firstScene.visible = false;
      doorScene.visible = true;
      homeScene.visible = false;
      secondScene.visible = false;
      doorScene.interactive = true;
      doorScene.buttonMode = true;
      doorScene.on('pointerdown', onClick4);
      doorScene3();
    }
    function onClick4() {
      console.log("chang to inHome")
    }

    function gameScene1() {
      //Background 
      const skyTexture = PIXI.Texture.from(sky);
      const bgSky = new PIXI.Sprite(skyTexture);
      bgSky.scale.set(0.7);
      firstScene.addChild(bgSky)

      const texture = PIXI.Texture.from(ground);
      const dirt = new PIXI.Sprite(texture);
      dirt.scale.set(0.7);
      dirt.anchor.set(0,-1);
      firstScene.addChild(dirt)

      const treeTexture = PIXI.Texture.from(tree);
      const bgTree = new PIXI.Sprite(treeTexture);
      bgTree.scale.set(0.7);
      bgTree.anchor.set(0,-1);
      firstScene.addChild(bgTree)

      Cloud1.scale.set(0.5);
      Cloud1.position.set(10, 20);
      firstScene.addChild(Cloud1)

      Cloud2.scale.set(0.5);
      Cloud2.position.set(500, 150);
      firstScene.addChild(Cloud2)

      //Item 

      const treeb2Texture = PIXI.Texture.from(treeb2);
      const Treeb2 = new PIXI.Sprite(treeb2Texture);
      Treeb2.scale.set(0.3);
      Treeb2.position.set(150,230);
      firstScene.addChild(Treeb2)

      const treeb1Texture = PIXI.Texture.from(treeb1);
      const Treeb1 = new PIXI.Sprite(treeb1Texture);
      Treeb1.scale.set(0.5);
      Treeb1.position.set(-20,300);
      firstScene.addChild(Treeb1)

      const treef1Texture = PIXI.Texture.from(treef1);
      const Treef1 = new PIXI.Sprite(treef1Texture);
      Treef1.scale.set(0.8);
      Treef1.position.set(-300,-100);
      firstScene.addChild(Treef1)

      const treef2Texture = PIXI.Texture.from(treef2);
      const Treef2 = new PIXI.Sprite(treef2Texture);
      Treef2.scale.set(0.7)
      Treef2.position.set(850,0);
      Treef2.scale.x = -1
      firstScene.addChild(Treef2)

      //left
      const bush2Texture = PIXI.Texture.from(bush2);
      const Bush2 = new PIXI.Sprite(bush2Texture);
      Bush2.scale.set(0.4);
      Bush2.position.set(-50,500);
      firstScene.addChild(Bush2)

      const bush1Texture = PIXI.Texture.from(bush1);
      const Bush1 = new PIXI.Sprite(bush1Texture);
      Bush1.scale.set(0.7);
      Bush1.position.set(-100,600);
      firstScene.addChild(Bush1)

      //right
      const Bush1r = new PIXI.Sprite(bush1Texture);
      Bush1r.scale.set(0.3);
      Bush1r.position.set(350,500);
      firstScene.addChild(Bush1r)

      const bush3Texture = PIXI.Texture.from(bush3);
      const Bush3 = new PIXI.Sprite(bush3Texture);
      Bush3.scale.set(0.4);
      Bush3.position.set(350,550);
      firstScene.addChild(Bush3)

      const bush4Texture = PIXI.Texture.from(bush4);
      const Bush4 = new PIXI.Sprite(bush4Texture);
      Bush4.scale.set(0.4);
      Bush4.position.set(450,620);
      firstScene.addChild(Bush4)

      ticker.add(animate);
      ticker.start();

      setTimeout(()=>{
        ticker.stop();
        }, 30000)
    }


    function gameScene2 () {
      //Background 
      const skyTexture = PIXI.Texture.from(sky);
      const bgSky = new PIXI.Sprite(skyTexture);
      bgSky.scale.set(0.7);
      secondScene.addChild(bgSky)

      const texture = PIXI.Texture.from(ground);
      const dirt = new PIXI.Sprite(texture);
      dirt.scale.set(0.7);
      dirt.anchor.set(0,-1);
      secondScene.addChild(dirt)

      const treeTexture = PIXI.Texture.from(tree);
      const bgTree = new PIXI.Sprite(treeTexture);
      bgTree.scale.set(0.7);
      bgTree.anchor.set(0,-1);
      secondScene.addChild(bgTree)

      Cloud1.scale.set(0.5);
      Cloud1.position.set(10, 20);
      secondScene.addChild(Cloud1)

      Cloud2.scale.set(0.5);
      Cloud2.position.set(500, 150);
      secondScene.addChild(Cloud2)
      //Item 
      const treeb1Texture = PIXI.Texture.from(treeb1);
      const Treeb1 = new PIXI.Sprite(treeb1Texture);
      Treeb1.scale.set(0.4)
      Treeb1.position.set(250,400);
      secondScene.addChild(Treeb1)

      const treeb3Texture = PIXI.Texture.from(treeb3);
      const Treeb3 = new PIXI.Sprite(treeb3Texture);
      Treeb3.scale.set(0.3)
      Treeb3.position.set(160,250);
      secondScene.addChild(Treeb3)

      const treeb2Texture = PIXI.Texture.from(treeb2);
      const Treeb2 = new PIXI.Sprite(treeb2Texture);
      Treeb2.scale.set(0.4)
      Treeb2.position.set(0,300);
      secondScene.addChild(Treeb2)

      const treef1Texture = PIXI.Texture.from(treef1);
      const Treef1 = new PIXI.Sprite(treef1Texture);
      Treef1.scale.set(0.7)
      Treef1.position.set(300,80);
      secondScene.addChild(Treef1)

      const bush3Texture = PIXI.Texture.from(bush3);
      const Bush3 = new PIXI.Sprite(bush3Texture);
      Bush3.scale.set(0.3);
      Bush3.position.set(-80,600);
      secondScene.addChild(Bush3)

      const treef2Texture = PIXI.Texture.from(treef2);
      const Treef2 = new PIXI.Sprite(treef2Texture);
      Treef2.scale.set(0.9);
      Treef2.position.set(-250,-100);
      secondScene.addChild(Treef2)

      const bush4Texture = PIXI.Texture.from(bush4);
      const Bush4 = new PIXI.Sprite(bush4Texture);
      Bush4.scale.set(0.3);
      Bush4.position.set(-5,700);
      secondScene.addChild(Bush4)

      const bush2Texture = PIXI.Texture.from(bush2);
      const Bush2 = new PIXI.Sprite(bush2Texture);
      Bush2.scale.set(0.5);
      Bush2.position.set(350,550);
      secondScene.addChild(Bush2)

      const bush1Texture = PIXI.Texture.from(bush1);
      const Bush1 = new PIXI.Sprite(bush1Texture);
      Bush1.scale.set(0.6);
      Bush1.position.set(450,600);
      secondScene.addChild(Bush1)
    }

    function gameScene3 () {
      //Background 
      const skyTexture = PIXI.Texture.from(sky);
      const bgSky = new PIXI.Sprite(skyTexture);
      bgSky.scale.set(0.7);
      bgSky.anchor.set(0,0);
      homeScene.addChild(bgSky)

      const texture = PIXI.Texture.from(groundS3);
      const dirtS3 = new PIXI.Sprite(texture);
      dirtS3.scale.set(0.7);
      dirtS3.anchor.set(0,-0.5);
      homeScene.addChild(dirtS3)

      const houseTexture = PIXI.Texture.from(house);
      const houseS3 = new PIXI.Sprite(houseTexture);
      houseS3.scale.set(0.5);
      houseS3.position.set(100,200);
      homeScene.addChild(houseS3)

      const treef2Texture = PIXI.Texture.from(treef2);
      const Treef2 = new PIXI.Sprite(treef2Texture);
      Treef2.scale.set(0.7)
      Treef2.position.set(400,0);
      Treef2.scale.x = -1
      firstScene.addChild(Treef2)

    }
    function doorScene3 () {
            //Background 
            const bghouseTexture = PIXI.Texture.from(bgHouseS3);
            const bghouse = new PIXI.Sprite(bghouseTexture);
            bghouse.scale.set(0.7);
            bghouse.anchor.set(0,0);
            doorScene.addChild(bghouse)
    
    }

    // const onMainResize = (width:number , height:number) => {
    //   // TODO: resize game container at here
    //   container.position.set(width / 2, height / 2);
    // };
    // updateRatioRef.current.add(onMainResize);
    // const onRelease = () => {
    //   updateRatioRef.current.remove(onMainResize);
    //   console.warn("pixi released");
    // };


    const onRelease = () => { console.log('Nothing') }
    console.log("container", firstScene);
    return [app , onRelease]
};

export default GameContent;