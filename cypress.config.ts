import { defineConfig } from "cypress";

export default defineConfig({
    video: false,

    e2e: {
        setupNodeEvents(on, config) {},
        supportFile: false,
        baseUrl: "http://localhost:3000",
    },
});
