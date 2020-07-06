import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';

import MainLayout from './components/layout/MainLayout/MainLayout';
import Login from './components/views/Login/Login';
import Homepage from './components/views/Homepage/Homepage';
import Kitchen from './components/views/Kitchen/Kitchen';
import Tables from './components/views/Tables/Tables';
import Booking from './components/views/Booking/Booking';
import Event from './components/views/Event/Event';
import Waiter from './components/views/Waiter/WaiterContainer';
import WaiterOrder from './components/views/WaiterOrder/WaiterOrder';

import { StylesProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#2B4C6F' },
    // secondary: { main: '#11bc5f' },
  },
});

function App() {
  return (
    <BrowserRouter>
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
          <MainLayout>
            <Route exact path={`${process.env.PUBLIC_URL}/`} component={Homepage} />
            <Route exact path={process.env.PUBLIC_URL + '/login'} component={Login} />
            <Route exact path={process.env.PUBLIC_URL + '/kitchen'} component={Kitchen} />
            <Route exact path={process.env.PUBLIC_URL + '/tables'} component={Tables} />
            <Route exact path={process.env.PUBLIC_URL + '/waiter'} component={Waiter} />
            <Route path={process.env.PUBLIC_URL + '/waiter/order/:id'} component={WaiterOrder} />
            <Route path={process.env.PUBLIC_URL + '/tables/booking/:id'} component={Booking} />
            <Route path={process.env.PUBLIC_URL + '/tables/events/:id'} component={Event} />
          </MainLayout>
        </ThemeProvider>
      </StylesProvider>
    </BrowserRouter>
  );
}

export default App;
