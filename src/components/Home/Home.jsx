import { useEffect, useState } from "react";
import Players from "../Players/Players";
import { savePlayers } from "../../LocalStore/LocalStore";

const Home = () => {
    const [players, setPlayers] = useState([]);

    const handleAddPlayers = players =>{
        savePlayers(players);
        
    }

    useEffect(() => {
        fetch('player.json')
            .then(res => res.json())
            .then(data => setPlayers(data))
            .catch(error => console.error('Error fetching players:', error));
    }, []);

    return (
        <div className="lg:w-[1320px] m-auto">
            <div className="flex justify-between mt-10 items-center">
                <h3 className="text-[20px] font-bold">Available Players</h3>
                <button className="flex justify-between items-center border border-solid w-[200px] border-gray-300">
                    <p className="text-[16px] bg-yellow-300 hover:bg-yellow-300 p-4">Available</p>
                    <p className="bg-white ">
                        Selected: <span>{players.length}</span>
                    </p>
                </button>
            </div>

            {/* Displaying players */}
            <div className="mt-6 lg:grid lg:grid-cols-3 gap-20 md:grid-cols-1 md:ml-[150px] lg:ml-0">
                {
                    players.map(player =><Players key={player.id} player={player} handleAddPlayers={handleAddPlayers}></Players>)
                }
            </div>
        </div>
    );
};

export default Home;
