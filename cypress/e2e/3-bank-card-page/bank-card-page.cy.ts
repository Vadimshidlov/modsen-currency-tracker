/// <reference types="cypress" />

import { lastCurrencyCached } from "cypress/data/lastCurrencyCached";
import { getLastUpdateTime } from "@/utils/date/getLastUpdateTime";

Cypress.on("uncaught:exception", () => false);

describe("bank-card page tests", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/bank-card", {
            onBeforeLoad(win) {
                win.localStorage.setItem("cachedCurrency", JSON.stringify(lastCurrencyCached));
                win.localStorage.setItem("lastUpdateDateResult", getLastUpdateTime());
            },
        });
    });

    it("should render loader during building a map", () => {
        cy.wait(1000);

        cy.url().should("include", "/bank-card");

        const map = cy.get(".mapboxgl-canvas");

        map.should("be.visible");

        cy.get('[data-testid="app-loader"]').should("be.visible");

        cy.wait(2000);
    });

    it("should correct type in search input", () => {
        cy.wait(1000);

        cy.url().should("include", "/bank-card");

        const searchInput = cy.get("[data-testid='map-search-input']");

        searchInput.type("u");

        cy.get(".currency-input__result-item").eq(0).should("have.text", "AUD");
        cy.get(".currency-input__result-item").eq(1).should("have.text", "EUR");
        cy.get(".currency-input__result-item").eq(2).should("have.text", "USD");

        searchInput.clear();

        searchInput.should("have.text", "");

        searchInput.type("u");
        cy.get(".currency-input__result-item").eq(2).click();
        cy.get(".selected-currency-title").should("have.text", "Selected currency: USD");

        cy.wait(2000);
    });

    it("should correct handle reset currency event", () => {
        cy.wait(1000);

        cy.url().should("include", "/bank-card");

        const searchInput = cy.get("[data-testid='map-search-input']");

        searchInput.type("u");

        cy.get(".currency-input__result-item").eq(0).should("have.text", "AUD");
        cy.get(".currency-input__result-item").eq(1).should("have.text", "EUR");
        cy.get(".currency-input__result-item").eq(2).should("have.text", "USD");

        searchInput.clear();

        searchInput.should("have.text", "");

        searchInput.type("u");
        cy.get(".currency-input__result-item").eq(2).click();

        const resetButton = cy.get(".selected-currency-title");

        resetButton.should("have.text", "Selected currency: USD");
        resetButton.click();
    });

    it("should correct handle not found value", () => {
        cy.wait(1000);

        cy.url().should("include", "/bank-card");

        const searchInput = cy.get("[data-testid='map-search-input']");

        searchInput.type("hello");

        cy.get(".currency-input__result-item").eq(0).should("have.text", "Not Found");

        searchInput.clear();

        searchInput.should("have.text", "");
    });

    it("should correct handle map-marker click event", () => {
        const map = cy.get(".mapboxgl-canvas");

        map.should("be.visible");

        cy.url().should("include", "/bank-card");

        cy.wait(1000);

        const mapMarker = cy.get("div[role='button']").eq(0);

        mapMarker.click();

        cy.get(".mapboxgl-popup-content").should("exist");
        cy.get(".mapboxgl-popup-content").contains("Currency", { matchCase: false });
    });
});
