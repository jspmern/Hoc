import React, { useEffect, useState } from 'react'

function Todo({data:filter,entity})  {
    return (
      <div>
          <h1>{entity}</h1>
        <hr />
        {filter.length > 0 &&
          filter.map(({ title }) => {
            return (
              <>
                <h1 style={{ border: "1px solid black", padding: "8px" }}>
                  {title}
                </h1>
              </>
            );
          })}
      </div>
    );
  }

export default Todo