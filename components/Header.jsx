import { Flex, InputGroup, InputRightElement , Input, Menu, MenuButton, MenuList, MenuItem, Text, Button} from '@chakra-ui/react'
import { Rating } from '@material-ui/lab'
import React from 'react'
import {BiSearchAlt, BiStar, BiChevronDown, BiRestaurant, BiHotel, BiMapAlt} from "react-icons/bi"
import { useState } from 'react'


const Header = ({settype, setratings, setcoordinates}) => {

  const [selectedRating, setSelectedRating] = useState(null);

  const handleRatingClick = (rating) => {
    setSelectedRating(rating);
    setratings(rating - 1); // Set the selected rating in your state or perform any other action
  };


  return (
    <Flex 
      position ={'absolute'} 
      top={1.5} 
      left={'50vw'}
      width = {'max'}
      px={2}
      py={2}
      zIndex="sticky"  
       
      
    >
      <Flex>
         {/* <InputGroup width={"35vw"} shadow={'lg'}>
          <InputRightElement 
          >
            
          <BiSearchAlt color="black" fontSize={'23'} />
            
            
          </InputRightElement>
          <Input 
            id="search-input"
            type = {"text"}
            placeholder='Search...' 
            variant='filled'
            fontSize={18}
            bg={'white'}
            color={'gray.700'}
            _hover={{bg:'whiteAlpha.800'}}
            _focus={{bg:'whiteAlpha.800'}}        
          />
         </InputGroup> */}
         <Flex
          alignItems={'center'}
          justifyContent={'center'}
         >
          <Flex
            alignItems={'center'}
            justifyContent={'center'}
            px={4}
            py={2}
            bg={'white'}
            rounded={'full'}
            ml={4}
            shadow={"lg"}
            cursor={'pointer'}
            _hover={{bg : 'gray.100'}}
            transition={'ease-in-out'}
            transitionDuration={'0.3s'}     
          >
            {/*ratings*/}
            <Menu >
              
              <BiStar fontSize={25} />
              <MenuButton mx={2} transition='all 0.2s' borderRadius={'md'} >
              {selectedRating ? (
                  <>
                    {selectedRating.toFixed(1)}{' '}
                    <Rating size='small' value={selectedRating} readOnly />
                  </>
                ) : (
                  'Choose Rating..'
                )}
               
              </MenuButton>
              <MenuList>
                <MenuItem 
                display={'flex'}
                alignItems={'center'}
                justifyContent={'center'}
                onClick={() => handleRatingClick("")}
                isSelected={selectedRating === ""}
                >
                  <Text fontSize={20} fontWeight={500} color={'gray.700'}>
                    Any Rating
                  </Text>
                </MenuItem>

                <MenuItem 
                display={'flex'}
                alignItems={'center'}
                justifyContent={'center'}
                onClick={() => handleRatingClick(2)}
                isSelected={selectedRating === 2} 
                
                >
                  <Text fontSize={20} fontWeight={500} color={'orange.500'}>
                    2.0                                           
                  </Text>
                  <Rating size='small' value={2} readOnly />
                </MenuItem>
                <MenuItem 
                display={'flex'}
                alignItems={'center'}
                justifyContent={'center'}
                onClick={() => handleRatingClick(3)}
                isSelected={selectedRating === 3}
                >
                  <Text fontSize={20} fontWeight={500} color={'orange.500'}>
                    3.0                                           
                  </Text>
                  <Rating size='small' value={3} readOnly />
                </MenuItem>

                <MenuItem 
                display={'flex'}
                alignItems={'center'}
                justifyContent={'center'}
                onClick={() => handleRatingClick(4)}
                isSelected={selectedRating === 4}
                >
                  <Text fontSize={20} fontWeight={500} color={'orange.500'}>
                    4.0                                           
                  </Text>
                  <Rating size='small' value={4} readOnly />
                </MenuItem>

                <MenuItem 
                display={'flex'}
                alignItems={'center'}
                justifyContent={'center'}
                onClick={() => handleRatingClick(5)}
                isSelected={selectedRating === 5}
                >
                  <Text fontSize={20} fontWeight={500} color={'orange.500'}>
                    5.0                                          
                  </Text>
                  <Rating size='small' value={5} readOnly />
                </MenuItem>
              </MenuList>
              
            
            </Menu>
            <BiChevronDown />
          </Flex>

          {/*restaurants*/}
          <Flex
            alignItems={'center'}
            justifyContent={'center'}
            px={4}
            py={2}
            bg={'white'}
            rounded={'full'}
            ml={4}
            shadow={"lg"}
            cursor={'pointer'}
            _hover={{bg : 'gray.100'}}
            transition={'ease-in-out'}
            transitionDuration={'0.3s'}
            onClick={()=> settype('restaurants')}  
            
          >
            <BiRestaurant fontSize={25}/>
            <Text ml={3} fontSize={16} fontWeight={500}>Restaurants</Text>
          </Flex>

          {/*hotels*/}
          <Flex
            alignItems={'center'}
            justifyContent={'center'}
            px={4}
            py={2}
            bg={'white'}
            rounded={'full'}
            ml={4}
            shadow={"lg"}
            cursor={'pointer'}
            _hover={{bg : 'gray.100'}}
            transition={'ease-in-out'}
            transitionDuration={'0.3s'}
            onClick={()=> settype('hotels')}  
          >
            <BiHotel fontSize={25}/>
            <Text ml={3} fontSize={16} fontWeight={500}>Hotels</Text>
          </Flex>

          {/*attractions*/}
          <Flex
            alignItems={'center'}
            justifyContent={'center'}
            px={4}
            py={2}
            bg={'white'}
            rounded={'full'}
            ml={4}
            shadow={"lg"}
            cursor={'pointer'}
            _hover={{bg : 'gray.100'}}
            transition={'ease-in-out'}
            transitionDuration={'0.3s'}
            onClick={()=> settype('attractions')}  
          >
            <BiMapAlt fontSize={25}/>
            <Text ml={3} fontSize={16} fontWeight={500}>Attractions</Text>
          </Flex>
         </Flex>
      </Flex>
    </Flex>
  )
}

export default Header