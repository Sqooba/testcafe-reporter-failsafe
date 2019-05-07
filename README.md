# testcafe-reporter-failsafe

This is a reporter plugin for [TestCafe](http://devexpress.github.io/testcafe) which reports tests within an XML
readable by failsafe.

## Install

You can install it using

```
npm install testcafe-reporter-failsafe
```

## Usage

When you run tests from the command line, specify the reporter name by using the `--reporter` option:

```
testcafe chrome 'path/to/test/file.js' --reporter failsafe
```


When you use API, pass the reporter name to the `reporter()` method:

```js
testCafe
    .createRunner()
    .src('path/to/test/file.js')
    .browsers('chrome')
    .reporter('failsafe') // <-
    .run();
```

## Author
Sqooba IO (https://sqooba.io)

Base on [testcafe-reporter-xunit](https://github.com/DevExpress/testcafe-reporter-xunit).
