"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

const Control = () => {
  const params = useParams();
  const id = params.id;

  console.log(params);

  return (
    <ul>
      <li>
        <Link href="/create">Create</Link>
      </li>
      {id ? (
        <>
          <li>
            <Link href={`/update/${id}`}>Update</Link>
          </li>
          <li>
            <input type="button" value={"delete"} />
          </li>
        </>
      ) : null}
    </ul>
  );
};

export default Control;
