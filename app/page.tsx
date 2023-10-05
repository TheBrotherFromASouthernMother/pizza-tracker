'use client';

export default function Page() {
    const handleOrder = async (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();

      const response = await fetch('/orders', {
        method: 'POST',
        mode: 'cors',
      });
    };

    return (
      <div>
      <h1>Next.js!</h1>
      <button onClick={(e) => handleOrder(e)}>
        <p>
          Order Now
        </p>
      </button>
      </div>
    )
  }