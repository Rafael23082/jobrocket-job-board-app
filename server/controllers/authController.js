import jwt from "jsonwebtoken";

export const generateAccessToken = (payload) => {
    const accessToken = jwt.sign(payload, "mySecretKey", {expiresIn: "15m"});
    return accessToken;
}

export const generateRefreshToken = (payload) => {
    const refreshToken = jwt.sign(payload, "myRefreshSecretKey");
    return refreshToken;
}