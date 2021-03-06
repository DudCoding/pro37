class Contestant{
    constructor(){
        this.index = null;
        this.name= null; 
    }

    getCount(){
        var contestantCountRef = database.ref('contestantCount');
        contestantCountRef.on("value", (data)=>{
            contestantCount = data.val();
        })
    }

    updateCount(count){
        database.ref('/').update({
            contestantCount : count
        })
    }

    update(){
        var contestantIndex = "contestant/contestants" + this.index;
        database.ref(contestantIndex).set({
            name: this.name
        })
    }

    static getPlayerInfo(){
        var contestantInfoRef = database.ref('contestants');
        contestantInfoRef.on("value", (data)=>{
            allPlayers = data.val();
        })
    }
}