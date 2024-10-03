const corsOptions = {
  origin: [
    "http://localhost:5173",
    "http://localhost:4173",
    process.env.CLIENT_URL,
    "https://frontend-chatapp-liard.vercel.app",
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};

const GUPSHAP_TOKEN = "gupshap-token";

export { corsOptions, GUPSHAP_TOKEN };
