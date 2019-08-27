This is an assignment to hit the Skyscanner APIs and fetch the flight prices for 1 month(30 days)

## Steps to run the application on a local system

To Run the application on your local system, perform the following steps:

- Clone this repository on your local machine.
- Open command prompt / terminal.
- Navigate to the Project folder containing `package.json` file.
- Run the following command
    ```
    npm install
    ```
- Once npm install is successful, run the following command
    ```
    npm start
    ```
- If you wish to check the code coverage, you can run the following command:
    ```
    npm run test
    ```

### Unit Test Coverage()

To Generate the Coverage report, perform the following steps:

- Open command prompt/terminal on your project's base folder
- Run the following command:
    ```
    npm run test
    ```
- Once the test case execution is complete, open the project folder
- Go to the `coverage -> lcov-report` folder
- Open the `index.html` file on your browser. You will get a detailed test coverage report on the browser

Screenshot is available below in the screenshots section

## Commands and their Uses

The above mentioned commands behave as mentioned below:

### `npm install`

Installs all the dependencies required for the application to run

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.


## Screenshots

![Image](readme_assets/HomeScreen.PNG "Home Screen")

![Image](readme_assets/ScreenWithPrices.PNG "Home Screen with Prices")

![Image](readme_assets/LoadingScreen.PNG "Loading Screen")

![Image](readme_assets/TestCoverage.PNG "Test Case Coverage")