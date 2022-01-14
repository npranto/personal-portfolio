const url = 'http://localhost:3000/';

describe('E2E - Home', () => {
  it(`visits portfolio site - ${url}`, () => {
    cy.visit(url);
  });
  it('displays navigation and core sections', () => {
    cy.get('[data-e2e="nav"]');
    cy.get('[data-e2e="jumbotron"]');
    cy.get('[data-e2e="about"]');
    cy.get('[data-e2e="work"]');
    cy.get('[data-e2e="projects"]');
    cy.get('[data-e2e="blog"]');
    cy.get('[data-e2e="education"]');
    cy.get('[data-e2e="contact"]');
  });
  it('`Jumbotron` is visible on load', () => {
    cy.get('[data-e2e="jumbotron"]').should('be.visible');
  });
  it('`About` is visible upon request from navigation menu', () => {
    cy.get('[data-e2e="menu-link-about"]').click();
    cy.url().should('include', '#about');
    cy.get('[data-e2e="about"]').should('be.visible');
  });
  it('`Work` is visible upon request from navigation menu', () => {
    cy.get('[data-e2e="menu-link-work"]').click();
    cy.url().should('include', '#work');
    cy.get('[data-e2e="work"]').should('be.visible');
  });
  it('`Projects` is visible upon request from navigation menu', () => {
    cy.get('[data-e2e="menu-link-projects"]').click();
    cy.url().should('include', '#projects');
    cy.get('[data-e2e="projects"]').should('be.visible');
  });
  it('`Blog` is visible upon request from navigation menu', () => {
    cy.get('[data-e2e="menu-link-blog"]').click();
    cy.url().should('include', '#blog');
    cy.get('[data-e2e="blog"]').should('be.visible');
  });
  it('`Education` is visible upon request from navigation menu', () => {
    cy.get('[data-e2e="menu-link-education"]').click();
    cy.url().should('include', '#education');
    cy.get('[data-e2e="education"]').should('be.visible');
  });
  it('`Contact` is visible upon request from navigation menu', () => {
    cy.get('[data-e2e="menu-link-contact"]').click();
    cy.url().should('include', '#contact');
    cy.get('[data-e2e="contact"]').should('be.visible');
  });
  it('should have correct link to "Resume" button', () => {
    cy.get('[data-e2e="resume-btn"]')
      .should('have.attr', 'href', '/assets/resume.pdf')
      .should('have.attr', 'target', '_blank');
  });
  it('should have correct link to "Let\'s Talk" button', () => {
    cy.get('[data-e2e="lets-talk-btn"]').should(
      'have.attr',
      'href',
      '#contact'
    );
    cy.url().should('include', '#contact');
    cy.get('[data-e2e="contact"]').should('be.visible');
  });
  it('should have 2 experiences w/in `Work``', () => {
    cy.get('[data-e2e="work"]').contains('Newfold Digital');
    cy.get('[data-e2e="work"]').contains('Lexia Learning');
  });
  it('should have 2 projects w/in `Projects`', () => {
    cy.get('[data-e2e="projects"]').contains('LogTrade');
    cy.get('[data-e2e="projects"]').contains('Regexer');
  });
  it('should have 2 articles w/in `Blog`', () => {
    cy.get('[data-e2e="blog"]').contains('macOS Web Development Setup Guide');
    cy.get('[data-e2e="blog"]').contains('Quick Bite: SSH Key');
  });
  it('should have 2 education references w/in `Education`', () => {
    cy.get('[data-e2e="education"]').contains('DevMountain');
    cy.get('[data-e2e="education"]').contains('freeCodeCamp');
  });
  it('should display all contact form validation errors`', () => {
    cy.get('[data-e2e="contact-form"]').submit();
    cy.get('[data-e2e="contact-form"] [id="name-error"]').contains(
      'Please enter a valid name'
    );
    cy.get('[data-e2e="contact-form"] input[name="name"]').type('John Smith');
    cy.get('[data-e2e="contact-form"]').submit();
    cy.get('[data-e2e="contact-form"] [id="email-error"]').contains(
      'Please enter a valid email'
    );
    cy.get('[data-e2e="contact-form"] input[name="email"]').type(
      'jsmith@gmail.com'
    );
    cy.get('[data-e2e="contact-form"]').submit();
    cy.get('[data-e2e="contact-form"] [id="message-error"]').contains(
      'Please enter a valid message'
    );
    cy.get('[data-e2e="contact-form"] textarea[name="message"]').type(
      "Let's get in touch"
    );
  });
});
