import React from "react";


const Search = (props) => {

  let handleChange = evt => {
    props.changeSearchTerm(evt.target.value)
  }
  return (

    <div className="searchBar">
      <input className="select" type="text" placeholder="Coffee Beans..." value={props.searchTerm} onChange={handleChange} aria-label="Search" />
    </div>
  );


}

export default Search;
