import React from 'react';
import { Link } from 'react-router-dom';
import HumanEye from '../../assets/explore/human_eye.jpeg'
import HumanBrain from '../../assets/explore/human_brain.jpeg'
import HumanHeart from '../../assets/explore/human_heart.jpg'
import HumanSkeleton from '../../assets/explore/human_skeleton.jpeg'
import PlantCell from '../../assets/explore/plant_cell.jpg'
import DigestiveSystem from "../../assets/explore/digestive_system.jpg"
import Lungs from '../../assets/explore/lungs.jpeg'
import "./Explore.css"

const Explore = () => {
    return (
        <div>

            <div className="explore_title">
                <h1 className="explore_title_text">
                    Select Topic
                </h1>
                <div className="explore_title_line"></div>
            </div>

            <div className="cards-list">

                <Link to="/heart" className="card" style={{ textDecoration: "none" }}>
                    <div className="card-image">
                        <img alt="" src={HumanHeart} rel="" />
                    </div>
                    <div className="card-title title-black">
                        <p>Human Heart</p>
                    </div>
                </Link>

                <Link to="/brain" className="card" style={{ textDecoration: "none" }}>
                    <div className="card-image">
                        <img alt="" src={HumanBrain} rel="" />
                    </div>
                    <div className="card-title title-black">
                        <p>Human Brain</p>
                    </div>
                </Link>

                <Link to="/skeleton" className="card" style={{ textDecoration: "none" }}>
                    <div className="card-image">
                        <img alt="" src={HumanSkeleton} rel="" />
                    </div>
                    <div className="card-title title-black">
                        <p>Human Skeleton</p>
                    </div>
                </Link>

                <Link to="/plantcell" className="card" style={{ textDecoration: "none" }}>
                    <div className="card-image">
                        <img alt="" src={PlantCell} rel="" height="200" />
                    </div>
                    <div className="card-title title-black">
                        <p>Plant Cell</p>
                    </div>
                </Link>

                <Link to="/lungs" className="card" style={{ textDecoration: "none" }}>
                    <div className="card-image">
                        <img alt="" src={Lungs} rel="" height="200" />
                    </div>
                    <div className="card-title title-black">
                        <p>Lungs</p>
                    </div>
                </Link>

            </div>

        </div>
    );
}
export default Explore;
