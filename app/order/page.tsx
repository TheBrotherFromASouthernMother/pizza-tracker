'use client';
import { useState } from 'react';
import MenuCard from 'components/menu_card';
import RenderIf from 'components/util/render_if';


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
              <RenderIf condition={orderStep === 0}>
                <h3 className='font-bold text-4xl text-yellow-500 mt-2  '>Select a Pizza Type</h3>
                <div className="flex flex-row items-center px-2 md:px-0">
                <MenuCard 
                  itemName='Thin Crust'
                  itemCode="thin_crust"
                  isSelected={pizzaType === 'thin_crust'} 
                  itemDescription=" Perfect for a quick and satisfying meal, our small pizza is the ultimate treat for your taste buds."
                  onSelected={() => { setPizzaType('thin_crust')}}
                />
                <MenuCard 
                  itemName='Deep Dish'
                  itemCode="deep_dish"
                  isSelected={pizzaType === 'deep_dish'} 
                  itemDescription=" Perfect for a quick and satisfying meal, our small pizza is the ultimate treat for your taste buds."
                  onSelected={() => { setPizzaType('deep_dish')}}
                />
                <MenuCard 
                  itemName='Stuffed Crust' 
                  itemCode="stuffed_crust"
                  isSelected={pizzaType === 'stuffed_crust'} 
                  itemDescription=" Perfect for a quick and satisfying meal, our small pizza is the ultimate treat for your taste buds."
                  onSelected={() => { setPizzaType('stuffed_crust')}}
                />
              </div>
              </RenderIf>
            </div>
            <div className="flex flex-row items-center px-2 md:px-0">
              <button className='block mb-4 w-full px-4 py-3 font-medium tracking-wide bg-red-600'>
                <p className='text-[#F9F5F3] text-[17px] mr-2 line-through'>MVR 700</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
}
    