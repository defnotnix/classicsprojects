"use client";

import React from "react";
//next
import { useRouter } from "next/navigation";
//mantine
import {
  Anchor,
  Box,
  Button,
  Container,
  Grid,
  Group,
  Image,
  Paper,
  SimpleGrid,
  Space,
  Stack,
  Text,
  Title,
} from "@mantine/core";
//styles
import cx from "clsx";
import classes from "./style.module.css";

import { motion } from "framer-motion";
import { AnimatedText } from "@/components/AnimatedText";
import { variantGeneralDelay } from "@/animation/variantGeneral";

const imgLogo = {
  src: "https://vdocs.classicsprojects.com.np/media/profile/creations.png",
};

const paperElementConfig = {
  radius: 0,
  bg: "var(--color-celebrations-primary-100)",
};

export function ModuleCreations() {
  const Router = useRouter();

  return (
    <>
      <section
        style={{
          minHeight: "100vh",
          width: "100vw",
          overflow: "hidden",
          background: "var(--color-celebrations-primary-100)",
        }}
      >
        <section className={classes.header}>
          <motion.div
            style={{
              display: "block",
              width: "100vw",
              top: 0,
              position: "fixed",
              background: "rgba(251, 229, 229,0)",
              backdropFilter: "blur(0px)",
              left: 0,
            }}
          >
            <Container py="lg">
              <Grid>
                <Grid.Col span={{ base: 8, lg: 5 }}>
                  <Group wrap="nowrap">
                    <Group>
                      <Image h={40} w={40} src={imgLogo.src} />
                      <Text size="xs" fw={600} lh=".9rem">
                        KaPa
                        <br />
                        Creations
                      </Text>
                    </Group>
                    {true && (
                      <>
                        <Text visibleFrom="lg" size="md">
                          *
                        </Text>
                        <Text
                          visibleFrom="lg"
                          size="xs"
                          opacity={0.8}
                          fw={600}
                          lh=".9rem"
                        >
                          We plan, produce, coordinate, design,
                          <br /> style, promote and live for a good party.
                        </Text>
                      </>
                    )}
                  </Group>
                </Grid.Col>

                <Grid.Col span={{ base: 4, lg: 3 }} offset={{ base: 0, lg: 4 }}>
                  <Group justify="flex-end">
                    <Button
                      size="md"
                      px="xl"
                      color="var(--color-celebrations-primary-500)"
                      visibleFrom="lg"
                      onClick={() => {
                        Router.push("/celebrations/contact");
                      }}
                    >
                      Get in touch
                    </Button>
                  </Group>
                </Grid.Col>
              </Grid>
            </Container>
          </motion.div>
        </section>

        <Container py={64} mt={100}>
          <Paper
            radius={0}
            bg="var(--color-celebrations-primary-600)"
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "column",
            }}
          >
            <Box>
              <Grid gutter={0}>
                <Grid.Col span={1}>
                  <Paper h={150} {...paperElementConfig} />
                  <Paper
                    mt={-0.5}
                    h={100}
                    {...paperElementConfig}
                    style={{
                      clipPath: "polygon(0 0, 0% 100%, 100% 0)",
                    }}
                  />
                </Grid.Col>
                <Grid.Col span={5}>
                  <Paper
                    {...paperElementConfig}
                    className={classes.top_1}
                    h={40}
                    w={40}
                    ml={-10}
                  />
                </Grid.Col>
                <Grid.Col span={2}>
                  <Group justify="flex-end">
                    <Paper
                      h={40}
                      w={40}
                      mt={-1}
                      {...paperElementConfig}
                      style={{
                        clipPath: "polygon(0 0, 100% 100%, 100% 0)",
                      }}
                    />
                  </Group>
                </Grid.Col>
                <Grid.Col span={4}>
                  <Paper h={40} {...paperElementConfig}>
                    <Box visibleFrom="lg">
                      <div
                        style={{
                          fontSize: "var(--mantine-font-size-xs)",
                          fontWeight: 600,
                          textAlign: "center",
                          textTransform: "uppercase",
                          display: "flex",
                        }}
                      >
                        <AnimatedText text="THE CLASSICS PROJECTS - CELEBRATIONS" />
                      </div>
                    </Box>{" "}
                    <Box hiddenFrom="lg" pt="md">
                      <div
                        style={{
                          fontSize: "6px",
                          fontWeight: 600,
                          textAlign: "center",
                          textTransform: "uppercase",
                          display: "flex",
                        }}
                      >
                        <AnimatedText text="THE CLASSICS PROJECTS - CELEBRATIONS" />
                      </div>
                    </Box>
                  </Paper>
                  <Grid.Col span={12}>
                    <Group justify="flex-end">
                      <Paper
                        {...paperElementConfig}
                        className={classes.top_2}
                        h={40}
                        w={40}
                        mr={-10}
                      />
                    </Group>
                  </Grid.Col>
                </Grid.Col>
              </Grid>

              <Container size="xl">
                <Grid gutter={0}>
                  <Grid.Col span={{ base: 12, lg: 7 }}>
                    <Box visibleFrom="lg">
                      <div
                        className="event-header flex-left"
                        style={{
                          fontSize: "3rem",
                          lineHeight: "3.5rem",
                          color: "white",
                          marginTop: -200,
                          marginLeft: "6rem",
                        }}
                      >
                        <AnimatedText text="Coming Soon." />
                        <AnimatedText text="The home for decors & furnitures" />
                        <AnimatedText text="to elevate your events." />
                      </div>
                    </Box>

                    <Box hiddenFrom="lg" pt="xl">
                      <div
                        className="event-header flex-left"
                        style={{
                          fontSize: "1.5rem",
                          lineHeight: "2rem",
                          color: "white",
                          marginTop: -200,
                          marginLeft: "3rem",
                        }}
                      >
                        <AnimatedText text="Coming Soon." />
                        <AnimatedText text="The home for decors & creative items" />
                        <AnimatedText text="to elevate your events." />
                      </div>
                    </Box>

                    <Space h={{ base: 0, lg: "8rem" }} />

                    <motion.div
                      variants={variantGeneralDelay(0)}
                      initial="initial"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.5 }}
                    >
                      <Group>
                        <Text size="xs" c="gray.0">
                          FOR CELEBRATIONS
                        </Text>
                        <Text size="xs" c="gray.0" opacity={0.5}>
                          FOR CELEBRATIONS
                        </Text>
                      </Group>
                    </motion.div>

                    <SimpleGrid cols={3} py="xl" visibleFrom="lg">
                      <motion.div
                        variants={variantGeneralDelay(0.1)}
                        initial="initial"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                      >
                        <Box>
                          <Text
                            size="xs"
                            c="gray.0"
                            tt="uppercase"
                            pb="md"
                            opacity={0.5}
                          >
                            Sitemap
                          </Text>
                          <Stack gap="4px">
                            <Anchor c="gray.0">Classics Home</Anchor>
                            <Anchor c="gray.0">About Us</Anchor>
                            <Anchor c="gray.0">Works</Anchor>
                            <Anchor c="gray.0">Contact</Anchor>
                            <Anchor c="gray.0">Team</Anchor>
                          </Stack>
                        </Box>
                      </motion.div>
                      <motion.div
                        variants={variantGeneralDelay(0.1)}
                        initial="initial"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                      >
                        <Box>
                          <Text
                            size="xs"
                            c="gray.0"
                            tt="uppercase"
                            pb="md"
                            opacity={0.5}
                          >
                            LEGAL
                          </Text>
                          <Stack gap="4px">
                            <Anchor c="gray.0">Terms & Conditions</Anchor>
                            <Anchor c="gray.0">Privacy Policies</Anchor>
                          </Stack>
                        </Box>
                      </motion.div>
                      <motion.div
                        variants={variantGeneralDelay(0.2)}
                        initial="initial"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                      >
                        <Box>
                          <Text
                            size="xs"
                            c="gray.0"
                            tt="uppercase"
                            pb="md"
                            opacity={0.5}
                          >
                            FIND US
                          </Text>
                          <Stack gap="4px">
                            <Anchor c="gray.0">Facebook</Anchor>
                            <Anchor c="gray.0">Instagram</Anchor>
                            <Anchor c="gray.0">Twitter</Anchor>
                            <Anchor c="gray.0">X</Anchor>
                            <Anchor c="gray.0">Linked In</Anchor>
                          </Stack>
                        </Box>
                      </motion.div>
                    </SimpleGrid>
                  </Grid.Col>
                  <Grid.Col
                    span={{ base: 12, lg: 5 }}
                    mt={{ base: 0, lg: -100 }}
                    visibleFrom="lg"
                  >
                    <div
                      style={{
                        fontSize: "2rem",
                        lineHeight: "1.8rem",
                        fontWeight: 600,
                        textAlign: "center",
                        //textTransform: "uppercase",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-end",
                        color: "var(--mantine-color-gray-0)",
                      }}
                    >
                      <AnimatedText text="KaPa" />
                      <AnimatedText text="Creations" />
                    </div>

                    <Space h="xl" />

                    <motion.div
                      variants={variantGeneralDelay(0.4)}
                      initial="initial"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.5 }}
                    >
                      <Stack gap="sm" my="xs">
                        <Text size="xs" c="gray.0" opacity={0.5} ta="right">
                          OFFICE
                        </Text>

                        <Text size="xs" c="gray.0" ta="right">
                          The Classics Projects HQ,
                        </Text>
                        <Text size="xs" c="gray.0" ta="right">
                          Lan Rd Marg, Himalayan Floral Enterprises,
                          <br /> Nayabasti, Kathmandu, Nepal.
                        </Text>
                        <Text size="xs" c="gray.0" ta="right">
                          Sunday - Friday ( 10 AM - 5 PM)
                        </Text>
                      </Stack>
                    </motion.div>

                    <motion.div
                      variants={variantGeneralDelay(0.5)}
                      initial="initial"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.5 }}
                    >
                      <Stack gap="sm" my="xs" mt="xl">
                        <Text size="xs" c="gray.0" opacity={0.5} ta="right">
                          CONTACT
                        </Text>

                        <Text size="xs" c="gray.0" ta="right">
                          +977 9801464626
                        </Text>
                        <Text size="xs" c="gray.0" ta="right">
                          classics.projects@gmail.com
                        </Text>
                      </Stack>
                    </motion.div>
                  </Grid.Col>

                  <Grid.Col
                    pt="xl"
                    span={{ base: 12, lg: 5 }}
                    mt={{ base: 0, lg: -100 }}
                    hiddenFrom="lg"
                  >
                    <div
                      style={{
                        fontSize: "2rem",
                        lineHeight: "1.8rem",
                        fontWeight: 600,
                        textAlign: "center",
                        //textTransform: "uppercase",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        color: "var(--mantine-color-gray-0)",
                      }}
                    >
                      <AnimatedText text="KaPa" />
                      <AnimatedText text="Celebrations" />
                    </div>

                    <Space h="xl" />

                    <motion.div
                      variants={variantGeneralDelay(0.4)}
                      initial="initial"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.5 }}
                    >
                      <Stack gap="sm" my="xs">
                        <Text size="xs" c="gray.0" opacity={0.5} ta="left">
                          OFFICE
                        </Text>

                        <Text size="xs" c="gray.0" ta="left">
                          The Classics Projects HQ,
                        </Text>
                        <Text size="xs" c="gray.0" ta="left">
                          Lan Rd Marg, Himalayan Floral Enterprises,
                          <br /> Nayabasti, Kathmandu, Nepal.
                        </Text>
                        <Text size="xs" c="gray.0" ta="left">
                          Sunday - Friday ( 10 AM - 5 PM)
                        </Text>
                      </Stack>
                    </motion.div>

                    <motion.div
                      variants={variantGeneralDelay(0.5)}
                      initial="initial"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.5 }}
                    >
                      <Stack gap="sm" my="xs" mt="xl">
                        <Text size="xs" c="gray.0" opacity={0.5} ta="left">
                          CONTACT
                        </Text>

                        <Text size="xs" c="gray.0" ta="left">
                          +977 9801464626
                        </Text>
                        <Text size="xs" c="gray.0" ta="left">
                          classics.projects@gmail.com
                        </Text>
                      </Stack>
                    </motion.div>
                  </Grid.Col>
                </Grid>
              </Container>
            </Box>

            <Box>
              <Space h="2rem" />
              <Grid gutter={0}>
                <Grid.Col span={12}>
                  <Group justify="flex-end">
                    <Paper
                      {...paperElementConfig}
                      className={classes.bot_2}
                      h={40}
                      w={40}
                      mr={-10}
                    />
                  </Group>
                </Grid.Col>
                <Grid.Col span={8}>
                  <Group justify="space-between" align="flex-end">
                    <Paper
                      {...paperElementConfig}
                      className={classes.bot_1}
                      h={40}
                      w={40}
                      ml={-10}
                    />
                    <Paper
                      {...paperElementConfig}
                      h={80}
                      w={80}
                      style={{
                        clipPath: "polygon(100% 0, 0% 100%, 100% 100%)",
                      }}
                    />
                  </Group>
                </Grid.Col>
                <Grid.Col span={4} visibleFrom="lg">
                  <Paper h={80} {...paperElementConfig}>
                    <motion.div
                      variants={variantGeneralDelay(0)}
                      initial="initial"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.5 }}
                    >
                      <Group
                        h={80}
                        justify="flex-end"
                        align="flex-end"
                        pr="3rem"
                      >
                        <Text size="xl">
                          We create, you{"    "}
                          <span
                            style={{
                              fontFamily:"var(--font-cursive)",
                              fontSize: "3rem",
                              display: "inline-block",
                              marginLeft: "0.5rem",
                            }}
                          >
                            celebrate
                          </span>
                        </Text>
                      </Group>
                    </motion.div>
                  </Paper>
                </Grid.Col>
              </Grid>
            </Box>
          </Paper>
        </Container>
      </section>
    </>
  );
}
