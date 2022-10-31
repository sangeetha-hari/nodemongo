import { client } from "./index.js";

export async function getAllMovies(req) {
  return await (await client.db('B37WD').collection('movies').find(req.query).toArray());
}
export async function getMovieByID(id) {
  return await client.db('B37WD').collection('movies').findOne({ id: id });
}
//function to query ---delete movies by ID
export async function deleteMovieById(id) {
  return await client.db('B37WD').collection('movies').deleteOne({ id: id });
};
//function to query the mongodb--- post operation
export async function addMovies(newMovies) {
  return await client.db('B37WD').collection('movies').insertMany(newMovies);
}

export async function updateMovieByID(id,updatedMovie) {
  return await client.db('B37WD').collection('movies').updateOne({id:id},{$set: updatedMovie})
}

