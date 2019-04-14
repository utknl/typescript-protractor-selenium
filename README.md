# typescript-protractor-selenium
Sauce Labs and Selenium demo using Protractor framework.

I will add Sauce Labs implementation later.. (I hope)

## Prerequisites
```
1. Npm

2. TypeScript
```

## How to Use 
```text
1. clone the project and go to it's folder

2. npm install

3. npm webdriver-update

4. npm run test
```

## How to Create
If you want to create the whole structure from scratch:

1. create a directory

2. on directory path, type `npm init` on terminal
```text
   This will create package.json file in your directory.
```

3. in package.json file add these dependencies:
```
   "jasmine": "^3.3.1",
   "jasmine-data-provider": "^2.2.0",
   "protractor": "^5.4.2",
   "typescript": "^3.2.4",
   "ts-node": "^8.0.2",
   "@types/jasmine": "^3.3.8",
   "@types/jasminewd2": "^2.0.6",
   "@types/node": "^10.12.19"
```

4. type `npm install` on terminal in order to download these dependencies

5. type `tsc --init` on terminal in order to create `tsconfig.json`
```text
   This is required in order to transform the project to typescript.
   In tsconfig.json file, we define how it should convert ts files to js files.
   You can change all the options based on your need. As a beginning, use my configurations.
``` 
6. create `conf.ts`  

```text
IMPORTANT:

Since protractor only understands javascript, always give the path of the converted js files for suits/specs.
```

7. setting the scripts
   in order to run the tests, add these commands to your package.json's script object:
```
 "test": "protractor <your conf.ts path>",
 "pretest": "tsc"
 "protractor": "./node_modules/protractor/built/cli.js",
 "webdriver-update": "./node_modules/.bin/webdriver-manager update"
```
      
   inspect my package.json for an example.

8. add your tests

9. `npm webdriver-update` for your first run

10. `npm run test` and have fun
