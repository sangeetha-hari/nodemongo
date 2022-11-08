import express from "express";
import { genPassword, createNewUser, getUserByName } from "../helper.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import {auth} from "../middleware/auth.js"

const router = express.Router();

// post method to insert the user data
router.post("/signup", express.json(), async (req, res) => {
  const { username, password } = req.body;
  console.log(username, password);
  //Check username is present in Database, Validate the username is already present
  const isUserExist = await getUserByName(username);
  console.log(isUserExist);

  if (isUserExist) {
    // res.send({message: "User already present"})
    //Above will give error because send is twice
    res.status(400).send({ message: "User already present" });
    // return
  } else {
    if (
      !/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@!#%$]).{8,}$/g.test(password)
    ) {
      res.status(400).send({ message: "password pattern not matched" });
    }
    // if (!/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@!#%$]).{8,}$/g.test(password) )
    // {
    //   response.status(400).send({ message: "Password pattern does not match" });
    // }
    else {
      const hashedPassword = await genPassword(password);
      const result = await createNewUser(username, hashedPassword);
      console.log("this is in userRouter", hashedPassword);
      res.send(result);
    }
  }
});

//Login request
router.post("/login", express.json(), async (req, res) => {
  const { username, password } = req.body;
  console.log(username, password);
  //Check username is present in Database, Validate the username is already present
  const userFromDB = await getUserByName(username);
  console.log(userFromDB);
  //Error message if user not present in DB
  if (!userFromDB) {
    res.status(400).send({ message: "Invalid Credntials" });
    return;
  }
  //userFromDB is a object with username and password retrivied from DB
  const storePassword = userFromDB.password;
  //compare -> password given by user ----and----retrived from DB
  const isPasswordCorrect = await bcrypt.compare(password, storePassword);
  console.log(isPasswordCorrect);
  //if password doesnt match
  if (!isPasswordCorrect) {
    res.status(400).send({ message: "Invalid Credntials" });
  }

  //issue a token
  const token= jwt.sign({id:userFromDB._id},process.env.KEY);
  res.send({ message: "Login Succesfull", token: token });
});
export const usersRouter = router;
