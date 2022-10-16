import React from "react";
import {
    FooterContainer,
    Mail,
    MediaLinks,
    MailContainer,
    Links
} from "./Styled_Footer";
import { CopyrightOutlined, ForwardToInboxOutlined, FavoriteOutlined } from "@mui/icons-material";
import linkedin from "../../assets/images/linkedin.svg";
import github from "../../assets/images/github.svg";


const Footer = () => {
    return (
        <div>
            <FooterContainer>
                <Mail>
                    <MailContainer>
                        <CopyrightOutlined />
                        <span>2022</span>
                    </MailContainer>
                    <MailContainer>
                        <ForwardToInboxOutlined />

                        <a href="mailto:alvaro.develops@gmail.com">
                            @Alvarodevs
                        </a>
                    </MailContainer>
                </Mail>
                <MediaLinks>
                    <span>
                        Made with <FavoriteOutlined /> by
                    </span>
                    <Links>
                        <a href="https://www.linkedin.com/in/alvarodevs4you/">
                            <img src={linkedin} alt="Linkedin profile" />
                        </a>
                        <a href="https://github.com/Alvarodevs">
                            <img src={github} alt="Github profile" />
                        </a>
                    </Links>
                </MediaLinks>
            </FooterContainer>
        </div>
    );
};

export default Footer;
