import React from 'react';
import mainBanner from "../../assets/images/homeBanner.png";
import "./Gallery.scss";
import cards_data from "../../data/logement.json";
import { Link } from "react-router-dom";
import Banner from "../../components/banner/Banner"

export interface CardData {
   id: string
   title: string
    cover: string
    pictures: string[]
    description:string
    host:{
        name:string
        picture:string
     }
     rating:string
     location:string
     equipments:string[]
     tags:string[]
}

export const Gallery: React.FC = () => {
    return (
        <div className="gallery">
            <div className="mainBanner">
                <Banner imageSrc={mainBanner} altText="Bannière montagne page accueil" className="mainBanner"/>
                <h1>Chez vous, partout et ailleurs</h1>
            </div>
            <div className="cards-container">
              {cards_data.map((cardData:CardData)=>(
                <Link key={cardData.id} to={{pathname:`card/${cardData.id}`}}>
                    <div className="card">
                    <img src={cardData.cover} alt="Cover" />
                    <h2>{cardData.title}</h2>
                    </div>
                </Link>
              ))
              }
            </div>
        </div>
    )
}