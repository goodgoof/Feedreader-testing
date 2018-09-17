
## Why this Project?

Testing is an important part of the development process and many organizations practice a standard of development known as "test-driven development". This is when developers write tests first, before they ever start developing their application. All the tests initially fail and then they start writing application code to make these tests pass.

Whether you work in an organization that uses test-driven development or in an organization that uses tests to make sure future feature development doesn't break existing features, it's an important skill to have!


## What will I learn?

You will learn how to use Jasmine to write a number of tests against a pre-existing application. These will test the underlying business logic of the application as well as the event handling and DOM manipulation.

## Steps required to successfully test the application

To successfully run an application testing the features of the application is very important. I wrote 4 test suites to cover the application.

* RSS feeds tests whether the all the urls and name of website has been defined correctly or not.There are 3 tests in this suite to cover the allfeeds variable defined in app.js.

* The Menu is the next suite of test. This checks that the menu link is hidden by default and toggles on every click. There are 3 tests in this suite.

* Initial Entries suite is testing the asynchronous function of the loadFeed().There is 1 test here to check for entry in the feed container when the loadFeed() is called.

* New feed Selection is another test suite to check for content change when loadFeed() is called. There is one test in this suite.

 For successful testing of the application I referred to jasmine documentation, Matthew Cranford's walthroughs and youtube videos of Alain and Ryan Boris. Thanks to them for good explanation of the New Feed selection test suite and Initial entries test suite.
