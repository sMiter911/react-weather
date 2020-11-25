# To run the application

1. Clone the repository to your selected destination
2. CD into the directory and run 'yarn install' if using yarn or 'npm install'
3. Register with Open Weather to get your API key. 
4. Create a .env file and paste the API and BASEURL keys.
5. Run the application

N.B.  Remember to append REACT_APP_ to your API Keys e.g. if your keys are GOOGLE_API this must be change to REACT_APP_GOOGLE_API
      To then access the .env variable you use process.env.REACT_APP_GOOGLE_API this is a work around since you are not allowed to 
      import straight from the .env file in react. In our case the API variables are REACT_APP_API_BASEURL and REACT_APP_API
