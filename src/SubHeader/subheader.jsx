
const subheaderHeader = {
    paddingLeft: '20px',
    color: 'red',
    paddingTop: '15px',
}
const subheaderSpan = {
    background: 'lightgrey',
    padding: '4px',
    borderRadius: '5px'
}



export const SubHeader = () => {

    return (
        <>
            <div style={subheaderHeader}>
                <span style={subheaderSpan}>
                    Уважаемые участники, во время вашего хода вы можете изменять параметры торгов, указаных в таблице:
                </span>
            </div>
        </>

    );

}