import React, {Component} from 'react'

import Menu from './menu'

class Search extends Component {
    constructor() {
        super()
        this.state = {
            search: {field: 'id', value: ''},
            menu: {
                    id: 1,
                    name: 'Filter',
                    active: false,
                    options: [
                        {name: 'By id'},
                        {name: 'By name'},
                        {name: 'By three'}
                    ]
                }
        }
    }
    h_search_update = e => {
        const name = e.target.name
        const value = e.target.value
        this.setState(prevState => {return {search: {...prevState.search, [name]: value}}})
    }
    menu_toggle = () => {
        this.setState(prev => {
            return {
                menu: {...prev.menu, active: !prev.menu.active}
            }
        })
    }
    menu_open = e => this.setState({active_menu: e.currentTarget.getAttribute('name')})
    menu_close = () => this.setState({active_menu: ''})
    filter = () => console.log(this.state)
    refresh = () => console.log('refreshing table...')
    render = () =>
        <div className='table-search'>
            <Menu active={this.state.menu.active} menu={this.state.menu} toggle={this.menu_toggle} />
            <input
                type='text'
                name='value'
                placeholder='value'
                onChange={this.h_search_update}
                value={this.state.value}
            />
            <button onClick={this.refresh}>Refresh</button> {/*make an icon for this*/}
        </div>
}

export default Search