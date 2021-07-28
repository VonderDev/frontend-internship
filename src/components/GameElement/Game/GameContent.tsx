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
import bgS4 from '../Assets/Background/bg_s4.png'
import funiture from '../Assets/Item/InHome/Furniture.png'
import sofa from '../Assets/Item/InHome/Sofa.png'
import bgS42 from '../Assets/Background/bg_s42.png'
import sofa2 from '../Assets/Item/InHome/Sofa2.png'
import bgS43 from '../Assets/Background/bg_s43.png'
import sewing from '../Assets/Item/InHome/Sewing.png'
import tools from '../Assets/Item/InHome/Tools.png'
import bigTree from '../Assets/Item/Tree/BigTree.png'
import lake from '../Assets/Background/Background_Lake.png'
import water from '../Assets/Background/Water.png'
import shadow from '../Assets/Background/Shadow.png'
import TreeFnew from '../Assets//Item/Tree/TreeF_1new.png'
import bearHappy from '../Assets/Item/Charecter/Bear_Friendly.png'
import bearAngry from '../Assets/Item/Charecter/Bear_Angry.png'
import raccoonHappy from '../Assets/Item/Charecter/Raccoon_Friendly.png'
import raccoonAngry from '../Assets/Item/Charecter/Raccoon_Angry.png'
const monkey = 'https://vonder-me-s3.s3.ap-southeast-1.amazonaws.com/Monkey/Monkey_Flat_Final.json'
//@ts-ignore
import PIXISpine  from '../PixiStore/pixi-spine';

