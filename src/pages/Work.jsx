import React from "react";
import KajaLogo from "../assets/Kaja.jpg";
import FsiLogo from "../assets/Fsi.jpg";

const Work = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="row m-auto bg-light pt-3 pb-3 exp-container">
          <div className="col-12 d-flex">
            <img src={KajaLogo} alt="" style={{ width: "10rem" }} />

            <div className="ps-5 pt-3">
              <p className="h5">PT. Internusa Jayaabadi Sentosa (KAJA Group)</p>
              <p className="text-muted fs-6">
                Gedung Artha Graha Lt.27 - SCBD, Jl. Jenderal Sudirman No.Kav
                52-5, RT.5/RW.3, Senayan, Kota Jakarta Selatan
              </p>
              <p className="fw-semibold fst-italic">
                IT Staff - Frontend Developer
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row m-auto bg-light pt-3 pb-3 exp-container">
          <div className="col-12 d-flex">
            <img src={FsiLogo} alt="" style={{ width: "10rem" }} />

            <div className="ps-5 pt-3">
              <p className="h5">PT. Field Survey Indonesia</p>
              <p className="text-muted fs-6">
                {" "}
                Jl. Rajasa 3 no. 20 RT.9/RW.3, Selong, Kec. Kby. Baru, Kota
                Jakarta Selatan
              </p>
              <p className="fw-semibold fst-italic">Junior Programmer</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Work;
