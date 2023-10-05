'use client';
import MenuCard from 'components/menu_card';

export default function Page () {
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
            <div className="flex flex-row items-center px-2 md:px-0">
                <MenuCard />
                <MenuCard />
                <MenuCard />
            </div>
          </div>
        </div>
      </div>
    );
}
    