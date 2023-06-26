import React, { useRef, useEffect, useState } from 'react'
import './PropertyFilter.css'
import useFetch from '../../hooks/useFetch'
import { ReactComponent as DownArrow } from '../../assets/DownArrow.svg'
import { Link } from 'react-router-dom'

function PropertyFilter() {

    const [isPropertyMenuOpen, setisPropertyMenuOpen] = useState(false)

    const ref = useRef()

    useEffect(() => {
        const checkIfClickedOutsideProperty = (e) => {
            if (isPropertyMenuOpen && ref.current && !ref.current.contains(e.target)) {
                setisPropertyMenuOpen(false);
            }
        };
        document.addEventListener("click", checkIfClickedOutsideProperty)
        return () => {
            document.removeEventListener("click", checkIfClickedOutsideProperty)
        };
    }, [isPropertyMenuOpen])

    const [city, setCity] = useState();


    const { data, loading, error } = useFetch(`/property`)

    const allpropertytype = [... new Set(data.map((item) => {return item.propertytype}))]

    return (
        <>
            <div className="property-dropdown-main-container">
                <div className="property-dropdown-container" ref={ref}>
                    <button className='property-dropdown-btn' onClick={() => setisPropertyMenuOpen(!isPropertyMenuOpen)}>
                        <div className="property-dropdown-btn-div">
                            <DownArrow />
                            <p>Property Type</p>
                        </div>
                    </button>
                    {isPropertyMenuOpen &&
                        <ul className='property-dropdown-list'>
                            {
                                allpropertytype.map((item, index) => (
                                    <Link to={`/searchbar/${item}`} style={{ color: "black" }}>
                                        <li className="property-dropdown-list-items" key={index}>{item}</li>
                                    </Link>
                                ))
                            }
                        </ul>
                    }
                </div>
            </div>
        </>
    )
}

export default PropertyFilter