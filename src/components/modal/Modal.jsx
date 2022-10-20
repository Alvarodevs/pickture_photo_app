import React from 'react'
import { ModalBackground, ModalContainer, Image, DataContainer } from './Styled_Modal';
import { useLocation } from 'react-router-dom';
import { Typography, TextField } from '@mui/material';

const Modal = () => {

    const location = useLocation();
    const image = location.state;

    const handleDescriptionEdit = () => {
        if (location.pathname.includes('my_photos')) {
            return <TextField
                        defaultValue={
                            image.description
                                ? image.description
                                : "No description available."
                        }
                    />;
        } else {
            <Typography
                variant="h5"
                paragraph="true"
                defaultValue={image.description}
            >
            </Typography>;
        }
        
    }

  return (
      <ModalBackground>
          <ModalContainer>
              <Image src={image.url_full} alt={image.alt_description} />
              <DataContainer>
                  {handleDescriptionEdit()}
              </DataContainer>
          </ModalContainer>
      </ModalBackground>
  );
}

export default Modal;
