openbanking-ui
==============

A collection AISP and PISP APIs.

Pre-requisites
--------------

* You should have NODE JS installed on your system. You can download and install nodejs from [here](https://nodejs.org/en/download/).
* To check the version of node, use command 'node -v'
* Once nodejs is installed, install lerna by using the command

``` nowrap
npm install -g lerna
```

Usage
-----

### Install

First, install the dependencies:

``` nowrap
npm install
```

### Running the app

Create an enviroment file (.env) file in /packages/web-app folder and add an entry for REACT_APP_ACCOUNT_ID. This account id will be used for for fetching various details of an account.

You can also add an entry for PORT (optional) if facing any issue with port while running the application. This will run your app on the specified port number if added otherwise will point to the default port. 

Strictly run the app in the below port as the redirect uri is configured in port no 4001
``` nowrap
PORT=4001
REACT_APP_ACCOUNT_ID=11111111
```
To run the application, use command:

``` nowrap
npm start
```
Not need to connect with mock-server for testing.
#### Connecting with mock-server

Start the application in one instance with 'npm start' and in another instance, run the below command.

``` nowrap
npm run mock-server
```

This will stub the rest api calls and return the mock response.

The sdk will be up and running in the backend to connect to the sandbox.

#### Connecting with sdk

Download and setup the sdk code from the [url](https://github.com/API-Optimists/openbanking-java)

### Getting familiar with open banking related terms

To get familiar with the terms, you can check the [glossary](https://bankofapis.com/glossary)
