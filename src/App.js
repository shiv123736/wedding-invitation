import ContactSection from "./components/ContactSection";
import InvitationSection from "./components/InvitationSection";
import LocationSection from "./components/LocationSection";
import '../src/App.css';




function App() {
  return (
    <div className="App">
      <InvitationSection />
      <LocationSection />
      <ContactSection />
      {/* <h1>Hello Shivam, this is react app</h1> */}
    </div>
  );
}

export default App;
