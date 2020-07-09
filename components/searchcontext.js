import react from 'react'

const noop = () => { }
const SearchContext = react.createContext({
    setSearch: noop,
    getSearch: () => {}
})
export default SearchContext