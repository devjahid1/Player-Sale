import { useEffect, useState } from "react";
import { deletePlayers, getPlayers } from "../../LocalStore/LocalStore";
import { RiDeleteBin5Line } from "react-icons/ri";

import { Link, Outlet, useLoaderData } from "react-router-dom";

const Fixture = () => {
    const [players, setPlayers] = useState([]);
    const plays = useLoaderData();

    useEffect(() => {
        const storedPlayers = getPlayers();
        if (plays.length > 0) {
            const buyPlayers = plays.map(play => storedPlayers.includes(play.id));
            setPlayers(storedPlayers);
        }
    }, []);

    const handleDelete = (id) => {
        deletePlayers(id);
        setPlayers(players.filter(player => player.id !== id));
    };
    
    return (
       
        <div className="lg:w-[1320px] m-auto">
            <div className="flex justify-between mt-10 items-center">
                <h3 className="text-[20px] font-bold">Selected Players: ({players.length}/6)</h3>
                <button className="flex justify-between items-center border border-solid w-[200px] border-gray-300">
                    <p className="text-[16px] bg-yellow-300 hover:bg-yellow-300 p-4">Available</p>
                    <p className="bg-white p-4 px-2">
                        Selected <span>{players.length}</span>
                    </p>
                    
                </button>
            </div>
            <div className="mt-10">
                {
                    players.map(playss =>
                        <div key={playss.id}>
                            <div className="flex justify-between items-center border border-solid border-gray-500 p-3 mb-5">
                                <div className="flex">
                                    <img className="w-[60px] rounded" src={playss.img} alt={playss.name} />
                                    <div className="ml-2">
                                        <h4 className="text-xl font-bold">{playss.name}</h4>
                                        <h4>{playss.handedness}</h4>
                                    </div>
                                </div>
                                <button onClick={() => handleDelete(playss.id)} className="btn btn-danger text-3xl text-red-500">
                                <RiDeleteBin5Line />
                                </button>
                            </div>
                        </div>
                    )
                }
            </div>
            <Link to='/'>
            <button className="btn text-black bg-yellow-300 hover:bg-yellow-300">Add More Players</button>
            </Link>
           
        </div>
    );
};

export default Fixture;
