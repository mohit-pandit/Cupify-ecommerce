import React from 'react'
import { Button } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CoffeeIcon from '@mui/icons-material/Coffee';
import { Link } from 'react-router-dom';

export const Navbar = () => {
    return (
        <div className='container mt-4'>
            <div className='row'>
                <div className='allNavCategory col-sm-3 d-flex align-items-center justify-content-evenly rounded-pill p-2'>
                    <div>
                        <MenuIcon className='text-white' />
                        <Button> <span className='text text-white'> All Categories </span></Button>
                        <KeyboardArrowDownIcon className='text-white' />
                    </div>
                </div>
                <div className='align-items-center col-sm-9 d-inline-flex'>
                    <ul className="list list-inline d-inline-flex nav-list mb-0 ms-auto">
                        <li className='list-inline-item'><Link to="/">Home <KeyboardArrowDownIcon className='ms-1' /></Link></li>
                        <li className='list-inline-item'><Link to="/">Product Listing <KeyboardArrowDownIcon className='ms-1' /></Link>
                                <div className='sub-menu-list sub-menu-container'>
                                    <div className='row'>
                                        <div className='col-sm-3 d-grid'>
                                            <Link to="/">Boys</Link>
                                            <Link to="/">Mens Wear</Link>
                                            <Link to="/">Girls Wear</Link>
                                            <Link to="/">Old Age</Link>
                                        </div>
                                        <div className='col-sm-3 d-grid'>
                                            <Link to="/">T-shirts</Link>
                                            <Link to="/">Kruta's</Link>
                                            <Link to="/">Saree</Link>
                                            <Link to="/">Shoes</Link>
                                        </div>
                                        <div className='col-sm-3 d-grid'>
                                            <Link to="/">Delhi</Link>
                                            <Link to="/">Noida</Link>
                                            <Link to="/">Gurgaon</Link>
                                            <Link to="/">Ghaziabad</Link>
                                        </div>
                                </div>
                            </div>
                        </li>
                        <li className='list-inline-item'><Link to="/">Grocery</Link></li>
                        <li className='list-inline-item'><Link to="/"><CoffeeIcon className='me-2' />Cups</Link></li>
                        <li className='list-inline-item'><Link to="/">Bottles</Link></li>
                        <li className='list-inline-item'><Link to="/">Mouse Pad</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
