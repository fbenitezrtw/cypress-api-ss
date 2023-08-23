describe('API Test for Symphony Solutions', () => {
  let filteredObjects;

    before(() => {
      cy.request('GET', '/entries').then(response => {
        expect(response.status).to.eq(200);

        const expectedValue = "Authentication & Authorization";

        filteredObjects = response.body.entries.filter(
          entry =>
            entry.Category === expectedValue
        );
      });
    });

      it('Verify objects with Category: "Authentication & Authorization"', () => {
        expect(filteredObjects).to.have.length.gt(0);
      });

      it('Verify the number of objects and print to console', () => {
        // verify the number of objects
        const expectedCount = filteredObjects.length;
        expect(expectedCount).to.be.gt(0);
        expect(filteredObjects.length).to.equal(expectedCount);

        // print objects to console
        cy.log('Objects: ');
        filteredObjects.forEach(list => {
          cy.log(JSON.stringify(list, null, 2));
        });
      });
});