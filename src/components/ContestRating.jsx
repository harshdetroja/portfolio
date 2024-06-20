import { useState, useEffect } from "react";
import axios from "axios";
import { colors } from "../data/data";

export function ContestRating() {
  const [rating, setRating] = useState(0);
  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        "https://alfa-leetcode-api.onrender.com/harshdetroja2001/contest"
      );
      const dt = response.data;
      setRating(dt);
    };
    getData();
  }, []);
  return (
    <>
      <div className="bg-primaryBg my-4 p-4 rounded-md">
        <h2 className="text-primary text-xl mb-6">Contest Rating</h2>
        <div className="grid grid-cols-2 justify-items-center items-center h-72 gap-3 lg:gap-2 mb-4">
          <div
            className={`text-2xl w-full border-2 h-full px-8 rounded-md flex flex-col justify-center items-center ${colors[6]}`}
          >
            <div className="text-violet-400 ">Rating</div>
            <div className="text-white ">
              {Math.round(rating.contestRating)}
            </div>
          </div>
          <div
            className={`text-2xl w-full border-2 h-full px-8 rounded-md flex flex-col justify-center items-center ${colors[4]}`}
          >
            <div className="text-orange-400 ">Top</div>
            <div className="text-white ">{rating.contestTopPercentage}%</div>
          </div>
          <div
            className={`text-2xl w-full border-2 h-full px-8 rounded-md flex flex-col justify-center items-center ${colors[5]}`}
          >
            <div className="text-pink-400 ">Ranking</div>
            <div className="text-white ">{rating.contestGlobalRanking}</div>
          </div>
        </div>
      </div>
    </>
  );
}
