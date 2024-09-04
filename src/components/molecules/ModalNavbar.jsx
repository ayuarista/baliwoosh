import React from "react";
import { FaSearch } from "react-icons/fa";
import SearchNav from "./SearchNav";
const ModalNavbar = () => {
  return (
    <div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <button
        className=""
        onClick={() => document.getElementById("my_modal_2").showModal()}
      >
        <FaSearch />
      </button>
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
         <SearchNav/>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default ModalNavbar;
