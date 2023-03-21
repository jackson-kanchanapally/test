import React from 'react'
import { Flex,Stack, Heading ,Link} from '@chakra-ui/react'
export default function Cl()
{
       const ar=[
           {
             "clg_name": "asdf",
             "fee": 123
           },
           {
             "clg_name": "asdfsadf",
             "fee": 4345
           }
         ]
    
  return (
    <div>{
        ar.map((i)=>(
            <Stack bg='yellow' m='10' key={i.name}>
                <Heading>college name =  {i.clg_name}</Heading>
                <Heading>college fee = {i.fee}</Heading>
                </Stack>
        ))        
        }</div>
  )
}
