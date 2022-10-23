import React, { useState } from "react";
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
    SaveAltOutlined,
    CloseRounded,
} from "@mui/icons-material";
import { saveAs } from "file-saver";
import { useDispatch } from "react-redux";
import { editDescription } from "../../features/favorites/favoritesSlice";

const Modal = () => {
    const location = useLocation();
    const dispatch = useDispatch();

    //Image object recovered from state, passed by Link
    const image = location.state;
    const [description, setDescription] = useState(
        !image.description ? "No description available." : image.description
    );
    const saveFileFromUrl = (url, id) => {
        saveAs(url, `${id}.jpg`);
    };

    const handleDescriptionField = () => {
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
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            );
        } else {
            return (
                <Description>
                    {description}
                </Description>
            );
        }
    };

    const handleEditDescription = (id, description) => {
        dispatch(editDescription({
            id: id, 
            description: description
        }));
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
                        {handleDescriptionField()}
                        <IconsContainer>
                            <Badge
                                badgeContent={image.likes}
                                anchorOrigin={{
                                    vertical: "top",
                                    horizontal: "left",
                                }}
                                color="primary"
                                className="badge"
                            >
                                <ThumbUpOutlined
                                    className="modal-icon"
                                    fontSize="large"
                                />
                            </Badge>
                            {location.pathname.includes("my_photos") ? (
                                <SaveAltOutlined
                                    className="edit-icon"
                                    fontSize="large"
                                    onClick={handleEditDescription(image.id, description)}
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
