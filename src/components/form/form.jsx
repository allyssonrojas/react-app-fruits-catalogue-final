import React from "react";
import {useForm} from "react-hook-form"
import axios from "axios"
import "./style.css"

function FormFruit(){

    const {register, handleSubmit} = useForm();

    const saveFruit = async(data) =>{
        var fruitModel = {
            nameFruit : data.nameFruit,
            priceFruit : data.priceFruit
        }
        await axios.post(`/fruits`, fruitModel).catch(error =>{
            console.log(error)
        })
    }

    const onSubmitInsertFruit = (data) =>{
        saveFruit(data)
    }


    return(
        <div>
            <h1 className="tittle">Fruits Database</h1>
            <div className="all">
                <form className="form" onSubmit={handleSubmit(onSubmitInsertFruit)}>
                    <p>Insert the name and price of the fruit that you want to save on the database.</p>
                    <input className="input" type="text" placeholder="Fruit" {...register('nameFruit')}/>
                    <input className="input" type="text" placeholder="Price ($)" {...register('priceFruit')}/>
                    <button className="button">Save</button>
                    <img className="image" src="https://images.vexels.com/media/users/3/185260/isolated/preview/f2b5568bbcd5c2352a4a25c41fe194fb-plano-de-fruta-de-pi-ntilde-a-by-vexels.png" alt=""/>
                </form>
            </div>

        </div>
    )
}

export default FormFruit;