import app from "./app.js";

const PORT = process.env.PORT || 3000;

app.listen(PORT, (err) => {
    if(err) console.log(err);
    else console.log(`Servidor rodando no endereço http://localhost:${PORT}`)
})