import express from 'express';
const router = express.Router();

import { DisplayMovieList,DisplayMovieById, AddMovie, UpdateMovie, DeleteMovie } from '../Controllers/movie';
import passport from 'passport';


/* Endpooint */

router.get('/list', function(req, res, next) {  DisplayMovieList(req, res, next); });

/* GET Movie by ID. */
router.get('/:id', (req, res, next) => {  DisplayMovieById(req, res, next); });

/* Add New Movie */
router.post('/add',  passport.authenticate('jwt', {session: false}), (req, res, next) => {  AddMovie(req, res, next); });

/* Update Movie */
router.put('/update/:id',  passport.authenticate('jwt', {session: false}), (req, res, next) => {  UpdateMovie(req, res, next); });

/* Delete Movie */
router.delete('/delete/:id',  passport.authenticate('jwt', {session: false}), (req, res, next) => {  DeleteMovie(req, res, next); });


export default router;
