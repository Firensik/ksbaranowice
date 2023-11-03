import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../Footer/Footer";
import img1 from "../../assets/ostatnimecz/img1.jpg";
import "./HomePageStyle.css";
import Tabela from "./TabelaLigowa.json";

const HomePage = () => {
  return (
    <div>
      <Header />
      <div className="homePage">
        <div className="homePageBox">
          <div className="lastGame">
            <section className="sectionLastGame">
              <header className="sectionHeader">
                <h3>Ostatni mecz</h3>
              </header>
              <div className="sectionBody">
                <div className="homeBox">
                  <img src={img1} alt="Zdjecie wyniku" />
                </div>
              </div>
            </section>
          </div>
          <div className="scores">
            <h3>Rybnik: Klasa A "KLASA A"</h3>
            <div className="test">
              <table className="table">
                <thead>
                  <tr>
                    <th>Lp.</th>
                    <th>Drużyna</th>
                    <th>M</th>
                    <th>Pkt</th>
                    <th>Z</th>
                    <th>R</th>
                    <th>P</th>
                    <th>+/-</th>
                  </tr>
                </thead>
                <tbody className="rows">
                  {Tabela.map((row) => (
                    <tr key={row.Lp}>
                      <td>{row.Lp}</td>
                      <td className="team">{row.Drużyna}</td>
                      <td>{row.M}</td>
                      <td className="pkt">{row.Pkt}</td>
                      <td>{row.Z}</td>
                      <td>{row.R}</td>
                      <td>{row.P}</td>
                      <td>{row["+/-"]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
