import * as PIXI from "pixi.js";
//@ts-ignore
import PIXISpine  from './pixi-spine.js';
import monkey from '../Assets/Item/Monkey/Monkey_Flat_Final.json'

let monkeyAction = {
    controller: {},
    scale: 0.1,
    sequence: {
      playMusic: [
        { name: "Playing Music", loop:  true }
      ],
      talk: [
        { name: "Talk ", loop:  true }
      ],
      point: [
        { name: "Point", loop: false },
        { name: "Talk ", loop:  true }
      ]
    },
    playSequence: (spine:any, sequenceData:any) => {
        if (!sequenceData || sequenceData.length === 0) return;
        spine.state.setAnimation(0, sequenceData[0].name, sequenceData[0].loop);
        for (let i = 1; i < sequenceData.length; i++)
          spine.state.addAnimation(
            0,
            sequenceData[i].name,
            sequenceData[i].loop,
            sequenceData[i].delay
          );
      },
      initial: async (app: any) => {
        return new Promise((resolve, reject) => {
          const preload = new PIXI.Loader();
          preload.add("Monekey",'../Assets/Item/Monkey/Monkey_Flat_Final.json');
          preload.load(async (loader, resources) => {
            // console.log("resources", resources);
            if (app.loader.resources) {
              app.loader.resources.Monkey = resources;
            }
            // console.log("app", app);
          });
          preload.onComplete.add(async () => {
            await app.initial(app);
            resolve("load Vonder complete");
          });
          preload.onError.add((e:any) => {
            reject(e);
          });
        });
      },
      create: async (app:any,preload:any) => {
        console.log("preload", preload);
        return new Promise((resolve, reject) => {
            let promises = [
                new Promise((resolve, reject) => {
            if (!preload.resources.Monkey) {
                preload.add("Monekey",'../Assets/Item/Monkey/Monkey_Flat_Final.json');
              }
        preload.load(async (loader:any, resources:any) => {
                console.log("resources from app loader", resources);
                let spineData = resources["Monekey"].Monekey.spineData;
              if (spineData) {
                //@ts-ignore
                let spine = new PIXISpine.Spine(spineData);
                let container = new PIXI.Container();

                container.addChild(spine);
                const controller = {
                    spine,
                    container,
                    playState: (stateName: string | number) => {
                      //@ts-ignore
                        if (monkeyAction.sequence[stateName]) {
                          monkeyAction.playSequence(
                            controller.spine,
                            //@ts-ignore
                            monkeyAction.sequence[stateName]
                          );
                        }
                      },

                }
                monkeyAction.controller = controller;
                resolve(controller);
              }else {
                reject({ error: "NO_SPINE_DATA" });
              }
            })
        })
            ]
            Promise.all(promises)
            .then((results) => {
              const [monkeyAction] = results;
              resolve(monkeyAction);
            })
            .catch((e) => {
              reject(e);
            });
      })
    }

}
export default monkeyAction;
