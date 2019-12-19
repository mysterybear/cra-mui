import React from "react";
import { Grid, Card, CardContent, Typography } from "@material-ui/core";

const words = [
  "fee",
  "fi",
  "fo",
  "fum"
]

function App() {
  return (
    <Grid container spacing={3}>
      {words.map(word =>
        <Grid item xs={12} sm={12/words.length}>
          <Card>
            <CardContent>
              <Typography>{word}</Typography>
            </CardContent>
          </Card>
        </Grid>
      )}
    </Grid>
  )
}

export default App;
