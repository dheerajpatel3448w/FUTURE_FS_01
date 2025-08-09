import express from 'express';
import cors from 'cors';
import connectdb from './db/connectbd.js';
import Router1 from './routes/user.router.js';
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
     origin: ["https://devdheerajportfolio.vercel.app","http://localhost:5173"], // Vercel deployed link
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}))
app.use("/", Router1);

connectdb().then(()=>{
    console.log("Database connected successfully");

    app.listen(process.env.PORT || 5000, () => {
        console.log(`Server is running on port ${process.env.PORT || 5000}`);
    })
})