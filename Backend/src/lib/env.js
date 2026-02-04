const ENV = {
  JWT_SECRET: process.env.JWT_SECRET || "supersecretkey",
  CLIENT_URL: process.env.CLIENT_URL || "http://localhost:5173",
  NODE_ENV: process.env.NODE_ENV || "development",
};

export default ENV;
