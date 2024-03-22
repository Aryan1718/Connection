const express = require('express')

const app = express()

const port = process.env.PORT || 9095

app.get('/',(req,res)=>{
    res.send("Hello welcome to backend part")
})

app.get('/api/getData',(req,res)=>{
    const movieDataWithId = [
        { "id": 1, "title": "The Shawshank Redemption", "director": "Frank Darabont", "year": 1994 },
        { "id": 2, "title": "The Godfather", "director": "Francis Ford Coppola", "year": 1972 },
        { "id": 3, "title": "The Dark Knight", "director": "Christopher Nolan", "year": 2008 },
        { "id": 4, "title": "Pulp Fiction", "director": "Quentin Tarantino", "year": 1994 },
        { "id": 5, "title": "Forrest Gump", "director": "Robert Zemeckis", "year": 1994 }
      ];
    
    res.send(movieDataWithId)
      
})

app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`)
})