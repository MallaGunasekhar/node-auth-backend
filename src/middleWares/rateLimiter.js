import rateLimit from 'express-rate-limit'


// Limit for signup (strict)
export const signupRateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // 5 requests per IP
  message: {
    message: "Too many signup attempts. Try again later."
  },
  standardHeaders: true,
  legacyHeaders: false
});  
