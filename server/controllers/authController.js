import jwt from "jsonwebtoken";

export const generateAccessToken = (payload) => {
    const accessToken = jwt.sign(payload, "mySecretKey", {expiresIn: "15m"});
    return accessToken;
}

export const generateRefreshToken = (payload) => {
    const refreshToken = jwt.sign(payload, "myRefreshSecretKey", {expiresIn: "7d"});
    return refreshToken;
}

export const refreshToken = (req, res) => {
    const refreshToken = req.cookies.refreshToken;
    const payload = jwt.verify(refreshToken, "myRefreshSecretKey");
    
    const newPayload = {
        id: payload.id,
        role: payload.role
    }

    const newAccessToken = generateAccessToken(newPayload);
    const newRefreshToken = generateRefreshToken(newPayload);

    res.cookie("accessToken", newAccessToken, {
        httpOnly: true,
        secure: true, /** secure: true if in production (false only for development only) */
        sameSite: "none", /** sameSite: lax if in production (none only for development only) (due to backend and frontend and backend running in different origin) */
        maxAge: 15 * 60 * 1000 /** 15 * 60 * 1000 */
    })

    res.cookie("refreshToken", newRefreshToken, {
        httpOnly: true,
        secure: true, /** secure: true if in production (false only for development only) */
        sameSite: "none", /** sameSite: lax if in production (none only for development only) (due to backend and frontend and backend running in different origin) */
        maxAge: 7 * 24 * 60 * 60 * 1000
    })

    return res.status(200).json("Tokens refreshed.");
}