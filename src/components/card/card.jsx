import React,{useState, useEffect} from "react"
import "./style.css"
import axios from "axios"

function CardFruit(){

    const[fruits, setFruits] = useState([]);
   

    const getAllFruits = async() =>{
        axios.get(`/fruits`).then((response) =>{
            console.log(response)
            console.log(response.data)
            setFruits(response.data)
        }) 
    }

    const deleteFruitById = async(idFruit) =>{
        await axios.delete(`/fruits/${idFruit}`)
        .then((response) =>{
            console.log(response)
        })
        console.log(idFruit)
    }
    useEffect(() =>{
        getAllFruits()
    },[])



    return(
        <div className="formm">
            {fruits.map((particularFruit) =>(
                <div className="particularCard" key={particularFruit.idFruit}>
                <h1 className="titlee">Description</h1>
                <div className="informationn">
                    <p className="namee">Name :</p>
                    <p className="nameFruitt">{particularFruit.nameFruit}</p>
                    <p className="pricee">Price :</p>
                    <p className="priceFruitt">{particularFruit.priceFruit}</p>
                    
                    <button className="buttonn">Update</button>
                    <button 
                    type="submit"
                    className="buttonn" 
                   
                    onClick={(e) =>deleteFruitById(particularFruit.idFruit)}
                    >Delete</button>
                   
                    {/* <form onSubmit={handleSubmit(deletFruitById)}>
                    <button 
                    className="buttonn" 
                    value={particularFruit.idFruit}
                    {...register("idFruit")}
                    >Delete</button>
                    </form> */}
                </div>
                </div>
            ))}
            
        </div>
    )
}

export default CardFruit;