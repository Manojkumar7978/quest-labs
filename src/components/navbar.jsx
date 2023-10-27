import React from 'react'
import { Box, Flex, chakra } from '@chakra-ui/react'
import {RxHamburgerMenu} from 'react-icons/rx'

export default function Navbar() {
  return (
    <chakra.div>
      <Box>
        <Box
        display={'Flex'}
        gap={3}
        alignItems={'center'}
        justifyContent={'flex-start'}
        >
            <chakra.li><RxHamburgerMenu size={18}/></chakra.li>
            <chakra.li>Trella</chakra.li>
            <chakra.li>Workspace</chakra.li>
            <chakra.li>Recent</chakra.li>
            <chakra.li>More</chakra.li>
            <chakra.li>logo</chakra.li>
        </Box>
        <Box>

        </Box>
      </Box>
    </chakra.div>
  )
}
