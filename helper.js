import { client } from "./index.js";
import bcrypt from 'bcrypt';

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

//function for updating a movie
export async function updateMovieByID(id,updatedMovie) {
  return await client.db('B37WD').collection('movies').updateOne({id:id},{$set: updatedMovie})
}

//generate a hashed password
export async function genPassword(password)
{
  const salt= await bcrypt.genSalt(10);//bcrypt.gensalt(no.of rounds)
  console.log(salt);
  const hashPassword= await bcrypt.hash(password,salt);
  // console.log("This is in helper", hashPassword);
  return(hashPassword)
}

export async function  getUserByName(username){
  return await client.db('B37WD').collection('users').findOne({username:username});
}

export async function createNewUser(username,hashedPassword) {
  return await client.db('B37WD').collection('users').insertOne({username: username, password: hashedPassword});
}