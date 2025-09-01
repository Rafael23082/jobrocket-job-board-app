import jwt from "jsonwebtoken";

export const generateAccessToken = (payload) => {
    const accessToken = jwt.sign(payload, "mySecretKey", {expiresIn: "15m"});
    return accessToken;
}

export const generateRefreshToken = (payload) => {
    const refreshToken = jwt.sign(payload, "myRefreshSecretKey");
    return refreshToken;
}

export const refresh = (req, res) => {
    const refreshToken = req.cookies.refreshToken;

    if (!refreshToken){
        return res.status(401).json("You are not authenticated");
    }

    jwt.verify(refreshToken, "myRefreshSecretKey", (err, user) => {
        if (err){
            return res.status(500).json(err);
        }

        const newAccessToken = generateAccessToken(user);
        const newRefreshToken = generateAccessToken(user);

        return res.status(200).json({
            accessToken: newAccessToken,
            refreshToken: newRefreshToken
        })
    })
}