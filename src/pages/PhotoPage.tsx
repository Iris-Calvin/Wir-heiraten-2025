// Photo.tsx
import { FileDrop } from '../components/FileDrop.tsx';
import DropboxGallery from '../components/DropboxGallery.tsx';
import { Container, Box, Text, Anchor } from '@mantine/core';
import classes from '../css/Photo.module.css';

const PhotoPage = () => {
  return (
    <Box className={classes.wrapper}>
      <Text size="xl" className={classes.title}>
        Danke für eure Fotos!
      </Text>

      <Container size={'xs'}>
        <Box ta={'left'}>
          <Text size='md'>
            Bitte folgt dem untenstehenden Link um eure Fotos mit uns zu teilen:
          </Text>
          <Anchor href="https://www.picdrop.com/hochzeitiriscalvin/q4ETsNFx86" target="_blank" fw={700}>
              Picdrop.com
          </Anchor>
        </Box>
      </Container>
      {/* <FileDrop /> */}
     {/* <DropboxGallery /> */}
    </Box>
  );
};

export default PhotoPage;
