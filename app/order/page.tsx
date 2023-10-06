'use client';
import { useState } from 'react';
import MenuCard from 'components/menu_card';
import RenderIf from 'components/util/render_if';
import OrderForm from 'components/OrderForm';

export default function Page () {
    const [pizzaType, setPizzaType] = useState<string>('');
    const [pizzaSize, setPizzaSize] = useState<string>('');
    const [pizzaToppings, setPizzaToppings] = useState<string>('');
    const [orderStep, setOrderStep] = useState<number>(0);


    const handleOrder = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
  
        const response = await fetch('/orders', {
          method: 'POST',
          mode: 'cors',
        });
      };

    return (
        <div className="relative w-full">
        <div className="relative bg-yellow-50">
          <div className="container m-auto px-6 pt-32 md:px-12 lg:pt-[4.8rem] lg:px-7">
            <div className="my-4">
             <h1 className="font-bold text-4xl text-yellow-900 md:text-5xl lg:w-10/12">Build your own Pizza!</h1>
            </div>
            <div className='container from-[#F9F5F3] via-[#F9F5F3] to-[#F9F5F3] bg-gradient-to-br'>
              <OrderForm />
              
  
              <RenderIf condition={orderStep === 0}>
                <h3 className='font-bold text-4xl text-yellow-500 mt-2  '>Select a Pizza Type</h3>
                <div className="flex flex-row items-center px-2 md:px-0">
                <MenuCard 
                  itemName='Thin Crust'
                  itemCode="thin_crust"
                  isSelected={pizzaType === 'thin_crust'} 
                  itemDescription="Experience pizza in its purest form with our Thin Crust Pizza! Our artisanal dough is rolled out to perfection, creating a whisper-thin, crispy foundation for your pizza masterpiece."
                  onSelected={() => { setPizzaType('thin_crust')}}
                />
                <MenuCard 
                  itemName='Deep Dish'
                  itemCode="deep_dish"
                  isSelected={pizzaType === 'deep_dish'} 
                  itemDescription="Dive into a world of indulgence with our Deep Dish Pizza! This culinary masterpiece redefines pizza with its thick, golden-brown crust that cradles a symphony of flavors. Our secret family recipe creates a unique, buttery, and flaky crust that's both crunchy and melt-in-your-mouth tender."
                  onSelected={() => { setPizzaType('deep_dish')}}
                />
                <MenuCard 
                  itemName='Stuffed Crust' 
                  itemCode="stuffed_crust"
                  isSelected={pizzaType === 'stuffed_crust'} 
                  itemDescription="Experience pizza innovation like never before with our Stuffed Crust Pizza! We've taken the classic pizza and added a mouthwatering twist. Our artisanal dough is lovingly prepared, then filled with a generous layer of premium cheese, creating a luscious and indulgent stuffed crust."
                  onSelected={() => { setPizzaType('stuffed_crust')}}
                />
              </div>
              <div className="flex flex-row items-center px-2 md:px-0">
                <RenderIf condition={pizzaType === ''}>
                <button
                  type="button" 
                  disabled
                  className='block mt-10 w-full px-4 py-3 font-medium tracking-wide text-center capitalize bg-gray-400 rounded-[14px]'>
                      Add to order
                  </button>
                  </RenderIf>
                  <RenderIf condition={pizzaType !== ''}>
                    <button
                        onClick={() => setOrderStep(orderStep + 1)} 
                        className='block mb-4 w-full px-4 py-3 font-medium tracking-wide bg-red-600 rounded-[14px]'
                      >
                      <p className='text-[#F9F5F3] text-[17px] mr-2'>Add to order</p>
                    </button>
                  </RenderIf>
              </div>
              </RenderIf>

              <RenderIf condition={orderStep === 1}>
                <h3 className='font-bold text-4xl text-yellow-500 mt-2  '>Select a Pizza Size</h3>
                <div className="flex flex-row items-center px-2 md:px-0">
                <MenuCard 
                  itemName='Small'
                  itemCode="small"
                  isSelected={pizzaSize === 'small'} 
                  itemDescription=" Perfect for a quick and satisfying meal, our small pizza is the ultimate treat for your taste buds."
                  onSelected={() => { setPizzaSize('small')}}
                />
                <MenuCard 
                  itemName='Medium' 
                  itemCode="medium"
                  isSelected={pizzaSize === 'medium'} 
                  itemDescription="Experience pizza perfection with our Medium Pizza! Whether you're a fan of classic combinations or craving something unique, our medium pizza is the ideal choice."
                  onSelected={() => { setPizzaSize('medium')}}
                />
                <MenuCard 
                  itemName='Large'
                  itemCode="large"
                  isSelected={pizzaType === 'large'} 
                  itemDescription="A culinary masterpiece designed for sharing and savoring! Whether you're gathering with family, hosting a party, or simply craving an extra-large slice of heaven, our large pizza is the ultimate choice."
                  onSelected={() => { setPizzaSize('large')}}
                />
              </div>
              <div className="flex flex-row items-center px-2 md:px-0">
                <RenderIf condition={pizzaSize === ''}>
                <button
                  type="button" 
                  disabled
                  className='block mt-10 w-full px-4 py-3 font-medium tracking-wide text-center capitalize bg-gray-400 rounded-[14px]'>
                      Add to order
                  </button>
                  </RenderIf>
                  <RenderIf condition={pizzaSize !== ''}>
                    <button
                        onClick={() => setOrderStep(orderStep + 1)} 
                        className='block mb-4 w-full px-4 py-3 font-medium tracking-wide bg-red-600 rounded-[14px]'
                      >
                      <p className='text-[#F9F5F3] text-[17px] mr-2'>Add to order</p>
                    </button>
                  </RenderIf>
              </div>
              </RenderIf>

              <RenderIf condition={orderStep === 2}>
                <h3 className='font-bold text-4xl text-yellow-500 mt-2  '>Select a toppings</h3>
                <div className="flex flex-row items-center px-2 md:px-0">
                <MenuCard 
                  itemName='Italian Sausage'
                  itemCode="italian_sausage"
                  isSelected={pizzaToppings === 'italian_sausage'} 
                  itemDescription="Elevate your pizza experience with the bold and savory flavor of Italian Sausage. Our premium, seasoned sausage is the perfect topping to transform your pizza into a culinary delight."
                  onSelected={() => { setPizzaToppings('italian_sausage')}}
                />
                <MenuCard 
                  itemName='Pepperoni' 
                  itemCode="pepperoni"
                  isSelected={pizzaToppings === 'pepperoni'} 
                  itemDescription="Experience the timeless classic with our Pepperoni topping! Delight in the irresistible combination of thinly sliced, spicy pepperoni that's expertly placed on our pizza. Each bite bursts with bold, zesty flavor, adding a perfect balance of heat and richness to every slice."
                  onSelected={() => { setPizzaToppings('pepperoni')}}
                />
                <MenuCard 
                  itemName='Veggie'
                  itemCode="veggie"
                  isSelected={pizzaToppings === 'veggie'} 
                  itemDescription="Elevate your pizza to a fresh and flavorful level with our Veggie topping! Bursting with vibrant colors and natural goodness, our assortment of farm-fresh vegetables adds a healthy and delicious twist to your pizza."
                  onSelected={() => { setPizzaToppings('veggie')}}
                />
              </div>
              <div className="flex flex-row items-center px-2 md:px-0">
                <RenderIf condition={pizzaToppings === ''}>
                <button
                  type="button" 
                  disabled
                  className='block mt-10 w-full px-4 py-3 font-medium tracking-wide text-center capitalize bg-gray-400 rounded-[14px]'>
                      Add to order
                  </button>
                  </RenderIf>
                  <RenderIf condition={pizzaToppings !== ''}>
                    <button
                        onClick={() => setOrderStep(orderStep + 1)} 
                        className='block mb-4 w-full px-4 py-3 font-medium tracking-wide bg-red-600 rounded-[14px]'
                      >
                      <p className='text-[#F9F5F3] text-[17px] mr-2'>Add to order</p>
                    </button>
                  </RenderIf>
              </div>
              </RenderIf>

              
            </div>
          </div>
        </div>
      </div>
    );
}
    