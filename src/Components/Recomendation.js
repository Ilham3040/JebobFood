import Listcard from "./Listcard";
import {Food} from "../List";

const Recommendation = (props) => {
  const Foodrec = Food.slice(1,4)
  return (
    <div className='p-4 my-5'>
      <div className='ml-16 my-8 p-1 text-center font-bold text-3xl'>Recommendation</div>
      <div className='my-2 flex flex-col items-center w-full'>
        {Foodrec.map((Foodrec) => {
          return <Listcard nama={Foodrec.nama} harga={Foodrec.harga} image={Foodrec.img} Openorder={props.Openorder}></Listcard>;
        })}
      </div>
    </div>
  );
};

export default Recommendation;
