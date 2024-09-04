import FilterNominal from "../molecules/FilterNominal.jsx";
import RadioFilter from "../molecules/RadioFilter.jsx";
import RatingDestinations from "../molecules/RatingDestinations.jsx";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Filter = ({ props }) => {
    const Location = ["Badung", "Denpasar", "Kintamani", "Gianyar", "Singaraja"];
    const rating = ["5", "4", "3"];
    const [filterChecked, setFilterChecked] = useState({});
    const [filteredData, setFilteredData] = useState(props.data);

    const handleChecked = (title, value) => {
        setFilterChecked((prevFilter) => ({ ...prevFilter, [title]: value }));
    };
    const sortData = () => {
        let sortedData = props.data;
        
        if (filterChecked["Destinations"]) {
            sortedData = sortedData.filter((item) =>
                item.location.includes(filterChecked["Destinations"])
            );
        }

        if (filterChecked["Ratings"]) {
            sortedData = sortedData.filter(
                (item) => Math.floor(item.rating) === parseInt(filterChecked["Ratings"])
            );
        }

        // Sort by price or other criteria if needed
        // Example: sortedData.sort((a, b) => a.price - b.price);

        setFilteredData(sortedData);
    };
    useEffect(() => {
        sortData();
        onFilteredData(filteredData); // Pass filteredData to parent or other components
    }, [filterChecked]);

    return (
        <div className="border rounded p-5 w-fit cursor-pointer">
            <div className="flex mb-6 gap-28">
                <h1 className="font-semibold">Filter</h1>
                <p
                    className="font-medium text-gray-400 cursor-pointer"
                    onClick={() => setFilterChecked({})}
                >
                    Reset All
                </p>
            </div>
            <div className="">
                <RadioFilter
                    listChecked={props.filter}
                    titleCheck="What you lookin for?"
                    onChecked={(value) => handleChecked("What you lookin for?", value)}
                />
                <RadioFilter
                    listChecked={Location}
                    titleCheck="Destinations"
                    onChecked={(value) => handleChecked("Destinations", value)}
                />
                <RadioFilter
                    listChecked={rating}
                    titleCheck="Rating"
                    onChecked={(value) => handleChecked("Ratings", value)}
                />
                <FilterNominal />
            </div>
        </div>
    );
};

export default Filter;