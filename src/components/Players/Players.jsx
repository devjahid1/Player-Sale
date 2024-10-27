import { Link } from "react-router-dom";

const Players = ({ player, handleAddPlayers }) => {
    const { name, country, img, rating, price, id } = player;

    return (
        
        <div className="card bg-base-100 w-96 shadow-xl ">

            <div className="rounded">
            <figure>
                <img src={img} alt={name} className="w-full h-48 object-cover" />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-xl font-semibold">{name}</h2>
                
                <div className="flex justify-between mt-2">
                    <h5 className="text-gray-600">{country}</h5>
                    <h3 className="text-gray-600">All-Rounder</h3>
                </div>
                
                <div className="flex justify-between mt-2">
                    <h3 className="font-medium">Rating</h3>
                    <h4>{rating}</h4>
                </div>
                
                <div className="flex justify-between mt-2 items-center">
                    <h5 className="btn font-medium">Price: {price}</h5>
                    <Link onClick={()=>handleAddPlayers(player)} className="btn bg-gray-300 p-2 rounded">Choose Player</Link>
                </div>
            </div>
            </div>

        </div>
    );
};

export default Players;
