import {
  Flex,
  Heading,
  IconButton,
  Spacer,
  useColorMode,
  VStack,
  HStack,
  Stack,
  Button,
  Center,
  Text,
  Box,
  Link,
  Image,
} from "@chakra-ui/react";
import {FaGithub, FaLinkedin, FaLink, FaSwift, FaApple } from "react-icons/fa";
import {IoIosGlasses} from "react-icons/io"
import {SiFirebase, SiSupabase} from "react-icons/si"
import {GiPlanetCore, GiNetworkBars} from "react-icons/gi"
import {GrStorage} from "react-icons/gr"
import {BiNotification} from "react-icons/bi"
import {SiNextdotjs} from "react-icons/si"
import Header from "./components/Header";
import ProjectContainer from "./components/Projects/ProjectContainer";
import {BsArrowUpRight} from "react-icons/bs"
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
            <VStack>
            <Heading textAlign={"center"}>
              Apple WWDC Swift Student Scholarship Winner
              </Heading>
              <Link color='blue.500' href="https://github.com/DerekHsiehDev/WWDC2022.git">
                Sage: Winning Playground
              </Link>
           
            
            </VStack>
            
          </Animator>
        </ScrollPage>

        <ScrollPage page={2}>
          <Animator animation={batch(Sticky(), Fade(), MoveOut(0, -200))}>
            <ProjectContainer />
          </Animator>
        </ScrollPage>

        <ScrollPage page={3}>
          <Animator animation={batch(Sticky(), Fade(), MoveOut(0, -200))}>
            <HStack>
              <VStack>
                <Heading>
                  <Animator animation={MoveIn(-1000, 0)}>Arro Social</Animator>
                </Heading>
                <Spacer />


                <Text textAlign={"center"}>
                  <Animator animation={MoveIn(1000, 0)}>
                    A social media platform that shares profits <br></br>
                    Full time intern at Arro 

                  <Text color={"gray.700"} mt={10}>
                  <Center>
                    <HStack>
                      <Text fontSize={"lg"}>
                        SwiftUI
                      </Text>
                      <FaSwift color="red" size={28}/>
                    </HStack>
                    </Center>
                 

                    <br></br>

                    <Center>
                    <HStack>
                      <Text fontSize={"lg"}>
                    Firebase Auth 
                      </Text>
                      <SiFirebase color="orange" size={28}/>
                    </HStack>
                    </Center>

                    <br></br>
                    <Center>
                    <HStack>
                      <Text fontSize={"lg"}>
                    Firestore DB 
                      </Text>
                      <SiFirebase color="orange" size={28}/>
                    </HStack>
                    </Center>
                    
                  </Text>

                  </Animator>
                </Text>
              </VStack>
              <Animator animation={MoveIn(1000, 0)}>
                <Image width="300px" src={arro} />
              </Animator>
            </HStack>
            <Center mt={5}>
          

            <Link color='blue.500' href="https://testflight.apple.com/join/Vus0a1hp">
              TestFlight Link
              </Link>
            </Center>
          </Animator>
        </ScrollPage>
        {/* opposite way */}

        <ScrollPage page={4}>
          <Animator animation={batch(Sticky(), Fade(), MoveOut(0, -200))}>
            <HStack>

                <Heading>
                  <Animator animation={MoveIn(-1000, 0)}>
                    <Image width="300px" src={cfood} />
                  </Animator>
                </Heading>
                <Spacer />
             
              <Animator animation={MoveIn(1000, 0)}>
              <VStack>
                <Heading>cFood</Heading>
                <Text textAlign={"center"}>
                  <Animator animation={MoveIn(1000, 0)}>
                    Machine Learning Calorie Tracker that returns nutritional information
                    <Box mt={10}>
                    <Center>
                    <HStack>
                      <Text fontSize={"lg"}>
                        CoreML
                      </Text>
                      <FaApple color="black" size={28}/>
                    </HStack>
                    </Center>
                 

                    <br></br>

                    <Center>
                    <HStack>
                      <Text fontSize={"lg"}>
                        CoreData
                      </Text>
                      <GrStorage color="blue" size={28}/>
                    </HStack>
                    </Center>

                    <br></br>
                    <Center>
                    <HStack>
                      <Text fontSize={"lg"}>
                        Vision
                      </Text>
                      <IoIosGlasses color="green" size={28}/>
                    </HStack>
                    </Center>
                    </Box>
                  </Animator>
                </Text>
                
                
                </VStack>
              </Animator>
            
            </HStack>
            <Center mt={5}>
              <Animator animatino={Fade()}>
            <Link color='blue.500' href="https://testflight.apple.com/join/Vus0a1hp">
              App Store Link
              </Link>
            </Animator>
            </Center>
          </Animator>
        </ScrollPage>

        <ScrollPage page={5}>
          <Animator animation={batch(Sticky(), Fade(), MoveOut(0, -200))}>
            <HStack>
              
                <Heading>
                  <Animator animation={MoveIn(-1000, 0)}>
                    <Image width="300px" src={dorodoro} />
                  </Animator>
                </Heading>
                <Spacer />
                <VStack>
              <Text textAlign={"center"}>
              <Animator animation={MoveIn(1000, 0)}>
                <Heading>dorodoro</Heading>
                <Text>
                  <Animator animation={MoveIn(1000, 0)}>
                    Gamified Pomodoro Studying Tracker
                    <Box mt={10}>
                    <Center>
                    <HStack>
                      <Text fontSize={"lg"}>
                        Notifications
                      </Text>
                      <BiNotification color="red" size={28}/>
                    </HStack>
                    </Center>
                 

                    <br></br>

                    <Center>
                    <HStack>
                      <Text fontSize={"lg"}>
                        Local Storage
                      </Text>
                      <GrStorage color="lightBlue" size={28}/>
                    </HStack>
                    </Center>

                    <br></br>
                    <Center>
                    <HStack>
                      <Text fontSize={"lg"}>
                        Custom Modals
                      </Text>
                      <BsArrowUpRight color="brown" size={28}/>
                    </HStack>
                    </Center>
                    </Box>
                  </Animator>
                </Text>
              </Animator>
              </Text>
              </VStack>
            </HStack>
            <Center mt={5}>

              <Link color='blue.500' href="https://github.com/derekhsiehdev/dorodoro">
                GitHub Repo
              </Link>
            </Center>
          </Animator>
        </ScrollPage>
      </ScrollContainer>
    </VStack>
  );
}

export default App;
