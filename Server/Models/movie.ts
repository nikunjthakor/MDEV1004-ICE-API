//Movie Model here

import { Collection, Schema, model } from 'mongoose';

// Movie interface 
interface IMovie 
{
    movieID: string,
    title: string,
    studio: string,
    genres: string[],
    directors: string[],
    writers: string[],
    actors: string[],
    year: number,
    length: number,
    shortDescription: string,
    mpaRating: string,
    criticsRating: number
}

// Movie schema 
let movieSchema = new Schema<IMovie>
({
    movieID: String,
    title: String,
    studio: String,
    genres: [String],
    directors: [String],
    writers: [String],
    actors: [String],
    year: Number,
    length: Number,
    shortDescription: String,
    mpaRating: String,
    criticsRating: Number
});


let Movie = model<IMovie>('Movie', movieSchema);

export default Movie;