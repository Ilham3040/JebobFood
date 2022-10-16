const Listcard = (props,Openorder) => {
  const nama = props.nama
  const harga = props.harga
  const image = props.image
  return (
    <>
      <button className='lg:w-2/3 w-5/6 border-gray-200 cursor-pointer border-2 shadow-lg rounded-xl focus:scale-105 lg:focus:scale-105 duration-500 flex flex-row my-3 justify-between' onClick={() => props.Openorder(props.nama,props.harga,props.image)}>
        <img className='w-32 object-cover aspect-video' src={props.image} alt='' />
        <div className='ml-8 flex flex-col w-5/6'>
          <h1 className='lg:ext-2xl text-lg font-semibold'>{props.nama}</h1>
          <p className='lg:text-lg text-base font-thin'>{props.harga}</p>
        </div>
      </button>
    </>
  );
};

export default Listcard;
