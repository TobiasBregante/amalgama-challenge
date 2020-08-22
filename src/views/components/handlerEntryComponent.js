const express = require('express'),
app = express(),
transformation = require('./addPowerToUnityComponent');
const { collectionEjercitos } = require('./createEjercitos');
const attack = require('./attackCivilizationComponent');

// ###### title: Soldiers Powershop. ######

// 1. select your soldier ID to modified.
const ChinosId = '4nl4oy0kdxi93q9',
InglesesId = '4nl4oy0kdxi93qa',
BizantinosId = '4nl4oy0kdxi93qb';
/*###################################################################*/
// 2. select your soldier to modified.
const piquero = 'piqueros',
arquero = 'arqueros',
caballero = 'caballeros';
/*###################################################################*/
// 3. ######## CONFIGURE YOUR BUY ########. 
const id = BizantinosId,
soldier = arquero,
teams = collectionEjercitos;
/*###################################################################*/
// 5. ########### ACTIONS OF THE TEAM/EJÉRCITO ############
const fromID = InglesesId,
toID = InglesesId;
/*###################################################################*/
attack(toID, fromID, teams); // attack to other civilization/team
/*###################################################################*/
transformation(id, soldier, teams); // buy powers and points, among others.
/*###################################################################*/
// view collection of teams/Ejércitos
// console.log('--------------- Ejércitos ---------------\n', collectionEjercitos, '\n--------------- End Ejércitos ---------------')