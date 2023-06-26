const Form = () => {
  return (
    <div className='flex justify-center bg-white rounded-xl'>
      {/* Enter the required filters from User OR simply randomize selection */}
      <form className='flex flex-col justify-center'>
        <label htmlFor='location'>Location</label>
        <input type='text' id='location' name='location' />
        <label htmlFor='price'>Price</label>
        <input type='text' id='price' name='price' />
        <label htmlFor='cuisine'>Cuisine</label>
        <input type='text' id='cuisine' name='cuisine' />
        <label htmlFor='rating'>Rating</label>
        <input type='text' id='rating' name='rating' />
        <label htmlFor='distance'>Distance</label>
        <input type='text' id='distance' name='distance' />
        <label htmlFor='open'>Open</label>
        <input type='text' id='open' name='open' />
      </form>
    </div>
  )
}

export default Form;