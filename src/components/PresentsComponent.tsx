import { Box, Stack, Title, List, Text, Space } from '@mantine/core';

const PresentsComponent = () => {
  return (
    <>
        <Stack>
            <Box pl={'lg'}>
                <Title order={4} fw={700} style={{ textAlign: 'left' }}>
                    Du denkst an Geschenke?
                </Title>
                <Text style={{ textAlign: 'left' }}>
                    Deine Anwesenheit bei unserer Hochzeit ist für uns das größte Geschenk (und die leichteste Gepäckoption)! 
                </Text>
                <Text style={{ textAlign: 'left' }}>
                Wenn du uns trotzdem noch was Gutes tun wollt, freut sich unser Sparschwein über Futter – damit wir unsere Koffer für die Flitterwochen ordentlich vollpacken können!
                </Text>
                <Space h="lg"/>
                <Text fw={500} style={{ textAlign: 'left' }}>
                    Falls du kein Freund von Sparschweinfutter bist, haben wir hier ein paar Alternativen für euch:
                </Text>
                <List style={{ textAlign: 'left' }} pt={'sm'} pl={'lg'} pr={'xl'}>
                    <List.Item>
                        <Text>
                            Romantisches Abendessen
                        </Text>
                    </List.Item>
                    <List.Item>
                        <Text>
                            Wellness Kurzurlaub
                        </Text>
                    </List.Item>
                    <List.Item>
                        <Text>
                            Paar-Fotoshooting
                        </Text>
                    </List.Item>
                    <List.Item>
                        <Text>
                            Sammler Münzprägungen (Bsp. Münze Austria)
                        </Text>
                    </List.Item>
                </List>
            </Box>
        </Stack>
    </>
  );
};

export default PresentsComponent;