const GameContent = (app: any,gameRef: any, updateRatioRef: any) => {
   // ------------------- Create container --------------//
    const firstScene = new PIXI.Container();
    const secondScene = new PIXI.Container();
    const doorScene = new PIXI.Container();
    const homeScene = new PIXI.Container();
    const inHomeScene = new PIXI.Container();
    const inHome2Scene = new PIXI.Container();
    const inHome3Scene = new PIXI.Container();
    const jungleScene = new PIXI.Container();
    const endScene = new PIXI.Container();
    const lastScene = new PIXI.Container();
    const happyAction = new PIXI.Container();
    const angryAction = new PIXI.Container();
    const musicAction = new PIXI.Container();
    const talkAction = new PIXI.Container();
    const pointAction = new PIXI.Container();
    const zoomTalk = new PIXI.Container();
    const zoomAngry = new PIXI.Container();
    //keep container scene in array 

    app.stage.addChild(firstScene);
    app.stage.addChild(secondScene);
    app.stage.addChild(homeScene);
    app.stage.addChild(doorScene);
    app.stage.addChild(inHomeScene);
    app.stage.addChild(inHome2Scene);
    app.stage.addChild(inHome3Scene);
    app.stage.addChild(jungleScene);
    app.stage.addChild(endScene);
    app.stage.addChild(lastScene);
    app.stage.addChild(happyAction);
    app.stage.addChild(angryAction);
    app.stage.addChild(musicAction );
    app.stage.addChild(talkAction );
    app.stage.addChild(pointAction);
    app.stage.addChild(zoomTalk);
    app.stage.addChild(zoomAngry);

    // ------------------- Preload Asset --------------//
    let sprites: any = {}; 
    //  function loadeAsset (){
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
            .add('bgS4', bgS4)
            .add('funiture', funiture)
            .add('sofa', sofa)
            .add('bgS42', bgS42)
            .add('sofa2', sofa2)
            .add('bgS43', bgS43)
            .add('sewing', sewing)
            .add('tools', tools)
            .add('bigTree', bigTree)
            .add('lake', lake)
            .add('water', water)
            .add('shadow', shadow)
            .add('TreeFnew', TreeFnew)
            .add('bearHappy', bearHappy)
            .add('bearAngry', bearAngry)
            .add('raccoonHappy', raccoonHappy)
            .add('raccoonAngry', raccoonAngry)
            //@ts-ignore
            .add("Monkey", monkey );
      loader.load((loader, resource) => {
      console.log("resource", resource);
      //background
        sprites.BgGround =  new PIXI.Sprite(resource.ground.texture);
        sprites.BgSky =  new PIXI.Sprite(resource.sky.texture);
        sprites.BgTree =  new PIXI.Sprite(resource.tree.texture);
        sprites.BgOutHome =  new PIXI.Sprite(resource.bgHouseS3.texture);
        sprites.BgGroundS3 =  new PIXI.Sprite(resource.groundS3.texture);
        sprites.BgHome =  new PIXI.Sprite(resource.bgS4.texture);
        sprites.BgHomein =  new PIXI.Sprite(resource.bgS42.texture);
        sprites.BgHomein2 =  new PIXI.Sprite(resource.bgS43.texture);
        sprites.BgWater =  new PIXI.Sprite(resource.water.texture);

      //item jungle
        sprites.Cloud1 =  new PIXI.Sprite(resource.cloud1.texture);
        sprites.Cloud2 =  new PIXI.Sprite(resource.cloud2.texture);
        sprites.Cloud3 =  new PIXI.Sprite(resource.cloud3.texture);
        sprites.TreeF1 =  new PIXI.Sprite(resource.treef1.texture);
        sprites.TreeF2 =  new PIXI.Sprite(resource.treef2.texture);
        sprites.TreeFnew =  new PIXI.Sprite(resource.TreeFnew.texture);
        sprites.TreeB1 =  new PIXI.Sprite(resource.treeb1.texture);
        sprites.TreeB2 =  new PIXI.Sprite(resource.treeb2.texture);
        sprites.TreeB3 =  new PIXI.Sprite(resource.treeb3.texture);
        sprites.BigTree =  new PIXI.Sprite(resource.bigTree.texture);
        sprites.Brush1 =  new PIXI.Sprite(resource.bush1.texture);
        sprites.Brush2 =  new PIXI.Sprite(resource.bush3.texture);
        sprites.Brush3 =  new PIXI.Sprite(resource.bush3.texture);
        sprites.Brush4 =  new PIXI.Sprite(resource.bush4.texture);
        sprites.Lake =  new PIXI.Sprite(resource.lake.texture);
        sprites.Shadow =  new PIXI.Sprite(resource.shadow.texture);

        //item inHome
        sprites.Door =  new PIXI.Sprite(resource.door.texture);
        sprites.Home =  new PIXI.Sprite(resource.house.texture);
        sprites.Fence =  new PIXI.Sprite(resource.fence.texture);
        sprites.Flower =  new PIXI.Sprite(resource.flower.texture);
        sprites.Flower2 =  new PIXI.Sprite(resource.flower.texture);
        sprites.Funiture =  new PIXI.Sprite(resource.funiture.texture);
        sprites.Sofa =  new PIXI.Sprite(resource.sofa.texture);
        sprites.Sofa2 =  new PIXI.Sprite(resource.sofa2.texture);
        sprites.Sewing =  new PIXI.Sprite(resource.sewing.texture);
        sprites.Tools =  new PIXI.Sprite(resource.tools.texture);

        //Animate
        //@ts-ignore
        sprites.Monkey =  new PIXISpine.Spine(resource.Monkey.spineData);
        sprites.BearHappy = new PIXI.Sprite(resource.bearHappy.texture);
        sprites.BearAngry = new PIXI.Sprite(resource.bearAngry.texture);
        sprites.RaccoonAngry = new PIXI.Sprite(resource.raccoonAngry.texture);
        sprites.RaccoonHappy = new PIXI.Sprite(resource.raccoonHappy.texture);

        console.log('Monkey',resource.Monkey)
    });
    const showProgress = (e : any) =>{
      console.log(e.progress.toFixed(2) + '% loader')
    }
    const loadError = (e : any) =>{
      console.log('Error'+ e.message)
    }

    const doneLoading = (e : any) =>{
      console.log("Sprites", sprites);
      console.log('Done Loading! Scene1 start')
      initial();
    }

    loader.onProgress.add(showProgress);
    loader.onComplete.add(doneLoading);
    loader.onError.add(loadError);
    // }
// ------------------- Prepare Asset --------------//
    function initial(){
      firstScene.visible = true;
      secondScene.visible = false;
      doorScene.visible = false;
      homeScene.visible = false;
      inHomeScene.visible = false;
      inHome2Scene.visible = false;
      inHome3Scene.visible = false;
      jungleScene.visible = false;
      endScene.visible = false;
      lastScene.visible = false;
      happyAction.visible = false;
      angryAction.visible = false;
      musicAction.visible = false;
      talkAction.visible = false;
      pointAction.visible = false;
      zoomTalk.visible = false;
      zoomAngry.visible = false;

      firstScene.pivot.set(0,1)
      secondScene.pivot.set(0,1)
      homeScene.pivot.set(0,1)
      doorScene.pivot.set(0,1)
      inHomeScene.pivot.set(0,1)
      inHome2Scene.pivot.set(0,1)
      inHome3Scene.pivot.set(0,1)
      jungleScene.pivot.set(0,1)
      endScene.pivot.set(0,1)
      lastScene.pivot.set(0,1)
      zoomTalk.pivot.set(0,1)
      zoomAngry.pivot.set(0,1)

      const ticker = new PIXI.Ticker();
      function animate() {
        sprites.Cloud1.x += 0.1 * 2
        sprites.Cloud2.x -= 0.1 * 3
      }
      gameScene1()
      firstScene.interactive = true;
      firstScene.buttonMode = true;
      firstScene.on('pointerdown', goScene2);

      function wait(duration = 0) {
        return new Promise((resolve, reject) => {
            setTimeout(resolve, duration);
        });
    }

    // ------------------- Props From react --------------//
      if(!gameRef.current) gameRef.current = {};
      console.log('GameRef:',gameRef.current)

      gameRef.current.changeScene = (prop: string) =>{
        console.log('prop to pixi:',prop)
        if(prop == 'S2'){
          goScene2()
        }else if (prop == 'S3'){
          goScene3()
        }else if (prop == 'door'){
          goSceneDoor();
        }else if (prop == 'S4'){
          goSceneInHome();
        }else if (prop == 'S4.2'){
          goSceneInHome2();
        }else if (prop == 'S4.3'){
         goSceneInHome3()
        }
        else if (prop == 'S5'){
          goScene5()
        }else if (prop == 'S6'){
          goSceneLake()
        }else if (prop == 'S6.1'){
            goSceneEnd();
        }else if (prop == 'angry'){
          happyAction.visible = false;
          angryAction.visible = true;
          angryAction.pivot.set(0,1);
          angryFriend()
      }else if (prop == 'happy'){
        happyAction.visible = true;
        zoomTalk.visible = false;
        angryAction.visible = false;
        happyAction.pivot.set(0,1);
        happyFriend()
    }else if (prop == 'talk'){
      zoomTalk.visible = false;
      musicAction.visible = false;
      talkAction.visible = true;
      talkAction.pivot.set(0,1);
      Talk()
    }else if (prop == 'point'){
      talkAction.visible = false;
      pointAction.visible = true;
      pointAction.pivot.set(0,1);
      Point()
    }else if (prop == 'ZoomHappy'){
      zoomAngry.visible = false;
      angryAction.visible = false;
      zoomTalk.visible = true;
      happyZoom()
    }else if (prop == 'ZoomAngry'){
      angryAction.visible = false;
      zoomTalk.visible = false;
      zoomAngry.visible = true;
      angryZoom()
    }
      }

      // ------------------- Assete each of Scene--------------//
      function gameScene1() {    
        //Background 
        sprites.BgSky.scale.set(0.7,0.5);
        firstScene.addChild(sprites.BgSky)
  
        sprites.BgGround.scale.set(0.7);
        sprites.BgGround.anchor.set(0,-1);
        firstScene.addChild(sprites.BgGround)
  
        sprites.BgTree.scale.set(0.7);
        sprites.BgTree.anchor.set(0,-1);
        firstScene.addChild(sprites.BgTree)
  
        sprites.Cloud1.scale.set(0.5);
        sprites.Cloud1.position.set(10, 20);
        firstScene.addChild(sprites.Cloud1)
  
        sprites.Cloud2.scale.set(0.5);
        sprites.Cloud2.position.set(500, 150);
        firstScene.addChild(sprites.Cloud2)
  
        //Item 
        sprites.TreeB2.scale.set(0.3);
        sprites.TreeB2.position.set(150,230);
        firstScene.addChild(sprites.TreeB2)
  
        sprites.TreeB1.scale.set(0.5);
        sprites.TreeB1.position.set(-20,300);
        firstScene.addChild(sprites.TreeB1)
  
        sprites.TreeF1.scale.set(0.8);
        sprites.TreeF1.position.set(-260,-100);
        firstScene.addChild(sprites.TreeF1)
  
        sprites.Brush1.scale.set(0.4);
        sprites.Brush1.position.set(350,480);
        firstScene.addChild(sprites.Brush1)
  
        sprites.TreeF2.scale.set(0.7)
        sprites.TreeF2.position.set(850,0);
        sprites.TreeF2.scale.x = -1
        firstScene.addChild(sprites.TreeF2)
  
        //left
        sprites.Brush2.scale.set(0.4);
        sprites.Brush2.position.set(-150,550);
        firstScene.addChild(sprites.Brush2)
  
        const Brush1new = sprites.Brush1
        Brush1new.scale.set(0.7);
        Brush1new.position.set(-100,600);
        firstScene.addChild(Brush1new)
  
        //right
        sprites.Brush3.scale.set(0.4);
        sprites.Brush3.position.set(350,550);
        firstScene.addChild(sprites.Brush3)
  
        sprites.Brush4.scale.set(0.4);
        sprites.Brush4.position.set(450,620);
        firstScene.addChild(sprites.Brush4)
        ticker.add(animate);
        ticker.start();
  
      }
      function gameScene2 () {
        //Background 
        sprites.BgSky.scale.set(0.7,0.5);
        secondScene.addChild(sprites.BgSky)
  
        sprites.BgGround.scale.set(0.7);
        sprites.BgGround.anchor.set(0,-1);
        secondScene.addChild(sprites.BgGround)
  
        sprites.BgTree.scale.set(0.7);
        sprites.BgTree.anchor.set(0,-1);
        secondScene.addChild(sprites.BgTree);
  
        sprites.Cloud1.scale.set(0.5);
        sprites.Cloud1.position.set(10, 20);
        secondScene.addChild(sprites.Cloud1)
  
        sprites.Cloud2.scale.set(0.5);
        sprites.Cloud2.position.set(500, 150);
        secondScene.addChild(sprites.Cloud2)
        //Item 
  
        sprites.TreeB1.scale.set(0.4)
        sprites.TreeB1.position.set(250,400);
        secondScene.addChild(sprites.TreeB1)
  
        sprites.TreeB3.scale.set(0.3)
        sprites.TreeB3.position.set(160,250);
        secondScene.addChild(sprites.TreeB3)
  
        sprites.TreeB2.scale.set(0.4)
        sprites.TreeB2.position.set(0,300);
        secondScene.addChild(sprites.TreeB2)
  
        sprites.TreeF1.scale.set(0.7)
        sprites.TreeF1.position.set(300,80);
        secondScene.addChild(sprites.TreeF1)
  
        sprites.Brush3.scale.set(0.3);
        sprites.Brush3.position.set(-80,600);
        secondScene.addChild(sprites.Brush3)
  
        sprites.TreeF2.scale.set(0.9);
        sprites.TreeF2.position.set(-250,-100);
        secondScene.addChild(sprites.TreeF2)
  
        sprites.Brush4.scale.set(0.3);
        sprites.Brush4.position.set(-5,700);
        secondScene.addChild(sprites.Brush4)
  
        sprites.Brush2.scale.set(0.5);
        sprites.Brush2.position.set(350,550);
        secondScene.addChild(sprites.Brush2)
  
        sprites.Brush1.scale.set(0.6);
        sprites.Brush1.position.set(450,600);
        secondScene.addChild(sprites.Brush1)

        angryFriend();
        ticker.add(animate);
        ticker.start();

      }
      function gameScene3 () {
        //Background 
        sprites.BgSky.scale.set(0.7,0.5);
        sprites.BgSky.anchor.set(0,0);
        homeScene.addChild(sprites.BgSky)
  
        sprites.BgGroundS3.scale.set(0.7);
        sprites.BgGroundS3.anchor.set(0,-0.5);
        homeScene.addChild(sprites.BgGroundS3)
  
        sprites.Cloud1.scale.set(0.5);
        sprites.Cloud1.position.set(10, 20);
        homeScene.addChild(sprites.Cloud1)
  
        sprites.Cloud2.scale.set(0.5);
        sprites.Cloud2.position.set(500, 150);
        homeScene.addChild(sprites.Cloud2)
  
        // sprites.BgTree.scale.set(0.6);
        // sprites.BgTree.position.set(0,100);
        // homeScene.addChild(sprites.BgTree)
  
        sprites.Home.scale.set(0.5);
        sprites.Home.position.set(100,200);
        homeScene.addChild(sprites.Home)
  
        sprites.Fence.scale.set(0.8);
        sprites.Fence.position.set(50,300);
        homeScene.addChild(sprites.Fence)
  
        sprites.TreeF2.scale.set(1)
        sprites.TreeF2.position.set(820,-350);
        sprites.TreeF2.scale.x = -1
        homeScene.addChild(sprites.TreeF2)
  
        sprites.Brush3.scale.set(0.7);
        sprites.Brush3.position.set(300,450);
        homeScene.addChild(sprites.Brush3)
  
        sprites.TreeFnew.scale.set(0.6,1);
        sprites.TreeFnew.position.set(-450,-400);
        homeScene.addChild(sprites.TreeFnew)
  
        sprites.Brush1.scale.set(0.6);
        sprites.Brush1.position.set(-100,600);
        homeScene.addChild(sprites.Brush1)
        ticker.add(animate);
        ticker.start();
      }
      function doorScene3 () {
              //Background 
              sprites.BgOutHome.scale.set(0.7,0.5);
              sprites.BgOutHome.anchor.set(0,0);
              doorScene.addChild(sprites.BgOutHome)
  
              sprites.Door.scale.set(0.5);
              sprites.Door.position.set(70,100);
              doorScene.addChild(sprites.Door)
  
              sprites.Flower.scale.set(0.6);
              sprites.Flower.position.set(-100,600);
              doorScene.addChild(sprites.Flower)
      
              sprites.Flower2.scale.set(0.6);
              sprites.Flower.position.set(450,600);
              doorScene.addChild(sprites.Flower)
      }
      function homeScene4 () {
        //Background 
        sprites.BgHome.scale.set(0.7,0.55);
        sprites.BgHome.position.set(-50,0);
        inHomeScene.addChild(sprites.BgHome)
  
        sprites.Funiture.scale.set(0.5,0.6);
        sprites.Funiture.position.set(-150,20);
        inHomeScene.addChild(sprites.Funiture)
  
        sprites.Sofa.scale.set(0.5,0.6);
        sprites.Sofa.position.set(150,500);
        inHomeScene.addChild(sprites.Sofa)
      }

      function homeScene4_2 () {
        //Background 
        sprites.BgHomein.scale.set(0.7,0.55);
        sprites.BgHomein.position.set(0,0);
        inHome2Scene.addChild(sprites.BgHomein)
  
        sprites.Sofa2.scale.set(0.5,0.6);
        sprites.Sofa2.position.set(0,0);
        inHome2Scene.addChild( sprites.Sofa2)
      }

      function homeScene4_3 () {
        //Background 
        sprites.BgHomein2.scale.set(0.7,0.55);
        sprites.BgHomein2.position.set(0,0);
        inHome3Scene.addChild(sprites.BgHomein2)
  
        sprites.Sewing.scale.set(0.6);
        sprites.Sewing.position.set(100,-50);
        inHome3Scene.addChild( sprites.Sewing)
  
        sprites.Tools.scale.set(0.5,0.5);
        sprites.Tools.position.set(0,0);
        inHome3Scene.addChild(sprites.Tools)
      }

      function gameScene5 () {
             //Background 
             sprites.BgSky.scale.set(0.7,0.5);
             jungleScene.addChild(sprites.BgSky)
       
             sprites.BgGround.scale.set(0.7);
             sprites.BgGround.anchor.set(0,-1);
             jungleScene.addChild(sprites.BgGround)
       
             sprites.BgTree.scale.set(0.7);
             sprites.BgTree.anchor.set(0,-1);
             jungleScene.addChild(sprites.BgTree)
       
             sprites.Cloud1.scale.set(0.5);
             sprites.Cloud1.position.set(10, 20);
             jungleScene.addChild(sprites.Cloud1)
       
             sprites.Cloud2.scale.set(0.5);
             sprites.Cloud2.position.set(500, 150);
             jungleScene.addChild(sprites.Cloud2)
             //Item 
    
             sprites.TreeB1.scale.set(0.4)
             sprites.TreeB1.position.set(300,350);
             jungleScene.addChild(sprites.TreeB1)
       
             sprites.TreeB3.scale.set(0.3)
             sprites.TreeB3.position.set(160,250);
             jungleScene.addChild(sprites.TreeB3)
       
             sprites.TreeB2.scale.set(0.4)
             sprites.TreeB2.position.set(0,300);
             jungleScene.addChild(sprites.TreeB2)

             sprites.Brush2.scale.set(0.5);
             sprites.Brush2.position.set(350,400);
             jungleScene.addChild(sprites.Brush2)

             playMusic()

             sprites.BigTree.scale.set(0.8)
             sprites.BigTree.position.set(180,-80);
             jungleScene.addChild(sprites.BigTree)
       
             sprites.Brush3.scale.set(0.3);
             sprites.Brush3.position.set(-80,600);
             jungleScene.addChild(sprites.Brush3)
  
             sprites.TreeF2.scale.set(0.9);
             sprites.TreeF2.position.set(-250,-100);
             jungleScene.addChild(sprites.TreeF2)
       
             sprites.Brush4.scale.set(0.3);
             sprites.Brush4.position.set(-5,700);
             jungleScene.addChild(sprites.Brush4)
       
             sprites.Brush1.scale.set(0.6);
             sprites.Brush1.position.set(450,600);
             jungleScene.addChild(sprites.Brush1)

             ticker.add(animate);
             ticker.start();

      }
      function gameScene6() {
               //Background 
               sprites.BgSky.scale.set(0.7,0.5);
               endScene.addChild(sprites.BgSky)
                      
               sprites.BgGround.scale.set(0.7,0.6);
               sprites.BgGround.anchor.set(0,-1.5);
               endScene.addChild(sprites.BgGround)
  
               sprites.Lake.scale.set(0.7);
               sprites.Lake.position.set(0, 130);
               endScene.addChild(sprites.Lake)
         
               sprites.Cloud1.scale.set(0.5);
               sprites.Cloud1.position.set(10, 20);
               endScene.addChild(sprites.Cloud1)
         
               sprites.Cloud2.scale.set(0.5);
               sprites.Cloud2.position.set(500, 150);
               endScene.addChild(sprites.Cloud2)
  
               sprites.TreeB2.scale.set(0.5)
               sprites.TreeB2.position.set(380,200);
               endScene.addChild(sprites.TreeB2)
  
               sprites.Brush3.scale.set(0.6);
               sprites.Brush3.position.set(300,450);
               endScene.addChild(sprites.Brush3)
  
               sprites.Brush4.scale.set(0.6);
               sprites.Brush4.position.set(350,600);
               endScene.addChild(sprites.Brush4)
         
               sprites.Brush2.scale.set(0.5);
               sprites.Brush2.position.set(-200,450);
               endScene.addChild(sprites.Brush2);
  
               sprites.TreeFnew.scale.set(0.7,0.8);
               sprites.TreeFnew.position.set(-380,-320);
               endScene.addChild(sprites.TreeFnew)
  
               sprites.Brush1.scale.set(0.6);
               sprites.Brush1.position.set(-100,600);
               endScene.addChild(sprites.Brush1)

               ticker.add(animate);
               ticker.start();
   //Item
  
      }

      function gameLastScene() {
  
        const verticesX = 5;
        const verticesY = 10;
        const waterTexture = PIXI.Texture.from(water);
        const planeWater = new PIXI.SimplePlane(waterTexture, verticesX, verticesY);
               
        const texture = PIXI.Texture.from(shadow);
  
      const plane = new PIXI.SimplePlane(texture, verticesX, verticesY);
  
      plane.x = 20;
      plane.y = 150;
      plane.scale.set(0.5);
  
      planeWater.scale.set(0.7);
      lastScene.addChild(planeWater);
      lastScene.addChild(plane);

      // Get the buffer for vertice positions.
      const bufferWater = planeWater.geometry.getBuffer('aVertexPosition');
      const buffer = plane.geometry.getBuffer('aVertexPosition');
  
      // Listen for animate update
      app.ticker.add(() => {
          // Randomize the vertice positions a bit to create movement.
          for (let i = 0; i < buffer.data.length; i++) {
              buffer.data[i] += (Math.random() - 0.5);
          }
          buffer.update();
          for (let i = 0; i < bufferWater.data.length; i++) {
            bufferWater.data[i] += (Math.random() - 0.5);
        }
        bufferWater.update();
      });
  
      }

      // ------------------- Charecter --------------//
      function happyFriend(){
        sprites.BearHappy.scale.set(0.1);
        sprites.BearHappy.position.set(150,600);
        sprites.RaccoonHappy.scale.set(0.1);
        sprites.RaccoonHappy.position.set(250,650);
        happyAction.addChild(sprites.BearHappy)
        happyAction.addChild(sprites.RaccoonHappy)
      }
      function happyZoom(){
        sprites.BearHappy.scale.set(0.4);
        sprites.BearHappy.position.set(-50,200);
        sprites.RaccoonHappy.scale.set(0.4);
        sprites.RaccoonHappy.position.set(120,460);
        zoomTalk.addChild(sprites.BearHappy)
        zoomTalk.addChild(sprites.RaccoonHappy)
      }
      function angryZoom(){
        sprites.BearAngry.scale.set(0.3);
        sprites.BearAngry.position.set(-100,350);
        sprites.RaccoonAngry.scale.set(0.3);
        sprites.RaccoonAngry.position.set(200,480);
        zoomAngry.addChild(sprites.BearAngry)
        zoomAngry.addChild(sprites.RaccoonAngry)
      }
      function angryFriend(){
        sprites.BearAngry.scale.set(0.1);
        sprites.BearAngry.position.set(150,600);
        sprites.RaccoonAngry.scale.set(0.1);
        sprites.RaccoonAngry.position.set(250,650);
        angryAction.addChild(sprites.BearAngry)
        angryAction.addChild(sprites.RaccoonAngry)
      }
      function playMusic(){
        sprites.Monkey.scale.set(0.2);
        sprites.Monkey.position.set(400,800);
        musicAction.addChild( sprites.Monkey);
             if (sprites.Monkey.state.hasAnimation('Playing Music')) {
              sprites.Monkey.state.setAnimation(0, 'Playing Music', true , true );
              sprites.Monkey.state.timeScale = 0.5;
              }
      }
      function Talk(){
        sprites.Monkey.scale.set(0.2);
        sprites.Monkey.position.set(400,800);
        talkAction.addChild( sprites.Monkey);
        if (sprites.Monkey.state.hasAnimation('Talk')) {
          sprites.Monkey.state.setAnimation(0, 'Talk', true , true );
          sprites.Monkey.state.timeScale = 0.5;
          }
        
      }
      function Point(){
        sprites.Monkey.scale.set(0.2);
        sprites.Monkey.position.set(400,800);
        pointAction.addChild( sprites.Monkey);
        if (sprites.Monkey.state.hasAnimation('Point')) {
          sprites.Monkey.state.setAnimation(0, 'Point', 'Talk', true );
          sprites.Monkey.state.timeScale = 0.5;
          }
      }

      // ------------------- Condition change Scene--------------//

      function goScene2() {
        console.log("chang to Scene2")
        secondScene.visible = true;
        secondScene.interactive = true;
        secondScene.buttonMode = true;
        angryAction.visible = true;
        angryAction.pivot.set(0,1);
        secondScene.on('pointerdown',  goScene3);
        gameScene2();
      }

      function goScene3() {
        console.log("chang to Scene3")
        happyAction.visible = false;
        angryAction.visible = false;
        zoomAngry.visible = false;
        zoomTalk.visible = false;
        homeScene.visible = true;
        homeScene.interactive = true;
        homeScene.buttonMode = true;
        homeScene.on('pointerdown', goSceneDoor);
        gameScene3();
      }
      function goSceneDoor() {
        console.log("chang to doorScene")
        homeScene.visible = false;
        doorScene.visible = true;
        doorScene.interactive = true;
        doorScene.buttonMode = true;
        doorScene.on('pointerdown', goSceneInHome);
        doorScene3();
      }
      function goSceneInHome() {
        console.log("chang to inHome")
        inHomeScene.visible = true;
        inHomeScene.interactive = true;
        inHomeScene.buttonMode = true;
        inHomeScene.on('pointerdown', goSceneInHome2);
        homeScene4();
      }
      function goSceneInHome2() {
        console.log("chang to inHome 4.2")
        inHome2Scene.visible = true;
        inHomeScene.visible = false;
        inHome2Scene.interactive = true;
        inHome2Scene.buttonMode = true;
        inHome2Scene.on('pointerdown',goSceneInHome3);
        homeScene4_2();
      }
      function goSceneInHome3() {
        console.log("chang to inHome 4.3")
        inHome3Scene.visible = true;
        inHome2Scene.visible = false;
        inHome3Scene.interactive = true;
        inHome3Scene.buttonMode = true;
        inHome3Scene.on('pointerdown', goScene5);
        homeScene4_3();
      }
      function goScene5() {
        console.log("chang to Scene 5")
        musicAction.visible = true;
        inHome3Scene.visible = false;
        jungleScene.visible = true;
        jungleScene.interactive = true;
        jungleScene.buttonMode = true;
        jungleScene.on('pointerdown', goSceneLake);
        gameScene5();
      }
      function goSceneLake() {
        console.log("chang to Scene 6")
        pointAction.visible = false;
        endScene.visible = true;
        endScene.interactive = true;
        endScene.buttonMode = true;
        endScene.on('pointerdown', goSceneEnd);
        gameScene6();
      }
      function goSceneEnd() {
        console.log("chang to Scene End")
        lastScene.visible = true;
        gameLastScene();
      }

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

    const onRelease = () => {
        console.log('Nothing');
    };
    console.log('container', firstScene);
    return [app, onRelease];
};

export default GameContent;
function useSate<T>(arg0: boolean): [any, any] {
  throw new Error('Function not implemented.')
}

