module.exports = {
    verbose: true,
    preset: "ts-jest",
    testEnvironment: "jsdom",
    transform: {
        // "^.+\\.(js|jsx|ts|tsx|mjs)$": "ts-jest",
        "^.+\\.(ts|tsx)$": "ts-jest",
        "^.+\\.scss$": "jest-scss-transform",
        "node_modules/variables/.+\\.(j|t)s?$": "ts-jest",
        "node_modules/variables/.+\\.(j|t)s?$": "ts-jest",
    },
    // transformIgnorePatterns: ["node_modules/(?!variables/.*)"],
    moduleNameMapper: {
        // "^.+\\.(js|jsx|ts|tsx|mjs)$": "babel-jest",
        "^@/assets/svg/.*\\.svg$": "<rootDir>/src/__mocks__/svgrMock.ts",
        "^@/(.*)$": "<rootDir>/src/$1",
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
            "<rootDir>/src/__mocks__/fileMock.ts",
        "\\.(css|less)$": "<rootDir>/src/__mocks__/styleMock.ts",
    },
    testMatch: ["**/__tests__/**/*.+(ts|tsx|js)", "**/?(*.)+(spec|test).+(ts|tsx|js)"],
    setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
    collectCoverageFrom: ["**/*.{ts,tsx}", "!**/*.d.ts", "!**/node_modules/**", "!**/vendor/**"],
    coverageThreshold: {
        global: {
            branches: 100,
            functions: 100,
            lines: 100,
            statements: 100,
        },
    },
};
