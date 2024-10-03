const corsOptions = {
  origin: [

    'https://frontend-chatapp-eta.vercel.app',
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};

const GUPSHAP_TOKEN = "gupshap-token";

export { corsOptions, GUPSHAP_TOKEN };
