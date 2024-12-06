const express = require("express")
const app = express()

app.post("/submit", async (req, res) => {
    console.log(req.body)
    // const {term} = req.body

    const body = {
        chat_id: -4580487516,
        text: "term"
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
    return res.send("Hello")
})

app.listen(3000, () => console.log("APP Running"))