import React from 'react'
import {
	Box, Text, Stack, CheckboxGroup, Checkbox, Select
} from '@chakra-ui/core'

const DealFilter = (props) => (
	// eslint-disable-next-line react/jsx-props-no-spreading
	<Stack spacing={8} mb={8} {...props}>
		<Box>
			<Text mb={2} fontWeight="bold">
				Location
			</Text>
			<Select defaultValue="New York, NY" bg="white">
				<option backgroundColor="#EDF2F7">New York, NY</option>
			</Select>
		</Box>
		<Box>
			<Text mb={2} fontWeight="bold">
				Deal Type
			</Text>
			<CheckboxGroup
				spacing={2}
				variantColor="orange"
				value="Food"
			>
				<Checkbox value="Drink">Drink</Checkbox>
				<Checkbox value="Food">Food</Checkbox>
			</CheckboxGroup>
		</Box>
	</Stack>
)

export default DealFilter
