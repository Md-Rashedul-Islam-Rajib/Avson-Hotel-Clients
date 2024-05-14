import React from "react";
import { useLoaderData } from "react-router-dom";

const Booking = () => {
  const data = useLoaderData();

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <p>#</p>
              </th>
              <th>Title</th>
              <th>Customer Info</th>
              <th>Reservation Date</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {data.map((item, idx) => (
              <tr key={idx}>
                <th>
                  {idx+1}
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={item?.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{item?.title}</div>
                      <div className="text-sm opacity-50">{item?.price}$/Night</div>
                    </div>
                  </div>
                </td>
                <td>
                  {item?.name}
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    {item?.email}
                  </span>
                </td>
                <td>{item?.date.slice(0,10)}</td>
                <th>
                  <button className="btn btn-ghost btn-xs">Update</button>
                </th>
              </tr>
            ))}
          </tbody>
          {/* foot */}
        </table>
      </div>
    </div>
  );
};

export default Booking;
