import React, {Component} from 'react'

import Menu from './menu'

class MenuBar extends Component {
    constructor() {
        super()
        this.state = {
            active_menu: '0',
            menus: [
                {
                    id: 2,
                    name: 'Database',
                    options: [
                        {name: 'Add Table', hotkey: 'Ctrl+T', func: () => console.log('new table')},
                    ]
                },
                {
                    id: 1,
                    name: 'Table',
                    options: [
                        {name: 'New Entry', hotkey: 'Ctrl+E', func: () => console.log('new entry')},
                        {name: 'New Field', hotkey: 'Ctrl+F', func: () => console.log('new field')},
                        {name: 'Remove Field', hotkey: '', func: () => console.log('remove field mode activated')},
                        {name: 'Delete Table', hotkey: '', func: () => console.log('removing table... are you sure?')},
                        {name: 'Change Name', hotkey: '', func: () => console.log('change table name')},
                    ]
                },
            ]
        }
    }
    menu_toggle = e => {
        //opens and closes menu by changing 'active_menu' in state
        this.state.active_menu === e.currentTarget.getAttribute('name')
        ?   this.menu_close()
        :   this.menu_open(e)
    }
    menu_open = e => this.setState({active_menu: e.currentTarget.getAttribute('name')})
    menu_close = () => this.setState({active_menu: ''})
    render = () =>
        <div className='menu-bar'>
            {this.state.menus.map(menu =>
                <Menu
                    active={this.state.active_menu === menu.name}
                    key={menu.id}
                    menu={menu}
                    toggle={this.menu_toggle}
                />
            )}
        </div>
}

export default MenuBar