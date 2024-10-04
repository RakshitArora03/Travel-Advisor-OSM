
/* eslint-disable jsx-a11y/alt-text */
import { Badge, Flex, Image, Text } from '@chakra-ui/react'
import { Rating } from '@material-ui/lab'
import React from 'react'
import {IoLocation} from "react-icons/io5"

const PlaceDetail = ({place}) => {
  return (
    <Flex
      bg={'whiteAlpha.900'}
      px={4}
      py={2}
      mb={2}
      shadow={'lg'}
      direction={'column'}
      alignItems={'start'}
      justifyContent={'space-between'}
      
    >
      <Flex justifyContent={'space-between'} width={'full'}>
        <Flex
          direction={'column'}
          alignItems={'start'}
          justifyContent={'space-between'}
          width={'full'}
          px={2}
        >
          <Flex
            alignItems={'start'}
            justifyContent={'space-between'}
            width={'full'}
          >
            <Text 
              textTransform={'capitalize'} 
              width={'50'}
              fontSize={'lg'}
              fontWeight={'500'}
              isTruncated
            >
              {place.name}
            </Text>
            <Text
            
            
            ontSize={'sm'}
              fontWeight={'500'}
              color={'gray.500'}
            >
              {place.price}
            </Text>
          </Flex>

          {/*ratings*/}
          <Flex
            alignItems={'center'}
            width={'full'}
          >
            <Rating size='small' value={Number(place.rating)} readOnly/>
            <Text 
              fontSize={'sm'} 
              fontWeight={'500'} 
              color={'gray.500'}>{`(${place.num_reviews})`}</Text>
            <Text 
              fontSize={'sm'} 
              fontWeight={'500'} 
              color={'gray.500'} 
              ml={'auto'}>{place.price_level}</Text> 
          </Flex>

          {/* Ranking */}
          <Text 
            fontSize={'sm'} 
            fontWeight={'500'} 
            color={'gray.400'}>{place.ranking}</Text>

          {/* openstatus */}
          <Text 
            fontSize={'sm'} 
            fontWeight={'500'} 
            color={'gray.400'}>{place.open_now_text}</Text>

          {/* dietary restrictions */}
          {
            place?.dietary_restrictions && (
              <Flex width={'full'} flexWrap={'wrap'}>
                {
                  place.dietary_restrictions.map((n, i) => (
                    <Badge colorScheme='purple' cursor={'pointer'} key={i} m={1} fontSize={10}>
                      {n.name}
                    </Badge>
                  ))
                }
              </Flex>
            )
          }
        </Flex> 
        <Image
          objectFit={'cover'}
          width={'120px'}
          height={'120px'}
          rounded={'lg'}
          src={
            place.photo ? place.photo.images.large.url :"/place_img.jpg"
          }
        />        
      </Flex> 

      {
        place?.address && (
          <Flex
            alignItems={'center'}
            width={'full'}
            px={1}
            my={2}
          >
            <IoLocation fontSize={20} color='gray'/>
            <Text isTruncated
            fontSize={'small'}
            fontWeight={'500'}
            color={'gray.700'}
            ml={1}            
            >
              {place.address}
            </Text>
          </Flex>
        )
      }     
    </Flex>
  )
}

export default PlaceDetail