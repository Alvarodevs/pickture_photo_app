import { GridContainer } from "./Styled_Card_grid";
import Card from "../card";
import { useSelector } from "react-redux";
import {
    selectAppState,
    selectImages,
} from "../../features/search/searchSlice";
import { selectAppStateFavs, selectFavs } from "../../features/favorites/favoritesSlice";
import { CircularProgress } from "@mui/material";
import { useLocation } from "react-router-dom";


const CardsGrid = () => {
    const imagesSearch = useSelector(selectImages);
    const imagesFavs = useSelector(selectFavs);
    const state = useSelector(selectAppState);
    const stateFavs = useSelector(selectAppStateFavs);

    const location = useLocation();
    const isPathMyPhotos = location.pathname.includes("/my_photos");

    return (
        <GridContainer>
            {/* Spinner when loading */}
            {(isPathMyPhotos ? stateFavs : state) === "loading" && (
                <CircularProgress />
            )}

            {/* Grid from search or favorites, loaded from redux */}
            {(isPathMyPhotos ? stateFavs : state) === "ok" &&
                (isPathMyPhotos ? imagesFavs : imagesSearch).map((image) => (
                    <Card
                        key={image.id}
                        id={image.id}
                        width={image.width}
                        heigth={image.height}
                        likes={image.likes}
                        description={image.description}
                        alt_description={image.alt_description}
                        url_full={
                            image.url_full ? image.url_full : image.urls.full
                        }
                        url_thumb={
                            image.url_thumb ? image.url_thumb : image.urls.thumb
                        }
                    />
                ))}
            {/* {state === 'ko' && <Error/>} */}
        </GridContainer>
    );
};

export default CardsGrid;
