"use client";

import { useRouter } from "next/navigation";

const NewUserPage = () => {
  const router = useRouter();

  const onClickEvent = () => {
    router.push("/users");
  };

  return (
    <button className="btn btn-primary" onClick={() => onClickEvent()}>
      Create
    </button>
  );
};

export default NewUserPage;
