import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title, {} from '../components/Title'

export default function Orders() {

  const {products, currency} = useContext(ShopContext)


  return (
    <div>
      <div>
        <Title text1={'My'} text2={'Orders'} />
      </div>
      <div>
        {
          products.slice(1,4).map((item, index) => (
            <div key={index} >
              <div>
                <img src={item.image[0]} alt="" />
                <div>
                  <p>{item.name} </p>
                  <div>
                    <p>{currency}{item.price} </p>
                    <p>Quantity: 1</p>
                    <p>Size: Large</p>
                  </div>

                  <p>Date: <span>25th August, 2025</span></p>
                </div>
              </div>
              <div>
                <div>
                  <p className='min-w-2 h-2 rounded-full bg-green-500' ></p>
                  <p>Ready to ship</p>
                </div>
                <button>Track Order</button>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}
