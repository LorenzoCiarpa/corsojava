const express = require('express');
const authController = require('../controllers/authController');

const router = express.Router();


router.get("/", authController.authControllerOne)

router.get("/test", authController.authControllerTwo)



// router.get("/getMessage/:name/:surname", authController.getNormalMessage);

// router.post("/getJson", authController.getJson);

// router.get("/getHtml", authController.getHtml);

// router.get("/getHtmlView", authController.getHtmlView);

// router.post("/clearCookies", authController.clearCookies)











  
//   router.post("/api", (req, res, next) => {
  
//     console.log("Rotta Post")
//     res.status(200).send("Rotta Post")
//     return;
//   })
  
//   router.put("/api", (req, res, next) => {
  
//     console.log("Rotta Put")
//     res.status(200).json({response: "Rotta Put"})
//     return;
//   })
  
//   router.patch("/api", (req, res, next) => {
  
//     console.log("Rotta patch")
//     res.status(200).json({response: "Rotta patch"})
//     return;
//   })
  
//   router.delete("/api", (req, res, next) => {
  
//     console.log("Rotta Delete")
//     res.status(200).json({response: "Rotta Delete"})
//     return;
//   })
  
  



// router.post("/checkAccountSigned", authController.login);


module.exports = router;