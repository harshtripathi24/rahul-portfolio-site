import React from "react";
import "./Styles/AudioWork.css";
import { SiAudiomack } from "react-icons/si";
import ReactAudioPlayer from "react-audio-player";
import theatre_day from "./Media/audio_files/World Theater Day Satna Rocket.mp3";
import mothers_day from "./Media/audio_files/Sidhi Mothers Day Promo.mp3";
import holi_promo from "./Media/audio_files/HOLI CAPSULE - SATANA (1).mp3";
import lazy_lamhe from "./Media/audio_files/Lazy Lamhe Promo Satna Rocket .mp3";
import whatsapp_farmahish from "./Media/audio_files/farmaish Show Promo New Sidhi.mp3";
import train_sfar from "./Media/audio_files/KKKS Link 1.mp3";
import Nvaratri from "./Media/audio_files/Navratri  Capsule - Day 03 - Satna.mp3";

import LightSpeed from "react-reveal/LightSpeed";
import Zoom from "react-reveal/Zoom";
import "react-h5-audio-player/lib/styles.css";

export const AudioWork = () => {
  return (
    <div className="AudioWorkDiv">
      <LightSpeed right>
        <h2>
          <SiAudiomack className="AudioIcon" />
          Audio Work
        </h2>
      </LightSpeed>
      <div className="audioContainer">
        <Zoom>
          <div className="group">
            <h3>Day Specific Capsules</h3>

            <div className="col 1">
              <ReactAudioPlayer className="player" src={theatre_day} controls />
            </div>
            <div className="col 2">
              <ReactAudioPlayer className="player" src={mothers_day} controls />
            </div>
          </div>
        </Zoom>
        <Zoom>
          <div className="group">
            <h3>Day Specific Event Promo</h3>
            <div className="col 1">
              <ReactAudioPlayer className="player" src={holi_promo} controls />
            </div>
          </div>
        </Zoom>
        <Zoom>
          <div className="group">
            <h3>Show Promos</h3>
            <div className="col 1">
              <ReactAudioPlayer className="player" src={lazy_lamhe} controls />
            </div>
            <div className="col 2">
              <ReactAudioPlayer
                className="player"
                src={whatsapp_farmahish}
                controls
              />
            </div>
          </div>
        </Zoom>
        <Zoom>
          <div className="group">
            <h3>Day Specific Capsules</h3>
            <div className="col 1">
              <ReactAudioPlayer className="player" src={Nvaratri} controls />
            </div>
            <div className="col 2">
              <ReactAudioPlayer className="player" src={train_sfar} controls />
            </div>
          </div>
        </Zoom>
      </div>
    </div>
  );
};
