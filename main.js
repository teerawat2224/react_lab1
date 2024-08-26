function App() {
    // const genRandom = () => Math.floor(Math.random() * 100);
    const firstName = 'teerwat'
    const lastName = 'Booonpoom'
    const st1 = { color: 'red', backgroundColor: 'lime' };
    const currentYear = new Date().getFullYear();
    const age = currentYear - 1999;
    // const currentTime = new Date().toTimeString();
    const h1Style = {color: 'red'}
    const pStyle = {color: 'green'}
    
    return (
        <div style={{ padding: '20px' }}>
            <h1 style={h1Style}>
                ชื่อ: {firstName} {lastName} 
            </h1>
            <p style={pStyle}>22: {age} 1999</p>
        </div>
    );
}

ReactDOM.createRoot(document.querySelector('#root'))
.render(<App />);
