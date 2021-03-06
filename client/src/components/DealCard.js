import React from 'react'
import {
	Box, Badge, Text, Flex, Stack, useColorMode
} from '@chakra-ui/core'
import AddVote from './AddVote'

const DealCard = ({
	// eslint-disable-next-line react/prop-types
	title, restaurantName, city, state, dealType, dealId
}) => {
	const { colorMode } = useColorMode()

	return (
		<Box
			borderWidth="1px"
			borderRadius={8}
			p={1}
			mb={2}
			bg={colorMode === 'light' ? 'white' : 'gray.700'}
			boxShadow="sm"
		>
			<Flex>
				<Stack align="center" ml={2}>
					<AddVote
						dealId={dealId}
					/>
				</Stack>
				<Stack ml={3} mt={2} mb={2} w="100%" pr={4}>
					<Flex align="baseline">
						<Badge variantColor="orange">{dealType}</Badge>
					</Flex>
					<Flex align="center" justify="space-between">
						<Text fontSize="xl" fontWeight="semibold" lineHeight="short">
							{title}
						</Text>
					</Flex>
					<Flex align="center" justify="space-between">
						<Text color="gray.400">
							{city}
							,
							{state}
						</Text>
						<Text>{restaurantName}</Text>
					</Flex>
				</Stack>
			</Flex>
		</Box>
	)
}

export default DealCard
