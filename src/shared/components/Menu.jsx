
import React from 'react'
import { useHistory } from 'react-router-dom';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const MenuComponent = props => {
    const { className, children, routes } = props
    const [anchorEl, setAnchorEl] = React.useState(null);

    let selectClass = ['menu']
    let history = useHistory()

    if (className) {
        selectClass.push(className)
    }

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    const handleRouting = event => {
        history.push(event)
        setAnchorEl(event.currentTarget);
    }

    const renderMenuItems = () => {
        if (!children) return null
        return (
            children.map((item, index) => {
                if (!routes[index]) return null
                return (
                    <MenuItem key={index} onClick={() => handleRouting(routes[index])}>{item}</MenuItem>
                )
            })
        )
    }

    return (
        <div className="menu-container">
            <button onClick={handleClick}>Menu</button>
            <Menu
                className={selectClass.join(' ')}
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                {renderMenuItems()}
            </Menu>
        </div>
    )
}

export default MenuComponent