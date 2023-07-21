const Total = (props) => {
    const start = 0;

    const total = props.parts.reduce((accumulator, currentValue) => accumulator + currentValue.exercises, start)
    return (
        <p>Number of exercises {total}</p>
    )
}

export default Total