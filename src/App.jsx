import * as React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import ProgressSection from "./components/Home/ProgressSection";

function App() {

  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode],
  );

  return (
      <ThemeProvider theme={theme}>
          <CssBaseline />
          <h1>Hello world! 三七食行!</h1>
          <ProgressSection />
      </ThemeProvider>);
}

export default App;
