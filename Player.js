class Player{
    constructor(){
        this.name=null;
        this.distance=0;
        this.index = null;
        this.Xposition = 0
        this.place = 0;
    }
    readCount(){
      var playerCountRef=database.ref('playerCount');
      playerCountRef.on("value",(data)=>{
          playerCount=data.val();
      }) 
    }
    updateCount(c){ 
     database.ref('/').update({
         'playerCount':c
     })   
    }

    update(){
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).set({
            'name':this.name,
            'distance': this.distance,
            'Xposition':this.Xposition,
            'place' :this.place
        })
    }
    static getPlayerInfo(){
      var playerInfoRef=database.ref("players");  
      playerInfoRef.on("value",(data)=>{
        allplayers=data.val();
      })

      
    }
    readFinishedPlayers(){
      var finishedPlayersRef=database.ref('finishedPlayers');
      finishedPlayersRef.on("value",(data)=>{
        finishedPlayers=data.val();
      })

    } 
    static updateFinishedPlayers(){
      database.ref('/').update({
        'finishedPlayers':finishedPlayers+1
      })
    }
}