import jwt from "jsonwebtoken";

export const verify = (req, res, next) => {
    const accessToken = req.cookies.accessToken;
    if (accessToken){
        jwt.verify(accessToken, "mySecretKey", (err, user) => {
            if (err){
                return res.status(401).json("Token is invalid.");
            }

            req.user = user;
            next();
        })
    }else{
        res.status(401).json("You are not authenticated");
    }
}