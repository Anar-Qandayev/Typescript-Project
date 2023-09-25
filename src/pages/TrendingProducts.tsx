import CardTP from '../components/CardTP'

const TrendingProducts = () => {
  return (
    <div className='w-full flex flex-col items-center justify-center '>
        <h1 className=' text-4xl'>TRENDING PRODUCTS</h1>
        <div className=' w-40 h-[0.7px] m-7 bg-red-600 px-10 flex items-center justify-evenly opacity-90'>
            <div className='w-3 h-3 bg-red-600 opacity-90'></div>
            <div className='w-3 h-3 bg-red-600 opacity-90'></div>
            <div className='w-3 h-3 bg-red-600 opacity-90'></div>
            <div className='w-3 h-3 bg-red-600 opacity-90'></div>
        </div>
        <div>
            <CardTP/>
        </div>
    </div>
  )
}

export default TrendingProducts