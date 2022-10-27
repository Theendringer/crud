import express from "express"
import { getUsers, addSala, updateSala, deleteSala } from "..//controllers/user.js"

const router = express.Router()

router.get("/", getUsers)

router.post("/", addSala)

router.put("/:id", updateSala)

router.delete("/:id", deleteSala)


export default router