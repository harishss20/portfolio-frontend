"use client";
import { Grid } from "@mui/material";
import "./_card.scss";

import { TbExternalLink } from "react-icons/tb";

export interface CardDeatilProps {
  title: string
  bgImage: string
  projectImage: string
  discription: string
  tools: string[]
  link: string
}

export interface CardProps {
  cardDetails: CardDeatilProps[]
}

function Card(props: CardProps) {

  const { cardDetails } = props;

  return (
    cardDetails.map((card: CardDeatilProps) => (
      <Grid  key={card.title} className="card-container">
        <div className="card-img-container">
          <div className="card-img">  //bgImage
            <span className="card-title"> {card.title} </span>
            <img src={card.projectImage} alt={card.title} />
          </div>
        </div>
        <div className="discription-container">
          <div className="disc-top-con">
            <span className="discription"> {card.discription} </span>
            <button className="card-btn" onClick={() => {
              card.link
            }}><TbExternalLink /></button>
          </div>
          <div className="disc-bottom-con">
            {card.tools.map((tool) => (
              <div key={tool}>{tool}</div>
            ))}
          </div>
        </div>
      </Grid>
    ))
  )
}

export default Card
