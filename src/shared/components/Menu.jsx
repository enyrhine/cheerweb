
import React from 'react'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const MenuComponent = props => {
    const { className, children } = props
    const [anchorEl, setAnchorEl] = React.useState(null);

    let selectClass = ['menu']

    if (className) {
        selectClass.push(className)
    }

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    const renderMenuItems = () => {
        if(!children) return null
        return(
        children.map((item, index) => {
            return (
                <MenuItem key={index} onClick={handleClose}>{item}</MenuItem>
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