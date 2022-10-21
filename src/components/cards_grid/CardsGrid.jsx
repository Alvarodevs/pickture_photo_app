import { GridContainer } from "./Styled_Card_grid";
import Card from "../card";
import { useSelector } from "react-redux";
import {
    selectAppState,
    selectImages,
} from "../../features/search/searchSlice";
import { CircularProgress } from "@mui/material";

const CardsGrid = () => {
    const images = useSelector(selectImages);
    const state = useSelector(selectAppState);

    return (
        <GridContainer>
            {state === "loading" && <CircularProgress />}
            {state === "ok" &&
                images.map((image) => (
                    <Card
                        key={image.id}
                        id={image.id}
                        width={image.width}
                        heigth={image.height}
                        likes={image.likes}
                        description={image.description}
                        alt_description={image.alt_description}
                        url_full={image.urls.full}
                        url_thumb={image.urls.thumb}
                        url_small={image.urls.small}
                    />
                ))}
            {/* {state === 'ko' && <Error/>} */}
        </GridContainer>
    );
};

export default CardsGrid;
