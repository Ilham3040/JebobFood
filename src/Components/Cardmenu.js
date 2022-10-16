const Cardmenu = (props) => {
  return (
    <button className="border-gray-200 cursor-pointer border-2 shadow-lg rounded-xl focus:scale-105 lg:focus:scale-110 duration-500 my-3" onClick={() => props.open(props.nama,props.harga,props.img)}>
      <div className='p-3'>
        <img className='object-cover h-24 lg:h-40 max-h-40 w-full flex items-center' src={props.img} alt='200' srcset='' />
        <h1 className='text-2xl font-semibold'>{props.nama}</h1>
        <h2 className='text-lg font-light'>{props.harga}</h2>
      </div>
    </button>
  );
};

export default Cardmenu
