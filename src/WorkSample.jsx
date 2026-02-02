export default function WorkSample({ year, experience }) {
    const mystyle = {
        color: "red",
        backgroundColor: "yellow",
        padding: "10px",
        borderRadius: "5px",
        marginBottom: "10px"
    }
    return (
        <div style={mystyle}>
            <h2>Work Sample</h2>
            <p>This is a work sample component.</p>
            <p>Year: {year}</p>
            <p>Experience: {experience}</p>
        </div>
    )
}