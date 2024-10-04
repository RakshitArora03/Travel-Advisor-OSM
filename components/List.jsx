import { Box, Flex, SkeletonCircle, SkeletonText } from '@chakra-ui/react'
import React from 'react'
import PlaceDetail from './PlaceDetail';

const List = ({places, isLoading}) => {
  if (isLoading) return (
    <Flex
      direction={'column'}
      bg={'whiteAlpha.900'}
      width={'36vw'}
      height={'100vh'}
      position={'absolute'}
      left={0}
      top={0}
      // zIndex={'sticky'}
      overflow={'hidden'}
      px={2}  
      borderWidth={'4px'} 
      borderColor={'blue.400'}
      borderRight={'0'}    
    >
      {/* <Box padding='6' boxShadow='lg' bg='white' mt={3}>
        <SkeletonText mt='4' noOfLines={1} spacing='4' skeletonHeight='2' />
      </Box> */}
      <Box padding='6' boxShadow='lg' bg='white' mt={3}>
        <SkeletonCircle size='10' />
        <SkeletonText mt='4' noOfLines={3} spacing='4' skeletonHeight='2' />
      </Box>
      <Box padding='6' boxShadow='lg' bg='white' mt={3}>
        <SkeletonCircle size='10' />
        <SkeletonText mt='4' noOfLines={3} spacing='4' skeletonHeight='2' />
      </Box>
      <Box padding='6' boxShadow='lg' bg='white' mt={3}>
        <SkeletonCircle size='10' />
        <SkeletonText mt='4' noOfLines={3} spacing='4' skeletonHeight='2' />
      </Box>
      <Box padding='6' boxShadow='lg' bg='white' mt={3}>
        <SkeletonCircle size='10' />
        <SkeletonText mt='4' noOfLines={3} spacing='4' skeletonHeight='2' />
      </Box>

    </Flex>
  );
  return (
    <Flex
      direction={'column'}
      bg={'whiteAlpha.900'}
      width={'36vw'}
      height={'100vh'}
      position={'absolute'}
      left={0}
      top={0}
      zIndex={'sticky'}
      overflow={'hidden'}
      px={2} 
      borderWidth={'4px'} 
      borderColor={'blue.400'}
      borderRight={'0'}     
    >
      <Flex
        flex={1}
        overflow={'scroll'}
        mt={3}
        direction={'column'}
      >  
      {
      places && places.map((place, i) => <PlaceDetail place={place} key={i} /> )      
      }   
      </Flex>

    </Flex>


  );
}

export default List