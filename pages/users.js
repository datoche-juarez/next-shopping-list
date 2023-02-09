import Meta from "../components/Meta";
import Link from "next/link";
import User from "../components/User";

import { Box, Button, Text, Stack } from "@chakra-ui/react";

function UserList({ users }) {
  return (
    <>
      <h1>List of users</h1>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <User user={user} />
          </div>
        );
      })}
      <Link href="/">
        <Button variant="highlight">Go back</Button>
      </Link>
    </>
  );
}

export default UserList;

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  console.log(data);

  return {
    props: {
      users: data,
    },
  };
}
