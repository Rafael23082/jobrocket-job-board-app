const verify = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (authHeader){
        const token = authHeader.split(" ")[1];
        jwt.verify(token, "mySecretKey", (err, user) => {
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