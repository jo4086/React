function Quiz04_sol(props) {
    const { major, grade, start } = props
    return (
        <div>
            <h2>{major} 성적</h2>
            <h3>개강여부: {start.toString()}</h3>
            <ul>
                <li>{grade[0]}</li>
                <li>{grade[1]}</li>
                <li>{grade[2]}</li>
                <li>{grade[3]}</li>
                <li>{grade[4]}</li>
                <li>{grade[5]}</li>
            </ul>
        </div>
    )
}

export default Quiz04_sol