import React from "react";

function JSXExamples() {

    const greeting = <h1>Hello, React with JSX!!!</h1>
    const name = 'ณิชาภัทร';
    const age = 25;

    const currentYear = new Date().getFullYear();

    const user = {
        firstName: 'ณิชาภัทร',
        lastName: 'พลพวก',
        age: 21,
        hobbies: ['เล่นเกม', 'ฟังเพลง']
    };

    const formatName = (user) => {
        return `${user.firstName} ${user.lastName}`;

    }

    const isLoggedIn = true;
    const hasNotification = 3;

    return (
        <div className="jsx-examples">
            <h1>JSX Example</h1>

            <section>
                <h2>การแสดงผล</h2>
                {greeting}
                <p>สวัสดีคุณ {name} อายุ {age} ปี</p>
                <p>นี่คือปี {currentYear}</p>
                <p>ชื่อจริง: {formatName(user)}</p>
            </section>

            <section>
                <h2>Attributes ใน JSX</h2>
                <div className="card">
                    <p className="text-primary">ใช้ ClassName แทน class</p>
                </div>
                <button
                    onClick={() => alert('Button Clicked!')}
                    onMouseEnter={() => console.log('Mouse Entered!')}
                >
                    Hover me or Click me!
                </button>
                <section />

                <div style={{
                    backgroundColor: '#E8F5E8',
                    padding: '15px',
                    borderRadius: '8px',
                    marginTop: '10px'
                }}>
                    <p style={{ color: '#2D4A2B', fontWeight: 'bold' }}>
                        Inline styles ใช้ object
                    </p>
                </div>
            </section>

            <section>
                <h2>🔀 Conditional Rendering</h2>

                {/* ใช้ ternary operator */}
                <p>
                    สถานะ: {isLoggedIn ? '✅ ล็อกอินแล้ว' : '❌ ยังไม่ได้ล็อกอิน'}
                </p>

                {/* ใช้ && operator */}
                {hasNotification > 0 && (
                    <div className="notification">
                        🔔 คุณมี {hasNotification} การแจ้งเตือนใหม่
                    </div>
                )}

                {/* ใช้ if-else ผ่าน function */}
                {(() => {
                    if (user.age >= 18) {
                        return <p>✅ {formatName(user)} เป็นผู้ใหญ่แล้ว</p>;
                    } else {
                        return <p>👶 {formatName(user)} ยังเป็นเด็ก</p>;
                    }
                })()}
            </section>


        </div>

    )
}
export default JSXExamples;