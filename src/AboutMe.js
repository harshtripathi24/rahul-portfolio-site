import React from "react";
import AboutImage from "./assets/images/Rahul AboutImage.png";
import { AboutMeDiv, ContactStyledButton } from "./AboutMe.styled";
import Pulse from "react-reveal/Pulse";

export const AboutMe = ({ AboutSectionRef }) => {
  return (
    <div>
      <AboutMeDiv>
        <h2 ref={AboutSectionRef}>About Me</h2>
        <div className="AboutSection">
          <Pulse>
            <img src={AboutImage} alt="" className="AboutMeImage" />
          </Pulse>
          <div className="textDiv">
            <h4>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
              laboriosam voluptate velit, enim, illo officiis repellendus iure
              rem ad debitis ducimus nobis deserunt quod. Error architecto sequi
              aut illo laudantium dolores iste a, consectetur sint quidem quis
              nihil molestiae nemo dolore sit eius aliquid tenetur voluptatum
              repellat dolorum accusantium! Voluptate similique, exercitationem
              maxime natus aperiam ipsa recusandae labore possimus culpa rerum
              magni ullam commodi hic ratione obcaecati quaerat sint eligendi
              sit alias fuga? Possimus sed recusandae inventore optio, labore
              molestias eum eveniet beatae? Dicta ut a laboriosam dolor
              reiciendis consectetur, cum blanditiis debitis esse suscipit quasi
              ex earum iusto minima, voluptatum consequuntur facilis alias fuga
              voluptate quibusdam dignissimos? Ea enim quisquam modi quod
              reiciendis atque tempore error, tempora corrupti. Animi dolores
              voluptas consequuntur blanditiis voluptates et, odit mollitia
              eaque expedita, aliquid corporis consequatur commodi labore non.
              Magni quae cum mollitia. Quis ad qui fuga rem numquam, ut quidem
              enim aliquam necessitatibus, voluptates dolorem aspernatur
              explicabo repellat alias, nobis optio iusto nesciunt accusamus
              deserunt dolorum! Minima est veritatis quisquam hic quis quo
              asperiores maiores laudantium, voluptatibus voluptatem sint
              tempora modi at quam explicabo harum aut iusto, consequuntur
            </h4>
            <ContactStyledButton>Contact Me</ContactStyledButton>
          </div>
        </div>
      </AboutMeDiv>
    </div>
  );
};
