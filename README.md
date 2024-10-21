# README

Steps: 

- bundle install
- npm install
- bundle exec rails db:setup
- bundle exec rails s

Super simple implementation of a Stock Ticker application. We have a HomeController that tokenizes certain information - this gets sent to the front end which makes an API call to retrieve the information and generate the navigation buttons with the token. 
Whenever a button is pressed we navigate away to a different stock by passing the ID to a function inside a useEffect hook - this sets the state of the component. 

I only had one day to implement this but if I had had more time I would've perhaps looked into more time frames ( currently we only implement in a dirty way the 5 minute intraday window) I would've liked to also get a better API than the one I currently hook into and maybe would've looked into some decorator pattern for the stock. I have the JWT private and public keys committed to the repo via the .env file ( BIG NO NO ) but this is a simple demo project

I had also started to make a record to record all the API calls as I was getting hit with rate limitations while developing but alas I ran out of time. 