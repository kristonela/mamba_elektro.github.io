import React, { useState } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css"; // Import the styles for react-image-lightbox
import { dataportfolio, meta } from "../../content_option";

export const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState(
      "Elektroinštalačné práce"
  );
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  // Define filterCategory before using it
  const filterCategory = (category) => {
    return dataportfolio.filter((data) => data.category === category);
  };

  // Use filterCategory after definition
  const filteredData = filterCategory(selectedCategory);

  const openLightbox = (index) => {
    setPhotoIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  return (
      <HelmetProvider>
        <Container className="About-header">
          <Helmet>
            <meta charSet="utf-8" />
            <title> Realizácie | {meta.title} </title>
            <meta name="description" content={meta.description} />
          </Helmet>
          <Row className="mb-5 mt-3 pt-md-3">
            <Col lg="8">
              <h1 className="display-4 mb-4"> Fotogaléria realizácií </h1>

            </Col>
          </Row>
          <div className="button-group mb-3">
            <button
                className={`ac_btn btn ${
                    selectedCategory === "Elektroinštalačné práce" ? "active" : ""
                }`}
                onClick={() => setSelectedCategory("Elektroinštalačné práce")}
            >
              Elektroinštalačné práce
            </button>
            <button
                className={`ac_btn btn ${
                    selectedCategory === "Montážna plošina" ? "active" : ""
                }`}
                onClick={() => setSelectedCategory("Montážna plošina")}
            >
              Montážna plošina
            </button>
          </div>
          <div className="mb-5 po_items_ho">
            {filteredData.map((data, index) => (
                <div
                    key={index}
                    className="po_item"
                    onClick={() => openLightbox(index)}
                >
                  <img src={data.img} alt={data.description} />
                  <div className="content">
                    <p>{data.description}</p>
                  </div>
                </div>
            ))}
          </div>
          {lightboxOpen && (
              <Lightbox
                  mainSrc={filteredData[photoIndex].img}
                  nextSrc={
                    filteredData[(photoIndex + 1) % filteredData.length].img
                  }
                  prevSrc={
                    filteredData[
                    (photoIndex + filteredData.length - 1) %
                    filteredData.length
                        ].img
                  }
                  onCloseRequest={closeLightbox}
                  onMovePrevRequest={() =>
                      setPhotoIndex(
                          (photoIndex +
                              filteredData.length -
                              1) %
                          filteredData.length
                      )
                  }
                  onMoveNextRequest={() =>
                      setPhotoIndex(
                          (photoIndex + 1) % filteredData.length
                      )
                  }
              />
          )}
        </Container>
      </HelmetProvider>
  );
};
