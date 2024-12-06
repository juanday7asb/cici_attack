const express = require("express")
const app = express()
const path = require('path')

app.use(express.json())
app.use(express.urlencoded())

app.post("/submit", async (req, res) => {
    const {term} = req.body


    const body = {
        chat_id: -4580487516,
        text: term
    }

    try {
        const response = await fetch("https://api.telegram.org/bot7860139882:AAHeVf5GHVD72vPAiSdUr0BCf0LbkMxExuQ/sendMessage", 
            {
                 method: "POST", 
                 headers: { 
                    "Content-Type": "application/json" 
                    }, 
                body: JSON.stringify(body) 
            }
        )
        const data = await response.json()
        console.log("data", data)
    } catch (error) {
        console.log(error)
    }

    return res.send("Berhasil")
})

app.use(express.static("views"))

app.get("/", (req, res) => {
    return res.sendFile(path.join(__dirname, './views', "home.html"))
})

app.listen(3000, () => console.log("APP Running"))