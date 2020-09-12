function Circle(height,width)
{
    this.height=height;
    this.width=width;
    this.location={
        xCoordinate:{
            x:10
        },
        y:5
    }
    // this.play;
    // this.createRect=function ()
    // {
    //     console.log("object")
    // }
    
}
let obj=new Circle(2,3);
console.log(obj.location.xCoordinate.x)
// // console.log(object)
// for(let key in obj)
// {
//     // console.log(key,obj[key])
// }
// let keys=Object.keys(obj);
// console.log(keys)