import React from "react";
import image from "./res/6546570_preview.png"
import image1 from "./res/world.jpg"

function Jsx() {
    return (
        <div>
            <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
                <h1 className="title red">Marulina</h1>
                <br />
                <img src={image} alt="no image" />
                <br />
                <img src={image1} alt="no image" />
            </div>
            <iframe
                width={1280}
                height={540}
                src="https://www.youtube.com/embed/V3PViosuI50"
                frameBorder={0}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
        </div>

    );

}

/* 
<div style="border:solid 1px black;max-width:100vw">

<h1 class="title red">Your name here</h1>

<br >

<img src="/imageInSrc.jpg" >

<br >

<img src="/imageInPublic.jpg" >

</div>

<video width="320" height="240" controls>

<source src="myVideo.mp4" type="video/mp4" >

</video> */

export default Jsx;