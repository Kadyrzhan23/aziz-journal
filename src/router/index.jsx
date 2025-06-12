import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "../pages/home/Home.jsx";
import Layout from "../components/layout/Layout.jsx";
import Posts from "../pages/posts/Posts.jsx";
import Archive from "../pages/archive/Archive.jsx";
import Articles from "../pages/Articles/Articles.jsx";
import About from "../pages/about/About.jsx";
import Contacts from "../pages/contacts/Contacts.jsx";
import Post from "../pages/post/Post.jsx";
import Members from "../pages/members/Members.jsx";
import NotFound from "../pages/notFountd/NotFound.jsx";
import Volume from "../pages/volume/Volume.js";
import Issue from '../pages/Issue/Issue.js'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="posts" element={<Posts />} />
        <Route path="archive" element={<Archive />} />
        <Route path="volume" element={<Volume />} />
        <Route path="issue" element={<Issue />} />
        <Route path="articles" element={<Articles />} />
        <Route path="post/:id" element={<Post />} />
        <Route path="about" element={<About />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="members" element={<Members />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Route>
  )
);

export default router;
