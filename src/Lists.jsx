import React from 'react'

const Lists = () => {

    const users = [
        {name: "isaac", age: 21},
        {name: "peter", age: 11},
        {name: "lukas", age: 20},
        {name: "pietro", age: 41},

    ];
  return (
    <div>
        {users.map((user, key)=> {
            return <div>
                {user.name}{user.age}
            </div>
        })}
    </div>
  )
}

export default Lists