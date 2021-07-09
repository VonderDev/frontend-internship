import { useState } from "react";

type ListProps = {
    width: number;
    height: number;
}
type List= Array<ListProps> | [];
const UpdateRatio = () => {

    const [list, setList] = useState<List>([])
    const [width, setWidth] = useState<number>(0)
    const [height, setHeight] = useState<number>(0)

    const add = (callback : (width : number, height : number)=>void ) =>{
        // list.push(callback);
        // callback(width, height);
        setList((prev: List) =>{
            const newList = [...prev];
            newList.push({width, height});
            return newList
        })
    }
    // const remove = (callback : any) =>{
    //     const index = list.indexOf(callback)
    //     if (index < 0) return false;
    //     else {
    //         setList(list.splice(index, 1))
    //       return true;
    //     }
    // }

    // const clear = () => {
    //     setList([]);
    // }

    // const update = ({width, height}: IList) =>{
    //   setWidth(width);
    //   setHeight(height);
    //   list.forEach((callback) => {
    //     callback(width, height);
    //   });
    // }
  }
  
  export default UpdateRatio;