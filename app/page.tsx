'use client';
import Link from 'next/link'

export default function Page() {
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
            <div className="flex items-center flex-wrap px-2 md:px-0">
              <div className="relative lg:w-6/12 lg:py-24 xl:py-32">
                <h1 className="font-bold text-4xl text-yellow-900 md:text-5xl lg:w-10/12">Your favorite dishes, right at your door</h1>
                  <div className="lg:w-10/12">
                    <Link href="/orders" type="button" title="Start buying" className="mt-8 py-4 px-8 rounded-full text-center transition bg-gradient-to-b from-red-400 to-red-600 hover:to-yellow-300 active:from-red-400 focus:from-yellow-400 md:px-12">
                      <span className="hidden text-white-900 font-semibold md:block">
                        Order Now
                      </span>
                    </Link>
                    </div>
                    <p className="mt-8 text-gray-700 lg:w-10/12">Sit amet consectetur adipisicing elit. <a href="#" className="text-yellow-700">connection</a> tenetur nihil quaerat suscipit, sunt dignissimos.</p>
                </div>
                <div className="ml-auto -mb-24 lg:-mb-56 lg:w-6/12">
                    <img src="https://tailus.io/sources/blocks/food-delivery/preview/images/food.webp" className="relative" alt="food illustration" loading="lazy" width="4500" height="4500" />
                </div>
            </div>
          </div>
        </div>
      </div>
    )
  }