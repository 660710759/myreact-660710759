import React from 'react';


// Component ย่อยๆ
const Avatar = () => (
    <img 
        src="p1.png" 
        alt="photo"
        style={{
            borderRadius: '50%',
            width: '100px',
            height: '100px',
            border: '2px solid #07521bff'
        }}
    />
);

const UserName = () => (
    <h3 style={{ color: '#17694aff', margin: '10px 0' }}>
        660710759 ณิชาภัทร พลพวก
    </h3>
);

const UserBio = () => (
    <p style={{ color: '#161616ff', fontSize: '14px' }}>
        นักศึกษาสาขาเทคโนโลยีสารสนเทศ มหาวิทยาลัยศิลปากร
    </p>
);

// Component หลักที่ประกอบจาก components ย่อย
const UserCard = () => {
    return (
        <div style={{
            border: '1px solid #ddd',
            padding: '20px',
            borderRadius: '12px',
            textAlign: 'center',
            backgroundColor: '#f9f9f9',
            maxWidth: '300px',
            margin: '20px auto'
        }}>
            <Avatar />
            <UserName />
            <UserBio />
        </div>
    );
};

export default UserCard;