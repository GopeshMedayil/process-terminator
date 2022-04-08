import styled from 'styled-components';

const Heading = styled.div`
    font-size: 1.5em;
    text-align: center;
    color: black;
    background: violet;
    margin:0 auto;
  `;
const Header = () => {

    return (
        <>
            <Heading>
                <div>Process Terminator</div>
            </Heading>
        </>
    );


};

export default Header;

