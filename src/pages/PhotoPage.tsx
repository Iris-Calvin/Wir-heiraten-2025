// Photo.tsx
import { FileDrop } from '../components/FileDrop.tsx';
import DropboxGallery from '../components/DropboxGallery.tsx';
import { Box, Text } from '@mantine/core';
import classes from '../css/Photo.module.css';

const FotosPage = () => {
  return (
    <Box className={classes.wrapper}>
      <Text size="xl" className={classes.title}>
        Danke für eure Fotos!
      </Text>
      <FileDrop />
      <DropboxGallery />
    </Box>
  );
};

export default FotosPage;
