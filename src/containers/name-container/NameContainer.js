import RandomName from '../../components/random-name/RandomName'
const NameContainer = ({ randomName, isLoading, error }) => {
    
    isLoading && <h1>Loading</h1>
    error && <h1>Uh oh Spaghettio's!</h1>
    const {firstName, lastName} = randomName;
    return (
        <div className="flex__container--column" >
            <RandomName firstName={firstName} lastName={lastName} />
        </div>
    );
}

export default NameContainer;