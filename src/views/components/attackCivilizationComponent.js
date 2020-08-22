const attack = (toID, fromID, teams) => {
    teams.forEach(attackFrom => {
        if(attackFrom._id === fromID){
            teams.forEach(attackTo => {
                if(attackTo._id === toID){
                    this.resultWarTie = false;
                    attackTo.attack.input.state = true;
                    attackTo.attack.input.from = attackFrom.civilization;
                    attackFrom.attack.output.state = true;
                    attackFrom.attack.output.to = attackTo.civilization;
                    if(attackFrom.points > attackTo.points){
                        attackFrom.points += 100;
                        this.higherPoint = [
                            attackTo.piqueros.score,
                            attackTo.arqueros.score,
                            attackTo.caballeros.score
                        ].sort();
                        this.higherPoint.forEach((discount, a) => {
                            if(a < 2){
                                switch (discount) {
                                    case attackTo.piqueros.score:
                                        attackTo.points = ((attackTo.points - attackTo.piqueros.score) < 0) 
                                        ? 0 : (attackTo.points - attackTo.piqueros.score);
                                        attackTo.piqueros.score = 0;
                                        attackTo.piqueros.set_soldier = 0;
                                        break;
                                    case attackTo.arqueros.score:
                                        attackTo.points = ((attackTo.points - attackTo.arqueros.score) < 0) 
                                        ? 0 : (attackTo.points - attackTo.arqueros.score);
                                        attackTo.arqueros.score = 0;
                                        attackTo.arqueros.set_soldier = 0;
                                    case attackTo.caballeros.score:
                                        attackTo.points = ((attackTo.points - attackTo.caballeros.score) < 0) 
                                        ? 0 : (attackTo.points - attackTo.caballeros.score);
                                        attackTo.caballeros.score = 0;
                                        attackTo.caballeros.set_soldier = 0;
                                    default:
                                        return false;
                                        break;
                                }
                            }
                        })
                        this.winnerWar = `Los ${attackFrom.civilization}  `;
                        this.loserWar = `Los ${attackTo.civilization}`;
                    }else if(attackFrom.points < attackTo.points){
                        attackTo.points += 100;

                        this.higherPoint = [
                            attackFrom.piqueros.score,
                            attackFrom.arqueros.score,
                            attackFrom.caballeros.score
                        ].sort();
                        this.higherPoint.forEach((discount, a) => {
                            if(a < 2){ 
                                switch (discount) {
                                    case attackFrom.piqueros.score:
                                        attackFrom.points = ((attackFrom.points - attackFrom.piqueros.score) < 0) 
                                        ? 0 : (attackFrom.points - attackFrom.piqueros.score);
                                        attackFrom.piqueros.score = 0;
                                        attackFrom.piqueros.set_soldier = 0;
                                        break;
                                    case attackFrom.arqueros.score:
                                        attackFrom.points = ((attackFrom.points - attackFrom.arqueros.score) < 0) 
                                        ? 0 : (attackFrom.points - attackFrom.arqueros.score);
                                        attackFrom.arqueros.score = 0;
                                        attackFrom.arqueros.set_soldier = 0;
                                        break;
                                    case attackFrom.caballeros.score:
                                        attackFrom.points = ((attackFrom.points - attackFrom.caballeros.score) < 0) 
                                        ? 0 : (attackFrom.points - attackFrom.caballeros.score);
                                        attackFrom.caballeros.score = 0;
                                        attackFrom.caballeros.set_soldier = 0;   
                                        break;
                                    default:
                                        return false;
                                        break;
                                }
                            }
                        })
                        this.winnerWar = `Los ${attackTo.civilization}`;
                        this.loserWar = `Los ${attackFrom.civilization}`;
                    }else if(attackFrom.points == attackTo.points){
                        attackFrom.points = ((attackFrom.points - attackFrom.caballeros.score) < 0) 
                        ? 0 : (attackFrom.points - attackFrom.caballeros.score);
                        attackFrom.caballeros.score = 0;
                        attackFrom.caballeros.set_soldier = 0;
                        attackTo.points = ((attackTo.points - attackTo.caballeros.score) < 0)
                        ? 0 : (attackTo.points - attackTo.caballeros.score);
                        attackTo.caballeros.score = 0;
                        attackTo.caballeros.set_soldier = 0;
                        this.winnerWar = `Los ${attackTo.civilization}`;
                        this.loserWar = `Los ${attackFrom.civilization}`;
                        this.resultWarTie = true;
                    }
                    this.attackToTeam = attackTo;
                    this.attackFromTeam = attackFrom;
                }
            })
        }
    });
    this.titleAttack = (`##################################################################\n Los ${this.attackFromTeam.civilization} atacaron a los ${this.attackToTeam.civilization}!!!\n##################################################################`).toUpperCase();
    this.resultWar = (this.resultWarTie) 
    ? `----------------------------------------\n########### Empate: ${this.winnerWar}\n########### Empate: ${this.loserWar}\n----------------------------------------\n`
    : `----------------------------------------\n########### Ganador: ${this.winnerWar}\n########### Perdedor: ${this.loserWar}\n----------------------------------------\n`;
    console.log(this.titleAttack);
    console.log(this.resultWar.toUpperCase(), [this.attackFromTeam, this.attackToTeam], '\n----------------------------------------');
    // console.log(this.higherPoint)
};

module.exports = attack;