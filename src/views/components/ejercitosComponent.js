const uniqid  = require('uniqid');
class Ejercito {
    constructor(civilization, coins, color, piqueros, arqueros, caballeros, points, attack, _id){
        this._id = uniqid();
        this.civilization = '',
        this.coins = {
            default: 1000,
            set_coins: false
        },
        this.piqueros = {
            default: 5,
            set_soldier: false,
            transformation: false,
            score: 5,
            attack: {
                input: {
                    state: false,
                    from: false
                },
                output: {
                    state: false,
                    to: false
                }
            }
        },
        this.arqueros = {
            default: 3,
            set_soldier: false,
            transformation: false,
            score: 10,
            attack: {
                input: {
                    state: false,
                    from: false
                },
                output: {
                    state: false,
                    to: false
                }
            }
        },
        this.caballeros = {
            default: 3,
            set_soldier: false,
            transformation: false,
            score: 20,
            attack: {
                input: {
                    state: false,
                    from: false
                },
                output: {
                    state: false,
                    to: false
                }
            }
        },
        this.attack = {
            input: {
                state: false,
                from: false
            },
            output: {
                state: false,
                to: false
            }
        },
        this.points = 0
    }
}



module.exports = Ejercito;