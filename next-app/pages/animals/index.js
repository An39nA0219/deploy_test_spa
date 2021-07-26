import Link from "next/link";
import { useEffect, useState } from "react";
import apiClient from "../../apis/user/axios";

const Index = () => {
  const [data, setData] = useState();

  useEffect(() => fetchData(), []);

  const fetchData = () => {
    apiClient
      .get("http://localhost:3001/animals")
      .then((res) => {
        console.log(res.data.animals);
        setData(res.data.animals);
      })
      .catch(() => {});
  }

  return (
    <>
      {data && (
        <div>
          <h1>Animals Index</h1>
          <ul>
            {data.map(d => {
              return (
                <>
                  <li>
                      {d.color} {d.name}
                  </li>
                </>
              );
              })}
          </ul>
          <Link href="/animals/create">Create New Animal Tags</Link>
        </div>
      )}
    </>
  );
};

export default Index;
