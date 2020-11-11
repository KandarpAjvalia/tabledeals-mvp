/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import { Box } from '@chakra-ui/core'
import DealsHeader from '../components/DealsHeader'
import DealSideBar from '../components/DealsSideBar'

// eslint-disable-next-line react/prop-types
const PageWrapper = ({ children, ...style }) => (
	<>
		<DealsHeader />
		<Box>
			<DealSideBar maxWidth="18rem" width="full" />
			<Box pl={[0, null, '18rem']} mt="4rem">
				<Box
					as="section"
					backgroundColor="gray.100"
					minHeight="calc(100vh - 4rem)"
					p="1rem"
				>
					<Box {...style}>{children}</Box>
				</Box>
			</Box>
		</Box>
	</>
)
export default PageWrapper
