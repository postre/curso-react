import { NavBar, ItemListContainer } from "./components";
import  slider1  from "./assets/img/slider1.jpg";
import  slider2  from "./assets/img/slider2.jpg";
import  slider3  from "./assets/img/slider3.jpg";

function App() {
  const greetings = [
    {
      title: "Lorem ipsum dolor sit amet",
      detail:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
      img: slider1,
    },
    {
      title: "Excepteur sint occaecat cupidatat",
      detail:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        img: slider2,
    },
    {
      title: "Nemo enim ipsam voluptatem",
      detail:
        "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.",
        img: slider3,
    },
  ];
  return (
    <>
      <NavBar />
      <ItemListContainer greetings={greetings} />
    </>
  );
}

export default App;
