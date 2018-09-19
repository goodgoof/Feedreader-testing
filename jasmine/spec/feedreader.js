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

         it('has a url',function(){
           for(feed of allFeeds){
             expect(feed.url).toBeDefined();
             expect(feed.url.length).not.toBe(0)
           }

         });

         it('has a name', function(){
           for(feed of allFeeds){
             expect(feed.name).toBeDefined();
             expect(feed.name).not.toBe(0);
           }
         });

    });


    /*  new test suite named "The menu" */
    describe('The Menu',function(){

         it('is hidden by default', function(){
           const body = document.body;
           expect(body.className).toContain('menu-hidden')
         })

          it('menu toggles', function(){
            const body = document.body;
            const menuIcon = document.querySelector('.menu-icon-link')

            menuIcon.click();
            expect(body.className).not.toContain('menu-hidden')
          })

          it('menu toggles', function(){
            const body = document.body;
            const menuIcon = document.querySelector('.menu-icon-link')

            menuIcon.click();
            expect(body.className).toContain('menu-hidden')
          })
})
    /* a new test suite named "Initial Entries" */
      describe('Initial Entries',function(){

         beforeEach(function(done){
           loadFeed(0,done)
         });

         it('there is a single entry in feed after loadFeed is called', function(){
           const numberEntries = document.querySelector('.feed').getElementsByClassName('entry').length;
           expect(numberEntries > 0).toBe(true);

         })
       });
    /*  a new test suite named "New Feed Selection" */
      describe('New Feed Selection',function(){

         beforeEach(function(done){
           loadFeed(0, function(){
             initialFeed = $('.feed').innerText;

              loadFeed(1,function(){
                newFeed = document.querySelector('.feed').innerHTML;
                done();
              })
           })



         });

         it('content should change', function(){
           const newFeed = document.querySelector('.feed').innerHTML;
           expect(feed).not.toBe(newFeed);
         })

     });
}());
