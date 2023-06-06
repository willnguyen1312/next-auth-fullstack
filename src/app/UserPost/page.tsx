import React from "react";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]/route";

async function checkAuth() {
  const result = await getServerSession(authOptions);
}

const UserPostPage = async () => {
  await checkAuth();
  return <div>Only Authenticated user should access to this page</div>;
};

export default UserPostPage;
