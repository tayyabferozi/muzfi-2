export function ShippingTable() {
  return (
    <table className='border-collapse border-spacing-0 [&_td]:border-stone-400/20 [&_td]:border'>
      <tr>
        <td className='flex items-start gap-2.5 py-4 px-2'>
          <input type='radio' name='shipping' id='flat' />
          <label htmlFor='flat' className=''>
            <p className='text-sm font-bold leading-tight '>
              Offer free shipping
            </p>
            <div className='text-[10px] font-bold'>
              Attract more buyers by offering to cover shipping! You can adjust
              the listing’s price to make up for the cost.
            </div>
          </label>
        </td>
        <td className='w-24 p-2 bg-blue-100'>
          <p className=' text-[10px] font-bold'>Best for</p>
          <p className=' text-[8px] font-bold'>Selling quickly</p>
        </td>
        <td className='w-24 p-2 bg-blue-100'>
          <p className=' text-[10px] font-bold'>Buyer sees</p>
          <p className=' text-[8px] font-bold'>Free Shipping</p>
        </td>
      </tr>
      <tr>
        <td className='flex items-start gap-2.5 py-4 px-2'>
          <input type='radio' name='shipping' id='free' />
          <label htmlFor='free' className=''>
            <p className='text-sm font-bold leading-tight '>
              Offer free shipping
            </p>
            <div className='text-[10px] font-bold'>
              Attract more buyers by offering to cover shipping! You can adjust
              the listing’s price to make up for the cost.
            </div>
          </label>
        </td>
        <td className='w-24 p-2 bg-blue-100'>
          <p className=' text-[10px] font-bold'>Best for</p>
          <p className=' text-[8px] font-bold'>Selling quickly</p>
        </td>
        <td className='w-24 p-2 bg-blue-100'>
          <p className=' text-[10px] font-bold'>Buyer sees</p>
          <p className=' text-[8px] font-bold'>Free Shipping</p>
        </td>
      </tr>
    </table>
  );
}
