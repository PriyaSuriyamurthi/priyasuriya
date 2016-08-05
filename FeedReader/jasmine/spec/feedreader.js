/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */
/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
     * a related set of tests. This suite is all about the RSS
     * feeds definitions, the allFeeds variable in our application.
     */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

         /*Check if the field url is defined. If so, whether 
         it is a string and then check the length after trimming
         white space. The trim is added so that only white space
         can be checked.*/
        it('URL defined and not Empty', function() {
           allFeeds.forEach(function(feed) {
                expect(feed.url).toBeDefined();
                expect(typeof(feed.url)).toBe('string');
                expect(feed.url.trim().length).not.toBe(0);
            });
        });

        it('name defined and not Empty', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.name).toBeDefined();
                expect(typeof(feed.name)).toBe('string');
                expect(feed.name.trim().length).not.toBe(0);
            });
        });
    });


    describe('The menu', function() {

        it('element hidden by default', function() {
            expect($('body').hasClass('menu-hidden')).toBeTruthy();
        });

         /* menu-hidden class is removed from the body tag so 
         that the menu is displayed. Similarly when the class
         is added, the menu will be hidden */
        it('displays and hides', function() {
            $('.icon-list').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(false);
            $('.icon-list').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });

    describe('Initial Entries', function() {

        beforeEach(function(done) {
            loadFeed(0, done);
            });
        /*Check if the size of the children which belongs to 
        the class feed is more than 0. This would prove that the
        feed div is not empty*/
        it('are displayed', function(done) {
            expect($('.feed .entry').length).toBeGreaterThan(0);
            done();
        });
    });

    describe('New Feed Selection', function() {
 
        var initialContent, changedContent;
        beforeEach(function(done) {
            initialContent = $('.feed').html();
            loadFeed(1, done);
        });
        /*Stored the content from the current load and also after new load.
        compare the results to see if they are different. This will prove
        that the feed load is different */
        it('are loaded', function(done) {            
            changedContent = $('.feed').html();
            expect(initialContent).not.toBe(changedContent);
            done();
        });
    });
}());