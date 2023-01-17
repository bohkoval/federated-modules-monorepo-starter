// copied from https://mui.com/material-ui/guides/routing/#tabs
import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import { Route, Routes, Link, matchPath, useLocation } from 'react-router-dom';

function useRouteMatch(patterns: readonly string[]) {
  const { pathname } = useLocation();

  for (let i = 0; i < patterns.length; i += 1) {
    const pattern = patterns[i];
    const possibleMatch = matchPath(pattern, pathname);
    if (possibleMatch !== null) {
      return possibleMatch;
    }
  }

  return null;
}

function MyTabs() {
  // You need to provide the routes in descendant order.
  // This means that if you have nested routes like:
  // users, users/new, users/edit.
  // Then the order should be ['users/add', 'users/edit', 'users'].
  const routeMatch = useRouteMatch(['/app-1/*', '/app-2/*', '/']);
  const currentTab = routeMatch?.pattern?.path;

  return (
    <Tabs value={currentTab}>
      <Tab label="Root" value="/" to="/" component={Link} />
      <Tab label="App 1" value="/app-1/*" to="/app-1" component={Link} />
      <Tab label="App 2" value="/app-2/*" to="/app-2" component={Link} />
    </Tabs>
  );
}

function CurrentRoute() {
  const location = useLocation();

  return (
    <Typography variant="body2" sx={{ pb: 2 }} color="text.secondary">
      Current route: {location.pathname}
    </Typography>
  );
}

const NavBar: React.FC = () => (
  <Box sx={{ width: '100%' }}>
    <Routes>
      <Route path="*" element={<CurrentRoute />} />
    </Routes>
    <MyTabs />
  </Box>
);

export default NavBar;
