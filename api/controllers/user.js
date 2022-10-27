import { response } from "express"
import { db } from "../db.js"


export const getUsers = (_, res) => {
    const q = "SELECT * FROM salas"

    db.query(q, (err, data) => {
        if (err) return res.json(err)

        return res.status(200).json(data)
    })


}


export const addSala = (req, res) => {
    const q =
        "INSERT INTO salas(`nome`, `codigo`, `descricao`) VALUES(?)"

    const values = [
        req.body.nome,
        req.body.codigo,
        req.body.descricao,
    ]

    db.query(q, [values], (err) =>{
        if (err) return res.json(err)

        return res.status(200).json("Sala criada com sucesso!")
    })
}


export const updateSala = (req, res) =>{
    const q = 
    "UPDATE sala SET `nome` = ?, `codigo` = ?, `descricao` = ? WHERE `id` = ?"

    const values = [
        req.body.nome,
        req.body.codigo,
        req.body,descricao,
    ]

    db.query(q, [...values, req.params.id], (err) => {
        if (err) return res.json(err)

        return res.status(200).json("Sala editada com sucesso!")
    })
}


export const deleteSala = (req, res) => {
    const q = "DELETE FROM salas WHERE `id` = ?"

    db.query(q, [res.params.id], (err) =>{
        if (err) return res.json(err)
        
        return res.status(200).json("Sala deleltada com sucesso!")
    })
}