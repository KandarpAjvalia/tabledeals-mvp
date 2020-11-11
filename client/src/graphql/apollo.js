import {
	ApolloClient, InMemoryCache, HttpLink
} from '@apollo/client'

const createApolloClient = () => new ApolloClient({
	link: new HttpLink({
		uri: 'https://tabledeals.herokuapp.com/v1/graphql'
	}),
	cache: new InMemoryCache(),
})

// eslint-disable-next-line import/prefer-default-export
export { createApolloClient }
