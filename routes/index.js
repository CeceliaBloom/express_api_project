import express from "express";
import characterRouter from "./characters_routes";

const router = express.Router();

router.get("/test", (req, res, next) => {
  res.send("working");
});

router.use("/characters", characterRouter);

export default router;