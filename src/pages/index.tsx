import { useEffect, useState } from 'react'
import { useNavbar } from '../context/NavbarContext'
import { getAllProducts } from '../services/product.service'

import Navbar from '../components/Layouts/Navbar'
import Button from '../components/Elements/Button'
import Footer from '../components/Layouts/Footer'
import CardProduct from '../components/Fragments/CardProduct'

const Home = () => {
  const {setIsShow, setIsLogin} = useNavbar()

  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])

  useEffect(() => {
    setIsShow(true)
    setIsLogin(true)
  }, [])

  useEffect(() => {
    getAllProducts().then(res => console.log(res))
  })

  return (
    <div className='' >
      <Navbar/>

      <div className="flex h-[85vh] bg-amber-50 relative">
        <img src="https://images.pexels.com/photos/8311889/pexels-photo-8311889.jpeg" alt="" className='w-full h-full object-[25%_70%] object-cover'/>
        <div className='absolute bg-white text-center p-5 rounded-xl top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[20%]'>
          <h1 className='text-4xl mb-5 text-left'>Ready to declutter you closet?</h1>
          <Button className='bg-slate-500 text-white w-full'>
            Shop Now
          </Button>
        </div>
      </div>

      <div className='flex justify-center py-5 w-4/5'>
        {/* {
          products.length > 0 && products.map((product) => (
            <div key={product.id}>
              {product.title}
            </div>
          ))
        } */}
        <CardProduct>
          <CardProduct.Header image="https://images.pexels.com/photos/34582998/pexels-photo-34582998.jpeg" />
          <CardProduct.Body title="Card title">
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </CardProduct.Body>
          <CardProduct.Footer price="$99.99"/>
        </CardProduct>
      </div>
      
      <Footer/>
    </div>
  )
}

export default Home