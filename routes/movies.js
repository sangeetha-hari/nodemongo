import express from "express";
import { getMovieByID, deleteMovieById, addMovies, getAllMovies,updateMovieByID } from "../helper.js";
const router = express.Router();

// app.get("/movies", (req,res)=>{res.send(movies)});
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  console.log(id);
  //db.movies.findOne({id:102})
  const movie = await getMovieByID(id);
  // const movie=movies.find((mv)=>mv.id==id)
  // res.send(movie);
  movie ? res.send(movie) : res.status(404).send({ message: "No movie found" });
});

// To delete
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  console.log(id);
  //db.movies.findOne({id:102})
  const movie = await deleteMovieById(id);
  // const movie=movies.find((mv)=>mv.id==id)
  res.send(movie);
});

//POST method to insert data
router.post("/", express.json(), async (req, res) => {
  const newMovies = req.body;
  console.log(newMovies);
  const result = await addMovies(newMovies);
  res.send(result);
});

// querysearch
router.get("/", async (req, res) => {
  // const {name,language,rating,}= req.query
  console.log(req.query);
  if (req.query.rating) {
    req.query.rating = +req.query.rating;
  }
  // const movie1=[];
  const movies = await getAllMovies(req);
  // {
  //   filtermovies= filtermovies.filter((mv)=>mv.name==name);
  // }
  // if(language)
  // {
  //   filtermovies= filtermovies.filter((mv)=>mv.language==language);
  // }
  // if(rating)
  // {
  //   filtermovies= filtermovies.filter((mv)=>mv.rating==rating);
  // }
  res.send(movies);
});

//Update a movie by Id
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  console.log(id);
  const updatedMovie=req.body;
  console.log(updatedMovie);
  //db.movies.updatedOne({id:102})
  const result = await updateMovieByID(id, updatedMovie);
  // const movie=movies.find((mv)=>mv.id==id)
  res.send(result);
});

export const moviesRouter=router;