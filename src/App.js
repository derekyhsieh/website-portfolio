import {
  Flex,
  Heading,
  IconButton,
  Spacer,
  useColorMode,
  VStack,
  HStack,
  Stack,
  Text,
  Image,
} from "@chakra-ui/react";
import { FaSun, FaMoon, FaGithub, FaLinkedin, FaLink } from "react-icons/fa";
import Header from "./components/Header";
import ProjectContainer from "./components/Projects/ProjectContainer";
import {
  ScrollContainer,
  ScrollPage,
  Animator,
  Sticky,
  StickyIn,
  FadeIn,
  ZoomIn,
  Zoom,
  batch,
  Fade,
  MoveOut,
  Move,
  MoveIn,
} from "react-scroll-motion";
import "./App.css";
import cfood from "./images/cfood.png";
import arro from "./images/arro.png";
import unpuzzle from "./images/unpuzzle.png";
import dorodoro from "./images/dorodoro.png";

function App() {
  return (
    <VStack p={5}>
      <Flex w="100%">
        <Heading ml="8" size="xl" fontWeight="semibold" color="green.400">
          dyh
        </Heading>

        <Spacer></Spacer>
        <IconButton
          size="lg"
          icon={<FaLinkedin />}
          onClick={() => {
            window.open("https://www.linkedin.com/in/derek-hsieh-094691238/");
          }}
          color="green.400"
          isRound="true"
          // onClick={toggleColorMode}
        ></IconButton>
        <IconButton
          onClick={() => {
            window.open("https://github.com/DerekHsiehDev");
          }}
          size="lg"
          s
          color="green"
          ml={2}
          icon={<FaGithub />}
          isRound="true"
          // onClick={toggleColorMode}
        ></IconButton>
      </Flex>
      {/* Content */}
      <ScrollContainer>
        <ScrollPage page={0}>
          <Animator animation={Fade()}>
            <Header></Header>
          </Animator>
        </ScrollPage>
        <ScrollPage page={1}>
          <Animator animation={batch(Sticky(), Fade(), MoveOut(0, -200))}>
            <ProjectContainer />
          </Animator>
        </ScrollPage>
        <ScrollPage page={2}>
          <Animator animation={batch(Sticky(), Fade(), MoveOut(0, -200))}>
            <HStack>
              <VStack>
                <Heading>
                  <Animator animation={MoveIn(-1000, 0)}>Arro Social</Animator>
                </Heading>
                <Spacer />
                <Text>
                  <Animator animation={MoveIn(1000, 0)}>
                    A social media platform that shares profits
                  </Animator>
                </Text>
              </VStack>
              <Animator animation={MoveIn(1000, 0)}>
                <Image width="300px" src={arro} />
              </Animator>
            </HStack>
          </Animator>
        </ScrollPage>
        {/* opposite way */}

        <ScrollPage page={3}>
          <Animator animation={batch(Sticky(), Fade(), MoveOut(0, -200))}>
            <HStack>
              <VStack>
                <Heading>
                  <Animator animation={MoveIn(-1000, 0)}>
                    <Image width="300px" src={cfood} />
                  </Animator>
                </Heading>
                <Spacer />
              </VStack>
              <Animator animation={MoveIn(1000, 0)}>
                <Heading>cFood</Heading>
                <Text>
                  <Animator animation={MoveIn(1000, 0)}>
                    A social media platform that shares profits
                  </Animator>
                </Text>
              </Animator>
            </HStack>
          </Animator>
        </ScrollPage>

        <ScrollPage page={4}>
          <Animator animation={batch(Sticky(), Fade(), MoveOut(0, -200))}>
            <HStack>
              <VStack>
                <Heading>
                  <Animator animation={MoveIn(-1000, 0)}>Unpuzzle.net</Animator>
                </Heading>
                <Spacer />
                <Text>
                  <Animator animation={MoveIn(1000, 0)}>
                    A social media platform that shares profits
                  </Animator>
                </Text>
              </VStack>
              <Animator animation={MoveIn(1000, 0)}>
                <Image width="300px" src={unpuzzle} />
              </Animator>
            </HStack>
          </Animator>
        </ScrollPage>

        <ScrollPage page={5}>
          <Animator animation={batch(Sticky(), Fade(), MoveOut(0, -200))}>
            <HStack>
              <VStack>
                <Heading>
                  <Animator animation={MoveIn(-1000, 0)}>
                    <Image width="300px" src={dorodoro} />
                  </Animator>
                </Heading>
                <Spacer />
              </VStack>
              <Animator animation={MoveIn(1000, 0)}>
                <Heading>dorodoro</Heading>
                <Text>
                  <Animator animation={MoveIn(1000, 0)}>
                    A social media platform that shares profits
                  </Animator>
                </Text>
              </Animator>
            </HStack>
          </Animator>
        </ScrollPage>
      </ScrollContainer>
    </VStack>
  );
}

export default App;
