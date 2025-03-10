import { Anchor, Container, Box, Stack, Title, List, Text } from '@mantine/core';

const SleepoverComponent = () => {
  return (
    <>
        <Container size="md">
            <Stack>

            </Stack>
            <Stack>
                <Box>
                    <Title order={4} fw={700} style={{ textAlign: 'left' }}>
                        Benötigst du eine Übernachtungsmöglichkeit?
                    </Title>
                    <Text style={{ textAlign: 'left' }}>
                        Folgende Übernachtungsmöglichkeiten stehen in der Nähe zur Verfügung:
                    </Text>
                    <List style={{ textAlign: 'left' }} pt={'sm'} pl={'lg'} pr={'xl'}>
                        <List.Item>
                            <Text fw={700}>
                                Hotel-Residenz Schrannenhof 
                            </Text>
                            <Text>
                                (Fußmarsch entfernt)
                            </Text>
                            <Anchor href="https://www.schrannenhof.at/">
                                Hotel-Residenz Schrannenhof
                            </Anchor>
                        </List.Item>
                            <List.Item>
                            <Text fw={700}>
                                Hotel Anker 
                            </Text>
                            <Text>
                                (Fußmarsch entfernt)
                            </Text>
                            <Anchor href="https://www.hotel-anker.at/">
                                Hotel Anker
                            </Anchor>
                        </List.Item>
                            <List.Item>
                            <Text fw={700}>
                                Markgraf Hotel
                            </Text>
                            <Text>
                                (5 Min per Auto, 20 Min zu Fuß)
                            </Text>
                            <Anchor href="https://www.zummarkgraf.at/hotel/">
                                Markgraf Hotel
                            </Anchor>
                        </List.Item>
                        <List.Item>
                            <Text fw={700}>
                                Living Hotel Kaiser Franz Joseph
                            </Text>
                            <Text>
                                (25 Min per Auto)
                            </Text>
                            <Anchor href="https://www.living-hotels.com/standorte/wien/living-hotel-kaiser-franz-joseph/">
                                Living Hotel Kaiser Franz Joseph
                            </Anchor>
                        </List.Item>
                    </List>
                </Box>
                <Text style={{ textAlign: 'left' }}>
                Solltest du eine Übernachtungsmöglichkeit benötigen, bitten wir dich, diese eigenständig zu organisieren.
                </Text>
            </Stack>
        </Container>
    </>
  );
};

export default SleepoverComponent;

