import React from "react";
import team1 from "../../Assets/images/team1.png";
import imgWater from "../../Assets/images/water.png";

const About = () => {
  return (
    <div class="pl-2 mt-5 mb-3">
      <div class="container">
        <div class="row justify-content-md-center mt-2">
          <div class="card-body p-0">
            <div class="row">
              <div class="col-md-6" style={{ paddingTop: "40px" }}>
                <h2 style={{ fontFamily: "'Montserrat', sans-serif;" }}>
                  ABOUT
                  <br />
                  US
                </h2>
                <p class="text-left" style={{ fontSize: "larger" }}>
                  Sistem Monitoring pada Hidroponik Farm
                  <br />
                  Polibatam Berbasis IoT
                </p>
                <h2
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: "xx-large",
                  }}
                >
                  OUR
                  <br />
                  TEAM
                </h2>
                <p class="text-left">
                  <br />
                  Manager Proyek : DP - Dodi Prima Resda, S.Pd., M.Kom
                  <br />
                  Co-Manajer Proyek : Rizki H.P
                  <br />
                  <br />
                  Nama Anggota Kelompok
                  <br />
                  4311901033 - Ana Mufida
                  <br />
                  4311901043 - Moh.Zain Abdul Mazjid
                  <br />
                  4311901085 - Muhammad Ibnu Farhan
                  <br />
                  4311901036 - Kirani
                  <br />
                  4311901038 - Adam Firdaus
                  <br />
                  4311901068 - Amira Afiqa Ardi
                  <br />
                  4311901093 - Samudra Abriliawan
                </p>
              </div>
              <div class="col-md-6 rounded-start">
                <img
                  src={team1}
                  class="img-fluid rounded-start align-items-center"
                  alt=""
                  style={{ paddingTop: "180px" }}
                />
              </div>
              <p>
                <br />
              {/* </p>
              <a class="text-left mb-3" href="hidropol.html">
                <button class="button button1">Read more</button>
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
