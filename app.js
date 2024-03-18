import express from 'express'
import dotenv from 'dotenv'
dotenv.config()

const port = process.env.PORT || 3000

const app = express()

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('pages/home')
});



app.listen(port, () => {
          console.log(`Server up and running on port ${port}`);
});


