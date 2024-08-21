// Import the React library, which allows us to define components

// Import the Players component, which we'll use to show a list of players
import getPlayer from "./features/players/Players";

// Define the App component
function App() {
  // This component renders the Players component inside a div
  // This div has a class of 'App', which we could use for styling
  return (

    <>
    <h1>Welcome to the puppy bowl</h1>
    <getPlayer/>
  </>
);
}
    


// Export the App component as the default export

export default App;