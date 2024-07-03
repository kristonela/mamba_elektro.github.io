import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import {
  dataabout,
  meta,
  worktimeline,
  skills,
  services,
} from "../../content_option";

import foto from '../../assets/img/bg3.jpg';

export const About = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> O nás | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">O nás</h1>            
          </Col>
          <hr className="t_border my-4 ml-0 text-left" />
          <p><strong>Firma MAMBA ELEKTRO, s.r.o.</strong> sa špecializuje na <strong>elektroinštalačné práce, montáže a práce s plošinou MP-16</strong> na území Východného Slovenska. </p>
          <p>Naša história siaha až do roku 2016, kedy bola firma zaevidovaná pod názvom <strong>Jakub Šmajda - MAMBA ELEKTRO v ZRSR SR</strong>. V roku 2023 sme sa transformovali na spoločnosť s ručením obmedzeným, <strong>MAMBA ELEKTRO, s.r.o.</strong> </p>
          <p>Disponujeme potrebnými certifikátmi a pravidelne sa školíme, aby sme zabezpečili kvalitné služby. Ak hľadáte spoľahlivého partnera pre dodávku materiálu a realizáciu montážnych prác, <strong>neváhajte nás kontaktovať</strong>.</p>
        </Row>

        <Row className="sec_sp">
          <Col lang="5">
            <h3 className="color_sec py-4">Aké služby ponúkame ?</h3>
            <img src={foto} style={{width: '90%'}}/>
          </Col>
          <Col lg="7">
            {services.map((data, i) => {
              return (
                <div className="service_ py-4" key={i}>
                  <h5 className="service__title">{data.title}</h5>
                  <p className="service_desc">{data.description}</p>
                </div>
              );
            })}
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
