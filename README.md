## How to replicate the issue?
1. Clone the repo.
2. Run `cd nylas-schedule-editor`
3. Run `npm install`. My node version is `v18.20.4` but any node18 should work.
4. Create a `.env` file which should contain the `CLIENT_ID`. 
```
REACT_APP_CLIENT_ID=<client-id>
```
5. Run `npm start` to spin up the application. 
6. Check the terminal for the error.
7. The main code is present in `src/App.js`. The rest of the code is untouched.