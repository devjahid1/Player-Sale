import toast from "react-hot-toast"
export const getPlayers = () =>{
    let players = [];
    let storedPlayers = localStorage.getItem('players');
    if(storedPlayers){
        players = JSON.parse(storedPlayers)
    }
    return players;
}


const saveLocal = players =>{
    const playersStringified = JSON.stringify(players);
    localStorage.setItem('players', playersStringified);
    toast.success('Bhai Add kore felsi!')
}

//save
export const savePlayers = id =>{
    let players = getPlayers();
    players.push(id);
    saveLocal(players)

}


//delete
export const deletePlayers = id =>{
    let players = getPlayers();
    const remaining = players.filter(b => b.id !==id)
    localStorage.setItem('players', JSON.stringify(remaining));
    toast.success('Bhai Remove kore felsi!')

}