import { useUser } from "../providers/UserContext";
import UserProvider from "../providers/UserContext";

const LoggedInUser = () => {
  const { user } = useUser();
  return <p>Hello {user.name}</p>;
};

const Header = () => {
  return (
    <header>
      <h2>Blog App</h2>
      <LoggedInUser />
    </header>
  );
};

const Page = () => {
  const { user } = useUser();
  return (
    <div>
      <h2>What is Lorem ipsum ?</h2>
      <p>
        Lorem ipsum dolor sit ame, Lorem ipsum dolor sit ame, Lorem ipsum dolor
        sit ame, Lorem ipsum dolor sit ame, Lorem ipsum dolor sit ame, Lorem
        ipsum dolor sit ame, Lorem ipsum dolor sit ame, Lorem ipsum dolor sit
        ame, Lorem ipsum dolor sit ame, Lorem ipsum dolor sit ame, Lorem ipsum
        dolor sit ame, Lorem ipsum dolor sit ame, Lorem ipsum dolor sit ame,
        Lorem ipsum dolor sit ame, Lorem ipsum dolor sit ame, Lorem ipsum dolor
        sit ame, Lorem ipsum dolor sit ame,
      </p>
      <h3>Written by: {user.name} </h3>
    </div>
  );
};

const Root = () => {
  return (
    <div>
      <Header />
      <Page />
    </div>
  );
};

const Blog = () => {
  return (
    <UserProvider>
      <Root />
    </UserProvider>
  );
};
export default Blog;
