/// <reference types="cypress" />

import { lastCurrencyCached } from "cypress/data/lastCurrencyCached";
import { getLastUpdateTime } from "@/utils/date/getLastUpdateTime";

describe("home page tests", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/home", {
            onBeforeLoad(win) {
                win.localStorage.setItem("cachedCurrency", JSON.stringify(lastCurrencyCached));
                win.localStorage.setItem("lastUpdateDateResult", getLastUpdateTime());
            },
        });
    });

    it("should include valid routes", () => {
        cy.url().should("include", "/home");

        cy.get("nav .navigation-list__item").contains("Timeline").click();

        cy.url().should("include", "/timeline");

        cy.get("nav .navigation-list__item").contains("Contato").click();

        cy.url().should("include", "/contacts");

        cy.get(".not-found__title").should("have.text", "404 – Page not found");

        cy.get(".not-found__button").should("have.text", "Go back home").click();

        cy.url().should("include", "/home");

        cy.get(".nav__item").contains("Ideas").click();

        cy.url().should("include", "/ideas");

        cy.get(".not-found__button").should("have.text", "Go back home").click();

        cy.url().should("include", "/home");

        cy.get(".nav__item").contains("Streams").click();

        cy.url().should("include", "/streams");

        cy.get(".not-found__button").should("have.text", "Go back home").click();

        cy.url().should("include", "/home");

        cy.visit("http://localhost:3000/homehome");

        cy.get(".not-found__button").should("have.text", "Go back home").click();

        cy.url().should("include", "/home");
    });

    it("should open modal window converter", () => {
        cy.get(".currency-card__titile").contains("Euro").click();

        cy.get(".selected-currency__title p").should("have.text", "Euro");
        cy.get(".selected-currency__value p").eq(0).should("have.text", "Value for USD:");

        cy.get('[data-testid="text-input"]').eq(0).should("have.text", "");
        cy.get('[data-testid="text-input"]').eq(0).clear();
        cy.get('[data-testid="text-input"]').eq(0).type("12");
        cy.get('[data-testid="text-input"]').eq(1).should("not.be.NaN");
    });

    it("should clear modal window input", () => {
        cy.get(".currency-card__titile").contains("Euro").click();

        cy.get(".selected-currency__title p").should("have.text", "Euro");
        cy.get(".selected-currency__value p").eq(0).should("have.text", "Value for USD:");

        cy.get('[data-testid="text-input"]').eq(0).should("have.text", "");
        cy.get('[data-testid="text-input"]').eq(0).clear();
        cy.get('[data-testid="text-input"]').eq(0).type("12");
        cy.get('[data-testid="text-input"]').eq(0).clear();
        cy.get('[data-testid="text-input"]').eq(0).should("have.text", "");
        cy.get('[data-testid="text-input"]').eq(1).should("have.value", "0.00");
    });

    it("should correct change currency selecet", () => {
        cy.get(".currency-card__titile").contains("Euro").click();

        cy.get('[data-testid="select-currency"]').select("Yen");
        cy.get('[data-testid="select-currency"]').should("have.value", "JPY");

        cy.get('[data-testid="text-input"]').eq(0).should("have.text", "");
        cy.get('[data-testid="text-input"]').eq(0).clear();
        cy.get('[data-testid="text-input"]').eq(0).type("12");
        cy.get('[data-testid="text-input"]').eq(0).clear();
        cy.get('[data-testid="text-input"]').eq(0).should("have.text", "");
        cy.get('[data-testid="text-input"]').eq(1).should("have.value", "0.00");
    });

    it("should correct close modal window", () => {
        cy.get(".currency-card__titile").contains("Euro").click();

        cy.get(".modal__close-button").click();
    });

    it("should correct open and close modal window", () => {
        cy.get(".currency-card__titile").contains("Yen").click();

        cy.get(".modal__close-button").click();
    });
});
