import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ContactUs = () => {
  // const location = useLocation();
  // const navigate = useNavigate();
  // const queryParams = new URLSearchParams(location.search);
  // const myParam = new URLSearchParams(location.search).get("myParam");
  // const myParam2 = new URLSearchParams(location.search).get("paramName");
  // const [filterValue, setFilterValue] = useState(queryParams.get("filter"));
  // const currentPage = Number(queryParams.get("page")) || 1;

  // function handleParamUpdate() {
  //   // update query parameters
  //   queryParams.set("paramName", "newValue");

  //   // create new search string and navigate to it
  //   const newSearch = `?${queryParams.toString()}`;
  //   navigate({ search: newSearch });
  // }

  // function handleFilterUpdate(event) {
  //   event.preventDefault();

  //   // update query parameters with new filter value
  //   queryParams.set("filter", filterValue);
  //   navigate({ search: queryParams.toString() });
  // }

  // function handlePageChange(newPage) {
  //   // update query parameters with new page number
  //   queryParams.set("page", newPage);
  //   navigate({ search: queryParams.toString() });
  // }
  return (
    <div>
      <h1 className="font-bold text-3xl p-4 m-4">Contact Us</h1>
      <form>
        <input
          type="text"
          className="border border-black p-2 m-2"
          placeholder="name"
        />
        <input
          type="text"
          className="border border-black p-2 m-2"
          placeholder="message"
        />
        <button className="border border-black p-2 m-2 bg-gray-100 rounded">
          Submit
        </button>
      </form>
      {/* <button onClick={handleParamUpdate}>Update Query Parameter</button>

      <form onSubmit={handleFilterUpdate}>
        <label>
          Filter:
          <input
            type="text"
            value={filterValue}
            onChange={(e) => setFilterValue(e.target.value)}
          />
        </label>
        <button type="submit">Apply Filter</button>

        <button
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          Previous Page
        </button>
        <span>Page {currentPage}</span>
        <button onClick={() => handlePageChange(currentPage + 1)}>
          Next Page
        </button>
      </form> */}
    </div>
  );
};

export default ContactUs;
