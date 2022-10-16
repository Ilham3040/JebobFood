const Modal = (props) => {
  return (
    <div className='fixed top-0 left-0 w-full h-full bg-transparent z-30 flex items-center justify-center' onClick={props.close}>
      <div className='bg-white border-gray-200 shadow-lg shadow-gray-300 rounded-lg w-2/3' onClick={(e) => {e.stopPropagation()}}>
        <div className='w-full flex flex-col justify-center items-center p-4'>
          <img className='object-cover h-96 w-full' src={props.img} alt='' />
          <div className='flex flex-col justify-center items-center'>
            <h2 className='text-2xl font-semibold'>{props.nama}</h2>
            <h3 className='text-lg font-light'>{props.harga}</h3>
          </div>
          <button className='bg-green-500 focus:scale-x-105 focus:bg-green-600 duration-500 text-white text-center w-5/6 p-2 text-xl rounded-full'>Order via GO-JEK</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
