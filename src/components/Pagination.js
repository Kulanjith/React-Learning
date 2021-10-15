import React from 'react'

export const Pagination = ({totalpages, fetchUsers}) => {
    const pageNumbers = [];

    for (let i=1; i<= totalpages; i++) {
        pageNumbers.push(i);
    }

    return (
        <div className="paginate">
            <nav>
                <ul className="pagination">
                    {pageNumbers.map((num)=>(
                        <li key={num} className="page-item">
                            <a href="!#" className="page-link" onClick={()=>fetchUsers(num)}>
                                {num}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}
