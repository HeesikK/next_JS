"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";

const Control = () => {
  const params = useParams();
  const id = params.id;
  const router = useRouter();
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
            <input
              type="button"
              value={"delete"}
              onClick={() => {
                const options = { method: "DELETE" };
                fetch(`http://localhost:9999/topics/` + id, options)
                  .then((res) => res.json)
                  .then((result) => {
                    router.push("/");
                    router.refresh();
                  });
              }}
            />
          </li>
        </>
      ) : null}
    </ul>
  );
};

export default Control;
