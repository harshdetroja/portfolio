import axios from "axios";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import { LCchip } from "./LCchip";
import { colors } from "../data/data";

ChartJS.register(ArcElement, Tooltip, Legend);

export function ProblemsSolved() {
  const [easy, setEasy] = useState(10);
  const [medium, setMedium] = useState(20);
  const [hard, setHard] = useState(30);

  const data = {
    labels: ["Easy", "Medium", "Hard"],
    datasets: [
      {
        label: "Problems Solved",
        data: [easy, medium, hard],
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
        ],
        borderWidth: 2,
      },
    ],
  };

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        "https://alfa-leetcode-api.onrender.com/harshdetroja2001/solved"
      );
      const dt = response.data.acSubmissionNum;
      setEasy(dt[1].count);
      setMedium(dt[2].count);
      setHard(dt[3].count);
    };
    getData();
  }, []);
  return (
    <>
      <div className="bg-primaryBg my-4 p-4 rounded-md">
        <h2 className="text-primary text-xl mb-2">Problems Solved</h2>
        <div className="grid sm:grid-cols-2 gap-10 mb-4">
          <div className="h-64 lg:h-80 lg:w-80 xl:h-72 xl:w-72 flex justify-center items-center">
            <Pie data={data} />
          </div>
          <div className="flex flex-col gap-8 sm:mt-10 lg:mt-20 xl:mt-10 w-full">
            <div className="text-white text-center text-lg">
              Total: {easy + hard + medium} Solved
            </div>
            <div className="flex max-lg:flex-col xl:flex-col justify-center items-center gap-2">
              <div>
                <LCchip
                  title={data["labels"][0]}
                  count={easy}
                  color={"text-red-500"}
                  border={colors[0]}
                />
              </div>
              <div>
                <LCchip
                  title={data["labels"][1]}
                  count={medium}
                  color={"text-yellow-400"}
                  border={colors[1]}
                />
              </div>
              <div>
                <LCchip
                  title={data["labels"][2]}
                  count={hard}
                  color={"text-cyan-400"}
                  border={colors[2]}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
