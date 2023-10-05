import RenderIf from 'components/util/render_if';

interface MenuCardProps {
    itemName: string;
    itemCode: string,
    itemDescription: string;
    isSelected: boolean;
    onSelected: Function;
}

interface PizzImageUrls {
        // sizes
    small: string;
    medium: string;
    large: string;
    // types
    deep_dish: string;
    thin_crust: string;
    stuffed_crust: string;
    // toppings
    italian_sausage: string;
    pepperoni: string;
    veggie: string;
}

const pizza_image_urls: PizzImageUrls = {
    // sizes
    small: '/images/small_pizza.webp',
    medium: '/images/medium_pizza.webp',
    large: '/images/large_pizza.webp',
    // types
    deep_dish: '/images/deep_dish_pizza.jpeg',
    thin_crust: '/images/thin_crust_pizza.jpeg',
    stuffed_crust: '/images/stuffed_crust_pizza.jpeg',
    // toppings
    italian_sausage: '/images/italian_sausage_pizza.jpeg',
    pepperoni: '/images/pepperoni_pizza.jpeg',
    veggie: '/images/veggie_pizza.jpeg'
};

const MenuCard = ({
    itemName,
    itemDescription,
    isSelected,
    onSelected,
    itemCode,
}: MenuCardProps): React.ReactElement => {
    console.log('isSelected: ', isSelected);

    return (
    <div className='flex sm:.m-1 items-center justify-center min-h-screen from-[#F9F5F3] via-[#F9F5F3] to-[#F9F5F3] bg-gradient-to-br px-2'>
        <div className='w-full max-w-md  mt-0 mb-0 bg-white rounded-3xl shadow-xl overflow-hidden'>
            <div className='max-w-md mx-auto'>
                <div className='h-[236px]' 
                    style={{
                        backgroundImage: `url(${pizza_image_urls[itemCode as keyof PizzImageUrls]})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                </div>
                 <div className='p-4 sm:p-6'>
                    <p className='font-bold text-gray-700 text-[22px] leading-7 mb-1'>{itemName}</p>
                    <p className='text-[#7C7C80] font-[15px] mt-6'>{itemDescription}</p>
                    <RenderIf condition={!isSelected}>
                        <button 
                            type="button" 
                            onClick={() => onSelected()}
                            className='block mt-10 w-full px-4 py-3 font-medium tracking-wide text-center capitalize transition-colors duration-300 transform bg-[#FFC933] rounded-[14px] hover:bg-[#FFC933DD] focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80'>
                            select
                        </button>
                    </RenderIf>
                    <RenderIf condition={isSelected}>
                            <button
                            type="button" 
                            disabled
                            className='block mt-10 w-full px-4 py-3 font-medium tracking-wide text-center capitalize bg-gray-400 rounded-[14px]'>
                                selected
                            </button>
                    </RenderIf>
                </div>
            </div>
        </div>
    </div>
    )
};

export default MenuCard;