import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import { Grid, Typography } from "@mui/material";
import Switch from "@mui/material/Switch";
import { cloneDeep } from "lodash";
import { useState } from "react";
import "./App.css";

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
            src: "https://iconape.com/wp-content/png_logo_vector/github-octocat-logo.png",
          },
        ],
        version: 1,
      },
    ],
  },
];

const customCategoryIcons = {
  github: {
    src: "https://iconape.com/wp-content/png_logo_vector/github-octocat-logo.png",
  },
};

function App() {
  const [objectsBroken, setObjectsBroken] = useState(false);
  const [symbolsBroken, setSymbolsBroken] = useState(false);
  const [flagsBroken, setFlagsBroken] = useState(false);
  const [emojiData, setEmojiData] = useState<any>(cloneDeep(data));

  /** Trim the objects category. */
  const trimObjects = () => {
    const isBroken = !objectsBroken;
    setObjectsBroken(() => true);
    setEmojiData((prev: any) => {
      if (!isBroken) {
        return cloneDeep(data);
      } else {
        const newData = { ...prev };
        newData.categories[6].emojis = ["eyeglasses", "dark_sunglasses"];
        return newData;
      }
    });
  };

  /** Trim the symbols category. */
  const trimSymbols = () => {
    const isBroken = !symbolsBroken;
    setSymbolsBroken(() => true);
    setEmojiData((prev: any) => {
      if (!isBroken) {
        return cloneDeep(data);
      } else {
        const newData = { ...prev };
        newData.categories[7].emojis = ["atm"];
        return newData;
      }
    });
  };

  /** Trim the flags category. */
  const trimFlags = () => {
    const isBroken = !flagsBroken;
    setFlagsBroken(() => true);
    setEmojiData((prev: any) => {
      if (!isBroken) {
        return cloneDeep(data);
      } else {
        const newData = { ...prev };
        newData.categories[8].emojis = ["atm"];
        return newData;
      }
    });
  };

  console.log("data");
  console.log(data.categories[6].emojis);
  console.log("emojiData");
  console.log(emojiData);
  console.log(emojiData.categories[6].emojis);

  return (
    <div className="App">
      <header className="App-header">
        <Grid container direction="column" alignContent="center">
          <Grid item>
            <Grid
              container
              justifyContent="center"
              alignItems="center"
              mb={2}
              spacing={2}
            >
              <Grid item>
                <Typography
                  variant="h5"
                  sx={{ color: objectsBroken ? "red" : "white" }}
                >
                  Trim Objects
                </Typography>
              </Grid>
              <Grid item>
                <Switch onClick={trimObjects} disabled={objectsBroken} />
              </Grid>
            </Grid>
            <Grid
              container
              justifyContent="center"
              alignItems="center"
              mb={2}
              spacing={2}
            >
              <Grid item>
                <Typography
                  variant="h5"
                  sx={{ color: symbolsBroken ? "red" : "white" }}
                >
                  Trim Symbols
                </Typography>
              </Grid>
              <Grid item>
                <Switch onClick={trimSymbols} disabled={symbolsBroken} />
              </Grid>
            </Grid>
            <Grid
              container
              justifyContent="center"
              alignItems="center"
              mb={2}
              spacing={2}
            >
              <Grid item>
                <Typography
                  variant="h5"
                  sx={{ color: flagsBroken ? "red" : "white" }}
                >
                  Trim Flags
                </Typography>
              </Grid>
              <Grid item>
                <Switch onClick={trimFlags} disabled={flagsBroken} />
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Picker
              data={emojiData}
              custom={custom}
              categoryIcons={customCategoryIcons}
              onEmojiSelect={console.log}
            />
          </Grid>
        </Grid>
      </header>
    </div>
  );
}

export default App;
