import React from 'react';

const AdminList = (props) => {

  const adminsList = props.admins.map(admin => {
    return <li key={admin.id}>{admin.name}</li>;
  });

  return (
    <div>
      <h3>Protected list of admins</h3>
      <ul>{adminsList}</ul>
    </div>
  );
}

export default AdminList;
