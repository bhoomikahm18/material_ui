// import Test2 from "./Test2";
// import Test3 from "./Test3";
// import Test4 from "./Test4";
// import Test5 from "./Test5";
// import Test6 from "./Test6";
// import Test7 from "./Test7";
// import Layout from "./Layout";
import Navbar from "./components/Navbar";
// import Test8 from "./Test8";
// import Text from "./Text";

const linksArray = ["Products", "Services", "Overview", "Contact Us"]

function App() {
  return (
    <div >
      <Navbar links={linksArray}/>
    </div>
  );
}

export default App;
