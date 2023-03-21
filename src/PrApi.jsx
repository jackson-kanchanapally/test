import React, { useState, useEffect } from "react";
import axios from "axios";
import { Flex,Stack, Heading ,Link} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
export default function PrApi() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fD = async () => {
      const res = await axios.get("https://kontests.net/api/v1/all");
      setData(res.data);
    };
    fD();
  }, []);
  var tim;

  return (
    <>
      {data.map((i) => (
        <Stack borderRadius='10' m='5' ml='40' mr='40' pl='10%' bg='#4A5568' key={i.name}>
          <Heading>{i.name}</Heading>
          <Link color='white' href={i.url} isExternal
          >
              Visit {i.site} <ExternalLinkIcon mx='2px' />
          </Link>
          {(() => {
           const date = new Date(i.start_time);
           const dateE = new Date(i.end_time);
           const formattedDate = date.toLocaleDateString();
           const formattedDateE = dateE.toLocaleDateString();
        return <div>{formattedDate}
                --{formattedDateE}
        </div>; // use the 
      })()}
          <Heading size='xl'>{i.site}</Heading>
       
       <h2>duration {(i.duration/86400).toFixed(0)}Days</h2>
        </Stack>
      ))}
    </>
  );
}
