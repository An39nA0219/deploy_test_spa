import Link from "next/link";
import { useEffect, useState } from "react";
import apiClient from "../../apis/user/axios";

const Create = () => {
  const [name, setName] = useState();
  const [color, setColor] = useState();

  const onClickSubmit = () => {
    apiClient
      .post("http://localhost:3001/animals", {
        name: name,
        color: color
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch(() => {});
  };

  const onChangeName = (e) => {
    setName(e.target.value)
  }

  const onChangeColor = (e) => {
    setColor(e.target.value)
  };

  return (
    <div>
      <h1>Animals Create</h1>
      name:
      <input onChange={(e) => onChangeName(e)} />
      color: <input onChange={(e) => onChangeColor(e)} />
      <button onClick={() => onClickSubmit()}>submit</button>
      <br />
      <br />
      <Link href="/animals">Back to Index</Link>
    </div>
  );
};

export default Create;
