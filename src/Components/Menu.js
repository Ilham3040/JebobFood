import { Food,Drink } from "../List"
import Cardmenu from "./Cardmenu"
import { useState } from "react"
import Modal from "./Modal"

const Menu = () => {
    const [Open, setOpen] = useState(false)
    const [Nama, setNama] = useState("Nama")
    const [Harga, setHarga] = useState("Harga")
    const [Image, setImage] = useState("Image")


    const OpenON = (Nama,Harga,Image) => {
        setOpen(true)
        setNama(Nama)
        setHarga(Harga)
        setImage(Image)

    }

    const OpenOFF = () => {
        setOpen(false)
    }

    return (
        <section className="my-32">
            {Open? <Modal close={OpenOFF} nama={Nama} harga={Harga} img={Image}I></Modal> : null }
            <h1 className="text-3xl font-bold text-center my-4">Menu Makanan</h1>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-2 mx-10">
                {Food.map((Food) => {
                    return (
                        <Cardmenu nama={Food.nama} img={Food.img} harga={Food.harga} open={OpenON}></Cardmenu>
                    )
                })}
                
            </div>
            <h1 className="text-3xl font-bold text-center my-4">Menu Minuman</h1>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-2 mx-10">
                {Drink.map((Drink) => {
                    return (
                        <Cardmenu nama={Drink.nama} img={Drink.img} harga={Drink.harga} open={OpenON}></Cardmenu>
                    )
                })}
                
            </div>
        </section>
    )
}

export default Menu