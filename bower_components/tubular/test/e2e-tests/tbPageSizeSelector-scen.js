/* jshint: true */
/* globals: expect:false,beforeAll:false,expect:false,browser:false,element:false,by:false,describe:false,protractor:false,it:false,beforeEach:false */

// This protractor scen file tests tbPageSizeSelector component.

// It is assumed throughout the test that the data received for the main tbGrid
// component at the related HTML file (tbPager_test.html) is static and constrained
// to 53 records with consecutive ID's.

describe('tbPageSizeSelctor', () => {

    var dataRowsCollection,
        firstDataRow,
        lastDataRow,
        tbPageSizeSelector;
    var firstNavBtn;
    var nextNavBtn;

    beforeAll(() => {
        // Go to test
        browser.get('index.html');
        element(by.id('testsSelector')).click();
        element(by.id('tbPageSizeSelectorTest')).click();

        /**********************/
        // * Test variables * //
        /**********************/
        // Get component
        var tbGridPager = element(by.tagName('tb-grid-pager'));
        // tbPageSizeSelector element
        tbPageSizeSelector = element(by.tagName('tb-page-size-selector'));
        // All showing rows
        dataRowsCollection = element.all(by.repeater('row in $component.rows'));
        // First-page button 
        firstNavBtn = tbGridPager.$('.pagination-first').$('a');
        // Next-page button
        nextNavBtn = tbGridPager.$('.pagination-next').$('a');
    });

    // Go to page 1 before every test if not there
    beforeEach(() => {
        nextNavBtn.click();
        firstNavBtn.click();
    });

    it('should filter up to 10 data rows per page when selecting a page size of "10"', () => {
        // Select '10' on tbPageSizeSelector
        tbPageSizeSelector.$('select').click(); //$('[value="number:10"]').
        tbPageSizeSelector.$('[value="number:10"]').click();

        // Update values
        firstDataRow = element.all(by.repeater('row in $component.rows')).first();
        lastDataRow = element.all(by.repeater('row in $component.rows')).last();

        expect(firstDataRow.$$('td').first().getText()).toMatch('1');
        expect(lastDataRow.$$('td').first().getText()).toMatch('10');
        expect(dataRowsCollection.count()).toBe(10);

    });

    it('should filter up to 20 data rows per page when selecting a page size of "20"', done => {
        // Select '20' on tbPageSizeSelector
        tbPageSizeSelector.$('select').click();
        tbPageSizeSelector.$('[value="number:20"]').click().then(() => {

            // Go to next page of results (page 2)
            nextNavBtn.click().then(() => {
                firstDataRow = element.all(by.repeater('row in $component.rows')).first();
                lastDataRow = element.all(by.repeater('row in $component.rows')).last();

                expect(firstDataRow.$$('td').first().getText()).toMatch('21');
                expect(lastDataRow.$$('td').first().getText()).toMatch('40');
                expect(dataRowsCollection.count()).toBe(20);
                done();
            });
        });
    });

    it('should filter up to 50 data rows per page when selecting a page size of "50"', done => {
        // Select '50' on tbPageSizeSelector
        tbPageSizeSelector.$('select').click();
        tbPageSizeSelector.$('[value="number:50"]').click().then(() => {

            // Update values
            firstDataRow = element.all(by.repeater('row in $component.rows')).first();
            lastDataRow = element.all(by.repeater('row in $component.rows')).last();

            // Verifying results on results-page 1
            expect(firstDataRow.$$('td').first().getText()).toMatch('1');
            expect(lastDataRow.$$('td').first().getText()).toMatch('50');
            expect(dataRowsCollection.count()).toBe(50);

            // Go to next page of results (page 2)
            nextNavBtn.click().then(() => {

                // Update values
                firstDataRow = element.all(by.repeater('row in $component.rows')).first();
                lastDataRow = element.all(by.repeater('row in $component.rows')).last();

                // Verifying results on results-page 2
                expect(firstDataRow.$$('td').first().getText()).toMatch('51');
                expect(lastDataRow.$$('td').first().getText()).toMatch('100');
                expect(dataRowsCollection.count()).toBe(50);
                firstNavBtn.click();
                done();
            });
        });
    });

    it('should filter up to 100 data rows per page when selecting a page size of "100"', done => {
        // Select '100' on tbPageSizeSelector
        tbPageSizeSelector.$('select').click();
        tbPageSizeSelector.$('[value="number:100"]').click().then(() => {
            // Update values
            firstDataRow = element.all(by.repeater('row in $component.rows')).first();
            lastDataRow = element.all(by.repeater('row in $component.rows')).last();

            expect(firstDataRow.$$('td').first().getText()).toMatch('1');
            expect(lastDataRow.$$('td').first().getText()).toMatch('100');
            expect(dataRowsCollection.count()).toBe(100);
            done();
        });
    });

});