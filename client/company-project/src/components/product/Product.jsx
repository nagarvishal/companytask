
import React, { useEffect, useState } from 'react'
import AddProject from './AddProject';
import { NavLink } from 'react-router-dom';
import { useNavigate } from "react-router-dom";



function Product() {

    const navigate = useNavigate();
    let [product, setProduct] = useState([]);
    let [range, setRange] = useState("");
    const [search, setSearch] = useState("");

    useEffect(() => {
        fetch("http://localhost:4500/product", {
            method: "GET",
            headers: {
                "Token": sessionStorage.getItem("token")
            }
        })
            .then((response) => response.json())
            .then((json) => setProduct(Array.isArray(json.data)?json.data:[]))
            .catch((error) => {
                navigate("/user");
                setProduct([]);
                console.error("GET error:", error);
            });



    }, [])

    useEffect(() => {


        let arr1 = [];
        let arr2 = [];
        for (let i = 0; i < product.length; i++) {
            if (product[i].name.toLowerCase().includes(search) || product[i].description.toLowerCase().includes(search)) {
                arr1.push(product[i]);
            }
            else {
                arr2.push(product[i]);
            }
        }
        product = [...arr1, ...arr2];
        // setProduct(product);

        if (range) {
            const arrrange = range.split("-");
            arrrange[0] = Number(arrrange[0]);
            arrrange[1] = Number(arrrange[1]);
            arr1 = [];
            arr2 = [];

            for (let i = 0; i < product.length; i++) {
                if (product[i].price >= arrrange[0] && product[i].price <= arrrange[0]) {
                    arr1.push(product[i]);
                }
                else {
                    arr2.push(product[i]);
                }
            }
            product = [...arr1, ...arr2];


        }


        setProduct(product);
    }, [search, range])

    return (
        <>
            <br />
            <br />
            <h1>hello world</h1>

            <div className='sm:w-max md:w-7xl lg:w-5xl mx-auto sm:px-6 border-1 m-3 p-3  ' style={{ backgroundColor: "oklch(0.21 0.034 264.665)", color: "oklch(0.928 0.006 264.531)" }}>
                <div className='flex flex-wrap justify-start'>
                    <div className='w-fit'>
                        <input className='border-1 rounded-sm p-2 m-3' type="text" value={search} placeholder='search product' onChange={(e) => {
                            setSearch(e.target.value);
                        }} />
                    </div>
                    <div className='w-fit'>
                        <select name="" id="" className='border-1 rounded-sm p-2 m-3' value={range} onChange={(e) => {
                            setRange(e.target.value);
                        }} >
                            <option value="" selected>-select-value-range-</option>
                            <option value="0-1000">0-1000 Rs.</option>
                            <option value="1000-5000">1000-5000 Rs.</option>
                            <option value="5000-10000">5000-10000 Rs.</option>
                            <option value="10000-50000">10000-50000 Rs.</option>
                            <option value="50000-100000">50000-100000 Rs.</option>
                            <option value="100000-1000000">100000-1000000 Rs.</option>
                        </select>
                    </div>
                </div>

                {product.map((value) => {
                    return (
                        <div className='border-1 p-3 m-3'>
                            <div className='text-blue-700 '>Product Name - {value.name}</div>
                            <div className=''>Price - {value.price}</div>
                            <div className=''>Description - {value.description}</div>
                            <br />
                            <div>
                                <NavLink to={`/product/update?id=${value._id}&name=${encodeURIComponent(value.name)}&price=${value.price}&description=${encodeURIComponent(value.description)}`} className="bg-blue-700 p-3" >Update</NavLink>
                            </div>

                        </div>
                    )
                })}
            </div>

        </>
    )
}

export default Product