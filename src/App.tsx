import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import "./App.css";
import logo from "./logo.svg";
// import octoCat from "./octocat.svg";

const custom = [
  {
    id: "github",
    name: "GitHub",
    emojis: [
      {
        id: "octocat",
        name: "Octocat",
        keywords: ["github"],
        skins: [
          {
            // src: "./octocat.svg",
            // src: { octoCat },
            src: "https://iconape.com/wp-content/png_logo_vector/github-octocat-logo.png",
          },
        ],
        custom: true,
      },
    ],
  },
];

const customCategoryIcons = {
  github: {
    // src: "./octocat.svg",
    // src: { octoCat },
    src: "https://iconape.com/wp-content/png_logo_vector/github-octocat-logo.png",
  },
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Picker
          data={data}
          custom={custom}
          categoryIcons={customCategoryIcons}
          onEmojiSelect={console.log}
        />
      </header>
    </div>
  );
}

export default App;
