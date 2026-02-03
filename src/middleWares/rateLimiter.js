import rateLimit from 'express-rate-limit'
import jwt from 'jsonwebtoken'
const JWT_SECRET=process.env.JWT_SECRET || 'MUsecrteJDHGDHGC'
// Limit for signup (strict)
export const signupRateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10, // 5 requests per IP
  message: {
    message: "Too many signup attempts. Try again later."
  },
  standardHeaders: true,
  legacyHeaders: false
});  

export const generateToken=(payload)=>{
  console.log(payload,'token payload')
  const token=jwt.sign(payload,JWT_SECRET,{expiresIn:'1hr'})
  return token
  
}
export const verifyJWT = (req, res, next) => {
  const authHeader = req.headers.authorization;

  // Expect: "Bearer token"
  if (!authHeader) {
    return res.status(401).json({ message: 'No token provided' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded; // attach user info to request
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Invalid or expired token' });
  }
};