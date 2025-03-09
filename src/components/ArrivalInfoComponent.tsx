import { Box, Stack, Title, Text, Space } from '@mantine/core';

const ArrivalInfoComponent = () => {
  return (
    <Box pl={'lg'} pr={'lg'}>
      <Stack>
        <Title order={4} fw={700} style={{ textAlign: 'left' }}>
          Wie kommst du zur Feier? 
        </Title>
        <Text style={{ textAlign: 'left' }}>
          Damit du stressfrei zu unserer Hochzeit anreisen könnt, haben wir hier alle wichtigen Infos für dich zusammengefasst. 😊
        </Text>
        <Text fw={500} style={{ textAlign: 'left' }}>
          Adresse der Trauungslocation:
        </Text>
        <Text style={{ textAlign: 'left' }}>
          Weingut am Cobenzl
          <br /> Eingang: 29 Oberer Reisenbergweg, 1190 Wien
        </Text>
        <Text fw={500} style={{ textAlign: 'left' }}>
          Mit dem Auto:
        </Text>
        <Text style={{ textAlign: 'left' }}>
          Falls du auf der Suche nach einem Parkplatz bist, gibt es ausreichend Parkmöglichkeiten direkt an den Locations.
        </Text>
        <Text style={{ textAlign: 'left' }}>
          z.B. Parkplatz Cobenzl
        </Text>
        <Text fw={500} style={{ textAlign: 'left' }}>
          Mit öffentlichen Verkehrsmitteln:
        </Text>
        <Text style={{ textAlign: 'left' }}>
          Der nächstgelegene Bahnhof ist Wien Heiligenstadt, ca. 20 Minuten mit öffentlichen Verkehrsmitteln.
        </Text>
        <Text style={{ textAlign: 'left' }}>
          A38 Busstation: Parkplatz Cobenzl, nur wenige Meter von der Location entfernt.
        </Text>
        <Text fw={500} style={{ textAlign: 'left' }}>
          Shuttle-Service (optional):
        </Text>
        <Text style={{ textAlign: 'left' }}>
          Für unsere Gäste, die ohne Auto anreisen möchten, bieten wir einen kostenlosen Shuttle-Service vom Bahnhof Wien Heiligenstadt zur Trauungs- und Hochzeitsfeier-Location an.
        </Text>
        <Text style={{ textAlign: 'left' }}>
          Bei Interesse bitten wir dies bei der Anmeldung anzugeben. Die Informationen zur Abfahrt werden zeitnah übermittelt.
        </Text>
      </Stack>
    </Box>
  );
};

export default ArrivalInfoComponent;
