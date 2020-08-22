const storeOfPowers = require('./storeOfPowersComponent');
const { setPoints } = require('./createEjercitos');

const transformation = (id, soldier, teams) => {
    teams.forEach((group, i) => {
        if(group._id === id){
            storeOfPowers.forEach(unityBuy => {
                if(unityBuy.type_unity === soldier){
                    this.verifyAmountEquation = ((!group.coins.set_coins)) ? (group.coins.default - unityBuy.amount) : (group.coins.default - unityBuy.amount);
                    this.verifyAmount = (this.verifyAmountEquation >= 0) ? true : false;
                    group.coins.set_coins = ((!group.coins.set_coins)) ? (group.coins.default - unityBuy.amount) : (group.coins.default - unityBuy.amount)
                    if(group.coins.set_coins >= unityBuy.transformation.amount){
                        group[soldier].transformation = unityBuy.transformation.type_unity;
                    }
                    group[soldier].score += unityBuy.points;
                    setPoints();
                    console.log(`---------- Transformation for ${group.civilization} ----------\n`, group, '\n------------ End transformation -----------');
                }
            })
        }
    })
}

module.exports = transformation;