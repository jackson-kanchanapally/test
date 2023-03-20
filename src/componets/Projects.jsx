import { Flex , Box ,useMediaQuery, IconButton, Heading, useColorMode , Icon } from '@chakra-ui/react'
import React from 'react'
import { RiGitRepositoryCommitsLine , RiGitRepositoryCommitsFill} from "react-icons/ri";

const Projects = () => {
    const [isNotSmallerScreen]=useMediaQuery("(min-width:600px)")
    const {colorMode,toggleColorMode}=useColorMode();
    const isDark=colorMode==="dark";

  return (
    <>
    <Flex justifyContent="center" mt="10vh">
    {/* <div>Projects</div> */}
    <Box width={isNotSmallerScreen?"55%":"90%"} display={isNotSmallerScreen?"grid":""} gap="50px" style={{gridTemplateColumns:"auto auto"}}>

    <Box width={isNotSmallerScreen?"25vw":"90vw"} border="1px solid white" height={"15vh"} borderRadius="5%" padding={"2.5vh"} mt={isNotSmallerScreen?"":"2vh"} >
            <Flex >
            {/* <IconButton icon={<VscGithub />} height={"10vh"} width="10vh" isRound="true" ></IconButton> */}
            <IconButton icon={<RiGitRepositoryCommitsLine />} width="auto" height="3.5vh" marginRight={"9px"}></IconButton>
            <Flex direction={"column"} width={"60%"}>
                <a href='http://blogs-nodejs-4zb7.vercel.app/' style={{marginBottom:"0.4vh", color:"rgb(100, 181, 246)" ,textDecoration:"underLine", fontWeight:"600" }}> Blogs_nodeJs</a>
                <a href='https://github.com/harshithkalki/Blogs-nodejs' style={{fontSize:"14px", marginBottom:"0.3vh" }}>View SourceCode</a>
                <Box>
                <Icon viewBox='0 0 200 200' color='red.500'>
                    <path
                        fill='currentColor'
                        d='M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0'
                        />
                </Icon>
                <span style={{fontSize:"15px"}}>EJS</span>
                </Box>
            </Flex>
            </Flex>
        </Box>


        <Box width={isNotSmallerScreen?"25vw":"90vw"} border="1px solid white" height={"15vh"} borderRadius="5%" padding={"2.5vh"} mt={isNotSmallerScreen?"":"2vh"} >
            <Flex >
            {/* <IconButton icon={<VscGithub />} height={"10vh"} width="10vh" isRound="true" ></IconButton> */}
            <IconButton icon={<RiGitRepositoryCommitsLine />} width="auto" height="3.5vh" marginRight={"9px"}></IconButton>
            <Flex direction={"column"} width={"60%"}>
                <a href='http://blogs-nodejs-4zb7.vercel.app/' style={{marginBottom:"0.4vh", color:"rgb(100, 181, 246)" ,textDecoration:"underLine", fontWeight:"600" }}> Blogs_nodeJs</a>
                <a href='https://github.com/harshithkalki/Blogs-nodejs' style={{fontSize:"14px", marginBottom:"0.3vh" }}>View SourceCode</a>
                <Box>
                <Icon viewBox='0 0 200 200' color='red.500'>
                    <path
                        fill='currentColor'
                        d='M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0'
                        />
                </Icon>
                <span style={{fontSize:"15px"}}>EJS</span>
                </Box>
            </Flex>
            </Flex>
        </Box>
        
        <Box width={isNotSmallerScreen?"25vw":"90vw"} border="1px solid white" height={"15vh"} borderRadius="5%" padding={"2.5vh"} mt={isNotSmallerScreen?"":"2vh"} >
            <Flex >
            {/* <IconButton icon={<VscGithub />} height={"10vh"} width="10vh" isRound="true" ></IconButton> */}
            <IconButton icon={<RiGitRepositoryCommitsLine />} width="auto" height="3.5vh" marginRight={"9px"}></IconButton>
            <Flex direction={"column"} width={"60%"}>
                <a href='http://blogs-nodejs-4zb7.vercel.app/' style={{marginBottom:"0.4vh", color:"rgb(100, 181, 246)" ,textDecoration:"underLine", fontWeight:"600" }}> Blogs_nodeJs</a>
                <a href='https://github.com/harshithkalki/Blogs-nodejs' style={{fontSize:"14px", marginBottom:"0.3vh" }}>View SourceCode</a>
                <Box>
                <Icon viewBox='0 0 200 200' color='red.500'>
                    <path
                        fill='currentColor'
                        d='M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0'
                        />
                </Icon>
                <span style={{fontSize:"15px"}}>EJS</span>
                </Box>
            </Flex>
            </Flex>
        </Box>

        <Box width={isNotSmallerScreen?"25vw":"90vw"} border="1px solid white" height={"15vh"} borderRadius="5%" padding={"2.5vh"} mt={isNotSmallerScreen?"":"2vh"} >
            <Flex >
            {/* <IconButton icon={<VscGithub />} height={"10vh"} width="10vh" isRound="true" ></IconButton> */}
            <IconButton icon={<RiGitRepositoryCommitsLine />} width="auto" height="3.5vh" marginRight={"9px"}></IconButton>
            <Flex direction={"column"} width={"60%"}>
                <a href='http://blogs-nodejs-4zb7.vercel.app/' style={{marginBottom:"0.4vh", color:"rgb(100, 181, 246)" ,textDecoration:"underLine", fontWeight:"600" }}> Blogs_nodeJs</a>
                <a href='https://github.com/harshithkalki/Blogs-nodejs' style={{fontSize:"14px", marginBottom:"0.3vh" }}>View SourceCode</a>
                <Box>
                <Icon viewBox='0 0 200 200' color='red.500'>
                    <path
                        fill='currentColor'
                        d='M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0'
                        />
                </Icon>
                <span style={{fontSize:"15px"}}>EJS</span>
                </Box>
            </Flex>
            </Flex>
        </Box>

        <Box width={isNotSmallerScreen?"25vw":"90vw"} border="1px solid white" height={"15vh"} borderRadius="5%" padding={"2.5vh"} mt={isNotSmallerScreen?"":"2vh"} >
            <Flex >
            {/* <IconButton icon={<VscGithub />} height={"10vh"} width="10vh" isRound="true" ></IconButton> */}
            <IconButton icon={<RiGitRepositoryCommitsLine />} width="auto" height="3.5vh" marginRight={"9px"}></IconButton>
            <Flex direction={"column"} width={"60%"}>
                <a href='http://blogs-nodejs-4zb7.vercel.app/' style={{marginBottom:"0.4vh", color:"rgb(100, 181, 246)" ,textDecoration:"underLine", fontWeight:"600" }}> Blogs_nodeJs</a>
                <a href='https://github.com/harshithkalki/Blogs-nodejs' style={{fontSize:"14px", marginBottom:"0.3vh" }}>View SourceCode</a>
                <Box>
                <Icon viewBox='0 0 200 200' color='red.500'>
                    <path
                        fill='currentColor'
                        d='M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0'
                        />
                </Icon>
                <span style={{fontSize:"15px"}}>EJS</span>
                </Box>
            </Flex>
            </Flex>
        </Box>

        <Box width={isNotSmallerScreen?"25vw":"90vw"} border="1px solid white" height={"15vh"} borderRadius="5%" padding={"2.5vh"} mt={isNotSmallerScreen?"":"2vh"} >
            <Flex >
            {/* <IconButton icon={<VscGithub />} height={"10vh"} width="10vh" isRound="true" ></IconButton> */}
            <IconButton icon={<RiGitRepositoryCommitsLine />} width="auto" height="3.5vh" marginRight={"9px"}></IconButton>
            <Flex direction={"column"} width={"60%"}>
                <a href='http://blogs-nodejs-4zb7.vercel.app/' style={{marginBottom:"0.4vh", color:"rgb(100, 181, 246)" ,textDecoration:"underLine", fontWeight:"600" }}> Blogs_nodeJs</a>
                <a href='https://github.com/harshithkalki/Blogs-nodejs' style={{fontSize:"14px", marginBottom:"0.3vh" }}>View SourceCode</a>
                <Box>
                <Icon viewBox='0 0 200 200' color='red.500'>
                    <path
                        fill='currentColor'
                        d='M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0'
                        />
                </Icon>
                <span style={{fontSize:"15px"}}>EJS</span>
                </Box>
            </Flex>
            </Flex>
        </Box>


    </Box>
    </Flex>
    </>
  )
}

export default Projects