// pages/user.js
import axios from "axios";
import type { GetServerSideProps, NextPage } from "next";

// url: 'https://randomuser.me/api/',
// dataType: 'json',
// success: function(data) {
//   console.log(data);
// }

export async function GetServerSideProps(context: any) {
  // context 파라미터는 요청에 대한 정보를 가지고 있습니다.
  const res = await axios.get("https://randomuser.me/api/");
  console.log("res");
  console.log(res);
  const data = res.data;
  console.log("data");
  console.log(data);

  // 반환된 객체의 props 키에 들어가는 값이 컴포넌트의 props로 전달됩니다.
  return { props: { user: data } };
}

function TestCounter({
  user,
}: {
  user: {
    name: string;
    email: string;
  };
}) {
  // 서버로부터 받은 사용자 데이터를 페이지에 렌더링합니다.
  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
}

export default TestCounter;

const m = {
  results: [
    {
      gender: "male",
      name: { title: "Mr", first: "Borimisl", last: "Storozh" },
      location: {
        street: { number: 7425, name: "Oleksi Girnika" },
        city: "Prip'yat",
        state: "Luganska",
        country: "Ukraine",
        postcode: 57983,
        coordinates: { latitude: "76.1998", longitude: "-24.0332" },
        timezone: { offset: "-9:00", description: "Alaska" },
      },
      email: "borimisl.storozh@example.com",
      login: {
        uuid: "1d2b3b78-74b3-4d49-a373-3e2b30ec5298",
        username: "heavyduck277",
        password: "cindy",
        salt: "ErRm1sKQ",
        md5: "a9764603a41c3a93051548661366ed03",
        sha1: "d56730dbc59b72292e343608081f1bf6d15400eb",
        sha256:
          "e59c5739f85ecfa962a06491c1a49a9ddee97c33be5554620d621b4511f5475a",
      },
      dob: { date: "1996-07-02T14:55:04.883Z", age: 27 },
      registered: { date: "2005-06-18T09:54:45.230Z", age: 18 },
      phone: "(067) A97-3155",
      cell: "(099) D41-6437",
      id: { name: "", value: null },
      picture: {
        large: "https://randomuser.me/api/portraits/men/71.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/71.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/71.jpg",
      },
      nat: "UA",
    },
  ],
  info: { seed: "49a68c8c5c89dcaf", results: 1, page: 1, version: "1.4" },
};
