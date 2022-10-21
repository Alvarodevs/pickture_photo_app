import React from "react";
import {
    ModalBackground,
    ModalContainer,
    ImageContainer,
    Image,
    DataContainer,
    Description,
    DescriptionAndIconsContainer,
    IconsContainer,
    DataDisplayContainer,
    DownloadButton,
} from "./Styled_Modal";
import { useLocation, Link } from "react-router-dom";
import { Badge, TextField, Typography } from "@mui/material";
import {
    ThumbUpOutlined,
    EditOutlined,
    CloseRounded,
} from "@mui/icons-material";
import { saveAs } from 'file-saver'; 

const Modal = () => {
    const location = useLocation();
    const image = location.state;

    const saveFileFromUrl = (url, id) => {
        saveAs(url, `${id}.jpg`)
    };

    const handleDescriptionEdit = () => {
        if (location.pathname.includes("my_photos")) {
            return (
                <TextField
                variant="standard"
                    multiline="true"
                    maxRows="3"
                    fullWidth="true"
                    InputProps={{
                        disableUnderline: true,
                    }}
                    defaultValue={
                        image.description
                            ? image.description
                            : "No description available."
                    }
                />
            );
        } else {
            return (
                <Description>
                    {image.description
                        ? image.description
                        : "No description available."}
                </Description>
            );
        }
    };

    return (
        <ModalBackground>
            <ModalContainer>
                <ImageContainer>
                    <Link
                        to={
                            location.pathname.includes("my_photos")
                                ? "/my_photos"
                                : "/"
                        }
                    >
                        <CloseRounded />
                    </Link>

                    <Image src={image.url_full} alt={image.alt_description} />
                </ImageContainer>
                <DataContainer>
                    <DescriptionAndIconsContainer>
                        {handleDescriptionEdit()}
                        <IconsContainer>
                            <Badge
                                badgeContent={image.likes}
                                anchorOrigin={{
                                    vertical: "top",
                                    horizontal: "left",
                                }}
                                color="primary"
                            >
                                <ThumbUpOutlined
                                    className="modal-icon"
                                    fontSize="large"
                                />
                            </Badge>
                            {location.pathname.includes("my_photos") ? (
                                <EditOutlined
                                    className="edit-icon"
                                    fontSize="large"
                                />
                            ) : null}
                        </IconsContainer>
                    </DescriptionAndIconsContainer>
                    <DataDisplayContainer>
                        <Typography variant="h6">
                            Width: {image.width || "None"}
                        </Typography>
                        <Typography variant="h6">
                            Heigth: {image.heigth || "None"}
                        </Typography>
                        <Typography variant="h6">Date: {image.date}</Typography>
                    </DataDisplayContainer>
                    <DownloadButton
                        onClick={() =>
                            saveFileFromUrl(image.url_full, image.id)
                        }
                    >
                        Download
                    </DownloadButton>
                </DataContainer>
            </ModalContainer>
        </ModalBackground>
    );
};

export default Modal;
