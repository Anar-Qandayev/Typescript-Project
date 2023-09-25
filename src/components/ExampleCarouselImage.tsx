import Button from "./Button";

interface Img{
  img:string,
  head?:string,
  name?:string,
}
const ExampleCarouselImage = (props:Img) => {
  return (
    <div className=" relative">
        <img src={props.img} alt="img"/> 
        <div className="absolute top-44 left-20 text-center font-sans">
          <h3 className="text-xl text-slate-500 tracking-[.25em]">{props?.head}</h3>
          <h1 className="text-6xl">{props?.name}</h1>
          <Button text={"SHOP NOW"}/>
        </div>
    </div>
  )
}

export default ExampleCarouselImage;