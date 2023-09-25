import "../styles/index.css"
interface Btn{
  text:string,
}

const Button = (props:Btn) => {
  return (  
      <button  
        className=" w-36 h-12 border-2 border-solid border-dark-orange duration-500 font-bold hover:bg-dark-orange hover:text-white mt-6 ">
        {props.text}
      </button>  
  )
}

export default Button