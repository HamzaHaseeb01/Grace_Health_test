import express from 'express';
import {GetLeagueSeasonPairs,GetSpecificLeaguePair} from '../services/main';
const router=express.Router();

router.get('/league/season/pairs',GetLeagueSeasonPairs);
router.get('/specific/league/:league/season/:season/pair',GetSpecificLeaguePair)
export default router;