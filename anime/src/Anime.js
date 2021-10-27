// import axios from "axios";
// import React, { useState } from "react";
// import App from "./App";

// function Anime() {
//   let [resourceType, setresourceType] = useState([]);
//   let [item, setItem] = useState([]);

//   const animeAxios = () => {
//     axios
//       .get("https://kitsu.io/api/edge//trending/anime")

//       .then((result) => {
//         resourceType = result.data.data;
//         setresourceType(resourceType);
//         console.log(resourceType);

//         // result.data.data[0].attributes.posterImage.medium; //img
//         //result.data.data[0].attributes.titles.en_jp; //title
//       })
//       .catch((err) => {
//         console.log("erorr");
//       });
//   };

//   const mangaAxios = () => {
//     axios
//       .get("https://kitsu.io/api/edge//trending/manga")
//       .then((result) => {
//         console.log(result);
//         resourceType = result.data.data;
//         setresourceType(resourceType);
//         console.log(resourceType);
//       })
//       .catch((err) => {
//         console.log("erorr");
//       });
//   };

//   return (
//     <div>
//       <button onClick={animeAxios}>Anime</button>
//       <button onClick={mangaAxios}>Manga</button>
//       <br></br>
//       <div>
//         {resourceType.map((e) => {
//           let img = e.attributes.posterImage.medium;
//           let title = e.attributes.titles.en_jp;
//           return (
//             <div className="card">
//               <h4>{title}</h4>
//               <img src={img}></img>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// export default Anime;

import axios from "axios";
import { useEffect, useState } from "react";
import App from "./App";

function Anime() {
  let [resourceType, setresourceType] = useState();
  let [item, setItem] = useState([]);

  useEffect(() => {
    axios
      .get(`https://kitsu.io/api/edge//trending/${resourceType}`)

      .then((result) => {
        item = result.data.data;
        setItem(item);
        console.log(item);

        // result.data.data[0].attributes.posterImage.medium; //img
        //result.data.data[0].attributes.titles.en_jp; //title
      })
      .catch((err) => {
        console.log("erorr");
      });
  }, [resourceType]);

  return (
    <div>
      <button onClick={() => setresourceType("anime")}>Anime</button>
      <button onClick={() => setresourceType("manga")}>Manga</button>
      <br></br>
      <div>
        {item.map((e) => {
          let img = e.attributes.posterImage.medium;
          let title = e.attributes.titles.en_jp;
          return (
            <div className="cards">
              <h4>{title}</h4>
              <img src={img}></img>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Anime;
