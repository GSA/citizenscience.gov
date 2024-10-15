Axe test is a tool that helps to test the accessibility of the app. It is a JavaScript library that uses the axe-core library to test the accessibility of the app and uses puppeteer to run the test.

1. Run the following command to find all the permalinks in the app:

node find_permalinks.js

copy the output and save it to a file called urls_to_test_all.txt.

2. Run the following command to test the accessibility of the app in browser:

node axe_test.js all

IMPORTANT: 

This code has the following limitations:

1. It only tests the accessibility of the app in browser using Puppeteer (Chromium based browser).
2. It only tests the accessibility of the app in English.

Improvements:

The code can be improved in the following ways:

1. Error handling is not implemented.
2. This test is not integrated into the automatic test pipeline.
3. This code doesn't take into account the env variables.
4. This code is intended to be run in the local environment for discovery pruposes and it's fully implemented as part of of automatic tests.