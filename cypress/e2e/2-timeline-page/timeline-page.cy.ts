/// <reference types="cypress" />

import { lastCurrencyCached } from "cypress/data/lastCurrencyCached";
import { getLastUpdateTime } from "@/utils/date/getLastUpdateTime";

const currentDate = new Date().toISOString().split("T")[0];
const secondDate = new Date("2024-03-04").toISOString().split("T")[0];

describe("timeline page tests", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/timeline", {
            onBeforeLoad(win) {
                win.localStorage.setItem("cachedCurrency", JSON.stringify(lastCurrencyCached));
                win.localStorage.setItem("lastUpdateDateResult", getLastUpdateTime());
            },
        });
    });

    it("should build a chart after setting and changin iput date", () => {
        cy.url().should("include", "/timeline");

        cy.get('input[type="date"]').clear().type(currentDate);

        cy.wait(1000);

        cy.get('input[type="date"]').clear().type(secondDate);

        cy.wait(2000);

        cy.url().should("include", "/timeline");
    });

    it("should show and hide toastify message", () => {
        cy.url().should("include", "/timeline");

        cy.get('input[type="date"]').clear().type(currentDate);

        cy.wait(1000);

        cy.contains(".toast-content", "Success chart building!").should("be.visible");

        cy.get('input[type="date"]').clear().type(secondDate);

        cy.contains(".toast-content", "Success chart building!").should("be.visible");

        cy.wait(2000);

        cy.contains(".toast-content", "Success chart building!").should("not.be.visible");

        cy.url().should("include", "/timeline");
    });

    it("should build a chart after randomize button click", () => {
        cy.url().should("include", "/timeline");

        cy.get('input[type="date"]').clear().type(currentDate);

        cy.wait(1000);

        cy.contains(".currency-chart__random-button", "RANDOMIZE").click();

        cy.wait(500);

        cy.contains(".toast-content", "Success chart building!").should("be.visible");

        cy.wait(1500);

        cy.contains(".toast-content", "Success chart building!").should("not.be.visible");

        cy.url().should("include", "/timeline");
    });

    it("should correct open form for chart data", () => {
        cy.url().should("include", "/timeline");

        cy.get('input[type="date"]').clear().type(currentDate);

        cy.wait(1000);

        cy.contains(".currency-chart__random-button", "UPDATE").click();

        cy.get("form").should("be.visible");
    });

    it("should correct handle empty form submit", () => {
        cy.url().should("include", "/timeline");

        cy.get('input[type="date"]').clear().type(currentDate);

        cy.wait(1000);

        cy.contains(".currency-chart__random-button", "UPDATE").click();

        cy.get("form").should("be.visible");

        cy.get("[data-testid='chart-input-high']").type("10000");
        cy.get("[data-testid='chart-submit']").click();

        cy.get(".chart-form__error").should(
            "have.text",
            "High must be higher than low value, close and open must be between high and low values",
        );

        cy.get("[data-testid='chart-input-high']").clear();
    });

    it("should correct handle form validation errors", () => {
        cy.url().should("include", "/timeline");

        cy.get('input[type="date"]').clear().type(currentDate);

        cy.wait(1000);

        cy.contains(".currency-chart__random-button", "UPDATE").click();

        cy.get("form").should("be.visible");

        cy.get("[data-testid='chart-input-high']").type("10000");
        cy.get("[data-testid='chart-input-low']").type("15000");
        cy.get("[data-testid='chart-input-open']").type("12000");
        cy.get("[data-testid='chart-input-close']").type("13000");
        cy.get("[data-testid='chart-submit']").click();

        cy.get(".chart-form__error").should(
            "have.text",
            "High must be higher than low value, close and open must be between high and low values",
        );

        cy.get("[data-testid='chart-input-high']").clear();
    });

    it("should correct type data in to chart data form", () => {
        cy.url().should("include", "/timeline");

        cy.get('input[type="date"]').clear().type(currentDate);

        cy.wait(1000);

        cy.contains(".currency-chart__random-button", "UPDATE").click();

        cy.get("form").should("be.visible");

        cy.get("[data-testid='chart-input-high']").type("20000");
        cy.get("[data-testid='chart-input-close']").type("18000");
        cy.get("[data-testid='chart-input-open']").type("14000");
        cy.get("[data-testid='chart-input-low']").type("12000");
        cy.get("[data-testid='chart-submit']").click();

        cy.wait(500);

        cy.contains(".toast-content", "Success chart building!").should("be.visible");

        cy.wait(1500);

        cy.contains(".toast-content", "Success chart building!").should("not.be.visible");
    });
});
