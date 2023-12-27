import { useEffect, useState } from "react";

const SurveyList = () => {
  const [surveys, setSurveys] = useState([]);

  useEffect(() => {
    const fetchSurveys = async () => {
      try {
        const response = await fetch("/api/survey/get");
        if (response.ok) {
          const data = await response.json();
          setSurveys(data.surveys);
        } else {
          console.error("Error fetching surveys");
        }
      } catch (error) {
        console.error("Error fetching surveys", error);
      }
    };

    fetchSurveys();
  }, []);

  return (
    <div className="max-w-2xl mx-auto mt-8 p-8 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4">Survey List</h2>
      <ul className="list-disc pl-4">
        {surveys.map((survey) => (
          <li key={survey._id} className="mb-6 border-b pb-4">
            <p className="text-lg font-semibold">Name: {survey.name}</p>
            <p className="text-gray-700">Gender: {survey.gender}</p>
            <p className="text-gray-700">Nationality: {survey.nationality}</p>
            <p className="text-blue-500">Email: {survey.email}</p>
            <p className="text-gray-700">Phone Number: {survey.phone}</p>
            <p className="text-gray-700">Address: {survey.address}</p>
            <p className="text-gray-700">Message: {survey.message}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SurveyList;
