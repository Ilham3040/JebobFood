import Carousel from "../Carousel";
import Recommendation from "../Recomendation";
import MostLiked from "../Most Liked";
import Modal from "../Modal";
import { useState } from "react";


const Home = () => {


  const [Order, setOrder] = useState(false)

  const Closeorder = () => {
    setOrder(false)
  }

  const [Nama, setNama] = useState('nama');
    const [Harga, setHarga] = useState('harga');
    const [Image, setImage] = useState('image');

  const Openorder = function(nama,harga,image){
    setOrder(true)
    setNama(nama)
    setHarga(harga)
    setImage(image)
    
  }

  return (
    <div>
      {Order? <Modal close={Closeorder} img={Image} nama={Nama} harga={Harga}></Modal>: null}
      <Carousel></Carousel>
      <Recommendation Openorder={Openorder}></Recommendation>
      <MostLiked Openorder={Openorder}></MostLiked>
    </div>
  );
};

export default Home;
