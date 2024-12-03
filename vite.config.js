import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import dotenv from "dotenv"
dotenv.config() // Load environment variables from .env file
export default defineConfig({
  plugins: [react()],
  define: {
    "process.env.REACT_APP_API_URL": JSON.stringify(
      process.env.REACT_APP_API_URL
    ),
  },
  alias: {
    axios: "axios",
  },
})