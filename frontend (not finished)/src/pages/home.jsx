import React from "react";
import { Page } from "framework7-react";
import Navbar from "../components/navbar/navbar";

const HomePage = () => (
  <Page name="home">
    {/* Top Navbar */}
    {/* Toolbar */}
    <Navbar />
    {/* Page content */}

    {/*

    <Toolbar bottom>
      <Link>Left Link</Link>
      <Link>Right Link</Link>
    </Toolbar>
    <List>
      <ListItem title="Dynamic (Component) Route" link="/dynamic-route/blog/45/post/125/?foo=bar#about" />
      <ListItem title="Default Route (404)" link="/load-something-that-doesnt-exist/" />
      <ListItem title="Request Data & Load" link="/request-and-load/user/123456/" />
    </List>*/}
  </Page>
);
export default HomePage;
